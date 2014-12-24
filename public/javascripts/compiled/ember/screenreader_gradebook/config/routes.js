(function() {
  define(function() {
    var route;

    return route = function() {
      return this.resource("screenreader_gradebook", {
        path: '/'
      });
    };
  });

}).call(this);
