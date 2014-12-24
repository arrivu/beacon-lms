(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'compiled/models/User', 'jquery.ajaxJSON'], function($, User) {
    var GroupUser, _ref;

    return GroupUser = (function(_super) {
      __extends(GroupUser, _super);

      function GroupUser() {
        this.moved = __bind(this.moved, this);
        this.sync = __bind(this.sync, this);        _ref = GroupUser.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      GroupUser.prototype.sync = function(method, model, options) {
        var group, previousGroup;

        group = this.get('group');
        previousGroup = this.previous('group');
        if (group === previousGroup) {
          return;
        }
        if (group != null) {
          this.joinGroup(group);
        }
        if (previousGroup && ((group == null) || this.get('category').get('allows_multiple_memberships'))) {
          return this.leaveGroup(previousGroup);
        }
      };

      GroupUser.prototype.joinGroup = function(group) {
        var _this = this;

        return $.ajaxJSON("/api/v1/groups/" + group.id + "/memberships", 'POST', {
          user_id: this.get('id')
        }, function(data) {
          return _this.trigger('ajaxJoinGroupSuccess', data);
        });
      };

      GroupUser.prototype.leaveGroup = function(group) {
        return $.ajaxJSON("/api/v1/groups/" + group.id + "/users/" + (this.get('id')), 'DELETE');
      };

      GroupUser.prototype.moved = function() {
        return this.trigger('moved', this);
      };

      return GroupUser;

    })(User);
  });

}).call(this);
