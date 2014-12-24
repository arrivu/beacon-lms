(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(['jquery', 'underscore', 'timezone', 'compiled/calendar/commonEventFactory', 'compiled/calendar/TimeBlockList', 'jst/calendar/editCalendarEvent', 'jquery.instructure_date_and_time', 'jquery.instructure_forms', 'jquery.instructure_misc_helpers', 'vendor/date'], function($, _, tz, commonEventFactory, TimeBlockList, editCalendarEventTemplate) {
    var EditCalendarEventDetails;

    return EditCalendarEventDetails = (function() {
      function EditCalendarEventDetails(selector, event, contextChangeCB, closeCB) {
        this.event = event;
        this.contextChangeCB = contextChangeCB;
        this.closeCB = closeCB;
        this.formSubmit = __bind(this.formSubmit, this);
        this.setupTimeAndDatePickers = __bind(this.setupTimeAndDatePickers, this);
        this.contextChange = __bind(this.contextChange, this);
        this.setContext = __bind(this.setContext, this);
        this.moreOptionsClick = __bind(this.moreOptionsClick, this);
        this.getFormData = __bind(this.getFormData, this);
        this.activate = __bind(this.activate, this);
        this.currentContextInfo = null;
        this.form = $(editCalendarEventTemplate({
          title: this.event.title,
          contexts: this.event.possibleContexts(),
          lockedTitle: this.event.lockedTitle,
          location_name: this.event.location_name
        }));
        $(selector).append(this.form);
        this.setupTimeAndDatePickers();
        this.form.submit(this.formSubmit);
        this.form.find(".more_options_link").click(this.moreOptionsClick);
        this.form.find("select.context_id").change(this.contextChange);
        this.form.find("select.context_id").triggerHandler('change', false);
        if (!this.event.isNewEvent()) {
          this.form.find(".context_select").hide();
        }
      }

      EditCalendarEventDetails.prototype.contextInfoForCode = function(code) {
        var context, _i, _len, _ref;

        _ref = this.event.possibleContexts();
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          context = _ref[_i];
          if (context.asset_string === code) {
            return context;
          }
        }
        return null;
      };

      EditCalendarEventDetails.prototype.activate = function() {
        return this.form.find("select.context_id").change();
      };

      EditCalendarEventDetails.prototype.getFormData = function() {
        var data, date, end_at, end_time, start_at, start_time;

        data = this.form.getFormData({
          object_name: 'calendar_event'
        });
        data = _.omit(data, 'date', 'start_time', 'end_time');
        date = this.form.find('input[name=date]').data('date');
        if (date) {
          start_time = this.form.find('input[name=start_time]').data('date');
          start_at = date.toString('yyyy-MM-dd');
          if (start_time) {
            start_at += start_time.toString(' HH:mm');
          }
          data.start_at = tz.parse(start_at);
          end_time = this.form.find('input[name=end_time]').data('date');
          end_at = date.toString('yyyy-MM-dd');
          if (end_time) {
            end_at += end_time.toString(' HH:mm');
          }
          data.end_at = tz.parse(end_at);
        }
        return data;
      };

      EditCalendarEventDetails.prototype.moreOptionsClick = function(jsEvent) {
        var data, params, pieces;

        if (this.event.object.parent_event_id) {
          return;
        }
        jsEvent.preventDefault();
        params = {
          return_to: window.location.href
        };
        data = this.getFormData();
        data.start_date = this.form.find('input[name=date]').val();
        data.start_time = this.form.find('input[name=start_time]').val();
        data.end_time = this.form.find('input[name=end_time]').val();
        if (data.title) {
          params['title'] = data.title;
        }
        if (data.location_name) {
          params['location_name'] = data.location_name;
        }
        if (data.start_date) {
          params['start_date'] = data.start_date;
        }
        if (data.start_time) {
          params['start_time'] = data.start_time;
        }
        if (data.end_time) {
          params['end_time'] = data.end_time;
        }
        pieces = $(jsEvent.target).attr('href').split("#");
        pieces[0] += "?" + $.param(params);
        return window.location.href = pieces.join("#");
      };

      EditCalendarEventDetails.prototype.setContext = function(newContext) {
        return this.form.find("select.context_id").val(newContext).triggerHandler('change', false);
      };

      EditCalendarEventDetails.prototype.contextChange = function(jsEvent, propagate) {
        var context, moreOptionsHref;

        context = $(jsEvent.target).val();
        this.currentContextInfo = this.contextInfoForCode(context);
        this.event.contextInfo = this.currentContextInfo;
        if (this.currentContextInfo === null) {
          return;
        }
        if (propagate !== false) {
          this.contextChangeCB(context);
        }
        moreOptionsHref = null;
        if (this.event.isNewEvent()) {
          moreOptionsHref = this.currentContextInfo.new_calendar_event_url;
        } else {
          moreOptionsHref = this.event.fullDetailsURL() + '/edit';
        }
        return this.form.find(".more_options_link").attr('href', moreOptionsHref);
      };

      EditCalendarEventDetails.prototype.setupTimeAndDatePickers = function() {
        var endDate, startDate,
          _this = this;

        this.form.find(".date_field").date_field();
        this.form.find(".time_field").time_field().blur(function(jsEvent) {
          var endDate, end_time, startDate, start_time;

          start_time = _this.form.find(".time_field.start_time").next(".datetime_suggest").text();
          if (_this.form.find(".time_field.start_time").next(".datetime_suggest").hasClass('invalid_datetime')) {
            start_time = null;
          }
          if (start_time == null) {
            start_time = _this.form.find(".time_field.start_time").val();
          }
          end_time = _this.form.find(".time_field.end_time").next(".datetime_suggest").text();
          if (_this.form.find(".time_field.end_time").next(".datetime_suggest").hasClass('invalid_datetime')) {
            end_time = null;
          }
          if (end_time == null) {
            end_time = _this.form.find(".time_field.end_time").val();
          }
          startDate = Date.parse(start_time);
          endDate = Date.parse(end_time);
          startDate = startDate || endDate;
          endDate = endDate || startDate;
          if ($(jsEvent.target).hasClass('end_time')) {
            if (startDate > endDate) {
              startDate = endDate;
            }
          } else {
            if (endDate < startDate) {
              endDate = startDate;
            }
          }
          if (startDate) {
            _this.form.find(".time_field.start_time").val(startDate.toString('h:mmtt').toLowerCase());
          }
          if (endDate) {
            return _this.form.find(".time_field.end_time").val(endDate.toString('h:mmtt').toLowerCase());
          }
        });
        startDate = this.event.startDate();
        endDate = this.event.endDate();
        if (!this.event.allDay) {
          if (startDate) {
            this.form.find(".time_field.start_time").val(startDate.toString('h:mmtt')).change().blur();
          }
          if (endDate) {
            this.form.find(".time_field.end_time").val(endDate.toString('h:mmtt')).change().blur();
          }
        }
        if (startDate) {
          return this.form.find(".date_field").val(startDate.toString('MMM d, yyyy')).change();
        }
      };

      EditCalendarEventDetails.prototype.formSubmit = function(jsEvent) {
        var data, location_name, newEvent, objectData, params, _ref;

        jsEvent.preventDefault();
        data = this.getFormData();
        location_name = data.location_name || '';
        params = {
          'calendar_event[title]': (_ref = data.title) != null ? _ref : this.event.title,
          'calendar_event[start_at]': data.start_at ? data.start_at.toISOString() : '',
          'calendar_event[end_at]': data.end_at ? data.end_at.toISOString() : '',
          'calendar_event[location_name]': location_name
        };
        if (this.event.isNewEvent()) {
          params['calendar_event[context_code]'] = data.context_code;
          objectData = {
            calendar_event: {
              title: params['calendar_event[title]'],
              start_at: data.start_at ? data.start_at.toISOString() : null,
              end_at: data.end_at ? data.end_at.toISOString() : null,
              location_name: location_name,
              context_code: this.form.find(".context_id").val()
            }
          };
          newEvent = commonEventFactory(objectData, this.event.possibleContexts());
          newEvent.save(params);
        } else {
          this.event.title = params['calendar_event[title]'];
          this.event.start = $.fudgeDateForProfileTimezone(data.start_at);
          this.event.end = $.fudgeDateForProfileTimezone(data.end_at);
          this.event.location_name = location_name;
          this.event.save(params);
        }
        return this.closeCB();
      };

      return EditCalendarEventDetails;

    })();
  });

}).call(this);
