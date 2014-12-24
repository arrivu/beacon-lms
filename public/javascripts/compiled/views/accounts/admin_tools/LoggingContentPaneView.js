(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'jquery', 'compiled/views/accounts/admin_tools/AuthLoggingContentPaneView', 'compiled/views/accounts/admin_tools/GradeChangeLoggingContentView', 'compiled/views/accounts/admin_tools/CourseLoggingContentView', 'jst/accounts/admin_tools/loggingContentPane'], function(Backbone, $, AuthLoggingContentPaneView, GradeChangeLoggingContentView, CourseLoggingContentView, template) {
    var LoggingContentPaneView;

    return LoggingContentPaneView = (function(_super) {
      __extends(LoggingContentPaneView, _super);

      LoggingContentPaneView.child('authentication', '#loggingAuthentication');

      LoggingContentPaneView.child('gradeChange', '#loggingGradeChange');

      LoggingContentPaneView.child('course', '#loggingCourse');

      LoggingContentPaneView.prototype.events = {
        'change #loggingType': 'onTypeChange'
      };

      LoggingContentPaneView.prototype.template = template;

      function LoggingContentPaneView(options) {
        this.options = options;
        LoggingContentPaneView.__super__.constructor.apply(this, arguments);
        this.permissions = this.options.permissions;
        this.authentication = this.initAuthLogging();
        this.gradeChange = this.initGradeChangeLogging();
        this.course = this.initCourseLogging();
      }

      LoggingContentPaneView.prototype.afterRender = function() {
        return this.$el.find(".loggingTypeContent").hide();
      };

      LoggingContentPaneView.prototype.toJSON = function() {
        return this.permissions;
      };

      LoggingContentPaneView.prototype.onTypeChange = function(e) {
        var $target, value;

        $target = $(e.target);
        value = $target.val();
        this.$el.find(".loggingTypeContent").hide();
        this.$el.find(value).show().find("input").first().focus();
        return $target.find('[value=default]').remove();
      };

      LoggingContentPaneView.prototype.initAuthLogging = function() {
        if (!this.permissions.authentication) {
          return new Backbone.View;
        }
        return new AuthLoggingContentPaneView({
          users: this.options.users
        });
      };

      LoggingContentPaneView.prototype.initGradeChangeLogging = function() {
        if (!this.permissions.grade_change) {
          return new Backbone.View;
        }
        return new GradeChangeLoggingContentView({
          users: this.options.users
        });
      };

      LoggingContentPaneView.prototype.initCourseLogging = function() {
        if (!this.permissions.course) {
          return new Backbone.View;
        }
        return new CourseLoggingContentView;
      };

      return LoggingContentPaneView;

    })(Backbone.View);
  });

}).call(this);
