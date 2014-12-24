(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!GroupUserCollection', 'jquery', 'compiled/collections/PaginatedCollection', 'compiled/models/GroupUser', 'str/htmlEscape'], function(I18n, $, PaginatedCollection, GroupUser, h) {
    var GroupUserCollection, _ref;

    return GroupUserCollection = (function(_super) {
      __extends(GroupUserCollection, _super);

      function GroupUserCollection() {
        this.onChangeGroup = __bind(this.onChangeGroup, this);        _ref = GroupUserCollection.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      GroupUserCollection.prototype.comparator = function(user) {
        return user.get('sortable_name').toLowerCase();
      };

      GroupUserCollection.optionProperty('group');

      GroupUserCollection.optionProperty('category');

      GroupUserCollection.prototype.url = function() {
        return this.url = "/api/v1/groups/" + this.group.id + "/users?per_page=50";
      };

      GroupUserCollection.prototype.initialize = function(models) {
        GroupUserCollection.__super__.initialize.apply(this, arguments);
        this.loaded = this.loadedAll = models != null;
        this.on('change:group', this.onChangeGroup);
        return this.model = GroupUser.extend({
          defaults: {
            group: this.group,
            category: this.category
          }
        });
      };

      GroupUserCollection.prototype.load = function(target) {
        if (target == null) {
          target = 'all';
        }
        this.loadAll = target === 'all';
        this.loaded = true;
        if (target !== 'none') {
          this.fetch();
        }
        return this.load = function() {};
      };

      GroupUserCollection.prototype.onChangeGroup = function(model, group) {
        var _ref1;

        this.removeUser(model);
        return (_ref1 = this.groupUsersFor(group)) != null ? _ref1.addUser(model) : void 0;
      };

      GroupUserCollection.prototype.membershipsLocked = function() {
        return false;
      };

      GroupUserCollection.prototype.addUser = function(user) {
        var _ref1,
          _this = this;

        if (this.membershipsLocked()) {
          if ((_ref1 = this.get(user)) != null) {
            _ref1.moved();
          }
          return;
        }
        if (this.loaded) {
          if (this.get(user)) {
            this.flashAlreadyInGroupError(user);
          } else {
            this.add(user);
            this.increment(1);
          }
          return user.moved();
        } else {
          user.once('ajaxJoinGroupSuccess', function(data) {
            if (data.just_created) {
              return;
            }
            _this.increment(-1);
            return _this.flashAlreadyInGroupError(user);
          });
          return this.increment(1);
        }
      };

      GroupUserCollection.prototype.flashAlreadyInGroupError = function(user) {
        return $.flashError(I18n.t('flash.userAlreadyInGroup', "WARNING: %{user} is already a member of %{group}", {
          user: h(user.get('name')),
          group: h(this.group.get('name'))
        }));
      };

      GroupUserCollection.prototype.removeUser = function(user) {
        var _ref1, _ref2;

        if (this.membershipsLocked()) {
          return;
        }
        this.increment(-1);
        if (((_ref1 = this.group) != null ? (_ref2 = _ref1.get('leader')) != null ? _ref2.id : void 0 : void 0) === user.id) {
          this.group.set('leader', null);
        }
        if (this.loaded) {
          return this.remove(user);
        }
      };

      GroupUserCollection.prototype.increment = function(amount) {
        return this.group.increment('members_count', amount);
      };

      GroupUserCollection.prototype.groupUsersFor = function(group) {
        var _ref1;

        return (_ref1 = this.category) != null ? _ref1.groupUsersFor(group) : void 0;
      };

      return GroupUserCollection;

    })(PaginatedCollection);
  });

}).call(this);
