(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(['i18n!calendar', 'jquery', 'jst/calendar/undatedEvents', 'compiled/calendar/EventDataSource', 'compiled/calendar/ShowEventDetailsDialog', 'jqueryui/draggable', 'jquery.disableWhileLoading', 'vendor/jquery.ba-tinypubsub'], function(I18n, $, undatedEventsTemplate, EventDataSource, ShowEventDetailsDialog) {
    var UndatedEventsList;

    return UndatedEventsList = (function() {
      function UndatedEventsList(selector, dataSource, calendar) {
        var toggler;

        this.dataSource = dataSource;
        this.calendar = calendar;
        this.eventSaved = __bind(this.eventSaved, this);
        this.eventSaving = __bind(this.eventSaving, this);
        this.visibleContextListChanged = __bind(this.visibleContextListChanged, this);
        this.clickEvent = __bind(this.clickEvent, this);
        this.toggle = __bind(this.toggle, this);
        this.show = __bind(this.show, this);
        this.load = __bind(this.load, this);
        this.div = $(selector).html(undatedEventsTemplate({
          unloaded: true
        }));
        this.hidden = true;
        this.visibleContextList = [];
        $.subscribe({
          "CommonEvent/eventDeleting": this.eventSaving,
          "CommonEvent/eventDeleted": this.eventSaved,
          "CommonEvent/eventSaving": this.eventSaving,
          "CommonEvent/eventSaved": this.eventSaved,
          "Calendar/visibleContextListChanged": this.visibleContextListChanged
        });
        this.div.on('click keyclick', '.event', this.clickEvent).on('click', '.undated_event_title', this.clickEvent).on('click', '.undated-events-link', this.show);
        if (toggler = this.div.prev('.element_toggler')) {
          toggler.on('click keyclick', this.toggle);
          this.div.find('.undated-events-link').hide();
        }
      }

      UndatedEventsList.prototype.load = function(setFocus) {
        var loadingDfd, loadingTimer,
          _this = this;

        if (setFocus == null) {
          setFocus = false;
        }
        if (this.hidden) {
          return;
        }
        loadingDfd = new $.Deferred();
        this.div.disableWhileLoading(loadingDfd, {
          buttons: ['.undated-events-link'],
          opacity: 1,
          lines: 8,
          length: 2,
          width: 2,
          radius: 3
        });
        loadingTimer = setTimeout(function() {
          return $.screenReaderFlashMessage(I18n.t('loading_undated_events', 'Loading undated events'));
        }, 0);
        return this.dataSource.getEvents(null, null, this.visibleContextList, function(events) {
          var e, _i, _j, _len, _len1;

          clearTimeout(loadingTimer);
          loadingDfd.resolve();
          for (_i = 0, _len = events.length; _i < _len; _i++) {
            e = events[_i];
            e.details_url = e.fullDetailsURL();
            e.icon = e.iconType();
          }
          _this.div.html(undatedEventsTemplate({
            events: events
          }));
          for (_j = 0, _len1 = events.length; _j < _len1; _j++) {
            e = events[_j];
            _this.div.find("." + e.id).data('calendarEvent', e);
          }
          _this.div.find('.event').draggable({
            revert: 'invalid',
            revertDuration: 0,
            helper: 'clone',
            start: function() {
              _this.calendar.closeEventPopups();
              return $(_this).hide();
            },
            stop: function(e, ui) {
              if (!$(this).data('calendarEvent').start) {
                return $(this).show();
              }
            }
          });
          _this.div.droppable({
            hoverClass: 'droppable-hover',
            accept: '.fc-event',
            drop: function(e, ui) {
              var event;

              if (!(event = _this.calendar.lastEventDragged)) {
                return;
              }
              event.start = null;
              event.end = null;
              return event.saveDates();
            }
          });
          if (setFocus) {
            return _this.div.find('.undated_event_title:first').focus();
          }
        });
      };

      UndatedEventsList.prototype.show = function(event) {
        var setFocus;

        event.preventDefault();
        this.hidden = false;
        return this.load(setFocus = true);
      };

      UndatedEventsList.prototype.toggle = function(e) {
        var _this = this;

        return setTimeout(function() {
          var setFocus;

          _this.hidden = !_this.div.is(':visible');
          return _this.load(setFocus = true);
        }, 0);
      };

      UndatedEventsList.prototype.clickEvent = function(jsEvent) {
        var event, eventId;

        jsEvent.preventDefault();
        eventId = $(jsEvent.target).data('event-id');
        eventId || (eventId = $(jsEvent.target).closest('.event').data('event-id'));
        event = this.dataSource.eventWithId(eventId);
        if (event) {
          return new ShowEventDetailsDialog(event, this.dataSource).show(jsEvent);
        }
      };

      UndatedEventsList.prototype.visibleContextListChanged = function(list) {
        this.visibleContextList = list;
        if (!this.hidden) {
          return this.load();
        }
      };

      UndatedEventsList.prototype.eventSaving = function(event) {
        return this.div.find("." + event.id).addClass('event_pending');
      };

      UndatedEventsList.prototype.eventSaved = function() {
        return this.load();
      };

      return UndatedEventsList;

    })();
  });

}).call(this);
