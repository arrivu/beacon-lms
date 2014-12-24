(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'compiled/collections/GroupCollection', 'compiled/views/PaginatedCollectionView', 'compiled/views/groups/manage/GroupUserView', 'compiled/views/groups/manage/EditGroupAssignmentView', 'jst/groups/manage/groupUsers', 'jqueryui/draggable', 'jqueryui/droppable'], function($, _, GroupCollection, PaginatedCollectionView, GroupUserView, EditGroupAssignmentView, template) {
    var GroupUsersView, _ref;

    return GroupUsersView = (function(_super) {
      __extends(GroupUsersView, _super);

      function GroupUsersView() {
        this.removeItem = __bind(this.removeItem, this);
        this._initDrag = __bind(this._initDrag, this);
        this.renderItem = __bind(this.renderItem, this);        _ref = GroupUsersView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      GroupUsersView.prototype.defaults = _.extend({}, PaginatedCollectionView.prototype.defaults, {
        itemView: GroupUserView,
        itemViewOptions: {
          canAssignToGroup: false,
          canEditGroupAssignment: true
        }
      });

      GroupUsersView.prototype.dragOptions = {
        appendTo: 'body',
        helper: 'clone',
        opacity: 0.75,
        refreshPositions: true,
        revert: 'invalid',
        revertDuration: 150,
        start: function(event, ui) {
          return $('.assign-to-group-menu').hide();
        }
      };

      GroupUsersView.prototype.initialize = function() {
        GroupUsersView.__super__.initialize.apply(this, arguments);
        if (this.collection.loadAll) {
          return this.detachScroll();
        }
      };

      GroupUsersView.prototype.template = template;

      GroupUsersView.prototype.attach = function() {
        this.model.on('change:members_count', this.render);
        this.model.on('change:leader', this.render);
        return this.collection.on('moved', this.highlightUser);
      };

      GroupUsersView.prototype.highlightUser = function(user) {
        return user.itemView.highlight();
      };

      GroupUsersView.prototype.closeMenus = function() {
        var model, _i, _len, _ref1, _results;

        _ref1 = this.collection.models;
        _results = [];
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          model = _ref1[_i];
          _results.push(model.itemView.closeMenu());
        }
        return _results;
      };

      GroupUsersView.prototype.events = {
        'click .remove-from-group': 'removeUserFromGroup',
        'click .remove-as-leader': 'removeLeader',
        'click .set-as-leader': 'setLeader',
        'click .edit-group-assignment': 'editGroupAssignment'
      };

      GroupUsersView.prototype.removeUserFromGroup = function(e) {
        var $target;

        e.preventDefault();
        e.stopPropagation();
        $target = $(e.currentTarget);
        return this.collection.get($target.data('user-id')).save('group', null);
      };

      GroupUsersView.prototype.removeLeader = function(e) {
        e.preventDefault();
        e.stopPropagation();
        return this.model.save({
          leader: null
        });
      };

      GroupUsersView.prototype.setLeader = function(e) {
        var $target;

        e.preventDefault();
        e.stopPropagation();
        $target = $(e.currentTarget);
        return this.model.save({
          leader: {
            id: $target.data('user-id').toString()
          }
        });
      };

      GroupUsersView.prototype.editGroupAssignment = function(e) {
        var $target, selector, user, _ref1;

        e.preventDefault();
        e.stopPropagation();
        if ((_ref1 = this.editGroupAssignmentView) == null) {
          this.editGroupAssignmentView = new EditGroupAssignmentView({
            group: this.model
          });
        }
        $target = $(e.currentTarget);
        user = this.collection.get($target.data('user-id'));
        this.editGroupAssignmentView.model = user;
        selector = "[data-focus-returns-to='group-" + this.model.id + "-user-" + user.id + "-actions']";
        this.editGroupAssignmentView.setTrigger(selector);
        return this.editGroupAssignmentView.open();
      };

      GroupUsersView.prototype.toJSON = function() {
        return {
          count: this.model.usersCount(),
          locked: this.model.isLocked(),
          ENV: ENV
        };
      };

      GroupUsersView.prototype.renderItem = function(model) {
        var _ref1;

        GroupUsersView.__super__.renderItem.apply(this, arguments);
        if (!((_ref1 = this.model) != null ? _ref1.isLocked() : void 0)) {
          return this._initDrag(model.view);
        }
      };

      GroupUsersView.prototype._initDrag = function(view) {
        view.$el.draggable(_.extend({}, this.dragOptions));
        return view.$el.on('dragstart', function(event, ui) {
          ui.helper.css('width', view.$el.width());
          $(event.target).draggable('option', 'containment', 'document');
          return $(event.target).data('draggable')._setContainment();
        });
      };

      GroupUsersView.prototype.removeItem = function(model) {
        return model.view.remove();
      };

      return GroupUsersView;

    })(PaginatedCollectionView);
  });

}).call(this);
