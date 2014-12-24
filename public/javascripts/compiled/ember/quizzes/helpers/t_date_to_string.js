(function() {
  define(['ember', 'i18nObj', 'jquery', 'jquery.instructure_date_and_time'], function(Ember, I18n, $) {
    Ember.Handlebars.helper('tDateToString', function(date, i18n_format) {
      var fmt;

      if (!date) {
        return '';
      }
      fmt = "date.formats." + i18n_format;
      return I18n.l(fmt, date);
    });
    return Ember.Handlebars.helper('friendlyDatetime', function(time) {
      if (!time) {
        return '';
      }
      return $.friendlyDatetime(time);
    });
  });

}).call(this);
