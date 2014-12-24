(function() {
  define(['./jsonapi_adapter'], function(JSONAPIAdapter) {
    return JSONAPIAdapter.extend({
      namespace: "api/v1"
    });
  });

}).call(this);
