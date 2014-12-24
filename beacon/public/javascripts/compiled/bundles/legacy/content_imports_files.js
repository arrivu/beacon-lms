(function() {
  require(["jquery", "i18n!content_imports.files"], function($, I18n) {
    return $(function() {
      return $("#zip_file_import_form .cancel_button").attr("href", ENV.return_or_context_url).text((ENV.return_to ? I18n.t("buttons.cancel", "Cancel") : I18n.t("buttons.skip", "Skip this Step")));
    });
  });

}).call(this);
