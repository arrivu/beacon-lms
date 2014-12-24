(function() {
  require(["jquery", "media_comments"], function($) {
    return $(document).ready(function() {
      return $("#media_comment").mediaComment("show_inline", ENV.MEDIA_OBJECT_ID, ENV.MEDIA_OBJECT_TYPE);
    });
  });

}).call(this);
