(function() {
  define(function() {
    var walk;

    return walk = function(arr, prop, iterator) {
      var item, result, _i, _len;

      for (_i = 0, _len = arr.length; _i < _len; _i++) {
        item = arr[_i];
        result = iterator(item, arr);
        if (result != null ? result.stop : void 0) {
          return true;
        }
        if (item[prop] != null ? walk(item[prop], prop, iterator) : void 0) {
          return true;
        }
      }
    };
  });

}).call(this);
