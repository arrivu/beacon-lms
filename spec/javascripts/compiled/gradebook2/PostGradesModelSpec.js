(function() {
  define(['compiled/gradebook2/PostGradesModel'], function(PostGradesModel) {
    module("Gradebook2", {
      setup: function() {
        this.assignments = {
          1: {
            id: 1,
            name: "one",
            due_at: null,
            needs_grading_count: 0
          },
          2: {
            id: 2,
            name: "one",
            due_at: null,
            needs_grading_count: 1
          },
          3: {
            id: 3,
            name: "three",
            due_at: new Date(),
            needs_grading_count: 2
          }
        };
        return this.model = new PostGradesModel({
          assignments: this.assignments
        }, {
          course_id: 1,
          integration_course_id: 'xyz'
        });
      }
    });
    test("model not null", function() {
      return ok(this.model !== null, "model should not be null");
    });
    test("assignment_list", function() {
      return ok(this.model.assignment_list().length === 3, "size of assignment list should be 3");
    });
    test("assignments can be ignored", function() {
      this.model.ignore_assignment(1);
      return ok(this.model.assignments_to_post().length === 2, "size of assignments not ignored should be 2");
    });
    test("all assignments can be ignored", function() {
      this.model.ignore_all();
      return ok(this.model.assignments_to_post().length === 1, "all assignments except 'three' should be ignored");
    });
    test("update_assignment", function() {
      ok(!this.model.get('assignments')[1].modified, "assignment 1 should not be not modified");
      ok(!this.model.get('assignments')[2].modified, "assignment 2 should not be not modified");
      ok(!this.model.get('assignments')[3].modified, "assignment 3 should not be not modified");
      this.model.update_assignment(1, {
        due_at: new Date()
      });
      ok(this.model.get('assignments')[1].modified, "assignment 1 should be not modified");
      ok(!this.model.get('assignments')[2].modified, "assignment 2 should not be not modified");
      ok(!this.model.get('assignments')[3].modified, "assignment 3 should not be not modified");
      return ok(this.model.get('assignments')[1].due_at !== null, "assignment 1 should have a due date");
    });
    test("modified_assignments", function() {
      ok(this.model.modified_assignments().length === 0, "should not be any modified assignments yet");
      this.model.update_assignment(1, {
        due_at: new Date()
      });
      return ok(this.model.modified_assignments().length === 1, "should have 1 modified assignment");
    });
    test("assignments_with_errors_count", function() {
      return ok(this.model.assignments_with_errors_count() === 2, "should have 2 assignments with missing due_at");
    });
    test("not_unique_assignments", function() {
      return ok(this.model.not_unique_assignments().length === 2, "should have 2 assignments with same name");
    });
    test("missing_due_date", function() {
      return ok(this.model.missing_due_date().length === 2, "should have 2 assignments missing due date");
    });
    test("missing_and_not_unique", function() {
      var mnu;

      mnu = this.model.missing_and_not_unique().length;
      return ok(mnu === 2, "total assignments w/ errors should be 2 (not " + mnu + ")");
    });
    return test("ungraded_submissions", function() {
      return ok(this.model.ungraded_submissions().length === 2, "ungraded submissions should be 2");
    });
  });

}).call(this);
