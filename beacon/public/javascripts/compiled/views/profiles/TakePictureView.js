(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'compiled/views/profiles/AvatarUploadBaseView', 'jst/profiles/takePictureView', 'compiled/util/BlobFactory'], function($, _, BaseView, template, BlobFactory) {
    var TakePictureView, _ref;

    return TakePictureView = (function(_super) {
      __extends(TakePictureView, _super);

      function TakePictureView() {
        this.displayMedia = __bind(this.displayMedia, this);        _ref = TakePictureView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      TakePictureView.optionProperty('avatarSize');

      TakePictureView.prototype.template = template;

      TakePictureView.prototype.events = {
        'click .take-snapshot-btn': 'onSnapshot',
        'click .retry-snapshot-btn': 'onRetry'
      };

      TakePictureView.prototype.els = {
        '.webcam-live-preview': '$video',
        '.webcam-clip': '$clip',
        '.webcam-preview': '$preview',
        '.webcam-capture-wrapper': '$captureWrapper',
        '.webcam-preview-wrapper': '$previewWrapper',
        '.webcam-preview-staging-area': '$canvas'
      };

      TakePictureView.prototype.getUserMedia = (navigator.getUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.webkitGetUserMedia || $.noop).bind(navigator);

      TakePictureView.prototype.setup = function() {
        return this.startMedia();
      };

      TakePictureView.prototype.teardown = function() {
        var _ref1;

        delete this.img;
        delete this.preview;
        return (_ref1 = this.stream) != null ? _ref1.stop() : void 0;
      };

      TakePictureView.prototype.startMedia = function() {
        return this.getUserMedia({
          video: true
        }, this.displayMedia, $.noop);
      };

      TakePictureView.prototype.displayMedia = function(stream) {
        this.stream = stream;
        this.$video.removeClass('pending');
        this.$video.attr('src', window.URL.createObjectURL(this.stream));
        return this.$video.on('onloadedmetadata loadedmetadata', _.once(this.onMediaMetadata).bind(this));
      };

      TakePictureView.prototype.onMediaMetadata = function(e) {
        var wait,
          _this = this;

        return wait = window.setInterval(function() {
          var adjustment, clipSize;

          if (_this.$video[0].videoHeight === 0) {
            return;
          }
          window.clearInterval(wait);
          clipSize = _.min([_this.$video.height(), _this.$video.width()]);
          _this.$clip.height(clipSize).width(clipSize);
          if (_this.$video.width() > clipSize) {
            adjustment = ((_this.$video.width() - clipSize) / 2) * -1;
            return _this.$video.css('left', adjustment);
          }
        }, 100);
      };

      TakePictureView.prototype.toggleView = function() {
        this.$captureWrapper.toggle();
        this.$previewWrapper.toggle();
        return this.trigger('ready', !!this.preview);
      };

      TakePictureView.prototype.getImage = function() {
        var dfd;

        dfd = $.Deferred();
        return dfd.resolve(this.img);
      };

      TakePictureView.prototype.onSnapshot = function() {
        var canvas, context, img, url, video,
          _this = this;

        canvas = this.$canvas[0];
        video = this.$video[0];
        img = new Image;
        context = canvas.getContext('2d');
        canvas.height = video.clientHeight;
        canvas.width = video.clientWidth;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        url = canvas.toDataURL();
        img.onload = function(e) {
          var sX, sY;

          sX = (video.clientWidth - _this.$clip.width()) / 2;
          sY = (video.clientHeight - _this.$clip.height()) / 2;
          canvas.height = _this.$clip.height();
          canvas.width = _this.$clip.width();
          context.drawImage(img, sX, sY, _this.$clip.width(), _this.$clip.height(), 0, 0, _this.$clip.width(), _this.$clip.height());
          _this.preview = canvas.toDataURL();
          _this.toggleView();
          _this.$preview.attr('src', _this.preview);
          return _this.img = BlobFactory.fromCanvas(canvas);
        };
        return img.src = url;
      };

      TakePictureView.prototype.onRetry = function(e) {
        return this.resetSnapshot();
      };

      TakePictureView.prototype.resetSnapshot = function() {
        delete this.preview;
        delete this.img;
        return this.toggleView();
      };

      TakePictureView.prototype.previewSrc = function() {
        if (!this.preview) {
          return '';
        }
        return this.preview.split(',')[1];
      };

      TakePictureView.prototype.toJSON = function() {
        return {
          hasPreview: !!this.preview,
          previewURL: this.preview
        };
      };

      return TakePictureView;

    })(BaseView);
  });

}).call(this);
