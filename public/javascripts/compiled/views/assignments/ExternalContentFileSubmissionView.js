(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'i18n!assignments', 'jst/assignments/ExternalContentHomeworkFileSubmissionView', 'compiled/views/assignments/ExternalContentHomeworkSubmissionView'], function($, I18n, template, ExternalContentHomeworkSubmissionView) {
    var ExternalContentFileSubmissionView, _ref;

    return ExternalContentFileSubmissionView = (function(_super) {
      __extends(ExternalContentFileSubmissionView, _super);

      function ExternalContentFileSubmissionView() {
        this.uploadFailure = __bind(this.uploadFailure, this);
        this.uploadSuccess = __bind(this.uploadSuccess, this);
        this.submissionFailure = __bind(this.submissionFailure, this);
        this.disableLoader = __bind(this.disableLoader, this);
        this.redirectSuccessfulAssignment = __bind(this.redirectSuccessfulAssignment, this);
        this.submitAssignment = __bind(this.submitAssignment, this);
        this.checkFileStatus = __bind(this.checkFileStatus, this);
        this.submitHomework = __bind(this.submitHomework, this);        _ref = ExternalContentFileSubmissionView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      ExternalContentFileSubmissionView.prototype.template = template;

      ExternalContentFileSubmissionView.optionProperty('externalTool');

      ExternalContentFileSubmissionView.prototype.submitHomework = function() {
        return this.uploadFileFromUrl(this.externalTool, this.model);
      };

      ExternalContentFileSubmissionView.prototype.checkFileStatus = function(url, callback, error) {
        var _this = this;

        return $.ajaxJSON(url, "GET", {}, (function(data) {
          if (data.upload_status === "ready") {
            callback(data.attachment);
          } else if (data.upload_status === "errored") {
            error(data.message);
          } else {
            setTimeout((function() {
              _this.checkFileStatus(url, callback, error);
            }), 2500);
          }
        }), function(data) {
          return error(data.message);
        });
      };

      ExternalContentFileSubmissionView.prototype.submitAssignment = function(fileData) {
        var data, submissionUrl;

        data = {
          submission: {
            submission_type: "online_upload",
            file_ids: [fileData.id]
          },
          comment: {
            text_comment: this.assignmentSubmission.get('comment')
          }
        };
        submissionUrl = "/api/v1/courses/" + ENV.COURSE_ID + "/assignments/" + ENV.SUBMIT_ASSIGNMENT.ID + "/submissions";
        $.ajaxJSON(submissionUrl, "POST", data, this.redirectSuccessfulAssignment, this.disableLoader);
      };

      ExternalContentFileSubmissionView.prototype.redirectSuccessfulAssignment = function(responseData) {
        window.onbeforeunload = function() {};
        window.location.reload();
        this.loaderPromise.resolve();
      };

      ExternalContentFileSubmissionView.prototype.disableLoader = function() {
        return this.loaderPromise.resolve();
      };

      ExternalContentFileSubmissionView.prototype.submissionFailure = function(message) {
        this.loaderPromise.resolve();
        this.$.find(".submit_button").text(I18n.t("file_retrieval_error", "Retrieving File Failed"));
        return $.flashError(I18n.t("invalid_file_retrieval", "There was a problem retrieving the file sent from this tool."));
      };

      ExternalContentFileSubmissionView.prototype.uploadSuccess = function(data) {
        this.checkFileStatus(data.status_url, this.submitAssignment, this.submissionFailure);
      };

      ExternalContentFileSubmissionView.prototype.uploadFailure = function(data) {
        this.loaderPromise.resolve();
        this.$.find(".submit_button").text(I18n.t("file_retrieval_error", "Retrieving File Failed"));
      };

      ExternalContentFileSubmissionView.prototype.uploadFileFromUrl = function(tool, modelData) {
        var fileParams, fileUploadUrl;

        this.loaderPromise = $.Deferred();
        this.assignmentSubmission = modelData;
        fileParams = {
          url: this.assignmentSubmission.get('url'),
          name: this.assignmentSubmission.get('text'),
          content_type: ''
        };
        fileUploadUrl = "/api/v1/courses/" + ENV.COURSE_ID + "/assignments/" + ENV.SUBMIT_ASSIGNMENT.ID + "/submissions/" + ENV.current_user_id + "/files";
        $.ajaxJSON(fileUploadUrl, "POST", fileParams, this.uploadSuccess, this.uploadFailure);
        this.$el.disableWhileLoading(this.loaderPromise, {
          buttons: {
            ".submit_button": I18n.t("getting_file", "Retrieving File...")
          }
        });
      };

      return ExternalContentFileSubmissionView;

    })(ExternalContentHomeworkSubmissionView);
  });

}).call(this);
