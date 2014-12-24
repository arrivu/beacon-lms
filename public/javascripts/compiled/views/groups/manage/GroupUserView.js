(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['underscore', 'Backbone', 'jst/groups/manage/groupUser'], function(_, _arg, template) {
    var GroupUserView, View, _ref;

    View = _arg.View;
    return GroupUserView = (function(_super) {
      __extends(GroupUserView, _super);

      function GroupUserView() {
        _ref = GroupUserView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      GroupUserView.optionProperty('canAssignToGroup');

      GroupUserView.optionProperty('canEditGroupAssignment');

      GroupUserView.prototype.tagName = 'li';

      GroupUserView.prototype.className = 'group-user';

      GroupUserView.prototype.template = template;

      GroupUserView.prototype.els = {
        '.al-trigger': '$userActions'
      };

      GroupUserView.prototype.closeMenu = function() {
        var _ref1;

        return (_ref1 = this.$userActions.data('kyleMenu')) != null ? _ref1.$menu.popup('close') : void 0;
      };

      GroupUserView.prototype.attach = function() {
        return this.model.on('change', this.render, this);
      };

      GroupUserView.prototype.afterRender = function() {
        return this.$el.data('model', this.model);
      };

      GroupUserView.prototype.highlight = function() {
        var _this = this;

        this.$el.addClass('group-user-highlight');
        return setTimeout(function() {
          return _this.$el.removeClass('group-user-highlight');
        }, 1000);
      };

      GroupUserView.prototype.toJSON = function() {
        var _ref1;

        return _.extend({
          groupId: (_ref1 = this.model.get('group')) != null ? _ref1.id : void 0
        }, this, GroupUserView.__super__.toJSON.apply(this, arguments));
      };

      GroupUserView.prototype.isLeader = function() {
        var _ref1, _ref2;

        return ((_ref1 = this.model.get('group')) != null ? typeof _ref1.get === "function" ? (_ref2 = _ref1.get('leader')) != null ? _ref2.id : void 0 : void 0 : void 0) === this.model.get('id');
      };

      return GroupUserView;

    })(View);
  });

}).call(this);
