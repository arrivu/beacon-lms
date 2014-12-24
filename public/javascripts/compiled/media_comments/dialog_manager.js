(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(['i18n!media_comments', 'jquery', 'jqueryui/dialog'], function(I18n, $) {
    /*
    # manages uploader modal dialog
    */

    var DialogManager;

    return DialogManager = (function() {
      function DialogManager() {
        this.setCloseOption = __bind(this.setCloseOption, this);
        this.hide = __bind(this.hide, this);
      }

      DialogManager.prototype.initialize = function() {
        this.dialog = $("#media_comment_dialog");
        return this.createLoadingWindow();
      };

      DialogManager.prototype.hide = function() {
        return $('#media_comment_dialog').dialog('close');
      };

      DialogManager.prototype.createLoadingWindow = function() {
        if (this.dialog.length === 0) {
          this.dialog = $("<div/>").attr('id', 'media_comment_dialog');
        }
        this.dialog.text(I18n.t('messages.loading', "Loading..."));
        this.dialog.dialog({
          title: I18n.t('titles.record_upload_media_comment', "Record/Upload Media Comment"),
          resizable: false,
          width: 470,
          height: 300,
          modal: true
        });
        return this.dialog = $('#media_comment_dialog');
      };

      DialogManager.prototype.displayContent = function(html) {
        return this.dialog.html(html);
      };

      DialogManager.prototype.mediaReady = function(mediaType, opts) {
        this.showUpdateDialog();
        this.setCloseOption(opts);
        this.resetRecordHolders();
        return this.setupTypes(mediaType);
      };

      DialogManager.prototype.showUpdateDialog = function() {
        return this.dialog.dialog({
          title: I18n.t('titles.record_upload_media_comment', "Record/Upload Media Comment"),
          width: 560,
          height: 475,
          modal: true
        });
      };

      DialogManager.prototype.setCloseOption = function(opts) {
        var _this = this;

        return this.dialog.dialog('option', 'close', function() {
          $("#audio_record").before("<div id='audio_record'/>").remove();
          $("#video_record").before("<div id='video_record'/>").remove();
          if (opts && opts.close && $.isFunction(opts.close)) {
            return opts.close.call(_this.$dialog);
          }
        });
      };

      DialogManager.prototype.setupTypes = function(mediaType) {
        if (mediaType === "video") {
          $("#video_record_option").click();
          $("#media_record_option_holder").hide();
          $("#audio_upload_holder").hide();
          return $("#video_upload_holder").show();
        } else if (mediaType === "audio") {
          $("#audio_record_option").click();
          $("#media_record_option_holder").hide();
          $("#audio_upload_holder").show();
          return $("#video_upload_holder").hide();
        } else {
          $("#video_record_option").click();
          $("#audio_upload_holder").show();
          return $("#video_upload_holder").show();
        }
      };

      DialogManager.prototype.resetRecordHolders = function() {
        $("#audio_record").before("<div id='audio_record'/>").remove();
        return $("#video_record").before("<div id='video_record'/>").remove();
      };

      DialogManager.prototype.activateTabs = function() {
        return this.dialog.find('#media_record_tabs').tabs();
      };

      return DialogManager;

    })();
  });

}).call(this);
