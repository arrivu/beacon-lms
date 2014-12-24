(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone'], function(Backbone) {
    var Submission, _ref;

    return Submission = (function(_super) {
      __extends(Submission, _super);

      function Submission() {
        this.present = __bind(this.present, this);
        this.withoutGradedSubmission = __bind(this.withoutGradedSubmission, this);
        this.hasSubmission = __bind(this.hasSubmission, this);
        this.isGraded = __bind(this.isGraded, this);        _ref = Submission.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Submission.prototype.isGraded = function() {
        return this.get('grade') != null;
      };

      Submission.prototype.hasSubmission = function() {
        return !!this.get('submission_type');
      };

      Submission.prototype.withoutGradedSubmission = function() {
        return !this.hasSubmission() && !this.isGraded();
      };

      Submission.prototype.present = function() {
        var json;

        json = this.toJSON();
        json.submitted_or_graded = !this.withoutGradedSubmission();
        return json;
      };

      return Submission;

    })(Backbone.Model);
  });

}).call(this);
