(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['compiled/collections/PaginatedCollection', 'compiled/models/Submission'], function(PaginatedCollection, Submission) {
    var SubmissionCollection, _ref;

    return SubmissionCollection = (function(_super) {
      __extends(SubmissionCollection, _super);

      function SubmissionCollection() {
        _ref = SubmissionCollection.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      SubmissionCollection.prototype.model = Submission;

      return SubmissionCollection;

    })(PaginatedCollection);
  });

}).call(this);
