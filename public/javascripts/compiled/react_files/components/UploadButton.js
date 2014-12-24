(function() {
  define(['i18n!upload_button', 'react', 'compiled/react/shared/utils/withReactDOM', 'underscore', './FileRenameForm', '../modules/customPropTypes', './ZipFileOptionsForm', '../modules/FileOptionsCollection'], function(I18n, React, withReactDOM, _, FileRenameForm, customPropTypes, ZipFileOptionsForm, FileOptionsCollection) {
    var UploadButton, resolvedUserAction;

    resolvedUserAction = false;
    return UploadButton = React.createClass({
      displayName: 'UploadButton',
      propTypes: {
        currentFolder: customPropTypes.folder,
        contextId: React.PropTypes.string,
        contextType: React.PropTypes.string
      },
      getInitialState: function() {
        return FileOptionsCollection.getState();
      },
      queueUploads: function() {
        this.refs.form.getDOMNode().reset();
        return FileOptionsCollection.queueUploads(this.props.contextId, this.props.contextType);
      },
      handleAddFilesClick: function() {
        return this.refs.addFileInput.getDOMNode().click();
      },
      handleFilesInputChange: function(e) {
        var files;

        resolvedUserAction = false;
        files = this.refs.addFileInput.getDOMNode().files;
        FileOptionsCollection.setFolder(this.props.currentFolder);
        FileOptionsCollection.setOptionsFromFiles(files);
        return this.setState(FileOptionsCollection.getState());
      },
      onNameConflictResolved: function(fileNameOptions) {
        FileOptionsCollection.onNameConflictResolved(fileNameOptions);
        resolvedUserAction = true;
        return this.setState(FileOptionsCollection.getState());
      },
      onZipOptionsResolved: function(fileNameOptions) {
        FileOptionsCollection.onZipOptionsResolved(fileNameOptions);
        resolvedUserAction = true;
        return this.setState(FileOptionsCollection.getState());
      },
      onClose: function() {
        this.refs.form.getDOMNode().reset();
        if (!resolvedUserAction) {
          FileOptionsCollection.resetState();
          this.setState(FileOptionsCollection.getState());
        }
        return resolvedUserAction = false;
      },
      componentDidUpdate: function(prevState) {
        if (this.state.nameCollisions.length === 0 && this.state.resolvedNames.length > 0 && FileOptionsCollection.hasNewOptions()) {
          return this.queueUploads();
        } else {
          return resolvedUserAction = false;
        }
      },
      componentWillMount: function() {
        return FileOptionsCollection.onChange = this.setStateFromOptions;
      },
      componentWillUnMount: function() {
        return FileOptionsCollection.onChange = null;
      },
      setStateFromOptions: function() {
        return this.setState(FileOptionsCollection.getState());
      },
      buildPotentialModal: function() {
        if (this.state.zipOptions.length) {
          return ZipFileOptionsForm({
            fileOptions: this.state.zipOptions[0],
            onZipOptionsResolved: this.onZipOptionsResolved,
            onClose: this.onClose
          });
        } else if (this.state.nameCollisions.length) {
          return FileRenameForm({
            fileOptions: this.state.nameCollisions[0],
            onNameConflictResolved: this.onNameConflictResolved,
            onClose: this.onClose
          });
        }
      },
      render: withReactDOM(function() {
        return span({}, form({
          ref: 'form',
          className: 'hidden'
        }, input({
          type: 'file',
          ref: 'addFileInput',
          onChange: this.handleFilesInputChange,
          multiple: true
        })), button({
          className: 'btn btn-primary btn-upload',
          'aria-label': I18n.t('upload', 'Upload'),
          onClick: this.handleAddFilesClick
        }, i({
          className: 'icon-upload'
        }), span({
          className: (this.props.showingButtons ? 'hidden-phone' : void 0)
        }, I18n.t('upload', 'Upload'))), this.buildPotentialModal());
      })
    });
  });

}).call(this);
