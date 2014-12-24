(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(['jquery'], function($) {
    /*
    # builds and interacts with hidden input file for kaltura uploads
    */

    var FileInputManager;

    return FileInputManager = (function() {
      function FileInputManager() {
        this.resetFileInput = __bind(this.resetFileInput, this);
      }

      FileInputManager.prototype.constructur = function() {
        return this.allowedMedia = ['audio', 'video'];
      };

      FileInputManager.prototype.resetFileInput = function(callback, id, parentId) {
        var fileInput;

        id || (id = 'file_upload');
        parentId || (parentId = '#media_upload_settings');
        if (this.$fileInput) {
          this.$fileInput.off('change', callback);
          this.$fileInput.remove();
        }
        fileInput = "<input id='" + id + "' type='file' style='display: none;'>";
        $(parentId).append(fileInput);
        this.$fileInput = $("#" + id);
        return this.$fileInput.on('change', callback);
      };

      FileInputManager.prototype.setUpInputTrigger = function(el, mediaType) {
        var _this = this;

        return $(el).on('click', function(e) {
          _this.allowedMedia = mediaType;
          return _this.$fileInput.click();
        });
      };

      FileInputManager.prototype.getSelectedFile = function() {
        return this.$fileInput.get()[0].files[0];
      };

      return FileInputManager;

    })();
  });

}).call(this);
