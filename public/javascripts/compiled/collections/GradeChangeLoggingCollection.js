(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['compiled/collections/PaginatedCollection'], function(PaginatedCollection) {
    var GradeChangeLoggingCollection, _ref;

    return GradeChangeLoggingCollection = (function(_super) {
      __extends(GradeChangeLoggingCollection, _super);

      function GradeChangeLoggingCollection() {
        _ref = GradeChangeLoggingCollection.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      GradeChangeLoggingCollection.prototype.url = function() {
        return "/api/v1/audit/grade_change/" + this.options.params.type + "/" + this.options.params.id;
      };

      GradeChangeLoggingCollection.prototype.sideLoad = {
        grader: {
          foreignKey: 'grader',
          collection: 'users'
        },
        student: {
          foreignKey: 'student',
          collection: 'users'
        },
        course: {
          foreignKey: 'course',
          collection: 'courses'
        },
        assignment: {
          foreignKey: 'assignment',
          collection: 'assignments'
        }
      };

      return GradeChangeLoggingCollection;

    })(PaginatedCollection);
  });

}).call(this);
