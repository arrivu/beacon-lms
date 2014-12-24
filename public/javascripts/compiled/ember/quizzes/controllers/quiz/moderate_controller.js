(function() {
  define(['ember', 'ic-ajax', 'i18n!quiz_moderate'], function(Em, ajax, I18n) {
    var INITIAL_REFRESH_MS, LATER_REFRESH_MS, QuizModerateController;

    INITIAL_REFRESH_MS = 60000;
    LATER_REFRESH_MS = 180000;
    QuizModerateController = Em.ArrayController.extend({
      headerChecked: false,
      reloading: false,
      okayToReload: true,
      setupAutoReload: (function() {
        return Ember.run.later(this, this.triggerReload, INITIAL_REFRESH_MS);
      }).on('init'),
      triggerReload: function() {
        this.send('refreshData');
        return Ember.run.later(this, this.triggerReload, LATER_REFRESH_MS);
      },
      checkedStudents: (function() {
        return this.filterProperty('isChecked', true);
      }).property('@each.isChecked'),
      allChecked: (function(key, value) {
        if (value === void 0) {
          return !!this.get('length') && this.everyProperty('isChecked', true);
        } else {
          return this.setEach('isChecked', value);
        }
      }).property('@each.isChecked'),
      changeExtensionFor: (function() {
        return I18n.t('change_extension_for', "Change extension for %{num} Students", {
          num: this.get("checkedStudents.length")
        });
      }).property('checkedStudents'),
      studentsHaveTakenQuiz: (function() {
        var complete, total;

        complete = this.filterProperty('quizSubmission.isComplete', true).get("length");
        total = this.get("length");
        return I18n.t('students_have_taken', '%{complete} of %{total} students have completed this quiz', {
          complete: complete,
          total: total
        });
      }).property('@each.quizSubmission.isComplete')
    });
    return QuizModerateController;
  });

}).call(this);
