(function() {
  define(['jquery', 'ember', '../lib/store', 'ic-ajax'], function($, Ember, store, _arg) {
    var Item, alias, bool, computed, get, request;

    request = _arg.request;
    get = Ember.get, computed = Ember.computed;
    alias = computed.alias, bool = computed.bool;
    Item = Ember.Object.extend({
      error: false,
      hasError: bool('error'),
      module: (function() {
        return store.find('module', this.get('module_id'));
      }).property('module_id'),
      pointsPossible: alias('content_details.points_possible'),
      due: alias('content_details.due_at'),
      serialize: function() {
        return this.getProperties(['completion_requirement', 'content_id', 'external_url', 'indent', 'module_id', 'new_tab', 'page_url', 'position', 'title', 'type']);
      },
      save: function() {
        var _this = this;

        this.set('isSaving', true);
        return request({
          data: {
            module_item: this.serialize()
          },
          type: this.get('id') ? 'put' : 'post',
          url: this.get('apiUrl')
        }).then((function(response) {
          _this.setProperties(response);
          return _this.set('isSaving', false);
        }), (function() {
          _this.set('isSaving', false);
          return _this.set('error', true);
        }));
      },
      apiUrl: (function() {
        var base, id;

        id = this.get('id');
        base = "/api/v1/courses/" + ENV.course_id + "/modules/" + (this.get('module_id')) + "/items";
        if (id) {
          return "" + base + "/" + id;
        } else {
          return base;
        }
      }).property('id')
    });
    Item.reopenClass({
      createRecord: function(props) {
        return store.push('item', this.create(props));
      }
    });
    return store.register('item', Item);
  });

}).call(this);
