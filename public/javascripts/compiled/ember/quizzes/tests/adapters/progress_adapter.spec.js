(function() {
  define(['ember', '../start_app', '../environment_setup', '../shared_ajax_fixtures', '../../adapters/progress_adapter'], function(Ember, startApp, env, fixtures, Subject) {
    var App, subject;

    App = null;
    subject = null;
    module('Quiz Report Adapter', {
      setup: function() {
        App = startApp();
        fixtures.create();
        return subject = App.__container__.lookup('adapter:progress');
      },
      teardown: function() {
        return Ember.run(App, 'destroy');
      }
    });
    return test('it builds the proper URL', function() {
      return strictEqual(subject.buildURL('progress', 1), '/api/v1/progress/1');
    });
  });

}).call(this);
