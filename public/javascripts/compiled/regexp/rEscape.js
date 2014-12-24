(function() {
  define(function() {
    var rEscape;

    return rEscape = function(string) {
      return string.replace(/[\\\^\$\*\+\?\.\(\)\|\{\}\[\]]/g, "\\$&");
    };
  });

}).call(this);
