(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!user', 'jquery', 'underscore', 'Backbone', 'compiled/str/TextHelper', 'jquery.instructure_misc_helpers'], function(I18n, $, _, Backbone, _arg) {
    var PageView, truncateText, _ref;

    truncateText = _arg.truncateText;
    return PageView = (function(_super) {
      __extends(PageView, _super);

      function PageView() {
        _ref = PageView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      PageView.prototype.computedAttributes = ['summarizedUserAgent', 'readableInteractionTime', 'truncatedURL', 'isLinkable'];

      PageView.prototype.isLinkable = function() {
        var method;

        method = this.get('http_method');
        if (method == null) {
          return true;
        }
        return method === 'get';
      };

      PageView.prototype.summarizedUserAgent = function() {
        return $.parseUserAgentString(this.get('user_agent'));
      };

      PageView.prototype.readableInteractionTime = function() {
        var seconds;

        seconds = this.get('interaction_seconds');
        if (seconds > 5) {
          return Math.round(seconds);
        } else {
          return '--';
        }
      };

      PageView.prototype.truncatedURL = function() {
        return truncateText(this.get('url'), {
          max: 90
        });
      };

      return PageView;

    })(Backbone.Model);
  });

}).call(this);
