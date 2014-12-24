(function() {
  define(['compiled/views/profiles/UploadFileView', 'compiled/util/BlobFactory'], function(UploadFileView, BlobFactory) {
    module('UploadFileView', {
      setup: function() {
        this.view = new UploadFileView({
          avatarSize: {
            h: 128,
            w: 128
          }
        });
        this.view.$el.appendTo('#fixtures');
        this.file = (function() {
          var dfd, xhr;

          dfd = $.Deferred();
          xhr = new XMLHttpRequest();
          xhr.open('GET', '/base/spec/javascripts/fixtures/pug.jpg');
          xhr.responseType = 'blob';
          xhr.onload = function(e) {
            var response;

            response = BlobFactory.fromXHR(this.response, 'image/jpeg');
            return dfd.resolve(response);
          };
          xhr.send();
          return dfd;
        })();
        return this.view.render();
      },
      teardown: function() {
        delete this.blob;
        return this.view.remove();
      }
    });
    asyncTest('loads given file', 5, function() {
      var _this = this;

      ok(this.view.$el.find('#upload-fullsize-preview').attr('src') === '', 'image loader begins empty');
      ok(this.view.$el.find('.avatar-preview').length === 0, 'picker begins without preview image');
      return $.when(this.file).pipe(this.view.loadPreview).done(function() {
        var $fullsize, $preview;

        $preview = _this.view.$('.avatar-preview');
        $fullsize = _this.view.$('#upload-fullsize-preview');
        ok($preview.length > 0, 'preview image exists');
        ok($fullsize.attr('src') !== '', 'image loader contains loaded image after load');
        ok($fullsize.attr('class').match(/hidden/), 'image loader is hidden');
        return start();
      });
    });
    return asyncTest('getImage returns cropped image object', 1, function() {
      var _this = this;

      return $.when(this.file).pipe(this.view.loadPreview).done(function() {
        _this.view.currentCoords = {
          x: 0,
          y: 0,
          h: 50,
          w: 50
        };
        return _this.view.getImage().then(function(image) {
          ok(image instanceof Blob, 'image object is a blob');
          return start();
        });
      });
    });
  });

}).call(this);
