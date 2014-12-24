(function() {
  define(['jquery', 'underscore', '../start_app', 'ember', '../shared_ajax_fixtures', '../../controllers/screenreader_gradebook_controller', 'compiled/userSettings', 'vendor/jquery.ba-tinypubsub'], function($, _, startApp, Ember, fixtures, SRGBController, userSettings) {
    var App, calc_stub, calc_stub_with_0_possible, calculationSetup, clone, originalIsDraft, originalWeightingScheme, setup, teardown;

    App = null;
    originalIsDraft = null;
    originalWeightingScheme = null;
    clone = function(obj) {
      return Em.copy(obj, true);
    };
    fixtures.create();
    setup = function(isDraftState, sortOrder) {
      var _this = this;

      if (isDraftState == null) {
        isDraftState = false;
      }
      if (sortOrder == null) {
        sortOrder = 'assignment_group';
      }
      window.ENV.GRADEBOOK_OPTIONS.draft_state_enabled = isDraftState;
      originalWeightingScheme = window.ENV.GRADEBOOK_OPTIONS.group_weighting_scheme;
      this.contextGetStub = sinon.stub(userSettings, 'contextGet');
      this.contextSetStub = sinon.stub(userSettings, 'contextSet');
      this.contextGetStub.withArgs('sort_grade_columns_by').returns({
        sortType: sortOrder
      });
      this.contextSetStub.returns({
        sortType: sortOrder
      });
      App = startApp();
      return Ember.run(function() {
        _this.srgb = SRGBController.create();
        return _this.srgb.set('model', {
          enrollments: Ember.ArrayProxy.create({
            content: clone(fixtures.students)
          }),
          assignment_groups: Ember.ArrayProxy.create({
            content: clone(fixtures.assignment_groups)
          }),
          submissions: Ember.ArrayProxy.create({
            content: []
          }),
          sections: Ember.ArrayProxy.create({
            content: clone(fixtures.sections)
          }),
          outcomes: Ember.ArrayProxy.create({
            content: clone(fixtures.outcomes)
          }),
          outcome_rollups: Ember.ArrayProxy.create({
            content: clone(fixtures.outcome_rollups)
          })
        });
      });
    };
    teardown = function() {
      window.ENV.GRADEBOOK_OPTIONS.draft_state_enabled = false;
      window.ENV.GRADEBOOK_OPTIONS.group_weighting_scheme = originalWeightingScheme;
      this.contextGetStub.restore();
      this.contextSetStub.restore();
      return Ember.run(App, 'destroy');
    };
    module('screenreader_gradebook_controller', {
      setup: function() {
        return setup.call(this);
      },
      teardown: function() {
        return teardown.call(this);
      }
    });
    test('calculates students properly', function() {
      equal(this.srgb.get('students.length'), 10);
      return equal(this.srgb.get('students.firstObject').name, fixtures.students[0].user.name);
    });
    test('calculates assignments properly', function() {
      equal(this.srgb.get('assignments.length'), 7);
      ok(!this.srgb.get('assignments').findBy('name', 'Not Graded'));
      return equal(this.srgb.get('assignments.firstObject').name, fixtures.assignment_groups[0].assignments[0].name);
    });
    test('calculates outcomes properly', function() {
      equal(this.srgb.get('outcomes.length'), 2);
      return equal(this.srgb.get('outcomes.firstObject').title, fixtures.outcomes[0].title);
    });
    test('studentsHash returns the expected hash', function() {
      var _this = this;

      return _.each(this.srgb.studentsHash(), function(obj) {
        return strictEqual(_this.srgb.get('students').findBy('id', obj.id), obj);
      });
    });
    test('assignmentGroupsHash retuns the expected hash', function() {
      var _this = this;

      return _.each(this.srgb.assignmentGroupsHash(), function(obj) {
        return strictEqual(_this.srgb.get('assignment_groups').findBy('id', obj.id), obj);
      });
    });
    test('student objects have isLoaded flag set to true once submissions are loaded', function() {
      return this.srgb.get('students').forEach(function(s) {
        return equal(Ember.get(s, 'isLoaded'), true);
      });
    });
    test('displayName is hiddenName when hideStudentNames is true', function() {
      this.srgb.set('hideStudentNames', true);
      equal(this.srgb.get('displayName'), "hiddenName");
      this.srgb.set('hideStudentNames', false);
      return equal(this.srgb.get('displayName'), "name");
    });
    test('displayPointTotals is false when groups are weighted even if showTotalAsPoints is true', function() {
      var _this = this;

      return Ember.run(function() {
        _this.srgb.set('showTotalAsPoints', true);
        _this.srgb.set('groupsAreWeighted', true);
        return equal(_this.srgb.get('displayPointTotals'), false);
      });
    });
    test('displayPointTotals is toggled by showTotalAsPoints when groups are unweighted', function() {
      var _this = this;

      return Ember.run(function() {
        _this.srgb.set('groupsAreWeighted', false);
        _this.srgb.set('showTotalAsPoints', true);
        equal(_this.srgb.get('displayPointTotals'), true);
        _this.srgb.set('showTotalAsPoints', false);
        return equal(_this.srgb.get('displayPointTotals'), false);
      });
    });
    test('updateSubmission attaches the submission to the student', function() {
      var student, submission;

      student = clone(fixtures.students[0].user);
      submission = clone(fixtures.submissions[student.id].submissions[0]);
      this.srgb.updateSubmission(submission, student);
      return strictEqual(student["assignment_" + submission.assignment_id], submission);
    });
    test('studentsInSelectedSection is the same as students when selectedSection is null', function() {
      ok(!this.srgb.get('selectedSection'));
      return deepEqual(this.srgb.get('students'), this.srgb.get('studentsInSelectedSection'));
    });
    test('selecting a section filters students properly', function() {
      var _this = this;

      Ember.run(function() {
        return _this.srgb.set('selectedSection', _this.srgb.get('sections.lastObject'));
      });
      equal(this.srgb.get('studentsInSelectedSection.length'), 6);
      return equal(this.srgb.get('studentsInSelectedSection.firstObject').name, 'Buffy');
    });
    test('sorting assignments by position', function() {
      var _this = this;

      Ember.run(function() {
        return _this.srgb.set('assignmentSort', _this.srgb.get('assignmentSortOptions').findBy('value', 'assignment_group'));
      });
      equal(this.srgb.get('assignments.firstObject.name'), 'Z Eats Soup');
      return equal(this.srgb.get('assignments.lastObject.name'), 'Da Fish and Chips!');
    });
    test('updates assignment groups and weightingScheme when event is triggered', function() {
      var _this = this;

      window.ENV.GRADEBOOK_OPTIONS.group_weighting_scheme = 'whoa';
      Ember.run(function() {
        return $.publish('assignment_group_weights_changed', {
          assignmentGroups: Ember.copy(fixtures.assignment_groups, true).slice(0, 1)
        });
      });
      equal(this.srgb.get('weightingScheme'), 'whoa', 'weightingScheme was updated');
      return equal(this.srgb.get('assignment_groups.length'), 1, 'assignment_groups was updated');
    });
    module('screenreader_gradebook_controller: sorting alpha', {
      setup: function() {
        return setup.call(this, false, 'alpha');
      },
      teardown: function() {
        return teardown.call(this);
      }
    });
    test('sorting assignments alphabetically', function() {
      var _this = this;

      Ember.run(function() {
        return _this.srgb.set('assignmentSort', _this.srgb.get('assignmentSortOptions').findBy('value', 'alpha'));
      });
      equal(this.srgb.get('assignments.firstObject.name'), 'Apples are good');
      return equal(this.srgb.get('assignments.lastObject.name'), 'Z Eats Soup');
    });
    module('screenreader_gradebook_controller: sorting due_date', {
      setup: function() {
        return setup.call(this, false, 'due_date');
      },
      teardown: function() {
        return teardown.call(this);
      }
    });
    test('sorting assignments by due date', function() {
      var _this = this;

      Ember.run(function() {
        return _this.srgb.set('assignmentSort', _this.srgb.get('assignmentSortOptions').findBy('value', 'due_date'));
      });
      equal(this.srgb.get('assignments.firstObject.name'), 'Can You Eat Just One?');
      return equal(this.srgb.get('assignments.lastObject.name'), 'Drink Water');
    });
    module('screenreader_gradebook_controller: with selected student', {
      setup: function() {
        var _this = this;

        setup.call(this);
        return Ember.run(function() {
          var student;

          student = _this.srgb.get('students.firstObject');
          return _this.srgb.set('selectedStudent', student);
        });
      },
      teardown: function() {
        return teardown.call(this);
      }
    });
    test('selectedSubmission should be null when just selectedStudent is set', function() {
      return strictEqual(this.srgb.get('selectedSubmission'), null);
    });
    module('screenreader_gradebook_controller: with selected student, assignment, and outcome', {
      setup: function() {
        var _this = this;

        setup.call(this);
        return Ember.run(function() {
          _this.student = _this.srgb.get('students.firstObject');
          _this.assignment = _this.srgb.get('assignments.firstObject');
          _this.outcome = _this.srgb.get('outcomes.firstObject');
          _this.srgb.set('selectedStudent', _this.student);
          _this.srgb.set('selectedAssignment', _this.assignment);
          return _this.srgb.set('selectedOutcome', _this.outcome);
        });
      },
      teardown: function() {
        return teardown.call(this);
      }
    });
    test('assignmentDetails is computed properly', function() {
      var ad, selectedAssignment;

      ad = this.srgb.get('assignmentDetails');
      selectedAssignment = this.srgb.get('selectedAssignment');
      strictEqual(ad.assignment, selectedAssignment);
      return strictEqual(ad.cnt, 3);
    });
    test('outcomeDetails is computed properly', function() {
      var od, selectedOutcome;

      od = this.srgb.get('outcomeDetails');
      selectedOutcome = this.srgb.get('selectedOutcome');
      return strictEqual(od.cnt, 1);
    });
    test('selectedSubmission is computed properly', function() {
      var selectedSubmission, sub, submission,
        _this = this;

      selectedSubmission = this.srgb.get('selectedSubmission');
      sub = _.find(fixtures.submissions, function(s) {
        return s.user_id === _this.student.id;
      });
      submission = _.find(sub.submissions, function(s) {
        return s.assignment_id === _this.assignment.id;
      });
      return _.each(submission, function(val, key) {
        return equal(selectedSubmission[key], val, "" + key + " is the expected value on selectedSubmission");
      });
    });
    module('screenreader_gradebook_controller: with selected assignment', {
      setup: function() {
        var _this = this;

        setup.call(this);
        this.assignment = this.srgb.get('assignments.firstObject');
        return Ember.run(function() {
          return _this.srgb.set('selectedAssignment', _this.assignment);
        });
      },
      teardown: function() {
        this.contextGetStub.restore();
        this.contextSetStub.restore();
        return Ember.run(App, 'destroy');
      }
    });
    test('gets the submission types', function() {
      var _this = this;

      equal(this.srgb.get('assignmentSubmissionTypes'), 'None');
      Ember.run(function() {
        var assignments;

        assignments = _this.srgb.get('assignments');
        return _this.srgb.set('selectedAssignment', assignments.objectAt(1));
      });
      return equal(this.srgb.get('assignmentSubmissionTypes'), 'Online URL, Online text entry');
    });
    module('screenreader_gradebook_controller:draftState', {
      setup: function() {
        var _this = this;

        setup.call(this, true);
        return Em.run(function() {
          return _this.srgb.get('assignment_groups').pushObject({
            id: '100',
            name: 'Silent Assignments',
            position: 2,
            assignments: [
              {
                id: '21',
                name: 'Unpublished Assignment',
                points_possible: 10,
                grading_type: "percent",
                submission_types: ["none"],
                due_at: null,
                position: 6,
                assignment_group_id: '4',
                published: false
              }
            ]
          });
        });
      },
      teardown: function() {
        return teardown.call(this);
      }
    });
    test('calculates assignments properly', function() {
      equal(this.srgb.get('assignments.length'), 7);
      return ok(!this.srgb.get('assignments').findBy('name', 'Unpublished Assignment'));
    });
    calc_stub = {
      group_sums: [
        {
          final: {
            possible: 100,
            score: 50,
            submission_count: 10,
            weight: 50,
            submissions: []
          },
          current: {
            possible: 100,
            score: 20,
            submission_count: 5,
            weight: 50,
            submissions: []
          },
          group: {
            id: "1"
          }
        }
      ],
      final: {
        possible: 100,
        score: 90
      },
      current: {
        possible: 88,
        score: 70
      }
    };
    calc_stub_with_0_possible = {
      group_sums: [
        {
          final: {
            possible: 0,
            score: 50,
            submission_count: 10,
            weight: 50,
            submissions: []
          },
          current: {
            possible: 0,
            score: 20,
            submission_count: 5,
            weight: 50,
            submissions: []
          },
          group: {
            id: "1"
          }
        }
      ],
      final: {
        possible: 0,
        score: 0
      },
      current: {
        possible: 0,
        score: 0
      }
    };
    calculationSetup = function(calculationStub) {
      var _this = this;

      if (calculationStub == null) {
        calculationStub = calc_stub;
      }
      App = startApp();
      return Ember.run(function() {
        _this.srgb = SRGBController.create();
        _this.srgb.reopen({
          calculate: function() {
            return calculationStub;
          }
        });
        return _this.srgb.set('model', {
          enrollments: Ember.ArrayProxy.create({
            content: clone(fixtures.students)
          }),
          assignment_groups: Ember.ArrayProxy.create({
            content: clone(fixtures.assignment_groups)
          }),
          submissions: Ember.ArrayProxy.create({
            content: []
          }),
          sections: Ember.ArrayProxy.create({
            content: clone(fixtures.sections)
          })
        });
      });
    };
    module('screenreader_gradebook_controller: grade calc', {
      setup: function() {
        return calculationSetup.call(this);
      }
    });
    test('calculates final grade', function() {
      return equal(this.srgb.get('students.firstObject.total_percent'), 79.5);
    });
    module('grade calc with 0s', {
      setup: function() {
        return calculationSetup.call(this, calc_stub_with_0_possible);
      }
    });
    test('calculates final grade', function() {
      return equal(this.srgb.get('students.firstObject.total_percent'), 0);
    });
    module('screenreader_gradebook_controller: notes computed props', {
      setup: function() {
        var _this = this;

        ENV.GRADEBOOK_OPTIONS.custom_column_url = '/here/is/an/:id';
        ENV.GRADEBOOK_OPTIONS.teacher_notes = {
          id: '42'
        };
        this.server = sinon.fakeServer.create();
        setup.call(this);
        return Ember.run(function() {
          return _this.srgb.reopen({
            updateOrCreateNotesColumn: function() {}
          });
        });
      },
      teardown: function() {
        ENV.GRADEBOOK_OPTIONS.custom_column_url = null;
        ENV.GRADEBOOK_OPTIONS.teacher_notes = null;
        this.server.restore();
        return teardown.call(this);
      }
    });
    test('computes showNotesColumn correctly', function() {
      ENV.GRADEBOOK_OPTIONS.teacher_notes = {
        hidden: false
      };
      equal(this.srgb.get('showNotesColumn'), true);
      ENV.GRADEBOOK_OPTIONS.teacher_notes = {
        hidden: true
      };
      equal(this.srgb.get('showNotesColumn'), false);
      ENV.GRADEBOOK_OPTIONS.teacher_notes = null;
      return equal(this.srgb.get('showNotesColumn'), false);
    });
    test('shouldCreateNotes, no notes in ENV', function() {
      var _this = this;

      ENV.GRADEBOOK_OPTIONS.teacher_notes = null;
      Ember.run(function() {
        return _this.srgb.set('showNotesColumn', true);
      });
      return equal(this.srgb.get('shouldCreateNotes'), true, 'true if no teacher_notes and showNotesColumns is true');
    });
    test('shouldCreateNotes, notes in ENV, hidden', function() {
      var actual,
        _this = this;

      ENV.GRADEBOOK_OPTIONS.teacher_notes = {
        hidden: true
      };
      Ember.run(function() {
        return _this.srgb.set('showNotesColumn', true);
      });
      actual = this.srgb.get('shouldCreateNotes');
      return equal(actual, false, 'does not create if there is a teacher_notes object in the ENV');
    });
    test('shouldCreateNotes, notes in ENV, shown', function() {
      var _this = this;

      ENV.GRADEBOOK_OPTIONS.teacher_notes = {
        hidden: false
      };
      Ember.run(function() {
        return _this.srgb.set('showNotesColumn', true);
      });
      return equal(this.srgb.get('shouldCreateNotes'), false, 'does not create if there is a teacher_notes object in the ENV');
    });
    test('notesURL, no notes object in ENV', function() {
      var _this = this;

      Ember.run(function() {
        return _this.srgb.set('shouldCreateNotes', true);
      });
      equal(this.srgb.get('notesURL'), ENV.GRADEBOOK_OPTIONS.custom_columns_url, 'computes properly when creating');
      Ember.run(function() {
        return _this.srgb.set('shouldCreateNotes', false);
      });
      return equal(this.srgb.get('notesURL'), '/here/is/an/42', 'computes properly when showing');
    });
    test('notesParams', function() {
      var _this = this;

      Ember.run(function() {
        _this.srgb.set('showNotesColumn', true);
        return _this.srgb.set('shouldCreateNotes', false);
      });
      deepEqual(this.srgb.get('notesParams'), {
        "column[hidden]": false
      });
      Ember.run(function() {
        _this.srgb.set('showNotesColumn', false);
        return _this.srgb.set('shouldCreateNotes', false);
      });
      deepEqual(this.srgb.get('notesParams'), {
        "column[hidden]": true
      });
      Ember.run(function() {
        _this.srgb.set('showNotesColumn', true);
        return _this.srgb.set('shouldCreateNotes', true);
      });
      return deepEqual(this.srgb.get('notesParams'), {
        "column[title]": "Notes",
        "column[position]": 1,
        "column[teacher_notes]": true
      });
    });
    test('notesVerb', function() {
      var _this = this;

      Ember.run(function() {
        return _this.srgb.set('shouldCreateNotes', true);
      });
      equal(this.srgb.get('notesVerb'), 'POST');
      Ember.run(function() {
        return _this.srgb.set('shouldCreateNotes', false);
      });
      return equal(this.srgb.get('notesVerb'), 'PUT');
    });
    module('screenreader_gradebook_controller:invalidGroups', {
      setup: function() {
        var _this = this;

        setup.call(this, true);
        return Em.run(function() {
          return _this.srgb.set('assignment_groups', Ember.ArrayProxy.create({
            content: clone(fixtures.assignment_groups)
          }));
        });
      },
      teardown: function() {
        return teardown.call(this);
      }
    });
    test('calculates invalidGroupsWarningPhrases properly', function() {
      return equal(this.srgb.get('invalidGroupsWarningPhrases'), "Note: Score does not include assignments from the group Invalid AG because it has no points possible.");
    });
    test('sets showInvalidGroupWarning to false if groups are not weighted', function() {
      var _this = this;

      return Ember.run(function() {
        _this.srgb.set('weightingScheme', "equal");
        equal(_this.srgb.get('showInvalidGroupWarning'), false);
        _this.srgb.set('weightingScheme', "percent");
        return equal(_this.srgb.get('showInvalidGroupWarning'), true);
      });
    });
    module('screenreader_gradebook_controller: differentiated assignments', {
      setup: function() {
        return setup.call(this, true);
      },
      teardown: function() {
        return teardown.call(this);
      }
    });
    test('selectedSubmissionHidden is false when students have visibility', function() {
      var assignment, student,
        _this = this;

      student = this.srgb.get('students.firstObject');
      assignment = this.srgb.get('assignments.firstObject');
      return Ember.run(function() {
        _this.srgb.set('selectedAssignment', assignment);
        _this.srgb.set('selectedStudent', student);
        return equal(_this.srgb.get('selectedSubmissionHidden'), false);
      });
    });
    return test('selectedSubmissionHidden is false when students have visibility', function() {
      var assignment, student,
        _this = this;

      student = this.srgb.get('students').objectAt(2);
      assignment = this.srgb.get('assignments.firstObject');
      return Ember.run(function() {
        _this.srgb.set('selectedAssignment', assignment);
        _this.srgb.set('selectedStudent', student);
        return equal(_this.srgb.get('selectedSubmissionHidden'), true);
      });
    });
  });

}).call(this);
