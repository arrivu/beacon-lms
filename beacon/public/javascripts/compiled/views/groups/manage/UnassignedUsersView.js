(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'compiled/views/groups/manage/GroupUsersView', 'compiled/views/groups/manage/AssignToGroupMenu', 'compiled/views/groups/manage/Scrollable', 'compiled/views/Filterable', 'jst/groups/manage/groupUsers'], function($, _, GroupUsersView, AssignToGroupMenu, Scrollable, Filterable, template) {
    var UnassignedUsersView, _ref;

    return UnassignedUsersView = (function(_super) {
      __extends(UnassignedUsersView, _super);

      function UnassignedUsersView() {
        this._onDrop = __bind(this._onDrop, this);        _ref = UnassignedUsersView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      UnassignedUsersView.optionProperty('groupsCollection');

      UnassignedUsersView.optionProperty('category');

      UnassignedUsersView.prototype.defaults = _.extend({}, GroupUsersView.prototype.defaults, {
        autoFetch: true,
        itemViewOptions: {
          canAssignToGroup: true,
          canEditGroupAssignment: false
        }
      });

      UnassignedUsersView.prototype.els = _.extend({}, GroupUsersView.prototype.els, {
        '.no-results-wrapper': '$noResultsWrapper',
        '.no-results': '$noResults'
      });

      UnassignedUsersView.mixin(Filterable, Scrollable);

      UnassignedUsersView.prototype.dropOptions = {
        accept: '.group-user',
        activeClass: 'droppable',
        hoverClass: 'droppable-hover',
        tolerance: 'pointer'
      };

      UnassignedUsersView.prototype.attach = function() {
        var _this = this;

        this.collection.on('reset', this.render);
        this.collection.on('remove', this.render);
        this.collection.on('moved', this.highlightUser);
        this.collection.on('filterOut', _(function() {
          return _this.checkScroll();
        }).debounce(50));
        this.collection.once('fetch', function() {
          return _this.$noResultsWrapper.hide();
        });
        return this.collection.on('fetched:last', function() {
          return _this.$noResultsWrapper.show();
        });
      };

      UnassignedUsersView.prototype.afterRender = function() {
        this.$filter = this.$externalFilter;
        UnassignedUsersView.__super__.afterRender.apply(this, arguments);
        this.collection.load('first');
        this.$el.parent().droppable(_.extend({}, this.dropOptions)).on('drop', this._onDrop);
        this.scrollContainer = this.heightContainer = this.$el;
        return this.$scrollableElement = this.$el.find("ul");
      };

      UnassignedUsersView.prototype.toJSON = function() {
        return {
          loading: !this.collection.loadedAll,
          count: this.collection.length,
          ENV: ENV
        };
      };

      UnassignedUsersView.prototype.remove = function() {
        var _ref1;

        if ((_ref1 = this.assignToGroupMenu) != null) {
          _ref1.remove();
        }
        return UnassignedUsersView.__super__.remove.apply(this, arguments);
      };

      UnassignedUsersView.prototype.events = {
        'click .assign-to-group': 'showAssignToGroup',
        'focus .assign-to-group': 'showAssignToGroup',
        'blur .assign-to-group': 'hideAssignToGroup',
        'scroll': 'hideAssignToGroup'
      };

      UnassignedUsersView.prototype.showAssignToGroup = function(e) {
        var $target, _ref1;

        e.preventDefault();
        e.stopPropagation();
        $target = $(e.currentTarget);
        if ((_ref1 = this.assignToGroupMenu) == null) {
          this.assignToGroupMenu = new AssignToGroupMenu({
            collection: this.groupsCollection
          });
        }
        this.assignToGroupMenu.model = this.collection.get($target.data('user-id'));
        return this.assignToGroupMenu.showBy($target);
      };

      UnassignedUsersView.prototype.hideAssignToGroup = function() {
        var _ref1;

        return (_ref1 = this.assignToGroupMenu) != null ? _ref1.hide() : void 0;
      };

      UnassignedUsersView.prototype.canAssignToGroup = function() {
        return this.options.canAssignToGroup && this.groupsCollection.length;
      };

      UnassignedUsersView.prototype._onDrop = function(e, ui) {
        var user,
          _this = this;

        user = ui.draggable.data('model');
        return setTimeout(function() {
          return _this.category.reassignUser(user, null);
        });
      };

      return UnassignedUsersView;

    })(GroupUsersView);
  });

}).call(this);
