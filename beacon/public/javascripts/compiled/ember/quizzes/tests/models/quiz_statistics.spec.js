(function() {
  define(['ember', '../start_app', 'i18n!quizzes', '../environment_setup'], function(Em, startApp, I18n) {
    var App, run, statistics, store;

    run = Em.run;
    App = null;
    statistics = null;
    store = null;
    return module("Quiz", {
      setup: function() {
        var container;

        App = startApp();
        container = App.__container__;
        store = container.lookup('store:main');
        return run(function() {
          return statistics = store.createRecord('quiz_statistics', {
            id: '1'
          });
        });
      },
      teardown: function() {
        return run(App, 'destroy');
      }
    });
  });

}).call(this);
