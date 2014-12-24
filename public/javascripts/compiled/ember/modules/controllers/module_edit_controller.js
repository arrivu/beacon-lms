(function() {
  define(['ember', 'timezone'], function(Ember, tz) {
    var ModuleEditController;

    return ModuleEditController = Ember.ObjectController.extend({
      setUnlockAtChecked: (function() {
        if (this.get('unlock_at')) {
          return this.set('unlockAtChecked', true);
        }
      }).observes('unlock_at').on('init'),
      clearUnlockAtOnUncheck: (function() {
        var old;

        if (!this.get('unlockAtChecked')) {
          this.set('oldUnlockAt', this.get('unlock_at'));
          return this.set('unlock_at', null);
        } else {
          old = this.get('oldUnlockAt');
          if (old) {
            return this.set('unlock_at', old);
          }
        }
      }).observes('unlockAtChecked')
    });
  });

}).call(this);
