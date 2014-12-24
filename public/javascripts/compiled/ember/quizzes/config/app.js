(function() {
  define(['ember', '../shared/environment', '../shared/util', '../../screenreader_gradebook/components/fast_select_component', '../../shared/components/ic_actions_component', '../../shared/components/ic_publish_icon_component', './date_transform'], function(Ember, env, Util, FastSelectComponent, ConfirmDialogComponent, FormDialogComponent) {
    Ember.Util = Util;
    Ember.onLoad('Ember.Application', function(Application) {
      Application.initializer({
        name: 'SharedComponents',
        initialize: function(container, application) {
          return container.register('component:fast-select', FastSelectComponent);
        }
      });
      return Application.initializer({
        name: 'environment',
        initialize: function(container, application) {
          return env.setEnv(window.ENV);
        }
      });
    });
    Ember.Inflector.inflector.irregular('progress', 'progress');
    Ember.Inflector.inflector.irregular('summaryStatistics', 'summaryStatistics');
    Ember.Inflector.inflector.uncountable('quizstatistics');
    Ember.Inflector.inflector.uncountable('questionstatistics');
    Ember.Inflector.inflector.uncountable('question_statistics');
    Ember.$.ajaxPrefilter('json', function(options, originalOptions, xhr) {
      options.dataType = 'json';
      return options.headers = {
        'Accept': 'application/vnd.api+json'
      };
    });
    return Ember.Application.extend({
      rootElement: '#content'
    });
  });

}).call(this);
