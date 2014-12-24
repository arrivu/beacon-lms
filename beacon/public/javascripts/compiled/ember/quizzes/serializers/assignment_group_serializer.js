(function() {
  define(['ember-data'], function(DS) {
    return DS.ActiveModelSerializer.extend({
      extractSingle: function(store, type, payload) {
        return this._super(store, type, {
          assignment_group: payload
        });
      }
    });
  });

}).call(this);
