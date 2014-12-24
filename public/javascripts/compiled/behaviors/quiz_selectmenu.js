(function() {
  define(['jquery'], function($) {
    return $('.question select').bind("mousewheel", function(event) {
      return event.preventDefault();
    });
  });

}).call(this);
