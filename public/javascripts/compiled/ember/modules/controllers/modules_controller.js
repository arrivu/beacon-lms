(function() {
  define(['ember', '../models/module', 'ic-ajax', '../lib/store'], function(Ember, Module, _arg, store) {
    var ModulesController, request;

    request = _arg.request;
    return ModulesController = Ember.Controller.extend({
      newModule: {
        name: 'Noname'
      },
      modules: [],
      actions: {
        moveItem: function(item, moduleId, index) {
          store.moveItem(item, moduleId, index);
          return store.syncModuleItemsOrder(moduleId);
        },
        syncModulesOrder: function(ids) {
          var data, url;

          url = "/courses/" + ENV.course_id + "/modules/reorder";
          data = {
            order: ids.join(',')
          };
          return request({
            url: url,
            data: data,
            type: 'post'
          }).then(function(modules) {
            var id, item, position, _i, _len, _ref, _results;

            _results = [];
            for (_i = 0, _len = modules.length; _i < _len; _i++) {
              item = modules[_i];
              _ref = item.context_module, position = _ref.position, id = _ref.id;
              _results.push(store.find('module', id).set('position', position));
            }
            return _results;
          });
        },
        createModule: function() {
          var newModule;

          newModule = Module.createRecord(this.get('newModule'));
          newModule.set('isNew', true);
          this.get('modules').addObject(newModule);
          return this.set('newModule', {});
        }
      }
    });
  });

}).call(this);
