(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(['underscore', 'jquery'], function(_, $) {
    var NavigationForTree;

    return NavigationForTree = (function() {
      var keyPressOptions;

      function NavigationForTree($tree) {
        this.$tree = $tree;
        this.clickHeaderEvent = __bind(this.clickHeaderEvent, this);
        this.setInitialSelectedState();
        this.bindKeyboardEvents();
      }

      NavigationForTree.prototype.up = function() {
        var $upNode;

        $upNode = this.findTreeItem(this.$currentSelected, "up");
        return this.selectTreeItem($upNode);
      };

      NavigationForTree.prototype.down = function() {
        var $downNode;

        $downNode = this.findTreeItem(this.$currentSelected, "down");
        return this.selectTreeItem($downNode);
      };

      NavigationForTree.prototype.left = function() {
        var $backNode;

        if (this.$currentSelected.attr('aria-expanded') === "true") {
          return this.$currentSelected.trigger('collapse');
        } else {
          $backNode = this.$currentSelected.closest('[aria-expanded=true]');
          return this.selectTreeItem($backNode);
        }
      };

      NavigationForTree.prototype.right = function() {
        var $downNode;

        if (this.$currentSelected.attr('aria-expanded') === "true") {
          $downNode = this.findTreeItem(this.$currentSelected, "down");
          return this.selectTreeItem($downNode);
        } else if (this.$currentSelected.attr('aria-expanded') === "false") {
          return this.$currentSelected.trigger('expand');
        }
      };

      NavigationForTree.prototype.spacebar = function() {
        return this.$currentSelected.find('input[type=checkbox]').first().click();
      };

      NavigationForTree.prototype.home = function() {
        var $firstItem, $treeItems;

        $treeItems = this.$tree.find('[role="treeitem"]:visible');
        $firstItem = $treeItems.first();
        return this.selectTreeItem($firstItem);
      };

      NavigationForTree.prototype.end = function() {
        var $lastItem, $treeItems;

        $treeItems = this.$tree.find('[role="treeitem"]:visible');
        $lastItem = $treeItems.last();
        return this.selectTreeItem($lastItem);
      };

      NavigationForTree.prototype.clickHeaderEvent = function(event) {
        var treeitemHeading;

        event.stopPropagation();
        treeitemHeading = $(event.currentTarget);
        return this.selectTreeItem(treeitemHeading.closest('[role=treeitem]'));
      };

      keyPressOptions = {
        38: 'up',
        75: 'up',
        40: 'down',
        74: 'down',
        37: 'left',
        72: 'left',
        39: 'right',
        76: 'right',
        32: 'spacebar',
        35: 'end',
        36: 'home'
      };

      NavigationForTree.prototype.setInitialSelectedState = function() {
        var $treeItems;

        $treeItems = this.$tree.find('[role=treeitem]');
        $treeItems.each(function() {
          return $(this).attr('aria-selected', false);
        });
        return this.$tree.on('click', 'li .treeitem-heading', this.clickHeaderEvent);
      };

      NavigationForTree.prototype.bindKeyboardEvents = function() {
        var _this = this;

        return this.$tree.on('keyup', function(event) {
          var _name;

          _this.$currentSelected = _this.$tree.find('[aria-selected="true"]');
          return typeof _this[_name = keyPressOptions[event.which]] === "function" ? _this[_name]() : void 0;
        });
      };

      NavigationForTree.prototype.selectTreeItem = function($treeItem) {
        if ($treeItem.length) {
          this.$tree.attr('aria-activedescendant', $treeItem.attr('id'));
          this.$tree.find('[aria-selected="true"]').attr('aria-selected', 'false');
          return $treeItem.attr('aria-selected', 'true');
        }
      };

      NavigationForTree.prototype.findTreeItem = function($currentSelected, direction) {
        var $treeItems, currentIndex, newIndex, node;

        $treeItems = this.$tree.find('[role="treeitem"]:visible');
        currentIndex = $treeItems.index($currentSelected);
        newIndex = currentIndex;
        if (direction === "up") {
          newIndex--;
        } else {
          newIndex++;
        }
        node = newIndex >= 0 ? $treeItems.get(newIndex) : $treeItems.get(currentIndex);
        return $(node);
      };

      return NavigationForTree;

    })();
  });

}).call(this);
