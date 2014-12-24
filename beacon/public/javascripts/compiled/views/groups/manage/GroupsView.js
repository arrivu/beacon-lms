(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['underscore', 'compiled/views/PaginatedCollectionView', 'compiled/views/groups/manage/GroupView', 'compiled/views/groups/manage/GroupUsersView', 'compiled/views/groups/manage/GroupDetailView', 'compiled/views/Filterable', 'jst/groups/manage/groups'], function(_, PaginatedCollectionView, GroupView, GroupUsersView, GroupDetailView, Filterable, template) {
    var GroupsView, _ref;

    return GroupsView = (function(_super) {
      __extends(GroupsView, _super);

      function GroupsView() {
        _ref = GroupsView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      GroupsView.mixin(Filterable);

      GroupsView.prototype.template = template;

      GroupsView.prototype.els = _.extend({}, PaginatedCollectionView.prototype.els, {
        '.no-results': '$noResults'
      });

      GroupsView.prototype.events = _.extend({}, PaginatedCollectionView.prototype.events, {
        'scroll': 'closeMenus',
        'dragstart': 'closeMenus'
      });

      GroupsView.prototype.closeMenus = _.throttle(function() {
        var model, _i, _len, _ref1, _results;

        _ref1 = this.collection.models;
        _results = [];
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          model = _ref1[_i];
          _results.push(model.itemView.closeMenus());
        }
        return _results;
      }, 50);

      GroupsView.prototype.attach = function() {
        return this.collection.on('change', this.reorder);
      };

      GroupsView.prototype.afterRender = function() {
        this.$filter = this.$externalFilter;
        return GroupsView.__super__.afterRender.apply(this, arguments);
      };

      GroupsView.prototype.initialize = function() {
        GroupsView.__super__.initialize.apply(this, arguments);
        if (this.collection.loadAll) {
          return this.detachScroll();
        }
      };

      GroupsView.prototype.createItemView = function(group) {
        var groupDetailView, groupUsersView, groupView;

        groupUsersView = new GroupUsersView({
          model: group,
          collection: group.users(),
          itemViewOptions: {
            canEditGroupAssignment: !group.isLocked()
          }
        });
        groupDetailView = new GroupDetailView({
          model: group,
          users: group.users()
        });
        groupView = new GroupView({
          model: group,
          groupUsersView: groupUsersView,
          groupDetailView: groupDetailView,
          addUnassignedMenu: this.options.addUnassignedMenu
        });
        return group.itemView = groupView;
      };

      GroupsView.prototype.updateDetails = function() {
        var model, _i, _len, _ref1, _results;

        _ref1 = this.collection.models;
        _results = [];
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          model = _ref1[_i];
          _results.push(model.itemView.updateFullState());
        }
        return _results;
      };

      return GroupsView;

    })(PaginatedCollectionView);
  });

}).call(this);
