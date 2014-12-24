(function() {
  require(["i18n!assignments.peer_reviews", "jquery", "jquery.ajaxJSON", "jquery.instructure_date_and_time", "jquery.instructure_forms", "jquery.instructure_misc_helpers", "jquery.instructure_misc_plugins", "jquery.loadingImg", "jquery.templateData"], function(I18n, $) {
    return $(document).ready(function() {
      $(".peer_review").hover((function() {
        $(".peer_review.submission-hover").removeClass("submission-hover");
        return $(this).addClass("submission-hover");
      }), function() {
        return $(this).removeClass("submission-hover");
      });
      $(".peer_review .delete_review_link").click(function(event) {
        event.preventDefault();
        return $(this).parents(".peer_review").confirmDelete({
          url: $(this).attr("href"),
          message: I18n.t("messages.cancel_peer_review", "Cancel this peer review?")
        });
      });
      $(".assign_peer_review_link").click(function(event) {
        var $form, url, user_id;

        event.preventDefault();
        if ($(this).parents(".student_reviews").find(".form_content form:visible").length) {
          return $(this).parents(".student_reviews").find(".form_content form:visible").slideUp();
        } else {
          $form = $("#assign_peer_review_form").clone(true).removeAttr("id");
          url = $(".assign_peer_review_url").attr("href");
          user_id = $(this).parents(".student_reviews").getTemplateData({
            textValues: ["student_review_id"]
          }).student_review_id;
          url = $.replaceTags(url, "reviewer_id", user_id);
          $form.find("select option.student_" + user_id).attr("disabled", true);
          $(this).parents(".student_reviews").find(".peer_review").each(function() {
            user_id = $(this).getTemplateData({
              textValues: ["user_id"]
            }).user_id;
            return $form.find("select option.student_" + user_id).attr("disabled", true);
          });
          $form.attr("action", url);
          $(this).parents(".student_reviews").find(".form_content").empty().append($form);
          return $form.slideDown();
        }
      });
      $("#assign_peer_review_form").formSubmit({
        beforeSubmit: function(data) {
          if (!data.reviewee_id) {
            return false;
          }
          return $(this).loadingImage();
        },
        success: function(data) {
          var $review, assessor_name, time;

          $(this).loadingImage("remove");
          $(this).slideUp(function() {
            return $(this).remove();
          });
          $review = $("#review_request_blank").clone(true).removeAttr("id");
          $review.fillTemplateData({
            data: data.assessment_request,
            hrefValues: ["id", "user_id"]
          });
          $(this).parents(".student_reviews").find(".no_requests_message").slideUp().end().find(".peer_reviews").append($review);
          $review.slideDown();
          assessor_name = $(this).parents(".student_reviews").find(".assessor_name").text();
          time = $.datetimeString(data.assessment_request.updated_at);
          $review.find(".reminder_peer_review_link").attr("title", I18n.t("titles.reminder", "Remind %{assessor} about Assessment, last notified %{time}", {
            assessor: assessor_name,
            time: time
          }));
          return $(this).slideUp(function() {
            return $(this).remove();
          });
        },
        error: function(data) {
          $(this).loadingImage("remove");
          return $(this).formErrors(data);
        }
      });
      $(".remind_peer_review_link").click(function(event) {
        var $link;

        event.preventDefault();
        $link = $(this);
        $link.parents(".peer_review").loadingImage({
          image_size: "small"
        });
        return $.ajaxJSON($link.attr("href"), "POST", {}, function(data) {
          var assessor_name, time;

          $link.parents(".peer_review").loadingImage("remove");
          assessor_name = $link.parents(".student_reviews").find(".assessor_name").text();
          time = $.datetimeString(data.assessment_request.updated_at);
          return $link.attr("title", I18n.t("titles.remind", "Remind %{assessor} about Assessment, last notified %{time}", {
            assessor: assessor_name,
            time: time
          }));
        });
      });
      return $(".remind_peer_reviews_link").click(function(event) {
        event.preventDefault();
        return $(".peer_review.assigned .remind_peer_review_link").click();
      });
    });
  });

}).call(this);
