(function() {
  define(['underscore', 'Backbone', 'compiled/collections/AssignmentGroupCollection', 'compiled/collections/AssignmentCollection', 'compiled/models/AssignmentGroup', 'compiled/models/Assignment', 'compiled/views/assignments/DeleteGroupView', 'jquery', 'helpers/jquery.simulate', 'helpers/fakeENV'], function(_, Backbone, AssignmentGroupCollection, AssignmentCollection, AssignmentGroup, Assignment, DeleteGroupView, $) {
    var assignmentGroups, createView, group;

    group = function(assignments, id) {
      if (assignments == null) {
        assignments = true;
      }
      return new AssignmentGroup({
        id: id,
        name: "something cool " + id,
        assignments: assignments ? [new Assignment, new Assignment] : []
      });
    };
    assignmentGroups = function(assignments, multiple) {
      var groups;

      if (assignments == null) {
        assignments = true;
      }
      if (multiple == null) {
        multiple = true;
      }
      groups = multiple ? [group(assignments, 1), group(assignments, 2)] : [group(assignments, 1)];
      return new AssignmentGroupCollection(groups);
    };
    createView = function(assignments, multiple) {
      var ag_group, ags;

      if (assignments == null) {
        assignments = true;
      }
      if (multiple == null) {
        multiple = true;
      }
      ags = assignmentGroups(assignments, multiple);
      ag_group = ags.first();
      return new DeleteGroupView({
        model: ag_group
      });
    };
    module('DeleteGroupView');
    test('it should delete a group without assignments', function() {
      var confirm_stub, destroy_stub, view;

      confirm_stub = sinon.stub(window, "confirm", function() {
        return true;
      });
      view = createView(false, true);
      destroy_stub = sinon.stub(view, "destroyModel", function() {});
      view.render();
      view.open();
      ok(confirm_stub.called);
      ok(destroy_stub.called);
      confirm_stub.restore();
      return destroy_stub.restore();
    });
    test('assignment and ag counts should be correct', function() {
      var view;

      view = createView(true, true);
      view.render();
      view.open();
      equal(view.$('.assignment_count:visible').text(), "2");
      equal(view.$('.group_select option').length, 2);
      return view.close();
    });
    test('assignment and ag counts should update', function() {
      var view;

      view = createView(true, true);
      view.render();
      view.open();
      view.close();
      view.model.get('assignments').add(new Assignment);
      view.model.collection.add(new AssignmentGroup);
      view.open();
      equal(view.$('.assignment_count:visible').text(), "3");
      equal(view.$('.group_select:visible option').length, 3);
      return view.close();
    });
    test('it should delete a group with assignments', function() {
      var destroy_stub, view;

      destroy_stub = sinon.stub(DeleteGroupView.prototype, "destroy", function() {});
      view = createView(true, true);
      view.render();
      view.open();
      view.$(".delete_group").click();
      ok(destroy_stub.called);
      destroy_stub.restore();
      return view.close();
    });
    return test('it should not delete the last assignment group', function() {
      var alert_stub, destroy_spy, view;

      alert_stub = sinon.stub(window, "alert", function() {
        return true;
      });
      view = createView(true, false);
      destroy_spy = sinon.spy(view, "destroyModel");
      view.render();
      view.open();
      ok(alert_stub.called);
      ok(!destroy_spy.called);
      alert_stub.restore();
      destroy_spy.restore();
      return view.close();
    });
  });

}).call(this);
