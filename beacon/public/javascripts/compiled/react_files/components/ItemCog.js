(function() {
  define(['i18n!react_files', 'react', 'compiled/react/shared/utils/withReactDOM', 'compiled/fn/preventDefault', '../modules/customPropTypes', 'compiled/models/Folder', './RestrictedDialogForm', '../utils/openMoveDialog', '../utils/downloadStuffAsAZip', '../utils/deleteStuff', 'jquery', 'jqueryui/dialog'], function(I18n, React, withReactDOM, preventDefault, customPropTypes, Folder, RestrictedDialogForm, openMoveDialog, downloadStuffAsAZip, deleteStuff, $) {
    var ItemCog;

    return ItemCog = React.createClass({
      displayName: 'ItemCog',
      propTypes: {
        model: customPropTypes.filesystemObject
      },
      render: withReactDOM(function() {
        var wrap,
          _this = this;

        wrap = function(fn) {
          return preventDefault(function(event) {
            var _ref, _ref1;

            return fn([_this.props.model], {
              contextType: ((_ref = _this.props.model.collection) != null ? _ref.parentFolder.get('context_type').toLowerCase() : void 0) + 's',
              contextId: (_ref1 = _this.props.model.collection) != null ? _ref1.parentFolder.get('context_id') : void 0,
              returnFocusTo: event.target
            });
          });
        };
        return span({}, button({
          className: 'al-trigger al-trigger-gray btn btn-link',
          'aria-label': I18n.t('settings', 'Settings'),
          'data-popup-within': "#wrapper"
        }, i({
          className: 'icon-settings'
        }, i({
          className: 'icon-mini-arrow-down'
        }))), ul({
          className: 'al-options'
        }, li({}, a((this.props.model instanceof Folder ? {
          href: '#',
          onClick: wrap(downloadStuffAsAZip)
        } : {
          href: this.props.model.get('url')
        }, {
          ref: 'download'
        }), I18n.t('download', 'Download'))), this.props.userCanManageFilesForContext ? [
          li({}, a({
            href: '#',
            onClick: preventDefault(this.props.startEditingName),
            ref: 'editName'
          }, I18n.t('edit_name', 'Edit Name'))), li({}, a({
            href: '#',
            onClick: wrap(openMoveDialog),
            ref: 'move'
          }, I18n.t('move', 'Move'))), li({}, a({
            href: '#',
            onClick: wrap(deleteStuff),
            ref: 'deleteLink'
          }, I18n.t('delete', 'Delete')))
        ] : void 0));
      })
    });
  });

}).call(this);
