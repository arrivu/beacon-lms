(function() {
  define(['compiled/handlebars_helpers', 'jquery', 'underscore', 'helpers/fakeENV', 'timezone', 'vendor/timezone/America/Detroit', 'vendor/timezone/America/Chicago', 'vendor/timezone/America/New_York'], function(_arg, $, _, fakeENV, tz, detroit, chicago, newYork) {
    var context, helpers, testCheckbox;

    helpers = _arg.helpers;
    module('handlebars_helpers');
    module('checkbox');
    context = {
      likes: {
        tacos: true
      },
      human: true,
      alien: false
    };
    testCheckbox = function(context, prop, hash) {
      var $input, checks, key, val, _results;

      if (hash == null) {
        hash = {};
      }
      $input = $("<span>" + (helpers.checkbox.call(context, prop, {
        hash: hash
      }).string) + "</span>").find('input').eq(1);
      checks = _.defaults(hash, {
        value: 1,
        tagName: 'INPUT',
        type: 'checkbox',
        name: prop,
        checked: context[prop],
        id: prop
      });
      _results = [];
      for (key in checks) {
        val = checks[key];
        _results.push(equal($input.prop(key), val));
      }
      return _results;
    };
    test('simple case', function() {
      return testCheckbox(context, 'human');
    });
    test('custom hash attributes', function() {
      var hash;

      hash = {
        "class": 'foo bar baz',
        id: 'custom_id'
      };
      return testCheckbox(context, 'human', hash, hash);
    });
    test('nested property', function() {
      return testCheckbox(context, 'likes.tacos', {
        id: 'likes_tacos',
        name: 'likes[tacos]',
        checked: context.likes.tacos
      });
    });
    test('checkboxes - hidden input values', function() {
      var hiddenInput;

      hiddenInput = function(_arg1) {
        var disabled, div, inputs;

        disabled = _arg1.disabled;
        inputs = helpers.checkbox.call(context, "blah", {
          hash: {
            disabled: disabled
          }
        });
        div = $("<div>" + inputs + "</div>");
        return div.find("[type=hidden]");
      };
      ok(!hiddenInput({
        disabled: false
      }).prop("disabled"));
      return ok(hiddenInput({
        disabled: true
      }).prop("disabled"));
    });
    test('titleize', function() {
      equal(helpers.titleize('test_string'), 'Test String');
      equal(helpers.titleize(null), '');
      return equal(helpers.titleize('test_ _string'), 'Test String');
    });
    test('toPrecision', function() {
      return equal(helpers.toPrecision(3.6666666, 2), '3.7');
    });
    module('truncate');
    test('default truncates 30 characters', function() {
      var text, truncText;

      text = "asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf";
      truncText = helpers.truncate(text);
      return equal(truncText.length, 30, "Truncates down to 30 letters");
    });
    test('expects options for max (length)', function() {
      var text, truncText;

      text = "asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf";
      truncText = helpers.truncate(text, 10);
      return equal(truncText.length, 10, "Truncates down to 10 letters");
    });
    test('supports truncation left', function() {
      var text, truncText;

      text = "going to the store";
      truncText = helpers.truncate_left(text, 15);
      return equal(truncText, "...to the store", "Reverse truncates");
    });
    module('friendlyDatetime', {
      setup: function() {
        this.snapshot = tz.snapshot();
        return tz.changeZone(detroit, 'America/Detroit');
      },
      teardown: function() {
        return tz.restore(this.snapshot);
      }
    });
    test('can take an ISO string', function() {
      return equal(helpers.friendlyDatetime('1970-01-01 00:00:00Z', {
        hash: {
          pubDate: false
        }
      }).string, "<time data-tooltip title='Dec 31, 1969 at  7:00pm' datetime='1970-01-01T00:00:00.000Z' undefined>Dec 31, 1969</time>");
    });
    test('can take a date object', function() {
      return equal(helpers.friendlyDatetime(new Date(0), {
        hash: {
          pubDate: false
        }
      }).string, "<time data-tooltip title='Dec 31, 1969 at  7:00pm' datetime='1970-01-01T00:00:00.000Z' undefined>Dec 31, 1969</time>");
    });
    test('should parse non-qualified string relative to profile timezone', function() {
      return equal(helpers.friendlyDatetime('1970-01-01 00:00:00', {
        hash: {
          pubDate: false
        }
      }).string, "<time data-tooltip title='Jan 1, 1970 at 12:00am' datetime='1970-01-01T05:00:00.000Z' undefined>Jan 1, 1970</time>");
    });
    module('contextSensitive FriendlyDatetime', {
      setup: function() {
        this.snapshot = tz.snapshot();
        fakeENV.setup();
        ENV.CONTEXT_TIMEZONE = "America/Chicago";
        tz.changeZone(detroit, 'America/Detroit');
        return tz.preload("America/Chicago", chicago);
      },
      teardown: function() {
        fakeENV.teardown();
        return tz.restore(this.snapshot);
      }
    });
    test('displays both zones data from an ISO string', function() {
      var timeTag;

      timeTag = helpers.friendlyDatetime('1970-01-01 00:00:00Z', {
        hash: {
          pubDate: false,
          contextSensitive: true
        }
      }).string;
      ok(timeTag.indexOf("Local: Dec 31, 1969 at  7:00pm") > -1);
      return ok(timeTag.indexOf("Course: Dec 31, 1969 at  6:00pm") > -1);
    });
    test('displays both zones data from a date object', function() {
      var timeTag;

      timeTag = helpers.friendlyDatetime(new Date(0), {
        hash: {
          pubDate: false,
          contextSensitive: true
        }
      }).string;
      ok(timeTag.indexOf("Local: Dec 31, 1969 at  7:00pm") > -1);
      return ok(timeTag.indexOf("Course: Dec 31, 1969 at  6:00pm") > -1);
    });
    test('should parse non-qualified string relative to both timezones', function() {
      var timeTag;

      timeTag = helpers.friendlyDatetime('1970-01-01 00:00:00', {
        hash: {
          pubDate: false,
          contextSensitive: true
        }
      }).string;
      ok(timeTag.indexOf("Local: Jan 1, 1970 at 12:00am") > -1);
      return ok(timeTag.indexOf("Course: Dec 31, 1969 at 11:00pm") > -1);
    });
    test('reverts to friendly display when there is no contextual timezone', function() {
      var timeTag;

      ENV.CONTEXT_TIMEZONE = null;
      timeTag = helpers.friendlyDatetime('1970-01-01 00:00:00Z', {
        hash: {
          pubDate: false,
          contextSensitive: true
        }
      }).string;
      return equal(timeTag, "<time data-tooltip title='Dec 31, 1969 at  7:00pm' datetime='1970-01-01T00:00:00.000Z' undefined>Dec 31, 1969</time>");
    });
    module('contextSensitiveDatetimeTitle', {
      setup: function() {
        this.snapshot = tz.snapshot();
        fakeENV.setup();
        ENV.CONTEXT_TIMEZONE = "America/Chicago";
        tz.changeZone(detroit, 'America/Detroit');
        tz.preload("America/Chicago", chicago);
        return tz.preload("America/New_York", newYork);
      },
      teardown: function() {
        fakeENV.teardown();
        return tz.restore(this.snapshot);
      }
    });
    test('just passes through to datetime string if there is no contextual timezone', function() {
      var titleText;

      ENV.CONTEXT_TIMEZONE = null;
      titleText = helpers.contextSensitiveDatetimeTitle('1970-01-01 00:00:00Z', {
        hash: {
          justText: true
        }
      });
      return equal(titleText, "Dec 31, 1969 at  7:00pm");
    });
    test('splits title text to both zones', function() {
      var titleText;

      titleText = helpers.contextSensitiveDatetimeTitle('1970-01-01 00:00:00Z', {
        hash: {
          justText: true
        }
      });
      return equal(titleText, "Local: Dec 31, 1969 at  7:00pm<br>Course: Dec 31, 1969 at  6:00pm");
    });
    test("properly spans day boundaries", function() {
      var titleText;

      ENV.TIMEZONE = 'America/Chicago';
      tz.changeZone(chicago, 'America/Chicago');
      ENV.CONTEXT_TIMEZONE = 'America/New_York';
      titleText = helpers.contextSensitiveDatetimeTitle('1970-01-01 05:30:00Z', {
        hash: {
          justText: true
        }
      });
      return equal(titleText, "Local: Dec 31, 1969 at 11:30pm<br>Course: Jan 1, 1970 at 12:30am");
    });
    test('stays as one title when the timezone is no different', function() {
      var titleText;

      ENV.TIMEZONE = 'America/Detroit';
      ENV.CONTEXT_TIMEZONE = 'America/Detroit';
      titleText = helpers.contextSensitiveDatetimeTitle('1970-01-01 00:00:00Z', {
        hash: {
          justText: true
        }
      });
      return equal(titleText, "Dec 31, 1969 at  7:00pm");
    });
    test('stays as one title when the time is no different even if timezone names differ', function() {
      var titleText;

      ENV.TIMEZONE = 'America/Detroit';
      ENV.CONTEXT_TIMEZONE = 'America/New_York';
      titleText = helpers.contextSensitiveDatetimeTitle('1970-01-01 00:00:00Z', {
        hash: {
          justText: true
        }
      });
      return equal(titleText, "Dec 31, 1969 at  7:00pm");
    });
    test("produces the html attributes if you dont specify just_text", function() {
      var titleText;

      ENV.CONTEXT_TIMEZONE = null;
      titleText = helpers.contextSensitiveDatetimeTitle('1970-01-01 00:00:00Z', {
        hash: {
          justText: void 0
        }
      });
      return equal(titleText, "data-tooltip title=\"Dec 31, 1969 at  7:00pm\"");
    });
    module('datetimeFormatted', {
      setup: function() {
        return this.snapshot = tz.snapshot();
      },
      teardown: function() {
        return tz.restore(this.snapshot);
      }
    });
    test('should parse and format relative to profile timezone', function() {
      tz.changeZone(detroit, 'America/Detroit');
      return equal(helpers.datetimeFormatted('1970-01-01 00:00:00', {
        hash: {
          pubDate: false
        }
      }), "Jan 1, 1970 at 12:00am");
    });
    return module('ifSettingIs', test('it runs primary case if setting matches', function() {
      var funcs, semaphore;

      ENV.SETTINGS = {
        key: 'value'
      };
      semaphore = false;
      funcs = {
        fn: (function() {
          return semaphore = true;
        }),
        inverse: (function() {
          throw new Error("Dont call this!");
        })
      };
      helpers.ifSettingIs('key', 'value', funcs);
      return equal(semaphore, true);
    }), test('it runs inverse case if setting does not match', function() {
      var funcs, semaphore;

      ENV.SETTINGS = {
        key: 'NOTvalue'
      };
      semaphore = false;
      funcs = {
        inverse: (function() {
          return semaphore = true;
        }),
        fn: (function() {
          throw new Error("Dont call this!");
        })
      };
      helpers.ifSettingIs('key', 'value', funcs);
      return equal(semaphore, true);
    }), test('it runs inverse case if setting does not exist', function() {
      var funcs, semaphore;

      ENV.SETTINGS = {};
      semaphore = false;
      funcs = {
        inverse: (function() {
          return semaphore = true;
        }),
        fn: (function() {
          throw new Error("Dont call this!");
        })
      };
      helpers.ifSettingIs('key', 'value', funcs);
      return equal(semaphore, true);
    }));
  });

}).call(this);
