(function() {
  var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  define(['underscore', 'jquery'], function(_, $) {
    var MultiselectableMixin;

    return MultiselectableMixin = {
      getInitialState: function() {
        return {
          selectedItems: []
        };
      },
      componentDidMount: function() {
        return $(window).on('keydown', this.handleCtrlPlusA);
      },
      componentWillUnmount: function() {
        return $(window).off('keydown', this.handleCtrlPlusA);
      },
      multiselectIgnoredElements: ':input:not(.multiselectable-toggler), a',
      handleCtrlPlusA: function(e) {
        var _ref;

        if ((_ref = e.target.nodeName.toLowerCase()) === 'input' || _ref === 'textarea') {
          return;
        }
        if (e.which === 65 && (e.ctrlKey || e.metaKey)) {
          e.preventDefault();
          return this.toggleAllSelected(!e.shiftKey);
        }
      },
      toggleAllSelected: function(shouldSelect) {
        if (shouldSelect) {
          return this.setState({
            selectedItems: this.selectables()
          });
        } else {
          return this.setState({
            selectedItems: []
          });
        }
      },
      areAllItemsSelected: function() {
        return this.state.selectedItems.length && (this.state.selectedItems.length === this.selectables().length);
      },
      selectRange: function(item) {
        var lastPos, newPos, range, selectables;

        selectables = this.selectables();
        newPos = selectables.indexOf(item);
        lastPos = selectables.indexOf(_.last(this.state.selectedItems));
        range = selectables.slice(Math.min(newPos, lastPos), Math.max(newPos, lastPos) + 1);
        if (newPos > lastPos) {
          range.reverse();
        }
        return this.setState({
          selectedItems: range
        });
      },
      clearSelectedItems: function() {
        return this.setState({
          selectedItems: []
        });
      },
      toggleItemSelected: function(item, event) {
        var itemIsSelected, leaveOthersAlone, selectedItems;

        if (event && $(event.target).closest(this.multiselectIgnoredElements).length) {
          return;
        }
        if (event != null) {
          event.preventDefault();
        }
        if (event != null ? event.shiftKey : void 0) {
          return this.selectRange(item);
        }
        itemIsSelected = __indexOf.call(this.state.selectedItems, item) >= 0;
        leaveOthersAlone = ((event != null ? event.metaKey : void 0) || (event != null ? event.ctrlKey : void 0)) || (event != null ? event.target.type : void 0) === 'checkbox';
        if (leaveOthersAlone && itemIsSelected) {
          selectedItems = _.without(this.state.selectedItems, item);
        } else if (leaveOthersAlone) {
          selectedItems = this.state.selectedItems.slice();
          selectedItems.push(item);
        } else if (itemIsSelected) {
          selectedItems = [];
        } else {
          selectedItems = [item];
        }
        return this.setState({
          selectedItems: selectedItems
        });
      }
    };
  });

}).call(this);
