(function() {
  define(['ember', 'compiled/util/round', 'compiled/grade_calculator', 'i18n!sr_gradebook'], function(Ember, round, GradeCalculator, I18n) {
    var FinalGradeGradesComponent;

    return FinalGradeGradesComponent = Ember.Component.extend({
      percent: (function() {
        return this.get("student.total_percent");
      }).property('student.total_percent', 'student'),
      pointRatioDisplay: (function() {
        return I18n.t("final_point_ratio", "%{pointRatio} points", {
          pointRatio: this.get('pointRatio')
        });
      }).property("pointRatio"),
      pointRatio: (function() {
        return "" + (this.get('student.total_grade.score')) + " / " + (this.get('student.total_grade.possible'));
      }).property("weighted_groups", "student.total_grade.score", "student.total_grade.possible"),
      letterGrade: (function() {
        return GradeCalculator.letter_grade(this.get('gradingStandard'), this.get('percent'));
      }).property('gradingStandard', 'percent'),
      showGrade: Ember.computed.bool('student.total_grade.possible'),
      showPoints: (function() {
        return !!(!this.get("weighted_groups") && this.get("student.total_grade"));
      }).property("weighted_groups", "student.total_grade"),
      showLetterGrade: Ember.computed.bool("gradingStandard")
    });
  });

}).call(this);
