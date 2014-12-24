(function() {
  var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  define(['underscore', 'react', 'i18n!react_files', 'compiled/react/shared/utils/withReactDOM', '../modules/filesEnv', './ColumnHeaders', './LoadingIndicator', './FolderChild', '../utils/getAllPages', '../utils/updateAPIQuerySortParams', 'compiled/models/Folder', './CurrentUploads', './FilePreview', './UploadDropZone'], function(_, React, I18n, withReactDOM, filesEnv, ColumnHeaders, LoadingIndicator, FolderChild, getAllPages, updateAPIQuerySortParams, Folder, CurrentUploads, FilePreview, UploadDropZone) {
    var LEADING_SLASH_TILL_BUT_NOT_INCLUDING_NEXT_SLASH, ShowFolder;

    LEADING_SLASH_TILL_BUT_NOT_INCLUDING_NEXT_SLASH = /^\/[^\/]*/;
    return ShowFolder = React.createClass({
      displayName: 'ShowFolder',
      debouncedForceUpdate: _.debounce(function() {
        if (this.isMounted()) {
          return this.forceUpdate();
        }
      }, 0),
      registerListeners: function(props) {
        if (!props.currentFolder) {
          return;
        }
        props.currentFolder.folders.on('all', this.debouncedForceUpdate, this);
        return props.currentFolder.files.on('all', this.debouncedForceUpdate, this);
      },
      unregisterListeners: function() {
        var _ref;

        return (_ref = this.props.currentFolder) != null ? _ref.off(null, null, this) : void 0;
      },
      buildFolderPath: function(splat) {
        return encodeURI('/' + (splat || ''));
      },
      getCurrentFolder: function() {
        var context, contextId, contextType, path, pluralAssetString,
          _this = this;

        path = this.buildFolderPath(this.props.params.splat);
        if (filesEnv.showingAllContexts) {
          pluralAssetString = path.split('/')[1];
          context = filesEnv.contextsDictionary[pluralAssetString] || filesEnv.contexts[0];
          contextType = context.contextType, contextId = context.contextId;
          path = path.replace(LEADING_SLASH_TILL_BUT_NOT_INCLUDING_NEXT_SLASH, '');
        } else {
          contextType = filesEnv.contextType, contextId = filesEnv.contextId;
        }
        return Folder.resolvePath(contextType, contextId, path).then(function(rootTillCurrentFolder) {
          var currentFolder;

          currentFolder = rootTillCurrentFolder[rootTillCurrentFolder.length - 1];
          _this.props.onResolvePath({
            currentFolder: currentFolder,
            rootTillCurrentFolder: rootTillCurrentFolder,
            showingSearchResults: false
          });
          return [currentFolder.folders, currentFolder.files].forEach(function(collection) {
            updateAPIQuerySortParams(collection, _this.props.query);
            return getAllPages(collection, _this.debouncedForceUpdate);
          });
        }, function(jqXHR) {
          var parsedResponse;

          try {
            parsedResponse = $.parseJSON(jqXHR.responseText);
          } catch (_error) {}
          if (parsedResponse) {
            return _this.setState({
              errorMessages: parsedResponse.errors
            });
          }
        });
      },
      componentWillMount: function() {
        this.registerListeners(this.props);
        return this.getCurrentFolder();
      },
      componentWillUnmount: function() {
        var _this = this;

        this.unregisterListeners();
        return setTimeout(function() {
          return _this.props.onResolvePath({
            currentFolder: void 0,
            rootTillCurrentFolder: void 0
          });
        });
      },
      componentWillReceiveProps: function(newProps) {
        this.unregisterListeners();
        if (!newProps.currentFolder) {
          return;
        }
        this.registerListeners(newProps);
        return [newProps.currentFolder.folders, newProps.currentFolder.files].forEach(function(collection) {
          return updateAPIQuerySortParams(collection, newProps.query);
        });
      },
      render: withReactDOM(function() {
        var _ref,
          _this = this;

        if ((_ref = this.state) != null ? _ref.errorMessages : void 0) {
          return div({}, this.state.errorMessages.map(function(error) {
            return div({
              className: 'muted'
            }, error.message);
          }));
        }
        if (!this.props.currentFolder) {
          return div({
            ref: 'emptyDiv'
          });
        }
        return div({
          role: 'grid'
        }, UploadDropZone({
          currentFolder: this.props.currentFolder
        }), CurrentUploads({}), ColumnHeaders({
          to: (this.props.params.splat ? 'folder' : 'rootFolder'),
          query: this.props.query,
          toggleAllSelected: this.props.toggleAllSelected,
          areAllItemsSelected: this.props.areAllItemsSelected,
          splat: this.props.params.splat
        }), this.props.currentFolder.isEmpty() ? div({
          ref: 'folderEmpty',
          className: 'muted'
        }, I18n.t('this_folder_is_empty', 'This folder is empty')) : this.props.currentFolder.children(this.props.query).map(function(child) {
          return FolderChild({
            key: child.cid,
            model: child,
            isSelected: __indexOf.call(_this.props.selectedItems, child) >= 0,
            toggleSelected: _this.props.toggleItemSelected.bind(null, child),
            userCanManageFilesForContext: _this.props.userCanManageFilesForContext,
            dndOptions: _this.props.dndOptions
          });
        }), LoadingIndicator({
          isLoading: this.props.currentFolder.folders.fetchingNextPage || this.props.currentFolder.files.fetchingNextPage
        }), this.props.query.preview != null ? FilePreview({
          currentFolder: this.props.currentFolder,
          params: this.props.params,
          query: this.props.query
        }) : void 0);
      })
    });
  });

}).call(this);
