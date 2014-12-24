(function() {
  require(['jquery', 'underscore', 'timezone', 'vendor/timezone/America/Denver', 'compiled/views/calendar/AgendaView', 'compiled/calendar/EventDataSource', 'helpers/ajax_mocks/api/v1/calendarEvents', 'helpers/ajax_mocks/api/v1/calendarAssignments'], function($, _, tz, denver, AgendaView, EventDataSource, eventResponse, assignmentResponse) {
    var loadEventPage, sendCustomEvents;

    loadEventPage = function(server, includeNext) {
      if (includeNext == null) {
        includeNext = false;
      }
      return sendCustomEvents(server, eventResponse, assignmentResponse, includeNext);
    };
    sendCustomEvents = function(server, events, assignments, includeNext, requestIndex) {
      if (includeNext == null) {
        includeNext = false;
      }
      if (requestIndex == null) {
        requestIndex = 0;
      }
      server.requests[requestIndex].respond(200, {
        'Content-Type': 'application/json',
        'Link': '</api/magic>; rel="' + (includeNext ? 'next' : 'current') + '"'
      }, events);
      return server.requests[requestIndex + 1].respond(200, {
        'Content-Type': 'application/json'
      }, assignments);
    };
    module("AgendaView", {
      setup: function() {
        this.container = $('<div />', {
          id: 'agenda-wrapper'
        }).appendTo('#fixtures');
        this.contexts = [
          {
            "asset_string": "user_1"
          }, {
            "asset_string": "course_2"
          }, {
            "asset_string": "group_3"
          }
        ];
        this.contextCodes = ["user_1", "course_2", "group_3"];
        this.startDate = new Date();
        this.startDate.setYear(2001);
        this.dataSource = new EventDataSource(this.contexts);
        this.server = sinon.fakeServer.create();
        this.snapshot = tz.snapshot();
        return tz.changeZone(denver, 'America/Denver');
      },
      teardown: function() {
        this.container.remove();
        this.server.restore();
        return tz.restore(this.snapshot);
      }
    });
    test('should render results', function() {
      var view;

      view = new AgendaView({
        el: this.container,
        dataSource: this.dataSource
      });
      view.fetch(this.contextCodes, this.startDate);
      loadEventPage(this.server);
      ok(this.container.find('.ig-row').length === 18, 'finds 18 ig-rows');
      ok(this.container.find('.agenda-date').length === view.toJSON().days.length);
      return ok(!this.container.find('.agenda-load-btn').length, 'does not find the loader');
    });
    test('should show "load more" if there are more results', function() {
      var view;

      view = new AgendaView({
        el: this.container,
        dataSource: this.dataSource
      });
      view.fetch(this.contextCodes, this.startDate);
      loadEventPage(this.server, true);
      return ok(this.container.find('.agenda-load-btn').length);
    });
    test('toJSON should properly serialize results', function() {
      var serialized, view;

      view = new AgendaView({
        el: this.container,
        dataSource: this.dataSource
      });
      view.fetch(this.contextCodes, this.startDate);
      loadEventPage(this.server);
      serialized = view.toJSON();
      ok(_.isArray(serialized.days), 'days is an array');
      ok(_.isObject(serialized.meta), 'meta is an object');
      ok(_.uniq(serialized.days).length === serialized.days.length, 'does not duplicate dates');
      ok(serialized.days[0].date === 'Mon, Oct 7', 'finds the correct first day');
      return _.each(serialized.days, function(d) {
        return ok(d.events.length, 'every day has events');
      });
    });
    return test('should omit days on page breaks', function() {
      var addEvents, date, events, i, id, view, _i, _j;

      view = new AgendaView({
        el: this.container,
        dataSource: this.dataSource
      });
      window.view = view;
      view.fetch(this.contextCodes, this.startDate);
      id = 1;
      addEvents = function(events, date) {
        var i, _i, _results;

        _results = [];
        for (i = _i = 1; _i <= 10; i = ++_i) {
          _results.push(events.push({
            start_at: date.toISOString(),
            context_code: 'user_1',
            id: id++
          }));
        }
        return _results;
      };
      date = new Date();
      events = [];
      for (i = _i = 1; _i <= 5; i = ++_i) {
        date.setFullYear(date.getFullYear() + 1);
        addEvents(events, date);
      }
      sendCustomEvents(this.server, JSON.stringify(events), JSON.stringify([]), true);
      ok(this.container.find('.ig-row').length === 40, 'finds 40 ig-rows');
      ok(this.container.find('.agenda-load-btn').length);
      view.loadMore({
        preventDefault: $.noop
      });
      events = [];
      for (i = _j = 1; _j <= 2; i = ++_j) {
        addEvents(events, date);
        date.setFullYear(date.getFullYear() + 1);
      }
      sendCustomEvents(this.server, JSON.stringify(events), JSON.stringify([]), false, 2);
      return ok(this.container.find('.ig-row').length === 60, 'finds 60 ig-rows');
    });
  });

}).call(this);
