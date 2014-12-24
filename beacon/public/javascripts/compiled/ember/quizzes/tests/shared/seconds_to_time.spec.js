(function() {
  define(['../../shared/seconds_to_time'], function(secondsToTime) {
    module('seconds_to_time');
    test('pads durations with leading zeros', function() {
      equal(secondsToTime(42), '00:42');
      return equal(secondsToTime(63), '01:03');
    });
    return test('includes hours in output', function() {
      return equal(secondsToTime(3721), '01:02:01');
    });
  });

}).call(this);
