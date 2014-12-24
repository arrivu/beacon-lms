(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone'], function(Backbone) {
    var DiscussionsSettings, _ref;

    return DiscussionsSettings = (function(_super) {
      __extends(DiscussionsSettings, _super);

      function DiscussionsSettings() {
        _ref = DiscussionsSettings.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      DiscussionsSettings.prototype.isNew = function() {
        return false;
      };

      DiscussionsSettings.prototype.url = ENV.SETTINGS_URL;

      return DiscussionsSettings;

    })(Backbone.Model);
  });

}).call(this);
