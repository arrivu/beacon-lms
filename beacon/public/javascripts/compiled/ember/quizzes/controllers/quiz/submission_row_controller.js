(function() {
  define(['ember', '../../shared/seconds_to_time', '../../shared/environment', 'i18n!quizzez_submission_row', '../../mixins/submission_time'], function(Em, formatSeconds, env, I18n, SubmissionTime) {
    return Em.ObjectController.extend(SubmissionTime, {
      needs: ['quiz', 'quiz_moderate'],
      allowedAttempts: Ember.computed.alias('quizSubmission.quiz.allowedAttempts'),
      multipleAttemptsAllowed: Ember.computed.alias('quizSubmission.quiz.multipleAttemptsAllowed'),
      keptScore: Ember.computed.alias('quizSubmission.keptScore'),
      quizPointsPossible: Ember.computed.alias('quizSubmission.quizPointsPossible'),
      hasActiveSubmission: Ember.computed.bool('quizSubmission.startedAt'),
      quiz: Ember.computed.alias('controllers.quiz.model'),
      okayToReload: Ember.computed.bool('controllers.quiz_moderate.okayToReload'),
      selected: false,
      attempts: (function() {
        if (!this.get('hasActiveSubmission')) {
          return;
        }
        return this.get('quizSubmission.attempt');
      }).property('quizSubmission.attempt'),
      friendlyScore: (function() {
        var score;

        if (this.get('isActive') || (!this.get('keptScore') && this.get('keptScore') !== 0)) {
          return;
        }
        score = Math.round(this.get('keptScore') * 100) / 100;
        return "" + score + " / " + (this.get('quizPointsPossible'));
      }).property('keptScore', 'quizPointsPossible', 'isActive'),
      remainingAttempts: (function() {
        var extra, remaining;

        if (this.get('unlimitedAttempts')) {
          return;
        }
        if (!this.get('hasActiveSubmission')) {
          remaining = this.get('quiz.allowedAttempts');
        } else {
          remaining = parseInt(this.get('allowedAttempts'), 10) - parseInt(this.get('attempts'), 10);
        }
        extra = this.get('quizSubmission.extraAttempts');
        if (extra) {
          remaining += parseInt(extra, 10);
        }
        return Math.max(remaining, 0);
      }).property('attempts', 'allowedAttempts', 'mulitpleAttemptsAllowed', 'unlimitedAttempts', 'quizSubmission.extraAttempts'),
      remainingStatusLabel: (function() {
        if (this.get('unlimitedAttempts')) {
          return I18n.t('unlimited', 'Unlimited');
        } else {
          return '';
        }
      }).property('unlimitedAttempts'),
      extraTimeAllowed: (function() {
        return this.get('quizSubmission.extraTime') && this.get('quizSubmission.extraTime') > 0;
      }).property('quizSubmission.extraTime'),
      extraTimeOnAttempt: (function() {
        return I18n.t('gets_extra_minutes', 'gets %{num} extra minutes on each attempt', {
          num: this.get('quizSubmission.extraTime')
        });
      }).property('quizSubmission.extraTime'),
      unlimitedAttempts: (function() {
        return this.get('quiz.multipleAttemptsAllowed') && this.get('quiz.allowedAttempts') === -1;
      }).property('quiz.multipleAttemptsAllowed', 'quiz.allowedAttempts'),
      historyLink: (function() {
        var courseId, partial, quizId;

        if (!this.get('quizSubmission.id')) {
          return null;
        }
        partial = "history?quiz_submission_id=" + (this.get('quizSubmission.id'));
        quizId = this.get('controllers.quiz.model.id');
        courseId = env.get('courseId');
        return "/courses/" + courseId + "/quizzes/" + quizId + "/" + partial;
      }).property('quizSubmission.id'),
      extendable: (function() {
        var endAt, hourAgo, now;

        endAt = this.get("quizSubmission.endAt");
        now = new Date();
        hourAgo = now.setHours(now.getHours() - 1);
        return this.get("quizSubmission.isUntaken") && this.get("quiz.timeLimit") && endAt && endAt > hourAgo;
      }).property('quizSubmission.isUntaken', 'quiz.timeLimit', 'quizSubmission.endAt')
    });
  });

}).call(this);
