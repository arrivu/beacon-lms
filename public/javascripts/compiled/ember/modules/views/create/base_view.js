(function() {
  define(['ember'], function(Ember) {
    var CreateItemBaseView;

    return CreateItemBaseView = Ember.View.extend({
      focusOnInsert: (function() {
        return this.$(':tabbable').first()[0].focus();
      }).on('didInsertElement')
    });
  });

}).call(this);
