(function() {
  define(['ember'], function(Ember) {
    var ModuleController, cid;

    cid = -1;
    return ModuleController = Ember.ObjectController.extend({
      needs: ['modules'],
      cid: (function() {
        return ++cid;
      }).property(),
      setMakeLazyList: (function() {
        return this.set('makeLazyList', !this.get('items') && this.get('items_count') > 0);
      }).on('init'),
      formId: (function() {
        return "edit-module-" + (this.get('cid'));
      }).property('id'),
      actionsId: (function() {
        return "module-actions-" + (this.get('cid'));
      }).property(),
      actions: {
        reorderItem: function(droppedItem, targetItem, droppedPosition) {
          var index, items;

          items = this.get('items');
          items.removeObject(droppedItem);
          index = items.indexOf(targetItem);
          if (droppedPosition === 'after') {
            index = index + 1;
          }
          items.insertAt(index, droppedItem);
          return store.syncModuleItemsOrder(this.get('id'));
        },
        edit: function(menuItem) {
          this.set('modelBeforeEdits', this.get('model').serialize());
          return Ember.View.views[this.get('formId')].open();
        },
        "delete": function() {
          this.set('isDeleting', true);
          return Ember.run.later(this, function() {
            var model;

            model = this.get('model');
            this.get('controllers.modules.modules').removeObject(model);
            return model.destroy();
          }, 200);
        },
        restoreModel: function() {
          return this.get('model').setProperties(this.get('modelBeforeEdits'));
        },
        saveEdits: function() {
          return this.get('model').save();
        }
      }
    });
  });

}).call(this);
