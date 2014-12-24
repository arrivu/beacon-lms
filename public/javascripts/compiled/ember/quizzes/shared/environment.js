(function() {
  define(['ember'], function(Ember) {
    var Environment;

    Environment = Ember.Object.extend({
      setEnv: function(env) {
        return this.set('env', env);
      },
      courseId: (function() {
        if (this.get('env')) {
          return this.get('env').context_asset_string.split('_')[1];
        } else {
          return 0;
        }
      }).property('env'),
      canUpdate: (function() {
        if (!this.permissionsAvailable()) {
          return false;
        }
        return this.get('env').PERMISSIONS.update;
      }).property('env.PERMISSIONS.update'),
      canManage: (function() {
        if (!this.permissionsAvailable()) {
          return false;
        }
        return this.get('env').PERMISSIONS.manage;
      }).property('env.PERMISSIONS.manage'),
      permissionsAvailable: function() {
        return !!(this.get('env') && this.get('env').PERMISSIONS);
      },
      moderateEnabled: (function() {
        if (!this.flagsAvailable()) {
          return false;
        }
        return this.get('env').FLAGS.quiz_moderate;
      }).property('env.FLAGS.quiz_moderate'),
      flagsAvailable: function() {
        return !!(this.get('env') && this.get('env').FLAGS);
      }
    });
    return Environment.create({
      env: window.ENV
    });
  });

}).call(this);
