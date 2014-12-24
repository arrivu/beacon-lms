(function() {
  define(['underscore'], function(_) {
    return function(a, b, options) {
      var val;

      if (options == null) {
        options = {};
      }
      return val = !_.isNumber(a) ? !_.isNumber(b) ? 0 : 1 : !_.isNumber(b) ? -1 : options.descending ? b - a : a - b;
    };
  });

}).call(this);
