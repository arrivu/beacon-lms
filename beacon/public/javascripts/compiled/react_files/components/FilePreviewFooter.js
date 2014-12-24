(function() {
  define(['react', 'react-router', 'i18n!file_preview', 'compiled/react/shared/utils/withReactDOM', '../modules/customPropTypes'], function(React, ReactRouter, I18n, withReactDOM, customPropTypes) {
    var FilePreviewFooter;

    return FilePreviewFooter = React.createClass({
      displayName: 'FilePreviewFooter',
      propTypes: {
        otherItems: React.PropTypes.object,
        to: React.PropTypes.string,
        splat: React.PropTypes.string,
        query: React.PropTypes.func,
        displayedItem: customPropTypes.filesystemObject.isRequired
      },
      thumbnails: function() {
        var _this = this;

        return this.props.otherItems.map(function(file) {
          var _ref;

          return li({
            className: 'ef-file-preview-footer-list-item',
            key: file.id
          }, figure({
            className: 'ef-file-preview-footer-item'
          }, ReactRouter.Link({
            to: _this.props.to,
            splat: _this.props.splat,
            query: _this.props.query(file.id)
          }, div({
            className: file.displayName() === ((_ref = _this.props.displayedItem) != null ? _ref.displayName() : void 0) ? 'ef-file-preview-footer-image ef-file-preview-footer-active' : 'ef-file-preview-footer-image',
            style: {
              'background-image': 'url(' + file.get('thumbnail_url') + ')'
            }
          })), figcaption({}, file.displayName())));
        });
      },
      render: withReactDOM(function() {
        return div({
          className: 'ef-file-preview-footer grid-row'
        }, div({
          className: 'col-xs-1',
          onClick: this.scrollLeft
        }, div({
          className: 'ef-file-preview-footer-arrow'
        }, i({
          className: 'icon-arrow-open-left'
        }))), div({
          className: 'col-xs-10'
        }, ul({
          className: 'ef-file-preview-footer-list'
        }, this.thumbnails())), div({
          className: 'col-xs-1',
          onClick: this.scrollRight
        }, div({
          className: 'ef-file-preview-footer-arrow'
        }, i({
          className: 'icon-arrow-open-right'
        }))));
      })
    });
  });

}).call(this);
