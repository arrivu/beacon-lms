(function() {
  define(['ember', 'i18n!quiz_statistics'], function(Ember, I18n) {
    var alias;

    alias = Ember.computed.alias;
    return Ember.ObjectController.extend({
      needs: ['quizStatistics'],
      participantCount: alias('ratioCalculator.participantCount').readOnly(),
      correctResponseRatio: alias('ratioCalculator.ratio').readOnly(),
      attemptsLabel: (function() {
        return I18n.t('attempts', 'Attempts: %{count} out of %{total}', {
          count: this.get('responses'),
          total: this.get('participantCount')
        });
      }).property('responses', 'participantCount'),
      correctResponseRatioLabel: (function() {
        return I18n.t('correct_response_ratio', '%{ratio}% of your students correctly answered this question.', {
          ratio: Ember.Util.round(this.get('correctResponseRatio') * 100, 0)
        });
      }).property('correctResponseRatio'),
      inheritDetailVisibility: (function() {
        return this.set('detailsVisible', this.get('controllers.quizStatistics.allDetailsVisible'));
      }).observes('controllers.quizStatistics.allDetailsVisible'),
      actions: {
        showDetails: function() {
          this.toggleProperty('detailsVisible');
          return null;
        }
      }
    });
  });

}).call(this);
