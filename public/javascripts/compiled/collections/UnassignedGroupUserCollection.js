(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['compiled/collections/GroupUserCollection', 'compiled/models/GroupUser'], function(GroupUserCollection, GroupUser) {
    var UnassignedGroupUserCollection, _ref;

    return UnassignedGroupUserCollection = (function(_super) {
      __extends(UnassignedGroupUserCollection, _super);

      function UnassignedGroupUserCollection() {
        _ref = UnassignedGroupUserCollection.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      UnassignedGroupUserCollection.prototype.url = function() {
        var _url;

        _url = "/api/v1/group_categories/" + this.category.id + "/users?per_page=50";
        if (!this.category.get('allows_multiple_memberships')) {
          _url += "&unassigned=true";
        }
        return this.url = _url;
      };

      UnassignedGroupUserCollection.prototype.membershipsLocked = function() {
        return this.category.get('allows_multiple_memberships');
      };

      UnassignedGroupUserCollection.prototype.increment = function(amount) {
        return this.category.increment('unassigned_users_count', amount);
      };

      return UnassignedGroupUserCollection;

    })(GroupUserCollection);
  });

}).call(this);
