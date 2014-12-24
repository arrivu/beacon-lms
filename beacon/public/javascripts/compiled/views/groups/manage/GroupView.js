(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'Backbone', 'jst/groups/manage/group', 'compiled/views/groups/manage/GroupUsersView', 'compiled/views/groups/manage/GroupDetailView'], function($, _, _arg, template, GroupUsersView, GroupDetailView) {
    var GroupView, View, _ref;

    View = _arg.View;
    return GroupView = (function(_super) {
      __extends(GroupView, _super);

      function GroupView() {
        this._onDrop = __bind(this._onDrop, this);        _ref = GroupView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      GroupView.prototype.tagName = 'li';

      GroupView.prototype.className = 'group';

      GroupView.prototype.attributes = function() {
        return {
          "data-id": this.model.id
        };
      };

      GroupView.prototype.template = template;

      GroupView.optionProperty('expanded');

      GroupView.optionProperty('addUnassignedMenu');

      GroupView.child('groupUsersView', '[data-view=groupUsers]');

      GroupView.child('groupDetailView', '[data-view=groupDetail]');

      GroupView.prototype.events = {
        'click .toggle-group': 'toggleDetails',
        'click .add-user': 'showAddUser',
        'focus .add-user': 'showAddUser',
        'blur .add-user': 'hideAddUser'
      };

      GroupView.prototype.dropOptions = {
        accept: '.group-user',
        activeClass: 'droppable',
        hoverClass: 'droppable-hover',
        tolerance: 'pointer'
      };

      GroupView.prototype.attach = function() {
        this.expanded = false;
        this.users = this.model.users();
        this.model.on('destroy', this.remove, this);
        this.model.on('change:members_count', this.updateFullState, this);
        return this.model.on('change:max_membership', this.updateFullState, this);
      };

      GroupView.prototype.afterRender = function() {
        this.$el.toggleClass('group-expanded', this.expanded);
        this.$el.toggleClass('group-collapsed', !this.expanded);
        this.groupDetailView.$toggleGroup.attr('aria-expanded', '' + this.expanded);
        return this.updateFullState();
      };

      GroupView.prototype.updateFullState = function() {
        if (this.model.isLocked()) {
          return;
        }
        if (this.model.isFull()) {
          if (this.$el.data('droppable')) {
            this.$el.droppable("destroy");
          }
          return this.$el.addClass('slots-full');
        } else {
          if (!this.$el.data('droppable')) {
            this.$el.droppable(_.extend({}, this.dropOptions)).on('drop', this._onDrop);
          }
          return this.$el.removeClass('slots-full');
        }
      };

      GroupView.prototype.toggleDetails = function(e) {
        e.preventDefault();
        this.expanded = !this.expanded;
        if (this.expanded && !this.users.loaded) {
          this.users.load(this.model.usersCount() ? 'all' : 'none');
        }
        return this.afterRender();
      };

      GroupView.prototype.showAddUser = function(e) {
        var $target;

        e.preventDefault();
        e.stopPropagation();
        $target = $(e.currentTarget);
        this.addUnassignedMenu.group = this.model;
        return this.addUnassignedMenu.showBy($target, e.type === 'click');
      };

      GroupView.prototype.hideAddUser = function(e) {
        return this.addUnassignedMenu.hide();
      };

      GroupView.prototype.closeMenus = function() {
        this.groupDetailView.closeMenu();
        return this.groupUsersView.closeMenus();
      };

      GroupView.prototype._onDrop = function(e, ui) {
        var newGroupId, user,
          _this = this;

        user = ui.draggable.data('model');
        newGroupId = $(e.currentTarget).data('id');
        return setTimeout(function() {
          return _this.model.collection.category.reassignUser(user, _this.model.collection.get(newGroupId));
        });
      };

      return GroupView;

    })(View);
  });

}).call(this);
