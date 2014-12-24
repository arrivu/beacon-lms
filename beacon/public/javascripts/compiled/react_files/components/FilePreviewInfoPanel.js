(function() {
  define(['react', 'i18n!file_preview', './FriendlyDatetime', 'compiled/util/friendlyBytes', 'compiled/react/shared/utils/withReactDOM', '../modules/customPropTypes'], function(React, I18n, FriendlyDatetime, friendlyBytes, withReactDOM, customPropTypes) {
    var FilePreviewInfoPanel;

    return FilePreviewInfoPanel = React.createClass({
      displayName: 'FilePreviewInfoPanel',
      propTypes: {
        displayedItem: customPropTypes.filesystemObject.isRequired,
        getStatusMessage: React.PropTypes.func
      },
      render: withReactDOM(function() {
        var _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8;

        return div({
          className: 'col-xs-4 full-height ef-file-preview-information'
        }, table({
          className: 'ef-file-preview-infotable'
        }, tbody({}, tr({}, th({
          scope: 'row'
        }, I18n.t('file_preview_infotable_name', 'Name')), td({}, (_ref = this.props.displayedItem) != null ? _ref.displayName() : void 0)), tr({}, th({
          scope: 'row'
        }, I18n.t('file_preview_infotable_status', 'Status')), td({}, this.props.getStatusMessage())), tr({}, th({
          scope: 'row'
        }, I18n.t('file_preview_infotable_kind', 'Kind')), td({}, (_ref1 = this.props.displayedItem) != null ? _ref1.get('content-type') : void 0)), tr({}, th({
          scope: 'row'
        }, I18n.t('file_preview_infotable_size', 'Size')), td({}, friendlyBytes((_ref2 = this.props.displayedItem) != null ? _ref2.get('size') : void 0))), tr({}, th({
          scope: 'row'
        }, I18n.t('file_preview_infotable_datemodified', 'Date Modified')), td({}, FriendlyDatetime({
          datetime: (_ref3 = this.props.displayedItem) != null ? _ref3.get('updated_at') : void 0
        }))), ((_ref4 = this.props.displayedItem) != null ? _ref4.get('user') : void 0) ? tr({}, th({
          scope: 'row'
        }, I18n.t('file_preview_infotable_modifiedby', 'Modified By')), td({}, img({
          className: 'avatar',
          src: (_ref5 = this.props.displayedItem) != null ? _ref5.get('user').avatar_image_url : void 0
        }), a({
          href: (_ref6 = this.props.displayedItem) != null ? _ref6.get('user').html_url : void 0
        }, (_ref7 = this.props.displayedItem) != null ? _ref7.get('user').display_name : void 0))) : void 0, tr({}, th({
          scope: 'row'
        }, I18n.t('file_preview_infotable_datecreated', 'Date Created')), td({}, FriendlyDatetime({
          datetime: (_ref8 = this.props.displayedItem) != null ? _ref8.get('created_at') : void 0
        }))))));
      })
    });
  });

}).call(this);
