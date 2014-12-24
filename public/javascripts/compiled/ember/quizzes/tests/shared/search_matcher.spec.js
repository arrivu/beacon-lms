(function() {
  define(['../../shared/search_matcher'], function(searchMatcher) {
    module('search_matcher', {
      setup: function() {
        return this.target = "One two three four";
      }
    });
    test('ignores case by default', function() {
      return equal(searchMatcher(this.target, 'one'), true);
    });
    test('considers case when asked to', function() {
      return equal(searchMatcher(this.target, 'one', false), false);
    });
    test('finds multiples', function() {
      return equal(searchMatcher(this.target, 'one three'), true);
    });
    return test('finds multiples out of order', function() {
      return equal(searchMatcher(this.target, 'four three'), true);
    });
  });

}).call(this);
