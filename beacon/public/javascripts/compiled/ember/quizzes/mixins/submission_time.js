(function() {
  define(['ember', '../shared/seconds_to_time', 'i18nObj'], function(Ember, secondsToTime, I18n) {
    var MS_PER_MINUTE, MS_PER_SECOND, REFRESH_DELAY, SECONDS_PER_MINUTE;

    MS_PER_SECOND = 1000;
    MS_PER_MINUTE = 60 * MS_PER_SECOND;
    SECONDS_PER_MINUTE = 60;
    REFRESH_DELAY = 1000;
    /*
    # SubmissionTime Mixin calculates various times for QuizSubmissions
    # Counts up or down for open submissions, based on quiz type
    #
    # expects host to object to have:
    #
    #   quizSubmission: QuizSubmission
    #   okayToReload: bool
    #
    */

    return Ember.Mixin.create({
      runningTime: void 0,
      timeSpent: Ember.computed.alias('quizSubmission.timeSpent'),
      timeLimit: Ember.computed.alias('quizSubmission.quiz.timeLimit'),
      endAt: Ember.computed.alias('quizSubmission.endAt'),
      dueAt: Ember.computed.alias('quizSubmission.quiz.dueAt'),
      lockAt: Ember.computed.alias('quizSubmission.quiz.lockAt'),
      isActive: (function() {
        return this.get('quizSubmission.startedAt') && !this.get('quizSubmission.finishedAt');
      }).property('quizSubmission.startedAt', 'quizSubmission.finishedAt'),
      friendlyEndsAt: (function() {
        var date;

        date = this.get('endAt');
        if (!date) {
          return;
        }
        return I18n.l('date.formats.date_at_time', date);
      }).property('endAt'),
      startStopRunningTime: (function() {
        if (this.get('isActive') && this.get('okayToReload')) {
          if (!this.get('runningTime')) {
            return Ember.run.next(this, this.updateRunningTime);
          } else {
            return Ember.run.debounce(this, this.updateRunningTime, REFRESH_DELAY);
          }
        } else {
          return this.set('runningTime', void 0);
        }
      }).observes('isActive', 'okayToReload').on('init'),
      friendlyTime: (function() {
        var timeLimit, timeSpent;

        if (!this.get('timeSpent')) {
          return;
        }
        timeLimit = this.get('timeLimit');
        timeSpent = this.get('timeSpent');
        if (timeLimit) {
          timeSpent = Math.min(timeSpent, timeLimit * SECONDS_PER_MINUTE);
        }
        return secondsToTime(timeSpent);
      }).property('timeSpent'),
      updateRunningTime: function() {
        var seconds;

        if (this.get('timeLimit')) {
          seconds = this.calcRemainingSeconds();
        } else {
          seconds = this.calcCurrentSeconds();
        }
        if (this.isTimeExpired()) {
          this.closeOutSubmission();
        }
        this.set('runningTime', secondsToTime(seconds));
        return this.startStopRunningTime();
      },
      closeOutSubmission: function() {
        this.set('quizSubmission.finishedAt', new Date().toISOString());
        return this.set('quizSubmission.timeSpent', this.calcCurrentSeconds());
      },
      calcRemainingSeconds: function() {
        var seconds;

        seconds = (new Date(this.get('endAt')).getTime() - new Date().getTime()) / MS_PER_SECOND;
        return Math.round(seconds);
      },
      calcCurrentSeconds: function() {
        var started;

        started = new Date(this.get('quizSubmission.startedAt'));
        return Math.floor((new Date() - started) / MS_PER_SECOND);
      },
      isTimeExpired: function() {
        if (!this.get('endAt')) {
          return false;
        }
        return this.calcRemainingSeconds() <= 0;
      }
    });
  });

}).call(this);
