(function() {
  define(['jquery'], function($) {
    $(document).on('keydown', '[role=button], [role=checkbox]', function(e) {
      if (e.keyCode === 13) {
        return $(e.target).trigger('keyclick');
      }
    });
    return $(document).on('keyup', '[role=button], [role=checkbox]', function(e) {
      if (e.keyCode === 32) {
        return $(e.target).trigger('keyclick');
      }
    });
  });

}).call(this);
