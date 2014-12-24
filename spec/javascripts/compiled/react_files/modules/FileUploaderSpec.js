(function() {
  define(['compiled/react_files/modules/FileUploader', 'jquery', 'jquery.ajaxJSON'], function(FileUploader, $) {
    var mockFileOptions;

    mockFileOptions = function(name, type, size) {
      var fileOptions;

      return fileOptions = {
        file: {
          name: name,
          type: type,
          size: size
        }
      };
    };
    module('FileUploader', {
      setup: function() {
        var folder;

        folder = {
          id: 1
        };
        return this.uploader = new FileUploader(mockFileOptions('foo', 'bar', 1), folder);
      },
      teardown: function() {
        return delete this.uploader;
      }
    });
    test('posts to the files endpoint to kick off upload', function() {
      sinon.stub($, 'ajaxJSON');
      this.uploader.upload();
      equal($.ajaxJSON.calledWith('/api/v1/folders/1/files'), true, 'kicks off upload');
      return $.ajaxJSON.restore();
    });
    test('stores params from preflight for actual upload', function() {
      var server, uploadStub;

      server = sinon.fakeServer.create();
      server.respondWith('POST', '/api/v1/folders/1/files', [
        200, {
          "Content-Type": "application/json"
        }, '{"upload_url": "/upload/url", "upload_params": {"key": "value"}}'
      ]);
      uploadStub = sinon.stub(this.uploader, '_actualUpload');
      this.uploader.upload();
      server.respond();
      equal(this.uploader.uploadData.upload_url, '/upload/url');
      equal(this.uploader.uploadData.upload_params.key, 'value');
      uploadStub.restore();
      return server.restore();
    });
    test('roundProgress returns back rounded values', function() {
      sinon.stub(this.uploader, 'getProgress').returns(0.18);
      return equal(this.uploader.roundProgress(), 18);
    });
    test('roundProgress returns back values no greater than 100', function() {
      sinon.stub(this.uploader, 'getProgress').returns(1.1);
      return equal(this.uploader.roundProgress(), 100);
    });
    test('getFileName returns back the option name if one exists', function() {
      var folder, options;

      folder = {
        id: 1
      };
      options = mockFileOptions('foo', 'bar', 1);
      options.name = 'use this one';
      this.uploader = new FileUploader(options, folder);
      return equal(this.uploader.getFileName(), 'use this one');
    });
    return test('getFileName returns back the actual file if no optinal name is given', function() {
      var folder, options;

      folder = {
        id: 1
      };
      options = mockFileOptions('foo', 'bar', 1);
      this.uploader = new FileUploader(options, folder);
      return equal(this.uploader.getFileName(), 'foo');
    });
  });

}).call(this);
