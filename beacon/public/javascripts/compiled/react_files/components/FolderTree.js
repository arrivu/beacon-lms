(function() {
  define(['react', 'react-router', 'compiled/views/FileBrowserView', '../modules/customPropTypes'], function(React, Router, FileBrowserView, customPropTypes) {
    var FolderTree;

    return FolderTree = React.createClass({
      displayName: 'FolderTree',
      propTypes: {
        rootFoldersToShow: React.PropTypes.arrayOf(customPropTypes.folder).isRequired,
        rootTillCurrentFolder: React.PropTypes.arrayOf(customPropTypes.folder)
      },
      mixins: [Router.Navigation],
      componentDidMount: function() {
        new FileBrowserView({
          onlyShowFolders: true,
          rootFoldersToShow: this.props.rootFoldersToShow,
          onClick: this.onClick,
          dndOptions: this.props.dndOptions,
          href: this.hrefFor
        }).render().$el.appendTo(this.refs.FolderTreeHolder.getDOMNode());
        return this.expandTillCurrentFolder(this.props);
      },
      componentWillReceiveProps: function(newProps) {
        return this.expandTillCurrentFolder(newProps);
      },
      onClick: function(event, folder) {
        event.preventDefault();
        return this.transitionTo((folder.urlPath() ? 'folder' : 'rootFolder'), {
          splat: folder.urlPath()
        });
      },
      hrefFor: function(folder) {
        return this.makeHref((folder.urlPath() ? 'folder' : 'rootFolder'), {
          splat: folder.urlPath()
        });
      },
      expandTillCurrentFolder: function(props) {
        var expandFolder;

        expandFolder = function(folderIndex) {
          var folder, _ref;

          if (!(folder = (_ref = props.rootTillCurrentFolder) != null ? _ref[folderIndex] : void 0)) {
            return;
          }
          return folder.expand(false, {
            onlyShowFolders: true
          }).then(function() {
            return expandFolder(folderIndex + 1);
          });
        };
        return expandFolder(0);
      },
      render: function() {
        return React.DOM.div({
          className: "ef-folder-list",
          ref: 'FolderTreeHolder'
        });
      }
    });
  });

}).call(this);
