(function() {
  define(['ember', '../lib/store', 'ic-ajax'], function(Ember, store, ajax) {
    var Module, computed;

    computed = Ember.computed;
    Module = Ember.Object.extend({
      serialize: function() {
        return this.getProperties(['name', 'unlock_at', 'position', 'require_sequential_progress', 'prerequisite_module_ids', 'publish_final_grade']);
      },
      url: (function() {
        var base, id;

        id = this.get('id');
        base = this.constructor.baseUrl;
        if (id) {
          return "" + base + "/" + id;
        } else {
          return base;
        }
      }).property('id'),
      save: function() {
        var _this = this;

        this.set('isSaving', true);
        return ajax.raw({
          data: {
            module: this.serialize()
          },
          type: this.get('id') ? 'put' : 'post',
          url: this.get('url')
        }).then((function(_arg) {
          var response;

          response = _arg.response;
          _this.setProperties(response);
          return _this.set('isSaving', false);
        }), (function() {
          _this.set('isSaving', false);
          return _this.set('saveError', true);
        }));
      },
      destroy: function() {
        var _this = this;

        this.set('isDestroying', true);
        return ajax.raw({
          type: 'delete',
          url: this.get('url')
        }).then((function(_arg) {
          var response;

          response = _arg.response;
          return _this.set('isDestroying', false);
        }), (function() {
          _this.set('isDestroying', false);
          return _this.set('destroyError', true);
        }));
      },
      locked: computed.bool('unlock_at'),
      itemsWithContentUrl: (function() {
        return "" + (this.get('items_url')) + "?include[]=content_details";
      }).property('items_url')
    });
    Module.reopenClass({
      baseUrl: "/api/v1/courses/" + ENV.course_id + "/modules",
      createRecord: function(props) {
        var module;

        if (props.items) {
          this.createItems(props);
        }
        module = this.create(props);
        if (!props.id) {
          module.save();
        }
        return store.push('module', module);
      },
      createItems: function(props) {
        var Item, item;

        Item = store.lookup('item');
        return props.items = (function() {
          var _i, _len, _ref, _results;

          _ref = props.items;
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            item = _ref[_i];
            _results.push(Item.createRecord(item));
          }
          return _results;
        })();
      }
    });
    return store.register('module', Module);
  });

}).call(this);
