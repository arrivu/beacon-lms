(function() {
  define(['ember', 'ic-sortable', 'jquery', 'ic-droppable', '../lib/accepts_drop_mixin', '../lib/store'], function(Ember, Sortable, $, Droppable, AcceptsDrop, store) {
    var MmSortableModuleComponent;

    Droppable = Droppable["default"];
    return MmSortableModuleComponent = Ember.Component.extend(Sortable["default"], AcceptsDrop, {
      accepts: ['text/ic-module', 'text/ic-module-item'],
      classNameBindings: ['locked', 'acceptTypeClassName'],
      classNames: ['item-group-condensed'],
      acceptTypeClassName: (function() {
        var type;

        type = this.get('accept-type');
        if (!type) {
          return;
        }
        return type.replace(/\//, '-');
      }).property('accept-type'),
      locked: (function() {
        return this.get('module.locked');
      }).property('module.locked'),
      draggable: 'false',
      setEventData: function(event) {
        this.makeGhost(event);
        return event.dataTransfer.setData('text/ic-module', this.get('module.id'));
      },
      makeGhost: function(event) {
        var ghost, rect, x;

        rect = this.get('element').getBoundingClientRect();
        x = event.originalEvent.clientX - rect.left;
        ghost = $('<div class="module-ghost"/>');
        ghost.html(this.get('module.name'));
        ghost.appendTo(document.body);
        event.dataTransfer.setDragImage(ghost[0], x, 10);
        return Ember.run.later(ghost, 'remove', 0);
      },
      isSelfDrop: function(event) {
        var thisElement;

        thisElement = this.$();
        return thisElement.has(Droppable._currentDrag).length > 0;
      },
      validateDragEvent: function(event) {
        var types;

        types = event.dataTransfer.types;
        if (types.contains('text/ic-module') && this.isSelfDrop(event)) {
          return false;
        }
        if (types.contains('text/ic-module-item') && this.get('module.items.length') !== 0) {
          return false;
        }
        return this._super(event);
      },
      'accept:text/ic-module': function(event, id) {
        var droppedModule, index, modules;

        modules = this.get('modules');
        droppedModule = modules.findBy('id', parseInt(id, 10));
        modules.removeObject(droppedModule);
        index = modules.indexOf(this.get('module'));
        if (this.get('droppedPosition') === 'after') {
          index = index + 1;
        }
        modules.insertAt(index, droppedModule);
        return this.sendAction('on-reorder', modules.mapBy('id'));
      },
      'accept:text/ic-module-item': function(event, data) {
        var droppedItem, module;

        droppedItem = store.find('item', data);
        module = store.find('module', droppedItem.module_id);
        module.items.removeObject(droppedItem);
        droppedItem.module_id = this.get('module.id');
        this.get('module.items').addObject(droppedItem);
        return store.syncModuleItemsOrder(this.get('module.id'));
      }
    });
  });

}).call(this);
