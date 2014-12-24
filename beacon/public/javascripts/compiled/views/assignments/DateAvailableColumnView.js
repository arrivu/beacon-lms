(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!assignments', 'Backbone', 'jst/assignments/DateAvailableColumnView', 'jquery', 'underscore', 'compiled/behaviors/tooltip'], function(I18n, Backbone, template, $, _) {
    var DateAvailableColumnView, _ref;

    return DateAvailableColumnView = (function(_super) {
      __extends(DateAvailableColumnView, _super);

      function DateAvailableColumnView() {
        _ref = DateAvailableColumnView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      DateAvailableColumnView.prototype.template = template;

      DateAvailableColumnView.prototype.els = {
        '.vdd_tooltip_link': '$link'
      };

      DateAvailableColumnView.prototype.afterRender = function() {
        return this.$link.tooltip({
          position: {
            my: 'center bottom',
            at: 'center top-10',
            collision: 'fit fit'
          },
          tooltipClass: 'center bottom vertical',
          content: function() {
            return $($(this).data('tooltipSelector')).html();
          }
        });
      };

      DateAvailableColumnView.prototype.toJSON = function() {
        var data, group;

        group = this.model.defaultDates();
        data = this.model.toView();
        data.defaultDates = group.toJSON();
        data.canManage = this.canManage();
        data.selector = this.model.get("id") + "_lock";
        data.linkHref = this.model.htmlUrl();
        data.allDates = this.model.allDates();
        return data;
      };

      DateAvailableColumnView.prototype.canManage = function() {
        return ENV.PERMISSIONS.manage;
      };

      return DateAvailableColumnView;

    })(Backbone.View);
  });

}).call(this);
