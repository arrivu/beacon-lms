(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(['jquery', 'i18n!calendar', 'underscore', 'compiled/calendar/CalendarDefaults', 'vendor/jquery.ba-tinypubsub'], function($, I18n, _, calendarDefaults) {
    var MiniCalendar;

    return MiniCalendar = (function() {
      function MiniCalendar(selector, mainCalendar) {
        this.mainCalendar = mainCalendar;
        this.drop = __bind(this.drop, this);
        this.refetchEvents = __bind(this.refetchEvents, this);
        this.eventSaved = __bind(this.eventSaved, this);
        this.visibleContextListChanged = __bind(this.visibleContextListChanged, this);
        this.eventRender = __bind(this.eventRender, this);
        this.gotoDate = __bind(this.gotoDate, this);
        this.dayClick = __bind(this.dayClick, this);
        this.getEvents = __bind(this.getEvents, this);
        this.calendar = $(selector);
        this.calendar.fullCalendar(_.defaults({
          height: 240,
          header: {
            left: "prev",
            center: "title",
            right: "next"
          },
          dayClick: this.dayClick,
          events: this.getEvents,
          eventRender: this.eventRender,
          droppable: true,
          dropAccept: '.fc-event,.undated_event',
          drop: this.drop
        }, calendarDefaults), $.subscribe({
          "Calendar/visibleContextListChanged": this.visibleContextListChanged,
          "Calendar/refetchEvents": this.refetchEvents,
          "Calendar/currentDate": this.gotoDate,
          "CommonEvent/eventDeleted": this.eventSaved,
          "CommonEvent/eventSaved": this.eventSaved
        }));
      }

      MiniCalendar.prototype.getEvents = function(start, end, cb) {
        this.calendar.find(".fc-content td").removeClass("event slot-available").removeAttr('title');
        return this.mainCalendar.getEvents(start, end, cb);
      };

      MiniCalendar.prototype.dayClick = function(date) {
        return this.mainCalendar.gotoDate(date);
      };

      MiniCalendar.prototype.gotoDate = function(date) {
        return this.calendar.fullCalendar("gotoDate", date);
      };

      MiniCalendar.prototype.eventRender = function(event, element, view) {
        var appointmentGroupBeingViewed, cell, td, tooltip, _ref, _ref1;

        cell = view.dateToCell(event.start);
        td = view.element.find("tr:nth-child(" + (cell.row + 1) + ") td:nth-child(" + (cell.col + 1) + ")");
        td.addClass("event");
        tooltip = I18n.t('event_on_this_day', 'There is an event on this day');
        appointmentGroupBeingViewed = (_ref = this.mainCalendar.displayAppointmentEvents) != null ? _ref.id : void 0;
        if (appointmentGroupBeingViewed && appointmentGroupBeingViewed === ((_ref1 = event.calendarEvent) != null ? _ref1.appointment_group_id : void 0) && event.object.available_slots) {
          td.addClass("slot-available");
          tooltip = I18n.t('open_appointment_on_this_day', 'There is an open appointment on this day');
        }
        td.attr('title', tooltip);
        return false;
      };

      MiniCalendar.prototype.visibleContextListChanged = function(list) {
        return this.refetchEvents();
      };

      MiniCalendar.prototype.eventSaved = function() {
        return this.refetchEvents();
      };

      MiniCalendar.prototype.refetchEvents = function() {
        if (!this.calendar.is(':visible')) {
          return;
        }
        return this.calendar.fullCalendar('refetchEvents');
      };

      MiniCalendar.prototype.drop = function(date, allDay, jsEvent, ui) {
        if (ui.helper.is('.undated_event')) {
          return this.mainCalendar.drop(date, allDay, jsEvent, ui);
        } else if (ui.helper.is('.fc-event')) {
          return this.mainCalendar.dropOnMiniCalendar(date, allDay, jsEvent, ui);
        }
      };

      return MiniCalendar;

    })();
  });

}).call(this);
