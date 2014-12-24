(function() {
  define(['../../shared/is_locked'], function(isLocked) {
    var minutesFromNow;

    minutesFromNow = function(minutes) {
      return new Date(new Date().getTime() + (minutes * 60000));
    };
    module('Unit: is_locked module');
    test('no unlockAt with no lockAt is not locked', function() {
      return equal(isLocked(void 0, void 0), false);
    });
    test('no unlockAt with passed lockAt is locked', function() {
      return equal(isLocked(void 0, minutesFromNow(-1)), true);
    });
    test('no unlockAt with future lockAt is not locked', function() {
      return equal(isLocked(void 0, minutesFromNow(1)), false);
    });
    test('future unlockAt with future lockAt is locked', function() {
      return equal(isLocked(minutesFromNow(1), minutesFromNow(2)), true);
    });
    test('passed unlockAt with future lockAt is not locked', function() {
      return equal(isLocked(minutesFromNow(-1), minutesFromNow(2)), false);
    });
    test('passed unlockAt with passed lockAt is not locked', function() {
      return equal(isLocked(minutesFromNow(-2), minutesFromNow(-1)), true);
    });
    test('future unlockAt with no lockAt is locked', function() {
      return equal(isLocked(minutesFromNow(1), void 0), true);
    });
    return test('passed unlockAt with no lockAt is not locked', function() {
      return equal(isLocked(minutesFromNow(-1), void 0), false);
    });
  });

}).call(this);
