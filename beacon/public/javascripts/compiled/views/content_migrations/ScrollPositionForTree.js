(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(['underscore', 'jquery'], function(_, $) {
    var ScrollPositionForTree;

    return ScrollPositionForTree = (function() {
      function ScrollPositionForTree($tree, $container) {
        this.$tree = $tree;
        this.$container = $container;
        this.manageScrollPosition = __bind(this.manageScrollPosition, this);
        this.bindEvents();
      }

      ScrollPositionForTree.prototype.fileScrollOffset = function($treeitem) {
        var containerOffset, topLevelMarginOffset, treeItemsOffset;

        if (!$treeitem.length) {
          return;
        }
        topLevelMarginOffset = this.findTopTreeItemMargins($treeitem, '.top-level-treeitem', 10);
        treeItemsOffset = this.findTreeItemsOffset($treeitem, 32);
        containerOffset = this.$container.height() / 2;
        return topLevelMarginOffset + treeItemsOffset - containerOffset;
      };

      ScrollPositionForTree.prototype.bindEvents = function() {
        return this.$tree.on('keyup', this.manageScrollPosition);
      };

      ScrollPositionForTree.prototype.manageScrollPosition = function() {
        var $treeitem;

        $treeitem = this.$tree.find("#" + (this.$tree.attr('aria-activedescendant')));
        return this.$container.scrollTop(this.fileScrollOffset($treeitem));
      };

      ScrollPositionForTree.prototype.findTopTreeItemMargins = function($treeitem, selector, margin) {
        var $topLevelItem, topLevelIndex;

        $topLevelItem = $treeitem.closest(selector);
        if (!$topLevelItem.length) {
          $topLevelItem = $treeitem;
        }
        topLevelIndex = $topLevelItem.index("" + selector + ":visible");
        return (margin * topLevelIndex) + margin;
      };

      ScrollPositionForTree.prototype.findTreeItemsOffset = function($treeitem, height) {
        var treeItemIndex;

        treeItemIndex = $treeitem.index("[role=treeitem]:visible");
        return height * (treeItemIndex + 1);
      };

      return ScrollPositionForTree;

    })();
  });

}).call(this);
