(function() {
  define(['ember'], function(Ember) {
    return function(options) {
      return test("updates document.title for " + options.path + " correctly", function() {
        visit(options.path);
        return andThen(function() {
          return equal(document.title, options.title);
        });
      });
    };
  });

}).call(this);
