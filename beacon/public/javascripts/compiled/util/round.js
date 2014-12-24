(function() {
  define(function() {
    var round;

    round = function(n, digits) {
      var x;

      if (digits == null) {
        digits = 0;
      }
      if (!(typeof n === 'number' || n instanceof Number)) {
        n = parseFloat(n);
      }
      x = Math.pow(10, digits);
      return Math.round(n * x) / x;
    };
    round.DEFAULT = 2;
    return round;
  });

}).call(this);
