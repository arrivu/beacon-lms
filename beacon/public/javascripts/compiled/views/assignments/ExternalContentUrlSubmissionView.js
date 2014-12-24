(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'jst/assignments/ExternalContentHomeworkUrlSubmissionView', 'compiled/views/assignments/ExternalContentHomeworkSubmissionView'], function($, template, ExternalContentHomeworkSubmissionView) {
    var ExternalContentUrlSubmissionView, _ref;

    return ExternalContentUrlSubmissionView = (function(_super) {
      __extends(ExternalContentUrlSubmissionView, _super);

      function ExternalContentUrlSubmissionView() {
        this.redirectSuccessfulAssignment = __bind(this.redirectSuccessfulAssignment, this);
        this.submitHomework = __bind(this.submitHomework, this);        _ref = ExternalContentUrlSubmissionView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      ExternalContentUrlSubmissionView.prototype.template = template;

      ExternalContentUrlSubmissionView.optionProperty('externalTool');

      ExternalContentUrlSubmissionView.prototype.submitHomework = function() {
        var data, submissionUrl;

        data = {
          submission: {
            submission_type: "online_url",
            url: this.model.get('url')
          },
          comment: {
            text_comment: this.model.get('comment')
          }
        };
        submissionUrl = "/api/v1/courses/" + ENV.COURSE_ID + "/assignments/" + ENV.SUBMIT_ASSIGNMENT.ID + "/submissions";
        return $.ajaxJSON(submissionUrl, "POST", data, this.redirectSuccessfulAssignment);
      };

      ExternalContentUrlSubmissionView.prototype.redirectSuccessfulAssignment = function(responseData) {
        window.onbeforeunload = function() {};
        return window.location.reload();
      };

      return ExternalContentUrlSubmissionView;

    })(ExternalContentHomeworkSubmissionView);
  });

}).call(this);
