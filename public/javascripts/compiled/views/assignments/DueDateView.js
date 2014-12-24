(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!overrides', 'Backbone', 'underscore', 'jst/assignments/DueDateView', 'jquery', 'jquery.toJSON', 'jquery.instructure_date_and_time', 'jquery.instructure_forms'], function(I18n, Backbone, _, template, $) {
    var DueDateView, _ref;

    return DueDateView = (function(_super) {
      __extends(DueDateView, _super);

      function DueDateView() {
        this.updateOverride = __bind(this.updateOverride, this);
        this.validateBeforeSave = __bind(this.validateBeforeSave, this);
        this.getFormValues = __bind(this.getFormValues, this);
        this.reRenderSections = __bind(this.reRenderSections, this);
        this.showRemoveButton = __bind(this.showRemoveButton, this);
        this.hideRemoveButton = __bind(this.hideRemoveButton, this);
        this.removeDueDate = __bind(this.removeDueDate, this);
        this.afterRender = __bind(this.afterRender, this);        _ref = DueDateView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      DueDateView.prototype.template = template;

      DueDateView.prototype.tagName = 'li';

      DueDateView.prototype.className = 'due-date-row';

      DueDateView.prototype.events = {
        'click .remove-link': 'removeDueDate'
      };

      DueDateView.prototype.afterRender = function() {
        return this.$el.find('.date_field').datetime_field();
      };

      DueDateView.prototype.removeDueDate = function(event) {
        event.preventDefault();
        this.trigger('remove', this.model);
        return this.remove();
      };

      DueDateView.prototype.hideRemoveButton = function() {
        return this.$el.find('.remove-link').hide();
      };

      DueDateView.prototype.showRemoveButton = function() {
        return this.$el.find('.remove-link').show();
      };

      DueDateView.prototype.reRenderSections = function(sections) {
        return _.each(this.options.views, function(view) {
          view.sections = sections;
          return view.render();
        });
      };

      DueDateView.prototype.getFormValues = function() {
        var dateField, el, errs, json, msg, _i, _len, _ref1, _ref2;

        json = this.$el.find('form').toJSON();
        _ref1 = ['due_at', 'lock_at', 'unlock_at'];
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          dateField = _ref1[_i];
          json[dateField] = $.unfudgeDateForProfileTimezone(json[dateField]);
        }
        errs = this.validateBeforeSave(json, {});
        this.$el.hideErrors();
        _ref2 = errs.assignmentOverrides;
        for (el in _ref2) {
          if (!__hasProp.call(_ref2, el)) continue;
          msg = _ref2[el];
          this.$("[name=" + el + "]").errorBox(msg);
        }
        return json;
      };

      DueDateView.prototype.validateBeforeSave = function(data, errors) {
        var dueAt, errs, lockAt, unlockAt;

        errs = {};
        if (data) {
          lockAt = data.lock_at;
          unlockAt = data.unlock_at;
          dueAt = data.due_at;
          if (lockAt && dueAt && lockAt < dueAt) {
            errs.lock_at = I18n.t('lock_date_before_due_date', 'Lock date cannot be before due date');
          }
          if (unlockAt && dueAt && unlockAt > dueAt) {
            errs.unlock_at = I18n.t('unlock_date_after_due_date', 'Unlock date cannot be after due date');
          } else if (unlockAt && lockAt && unlockAt > lockAt) {
            errs.unlock_at = I18n.t('unlock_date_after_lock_date', 'Unlock date cannot be after lock date');
          }
        }
        if (_.keys(errs).length > 0) {
          errors['assignmentOverrides'] = errs;
        }
        return errors;
      };

      DueDateView.prototype.updateOverride = function() {
        return this.model.set(this.getFormValues());
      };

      return DueDateView;

    })(Backbone.View);
  });

}).call(this);
