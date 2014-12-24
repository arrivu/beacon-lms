(function() {
  define(['ember', 'ember-data', 'i18n!quiz_statistics', '../shared/util'], function(Ember, DS, I18n, Util) {
    var decorate;

    decorate = function(quiz_statistics) {
      var calculateResponseRatio, decorateAnswerSet, decorateAnswers, participantCount, round;

      round = Util.round;
      participantCount = quiz_statistics.submission_statistics.unique_count;
      calculateResponseRatio = function(answer) {
        if (participantCount > 0) {
          return round(answer.responses / participantCount * 100);
        } else {
          return 0;
        }
      };
      decorateAnswers = function(answers) {
        return answers.forEach(function(answer) {
          answer.ratio = calculateResponseRatio(answer);
          if (answer.id === 'none') {
            return answer.text = I18n.t('no_answer', 'No Answer');
          } else if (answer.id === 'other') {
            return answer.text = I18n.t('unknown_answer', 'Something Else');
          }
        });
      };
      decorateAnswerSet = function(answerSet) {
        return decorateAnswers(answerSet.answers || []);
      };
      quiz_statistics.question_statistics.forEach(function(question_statistics) {
        question_statistics.quiz_statistics_id = quiz_statistics.id;
        if (question_statistics.answers) {
          decorateAnswers(question_statistics.answers);
        }
        if (question_statistics.answer_sets) {
          return question_statistics.answer_sets.forEach(decorateAnswerSet);
        }
      });
      return quiz_statistics.question_statistics_ids = Ember.A(quiz_statistics.question_statistics).mapBy('id');
    };
    return DS.ActiveModelSerializer.extend({
      extractArray: function(store, type, payload, id, requestType) {
        var data;

        decorate(payload.quiz_statistics[0]);
        data = {
          quiz_statistics: payload.quiz_statistics,
          question_statistics: payload.quiz_statistics[0].question_statistics
        };
        return this._super(store, type, data, id, requestType);
      }
    });
  });

}).call(this);
