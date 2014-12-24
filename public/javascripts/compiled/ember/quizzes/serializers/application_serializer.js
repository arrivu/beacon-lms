(function() {
  define(['ember-data'], function(DS) {
    var ApplicationSerializer;

    return ApplicationSerializer = DS.ActiveModelSerializer.extend({
      extractSingle: function(store, type, payload, id, requestType) {
        var obj;

        obj = {};
        obj[type.typeKey.pluralize()] = payload;
        return this._super(store, type, obj, id, requestType);
      }
    });
  });

}).call(this);
