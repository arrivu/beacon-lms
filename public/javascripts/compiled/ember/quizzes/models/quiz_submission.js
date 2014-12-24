(function() {
  define(['ember', 'ember-data'], function(Em, DS) {
    var Model, QuizSubmission, alias, any, attr, belongsTo, computed, equal, hasMany, _ref;

    _ref = Em.computed, alias = _ref.alias, equal = _ref.equal, any = _ref.any;
    computed = Em.computed;
    belongsTo = DS.belongsTo, hasMany = DS.hasMany, Model = DS.Model, attr = DS.attr;
    return QuizSubmission = Model.extend({
      user: belongsTo('user', {
        async: false
      }),
      quiz: belongsTo('quiz', {
        async: false
      }),
      attempt: attr('number'),
      endAt: attr('date'),
      extraAttempts: attr('number'),
      extraTime: attr(),
      manuallyUnlocked: attr(),
      finishedAt: attr(),
      fudgePoints: attr(),
      htmlUrl: attr(),
      keptScore: attr(),
      quizPointsPossible: attr(),
      quizVersion: attr(),
      score: attr(),
      scoreBeforeRegrade: attr(),
      startedAt: attr('date'),
      timeSpent: attr(),
      validationToken: attr(),
      workflowState: attr(),
      questionsRegradedSinceLastAttempt: attr(),
      isCompleted: computed.or('isPendingReview', 'isComplete'),
      isComplete: equal('workflowState', 'complete'),
      isPendingReview: equal('workflowState', 'pending_review'),
      isUntaken: equal('workflowState', 'untaken'),
      attemptsLeft: attr()
    });
  });

}).call(this);
