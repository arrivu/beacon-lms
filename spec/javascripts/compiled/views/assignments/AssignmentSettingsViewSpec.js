(function() {
  define(['Backbone', 'compiled/collections/AssignmentGroupCollection', 'compiled/models/Course', 'compiled/models/AssignmentGroup', 'compiled/views/assignments/AssignmentSettingsView', 'compiled/views/assignments/AssignmentGroupWeightsView', 'jquery', 'helpers/fakeENV', 'helpers/jquery.simulate'], function(Backbone, AssignmentGroupCollection, Course, AssignmentGroup, AssignmentSettingsView, AssignmentGroupWeightsView, $, fakeENV) {
    var assignmentGroups, createView, group;

    group = function() {
      return new AssignmentGroup({
        group_weight: 50
      });
    };
    assignmentGroups = function() {
      return this.groups = new AssignmentGroupCollection([group(), group()]);
    };
    createView = function(apply_assignment_group_weights) {
      var view;

      this.course = new Course({
        apply_assignment_group_weights: apply_assignment_group_weights
      });
      this.course.urlRoot = "/courses/1";
      view = new AssignmentSettingsView({
        model: this.course,
        assignmentGroups: assignmentGroups(),
        weightsView: AssignmentGroupWeightsView
      });
      view.open();
      return view;
    };
    module('AssignmentSettingsView', {
      setup: function() {
        return fakeENV.setup();
      },
      teardown: function() {
        return fakeENV.teardown();
      }
    });
    test('it should set the checkbox to the right value on open', function() {
      var view;

      view = createView(true);
      ok(view.$('#apply_assignment_group_weights').prop('checked'));
      view.remove();
      view = createView(false);
      ok(!view.$('#apply_assignment_group_weights').prop('checked'));
      return view.remove();
    });
    test('it should show the weights table when checked', function() {
      var view;

      view = createView(true);
      ok(view.$('#ag_weights_wrapper').is(":visible"));
      return view.remove();
    });
    test('it should hide the weights table when clicked', function() {
      var view;

      view = createView(true);
      ok(view.$('#ag_weights_wrapper').is(":visible"));
      view.$('#apply_assignment_group_weights').click();
      ok(view.$('#ag_weights_wrapper').not(":visible"));
      return view.remove();
    });
    test('it should change the apply_assignment_group_weights flag', function() {
      var attributes, view;

      view = createView(true);
      view.$('#apply_assignment_group_weights').click();
      attributes = view.getFormData();
      ok(!!attributes.apply_assignment_group_weights);
      return view.remove();
    });
    return test('group weights should be saved', function() {
      var view;

      view = createView(true);
      view.$(".ag-weights-tr:eq(0) .group_weight_value").val("20");
      view.$(".ag-weights-tr:eq(1) .group_weight_value").val("80");
      view.$("#update-assignment-settings").click();
      equal(view.assignmentGroups.first().get('group_weight'), 20);
      equal(view.assignmentGroups.last().get('group_weight'), 80);
      return view.remove();
    });
  });

}).call(this);
