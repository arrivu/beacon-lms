(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'compiled/models/File', './BaseUploader', 'jquery.ajaxJSON'], function($, BBFile, BaseUploader) {
    var FileUploader, _ref;

    return FileUploader = (function(_super) {
      __extends(FileUploader, _super);

      function FileUploader() {
        this.addFileToCollection = __bind(this.addFileToCollection, this);
        this.onUploadPosted = __bind(this.onUploadPosted, this);        _ref = FileUploader.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      FileUploader.prototype.onUploadPosted = function(event) {
        var f, results, url,
          _this = this;

        if (event.target.status >= 400) {
          this.deferred.reject();
          return;
        }
        url = this.uploadData.upload_params.success_url;
        if (url) {
          return $.getJSON(url).then(function(results) {
            var f;

            f = _this.addFileToCollection(results);
            return _this.deferred.resolve(f);
          });
        } else {
          results = $.parseJSON(event.target.response);
          f = this.addFileToCollection(results);
          return this.deferred.resolve(f);
        }
      };

      FileUploader.prototype.addFileToCollection = function(attrs) {
        var name, previous, uploadedFile;

        uploadedFile = new BBFile(attrs, 'no/url/needed/');
        this.folder.files.add(uploadedFile);
        if (this.options.dup === 'overwrite') {
          name = this.options.name || this.file.name;
          previous = this.folder.files.findWhere({
            display_name: name
          });
          if (previous) {
            this.folder.files.remove(previous);
          }
        }
        return uploadedFile;
      };

      return FileUploader;

    })(BaseUploader);
  });

}).call(this);
