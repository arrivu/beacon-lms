(function() {
  require(["jquery"], function($) {
    return $(document).ready(function() {
      $("body,html").css({
        "height": "100%",
        "overflow": "auto",
        "-webkit-overflow-scrolling": "touch"
      });
      return $(".data_view").change(function() {
        if ($(this).val() === "paper") {
          return $("#submission_preview").removeClass("plain_text").addClass("paper");
        } else {
          return $("#submission_preview").removeClass("paper").addClass("plain_text");
        }
      }).change();
    });
  });

}).call(this);
