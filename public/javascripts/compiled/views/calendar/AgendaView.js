(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!calendar', 'jquery', 'underscore', 'Backbone', 'compiled/collections/CalendarEventCollection', 'compiled/calendar/ShowEventDetailsDialog', 'jst/calendar/agendaView', 'vendor/jquery.ba-tinypubsub'], function(I18n, $, _, Backbone, CalendarEventCollection, ShowEventDetailsDialog, template) {
    var AgendaView;

    return AgendaView = (function(_super) {
      __extends(AgendaView, _super);

      AgendaView.prototype.PER_PAGE = 50;

      AgendaView.prototype.template = template;

      AgendaView.prototype.els = {
        '.agenda-actions .loading-spinner': '$spinner'
      };

      AgendaView.prototype.events = {
        'click .agenda-load-btn': 'loadMore',
        'click .ig-row': 'manageEvent',
        'keyclick .ig-row': 'manageEvent'
      };

      AgendaView.prototype.messages = {
        loading_more_items: I18n.t('loading_more_items', "Loading more items.")
      };

      AgendaView.optionProperty('calendar');

      function AgendaView() {
        this.eventBoxToHash = __bind(this.eventBoxToHash, this);
        this.formattedLongDayString = __bind(this.formattedLongDayString, this);
        this.formattedDayString = __bind(this.formattedDayString, this);
        this.render = __bind(this.render, this);
        this.loadMoreFinished = __bind(this.loadMoreFinished, this);
        this.appendEvents = __bind(this.appendEvents, this);
        this.handleEvents = __bind(this.handleEvents, this);
        this.refetch = __bind(this.refetch, this);        AgendaView.__super__.constructor.apply(this, arguments);
        this.dataSource = this.options.dataSource;
        $.subscribe({
          "CommonEvent/eventDeleted": this.refetch,
          "CommonEvent/eventSaved": this.refetch
        });
      }

      AgendaView.prototype.fetch = function(contexts, start) {
        if (start == null) {
          start = new Date;
        }
        this.$el.empty();
        this.$el.addClass('active');
        this.contexts = contexts;
        start.setHours(0);
        start.setMinutes(0);
        start.setSeconds(0);
        this.startDate = start;
        return this._fetch(start, this.handleEvents);
      };

      AgendaView.prototype._fetch = function(start, callback) {
        var end;

        end = new Date(3000, 1, 1);
        this.lastRequestID = $.guid++;
        return this.dataSource.getEvents(start, end, this.contexts, callback, {
          singlePage: true,
          requestID: this.lastRequestID
        });
      };

      AgendaView.prototype.refetch = function() {
        if (!this.startDate) {
          return;
        }
        this.collection = [];
        return this._fetch(this.startDate, this.handleEvents);
      };

      AgendaView.prototype.handleEvents = function(events) {
        if (events.requestID !== this.lastRequestID) {
          return;
        }
        this.collection = [];
        return this.appendEvents(events);
      };

      AgendaView.prototype.appendEvents = function(events) {
        this.nextPageDate = events.nextPageDate;
        this.collection.push.apply(this.collection, events);
        this.collection = _.sortBy(this.collection, 'originalStart');
        return this.render();
      };

      AgendaView.prototype.loadMore = function(e) {
        e.preventDefault();
        this.$spinner.show();
        this._fetch(this.nextPageDate, this.loadMoreFinished);
        return $.screenReaderFlashMessage(this.messages.loading_more_items);
      };

      AgendaView.prototype.loadMoreFinished = function(events) {
        this.appendEvents(events);
        return this.focusFirstNewDate(events);
      };

      AgendaView.prototype.focusFirstNewDate = function(events) {
        var $firstEvent, $firstEventDay, $firstEventDayDate, firstNewEvent;

        firstNewEvent = _.min(events, function(e) {
          return e.start;
        });
        $firstEvent = this.$("li[data-event-id='" + firstNewEvent.id + "']");
        $firstEventDay = $firstEvent.closest('.agenda-day');
        $firstEventDayDate = $firstEventDay.find('.agenda-date');
        if ($firstEventDayDate.length) {
          return $firstEventDayDate[0].focus();
        }
      };

      AgendaView.prototype.manageEvent = function(e) {
        var event, eventId;

        eventId = $(e.target).closest('.agenda-event').data('event-id');
        event = this.dataSource.eventWithId(eventId);
        return new ShowEventDetailsDialog(event, this.dataSource).show(e);
      };

      AgendaView.prototype.render = function() {
        var lastEvent;

        AgendaView.__super__.render.apply(this, arguments);
        this.$spinner.hide();
        $.publish('Calendar/colorizeContexts');
        lastEvent = _.last(this.collection);
        if (!lastEvent) {
          return;
        }
        return this.trigger('agendaDateRange', this.startDate, lastEvent.originalStart);
      };

      AgendaView.prototype.sortedBoxBy = function(list, iterator) {
        return _.reduce(list, function(result, currentElt) {
          var previousBox, previousElt;

          if (_.isEmpty(result)) {
            return [[currentElt]];
          }
          previousBox = _.last(result);
          previousElt = _.last(previousBox);
          if (iterator(currentElt) === iterator(previousElt)) {
            previousBox.push(currentElt);
          } else {
            result.push([currentElt]);
          }
          return result;
        }, []);
      };

      AgendaView.prototype.formattedDayString = function(event) {
        return I18n.l('#date.formats.short_with_weekday', event.originalStart);
      };

      AgendaView.prototype.formattedLongDayString = function(event) {
        return I18n.l('#date.formats.long_with_weekday', event.originalStart);
      };

      AgendaView.prototype.eventBoxToHash = function(events) {
        var event, isToday, now, start;

        now = $.fudgeDateForProfileTimezone(new Date);
        event = _.first(events);
        start = event.originalStart;
        isToday = now.getDate() === start.getDate() && now.getMonth() === start.getMonth() && now.getFullYear() === start.getFullYear();
        return {
          date: this.formattedDayString(event),
          accessibleDate: this.formattedLongDayString(event),
          isToday: isToday,
          events: events
        };
      };

      AgendaView.prototype.formatResult = function(boxedEvents) {
        return {
          days: _.map(boxedEvents, this.eventBoxToHash),
          meta: {
            hasMore: !!this.nextPageDate
          }
        };
      };

      AgendaView.prototype.toJSON = function() {
        var list;

        list = this.sortedBoxBy(this.collection, this.formattedDayString);
        return this.formatResult(list);
      };

      return AgendaView;

    })(Backbone.View);
  });

}).call(this);
