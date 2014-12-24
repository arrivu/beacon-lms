(function() {
  define(['i18n!grading_cell', 'compiled/gradebook2/GRADEBOOK_TRANSLATIONS', 'underscore', 'ember', 'jquery', 'jquery.ajaxJSON'], function(I18n, GRADEBOOK_TRANSLATIONS, _, Ember, $) {
    var GradingCellComponent;

    return GradingCellComponent = Ember.Component.extend({
      value: null,
      isPoints: Ember.computed.equal('assignment.grading_type', 'points'),
      isPercent: Ember.computed.equal('assignment.grading_type', 'percent'),
      isLetterGrade: Ember.computed.equal('assignment.grading_type', 'letter_grade'),
      isPassFail: Ember.computed.equal('assignment.grading_type', 'pass_fail'),
      nilPointsPossible: Ember.computed.none('assignment.points_possible'),
      isGpaScale: Ember.computed.equal('assignment.grading_type', 'gpa_scale'),
      passFailGrades: [
        {
          label: I18n.t("grade_ungraded", "Ungraded"),
          value: "-"
        }, {
          label: I18n.t("grade_complete", "Complete"),
          value: "complete"
        }, {
          label: I18n.t("grade_incomplete", "Incomplete"),
          value: "incomplete"
        }
      ],
      outOfText: (function() {
        if (this.get('isGpaScale')) {
          return "";
        } else if (this.get('isLetterGrade') || this.get('isPassFail')) {
          return I18n.t("out_of_with_score", "(%{score} out of %{points})", {
            points: this.assignment.points_possible,
            score: this.get('score')
          });
        } else if (this.get('nilPointsPossible')) {
          return I18n.t("out_of_nil", "No points possible");
        } else {
          return I18n.t("out_of", "(out of %{points})", {
            points: this.assignment.points_possible
          });
        }
      }).property('submission.score', 'assignment'),
      changeGradeURL: function() {
        return ENV.GRADEBOOK_OPTIONS.change_grade_url;
      },
      saveURL: (function() {
        var submission;

        submission = this.get('submission');
        return this.changeGradeURL().replace(":assignment", submission.assignment_id).replace(":submission", submission.user_id);
      }).property('submission.assignment_id', 'submission.user_id'),
      score: (function() {
        if (this.submission.score != null) {
          return this.submission.score;
        } else {
          return ' -';
        }
      }).property('submission.score'),
      ajax: function(url, options) {
        var data, type;

        type = options.type, data = options.data;
        return $.ajaxJSON(url, type, data);
      },
      submissionDidChange: (function() {
        var newVal, _ref;

        newVal = ((_ref = this.submission) != null ? _ref.grade : void 0) != null ? this.submission.grade : '-';
        return this.set('value', newVal);
      }).observes('submission').on('init'),
      onUpdateSuccess: function(submission) {
        return this.sendAction('on-submit-grade', submission.all_submissions);
      },
      onUpdateError: function() {
        return $.flashError(GRADEBOOK_TRANSLATIONS.submission_update_error);
      },
      focusOut: function() {
        var save, submission, url, value;

        if (!(submission = this.get('submission'))) {
          return;
        }
        url = this.get('saveURL');
        value = this.$('input, select').val();
        if (this.get('isPassFail') && value === "-") {
          value = '';
        }
        if (value === submission.grade) {
          return;
        }
        save = this.ajax(url, {
          type: "PUT",
          data: {
            "submission[posted_grade]": value
          }
        });
        return save.then(this.boundUpdateSuccess, this.onUpdateError);
      },
      bindSave: (function() {
        return this.boundUpdateSuccess = _.bind(this.onUpdateSuccess, this);
      }).on('init'),
      click: function() {
        return this.$('input, select').select();
      },
      focus: function() {
        return this.$('input, select').select();
      }
    });
  });

}).call(this);
