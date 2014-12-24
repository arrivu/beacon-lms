(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['compiled/collections/PaginatedCollection', 'compiled/models/GroupCategory'], function(PaginatedCollection, GroupCategory) {
    var GroupCategoryCollection, _ref;

    return GroupCategoryCollection = (function(_super) {
      __extends(GroupCategoryCollection, _super);

      function GroupCategoryCollection() {
        _ref = GroupCategoryCollection.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      GroupCategoryCollection.prototype.model = GroupCategory;

      GroupCategoryCollection.prototype.comparator = function(category) {
        var prefix;

        prefix = category.get('role') === 'uncategorized' ? '2_' : category.get('protected') ? '0_' : '1_';
        return prefix + category.get('name').toLowerCase();
      };

      GroupCategoryCollection.prototype._defaultUrl = function() {
        return "/api/v1/group_categories";
      };

      return GroupCategoryCollection;

    })(PaginatedCollection);
  });

}).call(this);
