(function() {
  define(['ember', '../../shared/components/form_dialog_component', 'ic-lazy-list'], function(Ember, FormDialogComponent) {
    Ember.onLoad('Ember.Application', function(Application) {
      return Application.initializer({
        name: 'SharedComponents',
        initialize: function(container, application) {
          return container.register('component:form-dialog', FormDialogComponent);
        }
      });
    });
    return Ember.Application.extend({
      rootElement: '#content'
    });
  });

}).call(this);
