(function() {
  define(['jquery', 'react', 'react-router', 'compiled/react/shared/utils/withReactDOM', '../modules/customPropTypes'], function($, React, _arg, withReactDOM, customPropTypes) {
    var BreadcrumbCollapsedContainer, Link;

    Link = _arg.Link;
    return BreadcrumbCollapsedContainer = React.createClass({
      displayName: 'BreadcrumbCollapsedContainer',
      propTypes: {
        foldersToContain: React.PropTypes.arrayOf(customPropTypes.folder).isRequired
      },
      getInitialState: function() {
        return {
          open: false
        };
      },
      open: function() {
        clearTimeout(this.timeout);
        return this.setState({
          open: true
        });
      },
      close: function() {
        var _this = this;

        return this.timeout = setTimeout(function() {
          return _this.setState({
            open: false
          });
        }, 100);
      },
      render: withReactDOM(function() {
        var _this = this;

        return li({
          href: '#',
          onMouseEnter: this.open,
          onMouseLeave: this.close,
          onFocus: this.open,
          onBlur: this.close,
          style: {
            position: 'relative'
          }
        }, a({
          href: '#'
        }, '…'), div({
          className: "popover bottom ef-breadcrumb-popover " + (this.state.open ? 'open' : void 0)
        }, div({
          className: 'arrow'
        }), div({
          className: 'popover-content'
        }, ul({}, this.props.foldersToContain.map(function(folder) {
          return li({}, Link({
            to: (folder.urlPath() ? 'folder' : 'rootFolder'),
            splat: folder.urlPath(),
            activeClassName: 'active',
            className: 'ellipsis'
          }, i({
            className: 'ef-big-icon icon-folder'
          }), span({}, folder.get('name'))));
        })))));
      })
    });
  });

}).call(this);
