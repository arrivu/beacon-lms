(function() {
  define(['ember'], function(Ember) {
    var ModuleView;

    return ModuleView = Ember.View.extend({
      animateOnDestroy: (function() {
        if (!this.get('controller.isDeleting')) {
          return;
        }
        return this.$().fadeOut(175);
      }).observes('controller.isDeleting')
    });
  });

}).call(this);
