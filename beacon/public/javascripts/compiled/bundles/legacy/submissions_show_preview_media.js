(function() {
  require(["jquery", "media_comments"], function($, _mediaComments) {
    return $(document).ready(function() {
      $(".play_media_recording_link").click(function(event) {
        var id;

        event.preventDefault();
        id = $(".media_comment_id:first").text();
        $("#media_recording_box .box_content").mediaComment("show_inline", id);
        return $(this).remove();
      });
      return $(".play_media_recording_link").mediaCommentThumbnail();
    });
  });

}).call(this);
