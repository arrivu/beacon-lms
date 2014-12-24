(function() {
  define(['./application_adapter'], function(ApplicationAdapter) {
    var JSONAPIAdapter;

    return JSONAPIAdapter = ApplicationAdapter.extend({
      _jsonapiSerialize: function(data, store, type, record) {
        var path, typeKey;

        typeKey = type.typeKey;
        path = this.pathForType(typeKey);
        return data[path] = [store.serializerFor(typeKey).serialize(record)];
      },
      updateRecord: function(store, type, record) {
        var data, id, typeKey;

        typeKey = type.typeKey;
        data = {};
        id = record.get('id');
        this._jsonapiSerialize(data, store, type, record);
        return this.ajax(this.buildURL(typeKey, id), 'PUT', {
          data: data
        });
      }
    });
  });

}).call(this);
