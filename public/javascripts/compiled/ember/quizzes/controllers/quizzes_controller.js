(function() {
  define(['ember', '../shared/environment', 'i18n!quizzes', '../shared/search_matcher'], function(Ember, environment, I18n, searchMatcher) {
    var QuizzesController, alias, compare, filter, filterBy, sort, _ref;

    compare = Ember.compare;
    _ref = Ember.computed, filter = _ref.filter, filterBy = _ref.filterBy, alias = _ref.alias, sort = _ref.sort;
    return QuizzesController = Ember.ArrayController.extend({
      searchFilter: '',
      searchPlaceholder: I18n.t('search_placeholder', 'Search for Quiz'),
      addQuiz: I18n.t('title_add_quiz', 'Add Quiz'),
      assignmentsLabel: I18n.t('assignments_label', 'Assignment Quizzes toggle quiz visibility'),
      practicesLabel: I18n.t('practices_label', 'Practice Quizzes toggle quiz visibility'),
      surveysLabel: I18n.t('surveys_label', 'Surveys toggle quiz visibility'),
      finishedPaginationLoading: false,
      environment: environment,
      canManage: alias('environment.canManage'),
      newQuizLink: (function() {
        return "/courses/" + (environment.get('courseId')) + "/quizzes/new?fresh=1";
      }).property('environment.courseId'),
      questionBanksUrl: (function() {
        return "/courses/" + (environment.get('courseId')) + "/question_banks";
      }).property('environment.courseId'),
      filtered: (function() {
        var _this = this;

        return this.get('arrangedContent').filter(function(quiz) {
          return searchMatcher(quiz.get('title'), _this.get('searchFilter'));
        });
      }).property('arrangedContent.[]', 'searchFilter'),
      assignments: filterBy('filtered', 'isAssignment'),
      practices: filterBy('filtered', 'isPracticeQuiz'),
      surveys: filterBy('filtered', 'isSurvey'),
      rawAssignments: filterBy('model', 'isAssignment'),
      rawPractices: filterBy('model', 'isPracticeQuiz'),
      rawSurveys: filterBy('model', 'isSurvey'),
      sortProperties: ['sortSlug'],
      sortAscending: true,
      disabledMessage: I18n.t('cant_unpublish_when_students_submit', "Can't unpublish if there are student submissions"),
      actions: {
        editBanks: function() {
          return window.location = this.get('questionBanksUrl');
        },
        "delete": function() {
          return this.get('model');
        }
      }
    });
  });

}).call(this);
