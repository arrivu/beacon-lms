(function() {
  define(['ember-data'], function(DS) {
    return DS.ActiveModelSerializer.extend({
      extractSingle: function(store, type, payload, id, requestType) {
        return this._super(store, type, {
          progress: [payload]
        }, id, requestType);
      }
    });
  });

}).call(this);
