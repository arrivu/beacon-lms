(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['underscore', 'compiled/views/profiles/AvatarUploadBaseView', 'jst/profiles/uploadFileView', 'compiled/util/BlobFactory', 'vendor/jquery.jcrop'], function(_, BaseView, template, BlobFactory) {
    var UploadFileView, _ref;

    return UploadFileView = (function(_super) {
      __extends(UploadFileView, _super);

      function UploadFileView() {
        this.saveCropPosition = __bind(this.saveCropPosition, this);
        this.loadPreview = __bind(this.loadPreview, this);        _ref = UploadFileView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      UploadFileView.optionProperty('avatarSize');

      UploadFileView.prototype.template = template;

      UploadFileView.prototype.events = {
        'click .select-photo-link': 'onChooseAvatar',
        'change #selected-photo': 'onSelectAvatar',
        'dragover .select-photo-link': 'onDragOver',
        'dragleave .select-photo-link': 'onDragLeave',
        'drop .select-photo-link': 'onFileDrop'
      };

      UploadFileView.prototype.onChooseAvatar = function(e) {
        e.preventDefault();
        return this.openFileDialog();
      };

      UploadFileView.prototype.onSelectAvatar = function(e) {
        e.preventDefault();
        return this.loadPreview(e.target.files[0]);
      };

      UploadFileView.prototype.onDragLeave = function(e) {
        return this.toggleOverStyle(false);
      };

      UploadFileView.prototype.onDragOver = function(e) {
        e.stopPropagation();
        e.preventDefault();
        e.originalEvent.dataTransfer.dropEffect = 'copy';
        return this.toggleOverStyle(true);
      };

      UploadFileView.prototype.onFileDrop = function(e) {
        e.stopPropagation();
        e.preventDefault();
        return this.loadPreview(e.originalEvent.dataTransfer.files[0]);
      };

      UploadFileView.prototype.openFileDialog = function() {
        return this.$('#selected-photo').click();
      };

      UploadFileView.prototype.toggleOverStyle = function(force) {
        return this.$('.select-photo-link').toggleClass('over', force);
      };

      UploadFileView.prototype.loadPreview = function(file) {
        var dfd, reader,
          _this = this;

        if (!file.type.match(/^image/)) {
          alert('Invalid file type.');
          return false;
        }
        dfd = $.Deferred();
        reader = new FileReader();
        reader.onload = function(e) {
          _this.showPreview(e.target.result);
          return dfd.resolve(e.target.result);
        };
        reader.readAsDataURL(file);
        return dfd;
      };

      UploadFileView.prototype.showPreview = function(dataURL) {
        if (!dataURL.match(/^data:image/)) {
          alert('Invalid file.');
          return false;
        }
        this.preview = dataURL;
        this.render();
        return this.initCropping();
      };

      UploadFileView.prototype.hidePreview = function() {
        delete this.preview;
        return this.render();
      };

      UploadFileView.prototype.render = function() {
        this.revokeURLObjects();
        return UploadFileView.__super__.render.apply(this, arguments);
      };

      UploadFileView.prototype.teardown = function() {
        this.hidePreview();
        return this.revokeURLObjects();
      };

      UploadFileView.prototype.revokeURLObjects = function() {
        return this.$('img').each(function() {
          var src, _base;

          src = $(this).attr('src');
          if (src.match(/^data/)) {
            return typeof (_base = window.URL).revokeObjectURL === "function" ? _base.revokeObjectURL(src) : void 0;
          }
        });
      };

      UploadFileView.prototype.imageDimensions = function($preview, $fullSize) {
        var dimensions, heightRatio, widthRatio;

        heightRatio = $fullSize.height() / $preview.height();
        widthRatio = $fullSize.width() / $preview.width();
        return dimensions = {
          heightRatio: heightRatio,
          widthRatio: widthRatio,
          x: Math.floor(this.currentCoords.x * widthRatio),
          y: Math.floor(this.currentCoords.y * heightRatio),
          w: Math.floor(this.currentCoords.w * widthRatio),
          h: Math.floor(this.currentCoords.h * heightRatio)
        };
      };

      UploadFileView.prototype.getImage = function() {
        var $fullSize, $preview, canvas, context, d, dfd;

        $preview = this.$('.avatar-preview');
        $fullSize = this.$('#upload-fullsize-preview');
        canvas = this.$('#upload-canvas')[0];
        context = canvas.getContext('2d');
        d = this.imageDimensions($preview, $fullSize);
        dfd = $.Deferred();
        context.drawImage($fullSize[0], d.x, d.y, d.w, d.h, 0, 0, this.avatarSize.w, this.avatarSize.h);
        return dfd.resolve(BlobFactory.fromCanvas(canvas, 'image/jpeg'));
      };

      UploadFileView.prototype.initCropping = function() {
        var wait,
          _this = this;

        return wait = setInterval(function() {
          var $preview, size;

          $preview = _this.$('.avatar-preview');
          if (!$preview[0].complete) {
            return;
          }
          clearInterval(wait);
          size = _.min([$preview.height(), $preview.width()]);
          $preview.Jcrop({
            aspectRatio: 1,
            setSelect: [0, 0, size, size],
            onSelect: _this.saveCropPosition,
            minSize: [20, 20]
          });
          return _this.trigger('ready');
        }, 50);
      };

      UploadFileView.prototype.saveCropPosition = function(coords) {
        return this.currentCoords = coords;
      };

      UploadFileView.prototype.toJSON = function() {
        return {
          hasPreview: !!this.preview,
          previewURL: this.preview
        };
      };

      return UploadFileView;

    })(BaseView);
  });

}).call(this);
