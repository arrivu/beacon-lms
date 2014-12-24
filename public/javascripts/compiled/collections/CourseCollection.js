(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['compiled/collections/PaginatedCollection', 'compiled/models/Course'], function(PaginatedCollection, Course) {
    var CourseCollection, _ref;

    return CourseCollection = (function(_super) {
      __extends(CourseCollection, _super);

      function CourseCollection() {
        _ref = CourseCollection.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      CourseCollection.prototype.url = '/api/v1/courses/';

      CourseCollection.prototype.loadAll = true;

      CourseCollection.prototype.initialize = function() {
        CourseCollection.__super__.initialize.call(this);
        this.setParam('state', ['unpublished', 'available', 'completed']);
        return this.setParam('include', ['term']);
      };

      return CourseCollection;

    })(PaginatedCollection);
  });

}).call(this);
