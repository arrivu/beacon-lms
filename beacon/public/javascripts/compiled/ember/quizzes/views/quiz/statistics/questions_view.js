(function() {
  define(['ember'], function(Ember) {
    return Ember.View.extend({
      classNames: ['question-statistics'],
      toggleDetails: (function() {
        return Ember.run.schedule('afterRender', this, function() {
          var isOn;

          isOn = this.get('controller.detailsVisible');
          return this.$().toggleClass('with-details', !!isOn);
        });
      }).observes('controller.detailsVisible')
    });
  });

}).call(this);
