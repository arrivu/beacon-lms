(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(['jquery', 'i18n!media_comments', 'jqueryui/progressbar', 'jquery.instructure_misc_helpers'], function($, I18n) {
    /*
    # Watches uploader and updates UI with file upload details, errors
    # and upload progress
    */

    var UploadViewManager;

    return UploadViewManager = (function() {
      function UploadViewManager() {
        this.showConfigError = __bind(this.showConfigError, this);
        this.onFileTypeError = __bind(this.onFileTypeError, this);
      }

      UploadViewManager.prototype.monitorUpload = function(uploader, allowedMedia, file) {
        if (this.uploader && this.uploader !== uploader) {
          this.resetListeners();
        }
        this.uploader = uploader;
        this.allowedMedia = allowedMedia;
        this.showProgBar();
        this.showFileDetails(file);
        this.uploader.addEventListener('K5.uiconfError', this.showConfigError);
        this.uploader.addEventListener('K5.error', this.showConfigError);
        this.uploader.addEventListener('K5.fileError', this.onFileTypeError);
        return this.uploader.addEventListener('K5.progress', this.updateProgBar);
      };

      UploadViewManager.prototype.resetListeners = function() {
        this.uploader.removeEventListener('K5.uiconfError', this.showConfigError);
        this.uploader.removeEventListener('K5.error', this.showConfigError);
        this.uploader.removeEventListener('K5.fileError', this.onFileTypeError);
        return this.uploader.removeEventListener('K5.progress', this.updateProgBar);
      };

      UploadViewManager.prototype.onFileTypeError = function(error) {
        var message;

        if (error.maxFileSize > error.file.size) {
          message = I18n.t('file_size_error', 'Size of %{file} is greater than the maximum %{max} allowed file size.', {
            file: error.file.name,
            max: error.maxFileSize
          });
        } else {
          message = I18n.t('file_type_error', '%{file} is not an acceptable %{type} file.', {
            file: error.file.name,
            type: error.allowedMediaTypes[0]
          });
        }
        this.resetFileDetails();
        return this.showErrorMessage(message);
      };

      UploadViewManager.prototype.showConfigError = function() {
        var message;

        message = I18n.t('errors.media_comment_installation_broken', "Media comment uploading has not been set up properly. Please contact your administrator.");
        this.showErrorMessage(message);
        $("#media_upload_feedback").css('visibility', 'visible');
        $('#audio_upload_holder').css('visibility', 'hidden');
        $('#video_upload_holder').css('visibility', 'hidden');
        return $('#media_upload_settings').css('visibility', 'hidden');
      };

      UploadViewManager.prototype.resetFileDetails = function() {
        $('#media_upload_settings').css('visibility', 'hidden');
        $('#media_upload_title').val('');
        $('#media_upload_display_title').text('');
        $('#media_upload_file_size').text($.fileSize(0));
        return $("#media_upload_settings .icon").attr('src', "/images/file.png");
      };

      UploadViewManager.prototype.showFileDetails = function(file) {
        if (!file) {
          this.resetFileDetails();
          return;
        }
        $('#media_upload_feedback').css('visibility', 'hidden');
        $('#media_upload_settings').css('visibility', 'visible');
        $('#media_upload_title').val(file.name);
        $('#media_upload_display_title').text(file.name);
        $('#media_upload_file_size').text($.fileSize(file.size));
        $("#media_upload_settings .icon").attr('src', "/images/file-" + this.allowedMedia[0] + ".png");
        return $("#media_upload_submit").attr('disabled', true).text(I18n.t('messages.submitting', "Submitting Media File..."));
      };

      UploadViewManager.prototype.showErrorMessage = function(message) {
        this.hideProgBar();
        $('#media_upload_feedback').css('visibility', 'visible');
        return $("#media_upload_feedback_text").html(message);
      };

      UploadViewManager.prototype.showProgBar = function() {
        return $('#media_upload_progress').css('visibility', 'visible').progressbar();
      };

      UploadViewManager.prototype.hideProgBar = function() {
        return $('#media_upload_progress').css('visibility', 'hidden');
      };

      UploadViewManager.prototype.updateProgBar = function(data) {
        var prc;

        prc = (data.loaded / data.total) * 100.0;
        return $('#media_upload_progress').progressbar('option', 'value', prc);
      };

      return UploadViewManager;

    })();
  });

}).call(this);
