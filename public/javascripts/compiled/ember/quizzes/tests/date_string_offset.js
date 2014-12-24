(function() {
  define([], function() {
    return function(daysOffset) {
      var d;

      daysOffset || (daysOffset = 0);
      d = new Date();
      d.setDate(d.getDate() + daysOffset);
      return d.toISOString();
    };
  });

}).call(this);
