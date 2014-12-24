(function() {
  define(['ember', '../start_app', '../environment_setup'], function(Ember, startApp, env) {
    var App, subject;

    App = null;
    subject = null;
    module('Quiz Report Adapter', {
      setup: function() {
        App = startApp();
        return subject = App.__container__.lookup('adapter:quizReport');
      },
      teardown: function() {
        return Ember.run(App, 'destroy');
      }
    });
    return test('it uses the report URL', function() {
      var url;

      Ember.run(function() {
        var store;

        store = App.__container__.lookup('store:main');
        return store.push('quizReport', {
          id: '14',
          url: '/api/v1/courses/1/quizzes/1/reports/14'
        });
      });
      url = subject.buildURL('quizReport', 14);
      return ok(url.match('/api/v1/courses/1/quizzes/1/reports/14'));
    });
  });

}).call(this);
