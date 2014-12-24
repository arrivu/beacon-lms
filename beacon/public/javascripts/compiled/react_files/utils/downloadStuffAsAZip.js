(function() {
  define(['i18n!react_files', 'jquery', 'compiled/models/Progress', 'compiled/models/Folder'], function(I18n, $, Progress, Folder) {
    var downloadStuffAsAZip;

    return downloadStuffAsAZip = function(filesAndFolders, _arg) {
      var $progressIndicator, contextId, contextType, data, files, folders, item, onProgress, url, _i, _len;

      contextType = _arg.contextType, contextId = _arg.contextId;
      files = [];
      folders = [];
      for (_i = 0, _len = filesAndFolders.length; _i < _len; _i++) {
        item = filesAndFolders[_i];
        if (item instanceof Folder) {
          folders.push(item.id);
        } else {
          files.push(item.id);
        }
      }
      url = "/api/v1/" + contextType + "/" + contextId + "/content_exports";
      $progressIndicator = $('<div style="position: fixed; top: 4px; left: 50%; margin-left: -120px; width: 240px; z-index: 11; text-align: center; box-sizing: border-box; padding: 8px;" class="alert alert-info">');
      onProgress = function(progessAPIResponse) {
        var message;

        message = I18n.t('progress_message', 'Preparing download: %{percent}% complete', {
          percent: progessAPIResponse.completion
        });
        $progressIndicator.appendTo('body').text(message);
        return $.screenReaderFlashMessage(message);
      };
      data = {
        export_type: 'zip',
        select: {
          files: files,
          folders: folders
        }
      };
      return $.post(url, data).pipe(function(progressObject) {
        return new Progress({
          url: progressObject.progress_url
        }).poll().progress(onProgress);
      }).pipe(function(progressObject) {
        var contentExportId;

        contentExportId = progressObject.context_id;
        return $.get("" + url + "/" + contentExportId);
      }).pipe(function(response) {
        return window.location = response.attachment.url;
      }).fail(function() {
        return $.flashError(I18n.t('progress_error', 'An error occured trying to prepare download, please try again.'));
      }).always(function() {
        return $progressIndicator.remove();
      });
    };
  });

}).call(this);
