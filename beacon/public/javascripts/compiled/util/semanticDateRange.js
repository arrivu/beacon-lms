(function() {
  define(['i18n!dates', 'jquery', 'timezone', 'jquery.instructure_date_and_time'], function(I18n, $, tz) {
    var semanticDateRange;

    return semanticDateRange = function(startISO, endISO) {
      var endAt, startAt;

      if (!startISO) {
        return "<span class=\"date-range date-range-no-date\">\n  " + (I18n.t('no_date', 'No Date')) + "\n</span>";
      }
      startAt = tz.parse(startISO);
      endAt = tz.parse(endISO);
      if (+startAt !== +endAt) {
        if (!$.sameDate(startAt, endAt)) {
          return "<span class=\"date-range\">\n  <time datetime='" + (startAt.toISOString()) + "'>\n    " + ($.datetimeString(startAt)) + "\n  </time> -\n  <time datetime='" + (endAt.toISOString()) + "'>\n    " + ($.datetimeString(endAt)) + "\n  </time>\n</span>";
        } else {
          return "<span class=\"date-range\">\n  <time datetime='" + (startAt.toISOString()) + "'>\n    " + ($.dateString(startAt)) + ", " + ($.timeString(startAt)) + "\n  </time> -\n  <time datetime='" + (endAt.toISOString()) + "'>\n    " + ($.timeString(endAt)) + "\n  </time>\n</span>";
        }
      } else {
        return "<span class=\"date-range\">\n  <time datetime='" + (startAt.toISOString()) + "'>\n    " + ($.datetimeString(startAt)) + "\n  </time>\n</span>";
      }
    };
  });

}).call(this);
