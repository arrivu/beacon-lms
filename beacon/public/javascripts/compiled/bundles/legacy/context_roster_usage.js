(function() {
  require(["jquery", "i18n!context.roster_user_usage", "jquery.instructure_date_and_time", "jquery.templateData", "vendor/jquery.pageless"], function($, I18n) {
    return $(function() {
      var url;

      url = ENV.context_url;
      return $("#usage_report").pageless({
        totalPages: ENV.accesses_total_pages,
        url: url,
        loaderMsg: I18n.t("loading_more_results", "Loading more results"),
        scrape: function(data) {
          var $access, access, e, idx;

          if (typeof data === "string") {
            try {
              data = $.parseJSON(data);
            } catch (_error) {
              e = _error;
              data = [];
            }
          }
          for (idx in data) {
            $access = $("#usage_report .access.blank:first").clone(true).removeClass("blank");
            access = data[idx].asset_user_access;
            $access.addClass(access.asset_class_name);
            access.readable_name = access.readable_name || access.display_name || access.asset_code;
            access.last_viewed = $.datetimeString(access.last_access);
            $access.fillTemplateData({
              data: access
            });
            $("#usage_report table tbody").append($access.show());
          }
          return "";
        }
      });
    });
  });

}).call(this);
