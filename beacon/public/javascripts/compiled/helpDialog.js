(function() {
  var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  define(['i18n!help_dialog', 'jst/helpDialog', 'jquery', 'underscore', 'INST', 'str/htmlEscape', 'compiled/fn/preventDefault', 'jquery.instructure_misc_helpers', 'jqueryui/dialog', 'jquery.disableWhileLoading'], function(I18n, helpDialogTemplate, $, _, INST, htmlEscape, preventDefault) {
    var helpDialog;

    return helpDialog = {
      defaultTitle: I18n.t('Help', "Help"),
      showEmail: function() {
        return !ENV.current_user_id;
      },
      initDialog: function() {
        var _this = this;

        this.$dialog = $('<div style="padding:0; overflow: visible;" />').dialog({
          resizable: false,
          width: 400,
          title: this.defaultTitle,
          close: function() {
            return _this.switchTo('#help-dialog-options');
          }
        });
        this.$dialog.dialog('widget').delegate('a[href="#teacher_feedback"],\
                                          a[href="#create_ticket"],\
                                          a[href="#help-dialog-options"]', 'click', preventDefault(function(_arg) {
          var currentTarget;

          currentTarget = _arg.currentTarget;
          return _this.switchTo($(currentTarget).attr('href'));
        }));
        this.helpLinksDfd = $.getJSON('/help_links').done(function(links) {
          var locals;

          links = $.grep(links, function(link) {
            return _.detect(link.available_to, function(role) {
              return role === 'user' || (ENV.current_user_roles && __indexOf.call(ENV.current_user_roles, role) >= 0);
            });
          });
          locals = {
            showEmail: _this.showEmail(),
            helpLinks: links,
            url: window.location,
            contextAssetString: ENV.context_asset_string,
            userRoles: ENV.current_user_roles
          };
          _this.$dialog.html(helpDialogTemplate(locals));
          _this.initTicketForm();
          return $(_this).trigger('ready');
        });
        this.$dialog.disableWhileLoading(this.helpLinksDfd);
        return this.dialogInited = true;
      },
      initTicketForm: function() {
        var $form,
          _this = this;

        return $form = this.$dialog.find('#create_ticket').formSubmit({
          disableWhileLoading: true,
          required: function() {
            var requiredFields;

            requiredFields = ['error[subject]', 'error[comments]', 'error[user_perceived_severity]'];
            if (_this.showEmail()) {
              requiredFields.push('error[email]');
            }
            return requiredFields;
          },
          success: function() {
            _this.$dialog.dialog('close');
            return $form.find(':input').val('');
          }
        });
      },
      switchTo: function(panelId) {
        var newHeight, newPanel, newTitle, toggleablePanels,
          _this = this;

        toggleablePanels = "#teacher_feedback, #create_ticket";
        this.$dialog.find(toggleablePanels).hide();
        newPanel = this.$dialog.find(panelId);
        newHeight = newPanel.show().outerHeight();
        this.$dialog.animate({
          left: toggleablePanels.match(panelId) ? -400 : 0,
          height: newHeight
        }, {
          step: function() {
            return _this.$dialog.dialog('option', 'position', 'center');
          },
          duration: 100,
          complete: function() {
            return newPanel.find(':input').not(':disabled').first().focus();
          }
        });
        if (newTitle = this.$dialog.find("a[href='" + panelId + "'] .text").text()) {
          newTitle = $("          <a class='ui-dialog-header-backlink' href='#help-dialog-options'>            " + (I18n.t('Back', 'Back')) + "          </a>          <span>" + newTitle + "</span>        ");
        } else {
          newTitle = this.defaultTitle;
        }
        return this.$dialog.dialog('option', 'title', newTitle);
      },
      open: function() {
        if (!helpDialog.dialogInited) {
          helpDialog.initDialog();
        }
        helpDialog.$dialog.dialog('open');
        return helpDialog.initTeacherFeedback();
      },
      initTeacherFeedback: function() {
        var $form, coursesDfd, currentUserIsStudent,
          _this = this;

        currentUserIsStudent = ENV.current_user_roles && __indexOf.call(ENV.current_user_roles, 'student') >= 0;
        if (!this.teacherFeedbackInited && currentUserIsStudent) {
          this.teacherFeedbackInited = true;
          coursesDfd = $.getJSON('/api/v1/courses.json');
          $form = null;
          this.helpLinksDfd.done(function() {
            return $form = _this.$dialog.find("#teacher_feedback").disableWhileLoading(coursesDfd).formSubmit({
              disableWhileLoading: true,
              required: ['recipients[]', 'body'],
              success: function() {
                return _this.$dialog.dialog('close');
              }
            });
          });
          return $.when(coursesDfd, this.helpLinksDfd).done(function(_arg) {
            var courses, options;

            courses = _arg[0];
            options = $.map(courses, function(c) {
              return "<option value='course_" + c.id + "_admins' " + (ENV.context_id === c.id ? 'selected' : '') + ">              " + (htmlEscape(c.name)) + "            </option>";
            });
            return $form.find('[name="recipients[]"]').html(options.join(''));
          });
        }
      },
      initTriggers: function() {
        return $('.help_dialog_trigger').click(preventDefault(this.open));
      }
    };
  });

}).call(this);
