(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!assignments', 'jquery', 'underscore', 'compiled/class/cache', 'compiled/views/DraggableCollectionView', 'compiled/views/assignments/AssignmentListItemView', 'compiled/views/assignments/CreateAssignmentView', 'compiled/views/assignments/CreateGroupView', 'compiled/views/assignments/DeleteGroupView', 'compiled/views/MoveDialogView', 'compiled/fn/preventDefault', 'jst/assignments/AssignmentGroupListItem', 'compiled/views/assignments/AssignmentKeyBindingsMixin'], function(I18n, $, _, Cache, DraggableCollectionView, AssignmentListItemView, CreateAssignmentView, CreateGroupView, DeleteGroupView, MoveDialogView, preventDefault, template, AssignmentKeyBindingsMixin) {
    var AssignmentGroupListItemView, _ref;

    return AssignmentGroupListItemView = (function(_super) {
      __extends(AssignmentGroupListItemView, _super);

      function AssignmentGroupListItemView() {
        this.lastVisibleGroup = __bind(this.lastVisibleGroup, this);
        this.focusOnFirstGroup = __bind(this.focusOnFirstGroup, this);
        this.focusOnAssignment = __bind(this.focusOnAssignment, this);
        this.focusOnGroup = __bind(this.focusOnGroup, this);
        this.previousGroup = __bind(this.previousGroup, this);
        this.nextGroup = __bind(this.nextGroup, this);
        this.visibleGroupsInCollection = __bind(this.visibleGroupsInCollection, this);
        this.lastAssignment = __bind(this.lastAssignment, this);
        this.firstAssignment = __bind(this.firstAssignment, this);
        this.hasVisibleAssignments = __bind(this.hasVisibleAssignments, this);
        this.visibleAssignments = __bind(this.visibleAssignments, this);
        this.deleteItem = __bind(this.deleteItem, this);
        this.editItem = __bind(this.editItem, this);
        this.addItem = __bind(this.addItem, this);
        this.goToPrevItem = __bind(this.goToPrevItem, this);
        this.goToNextItem = __bind(this.goToNextItem, this);
        this.isVisible = __bind(this.isVisible, this);
        this.hideAccessibilityWarning = __bind(this.hideAccessibilityWarning, this);
        this.showAccessibilityWarning = __bind(this.showAccessibilityWarning, this);
        this.toggleArrowWithKeyboard = __bind(this.toggleArrowWithKeyboard, this);
        this.toggleArrow = __bind(this.toggleArrow, this);
        this.collapse = __bind(this.collapse, this);
        this.expand = __bind(this.expand, this);
        this.endSort = __bind(this.endSort, this);
        this.startSort = __bind(this.startSort, this);
        this.createRulesToolTip = __bind(this.createRulesToolTip, this);
        this.render = __bind(this.render, this);        _ref = AssignmentGroupListItemView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      AssignmentGroupListItemView.mixin(AssignmentKeyBindingsMixin);

      AssignmentGroupListItemView.optionProperty('course');

      AssignmentGroupListItemView.prototype.tagName = "li";

      AssignmentGroupListItemView.prototype.className = "item-group-condensed";

      AssignmentGroupListItemView.prototype.itemView = AssignmentListItemView;

      AssignmentGroupListItemView.prototype.template = template;

      AssignmentGroupListItemView.child('createAssignmentView', '[data-view=createAssignment]');

      AssignmentGroupListItemView.child('editGroupView', '[data-view=editAssignmentGroup]');

      AssignmentGroupListItemView.child('deleteGroupView', '[data-view=deleteAssignmentGroup]');

      AssignmentGroupListItemView.child('moveGroupView', '[data-view=moveAssignmentGroup]');

      AssignmentGroupListItemView.prototype.els = _.extend({}, AssignmentGroupListItemView.prototype.els, {
        '.add_assignment': '$addAssignmentButton',
        '.delete_group': '$deleteGroupButton',
        '.edit_group': '$editGroupButton',
        '.move_group': '$moveGroupButton',
        '.accessibility-warning': '$accessibilityWarning'
      });

      AssignmentGroupListItemView.prototype.events = {
        'click .element_toggler': 'toggleArrow',
        'keypress .element_toggler': 'toggleArrowWithKeyboard',
        'click .tooltip_link': preventDefault(function() {}),
        'keydown .assignment_group': 'handleKeys',
        'focus .icon-drag-handle': 'showAccessibilityWarning',
        'blur .icon-drag-handle': 'hideAccessibilityWarning'
      };

      AssignmentGroupListItemView.prototype.messages = {
        toggleMessage: I18n.t('toggle_message', "toggle assignment visibility")
      };

      AssignmentGroupListItemView.prototype.render = function() {
        if (this.createAssignmentView) {
          this.createAssignmentView.remove();
        }
        if (this.editGroupView) {
          this.editGroupView.remove();
        }
        if (this.deleteGroupView) {
          this.deleteGroupView.remove();
        }
        if (this.moveGroupView) {
          this.moveGroupView.remove();
        }
        AssignmentGroupListItemView.__super__.render.call(this, this.canManage());
        if (this.model) {
          return this.model.view = this;
        }
      };

      AssignmentGroupListItemView.prototype.afterRender = function() {
        if (this.createAssignmentView) {
          this.createAssignmentView.hide();
          this.createAssignmentView.setTrigger(this.$addAssignmentButton);
        }
        if (this.editGroupView) {
          this.editGroupView.hide();
          this.editGroupView.setTrigger(this.$editGroupButton);
        }
        if (this.deleteGroupView) {
          this.deleteGroupView.hide();
          this.deleteGroupView.setTrigger(this.$deleteGroupButton);
        }
        if (this.moveGroupView) {
          this.moveGroupView.hide();
          this.moveGroupView.setTrigger(this.$moveGroupButton);
        }
        if (this.model.hasRules()) {
          return this.createRulesToolTip();
        }
      };

      AssignmentGroupListItemView.prototype.createRulesToolTip = function() {
        var link;

        link = this.$el.find('.tooltip_link');
        return link.tooltip({
          position: {
            my: 'center top',
            at: 'center bottom+10',
            collision: 'fit fit'
          },
          tooltipClass: 'center top vertical',
          content: function() {
            return $(link.data('tooltipSelector')).html();
          }
        });
      };

      AssignmentGroupListItemView.prototype.initialize = function() {
        this.initializeCollection();
        AssignmentGroupListItemView.__super__.initialize.apply(this, arguments);
        this.initializeChildViews();
        this.model.groupView = this;
        return this.initCache();
      };

      AssignmentGroupListItemView.prototype.initializeCollection = function() {
        var _this = this;

        this.model.get('assignments').each(function(assign) {
          if (assign.multipleDueDates()) {
            return assign.doNotParse();
          }
        });
        this.collection = this.model.get('assignments');
        return this.collection.on('add', function() {
          return _this.expand(false);
        });
      };

      AssignmentGroupListItemView.prototype.initializeChildViews = function() {
        this.editGroupView = false;
        this.createAssignmentView = false;
        this.deleteGroupView = false;
        this.moveGroupView = false;
        if (this.canManage()) {
          this.editGroupView = new CreateGroupView({
            assignmentGroup: this.model
          });
          this.createAssignmentView = new CreateAssignmentView({
            assignmentGroup: this.model
          });
          this.deleteGroupView = new DeleteGroupView({
            model: this.model
          });
          return this.moveGroupView = new MoveDialogView({
            model: this.model,
            closeTarget: this.$el.find('a[id*=manage_link]'),
            saveURL: function() {
              return ENV.URLS.sort_url;
            }
          });
        }
      };

      AssignmentGroupListItemView.prototype.initCache = function() {
        var key;

        $.extend(true, this, Cache);
        this.cache.use('localStorage');
        key = this.cacheKey();
        if (this.cache.get(key) == null) {
          return this.cache.set(key, true);
        }
      };

      AssignmentGroupListItemView.prototype.initSort = function() {
        AssignmentGroupListItemView.__super__.initSort.apply(this, arguments);
        return this.$list.on('sortactivate', this.startSort).on('sortdeactivate', this.endSort);
      };

      AssignmentGroupListItemView.prototype.startSort = function(e, ui) {
        if (this.collection.length === 1 && $(ui.placeholder).data("group") === this.model.id) {
          return this.insertNoItemView();
        }
      };

      AssignmentGroupListItemView.prototype.endSort = function(e, ui) {
        if (this.collection.length === 0 && this.$list.children().length < 1) {
          return this.insertNoItemView();
        } else if (this.$list.children().length > 1) {
          return this.removeNoItemView();
        }
      };

      AssignmentGroupListItemView.prototype.toJSON = function() {
        var attributes, canMove, data, showWeight, _ref1;

        data = this.model.toJSON();
        showWeight = ((_ref1 = this.course) != null ? _ref1.get('apply_assignment_group_weights') : void 0) && (data.group_weight != null);
        canMove = this.model.collection.length > 1;
        return attributes = _.extend(data, {
          course_home: ENV.COURSE_HOME,
          canMove: canMove,
          showRules: this.model.hasRules(),
          rulesText: I18n.t('rules_text', "Rule", {
            count: this.model.countRules()
          }),
          displayableRules: this.displayableRules(),
          showWeight: showWeight,
          groupWeight: data.group_weight,
          toggleMessage: this.messages.toggleMessage,
          hasFrozenAssignments: (this.model.hasFrozenAssignments != null) && this.model.hasFrozenAssignments(),
          ENV: ENV
        });
      };

      AssignmentGroupListItemView.prototype.displayableRules = function() {
        var results, rules,
          _this = this;

        rules = this.model.rules() || {};
        results = [];
        if ((rules.drop_lowest != null) && rules.drop_lowest > 0) {
          results.push(I18n.t('drop_lowest_rule', {
            'one': 'Drop the lowest score',
            'other': 'Drop the lowest %{count} scores'
          }, {
            'count': rules.drop_lowest
          }));
        }
        if ((rules.drop_highest != null) && rules.drop_highest > 0) {
          results.push(I18n.t('drop_highest_rule', {
            'one': 'Drop the highest score',
            'other': 'Drop the highest %{count} scores'
          }, {
            'count': rules.drop_highest
          }));
        }
        if ((rules.never_drop != null) && rules.never_drop.length > 0) {
          _.each(rules.never_drop, function(never_drop_assignment_id) {
            var assign, name;

            assign = _this.model.get('assignments').findWhere({
              id: never_drop_assignment_id
            });
            if (name = assign != null ? assign.get('name') : void 0) {
              return results.push(I18n.t('never_drop_rule', 'Never drop %{assignment_name}', {
                'assignment_name': name
              }));
            }
          });
        }
        return results;
      };

      AssignmentGroupListItemView.prototype.search = function(regex) {
        var atleastone,
          _this = this;

        this.resetBorders();
        atleastone = false;
        this.collection.each(function(as) {
          if (as.search(regex)) {
            return atleastone = true;
          }
        });
        if (atleastone) {
          this.show();
          this.expand(false);
          this.borderFix();
        } else {
          this.hide();
        }
        return atleastone;
      };

      AssignmentGroupListItemView.prototype.endSearch = function() {
        var _this = this;

        this.resetBorders();
        this.show();
        this.collapseIfNeeded();
        this.resetNoToggleCache();
        return this.collection.each(function(as) {
          return as.endSearch();
        });
      };

      AssignmentGroupListItemView.prototype.resetBorders = function() {
        this.$('.first_visible').removeClass('first_visible');
        return this.$('.last_visible').removeClass('last_visible');
      };

      AssignmentGroupListItemView.prototype.borderFix = function() {
        this.$('.search_show').first().addClass("first_visible");
        return this.$('.search_show').last().addClass("last_visible");
      };

      AssignmentGroupListItemView.prototype.shouldBeExpanded = function() {
        return this.cache.get(this.cacheKey());
      };

      AssignmentGroupListItemView.prototype.collapseIfNeeded = function() {
        if (!this.shouldBeExpanded()) {
          return this.collapse(false);
        }
      };

      AssignmentGroupListItemView.prototype.expand = function(toggleCache) {
        if (toggleCache == null) {
          toggleCache = true;
        }
        if (!toggleCache) {
          this._setNoToggleCache();
        }
        if (!this.currentlyExpanded()) {
          return this.toggleCollapse();
        }
      };

      AssignmentGroupListItemView.prototype.collapse = function(toggleCache) {
        if (toggleCache == null) {
          toggleCache = true;
        }
        if (!toggleCache) {
          this._setNoToggleCache();
        }
        if (this.currentlyExpanded()) {
          return this.toggleCollapse();
        }
      };

      AssignmentGroupListItemView.prototype.toggleCollapse = function(toggleCache) {
        if (toggleCache == null) {
          toggleCache = true;
        }
        if (!toggleCache) {
          this._setNoToggleCache();
        }
        return this.$el.find('.element_toggler').click();
      };

      AssignmentGroupListItemView.prototype._setNoToggleCache = function() {
        return this.$el.find('.element_toggler').data("noToggleCache", true);
      };

      AssignmentGroupListItemView.prototype.currentlyExpanded = function() {
        if (this.$el.find('.element_toggler').attr("aria-expanded") === "false") {
          return false;
        } else {
          return true;
        }
      };

      AssignmentGroupListItemView.prototype.cacheKey = function() {
        return ["course", this.course.get('id'), "user", this.currentUserId(), "ag", this.model.get('id'), "expanded"];
      };

      AssignmentGroupListItemView.prototype.toggleArrow = function(ev) {
        var arrow;

        arrow = $(ev.currentTarget).children('i');
        arrow.toggleClass('icon-mini-arrow-down').toggleClass('icon-mini-arrow-right');
        if (!$(ev.currentTarget).data("noToggleCache")) {
          this.toggleCache();
        }
        return this.resetNoToggleCache(ev.currentTarget);
      };

      AssignmentGroupListItemView.prototype.toggleArrowWithKeyboard = function(ev) {
        if (ev.which === 13 || ev.which === 32) {
          return this.toggleArrow(ev);
        }
      };

      AssignmentGroupListItemView.prototype.showAccessibilityWarning = function(ev) {
        this.$accessibilityWarning.removeClass('screenreader-only');
        return this.$accessibilityWarning.focus();
      };

      AssignmentGroupListItemView.prototype.hideAccessibilityWarning = function(ev) {
        return this.$accessibilityWarning.addClass('screenreader-only');
      };

      AssignmentGroupListItemView.prototype.resetNoToggleCache = function(selector) {
        var obj;

        if (selector == null) {
          selector = null;
        }
        if (selector != null) {
          obj = $(selector);
        } else {
          obj = this.$el.find('.element_toggler');
        }
        return obj.data("noToggleCache", false);
      };

      AssignmentGroupListItemView.prototype.toggleCache = function() {
        var expanded, key;

        key = this.cacheKey();
        expanded = !this.cache.get(key);
        return this.cache.set(key, expanded);
      };

      AssignmentGroupListItemView.prototype.canManage = function() {
        return ENV.PERMISSIONS.manage;
      };

      AssignmentGroupListItemView.prototype.currentUserId = function() {
        return ENV.current_user_id;
      };

      AssignmentGroupListItemView.prototype.isVisible = function() {
        return $("#assignment_group_" + this.model.id).is(":visible");
      };

      AssignmentGroupListItemView.prototype.goToNextItem = function() {
        if (this.hasVisibleAssignments()) {
          return this.focusOnAssignment(this.firstAssignment());
        } else if (this.nextGroup() != null) {
          return this.focusOnGroup(this.nextGroup());
        } else {
          return this.focusOnFirstGroup();
        }
      };

      AssignmentGroupListItemView.prototype.goToPrevItem = function() {
        if (this.previousGroup() != null) {
          if (this.previousGroup().view.hasVisibleAssignments()) {
            return this.focusOnAssignment(this.previousGroup().view.lastAssignment());
          } else {
            return this.focusOnGroup(this.previousGroup());
          }
        } else {
          if (this.lastVisibleGroup().view.hasVisibleAssignments()) {
            return this.focusOnAssignment(this.lastVisibleGroup().view.lastAssignment());
          } else {
            return this.focusOnGroup(this.lastVisibleGroup());
          }
        }
      };

      AssignmentGroupListItemView.prototype.addItem = function() {
        return $(".add_assignment", "#assignment_group_" + this.model.id).click();
      };

      AssignmentGroupListItemView.prototype.editItem = function() {
        return $(".edit_group[data-focus-returns-to='ag_" + this.model.id + "_manage_link']").click();
      };

      AssignmentGroupListItemView.prototype.deleteItem = function() {
        return $(".delete_group[data-focus-returns-to='ag_" + this.model.id + "_manage_link']").click();
      };

      AssignmentGroupListItemView.prototype.visibleAssignments = function() {
        return this.collection.filter(function(assign) {
          return assign.attributes.hidden !== true;
        });
      };

      AssignmentGroupListItemView.prototype.hasVisibleAssignments = function() {
        return this.currentlyExpanded() && this.visibleAssignments().length;
      };

      AssignmentGroupListItemView.prototype.firstAssignment = function() {
        return this.visibleAssignments()[0];
      };

      AssignmentGroupListItemView.prototype.lastAssignment = function() {
        return this.visibleAssignments()[this.visibleAssignments().length - 1];
      };

      AssignmentGroupListItemView.prototype.visibleGroupsInCollection = function() {
        return this.model.collection.filter(function(group) {
          return group.view.isVisible();
        });
      };

      AssignmentGroupListItemView.prototype.nextGroup = function() {
        var place_in_groups_collection;

        place_in_groups_collection = this.visibleGroupsInCollection().indexOf(this.model);
        return this.visibleGroupsInCollection()[place_in_groups_collection + 1];
      };

      AssignmentGroupListItemView.prototype.previousGroup = function() {
        var place_in_groups_collection;

        place_in_groups_collection = this.visibleGroupsInCollection().indexOf(this.model);
        return this.visibleGroupsInCollection()[place_in_groups_collection - 1];
      };

      AssignmentGroupListItemView.prototype.focusOnGroup = function(group) {
        return $("#assignment_group_" + group.attributes.id).attr("tabindex", -1).focus();
      };

      AssignmentGroupListItemView.prototype.focusOnAssignment = function(assignment) {
        return $("#assignment_" + assignment.id).attr("tabindex", -1).focus();
      };

      AssignmentGroupListItemView.prototype.focusOnFirstGroup = function() {
        return $(".assignment_group").filter(":visible").first().attr("tabindex", -1).focus();
      };

      AssignmentGroupListItemView.prototype.lastVisibleGroup = function() {
        var last_group_index;

        last_group_index = this.visibleGroupsInCollection().length - 1;
        return this.visibleGroupsInCollection()[last_group_index];
      };

      return AssignmentGroupListItemView;

    })(DraggableCollectionView);
  });

}).call(this);
