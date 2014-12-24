(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'jquery', 'i18n!user_date_range_search', 'jst/accounts/admin_tools/dateRangeSearch', 'jquery.instructure_date_and_time'], function(Backbone, $, I18n, template) {
    var DateRangeSearchView;

    return DateRangeSearchView = (function(_super) {
      __extends(DateRangeSearchView, _super);

      DateRangeSearchView.prototype.template = template;

      DateRangeSearchView.prototype.els = {
        '.dateSearchField': '$dateSearchFields'
      };

      DateRangeSearchView.prototype.toJSON = function() {
        return {
          name: this.options.name
        };
      };

      function DateRangeSearchView(options) {
        this.options = options;
        DateRangeSearchView.__super__.constructor.apply(this, arguments);
      }

      DateRangeSearchView.prototype.afterRender = function() {
        return this.$dateSearchFields.datetime_field();
      };

      DateRangeSearchView.prototype.validate = function(json) {
        var errors;

        json || (json = this.$el.toJSON());
        errors = {};
        if (json.start_time && json.end_time && (json.start_time > json.end_time)) {
          errors['end_time'] = [
            {
              type: 'invalid',
              message: I18n.t('cant_come_before_from', "'To Date' can't come before 'From Date'")
            }
          ];
        }
        return errors;
      };

      return DateRangeSearchView;

    })(Backbone.View);
  });

}).call(this);
