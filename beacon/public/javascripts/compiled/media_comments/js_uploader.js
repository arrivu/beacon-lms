(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(['jquery', 'i18n!media_comments', 'compiled/media_comments/dialog_manager', 'compiled/media_comments/comment_ui_loader', 'bower/k5uploader/k5uploader', 'compiled/media_comments/upload_view_manager', 'compiled/media_comments/kaltura_session_loader', 'compiled/media_comments/file_input_manager'], function($, I18n, DialogManager, CommentUiLoader, K5Uploader, UploadViewManager, KalturaSessionLoader, FileInputManager) {
    /*
    # Creates and Mediates between various upload ui and actors
    */

    var JsUploader;

    return JsUploader = (function() {
      function JsUploader() {
        this.resetUploader = __bind(this.resetUploader, this);
        this.onUploaderReady = __bind(this.onUploaderReady, this);
        this.onUploadComplete = __bind(this.onUploadComplete, this);
        this.onFileError = __bind(this.onFileError, this);
        this.doUpload = __bind(this.doUpload, this);
        this.initialize = __bind(this.initialize, this);        this.dialogManager = new DialogManager();
        this.commentUiLoader = new CommentUiLoader();
        this.kSession = new KalturaSessionLoader();
        this.uploadViewManager = new UploadViewManager();
        this.fileInputManager = new FileInputManager();
        this.dialogManager.initialize();
        this.loadSession();
      }

      JsUploader.prototype.loadSession = function() {
        return this.kSession.loadSession('/api/v1/services/kaltura_session', this.initialize, this.uploadViewManager.showConfigError);
      };

      JsUploader.prototype.onReady = function() {};

      JsUploader.prototype.initialize = function(mediaType, opts) {
        var _this = this;

        return this.commentUiLoader.loadTabs(function(html) {
          _this.onReady();
          _this.dialogManager.displayContent(html);
          _this.dialogManager.activateTabs();
          _this.dialogManager.mediaReady(mediaType, opts);
          _this.createNeededFields();
          return _this.bindEvents();
        });
      };

      JsUploader.prototype.getKs = function() {
        return this.kSession.kalturaSession.ks;
      };

      JsUploader.prototype.getUid = function() {
        return this.kSession.kalturaSession.uid;
      };

      JsUploader.prototype.bindEvents = function() {
        this.fileInputManager.setUpInputTrigger('#audio_upload_holder', ['audio']);
        return this.fileInputManager.setUpInputTrigger('#video_upload_holder', ['video']);
      };

      JsUploader.prototype.createNeededFields = function() {
        return this.fileInputManager.resetFileInput(this.doUpload);
      };

      JsUploader.prototype.doUpload = function() {
        var session;

        this.file = this.fileInputManager.getSelectedFile();
        if (this.uploader) {
          this.resetUploader();
        }
        session = this.kSession.generateUploadOptions(this.fileInputManager.allowedMedia);
        this.uploader = new K5Uploader(session);
        this.uploader.addEventListener('K5.fileError', this.onFileError);
        this.uploader.addEventListener('K5.complete', this.onUploadComplete);
        this.uploader.addEventListener('K5.ready', this.onUploaderReady);
        this.uploadViewManager = new UploadViewManager();
        return this.uploadViewManager.monitorUpload(this.uploader, this.fileInputManager.allowedMedia, this.file);
      };

      JsUploader.prototype.onFileError = function() {
        return this.createNeededFields();
      };

      JsUploader.prototype.onUploadComplete = function(e) {
        this.resetUploader();
        this.addEntry(e);
        return this.dialogManager.hide();
      };

      JsUploader.prototype.onUploaderReady = function() {
        return this.uploader.uploadFile(this.file);
      };

      JsUploader.prototype.resetUploader = function() {
        this.uploader.removeEventListener('K5.fileError', this.onFileError);
        this.uploader.removeEventListener('K5.complete', this.onUploadComplete);
        this.uploader.removeEventListener('K5.ready', this.onUploaderReady);
        return this.uploader.destroy();
      };

      return JsUploader;

    })();
  });

}).call(this);
