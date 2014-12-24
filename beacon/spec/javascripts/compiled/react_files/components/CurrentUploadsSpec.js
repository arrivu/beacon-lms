(function() {
  define(['react', 'jquery', 'compiled/react_files/components/CurrentUploads', 'compiled/react_files/modules/FileUploader', 'compiled/react_files/modules/UploadQueue'], function(React, $, CurrentUploads, FileUploader, UploadQueue) {
    var Simulate, mockUploader, resetUploader;

    Simulate = React.addons.TestUtils.Simulate;
    mockUploader = function(name, progress) {
      var uploader;

      uploader = new FileUploader({
        file: {}
      });
      sinon.stub(uploader, 'getFileName').returns(name);
      sinon.stub(uploader, 'roundProgress').returns(progress);
      return uploader;
    };
    resetUploader = function(uploader) {
      uploader.getFileName.restore();
      return uploader.roundProgress.restore();
    };
    module('CurrentUploads', {
      setup: function() {
        return this.uploads = React.renderComponent(CurrentUploads(), $('<div>').appendTo('body')[0]);
      },
      teardown: function() {
        return React.unmountComponentAtNode(this.uploads.getDOMNode().parentNode);
      }
    });
    test('announces upload progress to screen reader when queue changes', function() {
      var uploader;

      sinon.stub($, 'screenReaderFlashMessage');
      uploader = mockUploader('filename', 25);
      sinon.stub(UploadQueue, 'getCurrentUploader').returns(uploader);
      UploadQueue.onChange();
      equal($.screenReaderFlashMessage.calledWith('filename - 25%'), true);
      resetUploader(uploader);
      UploadQueue.getCurrentUploader.restore();
      return $.screenReaderFlashMessage.restore();
    });
    test('does not announces upload progress to screen reader if no uploader present', function() {
      var uploader;

      sinon.stub($, 'screenReaderFlashMessage');
      uploader = mockUploader('filename', 25);
      sinon.stub(UploadQueue, 'getCurrentUploader').returns(null);
      UploadQueue.onChange();
      equal($.screenReaderFlashMessage.called, false);
      resetUploader(uploader);
      UploadQueue.getCurrentUploader.restore();
      return $.screenReaderFlashMessage.restore();
    });
    return test('pulls FileUploaders from UploadQueue', function() {
      var allUploads;

      allUploads = [mockUploader('name', 0), mockUploader('other', 0)];
      sinon.stub(UploadQueue, 'getAllUploaders').returns(allUploads);
      UploadQueue.onChange();
      equal(this.uploads.state.currentUploads, allUploads);
      return UploadQueue.getAllUploaders.restore();
    });
  });

}).call(this);
