(function() {
  define(function() {
    var friendlyBytes;

    return friendlyBytes = function(value) {
      var bytes, resInt, resValue, units;

      bytes = parseInt(value, 10);
      if (bytes.toString() === 'NaN') {
        return '--';
      }
      units = ['byte', 'bytes', 'KB', 'MB', 'GB'];
      if (bytes === 0) {
        resInt = resValue = 0;
      } else {
        resInt = Math.floor(Math.log(bytes) / Math.log(1000));
        resValue = (bytes / Math.pow(1000, Math.floor(resInt))).toFixed(resInt < 2 ? 0 : 1);
        if (bytes === 1) {
          resInt = -1;
        }
      }
      return resValue + ' ' + units[resInt + 1];
    };
  });

}).call(this);
