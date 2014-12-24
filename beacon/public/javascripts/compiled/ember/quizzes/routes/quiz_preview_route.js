(function() {
  define(['ember'], function(Em) {
    return Em.Route.extend({
      model: function() {
        return this.modelFor('quiz');
      }
    });
  });

}).call(this);
