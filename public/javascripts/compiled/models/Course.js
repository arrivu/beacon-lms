(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['underscore', 'Backbone'], function(_, _arg) {
    var Course, Model, _ref;

    Model = _arg.Model;
    return Course = (function(_super) {
      __extends(Course, _super);

      function Course() {
        _ref = Course.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Course.prototype.modelType = 'course';

      Course.prototype.resourceName = 'courses';

      Course.prototype.toJSON = function() {
        return {
          course: _.omit(this.attributes, 'id', 'calendar', 'enrollments', 'workflow_state')
        };
      };

      return Course;

    })(Model);
  });

}).call(this);
