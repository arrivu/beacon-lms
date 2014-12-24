(function() {
  require(["jquery", "i18n!external_content.success", "jquery.ajaxJSON", "jquery.instructure_misc_helpers"], function($, I18n) {
    var callback, data, dataReady, parentWindow, url;

    dataReady = function(data) {
      if (parentWindow[callback] && parentWindow[callback].ready) {
        parentWindow.$(parentWindow).trigger("externalContentReady", data);
        parentWindow[callback].ready(data);
        return setTimeout((function() {
          if (callback === 'external_tool_dialog') {
            return $("#dialog_message").text(I18n.t("popup_success", "Success! This popup should close on its own..."));
          } else {
            return $("#dialog_message").text('');
          }
        }), 1000);
      } else {
        return $("#dialog_message").text(I18n.t("content_failure", "Content retrieval failed, please try again or notify your system administrator of the error."));
      }
    };
    data = ENV.retrieved_data;
    callback = ENV.service;
    parentWindow = window.parent;
    while (parentWindow && parentWindow.parent !== parentWindow && !parentWindow[callback]) {
      parentWindow = parentWindow.parent;
    }
    if (data.return_type === "oembed") {
      url = $.replaceTags($.replaceTags($("#oembed_retrieve_url").attr("href"), "endpoint", encodeURIComponent(data.endpoint)), "url", encodeURIComponent(data.url));
      return $.ajaxJSON(url, "GET", {}, (function(data) {
        return dataReady(data);
      }), function() {
        return $("#dialog_message").text(I18n.t("oembed_failure", "Content retrieval failed, please try again or notify your system administrator of the error."));
      });
    } else {
      return dataReady(data);
    }
  });

}).call(this);
