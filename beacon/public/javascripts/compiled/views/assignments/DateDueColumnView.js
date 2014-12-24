(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!assignments', 'Backbone', 'jst/assignments/DateDueColumnView', 'jquery', 'compiled/behaviors/tooltip'], function(I18n, Backbone, template, $) {
    var DateDueColumnView, _ref;

    return DateDueColumnView = (function(_super) {
      __extends(DateDueColumnView, _super);

      function DateDueColumnView() {
        _ref = DateDueColumnView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      DateDueColumnView.prototype.template = template;

      DateDueColumnView.prototype.els = {
        '.vdd_tooltip_link': '$link'
      };

      DateDueColumnView.prototype.afterRender = function() {
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

      DateDueColumnView.prototype.toJSON = function() {
        var data;

        data = this.model.toView();
        data.canManage = this.canManage();
        data.selector = this.model.get("id") + "_due";
        data.linkHref = this.model.htmlUrl();
        data.allDates = this.model.allDates();
        return data;
      };

      DateDueColumnView.prototype.canManage = function() {
        return ENV.PERMISSIONS.manage;
      };

      return DateDueColumnView;

    })(Backbone.View);
  });

}).call(this);
