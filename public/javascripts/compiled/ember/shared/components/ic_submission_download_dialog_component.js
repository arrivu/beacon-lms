(function() {
  define(['i18n!submissions', 'ember', '../register', '../templates/components/ic-submission-download-dialog', 'jqueryui/progressbar', 'jqueryui/dialog'], function(I18n, Ember, register) {
    return register('component', 'ic-submission-download-dialog', Ember.Component.extend({
      isOpened: false,
      isChecking: true,
      attachment: {},
      percentComplete: 0,
      hideIndicator: Ember.computed.not('isChecking'),
      showFileLink: Ember.computed.equal('status', 'finished'),
      sizeOfFile: Ember.computed.alias('attachment.readable_size'),
      dialogTitle: I18n.t('download_submissions_title', 'Download Assignment Submissions'),
      bindFunctions: (function() {
        this.reviewProgress = this.reviewProgress.bind(this);
        this.progressError = this.progressError.bind(this);
        return this.checkForChange = this.checkForChange.bind(this);
      }).on('init'),
      status: (function() {
        if (this.fileReady()) {
          return 'finished';
        } else if (this.get('percentComplete') >= 95) {
          return 'zipping';
        } else {
          return 'starting';
        }
      }).property('attachment', 'percentComplete', 'isOpened'),
      progress: (function() {
        var attachment, new_val, state;

        attachment = this.get('attachment');
        new_val = 0;
        if (attachment && this.fileReady()) {
          new_val = 100;
        } else if (attachment) {
          new_val = this.get('percentComplete');
          if (this.get('percentComplete') < 95) {
            new_val += 5;
          }
          state = parseInt(this.get('attachment.file_state'));
          if (isNaN(state)) {
            new_val = 0;
          }
        }
        return this.set('percentComplete', new_val);
      }).observes('attachment'),
      keepChecking: (function() {
        if (!(this.get('percentComplete') === 100 || !this.get('isOpened'))) {
          return true;
        }
      }).property('percentComplete', 'isOpened'),
      url: (function() {
        return "" + (this.get('assignmentUrl')) + "/submissions?zip=1";
      }).property('assignmentUrl'),
      statusText: (function() {
        switch (this.get('status')) {
          case 'starting':
            return I18n.t('gathering_files', "Gathering Files (%{progress})...", {
              progress: I18n.toPercentage(this.get('percentComplete'), {
                precision: 0
              })
            });
          case 'zipping':
            return I18n.t("creating_zip", "Creating zip file...");
          case 'finished':
            return I18n.t("finished_redirecting", "Finished!  Redirecting to File...");
        }
      }).property('status', 'percentComplete'),
      updateProgressBar: (function() {
        return this.$("#submissions_download_dialog #progressbar").progressbar({
          value: this.get('percentComplete')
        });
      }).observes('percentComplete'),
      downloadCompletedFile: (function() {
        if (this.get('percentComplete') === 100) {
          return location.href = this.get('url');
        }
      }).observes('percentComplete'),
      resetAttachment: (function() {
        return this.set('attachment', null);
      }).observes('isOpened'),
      setDimensions: (function() {
        if (this.get('isOpened')) {
          return this.$('.ui-widget-overlay').css({
            height: $(window).height() + "px",
            width: $(window).width() + "px"
          });
        }
      }).observes('isOpened'),
      setPosition: (function() {
        if (this.get('isOpened')) {
          return this.$('.ui-dialog').css({
            top: ($(window).height() / 2) - (this.$('.ui-dialog').height() / 2) + "px",
            left: ($(window).width() / 2) - (this.$('.ui-dialog').width() / 2) + "px"
          });
        }
      }).observes('isOpened'),
      closeOnEsc: (function(event) {
        if (event.keyCode === 27) {
          return this.close();
        }
      }).on('keyDown'),
      actions: {
        openDialog: function() {
          this.set('isOpened', true);
          this.$("#submissions_download_dialog .ui-dialog").focus();
          this.updateProgressBar();
          return this.checkForChange();
        },
        closeDialog: function() {
          return this.close();
        }
      },
      close: function() {
        this.set('isOpened', false);
        return this.$("#submissions_download_button").focus();
      },
      fileReady: function() {
        var state;

        state = this.get('attachment.workflow_state');
        return state === 'zipped' || state === 'available';
      },
      checkForChange: function() {
        this.set('isChecking', true);
        return $.ajaxJSON(this.get('url'), 'GET', {}, this.reviewProgress, this.progressError);
      },
      reviewProgress: function(data) {
        this.set('isChecking', false);
        this.set('attachment', data.attachment);
        return this.setCheckTimeOut(3000);
      },
      progressError: function() {
        this.set('isChecking', false);
        return this.setCheckTimeOut(1000);
      },
      setCheckTimeOut: function(time) {
        if (this.get('keepChecking')) {
          return setTimeout(this.checkForChange, time);
        }
      }
    }));
  });

}).call(this);
