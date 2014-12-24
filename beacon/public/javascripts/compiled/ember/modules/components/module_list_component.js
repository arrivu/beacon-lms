(function() {
  define(['ember', 'ic-lazy-list', '../models/module'], function(Ember, LazyList, Module) {
    var ModuleListComponent;

    return ModuleListComponent = LazyList.IcLazyListComponent.extend({
      href: "/api/v1/courses/" + ENV.course_id + "/modules?include[]=items",
      normalize: function(_arg) {
        var module, response, _i, _len, _results;

        response = _arg.response;
        _results = [];
        for (_i = 0, _len = response.length; _i < _len; _i++) {
          module = response[_i];
          _results.push(Module.createRecord(module));
        }
        return _results;
      }
    });
  });

}).call(this);
