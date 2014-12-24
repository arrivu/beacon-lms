(function() {
  require(["jquery", "i18n!context.new_roster_user", "jquery.ajaxJSON", "jquery.instructure_misc_plugins", "jquery.loadingImg", "compiled/jquery.rails_flash_notifications", "link_enrollment"], function($, I18n) {
    return $(document).ready(function() {
      $(".show_user_services_checkbox").change(function() {
        return $.ajaxJSON($(".profile_url").attr("href"), "PUT", {
          "user[show_user_services]": $(this).prop("checked")
        }, (function(data) {}), function(data) {});
      });
      $(".link_enrollment_link").click(function(event) {
        var $link, associated_id, id, name;

        event.preventDefault();
        $link = $(this);
        name = $("#name_and_email .name").text();
        id = $link.attr("data-id");
        associated_id = $link.attr("data-associated-id");
        return link_enrollment.choose(name, id, associated_id, function(enrollment) {
          $link.attr("data-id", enrollment.id);
          $link.attr("data-associated-id", enrollment.associated_user_id);
          $link.parents(".enrollment").find(".associated_user_name").text(enrollment.associated_user_name);
          return $link.parents(".enrollment").find(".associated_user").showIf(enrollment.associated_user_id);
        });
      });
      $(".unconclude_enrollment_link").click(function(event) {
        var $enrollment;

        event.preventDefault();
        $enrollment = $(this).parents(".enrollment");
        return $.ajaxJSON($(this).attr("href"), "POST", {}, function(data) {
          $enrollment.find(".conclude_enrollment_link_holder").slideDown();
          $enrollment.find(".unconclude_enrollment_link_holder").slideUp();
          return $enrollment.find(".completed_at_holder").slideUp();
        });
      });
      $(".conclude_enrollment_link").click(function(event) {
        event.preventDefault();
        return $(this).parents(".enrollment").confirmDelete({
          message: I18n.t("confirm.conclude_student", "Are you sure you want to conclude this student's enrollment?"),
          url: $(this).attr("href"),
          success: function(data) {
            $(this).undim();
            $(this).find(".conclude_enrollment_link_holder").slideUp();
            return $(this).find(".unconclude_enrollment_link_holder").slideDown();
          }
        });
      });
      $(".elevate_enrollment_link,.restrict_enrollment_link").click(function(event) {
        var $user, limit;

        limit = ($(this).hasClass("restrict_enrollment_link") ? "1" : "0");
        $user = $(this).parents(".tr");
        $user.loadingImage();
        $.ajaxJSON($(this).attr("href"), "POST", {
          limit: limit
        }, (function(data) {
          $user.loadingImage("remove");
          return $(".elevate_enrollment_link_holder,.restrict_enrollment_link_holder").slideToggle();
        }), function(data) {});
        $.flashError(I18n.t("error.enrollment_change_failed", "Enrollment privilege change failed, please try again"));
        $user.loadingImage("remove");
        return event.preventDefault();
      });
      return $(".delete_enrollment_link").click(function(event) {
        event.preventDefault();
        return $(this).parents(".enrollment").confirmDelete({
          message: I18n.t("confirm.delete_enrollment", "Are you sure you want to delete this student's enrollment?"),
          url: $(this).attr("href"),
          success: function(data) {
            return $(this).closest(".enrollment").hide();
          }
        });
      });
    });
  });

}).call(this);
