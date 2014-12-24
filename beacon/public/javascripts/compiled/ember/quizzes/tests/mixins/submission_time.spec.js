(function() {
  define(['ember', '../../mixins/submission_time'], function(Ember, SubmissionTime) {
    var buildMixinUser, minutesFromNow;

    minutesFromNow = function(minutes) {
      var date;

      date = new Date(new Date().getTime() + (minutes * 60000));
      return date.toISOString();
    };
    buildMixinUser = function(startedAt, finishedAt, timeLimit, okayToReload) {
      okayToReload || (okayToReload = false);
      timeLimit || (timeLimit = void 0);
      return Ember.Object.createWithMixins(SubmissionTime, {
        okayToReload: okayToReload,
        quizSubmission: {
          startedAt: startedAt,
          finishedAt: finishedAt,
          quiz: {
            timeLimit: timeLimit
          }
        }
      });
    };
    module("SubmissionTime");
    test('isActive when startedAt but no finishedAt', function() {
      var fiveAgo, subject;

      fiveAgo = minutesFromNow(-5);
      subject = buildMixinUser(fiveAgo, void 0);
      return equal(subject.get('isActive'), true);
    });
    test('not isActive when startedAt and finishedAt', function() {
      var fiveAgo, oneAgo, subject;

      fiveAgo = minutesFromNow(-5);
      oneAgo = minutesFromNow(-1);
      subject = buildMixinUser(fiveAgo, oneAgo);
      return equal(subject.get('isActive'), false);
    });
    test('calculates current duration when not timed quiz and no finish time', function() {
      var calcCurrentSpy, fiveAgo, subject;

      fiveAgo = minutesFromNow(-5);
      subject = buildMixinUser(fiveAgo);
      calcCurrentSpy = sinon.spy(subject, 'calcCurrentSeconds');
      subject.updateRunningTime();
      return equal(calcCurrentSpy.called, true, 'uses calcCurrentSeconds, to count submission duration');
    });
    test('closeOutSubmission makes quizSubmission no longer active', function() {
      var subject, twoAgo;

      twoAgo = minutesFromNow(-2);
      subject = buildMixinUser(twoAgo, void 0, 2);
      subject.closeOutSubmission(twoAgo, 120);
      ok(!!subject.get('quizSubmission.finishedAt'), 'sets temp finishedAt time');
      return equal(subject.get('isActive'), false);
    });
    test('timed quizzes should stop counting at zero seconds left', function() {
      var now, subject, twoAgo;

      twoAgo = minutesFromNow(-2);
      now = minutesFromNow(0);
      subject = buildMixinUser(twoAgo, void 0, 2);
      subject.set('endAt', now);
      sinon.spy(subject, 'startStopRunningTime');
      subject.updateRunningTime();
      ok(!!subject.get('quizSubmission.finishedAt'), 'sets temp finishedAt time');
      equal(subject.get('quizSubmission.timeSpent'), 120);
      return equal(subject.get('isActive'), false);
    });
    test('friendlySubmissionTime returns if there isnt a started submission', function() {
      var subject, twoAgo;

      twoAgo = minutesFromNow(-2);
      subject = buildMixinUser(twoAgo);
      subject.set('hasActiveSubmission', false);
      return ok(!subject.get('friendlyTime'));
    });
    test('friendlySubmissionTime returns the lesser of time limit, and time spent', function() {
      var res, subject, twoAgo;

      twoAgo = minutesFromNow(-2);
      subject = buildMixinUser(twoAgo, void 0, 2);
      subject.set('hasActiveSubmission', true);
      subject.set('quizSubmission.timeSpent', 180);
      res = subject.get('friendlyTime');
      return equal(res, '02:00');
    });
    test('calcRemainingSeconds uses endAt to determine when a submission should end', function() {
      var res, subject, twoAgo, twoFromNow;

      twoAgo = minutesFromNow(-2);
      twoFromNow = minutesFromNow(2);
      subject = buildMixinUser(twoAgo);
      subject.set('hasActiveSubmission', true);
      subject.set('quizSubmission.endAt', twoFromNow);
      res = subject.calcRemainingSeconds();
      return equal(res, 120);
    });
    return test('isTimeExpired correctly determines if endAt has passed', function() {
      var oneAgo, subject, threeAgo, twoFromNow;

      threeAgo = minutesFromNow(-3);
      twoFromNow = minutesFromNow(-2);
      oneAgo = minutesFromNow(-1);
      subject = buildMixinUser(threeAgo, twoFromNow);
      subject.set('hasActiveSubmission', true);
      subject.set('quizSubmission.endAt', oneAgo);
      return ok(subject.isTimeExpired());
    });
  });

}).call(this);
