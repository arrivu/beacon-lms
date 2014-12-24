(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!modules', 'jquery', 'underscore', 'Backbone', 'timezone', 'compiled/views/DialogBaseView', 'jst/gradebook2/post_grades_dialog', 'jst/gradebook2/post_grades_summary', 'jst/gradebook2/post_grades_needs_grading', 'jst/gradebook2/post_grades_ungraded_count', 'compiled/handlebars_helpers', 'compiled/jquery.rails_flash_notifications', 'jqueryui/effects/slide', 'jquery.instructure_date_and_time', 'jquery.toJSON'], function(I18n, $, _, Backbone, tz, DialogBaseView, dialog_template, summary_template, needs_grading_template, ungraded_count_template) {
    var PostGradesDialog, _ref;

    return PostGradesDialog = (function(_super) {
      __extends(PostGradesDialog, _super);

      function PostGradesDialog() {
        this.sendGradesToSISApp = __bind(this.sendGradesToSISApp, this);
        this.needsGrading = __bind(this.needsGrading, this);        _ref = PostGradesDialog.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      PostGradesDialog.prototype.initialize = function(model, sis_app_url, sis_app_token) {
        var _this = this;

        PostGradesDialog.__super__.initialize.apply(this, arguments);
        model.bind('change:assignments_to_post', function() {
          return $(".assignments_to_post_count").html(model.assignments_to_post().length);
        });
        model.bind('change:assignments_with_errors_count', function() {
          $(".assignment-error-count").html(model.get('assignments_with_errors_count'));
          if (_this.model.get('assignments_with_errors_count') === 0) {
            $('#assignment-error-text').hide();
            _this.saveAssignments();
            _this.page = "postSummary";
            return _this.render();
          } else {
            $('#assignment-error-text').show();
            $('#assignment-error-text').addClass('text-error');
            return $('#assignment-error-text').removeClass('text-info');
          }
        });
        this.model = model;
        this.sis_app_url = sis_app_url;
        this.sis_app_token = sis_app_token;
        if (this.model.missing_and_not_unique().length > 0) {
          return this.page = 'assignmentErrors';
        } else {
          return this.page = 'postSummary';
        }
      };

      PostGradesDialog.prototype.events = {
        'click #needs-grading': 'needsGrading',
        'click .ignore-assignment': 'ignoreAssignment',
        'click .clickableRow': 'goToUrl'
      };

      PostGradesDialog.prototype.dialogOptions = {
        id: 'post-grades-container',
        title: I18n.t("post_grades_dialog_title", "Post Grades to SIS"),
        maxHeight: 450,
        maxWidth: 650,
        minHeight: 450,
        minWidth: 650,
        width: 650,
        height: 450,
        resizable: false,
        buttons: []
      };

      PostGradesDialog.prototype.initDialog = function() {
        return PostGradesDialog.__super__.initDialog.apply(this, arguments);
      };

      PostGradesDialog.prototype.render = function() {
        var _this = this;

        PostGradesDialog.__super__.render.apply(this, arguments);
        if (this.model.assignments_with_errors_count() > 0) {
          this.page = "assignmentErrors";
        }
        switch (this.page) {
          case "assignmentErrors":
            this.dialog.dialog({
              buttons: [
                {
                  text: I18n.t('#buttons.ignore_all', 'Ignore All'),
                  'class': 'ignore_all',
                  click: function(e) {
                    e.preventDefault;
                    _this.model.ignore_all();
                    _this.page = 'postSummary';
                    return _this.render();
                  }
                }
              ]
            });
            this.assignmentErrorsPage();
            break;
          case "postSummary":
            this.dialog.dialog({
              buttons: [
                {
                  text: I18n.t('#button.post', 'Post Grades'),
                  'class': 'post_grades btn-primary',
                  click: function(e) {
                    e.preventDefault;
                    return _this.postGrades();
                  }
                }
              ]
            });
            this.postSummaryPage();
            break;
          case "needsGrading":
            this.dialog.dialog({
              buttons: [
                {
                  text: I18n.t('#button.go_back', 'Go Back'),
                  'class': 'go_back',
                  click: function(e) {
                    e.preventDefault;
                    _this.page = 'postSummary';
                    return _this.render();
                  }
                }
              ]
            });
            this.needsGradingPage();
        }
        this.datePicker();
        return this;
      };

      PostGradesDialog.prototype.ignoreAssignment = function(e) {
        var assignment_id;

        e.preventDefault();
        assignment_id = "" + $(e.target).closest('form').data('assignment-id');
        this.model.ignore_assignment(assignment_id);
        return $('#assignment-error-' + assignment_id).hide();
      };

      PostGradesDialog.prototype.needsGrading = function(e) {
        e.preventDefault();
        this.page = 'needsGrading';
        return this.render();
      };

      PostGradesDialog.prototype.needsGradingPage = function() {
        return this.$el.html(needs_grading_template({
          needs_grading: this.model.ungraded_submissions()
        }));
      };

      PostGradesDialog.prototype.assignmentErrorsPage = function() {
        var dialog;

        this.$el.html(dialog_template({
          assignments_to_post: this.model.assignments_to_post(),
          assignments: this.model.assignment_list(),
          missing_not_unique: this.model.missing_and_not_unique(),
          needs_grading: this.model.ungraded_submissions(),
          needs_grading_count: this.model.ungraded_submissions().length
        }));
        dialog = this;
        return $('.assignment-name', this.$el).change(function() {
          var $circle, $textbox, assignment_id, name;

          $textbox = $(this);
          $circle = $textbox.closest('.input-container').prev();
          name = $textbox.val();
          dialog.showErrorCircle($circle, name === '');
          assignment_id = parseInt($textbox.closest('form.passback-form').data('assignment-id'));
          return dialog.model.update_assignment(assignment_id, {
            name: name
          });
        });
      };

      PostGradesDialog.prototype.postSummaryPage = function() {
        this.$el.html(summary_template({
          assignments_to_post: this.model.assignments_to_post(),
          needs_grading: this.model.ungraded_submissions(),
          needs_grading_count: this.model.ungraded_submissions().length
        }));
        return this.postUngraded();
      };

      PostGradesDialog.prototype.goToUrl = function(e) {
        e.preventDefault();
        return window.location = $(e.currentTarget).data('url');
      };

      PostGradesDialog.prototype.postUngraded = function() {
        if (this.model.ungraded_submissions().length > 0) {
          return $('#ungraded_count', this.$el).html(ungraded_count_template({
            needs_grading_count: this.model.ungraded_submissions().length
          }));
        }
      };

      PostGradesDialog.prototype.showErrorCircle = function($circle, show) {
        if (show == null) {
          show = true;
        }
        if (show) {
          return $circle.addClass('data-circle-error').removeClass('data-circle-clean');
        } else {
          return $circle.addClass('data-circle-clean').removeClass('data-circle-error');
        }
      };

      PostGradesDialog.prototype.datePicker = function() {
        var dialog;

        dialog = this;
        return $('.date_field', this.$el).datetime_field().change(function() {
          var $circle, $picker, assignment_id, due_at, error_circle;

          $picker = $(this);
          due_at = $picker.data('date');
          error_circle = true;
          if (due_at != null) {
            due_at = $.unfudgeDateForProfileTimezone(due_at).toISOString();
            error_circle = false;
          }
          $circle = $picker.closest('.input-container').prev();
          dialog.showErrorCircle($circle, error_circle);
          assignment_id = parseInt($picker.closest('form.passback-form').data('assignment-id'));
          if (assignment_id != null) {
            return dialog.model.update_assignment(assignment_id, {
              due_at: due_at
            });
          } else {
            return $.flashError('Unable to save due date, assignment_id unavailable');
          }
        });
      };

      PostGradesDialog.prototype.saveAssignments = function() {
        var a, _i, _len, _ref1, _results;

        _ref1 = this.model.modified_assignments();
        _results = [];
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          a = _ref1[_i];
          _results.push(this.saveAssignmentToCanvas(a));
        }
        return _results;
      };

      PostGradesDialog.prototype.saveAssignmentToCanvas = function(assignment) {
        var data, url;

        url = '/api/v1/courses/' + this.model.get('course_id') + '/assignments/' + assignment.id;
        data = {
          assignment: {
            name: assignment.name,
            due_at: assignment.due_at
          }
        };
        return $.ajax(url, {
          type: 'PUT',
          data: JSON.stringify(data),
          contentType: 'application/json; charset=utf-8',
          error: function(err) {
            return $.flashError('An error occurred saving assignment (' + assignment.id + '). ' + "HTTP Error " + data.status + " : " + data.statusText);
          }
        });
      };

      PostGradesDialog.prototype.sendGradesToSISApp = function(grades_json, url) {
        return $.ajax(url, {
          type: 'POST',
          data: JSON.stringify(grades_json),
          headers: {
            'Authorization': this.sis_app_token
          },
          contentType: 'application/json; charset=utf-8',
          error: function(data) {
            return $.flashError('An error occurred posting your grades. ' + "HTTP Error " + data.status + " : " + data.statusText);
          },
          success: function(data) {
            return $.flashMessage('Assignments are being posted.');
          }
        });
      };

      PostGradesDialog.prototype.postGrades = function() {
        var json_to_post, url;

        json_to_post = {};
        json_to_post['canvas_domain'] = document.location.origin;
        json_to_post['assignments'] = _.map(this.model.get('assignments_to_post'), function(assignment) {
          return assignment.id;
        });
        if (this.model.get('section_id')) {
          json_to_post['section_id'] = this.model.get('integration_section_id');
          url = this.sis_app_url + '/grades/section/' + this.model.get('integration_section_id');
          this.sendGradesToSISApp(json_to_post, url);
          return this.close();
        } else if (this.model.get('integration_course_id')) {
          json_to_post['course_id'] = this.model.get('integration_course_id');
          url = this.sis_app_url + '/grades/course/' + this.model.get('integration_course_id');
          this.sendGradesToSISApp(json_to_post, url);
          return this.close();
        } else {
          $.flashError("Grades can't be posted because this course or section was not imported from your SIS.");
          return this.close();
        }
      };

      return PostGradesDialog;

    })(DialogBaseView);
  });

}).call(this);
