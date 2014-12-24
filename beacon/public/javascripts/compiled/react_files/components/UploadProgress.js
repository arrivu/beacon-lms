(function() {
  define(['i18n!react_files', 'react', 'compiled/react/shared/utils/withReactDOM', '../modules/FileUploader', './ProgressBar'], function(I18n, React, withReactDOM, FileUploader, ProgressBar) {
    var UploadProgress;

    return UploadProgress = React.createClass({
      displayName: 'UploadProgress',
      propTypes: {
        removeUploader: React.PropTypes.func.isRequired,
        uploader: React.PropTypes.shape({
          getFileName: React.PropTypes.func.isRequired,
          roundProgress: React.PropTypes.func.inRequired
        })
      },
      getLabel: withReactDOM(function() {
        return span({}, i({
          className: 'icon-document'
        }), span({
          ref: 'fileName'
        }, this.props.uploader.getFileName()));
      }),
      handleCancelUpload: function(event) {
        event.preventDefault();
        this.props.uploader.abort();
        return this.props.removeUploader(this.props.uploader);
      },
      render: withReactDOM(function() {
        var progress;

        progress = this.props.uploader.roundProgress();
        return div({
          className: 'upload-progress-view'
        }, div({
          className: 'upload-progress-view__label'
        }, div({}, this.getLabel())), ProgressBar({
          progress: progress
        }), button({
          onClick: this.handleCancelUpload,
          'aria-label': I18n.t('cancel_button.label', "Cancel %{fileName} from uploading", {
            fileName: this.props.uploader.getFileName()
          }),
          className: 'btn-link upload-progress-view__button'
        }, 'x'));
      }),
      displayName: I18n.t('name', 'Name')
    });
  });

}).call(this);
