(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!calendar', 'jquery', 'underscore', 'Backbone', 'jst/calendar/calendarNavigator'], function(I18n, $, _, Backbone, template) {
    var CalendarNavigator, _ref;

    return CalendarNavigator = (function(_super) {
      __extends(CalendarNavigator, _super);

      function CalendarNavigator() {
        this._onPickerClose = __bind(this._onPickerClose, this);
        this._onPickerSelect = __bind(this._onPickerSelect, this);
        this._flashDateSuggestion = __bind(this._flashDateSuggestion, this);
        this._onDateFieldKey = __bind(this._onDateFieldKey, this);
        this.setTitle = __bind(this.setTitle, this);
        this.hide = __bind(this.hide, this);
        this.show = __bind(this.show, this);        _ref = CalendarNavigator.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      CalendarNavigator.prototype.template = template;

      CalendarNavigator.prototype.els = {
        '.navigation_title': '$title',
        '.navigation_buttons': '$buttons',
        '.date_field': '$dateField',
        '.date_field_wrapper': '$dateWrapper'
      };

      CalendarNavigator.prototype.events = {
        'click .navigate_prev': '_triggerPrev',
        'click .navigate_today': '_triggerToday',
        'click .navigate_next': '_triggerNext',
        'click .navigation_title': '_onTitleClick',
        'keyclick .navigation_title': '_onTitleClick'
      };

      CalendarNavigator.prototype.messages = {
        invalid_date: I18n.t('input_is_invalid_date', "Input is not a valid date."),
        screenreader_date_suggestion: function(dateText) {
          return I18n.t('screenreader_date_suggestion', '%{date}. Press enter to accept.', {
            date: dateText
          });
        }
      };

      CalendarNavigator.prototype.initialize = function() {
        CalendarNavigator.__super__.initialize.apply(this, arguments);
        this.render();
        this._flashDateSuggestion = _.debounce(this._flashDateSuggestion, 1500);
        this.$buttons.buttonset();
        this.$dateField.keydown(this._onDateFieldKey);
        this.$dateField.date_field({
          datepicker: {
            onClose: this._onPickerClose,
            onSelect: this._onPickerSelect,
            showOn: "both"
          }
        });
        this.$dateSuggestion = this.$('.datetime_suggest');
        this.hidePicker();
        if (this.options.hide) {
          return this.hide();
        }
      };

      CalendarNavigator.prototype.show = function(visible) {
        if (visible == null) {
          visible = true;
        }
        return this.$el.toggle(visible);
      };

      CalendarNavigator.prototype.hide = function() {
        return this.show(false);
      };

      CalendarNavigator.prototype.setTitle = function(new_text) {
        return this.$title.html(new_text);
      };

      CalendarNavigator.prototype.showPicker = function(visible) {
        if (visible == null) {
          visible = true;
        }
        this._pickerShowing = visible;
        this.$title.toggle(!visible);
        this.$dateWrapper.toggle(visible);
        if (visible) {
          this._resetPicker();
          return this.$dateField.focus();
        } else {
          this.$dateField.realDatepicker("hide");
          return this.$title.focus();
        }
      };

      CalendarNavigator.prototype.hidePicker = function() {
        return this.showPicker(false);
      };

      CalendarNavigator.prototype.showPrevNext = function() {
        return this.$buttons.show();
      };

      CalendarNavigator.prototype.hidePrevNext = function() {
        return this.$buttons.hide();
      };

      CalendarNavigator.prototype._resetPicker = function() {
        this._enterKeyPressed = false;
        this._enterKeyValue = '';
        this._previousDateFieldValue = '';
        this.$dateField.removeAttr('aria-invalid');
        return this.$dateField.val('');
      };

      CalendarNavigator.prototype._titleActivated = function() {
        return this.showPicker();
      };

      CalendarNavigator.prototype._dateFieldSelect = function(selectedDateText) {
        var selectedDate;

        if (this._enterKeyPressed) {
          selectedDateText = this._enterKeyValue;
        }
        if (!selectedDateText) {
          return this._dateFieldEscape();
        }
        selectedDate = Date.parse(selectedDateText);
        this._triggerDate(selectedDate);
        return this.hidePicker();
      };

      CalendarNavigator.prototype._dateFieldEscape = function() {
        return this.hidePicker();
      };

      CalendarNavigator.prototype._triggerPrev = function(event) {
        return this.trigger('navigatePrev');
      };

      CalendarNavigator.prototype._triggerToday = function(event) {
        return this.trigger('navigateToday');
      };

      CalendarNavigator.prototype._triggerNext = function(event) {
        return this.trigger('navigateNext');
      };

      CalendarNavigator.prototype._triggerDate = function(selectedDate) {
        return this.trigger('navigateDate', selectedDate);
      };

      CalendarNavigator.prototype._onTitleClick = function(event) {
        event.preventDefault();
        return this._titleActivated();
      };

      CalendarNavigator.prototype._onDateFieldKey = function(event) {
        if (event.keyCode === 13) {
          this._enterKeyPressed = true;
          return this._enterKeyValue = this._getDateText();
        } else {
          return this._flashDateSuggestion();
        }
      };

      CalendarNavigator.prototype._flashDateSuggestion = function() {
        var dateText, flashText, textInvalid;

        if (!this._pickerShowing) {
          return;
        }
        if (this._previousDateFieldValue === this.$dateField.val()) {
          return;
        }
        this._previousDateFieldValue = this.$dateField.val();
        dateText = this._getDateText();
        textInvalid = !dateText;
        flashText = textInvalid ? this.messages.invalid_date : this.messages.screenreader_date_suggestion(dateText);
        $.screenReaderFlashMessage(flashText);
        return this.$dateField.attr("aria-invalid", textInvalid ? "true" : "false");
      };

      CalendarNavigator.prototype._onPickerSelect = function(selectedDateText) {
        return this._dateFieldSelect(selectedDateText);
      };

      CalendarNavigator.prototype._onPickerClose = function(selectedDateText) {
        return this._dateFieldEscape();
      };

      CalendarNavigator.prototype._getDateText = function() {
        var newDate;

        newDate = this.$dateSuggestion.text();
        if (this.$dateSuggestion.is('.invalid_datetime')) {
          newDate = '';
        }
        return newDate;
      };

      return CalendarNavigator;

    })(Backbone.View);
  });

}).call(this);
