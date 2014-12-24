(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['underscore', 'compiled/collections/PaginatedCollection', 'compiled/models/Enrollment'], function(_, PaginatedCollection, Enrollment) {
    var EnrollmentCollection, _ref;

    return EnrollmentCollection = (function(_super) {
      __extends(EnrollmentCollection, _super);

      function EnrollmentCollection() {
        _ref = EnrollmentCollection.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      EnrollmentCollection.prototype.model = Enrollment;

      return EnrollmentCollection;

    })(PaginatedCollection);
  });

}).call(this);
