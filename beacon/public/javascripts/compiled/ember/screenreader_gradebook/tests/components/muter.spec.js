(function() {
  define(['ember', '../../components/assignment_muter_component', '../start_app', '../shared_ajax_fixtures', 'jquery'], function(Ember, AssignmentMuter, startApp, fixtures, $) {
    var ContainerView, compareIdentity, mutedAssignment, run, unmutedAssignment;

    ContainerView = Ember.ContainerView, run = Ember.run;
    fixtures.create();
    mutedAssignment = fixtures.assignment_groups[0].assignments[1];
    unmutedAssignment = fixtures.assignment_groups[0].assignments[0];
    compareIdentity = function(assignment, fixture) {
      equal(assignment.muted, fixture.muted, 'muted status');
      return equal(assignment.id, fixture.id, 'assignment id');
    };
    module('screenreader_gradebook assignment_muter_component: setup', {
      setup: function() {
        var App,
          _this = this;

        App = startApp();
        return run(function() {
          _this.assignment = Ember.copy(mutedAssignment, true);
          return _this.component = App.AssignmentMuterComponent.create({
            assignment: _this.assignment
          });
        });
      },
      teardown: function() {
        var _this = this;

        return run(function() {
          _this.component.destroy();
          return _this.component = null;
        });
      }
    });
    return test('it works', function() {
      var _this = this;

      compareIdentity(this.component.get('assignment'), mutedAssignment);
      Ember.run(function() {
        _this.assignment = Ember.copy(unmutedAssignment, true);
        return _this.component.setProperties({
          assignment: _this.assignment
        });
      });
      return compareIdentity(this.component.get('assignment'), unmutedAssignment);
    });
  });

}).call(this);
