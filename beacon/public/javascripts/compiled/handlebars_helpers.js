(function() {
  var __slice = [].slice,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  define(['timezone', 'compiled/util/enrollmentName', 'handlebars', 'i18nObj', 'jquery', 'underscore', 'str/htmlEscape', 'compiled/util/semanticDateRange', 'compiled/util/dateSelect', 'compiled/util/mimeClass', 'compiled/str/convertApiUserContent', 'compiled/str/TextHelper', 'jquery.instructure_date_and_time', 'jquery.instructure_misc_helpers', 'jquery.instructure_misc_plugins', 'translations/_core_en'], function(tz, enrollmentName, Handlebars, I18n, $, _, htmlEscape, semanticDateRange, dateSelect, mimeClass, convertApiUserContent, textHelper) {
    var fn, name, _ref;

    _ref = {
      t: function(translationKey, defaultValue, options) {
        var key, scope, value, wrappers, _ref;

        wrappers = {};
        options = (_ref = options != null ? options.hash : void 0) != null ? _ref : {};
        scope = options.scope;
        delete options.scope;
        for (key in options) {
          value = options[key];
          if (!(key.match(/^w\d+$/))) {
            continue;
          }
          wrappers[new Array(parseInt(key.replace('w', '')) + 2).join('*')] = value;
          delete options[key];
        }
        if (wrappers['*']) {
          options.wrapper = wrappers;
        }
        options.needsEscaping = true;
        if (!(this instanceof String || typeof this === 'string')) {
          options = $.extend(options, this);
        }
        return I18n.scoped(scope).t(translationKey, defaultValue, options);
      },
      hiddenIf: function(condition) {
        if (condition) {
          return " display:none; ";
        }
      },
      hiddenUnless: function(condition) {
        if (!condition) {
          return " display:none; ";
        }
      },
      semanticDateRange: function() {
        return new Handlebars.SafeString(semanticDateRange.apply(null, arguments));
      },
      contextSensitiveDatetimeTitle: function(datetime, _arg) {
        var courseDatetime, courseText, justText, localDatetime, localText, titleText;

        justText = _arg.hash.justText;
        localDatetime = $.datetimeString(datetime);
        titleText = localDatetime;
        if (ENV && ENV.CONTEXT_TIMEZONE && (ENV.TIMEZONE !== ENV.CONTEXT_TIMEZONE)) {
          localText = Handlebars.helpers.t('#helpers.local', 'Local');
          courseText = Handlebars.helpers.t('#helpers.course', 'Course');
          courseDatetime = $.datetimeString(datetime, {
            timezone: ENV.CONTEXT_TIMEZONE
          });
          if (localDatetime !== courseDatetime) {
            titleText = "" + localText + ": " + localDatetime + "<br>" + courseText + ": " + courseDatetime;
          }
        }
        if (justText) {
          return new Handlebars.SafeString(titleText);
        } else {
          return new Handlebars.SafeString("data-tooltip title=\"" + titleText + "\"");
        }
      },
      friendlyDatetime: function(datetime, _arg) {
        var contextSensitive, fudged, pubdate, timeTitle, _ref;

        _ref = _arg.hash, pubdate = _ref.pubdate, contextSensitive = _ref.contextSensitive;
        if (datetime == null) {
          return;
        }
        if (!_.isDate(datetime)) {
          datetime = tz.parse(datetime);
        }
        fudged = $.fudgeDateForProfileTimezone(tz.parse(datetime));
        timeTitle = "";
        if (contextSensitive && ENV && ENV.CONTEXT_TIMEZONE) {
          timeTitle = Handlebars.helpers.contextSensitiveDatetimeTitle(datetime, {
            hash: {
              justText: true
            }
          });
        } else {
          timeTitle = $.datetimeString(datetime);
        }
        return new Handlebars.SafeString("<time data-tooltip title='" + timeTitle + "' datetime='" + (datetime.toISOString()) + "' " + (pubdate ? 'pubdate' : void 0) + ">" + ($.friendlyDatetime(fudged)) + "</time>");
      },
      formattedDate: function(datetime, format, _arg) {
        var pubdate;

        pubdate = _arg.hash.pubdate;
        if (datetime == null) {
          return;
        }
        if (!_.isDate(datetime)) {
          datetime = tz.parse(datetime);
        }
        return new Handlebars.SafeString("<time data-tooltip title='" + ($.datetimeString(datetime)) + "' datetime='" + (datetime.toISOString()) + "' " + (pubdate ? 'pubdate' : void 0) + ">" + (datetime.toString(format)) + "</time>");
      },
      datetimeFormatted: function(datetime, localized) {
        if (localized == null) {
          localized = true;
        }
        return $.datetimeString(datetime, {
          localized: localized
        });
      },
      dateString: function(datetime) {
        if (!datetime) {
          return '';
        }
        return tz.format(datetime, '%m/%d/%Y');
      },
      minutesToHM: function(minutes) {
        var hours, real_min_str, real_minutes;

        hours = Math.floor(minutes / 60);
        real_minutes = minutes % 60;
        real_min_str = (real_minutes < 10 ? "0" + real_minutes : real_minutes);
        return "" + hours + ":" + real_min_str;
      },
      addIcon: function(icontype) {
        return new Handlebars.SafeString("<i class='icon-" + (htmlEscape(icontype)) + "'></i>");
      },
      dateToString: function(date, format) {
        if (date == null) {
          date = '';
        }
        return date.toString(format);
      },
      tDateToString: function(date, i18n_format) {
        if (date == null) {
          date = '';
        }
        if (!date) {
          return '';
        }
        return I18n.l("date.formats." + i18n_format, date);
      },
      tTimeToString: function(date, i18n_format) {
        if (date == null) {
          date = '';
        }
        if (!date) {
          return '';
        }
        return I18n.l("time.formats." + i18n_format, date);
      },
      tTimeHours: function(date) {
        if (date == null) {
          date = '';
        }
        if (date.getMinutes() === 0 && date.getSeconds() === 0) {
          return I18n.l("time.formats.tiny_on_the_hour", date);
        } else {
          return I18n.l("time.formats.tiny", date);
        }
      },
      tEventToString: function(date, i18n_date_format, i18n_time_format) {
        if (date == null) {
          date = '';
        }
        if (i18n_date_format == null) {
          i18n_date_format = 'short';
        }
        if (i18n_time_format == null) {
          i18n_time_format = 'tiny';
        }
        return I18n.t('time.event', {
          defaultValue: '%{date} at %{time}',
          date: I18n.l("date.formats." + i18n_date_format, date),
          time: I18n.l("time.formats." + i18n_time_format, date)
        });
      },
      strftime: function(date, fmtstr) {
        if (date == null) {
          date = '';
        }
        return I18n.strftime(date, fmtstr);
      },
      mimeClass: mimeClass,
      convertApiUserContent: function(html, _arg) {
        var content, hash;

        hash = _arg.hash;
        content = convertApiUserContent(html, hash);
        if (!(hash && hash.forEditing)) {
          content = new Handlebars.SafeString(content);
        }
        return content;
      },
      newlinesToBreak: function(string) {
        string || (string = '');
        return new Handlebars.SafeString(htmlEscape(string).replace(/\n/g, "<br />"));
      },
      not: function(arg) {
        return !arg;
      },
      ifEqual: function() {
        var arg, args, inverse, previousArg, _i, _j, _len, _ref;

        previousArg = arguments[0], args = 3 <= arguments.length ? __slice.call(arguments, 1, _i = arguments.length - 1) : (_i = 1, []), (_ref = arguments[_i++], fn = _ref.fn, inverse = _ref.inverse);
        for (_j = 0, _len = args.length; _j < _len; _j++) {
          arg = args[_j];
          if (arg !== previousArg) {
            return inverse(this);
          }
          previousArg = arg;
        }
        return fn(this);
      },
      ifAll: function() {
        var arg, args, inverse, _i, _j, _len, _ref;

        args = 2 <= arguments.length ? __slice.call(arguments, 0, _i = arguments.length - 1) : (_i = 0, []), (_ref = arguments[_i++], fn = _ref.fn, inverse = _ref.inverse);
        for (_j = 0, _len = args.length; _j < _len; _j++) {
          arg = args[_j];
          if (!arg) {
            return inverse(this);
          }
        }
        return fn(this);
      },
      ifAny: function() {
        var arg, args, inverse, _i, _j, _len, _ref;

        args = 2 <= arguments.length ? __slice.call(arguments, 0, _i = arguments.length - 1) : (_i = 0, []), (_ref = arguments[_i++], fn = _ref.fn, inverse = _ref.inverse);
        for (_j = 0, _len = args.length; _j < _len; _j++) {
          arg = args[_j];
          if (arg) {
            return fn(this);
          }
        }
        return inverse(this);
      },
      eachWithIndex: function(context, options) {
        var ctx, index, inverse, ret;

        fn = options.fn;
        inverse = options.inverse;
        ret = '';
        if (context && context.length > 0) {
          for (index in context) {
            ctx = context[index];
            ctx._index = index;
            ret += fn(ctx);
          }
        } else {
          ret = inverse(this);
        }
        return ret;
      },
      eachProp: function(context, options) {
        var prop;

        return ((function() {
          var _results;

          _results = [];
          for (prop in context) {
            _results.push(options.fn({
              property: prop,
              value: context[prop]
            }));
          }
          return _results;
        })()).join('');
      },
      ifSettingIs: function() {
        var inverse, setting, settings, value, _ref;

        setting = arguments[0], value = arguments[1], (_ref = arguments[2], fn = _ref.fn, inverse = _ref.inverse);
        settings = ENV.SETTINGS;
        if (settings[setting] === value) {
          return fn(this);
        }
        return inverse(this);
      },
      toSentence: function(context, options) {
        var results;

        results = _.map(context, function(c) {
          return options.fn(c);
        });
        return $.toSentence(results);
      },
      dateSelect: function(name, options) {
        return new Handlebars.SafeString(dateSelect(name, options.hash).html());
      },
      checkbox: function(propertyName, _arg) {
        var attributes, bracketNotation, hash, hiddenDisabled, inputProps, key, prop, snakeCase, splitPropertyName, val, value, _i, _len, _ref;

        hash = _arg.hash;
        splitPropertyName = propertyName.split(/\./);
        snakeCase = splitPropertyName.join('_');
        if (hash.prefix) {
          splitPropertyName.unshift(hash.prefix);
          delete hash.prefix;
        }
        bracketNotation = splitPropertyName[0] + _.chain(splitPropertyName).rest().map(function(prop) {
          return "[" + prop + "]";
        }).value().join('');
        inputProps = _.extend({
          type: 'checkbox',
          value: 1,
          id: snakeCase,
          name: bracketNotation
        }, hash);
        if (inputProps.checked == null) {
          value = _.reduce(splitPropertyName, (function(memo, key) {
            if (memo != null) {
              return memo[key];
            }
          }), this);
          if (value) {
            inputProps.checked = true;
          }
        }
        _ref = ['checked', 'disabled'];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          prop = _ref[_i];
          if (inputProps[prop]) {
            inputProps[prop] = prop;
          } else {
            delete inputProps[prop];
          }
        }
        if (inputProps.uniqid && inputProps.id) {
          inputProps.id += "-" + (Handlebars.helpers.uniqid.call(this));
        }
        delete inputProps.uniqid;
        attributes = (function() {
          var _results;

          _results = [];
          for (key in inputProps) {
            val = inputProps[key];
            if (val != null) {
              _results.push("" + (htmlEscape(key)) + "=\"" + (htmlEscape(val)) + "\"");
            }
          }
          return _results;
        })();
        hiddenDisabled = inputProps.disabled ? "disabled" : "";
        return new Handlebars.SafeString("<input name=\"" + (htmlEscape(inputProps.name)) + "\" type=\"hidden\" value=\"0\" " + hiddenDisabled + ">\n<input " + (attributes.join(' ')) + " />");
      },
      toPercentage: function(number) {
        return parseInt(100 * number) + "%";
      },
      toPrecision: function(number, precision) {
        if (number) {
          return parseFloat(number).toPrecision(precision);
        } else {
          return '';
        }
      },
      checkedIf: function(thing, thingToCompare, hash) {
        if (arguments.length === 3) {
          if (thing === thingToCompare) {
            return 'checked';
          } else {
            return '';
          }
        } else {
          if (thing) {
            return 'checked';
          } else {
            return '';
          }
        }
      },
      selectedIf: function(thing, thingToCompare, hash) {
        if (arguments.length === 3) {
          if (thing === thingToCompare) {
            return 'selected';
          } else {
            return '';
          }
        } else {
          if (thing) {
            return 'selected';
          } else {
            return '';
          }
        }
      },
      disabledIf: function(thing, hash) {
        if (thing) {
          return 'disabled';
        } else {
          return '';
        }
      },
      checkedUnless: function(thing) {
        if (thing) {
          return '';
        } else {
          return 'checked';
        }
      },
      join: function(array, separator, hash) {
        if (separator == null) {
          separator = ',';
        }
        if (!array) {
          return '';
        }
        return array.join(separator);
      },
      ifIncludes: function(array, thing, options) {
        if (!array) {
          return false;
        }
        if (__indexOf.call(array, thing) >= 0) {
          return options.fn(this);
        } else {
          return options.inverse(this);
        }
      },
      disabledIfIncludes: function(array, thing) {
        if (!array) {
          return '';
        }
        if (__indexOf.call(array, thing) >= 0) {
          return 'disabled';
        } else {
          return '';
        }
      },
      truncate_left: function(string, max) {
        return textHelper.truncateText(string.split("").reverse().join(""), {
          max: max
        }).split("").reverse().join("");
      },
      truncate: function(string, max) {
        return textHelper.truncateText(string, {
          max: max
        });
      },
      escape_html: function(string) {
        return htmlEscape(string);
      },
      enrollmentName: enrollmentName,
      list: function(value, options) {
        var end, limit, propName, result, separator, string, _ref;

        _.defaults(options.hash, {
          separator: ', ',
          propName: null,
          limit: null,
          end: '...'
        });
        _ref = options.hash, propName = _ref.propName, limit = _ref.limit, end = _ref.end, separator = _ref.separator;
        result = _.map(value, function(item) {
          if (propName) {
            return item[propName];
          } else {
            return item;
          }
        });
        if (limit) {
          result = result.slice(0, limit);
        }
        string = result.join(separator);
        if (limit && value.length > limit) {
          return "" + string + end;
        } else {
          return string;
        }
      },
      titleize: function(str) {
        var titleizedWords, words;

        if (!str) {
          return '';
        }
        words = str.split(/[ _]+/);
        titleizedWords = _(words).map(function(w) {
          return w[0].toUpperCase() + w.slice(1);
        });
        return titleizedWords.join(' ');
      },
      uniqid: function(context) {
        var chars;

        if (arguments.length <= 1) {
          context = this;
        }
        if (!context._uniqid_) {
          chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
          context._uniqid_ = ((function() {
            var _i, _results;

            _results = [];
            for (_i = 1; _i <= 8; _i++) {
              _results.push(chars.charAt(Math.floor(Math.random() * chars.length)));
            }
            return _results;
          })()).join('');
        }
        return context._uniqid_;
      },
      view: function(backboneView) {
        var id, onNextFrame, replace;

        onNextFrame = function(fn) {
          return (window.requestAnimationFrame || setTimeout)(fn, 0);
        };
        id = "placeholder-" + ($.guid++);
        replace = function() {
          var $span;

          $span = $("#" + id);
          if ($span.length) {
            return $span.replaceWith(backboneView.$el);
          } else {
            return onNextFrame(replace);
          }
        };
        backboneView.render();
        onNextFrame(replace);
        return new Handlebars.SafeString("<span id=\"" + id + "\">pk</span>");
      },
      or: function() {
        var arg, args, options, _i, _j, _len;

        args = 2 <= arguments.length ? __slice.call(arguments, 0, _i = arguments.length - 1) : (_i = 0, []), options = arguments[_i++];
        for (_j = 0, _len = args.length; _j < _len; _j++) {
          arg = args[_j];
          if (arg) {
            return arg;
          }
        }
      }
    };
    for (name in _ref) {
      fn = _ref[name];
      Handlebars.registerHelper(name, fn);
    }
    return Handlebars;
  });

}).call(this);
