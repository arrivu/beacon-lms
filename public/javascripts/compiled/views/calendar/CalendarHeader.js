(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!calendar', 'jquery', 'Backbone', 'jst/calendar/calendarHeader', 'compiled/views/calendar/CalendarNavigator'], function(I18n, $, Backbone, template, CalendarNavigator) {
    var CalendarHeader, _ref;

    return CalendarHeader = (function(_super) {
      __extends(CalendarHeader, _super);

      function CalendarHeader() {
        this.animateLoading = __bind(this.animateLoading, this);
        this.setHeaderText = __bind(this.setHeaderText, this);        _ref = CalendarHeader.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      CalendarHeader.prototype.template = template;

      CalendarHeader.prototype.els = {
        '.calendar_view_buttons': '$calendarViewButtons',
        '.recommend_agenda': '$recommendAgenda',
        '.calendar_navigator': '$navigator',
        '.appointment_group_title': '$appointmentGroupTitle',
        '.scheduler_done_button': '$schedulerDoneButton',
        '#create_new_event_link': '$createNewEventLink',
        '#refresh_calendar_link': '$refreshCalendarLink'
      };

      CalendarHeader.prototype.events = {
        'click #week': '_triggerWeek',
        'click #month': '_triggerMonth',
        'click #agenda': '_triggerAgenda',
        'click #use_agenda': '_selectAgenda',
        'click #scheduler': '_triggerScheduler',
        'click .scheduler_done_button': '_triggerDone',
        'click #create_new_event_link': '_triggerCreateNewEvent',
        'click #refresh_calendar_link': '_triggerRefreshCalendar'
      };

      CalendarHeader.prototype.initialize = function() {
        CalendarHeader.__super__.initialize.apply(this, arguments);
        this.render();
        this.navigator = new CalendarNavigator({
          el: this.$navigator
        });
        this.showNavigator();
        this.$badge = this.$el.find('.counter-badge');
        this.setSchedulerBadgeCount(0);
        return this.connectEvents();
      };

      CalendarHeader.prototype.connectEvents = function() {
        var _this = this;

        this.navigator.on('navigatePrev', function() {
          return _this.trigger('navigatePrev');
        });
        this.navigator.on('navigateToday', function() {
          return _this.trigger('navigateToday');
        });
        this.navigator.on('navigateNext', function() {
          return _this.trigger('navigateNext');
        });
        this.navigator.on('navigateDate', function(selectedDate) {
          return _this.trigger('navigateDate', selectedDate);
        });
        this.$calendarViewButtons.on('click', 'button', this.toggleView);
        $.subscribe('Calendar/loadStatus', this.animateLoading);
        return this.$schedulerDoneButton;
      };

      CalendarHeader.prototype.toggleView = function(e) {
        var $target;

        e.preventDefault();
        $target = $(this);
        $target.attr('aria-checked', true).addClass('active');
        return $target.siblings().attr('aria-checked', false).removeClass('active');
      };

      CalendarHeader.prototype.showNavigator = function() {
        this.$navigator.show();
        this.$createNewEventLink.show();
        this.$appointmentGroupTitle.hide();
        return this.$schedulerDoneButton.hide();
      };

      CalendarHeader.prototype.showSchedulerTitle = function() {
        this.$navigator.hide();
        this.$createNewEventLink.hide();
        this.$appointmentGroupTitle.show();
        return this.$schedulerDoneButton.hide();
      };

      CalendarHeader.prototype.showDoneButton = function() {
        this.$navigator.hide();
        this.$createNewEventLink.hide();
        this.$appointmentGroupTitle.hide();
        return this.$schedulerDoneButton.show();
      };

      CalendarHeader.prototype.showAgendaRecommendation = function() {
        return this.$recommendAgenda.show();
      };

      CalendarHeader.prototype.hideAgendaRecommendation = function() {
        return this.$recommendAgenda.hide();
      };

      CalendarHeader.prototype.setHeaderText = function(newText) {
        return this.navigator.setTitle(newText);
      };

      CalendarHeader.prototype.selectView = function(viewName) {
        return $("#" + viewName).click();
      };

      CalendarHeader.prototype.animateLoading = function(shouldAnimate) {
        return this.$refreshCalendarLink.toggleClass('loading', shouldAnimate);
      };

      CalendarHeader.prototype.setSchedulerBadgeCount = function(badgeCount) {
        return this.$badge.toggle(badgeCount > 0).text(badgeCount);
      };

      CalendarHeader.prototype.showPrevNext = function() {
        return this.navigator.showPrevNext();
      };

      CalendarHeader.prototype.hidePrevNext = function() {
        return this.navigator.hidePrevNext();
      };

      CalendarHeader.prototype._selectAgenda = function(event) {
        return this.selectView('agenda');
      };

      CalendarHeader.prototype._triggerDone = function(event) {
        return this.trigger('done');
      };

      CalendarHeader.prototype._triggerWeek = function(event) {
        return this.trigger('week');
      };

      CalendarHeader.prototype._triggerMonth = function(event) {
        return this.trigger('month');
      };

      CalendarHeader.prototype._triggerAgenda = function(event) {
        return this.trigger('agenda');
      };

      CalendarHeader.prototype._triggerScheduler = function(event) {
        return this.trigger('scheduler');
      };

      CalendarHeader.prototype._triggerCreateNewEvent = function(event) {
        event.preventDefault();
        return this.trigger('createNewEvent');
      };

      CalendarHeader.prototype._triggerRefreshCalendar = function(event) {
        event.preventDefault();
        return this.trigger('refreshCalendar');
      };

      return CalendarHeader;

    })(Backbone.View);
  });

}).call(this);
