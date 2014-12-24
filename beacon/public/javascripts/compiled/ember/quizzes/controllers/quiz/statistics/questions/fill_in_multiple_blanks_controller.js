(function() {
  define(['ember', '../questions_controller', 'i18n!quiz_statistics'], function(Ember, Base, I18n) {
    return Base.extend({
      answers: Ember.computed.alias('ratioCalculator.answerPool'),
      activeAnswer: (function() {
        return this.get('answerSets').findBy('active', true);
      }).property('answerSets'),
      updateCalculatorAnswerPool: (function() {
        return this.set('ratioCalculator.answerPool', this.get('activeAnswer.answers'));
      }).observes('activeAnswer'),
      correctResponseRatioLabel: (function() {
        return I18n.t('correct_multiple_response_ratio', '%{ratio}% of your students responded correctly.', {
          ratio: Math.round(this.get('correctResponseRatio') * 100)
        });
      }).property('correctResponseRatio'),
      actions: {
        activateAnswer: function(blankId) {
          this.get('answerSets').forEach(function(answerSet) {
            return answerSet.set('active', answerSet.get('id') === blankId);
          });
          return this.notifyPropertyChange('activeAnswer');
        }
      }
    });
  });

}).call(this);
