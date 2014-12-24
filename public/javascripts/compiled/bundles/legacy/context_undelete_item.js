(function() {
  require(["jquery", "i18n!context.undelete_index", "jquery.ajaxJSON", "jquery.instructure_misc_plugins"], function($, I18n) {
    return $(document).ready(function() {
      return $(".restore_link").click(function(event) {
        var $item, $link, item_name, result;

        event.preventDefault();
        $link = $(this);
        $item = $link.parents(".item");
        item_name = $.trim($item.find(".name").text());
        result = confirm(I18n.t("are_you_sure", "Are you sure you want to restore %{item_name}?", {
          item_name: item_name
        }));
        if (result) {
          $link.text(I18n.t("restoring", "restoring..."));
          $item.dim();
          return $.ajaxJSON($link.attr("href"), "POST", {}, (function() {
            return $item.slideUp(function() {
              return $item.remove();
            });
          }), function() {
            return $link.text(I18n.t("restore_failed", "restore failed"));
          });
        }
      });
    });
  });

}).call(this);
