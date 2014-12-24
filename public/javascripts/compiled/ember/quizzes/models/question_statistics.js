(function() {
  define(['ember', 'ember-data', './question_statistics/response_ratio_calculator'], function(Em, DS, ResponseRatioCalculator) {
    var alias, attr;

    alias = Em.computed.alias;
    attr = DS.attr;
    return DS.Model.extend({
      quizStatistics: DS.belongsTo('quiz_statistics', {
        async: false
      }),
      questionType: attr(),
      questionName: attr(),
      questionText: attr(),
      position: attr(),
      answers: attr(),
      responses: attr(),
      correct: attr('number'),
      partiallyCorrect: attr('number'),
      topStudentCount: attr(),
      middleStudentCount: attr(),
      bottomStudentCount: attr(),
      correctStudentCount: attr(),
      incorrectStudentCount: attr(),
      correctStudentRatio: attr(),
      incorrectStudentRatio: attr(),
      correctTopStudentCount: attr(),
      correctMiddleStudentCount: attr(),
      correctBottomStudentCount: attr(),
      pointBiserials: attr(),
      discriminationIndex: (function() {
        var pointBiserials;

        if (pointBiserials = this.get('pointBiserials')) {
          return pointBiserials.findBy('correct', true).point_biserial;
        }
      }).property('pointBiserials'),
      graded: attr(),
      pointDistribution: attr(),
      speedGraderUrl: alias('quizStatistics.quiz.speedGraderUrl').readOnly(),
      fullCredit: attr(),
      quizSubmissionsZipUrl: alias('quizStatistics.quiz.quizSubmissionsZipUrl').readOnly(),
      answerSets: (function() {
        var sets;

        sets = this.get('_data.answer_sets') || [];
        return sets.map(function(set) {
          return Em.Object.create(set);
        });
      }).property('_data.answer_sets'),
      ratioCalculator: (function() {
        return ResponseRatioCalculator.create({
          content: this
        });
      }).property('answers'),
      renderableType: (function() {
        switch (this.get('questionType')) {
          case 'multiple_choice_question':
          case 'true_false_question':
            return 'multiple_choice';
          case 'short_answer_question':
          case 'multiple_answers_question':
          case 'numerical_question':
            return 'short_answer';
          case 'fill_in_multiple_blanks_question':
          case 'multiple_dropdowns_question':
          case 'matching_question':
            return 'fill_in_multiple_blanks';
          case 'essay_question':
            return 'essay';
          case 'file_upload_question':
            return 'file_upload';
          case 'calculated_question':
            return 'calculated';
          default:
            return 'generic';
        }
      }).property('questionType')
    });
  });

}).call(this);
