(function() {
  define(['ember'], function(Ember) {
    return Ember.Handlebars.helper('forcePrecision', function(float) {
      return (float || 0).toFixed(2);
    });
  });

}).call(this);
