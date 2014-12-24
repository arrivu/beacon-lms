(function() {
  define(['react', 'jquery', 'compiled/react_files/components/UploadProgress', 'compiled/react_files/modules/FileUploader'], function(React, $, UploadProgress, FileUploader) {
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
    module('UploadProgress', {
      setup: function() {
        this.uploader = mockUploader('filename', 35);
        return this.prog = React.renderComponent(UploadProgress({
          uploader: this.uploader
        }), $('<div>').appendTo('body')[0]);
      },
      teardown: function() {
        resetUploader(this.uploader);
        return React.unmountComponentAtNode(this.prog.getDOMNode().parentNode);
      }
    });
    return test('getLabel displays file name', function() {
      return equal(this.prog.refs.fileName.getDOMNode().textContent, 'filename');
    });
  });

}).call(this);
