(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'compiled/collections/GroupUserCollection'], function(Backbone, GroupUserCollection) {
    var Group, _ref;

    return Group = (function(_super) {
      __extends(Group, _super);

      function Group() {
        _ref = Group.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Group.prototype.modelType = 'group';

      Group.prototype.resourceName = 'groups';

      Group.prototype.initialize = function(attrs, options) {
        Group.__super__.initialize.apply(this, arguments);
        return this.newAndEmpty = options != null ? options.newAndEmpty : void 0;
      };

      Group.prototype.users = function() {
        var initialUsers, _ref1,
          _this = this;

        initialUsers = this.newAndEmpty ? [] : null;
        this._users = new GroupUserCollection(initialUsers, {
          group: this,
          category: (_ref1 = this.collection) != null ? _ref1.category : void 0
        });
        this._users.on('fetched:last', function() {
          return _this.set('members_count', _this._users.length);
        });
        this.users = function() {
          return this._users;
        };
        return this._users;
      };

      Group.prototype.usersCount = function() {
        return this.get('members_count');
      };

      Group.prototype.sync = function(method, model, options) {
        if (options == null) {
          options = {};
        }
        options.url = this.urlFor(method);
        return Backbone.sync(method, model, options);
      };

      Group.prototype.urlFor = function(method) {
        if (method === 'create') {
          return "/api/v1/group_categories/" + (this.get('group_category_id')) + "/groups";
        } else {
          return "/api/v1/groups/" + this.id;
        }
      };

      Group.prototype.theLimit = function() {
        var max_membership, _ref1, _ref2;

        max_membership = this.get('max_membership');
        return max_membership || ((_ref1 = this.collection) != null ? (_ref2 = _ref1.category) != null ? _ref2.get('group_limit') : void 0 : void 0);
      };

      Group.prototype.isFull = function() {
        var limit;

        limit = this.get('max_membership');
        return (!limit && this.groupCategoryLimitMet()) || (limit && this.get('members_count') >= limit);
      };

      Group.prototype.groupCategoryLimitMet = function() {
        var limit, _ref1, _ref2;

        limit = (_ref1 = this.collection) != null ? (_ref2 = _ref1.category) != null ? _ref2.get('group_limit') : void 0 : void 0;
        return limit && this.get('members_count') >= limit;
      };

      Group.prototype.isLocked = function() {
        var _ref1, _ref2;

        return (_ref1 = this.collection) != null ? (_ref2 = _ref1.category) != null ? _ref2.isLocked() : void 0 : void 0;
      };

      Group.prototype.toJSON = function() {
        var json;

        if (ENV.student_mode) {
          return {
            name: this.get('name')
          };
        } else {
          json = Group.__super__.toJSON.apply(this, arguments);
          json.isFull = this.isFull();
          return json;
        }
      };

      return Group;

    })(Backbone.Model);
  });

}).call(this);
