(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(['i18n!gradebook2', 'jquery', 'message_students', 'compiled/AssignmentDetailsDialog', 'compiled/AssignmentMuter', 'compiled/gradebook2/SetDefaultGradeDialog', 'compiled/gradebook2/CurveGradesDialog', 'jst/gradebook2/GradebookHeaderMenu', 'jst/re_upload_submissions_form', 'underscore', 'compiled/behaviors/authenticity_token', 'jquery.instructure_forms', 'jqueryui/dialog', 'jquery.instructure_misc_helpers', 'jquery.instructure_misc_plugins', 'compiled/jquery.kylemenu'], function(I18n, $, messageStudents, AssignmentDetailsDialog, AssignmentMuter, SetDefaultGradeDialog, CurveGradesDialog, gradebookHeaderMenuTemplate, re_upload_submissions_form, _, authenticity_token) {
    var GradebookHeaderMenu;

    return GradebookHeaderMenu = (function() {
      function GradebookHeaderMenu(assignment, $trigger, gradebook) {
        var templateLocals,
          _this = this;

        this.assignment = assignment;
        this.$trigger = $trigger;
        this.gradebook = gradebook;
        this.reuploadSubmissions = __bind(this.reuploadSubmissions, this);
        this.downloadSubmissions = __bind(this.downloadSubmissions, this);
        this.curveGrades = __bind(this.curveGrades, this);
        this.setDefaultGrade = __bind(this.setDefaultGrade, this);
        this.messageStudentsWho = __bind(this.messageStudentsWho, this);
        this.showAssignmentDetails = __bind(this.showAssignmentDetails, this);
        templateLocals = {
          assignmentUrl: "" + this.gradebook.options.context_url + "/assignments/" + this.assignment.id,
          speedGraderUrl: "" + this.gradebook.options.context_url + "/gradebook/speed_grader?assignment_id=" + this.assignment.id
        };
        if (!this.gradebook.options.speed_grader_enabled) {
          templateLocals.speedGraderUrl = null;
        }
        this.gradebook.allSubmissionsLoaded.done(function() {
          return _this.allSubmissionsLoaded = true;
        });
        this.$menu = $(gradebookHeaderMenuTemplate(templateLocals)).insertAfter(this.$trigger);
        this.$trigger.kyleMenu({
          noButton: true
        });
        this.$menu.appendTo('#gradebook_grid').delegate('a', 'click', function(event) {
          var action;

          action = _this[$(event.target).data('action')];
          if (action) {
            action();
            return false;
          }
        }).bind('popupopen popupclose', function(event) {
          _this.$trigger.toggleClass('ui-menu-trigger-menu-is-open', event.type === 'popupopen');
          if (event.type === 'popupclose' && (event.originalEvent != null) && event.originalEvent.type !== 'focusout') {
            return setTimeout((function() {
              return _this.gradebook.grid.editActiveCell();
            }), 0);
          }
        }).bind('popupopen', function() {
          var action, condition, _ref, _results;

          _ref = {
            showAssignmentDetails: _this.allSubmissionsLoaded,
            messageStudentsWho: _this.allSubmissionsLoaded,
            setDefaultGrade: _this.allSubmissionsLoaded,
            curveGrades: _this.allSubmissionsLoaded && _this.assignment.grading_type !== 'pass_fail' && _this.assignment.points_possible,
            downloadSubmissions: ("" + _this.assignment.submission_types).match(/(online_upload|online_text_entry|online_url)/) && _this.assignment.has_submitted_submissions,
            reuploadSubmissions: _this.assignment.submissions_downloads > 0
          };
          _results = [];
          for (action in _ref) {
            condition = _ref[action];
            _results.push(_this.$menu.find("[data-action=" + action + "]").showIf(condition));
          }
          return _results;
        }).popup('open');
        new AssignmentMuter(this.$menu.find("[data-action=toggleMuting]"), this.assignment, "" + this.gradebook.options.context_url + "/assignments/" + this.assignment.id + "/mute");
      }

      GradebookHeaderMenu.prototype.showAssignmentDetails = function(opts) {
        if (opts == null) {
          opts = {
            assignment: this.assignment,
            students: this.gradebook.studentsThatCanSeeAssignment(this.gradebook.students, this.assignment)
          };
        }
        return new AssignmentDetailsDialog(opts);
      };

      GradebookHeaderMenu.prototype.messageStudentsWho = function(opts) {
        var assignment, hasSubmission, options, students, submissionTypes,
          _this = this;

        if (opts == null) {
          opts = {
            assignment: this.assignment,
            students: this.gradebook.studentsThatCanSeeAssignment(this.gradebook.students, this.assignment)
          };
        }
        students = opts.students, assignment = opts.assignment;
        students = _.map(students, function(student) {
          var sub;

          sub = student["assignment_" + assignment.id];
          return {
            id: student.id,
            name: student.name,
            score: sub != null ? sub.score : void 0,
            submitted_at: sub != null ? sub.submitted_at : void 0
          };
        });
        submissionTypes = assignment.submission_types;
        hasSubmission = true;
        if (submissionTypes.length === 0) {
          hasSubmission = false;
        } else if (submissionTypes.length === 1) {
          hasSubmission = !_.include(["none", "on_paper"], submissionTypes[0]);
        }
        options = [
          {
            text: I18n.t("students_who.havent_submitted_yet", "Haven't submitted yet")
          }, {
            text: I18n.t("students_who.havent_been_graded", "Haven't been graded")
          }, {
            text: I18n.t("students_who.scored_less_than", "Scored less than"),
            cutoff: true
          }, {
            text: I18n.t("students_who.scored_more_than", "Scored more than"),
            cutoff: true
          }
        ];
        if (!hasSubmission) {
          options.splice(0, 1);
        }
        return window.messageStudents({
          options: options,
          title: assignment.name,
          points_possible: assignment.points_possible,
          students: students,
          context_code: "course_" + assignment.course_id,
          callback: function(selected, cutoff, students) {
            students = $.grep(students, function($student, idx) {
              var student;

              student = $student.user_data;
              if (selected === I18n.t("students_who.havent_submitted_yet", "Haven't submitted yet")) {
                return !student.submitted_at && (student.score == null);
              } else if (selected === I18n.t("students_who.havent_been_graded", "Haven't been graded")) {
                return student.score == null;
              } else if (selected === I18n.t("students_who.scored_less_than", "Scored less than")) {
                return (student.score != null) && student.score !== "" && (cutoff != null) && student.score < cutoff;
              } else if (selected === I18n.t("students_who.scored_more_than", "Scored more than")) {
                return (student.score != null) && student.score !== "" && (cutoff != null) && student.score > cutoff;
              }
            });
            return $.map(students, function(student) {
              return student.user_data.id;
            });
          },
          subjectCallback: function(selected, cutoff) {
            cutoff = cutoff || '';
            if (selected === I18n.t('students_who.not_submitted_yet', "Haven't submitted yet")) {
              return I18n.t('students_who.no_submission_for', 'No submission for %{assignment}', {
                assignment: assignment.name
              });
            } else if (selected === I18n.t("students_who.havent_been_graded", "Haven't been graded")) {
              return I18n.t('students_who.no_grade_for', 'No grade for %{assignment}', {
                assignment: assignment.name
              });
            } else if (selected === I18n.t('students_who.scored_less_than', "Scored less than")) {
              return I18n.t('students_who.scored_less_than_on', 'Scored less than %{cutoff} on %{assignment}', {
                assignment: assignment.name,
                cutoff: cutoff
              });
            } else if (selected === I18n.t('students_who.scored_more_than', "Scored more than")) {
              return I18n.t('students_who.scored_more_than_on', 'Scored more than %{cutoff} on %{assignment}', {
                assignment: assignment.name,
                cutoff: cutoff
              });
            }
          }
        });
      };

      GradebookHeaderMenu.prototype.setDefaultGrade = function(opts) {
        if (opts == null) {
          opts = {
            assignment: this.assignment,
            students: this.gradebook.studentsThatCanSeeAssignment(this.gradebook.students, this.assignment),
            context_id: this.gradebook.options.context_id,
            selected_section: this.gradebook.sectionToShow
          };
        }
        return new SetDefaultGradeDialog(opts);
      };

      GradebookHeaderMenu.prototype.curveGrades = function(opts) {
        if (opts == null) {
          opts = {
            assignment: this.assignment,
            students: this.gradebook.studentsThatCanSeeAssignment(this.gradebook.students, this.assignment),
            context_url: this.gradebook.options.context_url
          };
        }
        return new CurveGradesDialog(opts);
      };

      GradebookHeaderMenu.prototype.downloadSubmissions = function() {
        var url, _base, _ref;

        url = $.replaceTags(this.gradebook.options.download_assignment_submissions_url, "assignment_id", this.assignment.id);
        INST.downloadSubmissions(url);
        return this.assignment.submissions_downloads = ((_ref = (_base = this.assignment).submissions_downloads) != null ? _ref : _base.submissions_downloads = 0) + 1;
      };

      GradebookHeaderMenu.prototype.reuploadSubmissions = function() {
        var locals, url;

        if (!this.$re_upload_submissions_form) {
          locals = {
            authenticityToken: authenticity_token()
          };
          GradebookHeaderMenu.prototype.$re_upload_submissions_form = $(re_upload_submissions_form(locals)).dialog({
            width: 400,
            modal: true,
            resizable: false,
            autoOpen: false
          }).submit(function() {
            var data;

            data = $(this).getFormData();
            if (!data.submissions_zip) {
              return false;
            } else if (!data.submissions_zip.match(/\.zip$/)) {
              $(this).formErrors({
                submissions_zip: I18n.t('errors.upload_as_zip', "Please upload files as a .zip")
              });
              return false;
            }
          });
        }
        url = $.replaceTags(this.gradebook.options.re_upload_submissions_url, "assignment_id", this.assignment.id);
        return this.$re_upload_submissions_form.attr('action', url).dialog('open');
      };

      return GradebookHeaderMenu;

    })();
  });

}).call(this);
