(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(['./FileUploader', './ZipUploader'], function(FileUploader, ZipUploader) {
    var UploadQueue;

    UploadQueue = (function() {
      function UploadQueue() {
        this.remove = __bind(this.remove, this);
        this.onUploadProgress = __bind(this.onUploadProgress, this);
      }

      UploadQueue.prototype._uploading = false;

      UploadQueue.prototype._queue = [];

      UploadQueue.prototype.length = function() {
        return this._queue.length;
      };

      UploadQueue.prototype.flush = function() {
        return this._queue = [];
      };

      UploadQueue.prototype.getAllUploaders = function() {
        var all;

        all = this._queue.slice();
        if (!!this.currentUploader) {
          all = all.concat(this.currentUploader);
        }
        return all.reverse();
      };

      UploadQueue.prototype.getCurrentUploader = function() {
        return this.currentUploader;
      };

      UploadQueue.prototype.onChange = function() {};

      UploadQueue.prototype.onUploadProgress = function(percent, file) {
        return this.onChange();
      };

      UploadQueue.prototype.createUploader = function(fileOptions, folder, contextId, contextType) {
        var f;

        if (fileOptions.expandZip) {
          f = new ZipUploader(fileOptions, folder, contextId, contextType);
        } else {
          f = new FileUploader(fileOptions, folder);
        }
        f.onProgress = this.onUploadProgress;
        return f;
      };

      UploadQueue.prototype.enqueue = function(fileOptions, folder, contextId, contextType) {
        var uploader;

        uploader = this.createUploader(fileOptions, folder, contextId, contextType);
        this._queue.push(uploader);
        return this.attemptNextUpload();
      };

      UploadQueue.prototype.dequeue = function() {
        return this._queue.shift();
      };

      UploadQueue.prototype.remove = function(uploader) {
        var index;

        if (this.currentUploader === uploader) {
          this.currentUploader = null;
        }
        index = this._queue.indexOf(uploader);
        this._queue.splice(index, 1);
        return this.onChange();
      };

      UploadQueue.prototype.attemptNextUpload = function() {
        var _this = this;

        this.onChange();
        if (this._uploading || this._queue.length === 0) {
          return;
        }
        this.currentUploader = this.dequeue();
        if (this.currentUploader) {
          this.onChange();
          this._uploading = true;
          return this.currentUploader.upload().then(function() {
            _this._uploading = false;
            _this.currentUploader = null;
            _this.onChange();
            return _this.attemptNextUpload();
          });
        }
      };

      return UploadQueue;

    })();
    return new UploadQueue();
  });

}).call(this);
