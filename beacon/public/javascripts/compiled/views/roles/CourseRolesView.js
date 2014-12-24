(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'Backbone', 'jst/roles/courseRoles'], function($, _, Backbone, template) {
    var CourseRolesView, _ref;

    return CourseRolesView = (function(_super) {
      __extends(CourseRolesView, _super);

      function CourseRolesView() {
        _ref = CourseRolesView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      CourseRolesView.prototype.template = template;

      return CourseRolesView;

    })(Backbone.View);
  });

}).call(this);
