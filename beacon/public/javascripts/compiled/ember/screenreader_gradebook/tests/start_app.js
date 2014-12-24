(function() {
  define(['../main'], function(Application) {
    var startApp;

    return startApp = function() {
      var App;

      App = null;
      Ember.run.join(function() {
        App = Application.create({
          LOG_ACTIVE_GENERATION: true,
          LOG_MODULE_RESOLVER: true,
          LOG_TRANSITIONS: true,
          LOG_TRANSITIONS_INTERNAL: true,
          LOG_VIEW_LOOKUPS: true,
          rootElement: '#fixtures'
        });
        App.Router.reopen({
          history: 'none'
        });
        App.setupForTesting();
        return App.injectTestHelpers();
      });
      window.App = App;
      return App;
    };
  });

}).call(this);
