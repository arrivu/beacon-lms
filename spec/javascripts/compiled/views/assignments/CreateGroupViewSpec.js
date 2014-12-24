(function() {
  define(['underscore', 'Backbone', 'compiled/collections/AssignmentGroupCollection', 'compiled/models/AssignmentGroup', 'compiled/models/Assignment', 'compiled/views/assignments/CreateGroupView', 'jquery', 'helpers/fakeENV', 'helpers/jquery.simulate'], function(_, Backbone, AssignmentGroupCollection, AssignmentGroup, Assignment, CreateGroupView, $, fakeENV) {
    var assignmentGroups, createView, group;

    group = function() {
      return new AssignmentGroup({
        name: 'something cool',
        assignments: [new Assignment, new Assignment]
      });
    };
    assignmentGroups = function() {
      return this.groups = new AssignmentGroupCollection([group(), group()]);
    };
    createView = function(hasAssignmentGroup) {
      var args;

      if (hasAssignmentGroup == null) {
        hasAssignmentGroup = true;
      }
      args = {
        assignmentGroups: assignmentGroups(),
        assignmentGroup: hasAssignmentGroup ? this.groups.first() : void 0
      };
      return new CreateGroupView(args);
    };
    module('CreateGroupView', {
      setup: function() {
        return fakeENV.setup();
      },
      teardown: function() {
        return fakeENV.teardown();
      }
    });
    test('hides drop options for no assignments', function() {
      var view;

      view = createView();
      view.render();
      ok(view.$('[name="rules[drop_lowest]"]').length);
      ok(view.$('[name="rules[drop_highest]"]').length);
      view.assignmentGroup.get('assignments').reset([]);
      view.render();
      equal(view.$('[name="rules[drop_lowest]"]').length, 0);
      return equal(view.$('[name="rules[drop_highest]"]').length, 0);
    });
    test('it should not add errors when never_drop rules are added', function() {
      var data, errors, view;

      view = createView();
      data = {
        name: "Assignments",
        rules: {
          never_drop: ["1854", "352", "234563"]
        }
      };
      errors = view.validateFormData(data);
      return ok(_.isEmpty(errors));
    });
    test('it should create a new assignment group', function() {
      var close_stub, view;

      close_stub = sinon.stub(CreateGroupView.prototype, 'close', function() {});
      view = createView(false);
      view.render();
      view.onSaveSuccess();
      equal(view.assignmentGroups.size(), 3);
      return close_stub.restore();
    });
    test('it should edit an existing assignment group', function() {
      var formData, save_spy, view;

      view = createView();
      save_spy = sinon.spy(view.model, "save");
      view.render();
      view.open();
      view.$("#ag_new_name").val("IchangedIt");
      view.$("#ag_new_drop_lowest").val("1");
      view.$("#ag_new_drop_highest").val("1");
      view.$(".create_group").click();
      formData = view.getFormData();
      equal(formData["name"], "IchangedIt");
      equal(formData["rules"]["drop_lowest"], 1);
      equal(formData["rules"]["drop_highest"], 1);
      ok(save_spy.called);
      return save_spy.restore();
    });
    test('it should not save drop rules when none are given', function() {
      var formData, save_spy, view;

      view = createView();
      save_spy = sinon.spy(view.model, "save");
      view.render();
      view.open();
      view.$("#ag_new_drop_lowest").val("");
      equal(view.$("#ag_new_drop_highest").val(), "0");
      view.$("#ag_new_name").val("IchangedIt");
      view.$(".create_group").click();
      formData = view.getFormData();
      equal(formData["name"], "IchangedIt");
      equal(_.keys(formData["rules"]).length, 0);
      ok(save_spy.called);
      return save_spy.restore();
    });
    test('it should only allow positive numbers for drop rules', function() {
      var data, errors, view;

      view = createView();
      data = {
        name: "Assignments",
        rules: {
          drop_lowest: "tree",
          drop_highest: -1,
          never_drop: ['1', '2', '3']
        }
      };
      errors = view.validateFormData(data);
      ok(errors);
      return equal(_.keys(errors).length, 2);
    });
    test('it should only allow less than the number of assignments for drop rules', function() {
      var assignments, data, errors, view;

      view = createView();
      assignments = view.assignmentGroup.get('assignments');
      data = {
        name: "Assignments",
        rules: {
          drop_highest: 5
        }
      };
      errors = view.validateFormData(data);
      ok(errors);
      return equal(_.keys(errors).length, 1);
    });
    test('it should not allow assignment groups with no name', function() {
      var assignments, data, errors, view;

      view = createView();
      assignments = view.assignmentGroup.get('assignments');
      data = {
        name: ""
      };
      errors = view.validateFormData(data);
      ok(errors);
      return equal(_.keys(errors).length, 1);
    });
    test('it should trigger a render event on save success when editing', function() {
      var triggerSpy, view;

      triggerSpy = sinon.spy(AssignmentGroupCollection.prototype, 'trigger');
      view = createView();
      view.onSaveSuccess();
      ok(triggerSpy.calledWith('render'));
      return triggerSpy.restore();
    });
    return test('it should call render on save success if adding an assignmentGroup', function() {
      var calls, renderStub, view;

      view = createView(false);
      renderStub = sinon.stub(view, 'render');
      calls = renderStub.callCount;
      view.onSaveSuccess();
      return equal(renderStub.callCount, calls + 1);
    });
  });

}).call(this);
