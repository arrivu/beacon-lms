(function() {
  define(['compiled/models/AssignmentGroup', 'compiled/models/Assignment', 'compiled/collections/AssignmentGroupCollection', 'compiled/models/Course', 'helpers/fakeENV'], function(AssignmentGroup, Assignment, AssignmentGroupCollection, Course, fakeENV) {
    var COURSE_SUBMISSIONS_URL;

    COURSE_SUBMISSIONS_URL = "/courses/1/submissions";
    module("AssignmentGroupCollection", {
      setup: function() {
        var id;

        fakeENV.setup();
        this.server = sinon.fakeServer.create();
        this.assignments = (function() {
          var _i, _results;

          _results = [];
          for (id = _i = 1; _i <= 4; id = ++_i) {
            _results.push(new Assignment({
              id: id
            }));
          }
          return _results;
        })();
        this.group = new AssignmentGroup({
          assignments: this.assignments
        });
        return this.collection = new AssignmentGroupCollection([this.group], {
          courseSubmissionsURL: COURSE_SUBMISSIONS_URL
        });
      },
      teardown: function() {
        fakeENV.teardown();
        return this.server.restore();
      }
    });
    test("::model is AssignmentGroup", function() {
      return strictEqual(AssignmentGroupCollection.prototype.model, AssignmentGroup);
    });
    test("default params include assignments and not discussion topics", function() {
      var include;

      include = AssignmentGroupCollection.prototype.defaults.params.include;
      return deepEqual(include, ["assignments"], "include only contains assignments");
    });
    test("optionProperties", function() {
      var collection, course;

      course = new Course;
      collection = new AssignmentGroupCollection([], {
        course: course,
        courseSubmissionsURL: COURSE_SUBMISSIONS_URL
      });
      strictEqual(collection.courseSubmissionsURL, COURSE_SUBMISSIONS_URL, "assigns courseSubmissionsURL to this.courseSubmissionsURL");
      return strictEqual(collection.course, course, "assigns course to this.course");
    });
    return test("(#getGrades) loading grades from the server", function() {
      var assignment, id, lastAssignment, submissions, triggeredChangeForAssignmentWithoutSubmission, _i, _len, _ref;

      triggeredChangeForAssignmentWithoutSubmission = false;
      submissions = (function() {
        var _i, _results;

        _results = [];
        for (id = _i = 1; _i <= 3; id = ++_i) {
          _results.push({
            id: id,
            assignment_id: id,
            grade: id
          });
        }
        return _results;
      })();
      this.server.respondWith("GET", "" + COURSE_SUBMISSIONS_URL + "?per_page=50", [
        200, {
          "Content-Type": "application/json"
        }, JSON.stringify(submissions)
      ]);
      lastAssignment = this.assignments[3];
      lastAssignment.on('change:submission', function() {
        return triggeredChangeForAssignmentWithoutSubmission = true;
      });
      this.collection.getGrades();
      this.server.respond();
      _ref = this.assignments;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        assignment = _ref[_i];
        if (assignment.get("id") === 4) {
          continue;
        }
        equal(assignment.get("submission").get("grade"), assignment.get("id"), "sets submission grade for assignments with a matching submission");
      }
      return ok(triggeredChangeForAssignmentWithoutSubmission, "triggers change for assignments without a matching submission grade\nso the UI can update");
    });
  });

}).call(this);
