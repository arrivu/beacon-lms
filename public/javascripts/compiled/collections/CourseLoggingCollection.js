(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['compiled/collections/PaginatedCollection', 'compiled/models/CourseEvent'], function(PaginatedCollection, CourseEvent) {
    var CourseLoggingCollection, _ref;

    return CourseLoggingCollection = (function(_super) {
      __extends(CourseLoggingCollection, _super);

      function CourseLoggingCollection() {
        _ref = CourseLoggingCollection.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      CourseLoggingCollection.prototype.model = CourseEvent;

      CourseLoggingCollection.prototype.url = function() {
        return "/api/v1/audit/course/courses/" + this.options.params.id;
      };

      CourseLoggingCollection.prototype.sideLoad = {
        course: true,
        user: true,
        copied_to: {
          collection: 'courses'
        },
        copied_from: {
          collection: 'courses'
        },
        reset_to: {
          collection: 'courses'
        },
        reset_from: {
          collection: 'courses'
        }
      };

      return CourseLoggingCollection;

    })(PaginatedCollection);
  });

}).call(this);
