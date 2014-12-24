(function() {
  define(['ember', 'ember-data', 'i18n!quiz_model', '../shared/ic-ajax-jsonapi'], function(Em, DS, I18n, ajax) {
    var Model, PromiseObject, Quiz, alias, any, attr, belongsTo, equal, hasMany, _ref;

    _ref = Em.computed, alias = _ref.alias, equal = _ref.equal, any = _ref.any;
    belongsTo = DS.belongsTo, PromiseObject = DS.PromiseObject, hasMany = DS.hasMany, Model = DS.Model, attr = DS.attr;
    Em.onerror = function(error) {
      console.log('ERR', error, error.stack);
      throw new Ember.Error(error);
    };
    Model = DS.Model, attr = DS.attr;
    Quiz = Model.extend({
      title: attr(),
      quizType: attr(),
      links: attr(),
      assignmentId: attr(),
      htmlURL: attr(),
      editURL: (function() {
        return "" + (this.get('htmlURL')) + "/edit";
      }).property('htmlURL'),
      mobileURL: attr(),
      description: attr(),
      timeLimit: attr(),
      shuffleAnswers: attr(),
      hideResults: attr(),
      showCorrectAnswers: attr(),
      showCorrectAnswersAt: attr('date'),
      hideCorrectAnswersAt: attr('date'),
      scoringPolicy: attr(),
      oneQuestionAtATime: attr(),
      questionCount: attr(),
      sectionCount: attr(),
      accessCode: attr(),
      ipFilter: attr(),
      pointsPossible: attr(),
      published: attr(),
      deleted: attr(),
      speedGraderUrl: attr(),
      moderateUrl: attr(),
      allowedAttempts: attr('number'),
      unpublishable: attr(),
      canNotUnpublish: equal('unpublishable', false),
      lockedForUser: attr(),
      lockInfo: attr(),
      lockExplanation: attr(),
      dueAt: attr('date'),
      unlockAt: attr('date'),
      lockAt: attr('date'),
      permissions: attr(),
      canUpdate: alias('permissions.update'),
      canManage: alias('permissions.manage'),
      isAssignment: equal('quizType', 'assignment'),
      isPracticeQuiz: equal('quizType', 'practice_quiz'),
      isSurvey: any('isUngradedSurvey', 'isGradedSurvey'),
      isGradedSurvey: equal('quizType', 'graded_survey'),
      isUngradedSurvey: equal('quizType', 'survey'),
      unlimitedAllowedAttempts: equal('allowedAttempts', -1),
      multipleAttemptsAllowed: (function() {
        return this.get('allowedAttempts') !== 1;
      }).property('allowedAttempts'),
      alwaysShowResults: equal('hideResults', null),
      showResultsAfterLastAttempt: equal('hideResults', 'until_after_last_attempt'),
      assignmentGroup: belongsTo('assignment_group', {
        async: true
      }),
      tScoringPolicy: (function() {
        switch (this.get('scoringPolicy')) {
          case 'keep_highest':
            return I18n.t('keep_highest', 'Highest');
          case 'keep_latest':
            return I18n.t('keep_latest', 'Latest');
        }
      }).property('scoringPolicy'),
      tQuizType: (function() {
        switch (this.get('quizType')) {
          case 'assignment':
            return I18n.t('graded_quiz', 'Graded Quiz');
          case 'survey':
            return I18n.t('survey', 'Survey');
          case 'graded_survey':
            return I18n.t('graded_survey', 'Graded Survey');
          case 'practice_quiz':
            return I18n.t('practice_quiz', 'Practice Quiz');
        }
      }).property('quizType'),
      onlyVisibleToOverrides: attr(),
      daEnabled: ENV.FLAGS.differentiated_assignments,
      differentiatedAssignmentsApplies: Em.computed.and('daEnabled', 'onlyVisibleToOverrides'),
      quizSubmissionHtmlUrl: attr(),
      quizSubmissionVersionsHtmlUrl: attr(),
      quizStatistics: hasMany('quiz_statistics', {
        async: true
      }),
      quizReports: hasMany('quiz_report', {
        async: true
      }),
      users: hasMany('user', {
        async: true
      }),
      studentQuizSubmissions: hasMany('student_quiz_submission', {
        async: true
      }),
      sortSlug: (function() {
        var dateField, dueAt, title, _ref1;

        dateField = this.get('isAssignment') ? 'dueAt' : 'lockAt';
        dueAt = ((_ref1 = this.get(dateField)) != null ? _ref1.toISOString() : void 0) || Quiz.SORT_LAST;
        title = this.get('title') || '';
        return dueAt + title;
      }).property('isAssignment', 'dueAt', 'lockAt', 'title'),
      assignmentOverrides: hasMany('assignment_override'),
      allDates: (function() {
        var dates, overrides, title;

        dates = [];
        overrides = this.get('assignmentOverrides').toArray();
        if ((overrides.length === 0 || overrides.length !== this.get('sectionCount')) && !this.get('differentiatedAssignmentsApplies')) {
          title = overrides.length > 0 ? I18n.t('everyone_else', 'Everyone Else') : I18n.t('everyone', 'Everyone');
          dates.push(Ember.Object.create({
            lockAt: this.get('lockAt'),
            unlockAt: this.get('unlockAt'),
            dueAt: this.get('dueAt'),
            base: true,
            title: title
          }));
        }
        return Ember.A(dates.concat(overrides));
      }).property('lockAt', 'unlockAt', 'dueAt', 'sectionCount', 'assignmentOverrides.[]'),
      submittedStudents: hasMany('submitted_student', {
        polymporphic: true,
        async: true
      }),
      unsubmittedStudents: hasMany('unsubmitted_student', {
        polymorphic: true,
        async: true
      }),
      messageStudentsUrl: attr(),
      quizExtensionsUrl: attr(),
      quizSubmission: belongsTo('quiz_submission'),
      quizSubmissions: alias('studentQuizSubmissions'),
      takeable: attr(),
      takeQuizUrl: attr(),
      quizSubmissionsZipUrl: attr(),
      previewUrl: attr()
    });
    Quiz.SORT_LAST = 'ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ';
    return Quiz;
  });

}).call(this);
