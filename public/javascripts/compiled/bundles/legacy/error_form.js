(function() {
  require(["i18n!shared.error_form", "jquery", "str/htmlEscape", "jquery.instructure_forms", "jquery.loadingImg", "compiled/jquery.rails_flash_notifications"], function(I18n, $, htmlEscape) {
    return $(document).ready(function() {
      $(".submit_error_link").click(function(event) {
        event.preventDefault();
        return $("#submit_error_form").slideToggle(function() {
          return $("#submit_error_form :input:visible:first").focus().select();
        });
      });
      return $("#submit_error_form").formSubmit({
        formErrors: false,
        beforeSubmit: function(data) {
          return $(this).loadingImage();
        },
        success: function(data) {
          $(this).loadingImage("remove");
          $.flashMessage(I18n.t("message_sent", "Thank you for your help!  We'll get right on this."));
          return $("#submit_error_form").slideToggle();
        },
        error: function(data) {
          $(this).loadingImage("remove");
          return $(this).errorBox(I18n.t("message_failed", "Report didn't send.  Please try again."));
        }
      });
    });
  });

}).call(this);
