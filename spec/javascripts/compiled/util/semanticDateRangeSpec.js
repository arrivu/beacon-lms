(function() {
  define(['compiled/util/semanticDateRange'], function(semanticDateRange) {
    module('semanticDateRange');
    test('different day', function() {
      var date1, date2;

      date1 = new Date(0);
      date2 = new Date(+date1 + 86400000);
      return equal(semanticDateRange(date1, date2), "<span class=\"date-range\">\n  <time datetime='1970-01-01T00:00:00.000Z'>\n    Jan 1, 1970 at 12:00am\n  </time> -\n  <time datetime='1970-01-02T00:00:00.000Z'>\n    Jan 2, 1970 at 12:00am\n  </time>\n</span>");
    });
    test('same day, different time', function() {
      var date1, date2;

      date1 = new Date(0);
      date2 = new Date(+date1 + 3600000);
      return equal(semanticDateRange(date1, date2), "<span class=\"date-range\">\n  <time datetime='1970-01-01T00:00:00.000Z'>\n    Jan 1, 1970, 12:00am\n  </time> -\n  <time datetime='1970-01-01T01:00:00.000Z'>\n     1:00am\n  </time>\n</span>");
    });
    test('same day, same time', function() {
      var date;

      date = new Date(0);
      return equal(semanticDateRange(date, date), "<span class=\"date-range\">\n  <time datetime='1970-01-01T00:00:00.000Z'>\n    Jan 1, 1970 at 12:00am\n  </time>\n</span>");
    });
    test('no date', function() {
      return equal(semanticDateRange(null, null), "<span class=\"date-range date-range-no-date\">\n  No Date\n</span>");
    });
    return test('can take ISO strings', function() {
      var date;

      date = (new Date(0)).toISOString();
      return equal(semanticDateRange(date, date), "<span class=\"date-range\">\n  <time datetime='1970-01-01T00:00:00.000Z'>\n    Jan 1, 1970 at 12:00am\n  </time>\n</span>");
    });
  });

}).call(this);
