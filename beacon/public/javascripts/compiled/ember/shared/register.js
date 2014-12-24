(function() {
  define(['ember'], function(Ember) {
    var register;

    return register = function(type, name, obj) {
      Ember.Application.initializer({
        name: name,
        initialize: function(container) {
          return container.register("" + type + ":" + name, obj);
        }
      });
      return obj;
    };
  });

}).call(this);
