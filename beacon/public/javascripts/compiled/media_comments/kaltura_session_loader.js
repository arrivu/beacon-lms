(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(['jquery'], function($) {
    /*
    # Loads kaltura session data, generates options based on session
    */

    var KalturaSessionLoader;

    return KalturaSessionLoader = (function() {
      function KalturaSessionLoader() {
        this.loadSession = __bind(this.loadSession, this);
      }

      KalturaSessionLoader.prototype.loadSession = function(url, success, failure) {
        var failureCB, successCB,
          _this = this;

        successCB = success;
        failureCB = failure;
        $.ajaxJSON(url, 'POST', {}, function(data) {
          if (data.ks) {
            data.ui_conf_id = INST.kalturaSettings.upload_ui_conf;
            _this.kalturaSession = data;
            return success.call();
          } else {
            return failure.call();
          }
        });
        return true;
      };

      KalturaSessionLoader.prototype.generateUploadOptions = function(allowedMedia) {
        return {
          kaltura_session: this.kalturaSession,
          allowedMediaTypes: allowedMedia,
          uploadUrl: this.kalturaUrl('/index.php/partnerservices2/upload'),
          entryUrl: this.kalturaUrl('/index.php/partnerservices2/addEntry'),
          uiconfUrl: this.kalturaUrl('/index.php/partnerservices2/getuiconf'),
          entryDefaults: {
            partnerData: $.mediaComment.partnerData()
          }
        };
      };

      KalturaSessionLoader.prototype.kalturaUrl = function(endPoint) {
        return location.protocol + '//' + INST.kalturaSettings.domain + endPoint;
      };

      return KalturaSessionLoader;

    })();
  });

}).call(this);
