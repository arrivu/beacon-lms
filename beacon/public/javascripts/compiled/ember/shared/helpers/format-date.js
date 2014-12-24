(function() {
  define(['jquery', 'ember', 'timezone', 'underscore'], function($, Ember, tz, _) {
    var Handlebars;

    Handlebars = Ember.Handlebars;
    return Handlebars.registerBoundHelper('format-date', function(datetime, format) {
      if (datetime == null) {
        return;
      }
      if (typeof format !== 'string') {
        format = '%b %e, %Y %l:%M %P';
      }
      return tz.format(tz.parse(datetime), format);
    });
  });

}).call(this);
