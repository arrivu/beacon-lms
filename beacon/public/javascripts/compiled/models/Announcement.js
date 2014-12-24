(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['compiled/models/DiscussionTopic', 'underscore'], function(DiscussionTopic, _) {
    var Announcement, _ref;

    return Announcement = (function(_super) {
      __extends(Announcement, _super);

      function Announcement() {
        _ref = Announcement.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Announcement.prototype.urlRoot = function() {
        return _.result(this.collection, 'url').replace(this.collection._stringToAppendToURL, '');
      };

      Announcement.prototype.defaults = {
        is_announcement: true
      };

      return Announcement;

    })(DiscussionTopic);
  });

}).call(this);
