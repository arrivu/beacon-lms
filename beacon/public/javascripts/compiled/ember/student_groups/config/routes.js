(function() {
  define(function() {
    var route;

    return route = function() {
      return this.resource("student_groups", {
        path: '/'
      });
    };
  });

}).call(this);
