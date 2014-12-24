(function() {
  require(['jquery', 'INST', 'compiled/notifications/NotificationPreferences', 'compiled/notifications/privacyNotice', 'compiled/profile/confirmEmail'], function($, INST, NotificationPreferences, initPrivacyNotice) {
    new NotificationPreferences(ENV.NOTIFICATION_PREFERENCES_OPTIONS);
    return $(function() {
      return initPrivacyNotice();
    });
  });

}).call(this);
