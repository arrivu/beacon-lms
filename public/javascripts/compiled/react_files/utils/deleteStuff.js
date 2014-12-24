(function() {
  define(['i18n!react_files', 'jquery'], function(I18n, $) {
    var deleteStuff;

    return deleteStuff = function(filesAndFolders) {
      var isDeletingAnUnemptyFolder, message, promises, _ref, _ref1;

      isDeletingAnUnemptyFolder = filesAndFolders.some(function(item) {
        return item.get('folders_count') || item.get('files_count');
      });
      message = isDeletingAnUnemptyFolder ? I18n.t('confirm_delete_with_contents', {
        one: "Are you sure you want to delete %{name}? It is not empty, anything inside it will be deleted too.",
        other: "Are you sure you want to delete these %{count} items and everything inside them?"
      }, {
        count: filesAndFolders.length,
        name: (_ref = filesAndFolders[0]) != null ? _ref.displayName() : void 0
      }) : I18n.t('confirm_delete', {
        one: "Are you sure you want to delete %{name}?",
        other: "Are you sure you want to delete these %{count} items?"
      }, {
        count: filesAndFolders.length,
        name: (_ref1 = filesAndFolders[0]) != null ? _ref1.displayName() : void 0
      });
      if (!confirm(message)) {
        return;
      }
      promises = filesAndFolders.map(function(item) {
        return item.destroy({
          emulateJSON: true,
          data: {
            force: 'true'
          },
          wait: true,
          error: function(model, response, options) {
            var reason;

            reason = (function() {
              var _ref2;

              try {
                return (_ref2 = $.parseJSON(response.responseText)) != null ? _ref2.message : void 0;
              } catch (_error) {}
            })();
            return $.flashError(I18n.t('delete_error', 'Error deleting %{name}: %{reason}', {
              name: item.displayName(),
              reason: reason
            }));
          }
        });
      });
      return $.when.apply($, promises).then(function() {
        return $.flashMessage(I18n.t('deleted_items_successfully', '%{count} items deleted successfully', {
          count: filesAndFolders.length
        }));
      });
    };
  });

}).call(this);
