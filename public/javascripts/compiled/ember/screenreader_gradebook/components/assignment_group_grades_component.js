(function() {
  define(['ember', 'compiled/util/round', 'compiled/grade_calculator'], function(Ember, round, GradeCalculator) {
    var AssignmentGroupGradesComponent;

    return AssignmentGroupGradesComponent = Ember.Component.extend({
      tagName: '',
      ag: null,
      student: null,
      weightingScheme: null,
      gradingStandard: null,
      hasGrade: Ember.computed.bool('values.possible'),
      hasWeightedGroups: Ember.computed.equal('weightingScheme', 'percent'),
      letterGrade: (function() {
        var percentage, standard;

        standard = this.get('gradingStandard');
        if (!(standard && this.get('hasGrade'))) {
          return null;
        }
        percentage = Math.round(parseInt(this.get('percent')) * 10) / 10;
        return GradeCalculator.letter_grade(standard, percentage);
      }).property('gradingStandard', 'hasGrade'),
      values: (function() {
        var student;

        student = this.get('student');
        return Ember.get(student, "assignment_group_" + (this.get('ag.id')));
      }).property('ag', 'student', 'student.total_grade'),
      points: (function() {
        var values;

        values = this.get('values');
        return "" + (round(values.score, 2)) + " / " + (round(values.possible, 2));
      }).property('values'),
      percent: (function() {
        var values;

        values = this.get('values');
        return "" + (round((values.score / values.possible) * 100, 1)) + "%";
      }).property('values'),
      scoreDetail: (function() {
        var points;

        points = this.get('points');
        return "(" + points + ")";
      }).property('points')
    });
  });

}).call(this);
