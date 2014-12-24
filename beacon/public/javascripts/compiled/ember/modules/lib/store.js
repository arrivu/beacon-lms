(function() {
  define(['ember', 'ic-ajax'], function(Ember, _arg) {
    var get, request, set;

    request = _arg.request;
    get = Ember.get, set = Ember.set;
    return this.store = {
      courseId: ENV.course_id,
      types: {},
      cache: {},
      register: function(type, def) {
        this.types[type] = def;
        this.cache[type] = {};
        return def;
      },
      lookup: function(type) {
        return this.types[type];
      },
      push: function(type, model) {
        return this.cache[type][get(model, 'id')] = model;
      },
      find: function(type, id) {
        return this.cache[type][id];
      },
      moveItem: function(item, newModuleId, index) {
        var oldModule, targetModule;

        targetModule = this.find('module', newModuleId);
        oldModule = this.find('module', item.module_id);
        get(oldModule, 'items').removeObject(item);
        set(item, 'module_id', newModuleId);
        return get(targetModule, 'items').insertAt(index, item);
      },
      syncModuleItemsOrder: function(id) {
        var ids, items, module;

        module = this.find('module', id);
        items = get(module, 'items');
        ids = items.mapBy('id').join(',');
        return request({
          url: "/courses/" + this.courseId + "/modules/" + id + "/reorder",
          data: {
            order: ids
          },
          type: 'post'
        });
      },
      syncItemById: function(id) {
        var item;

        item = this.find('item', id);
        return request({
          url: "/api/v1/courses/" + this.courseId + "/modules/" + item.module_id + "/items/" + id,
          data: {
            module_item: item.serialize()
          },
          type: 'put'
        });
      },
      removeItemById: function(id) {
        var item, module;

        item = this.find('item', id);
        module = this.find('module', get(item, 'module_id'));
        get(module, 'items').removeObject(item);
        return request({
          url: "/api/v1/courses/" + this.courseId + "/modules/" + id + "/items/" + (get(item, 'id')),
          type: 'delete'
        });
      }
    };
  });

}).call(this);
