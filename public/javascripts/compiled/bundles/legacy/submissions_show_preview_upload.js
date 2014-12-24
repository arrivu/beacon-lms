(function() {
  require(["jquery", "i18n!submissions.show_preview", "vendor/swfobject/swfobject", "jqueryui/dialog", "jquery.doc_previews"], function($, I18n, swfobject, _docPreviews) {
    return $(document).ready(function() {
      $("a.flash").click(function() {
        swfobject.embedSWF($(this).attr("href"), "main", "100%", "100%", "9.0.0", false, null, {
          wmode: "opaque"
        }, null);
        return false;
      });
      if ($.filePreviewsEnabled()) {
        return $(".modal_preview_link").live("click", function() {
          $("<div style=\"padding:0; overflow:hidden;\">").dialog({
            title: I18n.t("preview_title", "Preview of %{title}", {
              title: $(this).data("dialog-title")
            }),
            width: $(document).width() * .95,
            height: $(document).height() * .75
          }).loadDocPreview($.extend({
            height: "100%"
          }, $(this).data()));
          return false;
        });
      }
    });
  });

}).call(this);
