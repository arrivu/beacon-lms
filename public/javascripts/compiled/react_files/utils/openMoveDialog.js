(function() {
  define(['underscore', 'react', '../components/MoveDialog', '../modules/filesEnv', 'jquery', 'jqueryui/dialog'], function(_, React, MoveDialog, filesEnv, $) {
    var openMoveDialog;

    return openMoveDialog = function(thingsToMove, _arg) {
      var $dialog, contextId, contextType, returnFocusTo, rootFolderToShow;

      contextType = _arg.contextType, contextId = _arg.contextId, returnFocusTo = _arg.returnFocusTo;
      $dialog = $('<div>').dialog({
        width: 600,
        height: 300,
        close: function() {
          React.unmountComponentAtNode(this);
          $dialog.remove();
          return $(returnFocusTo).focus();
        }
      });
      rootFolderToShow = _.find(filesEnv.rootFolders, function(folder) {
        return (folder.get('context_type').toLowerCase() + 's' === contextType) && ('' + folder.get('context_id') === '' + contextId);
      });
      return React.renderComponent(MoveDialog({
        thingsToMove: thingsToMove,
        rootFoldersToShow: [rootFolderToShow],
        closeDialog: function() {
          return $dialog.dialog('close');
        },
        setTitle: function(title) {
          return $dialog.dialog('option', 'title', title);
        }
      }), $dialog[0]);
    };
  });

}).call(this);
