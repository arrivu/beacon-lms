(function() {
  define(['../start_app', 'ember', '../shared_ajax_fixtures'], function(startApp, Ember, fixtures) {
    var App, quizSerializer, run, store;

    quizSerializer = null;
    run = Ember.run;
    store = null;
    App = null;
    module("QuizSerializer", {
      setup: function() {
        fixtures.create();
        App = startApp();
        return run(function() {
          return store = App.__container__.lookup('store:main');
        });
      },
      teardown: function() {
        return run(function() {
          return App.destroy();
        });
      }
    });
    return asyncTest("can fix assignment_overrides in extractArray", function() {
      return run(function() {
        return store.find('quiz', 1).then(function(quiz) {
          start();
          return ok(quiz.get('assignmentOverrides.length') > 0);
        });
      });
    });
  });

}).call(this);
