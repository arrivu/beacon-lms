(function() {
  define(['../start_app', 'ember', '../shared_ajax_fixtures'], function(startApp, Ember, fixtures) {
    var App;

    App = null;
    fixtures.create();
    module('grading_cell_component integration test for isPoints', {
      setup: function() {
        var _this = this;

        App = startApp();
        return visit('/').then(function() {
          _this.controller = App.__container__.lookup('controller:screenreader_gradebook');
          _this.assignment = _this.controller.get('assignments').findBy('id', '6');
          _this.student = _this.controller.get('students').findBy('id', '1');
          return Ember.run(function() {
            return _this.controller.setProperties({
              submissions: Ember.copy(fixtures.submissions, true),
              selectedAssignment: _this.assignment,
              selectedStudent: _this.student
            });
          });
        });
      },
      teardown: function() {
        return Ember.run(App, 'destroy');
      }
    });
    return test('fast-select instance is used for grade input', function() {
      ok(find('#student_and_assignment_grade').is('select'));
      return equal(find('#student_and_assignment_grade').val(), 'incomplete');
    });
  });

}).call(this);
