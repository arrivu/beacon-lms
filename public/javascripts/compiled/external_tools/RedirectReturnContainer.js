(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(['jquery'], function($) {
    var RedirectReturnContainer;

    return RedirectReturnContainer = (function() {
      function RedirectReturnContainer() {
        this.createMigration = __bind(this.createMigration, this);
        this.redirectToSuccessUrl = __bind(this.redirectToSuccessUrl, this);
        this._contentCancel = __bind(this._contentCancel, this);
        this._contentReady = __bind(this._contentReady, this);
      }

      RedirectReturnContainer.prototype.successUrl = ENV.redirect_return_success_url;

      RedirectReturnContainer.prototype.cancelUrl = ENV.redirect_return_cancel_url;

      RedirectReturnContainer.prototype.attachLtiEvents = function() {
        $(window).on('externalContentReady', this._contentReady);
        return $(window).on('externalContentCancel', this._contentCancel);
      };

      RedirectReturnContainer.prototype._contentReady = function(event, data) {
        if (data && data.return_type === "file") {
          return this.createMigration(data.url);
        } else {
          return this.redirectToSuccessUrl();
        }
      };

      RedirectReturnContainer.prototype._contentCancel = function(event, data) {
        return location.href = this.cancelUrl;
      };

      RedirectReturnContainer.prototype.redirectToSuccessUrl = function() {
        return location.href = this.successUrl;
      };

      RedirectReturnContainer.prototype.createMigration = function(file_url) {
        var data, migrationUrl;

        data = {
          migration_type: 'canvas_cartridge_importer',
          settings: {
            file_url: file_url
          }
        };
        migrationUrl = "/api/v1/courses/" + ENV.course_id + "/content_migrations";
        return $.ajaxJSON(migrationUrl, "POST", data, this.redirectToSuccessUrl, this.handleError);
      };

      RedirectReturnContainer.prototype.handleError = function(data) {
        return $.flashError(data.message);
      };

      return RedirectReturnContainer;

    })();
  });

}).call(this);
