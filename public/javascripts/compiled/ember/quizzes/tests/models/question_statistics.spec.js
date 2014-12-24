(function() {
  define(['ember', 'ember-qunit', '../start_app', '../environment_setup'], function(Em, emq, startApp) {
    var App, run, subject;

    run = Em.run;
    App = null;
    subject = null;
    module('QuestionStatistics', {
      setup: function() {
        App = startApp();
        return run(function() {
          var store;

          store = App.__container__.lookup('store:main');
          subject = store.createRecord('question_statistics');
          return subject.set('quizStatistics', store.createRecord('quiz_statistics', {
            submissionStatistics: {}
          }));
        });
      },
      teardown: function() {
        return run(App, 'destroy');
      }
    });
    test('should run', function() {
      return ok(true);
    });
    test('#answerSets: it wraps _data.answer_sets as Ember.Objects', function() {
      subject.set('_data.answer_sets', [{}]);
      return ok(subject.get('answerSets.firstObject') instanceof Em.Object, 'it wraps objects');
    });
    return test('#ratioCalculator: it builds the ratio calculator', function() {
      return equal(subject.get('ratioCalculator.ratio'), 0);
    });
  });

}).call(this);
