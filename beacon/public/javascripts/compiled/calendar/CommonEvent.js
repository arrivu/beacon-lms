(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(['i18n!calendar', 'jquery', 'jquery.ajaxJSON', 'vendor/jquery.ba-tinypubsub'], function(I18n, $) {
    return (function() {
      _Class.prototype.readableTypes = {
        assignment: I18n.t('event_type.assignment', 'Assignment'),
        discussion: I18n.t('event_type.discussion', 'Discussion'),
        event: I18n.t('event_type.event', 'Event'),
        quiz: I18n.t('event_type.quiz', 'Quiz')
      };

      function _Class(data, contextInfo, actualContextInfo) {
        this.save = __bind(this.save, this);
        this.removeClass = __bind(this.removeClass, this);
        this.addClass = __bind(this.addClass, this);
        this.isUndated = __bind(this.isUndated, this);
        this.contextCode = __bind(this.contextCode, this);
        this.isAppointmentGroupEvent = __bind(this.isAppointmentGroupEvent, this);
        this.isAppointmentGroupFilledEvent = __bind(this.isAppointmentGroupFilledEvent, this);
        this.isNewEvent = __bind(this.isNewEvent, this);        this.eventType = 'generic';
        this.contextInfo = contextInfo;
        this.actualContextInfo = actualContextInfo;
        this.allPossibleContexts = null;
        this.className = [];
        this.object = {};
        this.copyDataFromObject(data);
      }

      _Class.prototype.isNewEvent = function() {
        var _ref;

        return this.eventType === 'generic' || !((_ref = this.object) != null ? _ref.id : void 0);
      };

      _Class.prototype.isAppointmentGroupFilledEvent = function() {
        var _ref, _ref1;

        return ((_ref = this.object) != null ? (_ref1 = _ref.child_events) != null ? _ref1.length : void 0 : void 0) > 0;
      };

      _Class.prototype.isAppointmentGroupEvent = function() {
        var _ref;

        return (_ref = this.object) != null ? _ref.appointment_group_url : void 0;
      };

      _Class.prototype.contextCode = function() {
        var _ref, _ref1, _ref2;

        return ((_ref = this.object) != null ? _ref.effective_context_code : void 0) || ((_ref1 = this.object) != null ? _ref1.context_code : void 0) || ((_ref2 = this.contextInfo) != null ? _ref2.asset_string : void 0);
      };

      _Class.prototype.isUndated = function() {
        return this.start === null;
      };

      _Class.prototype.isCompleted = function() {
        return false;
      };

      _Class.prototype.displayTimeString = function() {
        return "";
      };

      _Class.prototype.readableType = function() {
        return "";
      };

      _Class.prototype.fullDetailsURL = function() {
        return null;
      };

      _Class.prototype.startDate = function() {
        return this.originalStart || this.date;
      };

      _Class.prototype.endDate = function() {
        return this.startDate();
      };

      _Class.prototype.possibleContexts = function() {
        return this.allPossibleContexts || [this.contextInfo];
      };

      _Class.prototype.addClass = function(newClass) {
        var c, found, _i, _len, _ref;

        found = false;
        _ref = this.className;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          c = _ref[_i];
          if (c === newClass) {
            found = true;
            break;
          }
        }
        if (!found) {
          return this.className.push(newClass);
        }
      };

      _Class.prototype.removeClass = function(rmClass) {
        var c, idx, _i, _len, _ref, _results;

        idx = 0;
        _ref = this.className;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          c = _ref[_i];
          if (c === rmClass) {
            _results.push(this.className.splice(idx, 1));
          } else {
            _results.push(idx += 1);
          }
        }
        return _results;
      };

      _Class.prototype.save = function(params, success, error) {
        var method, onError, onSuccess, url, _ref,
          _this = this;

        onSuccess = function(data) {
          _this.copyDataFromObject(data);
          $.publish("CommonEvent/eventSaved", _this);
          return typeof success === "function" ? success() : void 0;
        };
        onError = function(data) {
          $.publish("CommonEvent/eventSaveFailed", _this);
          return typeof error === "function" ? error() : void 0;
        };
        _ref = this.methodAndURLForSave(), method = _ref[0], url = _ref[1];
        this.forceMinimumDuration();
        $.publish("CommonEvent/eventSaving", this);
        return $.ajaxJSON(url, method, params, onSuccess, onError);
      };

      _Class.prototype.isDueAtMidnight = function() {
        return this.start && (this.midnightFudged || (this.start.getHours() === 23 && this.start.getMinutes() > 30));
      };

      _Class.prototype.isPast = function() {
        var now;

        now = $.fudgeDateForProfileTimezone(new Date);
        return this.start && this.start < now;
      };

      _Class.prototype.copyDataFromObject = function(data) {
        this.originalStart = (this.start ? new Date(this.start) : void 0);
        this.midnightFudged = false;
        if (this.isDueAtMidnight()) {
          this.midnightFudged = true;
          this.start.setMinutes(30);
          this.start.setSeconds(0);
          if (!this.end) {
            this.end = new Date(this.start.getTime());
          }
        }
        return this.forceMinimumDuration();
      };

      _Class.prototype.forceMinimumDuration = function() {
        var minimumDuration;

        minimumDuration = 30 * 60 * 1000;
        if (this.start && this.end && (this.end.getTime() - this.start.getTime()) < minimumDuration) {
          return this.end = new Date(this.start.getTime() + minimumDuration);
        }
      };

      _Class.prototype.assignmentType = function() {
        var type, _ref;

        if (!this.assignment) {
          return;
        }
        if ((_ref = this.assignment.submission_types) != null ? _ref.length : void 0) {
          type = this.assignment.submission_types[0];
          if (type === 'online_quiz') {
            return 'quiz';
          }
          if (type === 'discussion_topic') {
            return 'discussion';
          }
        }
        return 'assignment';
      };

      _Class.prototype.iconType = function() {
        var type;

        if (type = this.assignmentType()) {
          return type;
        } else {
          return 'calendar-month';
        }
      };

      return _Class;

    })();
  });

}).call(this);
