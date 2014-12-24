(function() {
  require(["jquery", "i18n!facebook.settings"], function($, I18n) {
    return $(document).ready(function() {
      $(".settings_link,.cancel_button").click(function(event) {
        event.preventDefault();
        return $("#notification_types_form,#notification_types_list").toggle();
      });
      return $("#notification_types_form").submit(function() {
        return $(this).find("button").attr("disabled", true).text(I18n.t("updating_preferences", "Updating Preferences..."));
      });
    });
  });

}).call(this);
