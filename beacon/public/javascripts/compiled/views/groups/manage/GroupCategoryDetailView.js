(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!groups', 'jquery', 'underscore', 'Backbone', 'compiled/views/MessageStudentsDialog', 'compiled/views/groups/manage/RandomlyAssignMembersView', 'compiled/views/groups/manage/GroupCreateView', 'compiled/views/groups/manage/GroupCategoryEditView', 'compiled/models/Group', 'jst/groups/manage/groupCategoryDetail'], function(I18n, $, _, _arg, MessageStudentsDialog, RandomlyAssignMembersView, GroupCreateView, GroupCategoryEditView, Group, template) {
    var GroupCategoryDetailView, View, _ref;

    View = _arg.View;
    return GroupCategoryDetailView = (function(_super) {
      __extends(GroupCategoryDetailView, _super);

      function GroupCategoryDetailView() {
        this.deleteCategory = __bind(this.deleteCategory, this);        _ref = GroupCategoryDetailView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      GroupCategoryDetailView.prototype.template = template;

      GroupCategoryDetailView.optionProperty('parentView');

      GroupCategoryDetailView.prototype.events = {
        'click .message-all-unassigned': 'messageAllUnassigned',
        'click .edit-category': 'editCategory',
        'click .delete-category': 'deleteCategory',
        'click .add-group': 'addGroup'
      };

      GroupCategoryDetailView.prototype.els = {
        '.randomly-assign-members': '$randomlyAssignMembersLink',
        '.al-trigger': '$groupCategoryActions',
        '.edit-category': '$editGroupCategoryLink',
        '.message-all-unassigned': '$messageAllUnassignedLink',
        '.add-group': '$addGroupButton'
      };

      GroupCategoryDetailView.prototype.initialize = function(options) {
        GroupCategoryDetailView.__super__.initialize.apply(this, arguments);
        return this.randomlyAssignUsersView = new RandomlyAssignMembersView({
          model: options.model
        });
      };

      GroupCategoryDetailView.prototype.attach = function() {
        this.collection.on('add remove reset', this.render);
        return this.model.on('change', this.render);
      };

      GroupCategoryDetailView.prototype.afterRender = function() {
        var _ref1;

        this.randomlyAssignUsersView.setTrigger(this.$randomlyAssignMembersLink);
        return (_ref1 = this.createView) != null ? _ref1.setTrigger(this.$addGroupButton) : void 0;
      };

      GroupCategoryDetailView.prototype.toJSON = function() {
        var json;

        json = GroupCategoryDetailView.__super__.toJSON.apply(this, arguments);
        json.canMessageMembers = this.model.canMessageUnassignedMembers();
        json.canAssignMembers = this.model.canAssignUnassignedMembers();
        json.locked = this.model.isLocked();
        return json;
      };

      GroupCategoryDetailView.prototype.deleteCategory = function(e) {
        e.preventDefault();
        if (!confirm(I18n.t('delete_confirm', 'Are you sure you want to remove this group set?'))) {
          this.$groupCategoryActions.focus();
          return;
        }
        return this.model.destroy({
          success: function() {
            return $.flashMessage(I18n.t('flash.removed', 'Group set successfully removed.'));
          },
          failure: function() {
            return $.flashError(I18n.t('flash.removeError', 'Unable to remove the group set. Please try again later.'));
          }
        });
      };

      GroupCategoryDetailView.prototype.addGroup = function(e) {
        var newGroup, _ref1,
          _this = this;

        e.preventDefault();
        if ((_ref1 = this.createView) == null) {
          this.createView = new GroupCreateView({
            groupCategory: this.model,
            trigger: this.$addGroupButton
          });
        }
        newGroup = new Group({
          group_category_id: this.model.id
        }, {
          newAndEmpty: true
        });
        newGroup.once('sync', function() {
          return _this.collection.add(newGroup);
        });
        this.createView.model = newGroup;
        return this.createView.open();
      };

      GroupCategoryDetailView.prototype.editCategory = function() {
        var _ref1;

        if ((_ref1 = this.editCategoryView) == null) {
          this.editCategoryView = new GroupCategoryEditView({
            model: this.model,
            trigger: this.$editGroupCategoryLink
          });
        }
        return this.editCategoryView.open();
      };

      GroupCategoryDetailView.prototype.messageAllUnassigned = function(e) {
        var disabler, users,
          _this = this;

        e.preventDefault();
        disabler = $.Deferred();
        this.parentView.$el.disableWhileLoading(disabler);
        disabler.done(function() {
          var dialog, students;

          students = _this.model.unassignedUsers().map(function(user) {
            return {
              id: user.get("id"),
              short_name: user.get("short_name")
            };
          });
          dialog = new MessageStudentsDialog({
            trigger: _this.$messageAllUnassignedLink,
            context: _this.model.get('name'),
            recipientGroups: [
              {
                name: I18n.t('students_who_have_not_joined_a_group', 'Students who have not joined a group'),
                recipients: students
              }
            ]
          });
          return dialog.open();
        });
        users = this.model.unassignedUsers();
        users.on('fetched:last', function() {
          return disabler.resolve();
        });
        if (users.urls.next != null) {
          users.loadAll = true;
          return users.fetch({
            page: 'next'
          });
        } else {
          return disabler.resolve();
        }
      };

      return GroupCategoryDetailView;

    })(View);
  });

}).call(this);
