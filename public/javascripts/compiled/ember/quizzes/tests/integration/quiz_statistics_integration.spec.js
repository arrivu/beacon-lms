(function() {
  define(['ember', '../start_app', '../environment_setup', '../shared_ajax_fixtures', '../test_redirection', '../test_title'], function(Ember, startApp, env, fixtures, testRedirection, testTitle) {
    var $, App, testPage;

    App = null;
    $ = Ember.$;
    module("Quiz Statistics Integration", {
      setup: function() {
        App = startApp();
        return fixtures.create();
      },
      teardown: function() {
        return Ember.run(App, 'destroy');
      }
    });
    testPage = function(desc, callback) {
      return test(desc, function() {
        env.setUserPermissions(true, true);
        return visit('/1/statistics').then(callback);
      });
    };
    testPage('it renders', function() {
      return equal(find('#quiz-statistics').length, 1);
    });
    testPage('it loads the quiz, statistics, and question statistics', function() {
      var q, qs, route, store;

      store = App.__container__.lookup('store:main');
      route = App.__container__.lookup('route:quizStatistics');
      ok(q = route.modelFor('quiz'), 'loads the quiz');
      equal(q.get('quizReports.length'), 2, 'loads quiz reports');
      ok(qs = route.modelFor('quizStatistics'), 'loads quiz statistics');
      equal(store.all('questionStatistics').get('length'), 13, 'loads question statistics into the store');
      return equal(qs.get('questionStatistics.length'), 13, 'associates question statistics');
    });
    testRedirection({
      path: '/1/statistics',
      defaultRoute: 'quiz.statistics',
      redirectRoute: 'quiz.show'
    });
    test('it shows up empty if there are no submissions', function() {
      env.setUserPermissions(true, true);
      return visit('/3/statistics').then(function() {
        return equal(find('.erratic-statistics').length, 1);
      });
    });
    return testPage('it pre-activates an answer set for questions that have it', function() {
      return visit('/1/statistics').then(function() {
        return equal(find('.answer-set-tabs:first button:first.active').length, 1);
      });
    });
  });

}).call(this);
