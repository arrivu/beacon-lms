(function() {
  define(function() {
    var preventDefault;

    return preventDefault = function(fn) {
      return function(event) {
        if (event != null) {
          event.preventDefault();
        }
        return fn.apply(this, arguments);
      };
    };
  });

}).call(this);
