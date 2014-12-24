(function() {
  define(['ember', '../../start_app', '../../environment_setup', '../../../models/question_statistics/response_ratio_calculator'], function(Ember, startApp, env, ResponseRatioCalculator) {
    var App, run, subject;

    run = Ember.run;
    App = null;
    subject = null;
    module('ResponseRatioCalculator', {
      setup: function() {
        App = startApp();
        return subject = ResponseRatioCalculator.create({
          content: {},
          quizStatistics: {}
        });
      },
      teardown: function() {
        return run(App, 'destroy');
      }
    });
    test('should run', function() {
      return ok(true);
    });
    test('#ratio: happy path', function() {
      return run(function() {
        subject.set('participantCount', 10);
        subject.set('answerPool', [
          {
            id: 1,
            responses: 0,
            correct: true
          }
        ]);
        equal(subject.get('ratio'), 0);
        subject.set('answerPool', [
          {
            id: 1,
            responses: 3,
            correct: true
          }
        ]);
        equal(subject.get('ratio'), 0.3);
        subject.set('answerPool', [
          {
            id: 1,
            responses: 10,
            correct: true
          }
        ]);
        return equal(subject.get('ratio'), 1);
      });
    });
    test('#ratio: doesnt divide by zero', function() {
      return run(function() {
        subject.set('participantCount', 0);
        subject.set('answerPool', [
          {
            id: 1,
            responses: 2,
            correct: true
          }
        ]);
        return equal(subject.get('ratio'), 0);
      });
    });
    return test('#correctMultipleAnswerRatio', function() {
      return run(function() {
        subject.set('questionType', 'multiple_answers_question');
        subject.set('correct', 1);
        subject.set('participantCount', 5);
        equal(subject.get('ratio'), 0.2);
        subject.set('participantCount', 0);
        return equal(subject.get('ratio'), 0);
      });
    });
  });

}).call(this);
