(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(['i18n!calendar', 'jquery', 'underscore', 'compiled/userSettings', 'compiled/util/hsvToRgb', 'bower/color-slicer/dist/color-slicer', 'jst/calendar/calendarApp', 'compiled/calendar/EventDataSource', 'compiled/calendar/commonEventFactory', 'compiled/calendar/ShowEventDetailsDialog', 'compiled/calendar/EditEventDetailsDialog', 'compiled/calendar/Scheduler', 'compiled/views/calendar/CalendarNavigator', 'compiled/views/calendar/AgendaView', 'compiled/calendar/CalendarDefaults', 'compiled/util/deparam', 'vendor/fullcalendar', 'jquery.instructure_misc_helpers', 'jquery.instructure_misc_plugins', 'vendor/jquery.ba-tinypubsub', 'jqueryui/button'], function(I18n, $, _, userSettings, hsvToRgb, colorSlicer, calendarAppTemplate, EventDataSource, commonEventFactory, ShowEventDetailsDialog, EditEventDetailsDialog, Scheduler, CalendarNavigator, AgendaView, calendarDefaults, deparam) {
    var Calendar;

    return Calendar = (function() {
      var $styleContainer;

      function Calendar(selector, contexts, manageContexts, dataSource, options) {
        var context, data, date, fullCalendarParams, _ref, _ref1,
          _this = this;

        this.contexts = contexts;
        this.manageContexts = manageContexts;
        this.dataSource = dataSource;
        this.options = options;
        this.dataFromDocumentHash = __bind(this.dataFromDocumentHash, this);
        this.colorizeContexts = __bind(this.colorizeContexts, this);
        this.schedulerSingleDoneClick = __bind(this.schedulerSingleDoneClick, this);
        this.renderDateRange = __bind(this.renderDateRange, this);
        this.loadView = __bind(this.loadView, this);
        this.gotoDate = __bind(this.gotoDate, this);
        this.refetchEvents = __bind(this.refetchEvents, this);
        this.ajaxEnded = __bind(this.ajaxEnded, this);
        this.ajaxStarted = __bind(this.ajaxStarted, this);
        this.visibleContextListChanged = __bind(this.visibleContextListChanged, this);
        this.updateOverrides = __bind(this.updateOverrides, this);
        this.eventSaveFailed = __bind(this.eventSaveFailed, this);
        this.eventSaved = __bind(this.eventSaved, this);
        this.eventSaving = __bind(this.eventSaving, this);
        this.eventDeleted = __bind(this.eventDeleted, this);
        this.eventDeleting = __bind(this.eventDeleting, this);
        this.reloadClick = __bind(this.reloadClick, this);
        this.fragmentChange = __bind(this.fragmentChange, this);
        this.drop = __bind(this.drop, this);
        this.setDateTitle = __bind(this.setDateTitle, this);
        this.drawNowLine = __bind(this.drawNowLine, this);
        this.viewDisplay = __bind(this.viewDisplay, this);
        this.dayClick = __bind(this.dayClick, this);
        this.eventClick = __bind(this.eventClick, this);
        this.addEventClick = __bind(this.addEventClick, this);
        this.eventResize = __bind(this.eventResize, this);
        this.eventDrop = __bind(this.eventDrop, this);
        this.eventResizeStart = __bind(this.eventResizeStart, this);
        this.eventDragStart = __bind(this.eventDragStart, this);
        this.eventAfterRender = __bind(this.eventAfterRender, this);
        this.eventRender = __bind(this.eventRender, this);
        this.windowResize = __bind(this.windowResize, this);
        this.getEvents = __bind(this.getEvents, this);
        this.today = __bind(this.today, this);
        this.contextCodes = (function() {
          var _i, _len, _results;

          _results = [];
          for (_i = 0, _len = contexts.length; _i < _len; _i++) {
            context = contexts[_i];
            _results.push(context.asset_string);
          }
          return _results;
        })();
        this.visibleContextList = [];
        this.displayAppointmentEvents = null;
        this.activateEvent = (_ref = this.options) != null ? _ref.activateEvent : void 0;
        this.activeAjax = 0;
        this.subscribeToEvents();
        this.header = this.options.header;
        this.el = $(selector).html(calendarAppTemplate());
        this.schedulerNavigator = new CalendarNavigator({
          el: $('.scheduler_navigator')
        });
        this.schedulerNavigator.hide();
        this.agenda = new AgendaView({
          el: $('.agenda-wrapper'),
          dataSource: this.dataSource
        });
        this.scheduler = new Scheduler(".scheduler-wrapper", this);
        fullCalendarParams = this.initializeFullCalendarParams();
        data = this.dataFromDocumentHash();
        if (!data.view_start && ((_ref1 = this.options) != null ? _ref1.viewStart : void 0)) {
          data.view_start = this.options.viewStart;
          this.updateFragment(data);
        }
        if (data.view_start) {
          date = $.fullCalendar.parseISO8601(data.view_start);
        } else {
          date = $.fudgeDateForProfileTimezone(new Date);
        }
        fullCalendarParams.year = date.getFullYear();
        fullCalendarParams.month = date.getMonth();
        fullCalendarParams.date = date.getDate();
        this.calendar = this.el.find("div.calendar").fullCalendar(fullCalendarParams);
        if (data.show && data.show !== '') {
          this.visibleContextList = data.show.split(',');
        }
        $(document).fragmentChange(this.fragmentChange);
        this.colorizeContexts();
        if (this.options.showScheduler) {
          this.dataSource.getAppointmentGroups(false, function(data) {
            var group, required, _i, _len;

            required = 0;
            for (_i = 0, _len = data.length; _i < _len; _i++) {
              group = data[_i];
              if (group.requiring_action) {
                required += 1;
              }
            }
            return _this.header.setSchedulerBadgeCount(required);
          });
        }
        this.connectHeaderEvents();
        this.connectSchedulerNavigatorEvents();
        this.connectAgendaEvents();
        this.header.selectView(this.getCurrentView());
        if (data.view_name === 'scheduler' && data.appointment_group_id) {
          this.scheduler.viewCalendarForGroupId(data.appointment_group_id);
        }
        window.setInterval(this.drawNowLine, 1000 * 60);
      }

      Calendar.prototype.subscribeToEvents = function() {
        return $.subscribe({
          "CommonEvent/eventDeleting": this.eventDeleting,
          "CommonEvent/eventDeleted": this.eventDeleted,
          "CommonEvent/eventSaving": this.eventSaving,
          "CommonEvent/eventSaved": this.eventSaved,
          "CommonEvent/eventSaveError": this.eventSaveFailed,
          "Calendar/visibleContextListChanged": this.visibleContextListChanged,
          "EventDataSource/ajaxStarted": this.ajaxStarted,
          "EventDataSource/ajaxEnded": this.ajaxEnded,
          "Calendar/refetchEvents": this.refetchEvents,
          'CommonEvent/assignmentSaved': this.updateOverrides,
          'Calendar/colorizeContexts': this.colorizeContexts
        });
      };

      Calendar.prototype.connectHeaderEvents = function() {
        var _this = this;

        this.header.on('navigatePrev', function() {
          return _this.handleArrow('prev');
        });
        this.header.on('navigateToday', this.today);
        this.header.on('navigateNext', function() {
          return _this.handleArrow('next');
        });
        this.header.on('navigateDate', this.gotoDate);
        this.header.on('week', function() {
          return _this.loadView('week');
        });
        this.header.on('month', function() {
          return _this.loadView('month');
        });
        this.header.on('agenda', function() {
          return _this.loadView('agenda');
        });
        this.header.on('scheduler', function() {
          return _this.loadView('scheduler');
        });
        this.header.on('createNewEvent', this.addEventClick);
        this.header.on('refreshCalendar', this.reloadClick);
        return this.header.on('done', this.schedulerSingleDoneClick);
      };

      Calendar.prototype.connectSchedulerNavigatorEvents = function() {
        var _this = this;

        this.schedulerNavigator.on('navigatePrev', function() {
          return _this.handleArrow('prev');
        });
        this.schedulerNavigator.on('navigateToday', this.today);
        this.schedulerNavigator.on('navigateNext', function() {
          return _this.handleArrow('next');
        });
        return this.schedulerNavigator.on('navigateDate', this.gotoDate);
      };

      Calendar.prototype.connectAgendaEvents = function() {
        return this.agenda.on('agendaDateRange', this.renderDateRange);
      };

      Calendar.prototype.initializeFullCalendarParams = function() {
        return _.defaults({
          header: false,
          editable: true,
          columnFormat: {
            month: 'ddd',
            week: 'ddd M/d'
          },
          buttonText: {
            today: I18n.t('today', 'Today')
          },
          defaultEventMinutes: 60,
          slotMinutes: 30,
          firstHour: 7,
          droppable: true,
          dropAccept: '.undated_event',
          events: this.getEvents,
          eventRender: this.eventRender,
          eventAfterRender: this.eventAfterRender,
          eventDragStart: this.eventDragStart,
          eventDrop: this.eventDrop,
          eventClick: this.eventClick,
          eventResize: this.eventResize,
          eventResizeStart: this.eventResizeStart,
          dayClick: this.dayClick,
          addEventClick: this.addEventClick,
          titleFormat: {
            week: "MMM d[ yyyy]{ '&ndash;'[ MMM] d, yyyy}"
          },
          viewDisplay: this.viewDisplay,
          windowResize: this.windowResize,
          drop: this.drop,
          dragRevertDuration: {
            month: 0
          },
          dragHelper: {
            month: 'clone'
          },
          dragAppendTo: {
            month: '#calendar-drag-and-drop-container'
          },
          dragZIndex: {
            month: 350
          },
          dragCursorAt: {
            month: {
              top: -5,
              left: -5
            }
          }
        }, calendarDefaults);
      };

      Calendar.prototype.today = function() {
        var now;

        now = $.fudgeDateForProfileTimezone(new Date);
        return this.gotoDate(now);
      };

      Calendar.prototype.getEvents = function(start, end, cb) {
        var filterEvents,
          _this = this;

        filterEvents = function(events) {
          var event, eventIds, idx, keep, _i, _ref, _ref1;

          eventIds = {};
          if (!(events.length > 0)) {
            return events;
          }
          for (idx = _i = _ref = events.length - 1; _ref <= 0 ? _i <= 0 : _i >= 0; idx = _ref <= 0 ? ++_i : --_i) {
            event = events[idx];
            keep = true;
            if (eventIds[event.id]) {
              keep = false;
            } else if (event.isAppointmentGroupEvent()) {
              if (!_this.displayAppointmentEvents) {
                if (!event.calendarEvent.reserve_url) {
                  keep = true;
                } else if (event.calendarEvent.child_events_count > 0 && !event.calendarEvent.reserved && event.can_edit) {
                  keep = true;
                } else {
                  keep = false;
                }
              } else {
                if (_this.displayAppointmentEvents.id === ((_ref1 = event.calendarEvent) != null ? _ref1.appointment_group_id : void 0)) {
                  keep = !!event.calendarEvent.reserve_url;
                } else {
                  keep = !event.calendarEvent.reserve_url;
                }
              }
            }
            if (!keep) {
              events.splice(idx, 1);
            }
            eventIds[event.id] = true;
          }
          return events;
        };
        return this.dataSource.getEvents(start, end, this.visibleContextList, function(events) {
          if (_this.displayAppointmentEvents) {
            return _this.dataSource.getEventsForAppointmentGroup(_this.displayAppointmentEvents, function(aEvents) {
              var event, _i, _j, _len, _len1;

              for (_i = 0, _len = events.length; _i < _len; _i++) {
                event = events[_i];
                event.removeClass('current-appointment-group');
              }
              for (_j = 0, _len1 = aEvents.length; _j < _len1; _j++) {
                event = aEvents[_j];
                event.addClass('current-appointment-group');
              }
              return cb(filterEvents(events.concat(aEvents)));
            });
          } else {
            return cb(filterEvents(events));
          }
        });
      };

      Calendar.prototype.closeEventPopups = function() {
        return $('.event-details').each(function() {
          var existingDialog;

          existingDialog = $(this).data('showEventDetailsDialog');
          if (existingDialog) {
            return existingDialog.close();
          }
        });
      };

      Calendar.prototype.windowResize = function(view) {
        this.closeEventPopups();
        return this.drawNowLine();
      };

      Calendar.prototype.eventRender = function(event, element, view) {
        var $element, screenReaderTitleHint, status, timeString;

        $element = $(element);
        if (event.isAppointmentGroupEvent() && this.displayAppointmentEvents && this.displayAppointmentEvents.id === event.calendarEvent.appointment_group_id) {
          status = "Available";
          if (event.calendarEvent.available_slots > 0) {
            status = "" + event.calendarEvent.available_slots + " Available";
          }
          if (event.calendarEvent.available_slots === 0) {
            status = "Filled";
          }
          if (event.calendarEvent.reserved === true) {
            status = "Reserved";
          }
          $element.find('.fc-event-title').text(status);
        }
        timeString = !event.endDate() || event.startDate().getTime() === event.endDate().getTime() ? this.calendar.fullCalendar('formatDate', event.startDate(), 'h:mmtt') : this.calendar.fullCalendar('formatDates', event.startDate(), event.endDate(), 'h:mmtt{ – h:mmtt}');
        screenReaderTitleHint = event.eventType.match(/assignment/) ? I18n.t('event_assignment_title', 'Assignment Title: ') : I18n.t('event_event_title', 'Event Title: ');
        $element.attr('title', $.trim("" + timeString + "\n" + ($element.find('.fc-event-title').text()) + "\n\n" + (I18n.t('calendar_title', 'Calendar:')) + " " + event.contextInfo.name));
        $element.find('.fc-event-inner').prepend($("<span class='screenreader-only'>" + (I18n.t('calendar_title', 'Calendar:')) + " " + event.contextInfo.name + "</span>"));
        $element.find('.fc-event-title').prepend($("<span class='screenreader-only'>" + screenReaderTitleHint + "</span>"));
        $element.find('.fc-event-title').toggleClass('calendar__event--completed', event.isCompleted());
        element.find('.fc-event-inner').prepend($('<i />', {
          'class': "icon-" + (event.iconType())
        }));
        return true;
      };

      Calendar.prototype.eventAfterRender = function(event, element, view) {
        var html, time, _ref, _ref1;

        if (event.isDueAtMidnight()) {
          time = element.find('.fc-event-time');
          html = time.html();
          html = html.replace(/^\d+:\d+\w?/, this.calendar.fullCalendar('formatDate', event.startDate(), 'h(:mm)t'));
          time.html(html);
        }
        if (event.eventType.match(/assignment/) && view.name === "agendaWeek") {
          element.height('').find('.ui-resizable-handle').remove();
        }
        if (event.eventType.match(/assignment/) && event.isDueAtMidnight() && view.name === "month") {
          element.find('.fc-event-time').empty();
        }
        if (event.eventType === 'calendar_event' && ((_ref = this.options) != null ? _ref.activateEvent : void 0) && event.id === ("calendar_event_" + ((_ref1 = this.options) != null ? _ref1.activateEvent : void 0))) {
          this.options.activateEvent = null;
          return this.eventClick(event, {
            currentTarget: element,
            pageX: element.offset().left + parseInt(element.width() / 2)
          }, view);
        }
      };

      Calendar.prototype.eventDragStart = function(event, jsEvent, ui, view) {
        this.lastEventDragged = event;
        return this.closeEventPopups();
      };

      Calendar.prototype.eventResizeStart = function(event, jsEvent, ui, view) {
        return this.closeEventPopups();
      };

      Calendar.prototype.eventDrop = function(event, dayDelta, minuteDelta, allDay, revertFunc, jsEvent, ui, view) {
        return this._eventDrop(event, minuteDelta, allDay, revertFunc);
      };

      Calendar.prototype._eventDrop = function(event, minuteDelta, allDay, revertFunc) {
        var originalDuration;

        if (this.currentView === 'week' && allDay && event.eventType === "assignment") {
          revertFunc();
          return;
        }
        if (event.eventType === "assignment" && event.isDueAtMidnight() && minuteDelta === 0) {
          event.start.setMinutes(59);
        }
        if (event.eventType === "calendar_event" && allDay) {
          event.allDay = true;
        }
        if (event.end && event.endDate()) {
          originalDuration = event.endDate().getTime() - event.startDate().getTime();
          event.end = new Date(event.start.getTime() + originalDuration);
        }
        event.saveDates(null, revertFunc);
        return true;
      };

      Calendar.prototype.eventResize = function(event, dayDelta, minuteDelta, revertFunc, jsEvent, ui, view) {
        return event.saveDates(null, revertFunc);
      };

      Calendar.prototype.addEventClick = function(event, jsEvent, view) {
        var activeContexts, allowedContexts;

        if (this.displayAppointmentEvents) {
          return;
        }
        allowedContexts = userSettings.get('checked_calendar_codes') || _.pluck(this.contexts, 'asset_string');
        activeContexts = _.filter(this.contexts, function(c) {
          return _.contains(allowedContexts, c.asset_string);
        });
        event = commonEventFactory(null, activeContexts);
        event.date = this.getCurrentDate();
        return new EditEventDetailsDialog(event).show();
      };

      Calendar.prototype.eventClick = function(event, jsEvent, view) {
        var $event, detailsDialog;

        $event = $(jsEvent.currentTarget);
        if (!$event.hasClass('event_pending')) {
          detailsDialog = new ShowEventDetailsDialog(event);
          $event.data('showEventDetailsDialog', detailsDialog);
          return detailsDialog.show(jsEvent);
        }
      };

      Calendar.prototype.dayClick = function(date, allDay, jsEvent, view) {
        var activeContexts, allowedContexts, event;

        if (this.displayAppointmentEvents) {
          return;
        }
        allowedContexts = userSettings.get('checked_calendar_codes') || _.pluck(this.contexts, 'asset_string');
        activeContexts = _.filter(this.contexts, function(c) {
          return _.contains(allowedContexts, c.asset_string);
        });
        event = commonEventFactory(null, activeContexts);
        event.allDay = allDay;
        event.date = date;
        return (new EditEventDetailsDialog(event)).show();
      };

      Calendar.prototype.updateFragment = function(opts) {
        var changed, data, k, v;

        data = this.dataFromDocumentHash();
        changed = false;
        for (k in opts) {
          v = opts[k];
          if (data[k] !== v) {
            changed = true;
          }
          if (v) {
            data[k] = v;
          } else {
            delete data[k];
          }
        }
        if (changed) {
          return location.href = "#" + $.param(data);
        }
      };

      Calendar.prototype.viewDisplay = function(view) {
        this.setDateTitle(view.title);
        return this.drawNowLine();
      };

      Calendar.prototype.isSameWeek = function(date1, date2) {
        var sunday, weekEnd, weekStart;

        sunday = new Date(date1.getTime());
        sunday.setDate(sunday.getDate() - sunday.getDay());
        weekStart = sunday.getTime();
        weekEnd = weekStart + 7 * 24 * 3600 * 1000;
        return (weekStart <= date2 && date2 <= weekEnd);
      };

      Calendar.prototype.drawNowLine = function() {
        var midnight, now, secondHeight, seconds;

        if (this.currentView !== 'week') {
          return;
        }
        if (!this.nowLine) {
          this.nowLine = $('<div />', {
            'class': 'calendar-nowline'
          });
        }
        $('.fc-agenda-slots').parent().append(this.nowLine);
        now = $.fudgeDateForProfileTimezone(new Date);
        midnight = new Date(now.getTime());
        midnight.setHours(0, 0, 0);
        seconds = (now.getTime() - midnight.getTime()) / 1000;
        this.nowLine.toggle(this.isSameWeek(this.getCurrentDate(), now));
        this.nowLine.css('width', $('.fc-agenda-slots .fc-widget-content:first').css('width'));
        secondHeight = $('.fc-agenda-slots').css('height').replace('px', '') / 24 / 3600;
        return this.nowLine.css('top', seconds * secondHeight + 'px');
      };

      Calendar.prototype.setDateTitle = function(title) {
        this.header.setHeaderText(title);
        return this.schedulerNavigator.setTitle(title);
      };

      Calendar.prototype.drop = function(date, allDay, jsEvent, ui) {
        var event, eventId, revertFunc;

        eventId = $(ui.helper).data('event-id');
        event = $("[data-event-id=" + eventId + "]").data('calendarEvent');
        if (!event) {
          return;
        }
        event.start = date;
        event.addClass('event_pending');
        revertFunc = function() {
          return console.log("could not save date on undated event");
        };
        if (!this._eventDrop(event, 0, allDay, revertFunc)) {
          return;
        }
        return this.calendar.fullCalendar('renderEvent', event);
      };

      Calendar.prototype.dropOnMiniCalendar = function(date, allDay, jsEvent, ui) {
        var event, originalEnd, originalStart, _ref,
          _this = this;

        event = this.lastEventDragged;
        if (!event) {
          return;
        }
        originalStart = new Date(event.start.getTime());
        originalEnd = new Date((_ref = event.end) != null ? _ref.getTime() : void 0);
        this.copyYMD(event.start, date);
        this.copyYMD(event.end, date);
        return this._eventDrop(event, 0, false, function() {
          event.start = originalStart;
          event.end = originalEnd;
          return _this.calendar.fullCalendar('updateEvent', event);
        });
      };

      Calendar.prototype.copyYMD = function(target, source) {
        if (!target) {
          return;
        }
        target.setFullYear(source.getFullYear());
        target.setMonth(source.getMonth());
        return target.setDate(source.getDate());
      };

      Calendar.prototype.fragmentChange = function(event, hash) {
        var data;

        data = this.dataFromDocumentHash();
        if ($.isEmptyObject(data)) {
          return;
        }
        if (data.view_name !== this.currentView) {
          this.loadView(data.view_name);
        }
        return this.gotoDate(this.getCurrentDate());
      };

      Calendar.prototype.reloadClick = function(event) {
        if (event != null) {
          event.preventDefault();
        }
        if (this.activeAjax === 0) {
          this.dataSource.clearCache();
          if (this.currentView === 'scheduler') {
            this.scheduler.loadData();
          }
          return this.calendar.fullCalendar('refetchEvents');
        }
      };

      Calendar.prototype.eventDeleting = function(event) {
        event.addClass('event_pending');
        return this.calendar.fullCalendar('updateEvent', event);
      };

      Calendar.prototype.eventDeleted = function(event) {
        return this.calendar.fullCalendar('removeEvents', event.id);
      };

      Calendar.prototype.eventSaving = function(event) {
        if (!event.start) {
          return;
        }
        event.addClass('event_pending');
        if (event.isNewEvent()) {
          return this.calendar.fullCalendar('renderEvent', event);
        } else {
          return this.calendar.fullCalendar('updateEvent', event);
        }
      };

      Calendar.prototype.eventSaved = function(event) {
        event.removeClass('event_pending');
        delete event._id;
        this.calendar.fullCalendar('refetchEvents');
        return this.closeEventPopups();
      };

      Calendar.prototype.eventSaveFailed = function(event) {
        event.removeClass('event_pending');
        if (event.isNewEvent()) {
          return this.calendar.fullCalendar('removeEvents', event.id);
        } else {
          return this.calendar.fullCalendar('updateEvent', event);
        }
      };

      Calendar.prototype.updateOverrides = function(event) {
        return _.each(this.dataSource.cache.contexts[event.contextCode()].events, function(override, key) {
          if (key.match(/override/) && event.assignment.id === override.assignment.id) {
            return override.updateAssignmentTitle(event.title);
          }
        });
      };

      Calendar.prototype.visibleContextListChanged = function(newList) {
        this.visibleContextList = newList;
        if (this.currentView === 'agenda') {
          this.loadAgendaView();
        }
        return this.calendar.fullCalendar('refetchEvents');
      };

      Calendar.prototype.ajaxStarted = function() {
        this.activeAjax += 1;
        return this.header.animateLoading(true);
      };

      Calendar.prototype.ajaxEnded = function() {
        this.activeAjax -= 1;
        return this.header.animateLoading(this.activeAjax > 0);
      };

      Calendar.prototype.refetchEvents = function() {
        return this.calendar.fullCalendar('refetchEvents');
      };

      Calendar.prototype.gotoDate = function(d) {
        this.calendar.fullCalendar("gotoDate", d);
        if (this.currentView === 'agenda') {
          this.agendaViewFetch(d);
        }
        return this.setCurrentDate(d);
      };

      Calendar.prototype.handleArrow = function(type) {
        var calendarDate, now, start;

        this.calendar.fullCalendar(type);
        calendarDate = this.calendar.fullCalendar('getDate');
        now = $.fudgeDateForProfileTimezone(new Date);
        if (this.currentView === 'month') {
          if (calendarDate.getMonth() === now.getMonth() && calendarDate.getFullYear() === now.getFullYear()) {
            start = now;
          } else {
            start = new Date(calendarDate.getTime());
            start.setDate(1);
          }
        } else {
          if (this.isSameWeek(calendarDate, now)) {
            start = now;
          } else {
            start = new Date(calendarDate.getTime());
            start.setDate(start.getDate() - start.getDay());
          }
        }
        return this.setCurrentDate(start);
      };

      Calendar.prototype.setCurrentDate = function(d) {
        this.updateFragment({
          view_start: d.toISOString()
        });
        return $.publish('Calendar/currentDate', d);
      };

      Calendar.prototype.getCurrentDate = function() {
        var data;

        data = this.dataFromDocumentHash();
        if (data.view_start) {
          return $.fullCalendar.parseISO8601(data.view_start);
        } else {
          return $.fudgeDateForProfileTimezone(new Date);
        }
      };

      Calendar.prototype.setCurrentView = function(view) {
        this.updateFragment({
          view_name: view
        });
        this.currentView = view;
        return userSettings.set('calendar_view', view);
      };

      Calendar.prototype.getCurrentView = function() {
        var data;

        if (this.currentView) {
          return this.currentView;
        } else if ((data = this.dataFromDocumentHash()) && data.view_name) {
          return data.view_name;
        } else if (userSettings.get('calendar_view')) {
          return userSettings.get('calendar_view');
        } else {
          return 'month';
        }
      };

      Calendar.prototype.loadView = function(view) {
        if (view === this.currentView) {
          return;
        }
        this.setCurrentView(view);
        $('.agenda-wrapper').removeClass('active');
        this.header.showNavigator();
        this.header.showPrevNext();
        this.header.hideAgendaRecommendation();
        if (view !== 'scheduler' && view !== 'agenda') {
          this.calendar.removeClass('scheduler-mode').removeClass('agenda-mode');
          this.displayAppointmentEvents = null;
          this.scheduler.hide();
          this.header.showAgendaRecommendation();
          this.calendar.show();
          this.schedulerNavigator.hide();
          this.calendar.fullCalendar('refetchEvents');
          this.calendar.fullCalendar('changeView', view === 'week' ? 'agendaWeek' : 'month');
          return this.calendar.fullCalendar('render');
        } else if (view === 'scheduler') {
          this.calendar.addClass('scheduler-mode');
          this.calendar.hide();
          this.header.showSchedulerTitle();
          this.schedulerNavigator.hide();
          return this.scheduler.show();
        } else {
          this.calendar.hide();
          this.scheduler.hide();
          return this.header.hidePrevNext();
        }
      };

      Calendar.prototype.loadAgendaView = function() {
        var date;

        date = this.getCurrentDate();
        return this.agendaViewFetch(date);
      };

      Calendar.prototype.agendaViewFetch = function(start) {
        start.setHours(0);
        start.setMinutes(0);
        start.setSeconds(0);
        this.setDateTitle(I18n.l('#date.formats.medium', start));
        return this.agenda.fetch(this.visibleContextList, start);
      };

      Calendar.prototype.renderDateRange = function(start, end) {
        var _this = this;

        this.setDateTitle(I18n.l('#date.formats.medium', start) + ' &ndash; ' + I18n.l('#date.formats.medium', end));
        return window.setTimeout(function() {
          return $.screenReaderFlashMessage(I18n.t('agenda_view_displaying_start_end', "Now displaying %{start} through %{end}", {
            start: I18n.l('#date.formats.long', start),
            end: I18n.l('#date.formats.long', end)
          }));
        }, 500);
      };

      Calendar.prototype.showSchedulerSingle = function() {
        this.calendar.show();
        this.calendar.fullCalendar('changeView', 'agendaWeek');
        this.header.showDoneButton();
        return this.schedulerNavigator.show();
      };

      Calendar.prototype.schedulerSingleDoneClick = function() {
        this.scheduler.doneClick();
        this.header.showSchedulerTitle();
        return this.schedulerNavigator.hide();
      };

      $styleContainer = $('<div />').appendTo('body');

      Calendar.prototype.colorizeContexts = function() {
        var color, colors, contextCode, html, index;

        colors = colorSlicer.getColors(this.contextCodes.length, 275, {
          unsafe: !ENV.SETTINGS.use_high_contrast
        });
        html = (function() {
          var _i, _len, _ref, _results;

          _ref = this.contextCodes;
          _results = [];
          for (index = _i = 0, _len = _ref.length; _i < _len; index = ++_i) {
            contextCode = _ref[index];
            color = colors[index];
            _results.push(".group_" + contextCode + "{           color: " + color + ";           border-color: " + color + ";           background-color: " + color + ";        }");
          }
          return _results;
        }).call(this);
        return $styleContainer.html("<style>" + (html.join('')) + "</style>");
      };

      Calendar.prototype.dataFromDocumentHash = function() {
        var data, e, fragment;

        data = {};
        try {
          fragment = location.hash.substring(1);
          if (fragment.indexOf('=') !== -1) {
            data = deparam(location.hash.substring(1)) || {};
          } else {
            data = $.parseJSON($.decodeFromHex(location.hash.substring(1))) || {};
          }
        } catch (_error) {
          e = _error;
          data = {};
        }
        return data;
      };

      return Calendar;

    })();
  });

}).call(this);
