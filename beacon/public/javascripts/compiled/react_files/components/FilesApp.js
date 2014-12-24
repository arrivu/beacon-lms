(function() {
  define(['react', 'i18n!react_files', 'compiled/react/shared/utils/withReactDOM', 'compiled/str/splitAssetString', './Toolbar', './Breadcrumbs', './FolderTree', './FilesUsage', '../mixins/MultiselectableMixin', '../mixins/dndMixin', '../modules/filesEnv'], function(React, I18n, withReactDOM, splitAssetString, Toolbar, Breadcrumbs, FolderTree, FilesUsage, MultiselectableMixin, dndMixin, filesEnv) {
    var FilesApp;

    return FilesApp = React.createClass({
      displayName: 'FilesApp',
      onResolvePath: function(_arg) {
        var currentFolder, rootTillCurrentFolder, searchResultCollection, showingSearchResults;

        currentFolder = _arg.currentFolder, rootTillCurrentFolder = _arg.rootTillCurrentFolder, showingSearchResults = _arg.showingSearchResults, searchResultCollection = _arg.searchResultCollection;
        return this.setState({
          currentFolder: currentFolder,
          rootTillCurrentFolder: rootTillCurrentFolder,
          showingSearchResults: showingSearchResults,
          selectedItems: [],
          searchResultCollection: searchResultCollection
        });
      },
      getInitialState: function() {
        return {
          currentFolder: void 0,
          rootTillCurrentFolder: void 0,
          showingSearchResults: false,
          selectedItems: void 0
        };
      },
      mixins: [MultiselectableMixin, dndMixin],
      selectables: function() {
        if (this.state.showingSearchResults) {
          return this.state.searchResultCollection.models;
        } else {
          return this.state.currentFolder.children(this.props.query);
        }
      },
      render: withReactDOM(function() {
        var contextId, contextType, userCanManageFilesForContext;

        if (this.state.currentFolder) {
          contextType = this.state.currentFolder.get('context_type').toLowerCase() + 's';
          contextId = this.state.currentFolder.get('context_id');
        } else {
          contextType = filesEnv.contextType;
          contextId = filesEnv.contextId;
        }
        userCanManageFilesForContext = filesEnv.userHasPermission({
          contextType: contextType,
          contextId: contextId
        }, 'manage_files');
        return div(null, header({}, h1({
          className: 'screenreader-only'
        }, I18n.t('files_heading', "Files"))), Breadcrumbs({
          rootTillCurrentFolder: this.state.rootTillCurrentFolder,
          query: this.props.query,
          showingSearchResults: this.state.showingSearchResults
        }), Toolbar({
          currentFolder: this.state.currentFolder,
          query: this.props.query,
          selectedItems: this.state.selectedItems,
          clearSelectedItems: this.clearSelectedItems,
          contextType: contextType,
          contextId: contextId,
          userCanManageFilesForContext: userCanManageFilesForContext
        }), div({
          className: 'ef-main'
        }, aside({
          className: 'visible-desktop ef-folder-content',
          role: 'region',
          'aria-label': I18n.t('folder_browsing_tree', 'Folder Browsing Tree')
        }, FolderTree({
          rootTillCurrentFolder: this.state.rootTillCurrentFolder,
          rootFoldersToShow: filesEnv.rootFolders,
          dndOptions: {
            onItemDragEnterOrOver: this.onItemDragEnterOrOver,
            onItemDragLeaveOrEnd: this.onItemDragLeaveOrEnd,
            onItemDrop: this.onItemDrop
          }
        })), div({
          className: 'ef-directory',
          role: 'region',
          'aria-label': I18n.t('file_list', 'File List')
        }, this.props.activeRouteHandler({
          onResolvePath: this.onResolvePath,
          currentFolder: this.state.currentFolder,
          contextType: contextType,
          contextId: contextId,
          selectedItems: this.state.selectedItems,
          toggleItemSelected: this.toggleItemSelected,
          toggleAllSelected: this.toggleAllSelected,
          areAllItemsSelected: this.areAllItemsSelected,
          userCanManageFilesForContext: userCanManageFilesForContext,
          dndOptions: {
            onItemDragStart: this.onItemDragStart,
            onItemDragEnterOrOver: this.onItemDragEnterOrOver,
            onItemDragLeaveOrEnd: this.onItemDragLeaveOrEnd,
            onItemDrop: this.onItemDrop
          }
        }))), div({
          className: 'ef-footer grid-row'
        }, userCanManageFilesForContext ? FilesUsage({
          className: 'col-xs-3',
          contextType: contextType,
          contextId: contextId
        }) : void 0, !filesEnv.showingAllContexts ? div({
          className: 'col-xs'
        }, div({}, a({
          className: 'pull-right',
          href: '/files?show_all_contexts=1'
        }, I18n.t('all_my_files', 'All My Files')))) : void 0));
      })
    });
  });

}).call(this);
