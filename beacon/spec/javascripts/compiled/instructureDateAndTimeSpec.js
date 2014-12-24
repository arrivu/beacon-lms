(function() {
  define(['jquery', 'timezone', 'vendor/timezone/America/Detroit', 'vendor/timezone/America/Juneau', 'vendor/timezone/pt_PT', 'i18nObj', 'jquery.instructure_date_and_time'], function($, tz, detroit, juneau, portuguese, I18n) {
    module('fudgeDateForProfileTimezone', {
      setup: function() {
        var expectedTimestamp;

        this.snapshot = tz.snapshot();
        return this.original = new Date(expectedTimestamp = Date.UTC(2013, 8, 1));
      },
      teardown: function() {
        return tz.restore(this.snapshot);
      }
    });
    test('should produce a date that formats via toString same as the original formats via tz', function() {
      var fudged;

      fudged = $.fudgeDateForProfileTimezone(this.original);
      return equal(fudged.toString('yyyy-MM-dd HH:mm:ss'), tz.format(this.original, '%F %T'));
    });
    test('should work on non-date date-like values', function() {
      var fudged;

      fudged = $.fudgeDateForProfileTimezone(+this.original);
      equal(fudged.toString('yyyy-MM-dd HH:mm:ss'), tz.format(this.original, '%F %T'));
      fudged = $.fudgeDateForProfileTimezone(this.original.toISOString());
      return equal(fudged.toString('yyyy-MM-dd HH:mm:ss'), tz.format(this.original, '%F %T'));
    });
    test('should return null for invalid values', function() {
      equal($.fudgeDateForProfileTimezone(null), null);
      equal($.fudgeDateForProfileTimezone(''), null);
      return equal($.fudgeDateForProfileTimezone('bogus'), null);
    });
    test('should not return treat 0 as invalid', function() {
      return equal(+$.fudgeDateForProfileTimezone(0), +$.fudgeDateForProfileTimezone(new Date(0)));
    });
    test('should be sensitive to profile time zone', function() {
      var fudged;

      tz.changeZone(detroit, 'America/Detroit');
      fudged = $.fudgeDateForProfileTimezone(this.original);
      equal(fudged.toString('yyyy-MM-dd HH:mm:ss'), tz.format(this.original, '%F %T'));
      tz.changeZone(juneau, 'America/Juneau');
      fudged = $.fudgeDateForProfileTimezone(this.original);
      return equal(fudged.toString('yyyy-MM-dd HH:mm:ss'), tz.format(this.original, '%F %T'));
    });
    module('unfudgeDateForProfileTimezone', {
      setup: function() {
        var expectedTimestamp;

        this.snapshot = tz.snapshot();
        return this.original = new Date(expectedTimestamp = Date.UTC(2013, 8, 1));
      },
      teardown: function() {
        return tz.restore(this.snapshot);
      }
    });
    test('should produce a date that formats via tz same as the original formats via toString()', function() {
      var unfudged;

      unfudged = $.unfudgeDateForProfileTimezone(this.original);
      return equal(tz.format(unfudged, '%F %T'), this.original.toString('yyyy-MM-dd HH:mm:ss'));
    });
    test('should work on non-date date-like values', function() {
      var unfudged;

      unfudged = $.unfudgeDateForProfileTimezone(+this.original);
      equal(tz.format(unfudged, '%F %T'), this.original.toString('yyyy-MM-dd HH:mm:ss'));
      unfudged = $.unfudgeDateForProfileTimezone(this.original.toISOString());
      return equal(tz.format(unfudged, '%F %T'), this.original.toString('yyyy-MM-dd HH:mm:ss'));
    });
    test('should return null for invalid values', function() {
      equal($.unfudgeDateForProfileTimezone(null), null);
      equal($.unfudgeDateForProfileTimezone(''), null);
      return equal($.unfudgeDateForProfileTimezone('bogus'), null);
    });
    test('should not return treat 0 as invalid', function() {
      return equal(+$.unfudgeDateForProfileTimezone(0), +$.unfudgeDateForProfileTimezone(new Date(0)));
    });
    test('should be sensitive to profile time zone', function() {
      var unfudged;

      tz.changeZone(detroit, 'America/Detroit');
      unfudged = $.unfudgeDateForProfileTimezone(this.original);
      equal(tz.format(unfudged, '%F %T'), this.original.toString('yyyy-MM-dd HH:mm:ss'));
      tz.changeZone(juneau, 'America/Juneau');
      unfudged = $.unfudgeDateForProfileTimezone(this.original);
      return equal(tz.format(unfudged, '%F %T'), this.original.toString('yyyy-MM-dd HH:mm:ss'));
    });
    module('sameYear', {
      setup: function() {
        return this.snapshot = tz.snapshot();
      },
      teardown: function() {
        return tz.restore(this.snapshot);
      }
    });
    test('should return true iff both dates from same year', function() {
      var date1, date2, date3;

      date1 = new Date(0);
      date2 = new Date(+date1 + 86400000);
      date3 = new Date(+date1 - 86400000);
      ok($.sameYear(date1, date2));
      return ok(!$.sameYear(date1, date3));
    });
    test('should compare relative to profile timezone', function() {
      var date1, date2, date3;

      tz.changeZone(detroit, 'America/Detroit');
      date1 = new Date(5 * 3600000);
      date2 = new Date(+date1 + 1000);
      date3 = new Date(+date1 - 1000);
      ok($.sameYear(date1, date2));
      return ok(!$.sameYear(date1, date3));
    });
    module('sameDate', {
      setup: function() {
        return this.snapshot = tz.snapshot();
      },
      teardown: function() {
        return tz.restore(this.snapshot);
      }
    });
    test('should return true iff both times from same day', function() {
      var date1, date2, date3;

      date1 = new Date(86400000);
      date2 = new Date(+date1 + 3600000);
      date3 = new Date(+date1 - 3600000);
      ok($.sameDate(date1, date2));
      return ok(!$.sameDate(date1, date3));
    });
    test('should compare relative to profile timezone', function() {
      var date1, date2, date3;

      tz.changeZone(detroit, 'America/Detroit');
      date1 = new Date(86400000 + 5 * 3600000);
      date2 = new Date(+date1 + 1000);
      date3 = new Date(+date1 - 1000);
      ok($.sameDate(date1, date2));
      return ok(!$.sameDate(date1, date3));
    });
    module('midnight', {
      setup: function() {
        return this.snapshot = tz.snapshot();
      },
      teardown: function() {
        return tz.restore(this.snapshot);
      }
    });
    test('should return true iff the time is midnight', function() {
      var date1, date2;

      date1 = new Date(0);
      date2 = new Date(60000);
      ok($.midnight(date1));
      return ok(!$.midnight(date2));
    });
    test('should check time relative to profile timezone', function() {
      var date1, date2, date3;

      tz.changeZone(detroit, 'America/Detroit');
      date1 = new Date(0);
      date2 = new Date(5 * 3600000);
      date3 = new Date(+date2 + 60000);
      ok(!$.midnight(date1));
      ok($.midnight(date2));
      return ok(!$.midnight(date3));
    });
    module('dateString', {
      setup: function() {
        return this.snapshot = tz.snapshot();
      },
      teardown: function() {
        return tz.restore(this.snapshot);
      }
    });
    test('should format in profile timezone', function() {
      tz.changeZone(detroit, 'America/Detroit');
      return equal($.dateString(new Date(0)), 'Dec 31, 1969');
    });
    module('timeString', {
      setup: function() {
        return this.snapshot = tz.snapshot();
      },
      teardown: function() {
        return tz.restore(this.snapshot);
      }
    });
    test('should format in profile timezone', function() {
      tz.changeZone(detroit, 'America/Detroit');
      return equal($.timeString(new Date(0)), ' 7:00pm');
    });
    module('datetimeString', {
      setup: function() {
        this.snapshot = tz.snapshot();
        this.localeWas = I18n.locale;
        this.translationsWas = I18n.translations;
        return I18n.translations = {
          'pt': {
            'time': {
              'event': "%{date} em %{time}"
            }
          }
        };
      },
      teardown: function() {
        tz.restore(this.snapshot);
        I18n.locale = this.localeWas;
        return I18n.translations = this.translationsWas;
      }
    });
    test('should format in profile timezone', function() {
      tz.changeZone(detroit, 'America/Detroit');
      return equal($.datetimeString(new Date(0)), 'Dec 31, 1969 at  7:00pm');
    });
    test('should translate into the profile locale', function() {
      tz.changeLocale(portuguese, 'pt_PT');
      I18n.locale = 'pt';
      return equal($.datetimeString('1970-01-01 15:00:00Z'), "Jan 1, 1970 em 15:00");
    });
    test('should not localize if second argument is false', function() {
      tz.changeLocale(portuguese, 'pt_PT');
      I18n.locale = 'pt';
      return equal($.datetimeString('1970-01-01 15:00:00Z', {
        localized: false
      }), "Jan 1, 1970 at 3:00pm");
    });
    return test('should still apply profile timezone when second argument is false', function() {
      tz.changeZone(detroit, 'America/Detroit');
      tz.changeLocale(portuguese, 'pt_PT');
      I18n.locale = 'pt';
      return equal($.datetimeString(new Date(0), {
        localized: false
      }), 'Dec 31, 1969 at 7:00pm');
    });
  });

}).call(this);
