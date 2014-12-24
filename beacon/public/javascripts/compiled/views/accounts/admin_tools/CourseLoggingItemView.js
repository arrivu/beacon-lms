(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'Backbone', 'i18n!course_logging', 'jst/accounts/admin_tools/courseLoggingItem'], function($, Backbone, I18n, template) {
    var CourseLoggingItemView, _ref;

    return CourseLoggingItemView = (function(_super) {
      __extends(CourseLoggingItemView, _super);

      function CourseLoggingItemView() {
        _ref = CourseLoggingItemView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      CourseLoggingItemView.prototype.tagName = 'tr';

      CourseLoggingItemView.prototype.className = 'logitem';

      CourseLoggingItemView.prototype.template = template;

      return CourseLoggingItemView;

    })(Backbone.View);
  });

}).call(this);
