(function() {
  define(['ember', '../../mixins/legacy_submission_html', 'i18n!quiz_show'], function(Em, LegacySubmissions, I18n) {
    return Ember.ObjectController.extend(LegacySubmissions, {
      timeLimitWithMinutes: (function() {
        return I18n.t('time_limit_minutes', "%{limit} minutes", {
          limit: this.get("timeLimit")
        });
      }).property('timeLimit')
    });
  });

}).call(this);
