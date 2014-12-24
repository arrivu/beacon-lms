(function() {
  define(['./quiz_submission', 'ember-data'], function(QuizSubmission, DS) {
    var StudentQuizSubmission, attr, belongsTo;

    belongsTo = DS.belongsTo, attr = DS.attr;
    return StudentQuizSubmission = QuizSubmission.extend({
      quiz: belongsTo('quiz', {
        async: false,
        inverse: 'studentQuizSubmissions'
      })
    });
  });

}).call(this);
