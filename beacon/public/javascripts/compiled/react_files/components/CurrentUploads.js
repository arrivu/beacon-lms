(function() {
  define(['react', 'compiled/react/shared/utils/withReactDOM', '../modules/UploadQueue', './UploadProgress', 'compiled/jquery.rails_flash_notifications'], function(React, withReactDOM, UploadQueue, UploadProgress) {
    var CurrentUploads;

    return CurrentUploads = React.createClass({
      displayName: 'CurrentUploads',
      getInitialState: function() {
        return {
          currentUploads: [],
          isOpen: false
        };
      },
      componentWillMount: function() {
        var _this = this;

        return UploadQueue.onChange = function() {
          _this.screenReaderUploadStatus();
          return _this.setState({
            currentUploads: UploadQueue.getAllUploaders()
          });
        };
      },
      componentWillUnMount: function() {
        return UploadQueue.onChange = function() {};
      },
      handleCloseClick: function() {
        return this.setState({
          isOpen: false
        });
      },
      handleBrowseClick: function() {
        return console.log('browse click');
      },
      screenReaderUploadStatus: function() {
        var currentUploader, name, percent;

        currentUploader = UploadQueue.getCurrentUploader();
        if (!currentUploader) {
          return;
        }
        name = currentUploader.getFileName();
        percent = currentUploader.roundProgress();
        return $.screenReaderFlashMessage("" + name + " - " + percent + "%");
      },
      shouldDisplay: function() {
        return !!this.state.isOpen || this.state.currentUploads.length;
      },
      buildProgressViews: function() {
        var progressBars;

        progressBars = this.state.currentUploads.map(function(uploader) {
          return UploadProgress({
            uploader: uploader,
            key: uploader.getFileName(),
            removeUploader: UploadQueue.remove
          });
        });
        return div({
          className: 'current_uploads__uploaders'
        }, progressBars);
      },
      buildContent: function() {
        if (this.state.currentUploads.length) {
          return this.buildProgressViews();
        } else if (!!this.state.isOpen) {
          return div({}, '');
        }
      },
      render: withReactDOM(function() {
        var divName;

        divName = '';
        if (this.shouldDisplay()) {
          divName = 'current_uploads';
        }
        return div({
          className: divName
        }, this.buildContent());
      })
    });
  });

}).call(this);
