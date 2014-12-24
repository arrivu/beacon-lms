(function() {
  define(['ember', 'compiled/handlebars_helpers'], function(Ember, Handlebars) {
    return Ember.Application.extend({
      rootElement: '#content'
    });
  });

}).call(this);
