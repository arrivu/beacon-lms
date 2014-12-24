(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!GroupDetailView', 'jquery', 'Backbone', 'compiled/views/groups/manage/GroupEditView', 'jst/groups/manage/groupDetail', 'compiled/jquery.rails_flash_notifications'], function(I18n, $, _arg, GroupEditView, template) {
    var GroupDetailView, View, _ref;

    View = _arg.View;
    return GroupDetailView = (function(_super) {
      __extends(GroupDetailView, _super);

      function GroupDetailView() {
        this.deleteGroup = __bind(this.deleteGroup, this);
        this.editGroup = __bind(this.editGroup, this);        _ref = GroupDetailView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      GroupDetailView.optionProperty('users');

      GroupDetailView.prototype.template = template;

      GroupDetailView.prototype.events = {
        'click .edit-group': 'editGroup',
        'click .delete-group': 'deleteGroup'
      };

      GroupDetailView.prototype.els = {
        '.toggle-group': '$toggleGroup',
        '.al-trigger': '$groupActions',
        '.edit-group': '$editGroupLink'
      };

      GroupDetailView.prototype.attach = function() {
        return this.model.on('change', this.render);
      };

      GroupDetailView.prototype.summary = function() {
        var count;

        count = this.model.usersCount();
        if (this.model.theLimit()) {
          if (ENV.group_user_type === 'student') {
            return I18n.t("student_count_max", "%{count} / %{max} students", {
              count: count,
              max: this.model.theLimit()
            });
          } else {
            return I18n.t("user_count_max", "%{count} / %{max} users", {
              count: count,
              max: this.model.theLimit()
            });
          }
        } else {
          if (ENV.group_user_type === 'student') {
            return I18n.t("student_count", "student", {
              count: count
            });
          } else {
            return I18n.t("user_count", "user", {
              count: count
            });
          }
        }
      };

      GroupDetailView.prototype.editGroup = function(e) {
        var _ref1;

        e.preventDefault();
        if ((_ref1 = this.editView) == null) {
          this.editView = new GroupEditView({
            model: this.model,
            groupCategory: this.model.collection.category
          });
        }
        this.editView.setTrigger(this.$editGroupLink);
        return this.editView.open();
      };

      GroupDetailView.prototype.deleteGroup = function(e) {
        e.preventDefault();
        if (!confirm(I18n.t('delete_confirm', 'Are you sure you want to remove this group?'))) {
          this.$groupActions.focus();
          return;
        }
        return this.model.destroy({
          success: function() {
            return $.flashMessage(I18n.t('flash.removed', 'Group successfully removed.'));
          },
          error: function() {
            return $.flashError(I18n.t('flash.removeError', 'Unable to remove the group. Please try again later.'));
          }
        });
      };

      GroupDetailView.prototype.closeMenu = function() {
        var _ref1;

        return (_ref1 = this.$groupActions.data('kyleMenu')) != null ? _ref1.$menu.popup('close') : void 0;
      };

      GroupDetailView.prototype.toJSON = function() {
        var json;

        json = this.model.toJSON();
        json.leader = this.model.get('leader');
        json.canAssignUsers = ENV.IS_LARGE_ROSTER && !this.model.isLocked();
        json.canEdit = !this.model.isLocked();
        json.summary = this.summary();
        return json;
      };

      return GroupDetailView;

    })(View);
  });

}).call(this);
