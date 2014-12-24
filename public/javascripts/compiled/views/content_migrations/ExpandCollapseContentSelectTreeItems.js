(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  define(['underscore', 'jquery'], function(_, $) {
    var ExpandCollapseContentSelectTreeItems;

    return ExpandCollapseContentSelectTreeItems = (function() {
      var linkedResourceTypes;

      linkedResourceTypes = ['assignments', 'quizzes', 'discussion_topics'];

      function ExpandCollapseContentSelectTreeItems($tree, bindEvents) {
        this.$tree = $tree;
        if (bindEvents == null) {
          bindEvents = true;
        }
        this.caretEvent = __bind(this.caretEvent, this);
        this.collapse = __bind(this.collapse, this);
        this.expand = __bind(this.expand, this);
        if (bindEvents) {
          this.bindEvents();
        }
      }

      ExpandCollapseContentSelectTreeItems.prototype.bindEvents = function() {
        this.$tree.on("click", ".checkbox-caret", this.caretEvent);
        this.$tree.on('expand', '[role=treeitem]', this.expand);
        return this.$tree.on('collapse', '[role=treeitem]', this.collapse);
      };

      ExpandCollapseContentSelectTreeItems.prototype.expand = function(event) {
        event.stopPropagation();
        return this.expandTreeItem($(event.currentTarget));
      };

      ExpandCollapseContentSelectTreeItems.prototype.collapse = function(event) {
        event.stopPropagation();
        return this.collapseTreeItem($(event.currentTarget));
      };

      ExpandCollapseContentSelectTreeItems.prototype.caretEvent = function(event) {
        var $treeitem;

        event.preventDefault();
        event.stopPropagation();
        $treeitem = $(event.currentTarget).closest('[role=treeitem]');
        if ($treeitem.attr('aria-expanded') === "true") {
          return this.collapseTreeItem($treeitem);
        } else {
          return this.expandTreeItem($treeitem);
        }
      };

      ExpandCollapseContentSelectTreeItems.prototype.expandTreeItem = function($treeitem) {
        $treeitem.attr('aria-expanded', true);
        return this.triggerTreeItemFetches($treeitem);
      };

      ExpandCollapseContentSelectTreeItems.prototype.collapseTreeItem = function($treeitem) {
        return $treeitem.attr('aria-expanded', false);
      };

      ExpandCollapseContentSelectTreeItems.prototype.triggerTreeItemFetches = function($treeitem) {
        var type;

        $treeitem.trigger('fetchCheckboxes');
        type = $treeitem.data('type');
        if (__indexOf.call(linkedResourceTypes, type) >= 0) {
          return this.triggerLinkedResourcesCheckboxes(type);
        }
      };

      ExpandCollapseContentSelectTreeItems.prototype.triggerLinkedResourcesCheckboxes = function(excludedType) {
        var types,
          _this = this;

        types = _.without(linkedResourceTypes, excludedType);
        return _.each(types, function(type) {
          return _this.$tree.find("[data-type=" + type + "]").trigger('fetchCheckboxes', {
            silent: true
          });
        });
      };

      return ExpandCollapseContentSelectTreeItems;

    })();
  });

}).call(this);
