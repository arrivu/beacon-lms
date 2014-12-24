(function() {
  require(["jquery", "i18n!courses.show", "str/htmlEscape", "jquery.ajaxJSON", "jqueryui/dialog", "compiled/jquery/fixDialogButtons", "jquery.loadingImg", "vendor/jquery.scrollTo", "compiled/behaviors/openAsDialog"], function($, I18n, htmlEscape) {
    return $(document).ready(function() {
      var $selfUnenrollmentDialog;

      $selfUnenrollmentDialog = $("#self_unenrollment_dialog");
      $(".self_unenrollment_link").click(function(event) {
        return $selfUnenrollmentDialog.dialog({
          title: I18n.t("titles.drop_course", "Drop this Course")
        }).fixDialogButtons();
      });
      $selfUnenrollmentDialog.on("click", ".action", function() {
        $selfUnenrollmentDialog.disableWhileLoading($.Deferred());
        return $.ajaxJSON($(this).attr("href"), "POST", {}, function() {
          return window.location.reload();
        });
      });
      $(".re_send_confirmation_link").click(function(event) {
        var $link;

        event.preventDefault();
        $link = $(this);
        $link.text(I18n.t("re_sending", "Re-Sending..."));
        return $.ajaxJSON($link.attr("href"), "POST", {}, (function(data) {
          return $link.text(I18n.t("send_done", "Done! Message may take a few minutes."));
        }), function(data) {
          return $link.text(I18n.t("send_failed", "Request failed. Try again."));
        });
      });
      $(".home_page_link").click(function(event) {
        var $link;

        event.preventDefault();
        $link = $(this);
        $(".floating_links").hide();
        $("#course_messages").slideUp(function() {
          return $(".floating_links").show();
        });
        $("#home_page").slideDown().loadingImage();
        $link.hide();
        return $.ajaxJSON($(this).attr("href"), "GET", {}, function(data) {
          var body;

          $("#home_page").loadingImage("remove");
          body = htmlEscape($.trim(data.wiki_page.body));
          if (body.length === 0) {
            body = htmlEscape(I18n.t("empty_body", "No Content"));
          }
          $("#home_page_content").html(body);
          return $("html,body").scrollTo($("#home_page"));
        });
      });
      $(".dashboard_view_link").click(function(event) {
        event.preventDefault();
        $(".floating_links").hide();
        $("#course_messages").slideDown(function() {
          return $(".floating_links").show();
        });
        $("#home_page").slideUp();
        return $(".home_page_link").show();
      });
      $(".publish_course_in_wizard_link").click(function(event) {
        event.preventDefault();
        if ($("#wizard_box:visible").length > 0) {
          return $("#wizard_box .option.publish_step").click();
        } else {
          return $("#wizard_box").slideDown("slow", function() {
            return $(this).find(".option.publish_step").click();
          });
        }
      });
      if (!ENV.DRAFT_STATE) {
        $("#edit_course_home_content_select").change(function() {
          return $(this).parents("form").find(".options_details").hide().end().find("." + $(this).val() + "_details").show().end().find(".select_details").show();
        }).triggerHandler("change");
      }
      $(".edit_course_home_content_link").click(function(event) {
        event.preventDefault();
        $("#edit_course_home_content").show();
        return $("#course_home_content").hide();
      });
      $("#edit_course_home_content .cancel_button").click(function() {
        $("#edit_course_home_content").hide();
        return $("#course_home_content").show();
      });
      return $("[aria-controls=edit_course_home_content_form]").click(function() {
        return setTimeout((function() {
          return $("#edit_course_home_content_select").focus();
        }), 0);
      });
    });
  });

}).call(this);
