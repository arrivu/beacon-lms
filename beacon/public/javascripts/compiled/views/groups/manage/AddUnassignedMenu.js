(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['compiled/views/groups/manage/PopoverMenuView', 'compiled/views/groups/manage/AddUnassignedUsersView', 'compiled/views/InputFilterView', 'jst/groups/manage/addUnassignedMenu', 'jquery', 'underscore', 'compiled/jquery/outerclick'], function(PopoverMenuView, AddUnassignedUsersView, InputFilterView, template, $, _) {
    var AddUnassignedMenu, _ref;

    return AddUnassignedMenu = (function(_super) {
      __extends(AddUnassignedMenu, _super);

      function AddUnassignedMenu() {
        this.setGroup = __bind(this.setGroup, this);        _ref = AddUnassignedMenu.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      AddUnassignedMenu.child('usersView', '[data-view=users]');

      AddUnassignedMenu.child('inputFilterView', '[data-view=inputFilter]');

      AddUnassignedMenu.prototype.initialize = function(options) {
        var _ref1, _ref2;

        this.collection.setParam("per_page", 10);
        if ((_ref1 = options.usersView) == null) {
          options.usersView = new AddUnassignedUsersView({
            collection: this.collection
          });
        }
        if ((_ref2 = options.inputFilterView) == null) {
          options.inputFilterView = new InputFilterView({
            collection: this.collection,
            setParamOnInvalid: true
          });
        }
        this.my = 'right-8 top-47';
        this.at = 'left center';
        return AddUnassignedMenu.__super__.initialize.apply(this, arguments);
      };

      AddUnassignedMenu.prototype.className = 'add-unassigned-menu ui-tooltip popover right content-top horizontal';

      AddUnassignedMenu.prototype.template = template;

      AddUnassignedMenu.prototype.events = _.extend({}, PopoverMenuView.prototype.events, {
        'click .assign-user-to-group': 'setGroup'
      });

      AddUnassignedMenu.prototype.setGroup = function(e) {
        var $target, user;

        e.preventDefault();
        e.stopPropagation();
        $target = $(e.currentTarget);
        user = this.collection.get($target.data('user-id'));
        user.save({
          'group': this.group
        });
        return this.hide();
      };

      AddUnassignedMenu.prototype.showBy = function($target, focus) {
        if (focus == null) {
          focus = false;
        }
        this.collection.reset();
        this.collection.deleteParam('search_term');
        return AddUnassignedMenu.__super__.showBy.apply(this, arguments);
      };

      AddUnassignedMenu.prototype.attach = function() {
        return this.render();
      };

      AddUnassignedMenu.prototype.toJSON = function() {
        return {
          users: this.collection.toJSON(),
          ENV: ENV
        };
      };

      AddUnassignedMenu.prototype.focus = function() {
        return this.inputFilterView.el.focus();
      };

      AddUnassignedMenu.prototype.setWidth = function() {
        return this.$el.width('auto');
      };

      return AddUnassignedMenu;

    })(PopoverMenuView);
  });

}).call(this);
