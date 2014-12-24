(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', './BaseUploader'], function($, BaseUploader) {
    var ZipUploader;

    return ZipUploader = (function(_super) {
      __extends(ZipUploader, _super);

      function ZipUploader(fileOptions, folder, contextId, contextType) {
        this.trackProgress = __bind(this.trackProgress, this);
        this.pullMigrationProgress = __bind(this.pullMigrationProgress, this);
        this.getContentMigration = __bind(this.getContentMigration, this);
        this.onUploadPosted = __bind(this.onUploadPosted, this);
        this.onPreflightComplete = __bind(this.onPreflightComplete, this);        ZipUploader.__super__.constructor.call(this, fileOptions, folder);
        this.contextId = contextId;
        this.contextType = contextType;
        this.migrationProgress = 0;
      }

      ZipUploader.prototype.createPreFlightParams = function() {
        var params;

        return params = {
          migration_type: 'zip_file_importer',
          settings: {
            folder_id: this.folder.id
          },
          pre_attachment: {
            name: this.options.name || this.file.name,
            size: this.file.size,
            content_type: this.file.type,
            on_duplicate: this.options.dup || 'rename',
            no_redirect: true
          }
        };
      };

      ZipUploader.prototype.getPreflightUrl = function() {
        return "/api/v1/" + this.contextType + "/" + this.contextId + "/content_migrations";
      };

      ZipUploader.prototype.onPreflightComplete = function(data) {
        this.uploadData = data.pre_attachment;
        this.contentMigrationId = data.id;
        return this._actualUpload();
      };

      ZipUploader.prototype.onUploadPosted = function(uploadResults) {
        var results, url,
          _this = this;

        if (uploadResults.target && uploadResults.target.status >= 400) {
          this.deferred.reject();
          return;
        }
        url = this.uploadData.upload_params.success_url;
        if (url) {
          return $.getJSON(url).then(function(results) {
            return _this.getContentMigration();
          });
        } else {
          results = $.parseJSON(uploadResults.target.response);
          return this.getContentMigration();
        }
      };

      ZipUploader.prototype.getContentMigration = function() {
        var _this = this;

        return $.getJSON("/api/v1/courses/" + this.contextId + "/content_migrations/" + this.contentMigrationId).then(function(results) {
          if (!results.progress_url) {
            return setTimeout(function() {
              return _this.getContentMigration();
            }, 500);
          } else {
            return _this.pullMigrationProgress(results.progress_url);
          }
        });
      };

      ZipUploader.prototype.pullMigrationProgress = function(url) {
        var _this = this;

        return $.getJSON(url).then(function(results) {
          _this.trackMigrationProgress(results.completion || 0);
          if (results.workflow_state === 'failed') {
            return _this.deferred.reject();
          } else if (results.completion < 100) {
            return setTimeout(function() {
              return _this.pullMigrationProgress(url);
            }, 1000);
          } else {
            return _this.onMigrationComplete();
          }
        });
      };

      ZipUploader.prototype.onMigrationComplete = function() {
        var promise,
          _this = this;

        return promise = this.folder.files.fetch({
          reset: true
        }).then(function() {
          return _this.deferred.resolve();
        });
      };

      ZipUploader.prototype.trackProgress = function(e) {
        this.progress = e.loaded / e.total;
        return this.onProgress(this.progress, this.file);
      };

      ZipUploader.prototype.trackMigrationProgress = function(value) {
        return this.migrationProgress = value / 100;
      };

      ZipUploader.prototype.getProgress = function() {
        return (this.progress + this.migrationProgress) / 2;
      };

      ZipUploader.prototype.roundProgress = function() {
        var value;

        value = this.getProgress() || 0;
        return Math.min(Math.round(value * 100), 100);
      };

      ZipUploader.prototype.getFileName = function() {
        return this.options.name || this.file.name;
      };

      return ZipUploader;

    })(BaseUploader);
  });

}).call(this);
