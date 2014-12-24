(function() {
  var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  define(['underscore', 'i18n!react_files', 'react', 'compiled/models/Folder', 'compiled/collections/FilesCollection', 'compiled/react/shared/utils/withReactDOM', './ColumnHeaders', './LoadingIndicator', './FolderChild', '../modules/customPropTypes', '../utils/updateAPIQuerySortParams', '../utils/getAllPages', './FilePreview'], function(_, I18n, React, Folder, FilesCollection, withReactDOM, ColumnHeaders, LoadingIndicator, FolderChild, customPropTypes, updateAPIQuerySortParams, getAllPages, FilePreview) {
    var SearchResults;

    return SearchResults = React.createClass({
      displayName: 'SearchResults',
      propTypes: {
        contextType: customPropTypes.contextType,
        contextId: customPropTypes.contextId
      },
      getInitialState: function() {
        return {
          collection: new FilesCollection
        };
      },
      updateResults: function(props) {
        var forceUpdate, oldUrl,
          _this = this;

        oldUrl = this.state.collection.url;
        this.state.collection.url = "" + window.location.origin + "/api/v1/" + this.props.contextType + "/" + this.props.contextId + "/files";
        updateAPIQuerySortParams(this.state.collection, this.props.query);
        if (this.state.collection.url === oldUrl) {
          return;
        }
        this.setState({
          collection: this.state.collection
        });
        if (!(this.state.collection.loadedAll && _.isEqual(this.props.query.search_term, props.query.search_term))) {
          forceUpdate = function() {
            if (_this.isMounted()) {
              return _this.forceUpdate();
            }
          };
          return this.state.collection.fetch({
            data: props.query
          }).then(forceUpdate).then(getAllPages.bind(null, this.state.collection, forceUpdate));
        }
      },
      componentWillReceiveProps: function(newProps) {
        return this.updateResults(newProps);
      },
      componentWillMount: function() {
        return this.updateResults(this.props);
      },
      componentDidMount: function() {
        var _this = this;

        return setTimeout(function() {
          return _this.props.onResolvePath({
            currentFolder: null,
            rootTillCurrentFolder: null,
            showingSearchResults: true,
            searchResultCollection: _this.state.collection
          });
        });
      },
      render: withReactDOM(function() {
        var _this = this;

        return div({
          role: 'grid'
        }, ColumnHeaders({
          to: 'search',
          query: this.props.query,
          toggleAllSelected: this.props.toggleAllSelected,
          areAllItemsSelected: this.props.areAllItemsSelected
        }), this.state.collection.models.sort(Folder.prototype.childrenSorter.bind(this.state.collection, this.props.query.sort, this.props.query.order)).map(function(child) {
          return FolderChild({
            key: child.cid,
            model: child,
            isSelected: __indexOf.call(_this.props.selectedItems, child) >= 0,
            toggleSelected: _this.props.toggleItemSelected.bind(null, child),
            userCanManageFilesForContext: _this.props.userCanManageFilesForContext,
            dndOptions: _this.props.dndOptions
          });
        }), LoadingIndicator({
          isLoading: !this.state.collection.loadedAll
        }), this.state.collection.loadedAll && (this.state.collection.length === 0) ? div({
          ref: 'noResultsFound'
        }, p({}, I18n.t('errors.no_match.your_search', 'Your search - "%{search_term}" - did not match any files.', {
          search_term: this.props.query.search_term
        })), p({}, I18n.t('errors.no_match.suggestions', 'Suggestions:')), ul({}, li({}, I18n.t('errors.no_match.spelled', 'Make sure all words are spelled correctly.')), li({}, I18n.t('errors.no_match.keywords', 'Try different keywords.')), li({}, I18n.t('errors.no_match.three_chars', 'Enter at least 3 letters in the search box.')))) : void 0, (this.props.query.preview != null) && this.state.collection.length ? FilePreview({
          params: this.props.params,
          query: this.props.query,
          collection: this.state.collection
        }) : void 0);
      })
    });
  });

}).call(this);
