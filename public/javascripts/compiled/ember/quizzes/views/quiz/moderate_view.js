(function() {
  define(['ember'], function(Em) {
    return Em.View.extend({
      allowReloading: (function() {
        return this.controller.set('okayToReload', true);
      }).on('didInsertElement'),
      denyReloading: (function() {
        return this.controller.set('okayToReload', false);
      }).on('willDestroyElement')
    });
  });

}).call(this);
