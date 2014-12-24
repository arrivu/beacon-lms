(function() {
  define(['compiled/models/Submission'], function(Submission) {
    module("Submission");
    module("Submission#isGraded");
    test("returns false if grade is null", function() {
      var submission;

      submission = new Submission({
        grade: null
      });
      return deepEqual(submission.isGraded(), false);
    });
    test("returns true if grade is present", function() {
      var submission;

      submission = new Submission({
        grade: 'A'
      });
      return deepEqual(submission.isGraded(), true);
    });
    module("Submission#hasSubmission");
    test("returns false if submission type is null", function() {
      var submission;

      submission = new Submission({
        submission_type: null
      });
      return deepEqual(submission.hasSubmission(), false);
    });
    return test("returns true if submission has a submission type", function() {
      var submission;

      submission = new Submission({
        submission_type: 'online'
      });
      return deepEqual(submission.hasSubmission(), true);
    });
  });

}).call(this);
