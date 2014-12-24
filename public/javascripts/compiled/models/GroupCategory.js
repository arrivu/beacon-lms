(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'Backbone', 'compiled/collections/GroupCollection', 'compiled/collections/GroupUserCollection', 'compiled/collections/UnassignedGroupUserCollection', 'compiled/models/progressable', 'compiled/backbone-ext/DefaultUrlMixin'], function($, _, Backbone, GroupCollection, GroupUserCollection, UnassignedGroupUserCollection, progressable, DefaultUrlMixin) {
    var GroupCategory, _ref;

    return GroupCategory = (function(_super) {
      __extends(GroupCategory, _super);

      function GroupCategory() {
        this.setUpProgress = __bind(this.setUpProgress, this);
        this.groupRemoved = __bind(this.groupRemoved, this);        _ref = GroupCategory.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      GroupCategory.prototype.resourceName = "group_categories";

      GroupCategory.mixin(progressable);

      GroupCategory.prototype.initialize = function() {
        var groups;

        GroupCategory.__super__.initialize.apply(this, arguments);
        if (groups = this.get('groups')) {
          this.groups(groups);
        }
        return this.on('change:group_limit', this.updateGroups);
      };

      GroupCategory.prototype.updateGroups = function() {
        if (this._groups) {
          return this._groups.fetch();
        }
      };

      GroupCategory.prototype.groups = function(models) {
        var _this = this;

        if (models == null) {
          models = null;
        }
        this._groups = new GroupCollection(models, {
          category: this,
          loadAll: true
        });
        if (this.get('groups_count') === 0 || (models != null ? models.length : void 0)) {
          this._groups.loadedAll = true;
        } else {
          this._groups.fetch();
        }
        this._groups.on('fetched:last', function() {
          return _this.set('groups_count', _this._groups.length);
        });
        this._groups.on('remove', this.groupRemoved);
        this.groups = function() {
          return this._groups;
        };
        return this._groups;
      };

      GroupCategory.prototype.groupRemoved = function(group) {
        var models, user, users, _i, _len;

        if (!(this._unassignedUsers || group.usersCount())) {
          return;
        }
        users = group.users();
        if (users.loadedAll) {
          models = users.models.slice();
          for (_i = 0, _len = models.length; _i < _len; _i++) {
            user = models[_i];
            user.set('group', null);
          }
        } else if (!this.get('allows_multiple_memberships')) {
          this._unassignedUsers.increment(group.usersCount());
        }
        if (!this.get('allows_multiple_memberships') && (!users.loadedAll || !this._unassignedUsers.loadedAll)) {
          return this._unassignedUsers.fetch();
        }
      };

      GroupCategory.prototype.reassignUser = function(user, newGroup) {
        var oldGroup,
          _this = this;

        oldGroup = user.get('group');
        if (oldGroup === newGroup) {
          return;
        }
        if ((oldGroup == null) && this.get('allows_multiple_memberships')) {
          user = user.clone();
          user.once('change:group', function() {
            return _this.groupUsersFor(newGroup).addUser(user);
          });
        }
        return user.save({
          group: newGroup
        });
      };

      GroupCategory.prototype.groupsCount = function() {
        var _ref1;

        if ((_ref1 = this._groups) != null ? _ref1.loadedAll : void 0) {
          return this._groups.length;
        } else {
          return this.get('groups_count');
        }
      };

      GroupCategory.prototype.groupUsersFor = function(group) {
        if (group != null) {
          return group._users;
        } else {
          return this._unassignedUsers;
        }
      };

      GroupCategory.prototype.unassignedUsers = function() {
        var _this = this;

        this._unassignedUsers = new UnassignedGroupUserCollection(null, {
          category: this
        });
        this._unassignedUsers.on('fetched:last', function() {
          return _this.set('unassigned_users_count', _this._unassignedUsers.length);
        });
        this.unassignedUsers = function() {
          return this._unassignedUsers;
        };
        return this._unassignedUsers;
      };

      GroupCategory.prototype.unassignedUsersCount = function() {
        return this.get('unassigned_users_count');
      };

      GroupCategory.prototype.canAssignUnassignedMembers = function() {
        return this.groupsCount() > 0 && !this.get('allows_multiple_memberships') && this.get('self_signup') !== 'restricted' && this.unassignedUsersCount() > 0;
      };

      GroupCategory.prototype.canMessageUnassignedMembers = function() {
        return this.unassignedUsersCount() > 0 && !ENV.IS_LARGE_ROSTER;
      };

      GroupCategory.prototype.isLocked = function() {
        return this.get('role') === 'uncategorized';
      };

      GroupCategory.prototype.assignUnassignedMembers = function() {
        return $.ajaxJSON("/api/v1/group_categories/" + this.id + "/assign_unassigned_members", 'POST', {}, this.setUpProgress);
      };

      GroupCategory.prototype.setUpProgress = function(response) {
        return this.set({
          progress_url: response.url
        });
      };

      GroupCategory.prototype.present = function() {
        var data;

        data = Backbone.Model.prototype.toJSON.call(this);
        data.progress = this.progressModel.toJSON();
        data.randomlyAssignStudentsInProgress = data.progress.workflow_state === "queued" || data.progress.workflow_state === "running";
        return data;
      };

      GroupCategory.prototype.toJSON = function() {
        return _.omit(GroupCategory.__super__.toJSON.apply(this, arguments), 'self_signup');
      };

      GroupCategory.mixin(DefaultUrlMixin);

      GroupCategory.prototype.sync = function(method, model, options) {
        var success, _ref1,
          _this = this;

        if (options == null) {
          options = {};
        }
        options.url = this.urlFor(method);
        if (method === 'create' && model.get('split_groups') === '1') {
          success = (_ref1 = options.success) != null ? _ref1 : function() {};
          options.success = function(args) {
            _this.progressStarting = true;
            success(args);
            return _this.assignUnassignedMembers();
          };
        } else if (method === 'delete') {
          if (model.progressModel) {
            model.progressModel.onPoll = function() {};
          }
        }
        return Backbone.sync(method, model, options);
      };

      GroupCategory.prototype.urlFor = function(method) {
        if (method === 'create') {
          return this._defaultUrl();
        } else {
          return "/api/v1/group_categories/" + this.id + "?includes[]=unassigned_users_count&includes[]=groups_count";
        }
      };

      return GroupCategory;

    })(Backbone.Model);
  });

}).call(this);
