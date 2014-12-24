(function() {
  define(['ember'], function(Ember) {
    var updateTitle;

    updateTitle = function(title) {
      return Ember.$(document).attr('title', title);
    };
    return function(tokens, separator) {
      var title;

      if (separator == null) {
        separator = ': ';
      }
      if (tokens instanceof Array) {
        tokens = tokens || [];
        title = tokens.join(separator);
      } else {
        title = tokens || '';
      }
      updateTitle(title);
      return title;
    };
  });

}).call(this);
