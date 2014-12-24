(function() {
  require(['jquery', 'compiled/calendar/Calendar', 'compiled/calendar/MiniCalendar', 'compiled/views/calendar/CalendarHeader', 'compiled/calendar/sidebar', 'compiled/calendar/EventDataSource', 'compiled/calendar/UndatedEventsList', 'compiled/bundles/jquery_ui_menu'], function($, Calendar, MiniCalendar, CalendarHeader, drawSidebar, EventDataSource, UndatedEventsList) {
    var keyboardUser,
      _this = this;

    this.eventDataSource = new EventDataSource(ENV.CALENDAR.CONTEXTS);
    this.header = new CalendarHeader({
      el: "#calendar_header",
      calendar2Only: ENV.CALENDAR.CAL2_ONLY,
      showScheduler: ENV.CALENDAR.SHOW_SCHEDULER
    });
    this.calendar = new Calendar("#calendar-app", ENV.CALENDAR.CONTEXTS, ENV.CALENDAR.MANAGE_CONTEXTS, this.eventDataSource, {
      activateEvent: ENV.CALENDAR.ACTIVE_EVENT,
      viewStart: ENV.CALENDAR.VIEW_START,
      showScheduler: ENV.CALENDAR.SHOW_SCHEDULER,
      header: this.header
    });
    new MiniCalendar("#minical", this.calendar);
    new UndatedEventsList("#undated-events", this.eventDataSource, this.calendar);
    drawSidebar(ENV.CALENDAR.CONTEXTS, ENV.CALENDAR.SELECTED_CONTEXTS, this.eventDataSource);
    keyboardUser = true;
    $(".calendar-button").on('mousedown', function(e) {
      keyboardUser = false;
      return $(e.target).find(".accessibility-warning").addClass("screenreader-only");
    });
    $(document).on('keydown', function(e) {
      if (e.which === 9) {
        return keyboardUser = true;
      }
    });
    $(".calendar-button").on("focus", function(e) {
      if (keyboardUser) {
        return $(e.target).find(".accessibility-warning").removeClass("screenreader-only");
      }
    });
    return $(".calendar-button").on("focusout", function(e) {
      return $(e.target).find(".accessibility-warning").addClass("screenreader-only");
    });
  });

}).call(this);
