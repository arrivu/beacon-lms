(function() {
  var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  define(['underscore', 'react', 'react-router', 'react-modal', '../modules/customPropTypes', 'i18n!file_preview', './FriendlyDatetime', 'compiled/util/friendlyBytes', 'compiled/models/Folder', 'compiled/react/shared/utils/withReactDOM', '../utils/collectionHandler', './FilePreviewFooter', './FilePreviewInfoPanel', '../modules/filesEnv'], function(_, React, ReactRouter, ReactModal, customPropTypes, I18n, FriendlyDatetime, friendlyBytes, Folder, withReactDOM, collectionHandler, FilePreviewFooter, FilePreviewInfoPanel, filesEnv) {
    var FilePreview;

    return FilePreview = React.createClass({
      displayName: 'FilePreview',
      mixins: [React.addons.PureRenderMixin, ReactRouter.Navigation],
      propTypes: {
        currentFolder: customPropTypes.folder,
        query: React.PropTypes.object,
        collection: React.PropTypes.object,
        params: React.PropTypes.object
      },
      getInitialState: function() {
        return {
          showInfoPanel: false,
          showFooter: false,
          showFooterBtn: true,
          displayedItem: null
        };
      },
      componentWillMount: function() {
        var items;

        items = this.getItemsToView(this.props);
        return this.setState(this.stateProperties(items, this.props));
      },
      componentDidMount: function() {
        return $('.ReactModal__Overlay').on('keydown', this.handleKeyboardNavigation);
      },
      componentWillUnmount: function() {
        return $('.ReactModal__Overlay').off('keydown', this.handleKeyboardNavigation);
      },
      componentWillReceiveProps: function(newProps) {
        var items;

        items = this.getItemsToView(newProps);
        return this.setState(this.stateProperties(items, newProps), this.scrollFooterToItem);
      },
      getItemsToView: function(props) {
        var files, folder, initialItem, isSearchResults, onlyIdsToPreview, otherItems, _ref,
          _this = this;

        onlyIdsToPreview = (_ref = props.query.only_preview) != null ? _ref.split(',') : void 0;
        isSearchResults = !!props.query.search_term;
        if (isSearchResults) {
          folder = props.collection.models;
          files = folder;
        } else {
          folder = props.currentFolder;
          files = folder.files;
        }
        otherItems = onlyIdsToPreview ? files.filter(function(file) {
          var _ref1;

          return _ref1 = file.id, __indexOf.call(onlyIdsToPreview, _ref1) >= 0;
        }) : files;
        if (props.query.preview) {
          initialItem = isSearchResults ? _.find(folder, function(file) {
            return file.id === props.query.preview;
          }) : files.get(props.query.preview);
        } else {
          initialItem = otherItems instanceof Backbone.Collection ? otherItems.first() : _.first(otherItems);
        }
        return {
          initialItem: initialItem,
          otherItems: otherItems
        };
      },
      stateProperties: function(items, props) {
        return {
          initialItem: items.initialItem,
          displayedItem: items.initialItem,
          otherItems: items.otherItems,
          currentFolder: props.currentFolder,
          params: props.params,
          otherItemsString: (props.query.only_preview ? props.query.only_preview : void 0),
          otherItemsIsBackBoneCollection: items.otherItems instanceof Backbone.Collection
        };
      },
      scrollFooterToItem: function() {
        var $active, $footerList, activeOffset, footerOffset;

        if (this.state.showFooter) {
          $active = $('.ef-file-preview-footer-active');
          $footerList = $('.ef-file-preview-footer-list');
          footerOffset = $footerList.offset();
          activeOffset = $active.offset();
          if (activeOffset.left > (footerOffset.left + $footerList.width())) {
            $footerList.scrollTo($active);
          }
          if (activeOffset.left < footerOffset.left) {
            return $footerList.scrollTo($active);
          }
        }
      },
      setUpOtherItemsQuery: function(otherItems) {
        return otherItems.map(function(item) {
          return item.id;
        }).join(',');
      },
      getRouteIdentifier: function() {
        var _ref;

        if (this.props.query.search_term) {
          return 'search';
        } else if ((_ref = this.props.currentFolder) != null ? _ref.urlPath() : void 0) {
          return 'folder';
        } else {
          return 'rootFolder';
        }
      },
      getNavigationParams: function(opts) {
        var obj;

        if (opts == null) {
          opts = {
            id: null,
            except: []
          };
        }
        obj = {
          preview: (opts.id ? opts.id : void 0),
          search_term: (this.props.search_term ? this.props.query.search_term : void 0),
          only_preview: (this.state.otherItemsString ? this.state.otherItemsString : void 0)
        };
        _.each(obj, function(v, k) {
          var _ref;

          if (!v || (((_ref = opts.except) != null ? _ref.length : void 0) && (opts.except === k || __indexOf.call(opts.except, k) >= 0))) {
            return delete obj[k];
          }
        });
        return obj;
      },
      openInfoPanel: function(event) {
        event.preventDefault();
        return this.setState({
          showInfoPanel: !this.state.showInfoPanel
        });
      },
      toggleFooter: function(event) {
        event.preventDefault();
        return this.setState({
          showFooter: !this.state.showFooter
        });
      },
      handleKeyboardNavigation: function(event) {
        var nextItem;

        if (!(event.keyCode === $.ui.keyCode.LEFT || event.keyCode === $.ui.keyCode.RIGHT)) {
          return null;
        }
        if (event.keyCode === $.ui.keyCode.LEFT) {
          nextItem = collectionHandler.getPreviousInRelationTo(this.state.otherItems, this.state.displayedItem);
        }
        if (event.keyCode === $.ui.keyCode.RIGHT) {
          nextItem = collectionHandler.getNextInRelationTo(this.state.otherItems, this.state.displayedItem);
        }
        return this.transitionTo(this.getRouteIdentifier(), this.props.params, this.getNavigationParams({
          id: nextItem.id
        }));
      },
      getStatusMessage: function() {
        return 'A nice status message ;) ';
      },
      renderArrowLink: function(direction) {
        var curItemIndex, goToItem, goToItemIndex;

        curItemIndex = this.state.otherItems.indexOf(this.state.displayedItem);
        switch (direction) {
          case 'left':
            goToItemIndex = curItemIndex - 1;
            if (goToItemIndex < 0) {
              goToItemIndex = this.state.otherItems.length - 1;
            }
            break;
          case 'right':
            goToItemIndex = curItemIndex + 1;
            if (goToItemIndex > this.state.otherItems.length - 1) {
              goToItemIndex = 0;
            }
        }
        goToItem = this.state.otherItemsIsBackBoneCollection ? this.state.otherItems.at(goToItemIndex) : this.state.otherItems[goToItemIndex];
        if (this.state.otherItemsString) {
          this.props.params.only_preview = this.state.otherItemsString;
        }
        return div({
          className: 'col-xs-1 full-height'
        }, ReactRouter.Link({
          to: this.getRouteIdentifier(),
          query: (goToItem ? this.getNavigationParams({
            id: goToItem.id
          }) : void 0),
          params: this.props.params,
          className: 'ef-file-preview-arrow-link'
        }, div({
          className: 'ef-file-preview-arrow'
        }, i({
          className: "icon-arrow-open-" + direction
        }))));
      },
      scrollLeft: function(event) {
        var width;

        width = $('.ef-file-preview-footer-list').width();
        return $('.ef-file-preview-footer-list').animate({
          scrollLeft: '-=' + width
        }, 300, 'easeOutQuad');
      },
      scrollRight: function(event) {
        var width;

        width = $('.ef-file-preview-footer-list').width();
        return $('.ef-file-preview-footer-list').animate({
          scrollLeft: '+=' + width
        }, 300, 'easeOutQuad');
      },
      closeModal: function() {
        return this.transitionTo(this.getRouteIdentifier(), this.props.params, this.getNavigationParams({
          except: 'only_preview'
        }));
      },
      render: withReactDOM(function() {
        var _ref, _ref1, _ref2, _ref3;

        return ReactModal({
          isOpen: true,
          onRequestClose: this.closeModal,
          closeTimeoutMS: 10
        }, div({
          className: 'ef-file-preview-overlay'
        }, div({
          className: 'ef-file-preview-container'
        }, div({
          className: 'ef-file-preview-header grid-row middle-xs'
        }, div({
          className: 'col-xs'
        }, div({
          className: 'ef-file-preview-header-filename-container'
        }, h1({
          className: 'ef-file-preview-header-filename'
        }, (_ref = this.state.initialItem) != null ? _ref.displayName() : void 0))), div({
          className: 'col-xs end-xs'
        }, div({
          className: 'ef-file-preview-header-buttons'
        }, a({
          className: 'ef-file-preview-header-download ef-file-preview-button',
          href: (_ref1 = this.state.displayedItem) != null ? _ref1.get('url') : void 0
        }, i({
          className: 'icon-download'
        }), I18n.t('file_preview_headerbutton_download', ' Download')), a({
          className: 'ef-file-preview-header-info ef-file-preview-button',
          href: '#',
          onClick: this.openInfoPanel
        }, i({
          className: 'icon-info'
        }), I18n.t('file_preview_headerbutton_info', ' Info')), ReactRouter.Link({
          to: this.getRouteIdentifier(),
          query: this.getNavigationParams({
            except: 'only_preview'
          }),
          params: this.props.params,
          className: 'ef-file-preview-header-close ef-file-preview-button'
        }, i({
          className: 'icon-end'
        }), I18n.t('file_preview_headerbutton_close', ' Close'))))), div({
          className: 'ef-file-preview-preview grid-row middle-xs'
        }, ((_ref2 = this.state.otherItems) != null ? _ref2.length : void 0) > 0 ? this.renderArrowLink('left') : void 0, this.state.displayedItem != null ? iframe({
          src: "/" + filesEnv.contextType + "/" + filesEnv.contextId + "/files/" + this.state.displayedItem.id + "/file_preview",
          className: 'ef-file-preview-frame'
        }) : void 0, ((_ref3 = this.state.otherItems) != null ? _ref3.length : void 0) > 0 ? this.renderArrowLink('right') : void 0, this.state.showInfoPanel ? FilePreviewInfoPanel({
          displayedItem: this.state.displayedItem,
          getStatusMessage: this.getStatusMessage
        }) : void 0), div({
          className: 'ef-file-preview-toggle-row grid-row middle-xs'
        }, this.state.showFooterBtn ? a({
          className: 'ef-file-preview-toggle col-xs-1 off-xs-1',
          href: '#',
          onClick: this.toggleFooter,
          role: 'button',
          style: this.state.showFooter ? {
            bottom: '21%'
          } : void 0
        }, this.state.showFooter ? I18n.t('file_preview_hide', 'Hide') : I18n.t('file_preview_show', 'Show')) : void 0), this.state.showFooter ? FilePreviewFooter({
          otherItems: this.state.otherItems,
          to: this.getRouteIdentifier(),
          splat: this.props.params.splat,
          query: this.getNavigationParams,
          displayedItem: this.state.displayedItem
        }) : void 0)));
      })
    });
  });

}).call(this);
