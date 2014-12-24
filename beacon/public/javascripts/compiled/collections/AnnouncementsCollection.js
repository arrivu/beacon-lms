(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['compiled/collections/DiscussionTopicsCollection', 'compiled/models/Announcement', 'compiled/str/splitAssetString'], function(DiscussionTopicsCollection, Announcement, splitAssetString) {
    var AnnouncementsCollection, _ref;

    return AnnouncementsCollection = (function(_super) {
      __extends(AnnouncementsCollection, _super);

      function AnnouncementsCollection() {
        _ref = AnnouncementsCollection.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      AnnouncementsCollection.prototype.resourceName = 'discussion_topics';

      AnnouncementsCollection.prototype._stringToAppendToURL = '?only_announcements=true';

      AnnouncementsCollection.prototype.url = function() {
        return AnnouncementsCollection.__super__.url.apply(this, arguments) + this._stringToAppendToURL;
      };

      AnnouncementsCollection.prototype.model = Announcement;

      return AnnouncementsCollection;

    })(DiscussionTopicsCollection);
  });

}).call(this);
