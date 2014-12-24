(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(['underscore', 'jquery'], function(_, $) {
    var CheckingCheckboxesForTree;

    return CheckingCheckboxesForTree = (function() {
      function CheckingCheckboxesForTree($tree, bindEvents) {
        this.$tree = $tree;
        if (bindEvents == null) {
          bindEvents = true;
        }
        this.doneFetchingEvents = __bind(this.doneFetchingEvents, this);
        this.checkboxEvents = __bind(this.checkboxEvents, this);
        if (bindEvents) {
          this.bindEvents();
        }
      }

      CheckingCheckboxesForTree.prototype.bindEvents = function() {
        this.$tree.on("change", "input[type=checkbox]", this.checkboxEvents);
        return this.$tree.on("doneFetchingCheckboxes", this.doneFetchingEvents);
      };

      CheckingCheckboxesForTree.prototype.checkboxEvents = function(event) {
        var $checkbox, state;

        event.preventDefault();
        $checkbox = $(event.currentTarget);
        state = $checkbox.is(':checked');
        this.updateTreeItemCheckedAttribute($checkbox, state);
        this.checkCheckboxes({
          checkboxes: this.findChildrenCheckboxes($checkbox),
          setTo: state,
          triggerChange: true
        });
        this.checkSiblingCheckboxes($checkbox);
        this.syncLinkedResource($checkbox);
        if (this.$tree.find("[aria-selected=true]").length) {
          return this.$tree.focus();
        }
      };

      CheckingCheckboxesForTree.prototype.doneFetchingEvents = function(event, checkbox) {
        var $checkbox;

        event.stopPropagation();
        $checkbox = $(checkbox);
        return this.checkCheckboxes({
          checkboxes: this.findChildrenCheckboxes($checkbox),
          setTo: $checkbox.is(':checked'),
          triggerChange: false
        });
      };

      CheckingCheckboxesForTree.prototype.checkCheckboxes = function(options) {
        var $checkboxes, afterEach, state, triggerChange;

        if (options == null) {
          options = {};
        }
        $checkboxes = options.checkboxes;
        state = options.setTo;
        triggerChange = options.triggerChange;
        afterEach = options.afterEach;
        return $checkboxes.each(function() {
          var $checkbox;

          $checkbox = $(this);
          return _.defer(function() {
            $checkbox.prop({
              indeterminate: false,
              checked: state
            });
            $checkbox.closest('[role=treeitem]').attr("aria-checked", state);
            if (triggerChange) {
              $checkbox.trigger('change');
            }
            if (afterEach) {
              return afterEach();
            }
          });
        });
      };

      CheckingCheckboxesForTree.prototype.updateTreeItemCheckedAttribute = function($checkbox, state) {
        return $checkbox.closest('[role=treeitem]').attr("aria-checked", state);
      };

      CheckingCheckboxesForTree.prototype.findChildrenCheckboxes = function($checkbox) {
        var $childCheckboxes;

        return $childCheckboxes = $checkbox.parents('.treeitem-heading').siblings('[role=group]').find('[role=treeitem] input[type=checkbox]');
      };

      CheckingCheckboxesForTree.prototype.checkSiblingCheckboxes = function($checkbox, indeterminate) {
        var $parentCheckbox;

        if (indeterminate == null) {
          indeterminate = false;
        }
        $parentCheckbox = this.findParentCheckbox($checkbox);
        this.updateTreeItemCheckedAttribute($checkbox, indeterminate ? "mixed" : $checkbox.is(':checked'));
        if (!$parentCheckbox) {
          return;
        }
        if (indeterminate || !this.siblingsAreTheSame($checkbox)) {
          $parentCheckbox.prop({
            indeterminate: true,
            checked: false
          });
          return this.checkSiblingCheckboxes($parentCheckbox, true);
        } else {
          $parentCheckbox.prop({
            indeterminate: false,
            checked: $checkbox.is(':checked')
          });
          return this.checkSiblingCheckboxes($parentCheckbox, false);
        }
      };

      CheckingCheckboxesForTree.prototype.siblingsAreTheSame = function($checkbox) {
        var sameAsChecked;

        sameAsChecked = true;
        $checkbox.closest('[role=treeitem]').siblings().find('input[type=checkbox]').each(function() {
          if ($(this).is(':checked') !== $checkbox.is(':checked')) {
            return sameAsChecked = false;
          }
        });
        return sameAsChecked;
      };

      CheckingCheckboxesForTree.prototype.findParentCheckbox = function($checkbox) {
        var $parentCheckbox;

        $parentCheckbox = $checkbox.parents('[role=treeitem]').eq(1).find('input[type=checkbox]').first();
        if ($parentCheckbox.length === 0) {
          return false;
        } else {
          return $parentCheckbox;
        }
      };

      CheckingCheckboxesForTree.prototype.syncLinkedResource = function($checkbox) {
        var $linkedCheckbox, linkedProperty,
          _this = this;

        linkedProperty = $checkbox.data('linkedResourceProperty');
        if (linkedProperty) {
          $linkedCheckbox = this.$tree.find("[name='" + linkedProperty + "']");
          return this.checkCheckboxes({
            checkboxes: $linkedCheckbox,
            setTo: $checkbox.is(':checked'),
            triggerChange: false,
            afterEach: function() {
              return _this.checkSiblingCheckboxes($linkedCheckbox);
            }
          });
        }
      };

      return CheckingCheckboxesForTree;

    })();
  });

}).call(this);
