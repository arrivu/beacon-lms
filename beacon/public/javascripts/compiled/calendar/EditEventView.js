(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'i18n!calendar.edit', 'timezone', 'Backbone', 'jst/calendar/editCalendarEventFull', 'compiled/views/calendar/MissingDateDialogView', 'wikiSidebar', 'compiled/object/unflatten', 'compiled/util/deparam', 'tinymce.editor_box', 'compiled/tinymce'], function($, _, I18n, tz, Backbone, editCalendarEventFullTemplate, MissingDateDialogView, wikiSidebar, unflatten, deparam) {
    var EditCalendarEventView, _ref;

    return EditCalendarEventView = (function(_super) {
      __extends(EditCalendarEventView, _super);

      function EditCalendarEventView() {
        this.toggleUseSectionDates = __bind(this.toggleUseSectionDates, this);
        this.toggleUsingSectionClass = __bind(this.toggleUsingSectionClass, this);
        this.destroyModel = __bind(this.destroyModel, this);
        this.render = __bind(this.render, this);        _ref = EditCalendarEventView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      EditCalendarEventView.prototype.el = $('#content');

      EditCalendarEventView.prototype.template = editCalendarEventFullTemplate;

      EditCalendarEventView.prototype.events = {
        'submit form': 'submit',
        'change #use_section_dates': 'toggleUseSectionDates',
        'click .delete_link': 'destroyModel',
        'click .switch_event_description_view': 'toggleHtmlView'
      };

      EditCalendarEventView.prototype.initialize = function() {
        var _this = this;

        EditCalendarEventView.__super__.initialize.apply(this, arguments);
        this.model.fetch().done(function() {
          var attrs, picked_params, _ref1;

          picked_params = _.pick(deparam(), 'start_date', 'start_time', 'end_time', 'title', 'description', 'location_name', 'location_address');
          attrs = _this.model.parse(picked_params);
          attrs.all_day = !!((_ref1 = attrs.start_at) != null ? _ref1.equals(attrs.end_at) : void 0) && attrs.start_at.equals(attrs.start_at.clearTime());
          _this.model.set(attrs);
          _this.render();
          return _.each(_.keys(picked_params), function(key) {
            var $e;

            $e = _this.$el.find("input[name='" + key + "']");
            $e.val(picked_params[key]);
            return $e.change();
          });
        });
        return this.model.on('change:use_section_dates', this.toggleUsingSectionClass);
      };

      EditCalendarEventView.prototype.render = function() {
        var $textarea;

        EditCalendarEventView.__super__.render.apply(this, arguments);
        this.$(".date_field").date_field();
        this.$(".time_field").time_field();
        $textarea = this.$('textarea').editorBox();
        if (!wikiSidebar.inited) {
          wikiSidebar.init();
        }
        wikiSidebar.attachToEditor($textarea).show();
        return this;
      };

      EditCalendarEventView.prototype.destroyModel = function() {
        var msg,
          _this = this;

        msg = I18n.t("confirm_delete_calendar_event", "Are you sure you want to delete this calendar event?");
        if (confirm(msg)) {
          return this.$el.disableWhileLoading(this.model.destroy({
            success: function() {
              return _this.redirectWithMessage(I18n.t('event_deleted', "%{event_title} deleted successfully", {
                event_title: _this.model.get('title')
              }));
            }
          }));
        }
      };

      EditCalendarEventView.prototype.toggleUsingSectionClass = function() {
        this.$('#editCalendarEventFull').toggleClass('use_section_dates', this.model.get('use_section_dates'));
        return $('.show_if_using_sections input').prop('disabled', !this.model.get('use_section_dates'));
      };

      EditCalendarEventView.prototype.toggleUseSectionDates = function(e) {
        this.model.set('use_section_dates', !this.model.get('use_section_dates'));
        return this.updateRemoveChildEvents(e);
      };

      EditCalendarEventView.prototype.toggleHtmlView = function(event) {
        if (event != null) {
          event.preventDefault();
        }
        $("textarea[name=description]").editorBox('toggle');
        return $(event.currentTarget).siblings('a').andSelf().toggle();
      };

      EditCalendarEventView.prototype.updateRemoveChildEvents = function(e) {
        var value;

        value = $(e.target).prop('checked') ? '' : '1';
        return $('input[name=remove_child_events]').val(value);
      };

      EditCalendarEventView.prototype.redirectWithMessage = function(message) {
        $.flashMessage(message);
        if (this.model.get('return_to_url')) {
          return window.location = this.model.get('return_to_url');
        }
      };

      EditCalendarEventView.prototype.submit = function(event) {
        var dialog, eventData,
          _this = this;

        if (event != null) {
          event.preventDefault();
        }
        eventData = unflatten(this.getFormData());
        eventData.use_section_dates = eventData.use_section_dates === '1';
        if (eventData.remove_child_events === '1') {
          delete eventData.child_event_data;
        }
        if ($('#use_section_dates').prop('checked')) {
          dialog = new MissingDateDialogView({
            validationFn: function() {
              var $fields;

              $fields = $('[name*=start_date]:visible').filter(function() {
                return $(this).val() === '';
              });
              if ($fields.length > 0) {
                return $fields;
              } else {
                return true;
              }
            },
            labelFn: function(input) {
              return $(input).parents('tr').prev().find('label').text();
            },
            success: function($dialog) {
              $dialog.dialog('close');
              _this.$el.disableWhileLoading(_this.model.save(eventData, {
                success: function() {
                  return _this.redirectWithMessage(I18n.t('event_saved', 'Event Saved Successfully'));
                }
              }));
              return $dialog.remove();
            }
          });
          if (dialog.render()) {
            return;
          }
        }
        return this.saveEvent(eventData);
      };

      EditCalendarEventView.prototype.saveEvent = function(eventData) {
        var _this = this;

        return this.$el.disableWhileLoading(this.model.save(eventData, {
          success: function() {
            return _this.redirectWithMessage(I18n.t('event_saved', 'Event Saved Successfully'));
          }
        }));
      };

      EditCalendarEventView.prototype.getFormData = function() {
        var data, keys,
          _this = this;

        data = this.$el.getFormData();
        keys = _.filter(_.keys(data), (function(key) {
          return /start_date/.test(key);
        }));
        _.each(keys, function(start_date_key) {
          var end_at, end_at_key, end_time, end_time_key, start_at, start_at_key, start_date, start_time, start_time_key;

          start_time_key = start_date_key.replace(/start_date/, 'start_time');
          end_time_key = start_date_key.replace(/start_date/, 'end_time');
          start_at_key = start_date_key.replace(/start_date/, 'start_at');
          end_at_key = start_date_key.replace(/start_date/, 'end_at');
          start_date = _this.$el.find("[name='" + start_date_key + "']").data('date');
          start_time = _this.$el.find("[name='" + start_time_key + "']").data('date');
          end_time = _this.$el.find("[name='" + end_time_key + "']").data('date');
          if (!start_date) {
            return;
          }
          data = _.omit(data, start_date_key, start_time_key, end_time_key);
          start_at = start_date.toString('yyyy-MM-dd');
          if (start_time) {
            start_at += start_time.toString(' HH:mm');
          }
          data[start_at_key] = tz.parse(start_at);
          end_at = start_date.toString('yyyy-MM-dd');
          if (end_time) {
            end_at += end_time.toString(' HH:mm');
          }
          return data[end_at_key] = tz.parse(end_at);
        });
        return data;
      };

      EditCalendarEventView.type = 'event';

      EditCalendarEventView.title = function() {
        return EditCalendarEventView.__super__.constructor.title.call(this, 'event', 'Event');
      };

      return EditCalendarEventView;

    })(Backbone.View);
  });

}).call(this);
