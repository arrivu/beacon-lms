(function() {
  require(["jquery", "jquery.ajaxJSON"], function($) {
    return $(document).ready(function() {
      return $(".show_user_services_checkbox").change(function() {
        return $.ajaxJSON($(".profile_url").attr("href"), "PUT", {
          "user[show_user_services]": $(this).prop("checked")
        }, (function(data) {}), function(data) {});
      });
    });
  });

}).call(this);
