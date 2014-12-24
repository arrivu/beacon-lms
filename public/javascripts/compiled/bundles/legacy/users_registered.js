(function() {
  require(["i18n!users.registered", "jquery", "jquery.ajaxJSON", "jqueryui/dialog"], function(I18n, $) {
    var onYouTubePlayerReady;

    $(document).ready(function() {
      var atts, params, runAjax, videoHeight, videoWidth;

      runAjax = true;
      $(".re_send_confirmation_link").click(function(event) {
        var $link;

        event.preventDefault();
        if (runAjax) {
          $link = $(this);
          $link.text(I18n.t("resending", "Re-Sending..."));
          return $.ajaxJSON($link.attr("href"), "POST", {}, (function(data) {
            $link.text(I18n.t("done_resending", "Done! Message may take a few minutes."));
            return runAjax = false;
          }), function(data) {
            return $link.text(I18n.t("failed_resending", "Request failed. Try again."));
          });
        }
      });
      videoWidth = Math.max(Math.min($(window).width() - 120, $(window).height() * 1390 / 900 - 120), 800);
      videoHeight = videoWidth * 900 / 1390;
      params = {
        allowScriptAccess: "always"
      };
      atts = {
        id: "youtube_player"
      };
      swfobject.embedSWF("//www.youtube.com/v/SJY5p0qpzhA?version=3&rel=0&enablejsapi=1&disablekb=1&fs=1&hd=1&showsearch=0&iv_load_policy=3&feature=player_embedded", "youtube_player", videoWidth, videoHeight, "8", null, null, params, atts);
      return $("#play_overview_video_link").click(function() {
        $("#video_wrapper").dialog({
          width: videoWidth,
          title: I18n.t("overview_video", "Overview Video of Canvas")
        });
        return false;
      });
    });
    return onYouTubePlayerReady = function(playerid) {
      var player;

      player = document.getElementById("youtube_player");
      player.setPlaybackQuality("hd720");
      return player.playVideo();
    };
  });

}).call(this);
