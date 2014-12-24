(function() {
  define(['underscore', 'i18n!react_files', 'react', 'react-router', '../mixins/BackboneMixin', 'compiled/react/shared/utils/withReactDOM', './FriendlyDatetime', './ItemCog', './FilesystemObjectThumbnail', 'compiled/util/friendlyBytes', 'compiled/models/Folder', 'compiled/fn/preventDefault', './PublishCloud'], function(_, I18n, React, _arg, BackboneMixin, withReactDOM, FriendlyDatetime, ItemCog, FilesystemObjectThumbnail, friendlyBytes, Folder, preventDefault, PublishCloud) {
    var FolderChild, Link;

    Link = _arg.Link;
    return FolderChild = React.createClass({
      displayName: 'FolderChild',
      mixins: [BackboneMixin('model')],
      getInitialState: function() {
        return {
          editing: this.props.model.isNew()
        };
      },
      componentDidMount: function() {
        if (this.state.editing) {
          return this.focusNameInput();
        }
      },
      startEditingName: function() {
        return this.setState({
          editing: true
        }, this.focusNameInput);
      },
      focusNameInput: function() {
        return this.refs.newName.getDOMNode().focus();
      },
      saveNameEdit: function() {
        this.props.model.save({
          name: this.refs.newName.getDOMNode().value
        });
        return this.setState({
          editing: false
        });
      },
      cancelEditingName: function() {
        if (this.props.model.isNew()) {
          this.props.model.collection.remove(this.props.model);
        }
        return this.setState({
          editing: false
        });
      },
      getAttributesForRootNode: function() {
        var attrs, toggleActive,
          _this = this;

        attrs = {
          onClick: this.props.toggleSelected,
          className: "ef-item-row                   " + (this.props.isSelected ? 'ef-item-selected' : void 0) + "                   " + (this.state.isActiveDragTarget ? 'activeDragTarget' : void 0),
          role: 'row',
          'aria-selected': this.props.isSelected,
          draggable: true,
          onDragStart: function() {
            var _ref;

            if (!_this.props.isSelected) {
              _this.props.toggleSelected();
            }
            return (_ref = _this.props.dndOptions).onItemDragStart.apply(_ref, arguments);
          }
        };
        if (this.props.model instanceof Folder) {
          toggleActive = function(setActive) {
            if (_this.state.isActiveDragTarget !== setActive) {
              return _this.setState({
                isActiveDragTarget: setActive
              });
            }
          };
          attrs.onDragEnter = attrs.onDragOver = function(event) {
            return _this.props.dndOptions.onItemDragEnterOrOver(event, toggleActive(true));
          };
          attrs.onDragLeave = attrs.onDragEnd = function(event) {
            return _this.props.dndOptions.onItemDragLeaveOrEnd(event, toggleActive(false));
          };
          attrs.onDrop = function(event) {
            return _this.props.dndOptions.onItemDrop(event, _this.props.model, toggleActive(false));
          };
        }
        return attrs;
      },
      render: withReactDOM(function() {
        var _ref, _ref1,
          _this = this;

        return div(this.getAttributesForRootNode(), label({
          className: 'screenreader-only',
          role: 'gridcell'
        }, input({
          type: 'checkbox',
          className: 'multiselectable-toggler',
          checked: this.props.isSelected,
          onChange: function() {}
        }), I18n.t('labels.select', 'Select This Item')), div({
          className: 'ef-name-col ellipsis',
          role: 'rowheader'
        }, this.state.editing ? form({
          className: 'ef-edit-name-form',
          onSubmit: preventDefault(this.saveNameEdit)
        }, input({
          type: 'text',
          ref: 'newName',
          className: 'input-block-level',
          placeholder: I18n.t('name', 'Name'),
          'aria-label': I18n.t('folder_name', 'Folder Name'),
          defaultValue: this.props.model.displayName(),
          onKeyUp: function(event) {
            if (event.keyCode === 27) {
              return _this.cancelEditingName();
            }
          }
        }), button({
          type: 'button',
          className: 'btn btn-link ef-edit-name-cancel',
          'aria-label': I18n.t('cancel', 'Cancel'),
          onClick: this.cancelEditingName
        }, i({
          className: 'icon-x'
        }))) : this.props.model instanceof Folder ? Link({
          to: 'folder',
          className: 'media',
          params: {
            splat: this.props.model.urlPath()
          }
        }, span({
          className: 'pull-left'
        }, FilesystemObjectThumbnail({
          model: this.props.model
        })), span({
          className: 'media-body'
        }, this.props.model.displayName())) : a({
          href: this.props.model.get('url'),
          className: 'media'
        }, span({
          className: 'pull-left'
        }, FilesystemObjectThumbnail({
          model: this.props.model
        })), span({
          className: 'media-body'
        }, this.props.model.displayName()))), div({
          className: 'screenreader-only',
          role: 'gridcell'
        }, this.props.model instanceof Folder ? I18n.t('folder', 'Folder') : this.props.model.get('content-type')), div({
          className: 'ef-date-created-col',
          role: 'gridcell'
        }, FriendlyDatetime({
          datetime: this.props.model.get('created_at')
        })), div({
          className: 'ef-date-modified-col',
          role: 'gridcell'
        }, FriendlyDatetime({
          datetime: this.props.model.get('updated_at')
        })), div({
          className: 'ef-modified-by-col ellipsis',
          role: 'gridcell'
        }, a({
          href: (_ref = this.props.model.get('user')) != null ? _ref.html_url : void 0,
          className: 'ef-plain-link'
        }, (_ref1 = this.props.model.get('user')) != null ? _ref1.display_name : void 0)), div({
          className: 'ef-size-col',
          role: 'gridcell'
        }, friendlyBytes(this.props.model.get('size'))), div({
          className: 'ef-links-col',
          role: 'gridcell'
        }, PublishCloud({
          model: this.props.model,
          ref: 'publishButton',
          userCanManageFilesForContext: this.props.userCanManageFilesForContext
        }), ItemCog({
          model: this.props.model,
          startEditingName: this.startEditingName,
          userCanManageFilesForContext: this.props.userCanManageFilesForContext
        })));
      })
    });
  });

}).call(this);
