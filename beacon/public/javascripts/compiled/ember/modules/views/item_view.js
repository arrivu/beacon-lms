(function() {
  define(['ember'], function(Ember) {
    var ModuleView;

    return ModuleView = Ember.View.extend({
      tagName: 'li',
      animateOnDestroy: (function() {
        if (!this.get('controller.isDeleting')) {
          return;
        }
        return this.$().slideToggle(350);
      }).observes('controller.isDeleting')
    });
  });

}).call(this);
