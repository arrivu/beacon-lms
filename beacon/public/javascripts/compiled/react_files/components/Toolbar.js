(function() {
  define(['underscore', 'i18n!react_files', 'react', 'react-router', 'compiled/react/shared/utils/withReactDOM', './UploadButton', '../utils/openMoveDialog', '../utils/downloadStuffAsAZip', '../utils/deleteStuff', '../modules/customPropTypes', './RestrictedDialogForm', 'jquery', 'compiled/jquery.rails_flash_notifications'], function(_, I18n, React, Router, withReactDOM, UploadButton, openMoveDialog, downloadStuffAsAZip, deleteStuff, customPropTypes, RestrictedDialogForm, $) {
    var Toolbar;

    return Toolbar = React.createClass({
      displayName: 'Toolbar',
      mixins: [Router.Navigation],
      propTypes: {
        currentFolder: customPropTypes.folder,
        contextType: customPropTypes.contextType.isRequired,
        contextId: customPropTypes.contextId.isRequired
      },
      onSubmitSearch: function(event) {
        var query;

        event.preventDefault();
        query = {
          search_term: this.refs.searchTerm.getDOMNode().value
        };
        return this.transitionTo('search', {}, query);
      },
      addFolder: function(event) {
        event.preventDefault();
        return this.props.currentFolder.folders.add({});
      },
      downloadSelectedAsZip: function() {
        return downloadStuffAsAZip(this.props.selectedItems, {
          contextType: this.props.contextType,
          contextId: this.props.contextId
        });
      },
      componentDidUpdate: function(prevProps) {
        if (prevProps.selectedItems.length !== this.props.selectedItems.length) {
          return $.screenReaderFlashMessage(I18n.t('count_items_selected', '%{count} items selected', {
            count: this.props.selectedItems.length
          }));
        }
      },
      getPreviewQuery: function() {
        var retObj, _ref;

        if (!this.props.selectedItems.length) {
          return;
        }
        retObj = {
          preview: this.props.selectedItems[0].id
        };
        if (this.props.selectedItems.length !== 1) {
          retObj.only_preview = this.props.selectedItems.map(function(item) {
            return item.id;
          }).join(',');
        }
        if ((_ref = this.props.query) != null ? _ref.search_term : void 0) {
          retObj.search_term = this.props.query.search_term;
        }
        return retObj;
      },
      getPreviewRoute: function() {
        var _ref, _ref1;

        if ((_ref = this.props.query) != null ? _ref.search_term : void 0) {
          return 'search';
        } else if ((_ref1 = this.props.currentFolder) != null ? _ref1.urlPath() : void 0) {
          return 'folder';
        } else {
          return 'rootFolder';
        }
      },
      openRestrictedDialog: function() {
        var $dialog;

        $dialog = $('<div>').dialog({
          title: I18n.t("title.permissions", "Editing permissions for %{count} items", {
            count: this.props.selectedItems.length
          }),
          width: 400,
          close: function() {
            React.unmountComponentAtNode(this);
            return $(this).remove();
          }
        });
        return React.renderComponent(RestrictedDialogForm({
          models: this.props.selectedItems,
          closeDialog: function() {
            return $dialog.dialog('close');
          }
        }), $dialog[0]);
      },
      render: withReactDOM(function() {
        var downloadTitle, showingButtons, _ref,
          _this = this;

        showingButtons = this.props.selectedItems.length;
        downloadTitle = this.props.selectedItems.length === 1 ? I18n.t('download', 'Download') : I18n.t('download_as_zip', 'Download as Zip');
        return header({
          className: 'ef-header grid-row between-xs',
          role: 'region',
          'aria-label': I18n.t('files_toolbar', 'Files Toolbar')
        }, form({
          className: "col-lg-3 " + (showingButtons ? 'col-xs-4 col-sm-3 col-md-4' : 'col-xs-7 col-sm-5 col-md-4'),
          onSubmit: this.onSubmitSearch
        }, input({
          placeholder: I18n.t('search_for_files', 'Search for files'),
          'aria-label': I18n.t('search_for_files', 'Search for files'),
          type: 'search',
          ref: 'searchTerm',
          defaultValue: this.props.query.search_term
        })), div({
          className: "ui-buttonset col-xs " + (!showingButtons ? 'screenreader-only' : void 0)
        }, Router.Link({
          to: this.getPreviewRoute(),
          query: this.getPreviewQuery(),
          splat: (_ref = this.props.currentFolder) != null ? _ref.urlPath() : void 0,
          className: 'ui-button btn-view',
          title: I18n.t('view', 'View'),
          'data-tooltip': ''
        }, i({
          className: 'icon-search'
        })), this.props.userCanManageFilesForContext ? button({
          disabled: !showingButtons,
          className: 'ui-button btn-restrict',
          onClick: this.openRestrictedDialog,
          title: I18n.t('restrict_access', 'Restrict Access'),
          'aria-label': I18n.t('restrict_access', 'Restrict Access'),
          'data-tooltip': ''
        }, i({
          className: 'icon-unpublished'
        })) : void 0, button({
          disabled: !showingButtons,
          className: 'ui-button btn-download',
          onClick: this.downloadSelectedAsZip,
          title: downloadTitle,
          'aria-label': downloadTitle,
          'data-tooltip': ''
        }, i({
          className: 'icon-download'
        })), this.props.userCanManageFilesForContext ? button({
          disabled: !showingButtons,
          className: 'ui-button btn-move',
          onClick: function(event) {
            return openMoveDialog(_this.props.selectedItems, {
              contextType: _this.props.contextType,
              contextId: _this.props.contextId,
              returnFocusTo: event.target
            });
          },
          title: I18n.t('move', 'Move'),
          'aria-label': I18n.t('move', 'Move'),
          'data-tooltip': ''
        }, i({
          className: 'icon-copy-course'
        })) : void 0, this.props.userCanManageFilesForContext ? button({
          disabled: !showingButtons,
          className: 'ui-button btn-delete',
          onClick: function() {
            return deleteStuff(_this.props.selectedItems);
          },
          title: I18n.t('delete', 'Delete'),
          'aria-label': I18n.t('delete', 'Delete'),
          'data-tooltip': ''
        }, i({
          className: 'icon-trash'
        })) : void 0, span({
          className: 'hidden-tablet hidden-phone',
          style: {
            paddingLeft: 13
          }
        }, I18n.t('count_items_selected', '%{count} items selected', {
          count: this.props.selectedItems.length
        }))), this.props.userCanManageFilesForContext ? div({
          className: 'text-right'
        }, span({
          className: 'ui-buttonset'
        }, button({
          onClick: this.addFolder,
          className: 'btn btn-add-folder',
          'aria-label': I18n.t('add_folder', 'Add Folder')
        }, i({
          className: 'icon-plus'
        }), span({
          className: (showingButtons ? 'hidden-phone' : void 0)
        }, I18n.t('folder', 'Folder')))), span({
          className: 'ui-buttonset'
        }, UploadButton({
          currentFolder: this.props.currentFolder,
          showingButtons: showingButtons,
          contextId: this.props.contextId,
          contextType: this.props.contextType
        }))) : void 0);
      })
    });
  });

}).call(this);
