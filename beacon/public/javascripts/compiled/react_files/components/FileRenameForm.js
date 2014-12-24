(function() {
  define(['i18n!file_rename_form', 'react', 'compiled/react/shared/utils/withReactDOM', './DialogAdapter', './DialogContent', './DialogButtons'], function(I18n, React, withReactDOM, DialogAdapter, DialogContent, DialogButtons) {
    var FileRenameForm;

    return FileRenameForm = React.createClass({
      displayName: 'FileRenameForm',
      propType: {
        fileOptions: React.PropTypes.object,
        onNameConflictResolved: React.PropTypes.func.isRequired
      },
      getInitialState: function() {
        return {
          isEditing: false,
          fileOptions: this.props.fileOptions
        };
      },
      componentWillReceiveProps: function(newProps) {
        return this.setState({
          fileOptions: newProps.fileOptions,
          isEditing: false
        });
      },
      handleRenameClick: function() {
        return this.setState({
          isEditing: true
        });
      },
      handleBackClick: function() {
        return this.setState({
          isEditing: false
        });
      },
      handleReplaceClick: function() {
        return this.props.onNameConflictResolved({
          file: this.state.fileOptions.file,
          dup: 'overwrite',
          expandZip: this.state.fileOptions.expandZip
        });
      },
      handleChangeClick: function() {
        return this.props.onNameConflictResolved({
          file: this.state.fileOptions.file,
          dup: 'rename',
          name: this.refs.newName.getDOMNode().value,
          expandZip: this.state.fileOptions.expandZip
        });
      },
      handleFormSubmit: function(e) {
        e.preventDefault();
        return this.handleChangeClick();
      },
      buildContent: withReactDOM(function() {
        var nameToUse, _ref, _ref1;

        nameToUse = ((_ref = this.state.fileOptions) != null ? _ref.name : void 0) || ((_ref1 = this.state.fileOptions) != null ? _ref1.file.name : void 0);
        if (!this.state.isEditing) {
          return div({}, p({}, I18n.t('message', 'An item named "%{name}" already exists in this location. Do you want to replace the existing file?', {
            name: nameToUse
          })));
        } else {
          return div({}, p({}, I18n.t('prompt', 'Change "%{name}" to', {
            name: nameToUse
          })), form({
            onSubmit: this.handleFormSubmit
          }, label({
            className: 'file-rename-form__form-label'
          }, I18n.t('name', 'Name')), input({
            type: 'text',
            defaultValue: nameToUse,
            ref: 'newName'
          })));
        }
      }),
      buildButtons: withReactDOM(function() {
        if (!this.state.isEditing) {
          return div({}, button({
            ref: 'renameBtn',
            className: 'btn',
            onClick: this.handleRenameClick
          }, I18n.t('change_name', 'Change Name')), button({
            ref: 'replaceBtn',
            className: 'btn btn-primary',
            onClick: this.handleReplaceClick
          }, I18n.t('replace', 'Replace')));
        } else {
          return div({}, button({
            ref: 'backBtn',
            className: 'btn',
            onClick: this.handleBackClick
          }, I18n.t('back', 'Back')), button({
            ref: 'commitChangeBtn',
            className: 'btn btn-primary',
            onClick: this.handleChangeClick
          }, I18n.t('change', 'Change')));
        }
      }),
      render: withReactDOM(function() {
        return DialogAdapter({
          open: this.props.fileOptions != null,
          title: I18n.t('rename_title', 'Copy'),
          onClose: this.props.onClose
        }, DialogContent({}, this.buildContent()), DialogButtons({}, this.buildButtons()));
      })
    });
  });

}).call(this);
