(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'compiled/models/Assignment', 'compiled/models/Submission', 'compiled/views/assignments/AssignmentListItemView', 'jquery', 'helpers/fakeENV', 'helpers/jquery.simulate'], function(Backbone, Assignment, Submission, AssignmentListItemView, $, fakeENV) {
    var AssignmentCollection, assignment1, assignment2, assignment3, assignment_grade_letter_grade, assignment_grade_not_graded, assignment_grade_pass_fail, assignment_grade_percent, buildAssignment, createView, fixtures, genModules, genSetup, genTeardown, nonScreenreaderText, screenreaderText, _ref;

    screenreaderText = null;
    nonScreenreaderText = null;
    fixtures = $('#fixtures');
    AssignmentCollection = (function(_super) {
      __extends(AssignmentCollection, _super);

      function AssignmentCollection() {
        _ref = AssignmentCollection.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      AssignmentCollection.prototype.model = Assignment;

      return AssignmentCollection;

    })(Backbone.Collection);
    assignment1 = function() {
      var ac, date1, date2;

      date1 = {
        "due_at": "2013-08-28T23:59:00-06:00",
        "title": "Summer Session"
      };
      date2 = {
        "due_at": "2013-08-28T23:59:00-06:00",
        "title": "Winter Session"
      };
      ac = new AssignmentCollection([
        buildAssignment({
          "id": 1,
          "name": "History Quiz",
          "description": "test",
          "due_at": "2013-08-21T23:59:00-06:00",
          "points_possible": 2,
          "position": 1,
          "all_dates": [date1, date2]
        })
      ]);
      return ac.at(0);
    };
    assignment2 = function() {
      var ac;

      ac = new AssignmentCollection([
        buildAssignment({
          "id": 3,
          "name": "Math Quiz",
          "due_at": "2013-08-23T23:59:00-06:00",
          "points_possible": 10,
          "position": 2
        })
      ]);
      return ac.at(0);
    };
    assignment3 = function() {
      var ac;

      ac = new AssignmentCollection([
        buildAssignment({
          "id": 2,
          "name": "Science Quiz",
          "points_possible": 5,
          "position": 3
        })
      ]);
      return ac.at(0);
    };
    assignment_grade_percent = function() {
      var ac;

      ac = new AssignmentCollection([
        buildAssignment({
          "id": 2,
          "name": "Science Quiz",
          "grading_type": "percent"
        })
      ]);
      return ac.at(0);
    };
    assignment_grade_pass_fail = function() {
      var ac;

      ac = new AssignmentCollection([
        buildAssignment({
          "id": 2,
          "name": "Science Quiz",
          "grading_type": "pass_fail"
        })
      ]);
      return ac.at(0);
    };
    assignment_grade_letter_grade = function() {
      var ac;

      ac = new AssignmentCollection([
        buildAssignment({
          "id": 2,
          "name": "Science Quiz",
          "grading_type": "letter_grade"
        })
      ]);
      return ac.at(0);
    };
    assignment_grade_not_graded = function() {
      var ac;

      ac = new AssignmentCollection([
        buildAssignment({
          "id": 2,
          "name": "Science Quiz",
          "grading_type": "not_graded"
        })
      ]);
      return ac.at(0);
    };
    buildAssignment = function(options) {
      var base;

      if (options == null) {
        options = {};
      }
      base = {
        "assignment_group_id": 1,
        "due_at": null,
        "grading_type": "points",
        "points_possible": 5,
        "position": 2,
        "course_id": 1,
        "name": "Science Quiz",
        "submission_types": [],
        "html_url": "http://localhost:3000/courses/1/assignments/" + options.id,
        "needs_grading_count": 0,
        "all_dates": [],
        "published": true
      };
      return $.extend(base, options);
    };
    createView = function(model, options) {
      var view;

      options = $.extend({
        canManage: true
      }, options);
      ENV.PERMISSIONS = {
        manage: options.canManage
      };
      view = new AssignmentListItemView({
        model: model
      });
      view.$el.appendTo($('#fixtures'));
      view.render();
      return view;
    };
    genModules = function(count) {
      if (count === 1) {
        return ["First"];
      } else {
        return ["First", "Second"];
      }
    };
    genSetup = function(model) {
      var _this = this;

      if (model == null) {
        model = assignment1();
      }
      fakeENV.setup({
        PERMISSIONS: {
          manage: false
        }
      });
      this.model = model;
      this.submission = new Submission;
      this.view = createView(this.model, {
        canManage: false
      });
      screenreaderText = function() {
        return $.trim(_this.view.$('.js-score .screenreader-only').text());
      };
      return nonScreenreaderText = function() {
        return $.trim(_this.view.$('.js-score .non-screenreader').text());
      };
    };
    genTeardown = function() {
      fakeENV.teardown();
      return $('#fixtures').empty();
    };
    module('AssignmentListItemViewSpec', {
      setup: function() {
        return genSetup.call(this);
      },
      teardown: function() {
        return genTeardown.call(this);
      }
    });
    test("initializes child views if can manage", function() {
      var view;

      view = createView(this.model, {
        canManage: true
      });
      ok(view.publishIconView);
      ok(view.dateDueColumnView);
      ok(view.dateAvailableColumnView);
      ok(view.moveAssignmentView);
      return ok(view.editAssignmentView);
    });
    test("initializes no child views if can't manage", function() {
      var view;

      view = createView(this.model, {
        canManage: false
      });
      ok(!view.publishIconView);
      ok(!view.vddTooltipView);
      return ok(!view.editAssignmentView);
    });
    test("upatePublishState toggles ig-published", function() {
      var view;

      view = createView(this.model, {
        canManage: true
      });
      ok(view.$('.ig-row').hasClass('ig-published'));
      this.model.set('published', false);
      return ok(!view.$('.ig-row').hasClass('ig-published'));
    });
    test('asks for confirmation before deleting an assignment', function() {
      var confirm_stub, delete_spy, group_stub, view;

      view = createView(this.model);
      group_stub = sinon.stub(view, 'visibleAssignments', function() {
        return [];
      });
      confirm_stub = sinon.stub(window, "confirm", function() {
        return true;
      });
      delete_spy = sinon.spy(view, "delete");
      view.$("#assignment_" + this.model.id + " .delete_assignment").click();
      ok(confirm_stub.called);
      ok(delete_spy.called);
      confirm_stub.restore();
      delete_spy.restore();
      return group_stub.restore();
    });
    test("delete destroys model", function() {
      var old_asset_string, view;

      old_asset_string = ENV.context_asset_string;
      ENV.context_asset_string = "course_1";
      view = createView(this.model);
      sinon.spy(view.model, "destroy");
      view["delete"]();
      ok(view.model.destroy.called);
      view.model.destroy.restore();
      return ENV.context_asset_string = old_asset_string;
    });
    test("show score if score is set", function() {
      this.submission.set({
        'score': 1.5555,
        'grade': '1.5555'
      });
      this.model.set('submission', this.submission);
      this.model.trigger('change:submission');
      equal(screenreaderText(), 'Score: 1.56 out of 2 points.', 'sets screenreader text');
      return equal(nonScreenreaderText(), '1.56/2 pts', 'sets non-screenreader text');
    });
    test('do not show score if viewing as non-student', function() {
      var old_user_roles, str, view;

      old_user_roles = ENV.current_user_roles;
      ENV.current_user_roles = ["user"];
      view = createView(this.model, {
        canManage: false
      });
      str = view.$(".js-score:eq(0) .non-screenreader").html();
      ok(str.search("2 pts") !== -1);
      return ENV.current_user_roles = old_user_roles;
    });
    test("show no submission if none exists", function() {
      this.model.set({
        'submission': null
      });
      equal(screenreaderText(), 'No submission for this assignment. 2 points possible.', 'sets screenreader text for null points');
      return equal(nonScreenreaderText(), '-/2 pts', 'sets non-screenreader text for null points');
    });
    test("show score if 0 correctly", function() {
      this.submission.set({
        'score': 0,
        'grade': '0'
      });
      this.model.set('submission', this.submission);
      equal(screenreaderText(), 'Score: 0 out of 2 points.', 'sets screenreader text for 0 points');
      return equal(nonScreenreaderText(), '0/2 pts', 'sets non-screenreader text for 0 points');
    });
    test("show no submission if submission object with no submission type", function() {
      this.model.set('submission', this.submission);
      this.model.trigger('change:submission');
      equal(screenreaderText(), 'No submission for this assignment. 2 points possible.', 'sets correct screenreader text for not yet graded');
      return equal(nonScreenreaderText(), '-/2 pts', 'sets correct non-screenreader text for not yet graded');
    });
    test("show not yet graded if submission type but no grade", function() {
      this.submission.set({
        'submission_type': 'online',
        'notYetGraded': true
      });
      this.model.set('submission', this.submission);
      this.model.trigger('change:submission');
      equal(screenreaderText(), 'Assignment not yet graded. 2 points possible.', 'sets correct screenreader text for not yet graded');
      ok(nonScreenreaderText().match('-/2 pts')[0], 'sets correct non-screenreader text for not yet graded');
      return ok(nonScreenreaderText().match('Not Yet Graded')[0]);
    });
    test("focus returns to cog after dismissing dialog", function() {
      var trigger, view;

      view = createView(this.model, {
        canManage: true
      });
      trigger = view.$("#assign_" + this.model.id + "_manage_link");
      ok(trigger.length, 'there is an a node with the correct id');
      trigger.click();
      view.$("#assignment_" + this.model.id + "_settings_edit_item").click();
      view.editAssignmentView.close();
      return equal(document.activeElement, trigger.get(0));
    });
    test("assignment cannot be deleted if frozen", function() {
      var view;

      this.model.set('frozen', true);
      view = createView(this.model);
      return ok(!view.$("#assignment_" + this.model.id + " a.delete_assignment").length);
    });
    test("allows publishing", function() {
      var view;

      this.server = sinon.fakeServer.create();
      this.server.respondWith("PUT", "/api/v1/users/1/assignments/1", [
        200, {
          "Content-Type": "application/json"
        }, JSON.stringify("")
      ]);
      this.model.set('published', false);
      view = createView(this.model);
      view.$("#assignment_" + this.model.id + " .publish-icon").click();
      this.server.respond();
      equal(this.model.get('published'), true);
      return this.server.restore();
    });
    test("correctly displays module's name", function() {
      var mods, view;

      mods = genModules(1);
      this.model.set('modules', mods);
      view = createView(this.model);
      return ok(view.$(".modules").text().search("" + mods[0] + " Module") !== -1);
    });
    test("correctly display's multiple modules", function() {
      var mods, view;

      mods = genModules(2);
      this.model.set('modules', mods);
      view = createView(this.model);
      ok(view.$(".modules").text().search("Multiple Modules") !== -1);
      ok(view.$("#module_tooltip_" + this.model.id).text().search("" + mods[0]) !== -1);
      return ok(view.$("#module_tooltip_" + this.model.id).text().search("" + mods[1]) !== -1);
    });
    module('AssignmentListItemViewSpec—alternate grading type: percent', {
      setup: function() {
        return genSetup.call(this, assignment_grade_percent());
      },
      teardown: function() {
        return genTeardown.call(this);
      }
    });
    test("score and grade outputs", function() {
      this.submission.set({
        'score': 1.5555,
        'grade': 90
      });
      this.model.set('submission', this.submission);
      this.model.trigger('change:submission');
      ok(screenreaderText().match('Score: 1.56 out of 5 points.')[0], 'sets screenreader score text');
      ok(screenreaderText().match('Grade: 90%')[0], 'sets screenreader grade text');
      ok(nonScreenreaderText().match('1.56/5 pts')[0], 'sets non-screenreader screen text');
      return ok(nonScreenreaderText().match('90%')[0], 'sets non-screenreader grade text');
    });
    module('AssignmentListItemViewSpec—alternate grading type: pass_fail', {
      setup: function() {
        return genSetup.call(this, assignment_grade_pass_fail());
      },
      teardown: function() {
        return genTeardown.call(this);
      }
    });
    test("score and grade outputs", function() {
      this.submission.set({
        'score': 1.5555,
        'grade': 'complete'
      });
      this.model.set('submission', this.submission);
      this.model.trigger('change:submission');
      ok(screenreaderText().match('Score: 1.56 out of 5 points.')[0], 'sets screenreader score text');
      ok(screenreaderText().match('Grade: Complete')[0], 'sets screenreader grade text');
      ok(nonScreenreaderText().match('1.56/5 pts')[0], 'sets non-screenreader score text');
      return ok(nonScreenreaderText().match('Complete')[0], 'sets non-screenreader grade text');
    });
    module('AssignmentListItemViewSpec—alternate grading type: letter_grade', {
      setup: function() {
        return genSetup.call(this, assignment_grade_letter_grade());
      },
      teardown: function() {
        return genTeardown.call(this);
      }
    });
    test("score and grade outputs", function() {
      this.submission.set({
        'score': 1.5555,
        'grade': 'B'
      });
      this.model.set('submission', this.submission);
      this.model.trigger('change:submission');
      ok(screenreaderText().match('Score: 1.56 out of 5 points.')[0], 'sets screenreader score text');
      ok(screenreaderText().match('Grade: B')[0], 'sets screenreader grade text');
      ok(nonScreenreaderText().match('1.56/5 pts')[0], 'sets non-screenreader score text');
      return ok(nonScreenreaderText().match('B')[0], 'sets non-screenreader grade text');
    });
    module('AssignmentListItemViewSpec—alternate grading type: not_graded', {
      setup: function() {
        return genSetup.call(this, assignment_grade_not_graded());
      },
      teardown: function() {
        return genTeardown.call(this);
      }
    });
    return test("score and grade outputs", function() {
      this.submission.set({
        'score': 1.5555,
        'grade': 'complete'
      });
      this.model.set('submission', this.submission);
      this.model.trigger('change:submission');
      equal(screenreaderText(), 'This assignment will not be assigned a grade.', 'sets screenreader text');
      return equal(nonScreenreaderText(), '', 'sets non-screenreader text');
    });
  });

}).call(this);
