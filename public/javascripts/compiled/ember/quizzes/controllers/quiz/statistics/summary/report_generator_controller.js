(function() {
  define(['ember', 'ic-ajax', 'i18n!quiz_statistics', 'jquery.instructure_date_and_time'], function(Ember, ajax, I18n) {
    var friendlyDatetime, fudgeDateForProfileTimezone, _ref;

    _ref = Ember.$, friendlyDatetime = _ref.friendlyDatetime, fudgeDateForProfileTimezone = _ref.fudgeDateForProfileTimezone;
    return Ember.ObjectController.extend({
      isLocked: Ember.computed.alias('busy'),
      readableTypeLabel: (function() {
        if (this.get('reportType') === 'item_analysis') {
          return I18n.t('item_analysis', 'Item Analysis');
        } else {
          return I18n.t('student_analysis', 'Student Analysis');
        }
      }).property('reportType'),
      generatedAtLabel: (function() {
        return I18n.t('generated_at', 'Generated at %{date}', {
          date: friendlyDatetime(fudgeDateForProfileTimezone(this.get('file.created_at')))
        });
      }).property('file.created_at'),
      isGenerating: (function() {
        return Ember.A(['queued', 'running']).contains(this.get('progress.workflowState'));
      }).property('progress.workflowState'),
      generationStatusLabel: (function() {
        var workflowState;

        workflowState = this.get('progress.workflowState');
        if (this.get('isGenerating')) {
          return I18n.t('generating', 'Report is being generated...');
        } else if (workflowState === 'completed') {
          return I18n.t('generated', 'Report is ready.');
        } else if (workflowState === 'failed') {
          return I18n.t('generation_failed', 'Something went wrong, please try again later.');
        } else {
          return I18n.t('generatable', 'Report has never been generated.');
        }
      }).property('progress.workflowState'),
      actions: {
        generate: function() {
          var options, url,
            _this = this;

          if (this.get('isLocked')) {
            return false;
          }
          this.lock();
          url = this.get('quiz.links.quizReports');
          options = {
            type: 'POST',
            data: {
              quiz_report: {
                report_type: this.get('reportType'),
                includes_all_versions: true
              }
            }
          };
          this.autoDownload = true;
          return ajax.raw(url, options).then(function(reportGenerationXHR) {
            return _this.trackProgress(reportGenerationXHR.response.progress_url);
          })["catch"](function() {
            return _this.unlock();
          });
        }
      },
      trackProgress: function(progressUrl) {
        var _this = this;

        return ajax.raw(progressUrl).then(function(progressResult) {
          _this.set('progress', _this.store.push('progress', progressResult.response));
          return _this.get('progress').trackCompletion(1000).then(function() {
            return _this.pullGeneratedReport();
          });
        })["catch"](function() {
          return _this.unlock();
        });
      },
      pullGeneratedReport: function() {
        var _this = this;

        return this.get('model').reload({
          include: ['file']
        }).then(function() {
          if (_this.autoDownload) {
            return _this.triggerDownload();
          }
        })["finally"](function() {
          return _this.unlock();
        });
      },
      triggerDownload: function() {
        return Ember.$('<iframe />', {
          style: 'display: none;',
          src: this.get('file.url')
        }).appendTo(document.body);
      },
      lock: function() {
        return this.set('busy', true);
      },
      unlock: function() {
        return this.set('busy', false);
      }
    });
  });

}).call(this);
