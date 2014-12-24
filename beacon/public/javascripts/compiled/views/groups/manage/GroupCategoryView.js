(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!groups', 'Backbone', 'compiled/views/groups/manage/GroupCategoryDetailView', 'compiled/views/groups/manage/GroupsView', 'compiled/views/groups/manage/UnassignedUsersView', 'compiled/views/groups/manage/AddUnassignedMenu', 'jst/groups/manage/groupCategory', 'compiled/jquery.rails_flash_notifications', 'jquery.disableWhileLoading'], function(I18n, _arg, GroupCategoryDetailView, GroupsView, UnassignedUsersView, AddUnassignedMenu, template) {
    var GroupCategoryView, View, _ref;

    View = _arg.View;
    return GroupCategoryView = (function(_super) {
      __extends(GroupCategoryView, _super);

      function GroupCategoryView() {
        _ref = GroupCategoryView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      GroupCategoryView.prototype.template = template;

      GroupCategoryView.child('groupCategoryDetailView', '[data-view=groupCategoryDetail]');

      GroupCategoryView.child('unassignedUsersView', '[data-view=unassignedUsers]');

      GroupCategoryView.child('groupsView', '[data-view=groups]');

      GroupCategoryView.prototype.els = {
        '.filterable': '$filter',
        '.filterable-unassigned-users': '$filterUnassignedUsers',
        '.unassigned-users-heading': '$unassignedUsersHeading',
        '.groups-with-count': '$groupsHeading'
      };

      GroupCategoryView.prototype.initialize = function(options) {
        var progress, _ref1, _ref2, _ref3;

        this.groups = this.model.groups();
        if ((_ref1 = options.groupCategoryDetailView) == null) {
          options.groupCategoryDetailView = new GroupCategoryDetailView({
            parentView: this,
            model: this.model,
            collection: this.groups
          });
        }
        if ((_ref2 = options.groupsView) == null) {
          options.groupsView = this.groupsView(options);
        }
        if ((_ref3 = options.unassignedUsersView) == null) {
          options.unassignedUsersView = this.unassignedUsersView(options);
        }
        if (progress = this.model.get('progress')) {
          this.model.progressModel.set(progress);
        }
        return GroupCategoryView.__super__.initialize.apply(this, arguments);
      };

      GroupCategoryView.prototype.groupsView = function(options) {
        var addUnassignedMenu, users;

        addUnassignedMenu = null;
        if (ENV.IS_LARGE_ROSTER) {
          users = this.model.unassignedUsers();
          addUnassignedMenu = new AddUnassignedMenu({
            collection: users
          });
        }
        return new GroupsView({
          collection: this.groups,
          addUnassignedMenu: addUnassignedMenu
        });
      };

      GroupCategoryView.prototype.unassignedUsersView = function(options) {
        if (ENV.IS_LARGE_ROSTER) {
          return false;
        }
        return new UnassignedUsersView({
          category: this.model,
          collection: this.model.unassignedUsers(),
          groupsCollection: this.groups
        });
      };

      GroupCategoryView.prototype.attach = function() {
        var _this = this;

        this.model.on('destroy', this.remove, this);
        this.model.on('change', function() {
          return _this.groupsView.updateDetails();
        });
        this.model.on('change:unassigned_users_count', this.setUnassignedHeading, this);
        this.groups.on('add remove reset', this.setGroupsHeading, this);
        this.model.progressModel.on('change:url', function() {
          return _this.model.progressModel.set({
            'completion': 0
          });
        });
        this.model.progressModel.on('change', this.render);
        return this.model.on('progressResolved', function() {
          return _this.model.fetch({
            success: function() {
              _this.model.groups().fetch();
              _this.model.unassignedUsers().fetch();
              return _this.render();
            }
          });
        });
      };

      GroupCategoryView.prototype.cacheEls = function() {
        GroupCategoryView.__super__.cacheEls.apply(this, arguments);
        this.groupsView.$externalFilter = this.$filter;
        return this.unassignedUsersView.$externalFilter = this.$filterUnassignedUsers;
      };

      GroupCategoryView.prototype.afterRender = function() {
        this.setUnassignedHeading();
        return this.setGroupsHeading();
      };

      GroupCategoryView.prototype.setUnassignedHeading = function() {
        var count, _ref1;

        count = (_ref1 = this.model.unassignedUsersCount()) != null ? _ref1 : 0;
        if (this.unassignedUsersView) {
          this.unassignedUsersView.render();
        }
        return this.$unassignedUsersHeading.text(this.model.get('allows_multiple_memberships') ? I18n.t('everyone', "Everyone (%{count})", {
          count: count
        }) : ENV.group_user_type === 'student' ? I18n.t('unassigned_students', "Unassigned Students (%{count})", {
          count: count
        }) : I18n.t('unassigned_users', "Unassigned Users (%{count})", {
          count: count
        }));
      };

      GroupCategoryView.prototype.setGroupsHeading = function() {
        var count;

        count = this.model.groupsCount();
        return this.$groupsHeading.text(I18n.t("groups_count", "Groups (%{count})", {
          count: count
        }));
      };

      GroupCategoryView.prototype.toJSON = function() {
        var json;

        json = this.model.present();
        json.ENV = ENV;
        json.groupsAreSearchable = ENV.IS_LARGE_ROSTER && !json.randomlyAssignStudentsInProgress;
        return json;
      };

      return GroupCategoryView;

    })(View);
  });

}).call(this);
