(function() {
  define(['ember'], function(Ember) {
    var AddItemView;

    return AddItemView = Ember.View.extend({
      focus: (function() {
        if (!this.get('controller.returnFocus')) {
          return;
        }
        return Ember.run.scheduleOnce('afterRender', this, function() {
          this.$(':tabbable').first()[0].focus();
          return this.set('controller.returnFocus', false);
        });
      }).observes('controller.returnFocus'),
      escapeOnKeydown: (function(event) {
        if (event.keyCode !== 27 || this.get('controller.editing') !== true) {
          return;
        }
        this.get('controller').send('quitEditing');
        return event.stopPropagation();
      }).on('keyDown')
    });
  });

}).call(this);
