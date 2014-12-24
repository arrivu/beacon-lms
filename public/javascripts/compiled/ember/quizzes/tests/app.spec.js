(function() {
  define(['./start_app', 'ember', 'ic-ajax'], function(startApp, Ember, ajax) {
    var App;

    App = null;
    module('Ember sanity test', {
      setup: function() {
        return App = startApp();
      },
      teardown: function() {
        return Ember.run(App, 'destroy');
      }
    });
    return test('Ember is up and running', function() {
      return ok(true);
    });
  });

}).call(this);
