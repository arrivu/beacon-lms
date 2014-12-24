(function() {
  define(['ember', './jsonapi_adapter'], function(_arg, JSONAPIAdapter) {
    var get, set;

    get = _arg.get, set = _arg.set;
    return JSONAPIAdapter.extend({
      buildURL: function(type, id) {
        var store;

        store = this.container.lookup('store:main');
        return store.getById('quizReport', id).get('url');
      }
    });
  });

}).call(this);
