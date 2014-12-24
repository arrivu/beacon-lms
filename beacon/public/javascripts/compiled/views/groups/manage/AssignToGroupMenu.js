(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['compiled/views/groups/manage/PopoverMenuView', 'compiled/models/GroupUser', 'jst/groups/manage/assignToGroupMenu', 'jquery', 'underscore', 'compiled/jquery/outerclick'], function(PopoverMenuView, GroupUser, template, $, _) {
    var AssignToGroupMenu, _ref;

    return AssignToGroupMenu = (function(_super) {
      __extends(AssignToGroupMenu, _super);

      function AssignToGroupMenu() {
        _ref = AssignToGroupMenu.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      AssignToGroupMenu.prototype.defaults = _.extend({}, PopoverMenuView.prototype.defaults, {
        zIndex: 10
      });

      AssignToGroupMenu.prototype.events = _.extend({}, PopoverMenuView.prototype.events, {
        'click .set-group': 'setGroup'
      });

      AssignToGroupMenu.prototype.attach = function() {
        return this.collection.on('change add remove reset', this.render);
      };

      AssignToGroupMenu.prototype.tagName = 'div';

      AssignToGroupMenu.prototype.className = 'assign-to-group-menu ui-tooltip popover content-top horizontal';

      AssignToGroupMenu.prototype.template = template;

      AssignToGroupMenu.prototype.setGroup = function(e) {
        var newGroupId;

        e.preventDefault();
        e.stopPropagation();
        newGroupId = $(e.currentTarget).data('group-id');
        this.collection.category.reassignUser(this.model, this.collection.get(newGroupId));
        return this.hide();
      };

      AssignToGroupMenu.prototype.toJSON = function() {
        var hasGroups;

        hasGroups = this.collection.length > 0;
        return {
          groups: this.collection.toJSON(),
          noGroups: !hasGroups,
          allFull: hasGroups && this.collection.models.every(function(g) {
            return g.isFull();
          })
        };
      };

      AssignToGroupMenu.prototype.attachElement = function() {
        return $('body').append(this.$el);
      };

      return AssignToGroupMenu;

    })(PopoverMenuView);
  });

}).call(this);
