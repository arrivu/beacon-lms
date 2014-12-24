(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(['jquery', 'jquery.ajaxJSON'], function($, BBFile, FilesCollection) {
    var BaseUploader;

    return BaseUploader = (function() {
      function BaseUploader(fileOptions, folder) {
        this.trackProgress = __bind(this.trackProgress, this);
        this.onUploadPosted = __bind(this.onUploadPosted, this);
        this.onPreflightComplete = __bind(this.onPreflightComplete, this);        this.file = fileOptions.file;
        this.options = fileOptions;
        this.folder = folder;
        this.progress = 0;
        this._xhr = new XMLHttpRequest;
      }

      BaseUploader.prototype.onProgress = function(percentComplete, file) {};

      BaseUploader.prototype.createFormData = function() {
        var data, formData;

        data = this.uploadData.upload_params;
        formData = new FormData();
        Object.keys(data).forEach(function(key) {
          return formData.append(key, data[key]);
        });
        formData.append('file', this.file);
        return formData;
      };

      BaseUploader.prototype.createPreFlightParams = function() {
        var params;

        return params = {
          name: this.options.name || this.file.name,
          size: this.file.size,
          content_type: this.file.type,
          on_duplicate: this.options.dup || 'rename',
          parent_folder_id: this.folder.id,
          no_redirect: true
        };
      };

      BaseUploader.prototype.getPreflightUrl = function() {
        return "/api/v1/folders/" + this.folder.id + "/files";
      };

      BaseUploader.prototype.onPreflightComplete = function(data) {
        this.uploadData = data;
        return this._actualUpload();
      };

      BaseUploader.prototype.upload = function() {
        var params, preflightUrl;

        this.deferred = $.Deferred();
        params = this.createPreFlightParams();
        preflightUrl = this.getPreflightUrl();
        $.ajaxJSON(preflightUrl, 'POST', params, this.onPreflightComplete);
        return this.deferred;
      };

      BaseUploader.prototype._actualUpload = function() {
        this._xhr = new XMLHttpRequest;
        this._xhr.upload.addEventListener('progress', this.trackProgress, false);
        this._xhr.onload = this.onUploadPosted;
        this._xhr.open('POST', this.uploadData.upload_url, true);
        return this._xhr.send(this.createFormData());
      };

      BaseUploader.prototype.onUploadPosted = function(event) {};

      BaseUploader.prototype.trackProgress = function(e) {
        this.progress = e.loaded / e.total;
        return this.onProgress(this.progress, this.file);
      };

      BaseUploader.prototype.getProgress = function() {
        return this.progress;
      };

      BaseUploader.prototype.roundProgress = function() {
        var value;

        value = this.getProgress() || 0;
        return Math.min(Math.round(value * 100), 100);
      };

      BaseUploader.prototype.getFileName = function() {
        return this.options.name || this.file.name;
      };

      BaseUploader.prototype.abort = function() {
        return this._xhr.abort();
      };

      return BaseUploader;

    })();
  });

}).call(this);
