(function() {
  define(['ember'], function(Em) {
    var Calculator, MULTIPLE_ANSWERS, isMultipleAnswers, ratioForMultipleAnswers;

    MULTIPLE_ANSWERS = 'multiple_answers_question';
    Calculator = Em.ObjectProxy.extend({
      participantCount: Em.computed.alias('quizStatistics.uniqueCount'),
      answerPool: (function() {
        return this.get('answers');
      }).property('answers'),
      ratio: (function() {
        var correctResponses, participantCount;

        participantCount = this.get('participantCount') || 0;
        if (participantCount <= 0) {
          return 0;
        }
        if (isMultipleAnswers(this.get('questionType'))) {
          return ratioForMultipleAnswers.call(this);
        }
        correctResponses = this.get('answerPool').reduce(function(sum, answer) {
          if (answer.correct) {
            sum += answer.responses;
          }
          return sum;
        }, 0);
        return correctResponses / participantCount;
      }).property('answerPool', 'participantCount')
    });
    isMultipleAnswers = function(questionType) {
      return MULTIPLE_ANSWERS === questionType;
    };
    ratioForMultipleAnswers = function() {
      return this.get('correct') / this.get('participantCount');
    };
    return Calculator;
  });

}).call(this);
