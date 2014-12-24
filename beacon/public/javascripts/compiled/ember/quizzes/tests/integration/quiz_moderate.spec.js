(function() {
  define(['ember', '../start_app', '../shared_ajax_fixtures', '../environment_setup', '../test_redirection', '../test_title'], function(Ember, startApp, fixtures, env, testRedirection, testTitle) {
    return module("Quiz Moderate: Integration", {
      setup: function() {
        var App;

        App = startApp();
        return fixtures.create();
      },
      teardown: function() {
        return Ember.run(App, 'destroy');
      }
    });
  });

}).call(this);
