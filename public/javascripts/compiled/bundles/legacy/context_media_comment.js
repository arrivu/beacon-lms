(function() {
  require(["jquery", "media_comments"], function($) {
    return $(document).ready(function() {
      return $.mediaComment.init();
    });
  });

}).call(this);
