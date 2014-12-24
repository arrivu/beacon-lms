(function() {
  define([], function() {
    return function(target, key, ignoreCase) {
      var keys, numMatches, sl, _i, _len;

      if (ignoreCase == null) {
        ignoreCase = true;
      }
      if (!target) {
        return true;
      }
      if (!!ignoreCase) {
        target = target.toLowerCase();
        key = key.toLowerCase();
      }
      numMatches = 0;
      keys = key.split(' ');
      for (_i = 0, _len = keys.length; _i < _len; _i++) {
        sl = keys[_i];
        if (target.indexOf(sl) !== -1) {
          numMatches++;
        }
      }
      return numMatches === keys.length;
    };
  });

}).call(this);
