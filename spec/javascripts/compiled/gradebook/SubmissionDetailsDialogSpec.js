(function() {
  define(['jquery', 'compiled/models/Assignment', 'compiled/SubmissionDetailsDialog', 'jst/SubmissionDetailsDialog'], function($, Assignment, SubmissionDetailsDialog) {
    module('SubmissionDetailsDialog', {
      setup: function() {
        this.assignment = new Assignment({
          id: 1
        });
        this.user = {
          assignment_1: {},
          id: 1,
          name: 'Test student'
        };
        return this.options = {
          speed_grader_enabled: true,
          change_grade_url: 'magic'
        };
      },
      teardown: function() {
        return $('.submission_details_dialog').remove();
      }
    });
    test('speed_grader_enabled sets speedgrader url', function() {
      var dialog;

      dialog = new SubmissionDetailsDialog(this.assignment, this.user, {
        speed_grader_enabled: true,
        change_grade_url: ':assignment/:student'
      });
      ok(dialog.submission.speedGraderUrl);
      dialog.open();
      return equal(dialog.dialog.find('.more-details-link').length, 1);
    });
    test('speed_grader_enabled as false does not set speedgrader url', function() {
      var dialog;

      dialog = new SubmissionDetailsDialog(this.assignment, this.user, {
        speed_grader_enabled: false,
        change_grade_url: ':assignment/:student'
      });
      equal(dialog.submission.speedGraderUrl, null);
      dialog.open();
      return equal(dialog.dialog.find('.more-details-link').length, 0);
    });
    test('lateness correctly passes through to the template', function() {
      var dialog;

      this.assignment = new Assignment({
        id: 1,
        name: 'Test assignment',
        due_at: "2014-04-14T00:00:00Z"
      });
      this.user = {
        assignment_1: {
          submitted_at: "2014-04-20T00:00:00Z",
          late: true
        },
        id: 1,
        name: 'Test student'
      };
      dialog = new SubmissionDetailsDialog(this.assignment, this.user, this.options);
      dialog.open();
      return ok(dialog.dialog.find('.submission-details').text().match('LATE'));
    });
    module('_submission_detail', {
      setup: function() {
        this.assignment = new Assignment({
          id: 1
        });
        return this.options = {
          speed_grader_enabled: true,
          change_grade_url: 'magic'
        };
      },
      teardown: function() {
        return $('.submission_details_dialog').remove();
      }
    });
    test('partial correctly makes url field if submission type is url', function() {
      var dialog;

      this.user = {
        assignment_1: {
          submission_history: [
            {
              submission_type: "online_url",
              url: "www.cnn.com"
            }
          ]
        },
        id: 1,
        name: 'Test student'
      };
      dialog = new SubmissionDetailsDialog(this.assignment, this.user, {
        speed_grader_enabled: true,
        change_grade_url: ':assignment/:student'
      });
      dialog.open();
      return equal(dialog.dialog.find('.url-submission').length, 1);
    });
    return test('partial correctly makes attachment fields if submission included attachments', function() {
      var dialog;

      this.user = {
        assignment_1: {
          submission_history: [
            {
              submission_type: "online_url",
              attachments: [{}, {}, {}]
            }
          ]
        },
        id: 1,
        name: 'Test student'
      };
      dialog = new SubmissionDetailsDialog(this.assignment, this.user, {
        speed_grader_enabled: true,
        change_grade_url: ':assignment/:student'
      });
      dialog.open();
      return equal(dialog.dialog.find('.submisison-attachment').length, 3);
    });
  });

}).call(this);
