(function() {
  define(['i18n!zip_file_options_form', 'react', 'compiled/react/shared/utils/withReactDOM', './DialogAdapter', './DialogContent', './DialogButtons'], function(I18n, React, withReactDOM, DialogAdapter, DialogContent, DialogButtons) {
    var ZipFileOptionsForm;

    return ZipFileOptionsForm = React.createClass({
      propTypes: {
        onZipOptionsResolved: React.PropTypes.func.isRequired
      },
      handleExpandClick: function() {
        return this.props.onZipOptionsResolved({
          file: this.props.fileOptions.file,
          expandZip: true
        });
      },
      handleUploadClick: function() {
        return this.props.onZipOptionsResolved({
          file: this.props.fileOptions.file,
          expandZip: false
        });
      },
      buildMessage: function(fileOptions) {
        var message, name;

        message = void 0;
        if (this.props.fileOptions) {
          name = this.props.fileOptions.file.name;
          message = I18n.t('message', 'Would you like to expand the contents of "%{fileName}" into the current folder, or upload the zip file as is?', {
            fileName: name
          });
        }
        return message;
      },
      render: withReactDOM(function() {
        return DialogAdapter({
          open: this.props.fileOptions != null,
          title: I18n.t('zip_options', 'Zip file options'),
          onClose: this.props.onClose
        }, DialogContent({}, div({}, p({}, this.buildMessage()))), DialogButtons({}, div({}, button({
          className: 'btn',
          onClick: this.handleExpandClick
        }, I18n.t('expand', 'Expand It')), button({
          className: 'btn btn-primary',
          onClick: this.handleUploadClick
        }, I18n.t('upload', 'Upload It')))));
      })
    });
  });

}).call(this);
