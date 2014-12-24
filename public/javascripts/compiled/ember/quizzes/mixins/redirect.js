(function() {
  define(['ember', '../shared/environment', 'i18n!quizzes_redirects', 'compiled/jquery.rails_flash_notifications'], function(Ember, env, I18n) {
    return Ember.Mixin.create({
      validateRoute: function(permission, path) {
        var msg;

        if (!env.get(permission)) {
          msg = I18n.t('no_access', 'Access denied. Redirected to a page you have access to.');
          return this.redirectTo(path, msg);
        }
      },
      redirectTo: function(path, msg) {
        this.transitionTo(path);
        return Ember.run.throttle(this, (function() {
          return Ember.$.flashWarning(msg);
        }), 150);
      }
    });
  });

}).call(this);
