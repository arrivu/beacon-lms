(function() {
  define(['ember', '../start_app', '../../components/assignment_group_grades_component', '../shared_ajax_fixtures'], function(Ember, startApp, AGGrades, fixtures) {
    var groupScores, originalGradingStandard, originalWeightingScheme, run;

    run = Ember.run;
    fixtures.create();
    originalWeightingScheme = null;
    originalGradingStandard = null;
    groupScores = {
      assignment_group_1: {
        possible: 1000.111,
        score: 85.115,
        submission_count: 10,
        submissions: [],
        weight: 90
      }
    };
    module('assignment_group_grades_component', {
      setup: function() {
        var App,
          _this = this;

        App = startApp();
        this.component = App.AssignmentGroupGradesComponent.create();
        this.component.reopen({
          gradingStandard: (function() {
            originalGradingStandard = this._super;
            return [["A", 0.50], ["C", 0.05], ["F", 0.00]];
          }).property(),
          weightingScheme: (function() {
            originalWeightingScheme = this._super;
            return "percent";
          }).property()
        });
        return run(function() {
          _this.assignment_group = Ember.copy(fixtures.assignment_groups, true).findBy('id', '1');
          _this.student = Ember.Object.create(Ember.copy(groupScores));
          return _this.component.setProperties({
            student: _this.student,
            ag: _this.assignment_group
          });
        });
      },
      teardown: function() {
        var _this = this;

        return run(function() {
          _this.component.destroy();
          return App.destroy();
        });
      }
    });
    test('values', function() {
      return deepEqual(this.component.get('values'), groupScores.assignment_group_1);
    });
    test('points', function() {
      var expected;

      expected = "85.12 / 1000.11";
      return equal(this.component.get('points'), expected);
    });
    test('percent', function() {
      var expected;

      expected = "8.5%";
      return equal(this.component.get('percent'), expected);
    });
    test('letterGrade', function() {
      var expected;

      expected = "C";
      return equal(this.component.get('letterGrade'), expected);
    });
    return test('scoreDetail', function() {
      var expected;

      expected = "(85.12 / 1000.11)";
      return equal(this.component.get('scoreDetail'), expected);
    });
  });

}).call(this);
