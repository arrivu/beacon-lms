(function() {
  define([], function() {
    var isLocked;

    return isLocked = function(unlockAt, lockAt) {
      var locked, now;

      now = new Date();
      locked = false;
      if (!!lockAt) {
        if (!!unlockAt) {
          locked = unlockAt > now || lockAt < now;
        } else {
          locked = lockAt < now;
        }
      } else {
        if (!!unlockAt) {
          locked = unlockAt > now;
        }
      }
      return locked;
    };
  });

}).call(this);
