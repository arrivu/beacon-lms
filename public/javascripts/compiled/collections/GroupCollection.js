(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['compiled/collections/PaginatedCollection', 'compiled/collections/GroupUserCollection', 'compiled/models/Group'], function(PaginatedCollection, GroupUserCollection, Group) {
    var GroupCollection, _ref;

    return GroupCollection = (function(_super) {
      __extends(GroupCollection, _super);

      function GroupCollection() {
        _ref = GroupCollection.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      GroupCollection.prototype.model = Group;

      GroupCollection.prototype.comparator = function(group) {
        return group.get('name').toLowerCase();
      };

      GroupCollection.optionProperty('category');

      GroupCollection.optionProperty('loadAll');

      GroupCollection.prototype._defaultUrl = function() {
        return '/api/v1/users/self/groups';
      };

      GroupCollection.prototype.url = function() {
        if (this.category != null) {
          return this.url = "/api/v1/group_categories/" + this.category.id + "/groups?per_page=50";
        } else {
          return this.url = GroupCollection.__super__.url.apply(this, arguments);
        }
      };

      return GroupCollection;

    })(PaginatedCollection);
  });

}).call(this);
