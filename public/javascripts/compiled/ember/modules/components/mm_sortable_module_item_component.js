(function() {
  define(['ember', 'ic-sortable', 'jquery', 'ic-droppable', '../lib/accepts_drop_mixin'], function(Ember, Sortable, $, Droppable, AcceptsDrop) {
    var MmSortableModuleItemComponent;

    Droppable = Droppable["default"];
    return MmSortableModuleItemComponent = Ember.Component.extend(Sortable["default"], AcceptsDrop, {
      accepts: ['text/ic-module-item'],
      draggable: 'false',
      tagName: 'div',
      classNames: ['context_module_item'],
      setEventData: function(event) {
        this.makeGhost(event);
        return event.dataTransfer.setData('text/ic-module-item', this.get('item.id'));
      },
      makeGhost: function(event) {
        var rect, x, y;

        rect = this.get('element').getBoundingClientRect();
        x = event.originalEvent.clientX - rect.left;
        y = event.originalEvent.clientY - rect.top;
        return event.dataTransfer.setDragImage(this.get('element'), x, y);
      },
      'accept:text/ic-module-item': function(event, data) {
        var droppedItem, droppedItemMovedModules, index;

        droppedItem = store.find('item', data);
        droppedItemMovedModules = this.get('item.module_id') !== droppedItem.module_id;
        if (droppedItemMovedModules) {
          index = this.get('item.module.items').indexOf(this.get('item'));
          if (this.get('droppedPosition') === 'after') {
            index = index + 1;
          }
          return this.sendAction('on-receive-item-from-other-module', droppedItem, this.get('item.module_id'), index);
        } else {
          return this.sendAction('on-reorder-item', droppedItem, this.get('item'), this.get('droppedPosition'));
        }
      }
    });
  });

}).call(this);
