(function() {
  define(['i18n!react_files', 'jquery'], function(I18n, $) {
    var moveStuff;

    return moveStuff = function(filesAndFolders, destinationFolder) {
      var promises,
        _this = this;

      promises = filesAndFolders.map(function(item) {
        return item.moveTo(destinationFolder);
      });
      return $.when.apply($, promises).then(function() {
        var _ref;

        return $.flashMessage(I18n.t('move_success', {
          one: "%{item} moved to %{destinationFolder}",
          other: "%{count} items moved to %{destinationFolder}"
        }, {
          count: filesAndFolders.length,
          item: (_ref = filesAndFolders[0]) != null ? _ref.displayName() : void 0,
          destinationFolder: destinationFolder.displayName()
        }));
      });
    };
  });

}).call(this);
