(function() {
  require(["jquery", "i18n!external_content.cancel"], function($, I18n) {
    var parentWindow;

    window.parentWindow = window.parent;
    window.callback = ENV.service;
    while (parentWindow && !parentWindow[callback]) {
      parentWindow = parentWindow.parent;
    }
    if (parentWindow[callback] && parentWindow[callback].cancel) {
      parentWindow.$(parentWindow).trigger("externalContentCancel");
      parentWindow[callback].cancel();
      return setTimeout((function() {
        return $("#dialog_message").text(I18n.t("popup_success", "Canceled. This popup should close on its own..."));
      }), 1000);
    } else {
      return $("#dialog_message").text(I18n.t("popup_failure", "Cannot find the parent window, you'll need to close this popup manually."));
    }
  });

}).call(this);
