(function() {
  define(['jquery', 'underscore', 'compiled/collections/SectionCollection', 'compiled/models/Assignment', 'compiled/models/DueDateList', 'compiled/models/Section', 'compiled/views/assignments/AssignmentGroupSelector', 'compiled/views/assignments/DueDateList', 'compiled/views/assignments/DueDateOverride', 'compiled/views/assignments/EditView', 'compiled/views/assignments/GradingTypeSelector', 'compiled/views/assignments/GroupCategorySelector', 'compiled/views/assignments/PeerReviewsSelector', 'helpers/fakeENV', 'compiled/userSettings', 'helpers/jquery.simulate'], function($, _, SectionCollection, Assignment, DueDateList, Section, AssignmentGroupSelector, DueDateListView, DueDateOverrideView, EditView, GradingTypeSelector, GroupCategorySelector, PeerReviewsSelector, fakeENV, userSettings) {
    var defaultAssignmentOpts, editView;

    defaultAssignmentOpts = {
      name: 'Test Assignment',
      assignment_overrides: []
    };
    editView = function(assignmentOpts) {
      var app, assignment, assignmentGroupSelector, dueDateList, gradingTypeSelector, groupCategorySelector, peerReviewsSelector, sectionList;

      if (assignmentOpts == null) {
        assignmentOpts = {};
      }
      assignmentOpts = _.extend({}, assignmentOpts, defaultAssignmentOpts);
      assignment = new Assignment(assignmentOpts);
      sectionList = new SectionCollection([Section.defaultDueDateSection()]);
      dueDateList = new DueDateList(assignment.get('assignment_overrides'), sectionList, assignment);
      assignmentGroupSelector = new AssignmentGroupSelector({
        parentModel: assignment,
        assignmentGroups: (typeof ENV !== "undefined" && ENV !== null ? ENV.ASSIGNMENT_GROUPS : void 0) || []
      });
      gradingTypeSelector = new GradingTypeSelector({
        parentModel: assignment
      });
      groupCategorySelector = new GroupCategorySelector({
        parentModel: assignment,
        groupCategories: (typeof ENV !== "undefined" && ENV !== null ? ENV.GROUP_CATEGORIES : void 0) || []
      });
      peerReviewsSelector = new PeerReviewsSelector({
        parentModel: assignment
      });
      app = new EditView({
        model: assignment,
        assignmentGroupSelector: assignmentGroupSelector,
        gradingTypeSelector: gradingTypeSelector,
        groupCategorySelector: groupCategorySelector,
        peerReviewsSelector: peerReviewsSelector,
        views: {
          'js-assignment-overrides': new DueDateOverrideView({
            model: dueDateList,
            views: {
              'due-date-overrides': new DueDateListView({
                model: dueDateList
              })
            }
          })
        }
      });
      sinon.stub(app, "_initializeWikiSidebar");
      return app.render();
    };
    module('EditView', {
      setup: function() {
        return fakeENV.setup();
      },
      teardown: function() {
        return fakeENV.teardown();
      }
    });
    test('renders', function() {
      var view;

      view = editView();
      return equal(view.$('#assignment_name').val(), 'Test Assignment');
    });
    test('rejects a letter for points_possible', function() {
      var data, errors, view;

      view = editView();
      data = {
        points_possible: 'a'
      };
      errors = view.validateBeforeSave(data, []);
      return equal(errors['points_possible'][0]['message'], 'Points possible must be a number');
    });
    test('does not allow group assignment for large rosters', function() {
      var view;

      ENV.IS_LARGE_ROSTER = true;
      view = editView();
      return equal(view.$("#group_category_selector").length, 0);
    });
    test('does not allow peer review for large rosters', function() {
      var view;

      ENV.IS_LARGE_ROSTER = true;
      view = editView();
      return equal(view.$("#assignment_peer_reviews_fields").length, 0);
    });
    test('adds and removes student group', function() {
      var view;

      ENV.GROUP_CATEGORIES = [
        {
          id: 1,
          name: "fun group"
        }
      ];
      ENV.ASSIGNMENT_GROUPS = [
        {
          id: 1,
          name: "assignment group 1"
        }
      ];
      view = editView();
      return equal(view.assignment.toView()['groupCategoryId'], null);
    });
    test('does not allow point valid of 0 or less if grading type is percentage', function() {
      var data, errors, view;

      view = editView();
      data = {
        points_possible: '0',
        grading_type: 'percent'
      };
      errors = view.validateBeforeSave(data, []);
      return equal(errors['points_possible'][0]['message'], 'Points possible must be more than 0 for selected grading type');
    });
    test('does not allow point valid of 0 or less if grading type is letter', function() {
      var data, errors, view;

      view = editView();
      data = {
        points_possible: '0',
        grading_type: 'letter_grade'
      };
      errors = view.validateBeforeSave(data, []);
      return equal(errors['points_possible'][0]['message'], 'Points possible must be more than 0 for selected grading type');
    });
    test('does not allow point valid of 0 or less if grading type is gpa scale', function() {
      var data, errors, view;

      view = editView();
      data = {
        points_possible: '0',
        grading_type: 'gpa_scale'
      };
      errors = view.validateBeforeSave(data, []);
      equal(errors['points_possible'][0]['message'], 'Points possible must be more than 0 for selected grading type');
      view.$('#has_group_category').click();
      return equal(view.getFormData()['groupCategoryId'], null);
    });
    test('renders escaped angle brackets properly', function() {
      var desc, view;

      desc = "<p>&lt;E&gt;</p>";
      view = editView({
        description: "<p>&lt;E&gt;</p>"
      });
      return equal(view.$description.val().match(desc), desc);
    });
    module('EditView: group category locked', {
      setup: function() {
        fakeENV.setup();
        return window.addGroupCategory = sinon.stub();
      },
      teardown: function() {
        fakeENV.teardown();
        return window.addGroupCategory = null;
      }
    });
    test('lock down group category after students submit', function() {
      var view;

      view = editView({
        has_submitted_submissions: true
      });
      ok(view.$(".group_category_locked_explanation").length);
      ok(view.$("#has_group_category").prop("disabled"));
      ok(view.$("#assignment_group_category_id").prop("disabled"));
      ok(!view.$("[type=checkbox][name=grade_group_students_individually]").prop("disabled"));
      view = editView({
        has_submitted_submissions: false
      });
      equal(view.$(".group_category_locked_explanation").length, 0);
      ok(!view.$("#has_group_category").prop("disabled"));
      ok(!view.$("#assignment_group_category_id").prop("disabled"));
      return ok(!view.$("[type=checkbox][name=grade_group_students_individually]").prop("disabled"));
    });
    module('EditView: setDefaultsIfNew', {
      setup: function() {
        fakeENV.setup();
        return sinon.stub(userSettings, 'contextGet').returns({
          submission_types: "foo",
          peer_reviews: "1",
          assignment_group_id: 99
        });
      },
      teardown: function() {
        userSettings.contextGet.restore();
        return fakeENV.teardown();
      }
    });
    test('returns values from localstorage', function() {
      var view;

      view = editView();
      view.setDefaultsIfNew();
      return equal(view.assignment.get('submission_types'), "foo");
    });
    test('returns string booleans as integers', function() {
      var view;

      view = editView();
      view.setDefaultsIfNew();
      return equal(view.assignment.get('peer_reviews'), 1);
    });
    test('doesnt overwrite existing assignment settings', function() {
      var view;

      view = editView();
      view.assignment.set('assignment_group_id', 22);
      view.setDefaultsIfNew();
      return equal(view.assignment.get('assignment_group_id'), 22);
    });
    test('will overwrite empty arrays', function() {
      var view;

      view = editView();
      view.assignment.set('submission_types', []);
      view.setDefaultsIfNew();
      return equal(view.assignment.get('submission_types'), "foo");
    });
    module('EditView: setDefaultsIfNew: no localStorage', {
      setup: function() {
        fakeENV.setup();
        return sinon.stub(userSettings, 'contextGet').returns(null);
      },
      teardown: function() {
        userSettings.contextGet.restore();
        return fakeENV.teardown();
      }
    });
    test('submission_type is online if no cache', function() {
      var view;

      view = editView();
      view.setDefaultsIfNew();
      return equal(view.assignment.get('submission_type'), "online");
    });
    module('EditView: cacheAssignmentSettings', {
      setup: function() {
        return fakeENV.setup();
      },
      teardown: function() {
        return fakeENV.teardown();
      }
    });
    test('saves valid attributes to localstorage', function() {
      var view;

      view = editView();
      sinon.stub(view, 'getFormData').returns({
        points_possible: 34
      });
      userSettings.contextSet("new_assignment_settings", {});
      view.cacheAssignmentSettings();
      return equal(34, userSettings.contextGet("new_assignment_settings")["points_possible"]);
    });
    return test('rejects invalid attributes when caching', function() {
      var view;

      view = editView();
      sinon.stub(view, 'getFormData').returns({
        invalid_attribute_example: 30
      });
      userSettings.contextSet("new_assignment_settings", {});
      view.cacheAssignmentSettings();
      return equal(null, userSettings.contextGet("new_assignment_settings")["invalid_attribute_example"]);
    });
  });

}).call(this);
