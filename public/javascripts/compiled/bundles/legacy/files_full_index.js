(function() {
  require(["INST", "i18n!files.full_index", "jquery", 'str/htmlEscape', "jquery.ajaxJSON", "jquery.instructure_date_and_time", "jqueryui/dialog", "jqueryui/progressbar"], function(INST, I18n, $, htmlEscape) {
    return INST.downloadFolderFiles = function(url) {
      var cancelled, checkForChange;

      cancelled = false;
      $("#download_folder_files_dialog .status_box .status").text(I18n.t("messages.gathering_data", "Gathering data..."));
      $("#download_folder_files_dialog").dialog({
        title: I18n.t("titles.download_folder_contents", "Download Folder Contents"),
        close: function() {
          return cancelled = true;
        }
      });
      $("#download_folder_files_dialog .progress").progressbar({
        value: 0
      });
      checkForChange = function() {
        var lastProgress;

        if (cancelled || $("#download_folder_files_dialog:visible").length === 0) {
          return;
        }
        $("#download_folder_files_dialog .status_loader").css("visibility", "visible");
        lastProgress = null;
        return $.ajaxJSON(url, "GET", {}, (function(data) {
          var attachment, html, progress;

          if (data && data.attachment) {
            attachment = data.attachment;
            if (attachment.workflow_state === "zipped") {
              $("#download_folder_files_dialog .progress").progressbar("value", 100);
              html = htmlEscape(I18n.t("messages.zip_finished", "Finished!  Redirecting to File..."));
              html += "<br/><a href='" + htmlEscape(url) + "'><b>";
              html += htmlEscape(I18n.t("links.download_zip", "Click here to download %{size}", {
                size: attachment.readable_size
              }));
              html += "</b></a>";
              $("#download_folder_files_dialog .status").html(html);
              $("#download_folder_files_dialog .status_loader").css("visibility", "hidden");
              location.href = url;
              return;
            } else {
              progress = parseInt(attachment.file_state, 10);
              if (isNaN(progress)) {
                progress = 0;
              }
              progress += 5;
              $("#download_folder_files_dialog .progress").progressbar("value", progress);
              $("#download_folder_files_dialog .status").text((progress >= 95 ? I18n.t("messages.creating_zip", "Creating zip file...") : I18n.t("messages.gathering_files_with_progress", "Gathering Files (%{progress}%)...", {
                progress: progress
              })));
              if (progress <= 5 || progress === lastProgress) {
                $.ajaxJSON(url + "?compile=1", "GET", {}, (function() {}), function() {});
              }
              lastProgress = progress;
            }
          }
          $("#download_folder_files_dialog .status_loader").css("visibility", "hidden");
          return setTimeout(checkForChange, 3000);
        }), function(data) {
          $("#download_folder_files_dialog .status_loader").css("visibility", "hidden");
          return setTimeout(checkForChange, 1000);
        });
      };
      return checkForChange();
    };
  });

}).call(this);
