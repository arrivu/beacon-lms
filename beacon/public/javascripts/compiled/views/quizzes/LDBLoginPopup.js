(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(["underscore", "Backbone", "jquery", "jst/quizzes/LDBLoginPopup", "jquery.toJSON"], function(_, Backbone, $, Markup) {
    var LDBLoginPopup, consume, _ref;

    consume = function(e) {
      if (!e) {
        return;
      }
      if (e.preventDefault) {
        e.preventDefault();
      }
      if (e.stopPropagation) {
        e.stopPropagation();
      }
      return false;
    };
    return LDBLoginPopup = (function(_super) {
      __extends(LDBLoginPopup, _super);

      function LDBLoginPopup() {
        _ref = LDBLoginPopup.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      LDBLoginPopup.prototype.initialize = function(options) {
        var $delegate, $inputSink, bringToFront, isStuck, lockBackground, login, relaunch, render, reset, styleSheets, unlockBackground, whnd, windowOptions,
          _this = this;

        whnd = void 0;
        styleSheets = void 0;
        $delegate = $(this);
        $inputSink = void 0;
        _.extend(this.options, options);
        windowOptions = _.map(this.options.window, function(v, k) {
          return [k, (_.isBoolean(v) ? (v ? "yes" : "no") : v)].join("=");
        }).join(",");
        this.on = _.bind($delegate.on, $delegate);
        this.one = _.bind($delegate.one, $delegate);
        this.off = _.bind($delegate.off, $delegate);
        isStuck = function() {
          var e;

          if (whnd) {
            try {
              whnd.document;
            } catch (_error) {
              e = _error;
              if (/Permission/.test(e.message)) {
                return true;
              }
            }
          }
          return false;
        };
        reset = function() {
          unlockBackground();
          whnd = null;
          $delegate.triggerHandler("close");
          return null;
        };
        bringToFront = function(e) {
          var error;

          if (isStuck()) {
            reset();
            return true;
          }
          try {
            whnd.document.focus();
          } catch (_error) {
            error = _error;
            $(whnd.document).focus();
          }
          return consume(e);
        };
        lockBackground = function() {
          return $inputSink.appendTo(document.body);
        };
        unlockBackground = function() {
          return $inputSink.detach();
        };
        login = function(e) {
          var authenticate, consumptionRc, credentials;

          consumptionRc = consume(e);
          credentials = $(e.target).closest("form").toJSON();
          authenticate = _this.authenticate(credentials);
          authenticate.then(function(rc) {
            $delegate.triggerHandler("login_success");
            whnd.close();
            reset();
            return rc;
          });
          authenticate.fail(function(xhrError) {
            $delegate.triggerHandler("login_failure", xhrError);
            return xhrError;
          });
          return consumptionRc;
        };
        render = function() {
          var $document, $head;

          $document = $(whnd.document);
          $head = $(whnd.document.head);
          _(styleSheets).each(function(href) {
            $head.append("<link rel=\"stylesheet\" href=\"" + href + "\" />");
          });
          $document.find(".hide").removeClass("hide");
          $document.find(".btn-primary").on("click", login);
          $delegate.triggerHandler("open", whnd.document);
        };
        this.exec = function() {
          if (isStuck()) {
            reset();
          }
          if (whnd) {
            bringToFront();
            return whnd;
          }
          lockBackground();
          whnd = window.open("about:blank", "_blank", windowOptions, false);
          whnd.document.write(_this.template({}));
          whnd.onbeforeunload = reset;
          whnd.onload = render;
          whnd.document.close();
          return whnd;
        };
        styleSheets = _(document.styleSheets).chain().map(function(styleSheet) {
          return styleSheet.href;
        }).compact().value();
        $inputSink = $("<div />").on("click", bringToFront).css({
          "z-index": 1000,
          position: "fixed",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        });
        if (this.options.sticky) {
          relaunch = void 0;
          this.on("login_failure.sticky", function() {
            return relaunch = true;
          });
          this.on("login_success.sticky", function() {
            return relaunch = false;
          });
          return this.on("close.sticky", function() {
            if (relaunch) {
              return setTimeout(this.exec, 1);
            }
          });
        }
      };

      LDBLoginPopup.prototype.url = "/login?nonldap=true";

      LDBLoginPopup.prototype.template = Markup;

      LDBLoginPopup.prototype.options = {
        sticky: true,
        window: {
          location: false,
          menubar: false,
          status: false,
          toolbar: false,
          fullscreen: false,
          width: 480,
          height: 480
        }
      };

      LDBLoginPopup.prototype.authenticate = function(credentials) {
        return $.ajax({
          type: "POST",
          url: this.url,
          data: JSON.stringify(credentials),
          global: false,
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        });
      };

      return LDBLoginPopup;

    })(Backbone.View);
  });

}).call(this);
