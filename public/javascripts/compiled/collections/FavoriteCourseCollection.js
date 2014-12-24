(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['compiled/collections/PaginatedCollection', 'compiled/models/Course'], function(PaginatedCollection, Course) {
    var FavoriteCourseCollection, _ref;

    return FavoriteCourseCollection = (function(_super) {
      __extends(FavoriteCourseCollection, _super);

      function FavoriteCourseCollection() {
        _ref = FavoriteCourseCollection.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      FavoriteCourseCollection.prototype.url = '/api/v1/users/self/favorites/courses/';

      return FavoriteCourseCollection;

    })(PaginatedCollection);
  });

}).call(this);
