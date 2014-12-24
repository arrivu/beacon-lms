(function() {
  define(['ember', 'ic-tabs'], function(Ember) {
    var ScreenreaderGradebookView;

    return ScreenreaderGradebookView = Ember.View.extend({
      didInsertElement: function() {
        return this.$('button:disabled').prop('disabled', true);
      }
    });
  });

}).call(this);
