(function() {
  define([], function() {
    var floor, pad;

    floor = Math.floor;
    pad = function(duration) {
      return ('00' + duration).slice(-2);
    };
    return function(seconds) {
      var hh, mm, ss;

      if (seconds > 3600) {
        hh = floor(seconds / 3600);
        mm = floor((seconds - hh * 3600) / 60);
        ss = seconds % 60;
        return "" + (pad(hh)) + ":" + (pad(mm)) + ":" + (pad(ss));
      } else {
        return "" + (pad(floor(seconds / 60))) + ":" + (pad(floor(seconds % 60)));
      }
    };
  });

}).call(this);
