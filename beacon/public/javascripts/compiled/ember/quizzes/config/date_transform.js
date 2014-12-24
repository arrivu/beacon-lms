(function() {
  define(['ember', 'ember-data', 'jquery', 'jquery.instructure_date_and_time'], function(Em, DS, $) {
    var ISODateTransform;

    ISODateTransform = DS.DateTransform.extend({
      serialize: function(date) {
        if (date instanceof Date) {
          return date.toISOString();
        } else {
          return null;
        }
      }
    });
    return Em.onLoad('Ember.Application', function(Application) {
      return Application.initializer({
        after: 'transforms',
        name: 'INSTRUCTURE dateTransform',
        initialize: function(container, application) {
          return container.register('transform:date', ISODateTransform);
        }
      });
    });
  });

}).call(this);
