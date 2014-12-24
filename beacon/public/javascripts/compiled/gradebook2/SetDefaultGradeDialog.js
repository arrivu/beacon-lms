(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __slice = [].slice;

  define(['i18n!gradebook2', 'jquery', 'jst/SetDefaultGradeDialog', 'underscore', 'jquery.disableWhileLoading', 'jquery.instructure_forms', 'jqueryui/dialog', 'jquery.instructure_misc_plugins', 'vendor/jquery.ba-tinypubsub', 'compiled/jquery/fixDialogButtons', 'jst/_grading_box'], function(I18n, $, setDefaultGradeDialogTemplate, _) {
    var PAGE_SIZE, SetDefaultGradeDialog;

    PAGE_SIZE = 50;
    return SetDefaultGradeDialog = (function() {
      function SetDefaultGradeDialog(_arg) {
        this.assignment = _arg.assignment, this.students = _arg.students, this.context_id = _arg.context_id, this.selected_section = _arg.selected_section;
        this.initDialog = __bind(this.initDialog, this);
        this.initDialog();
      }

      SetDefaultGradeDialog.prototype.initDialog = function() {
        var $form, getParams, getStudents, getSubmissions, templateLocals,
          _this = this;

        templateLocals = {
          assignment: this.assignment,
          showPointsPossible: (this.assignment.points_possible || this.assignment.points_possible === '0') && this.assignment.grading_type !== "gpa_scale",
          url: "/courses/" + this.context_id + "/gradebook/update_submission",
          inputName: 'default_grade'
        };
        templateLocals["assignment_grading_type_is_" + this.assignment.grading_type] = true;
        this.$dialog = $(setDefaultGradeDialogTemplate(templateLocals));
        this.$dialog.dialog({
          resizable: false,
          width: 350,
          open: function() {
            return _this.$dialog.find(".grading_box").focus();
          },
          close: function() {
            return _this.$dialog.remove();
          }
        }).fixDialogButtons();
        $form = this.$dialog;
        $form.submit(function(e) {
          var formData, pages, postDfds, students, submittingDfd;

          e.preventDefault();
          submittingDfd = $.Deferred();
          $form.disableWhileLoading(submittingDfd);
          formData = $form.getFormData();
          students = getStudents();
          pages = ((function() {
            var _results;

            _results = [];
            while (students.length) {
              _results.push(students.splice(0, PAGE_SIZE));
            }
            return _results;
          })());
          postDfds = pages.map(function(page) {
            var params, studentParams;

            studentParams = getParams(page, formData.default_grade);
            params = _.extend({}, studentParams, {
              dont_overwrite_grades: !formData.overwrite_existing_grades
            });
            return $.ajaxJSON($form.attr("action"), "POST", params);
          });
          return $.when.apply($, postDfds).then(function() {
            var responses, submissions;

            responses = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
            if (postDfds.length === 1) {
              responses = [responses];
            }
            submissions = getSubmissions(responses);
            $.publish('submissions_updated', [submissions]);
            alert(I18n.t('alerts.scores_updated', {
              one: '1 Student score updated',
              other: '%{count} Student scores updated'
            }, {
              count: submissions.length
            }));
            submittingDfd.resolve();
            return _this.$dialog.remove();
          });
        });
        getStudents = function() {
          if (_this.selected_section) {
            return _(_this.students).filter(function(s) {
              return _.include(s.sections, _this.selected_section);
            });
          } else {
            return _(_this.students).values();
          }
        };
        getParams = function(page, grade) {
          return _.chain(page).map(function(s) {
            var prefix;

            prefix = "submissions[submission_" + s.id + "]";
            return [["" + prefix + "[assignment_id]", _this.assignment.id], ["" + prefix + "[user_id]", s.id], ["" + prefix + "[grade]", grade]];
          }).flatten(true).object().value();
        };
        return getSubmissions = function(responses) {
          return _.chain(responses).map(function(_arg) {
            var response, s, __;

            response = _arg[0], __ = _arg[1];
            return [
              (function() {
                var _i, _len, _results;

                _results = [];
                for (_i = 0, _len = response.length; _i < _len; _i++) {
                  s = response[_i];
                  _results.push(s.submission);
                }
                return _results;
              })()
            ];
          }).flatten().value();
        };
      };

      return SetDefaultGradeDialog;

    })();
  });

}).call(this);
