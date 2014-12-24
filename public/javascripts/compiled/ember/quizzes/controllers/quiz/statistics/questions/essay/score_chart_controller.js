(function() {
  define(['ember', 'i18n!quiz_statistics'], function(Ember, I18n) {
    var A;

    A = Ember.A;
    return Ember.ObjectController.extend({
      chartData: (function() {
        var participantCount;

        participantCount = this.get('participantCount');
        if (participantCount === 0) {
          return A();
        }
        return A(this.get('pointDistribution')).map(function(point) {
          return {
            id: "" + point.score,
            score: point.score,
            count: point.count
          };
        });
      }).property('pointDistribution', 'participantCount'),
      inspectorData: (function() {
        var participantCount;

        participantCount = this.get('participantCount');
        return this.get('chartData').map(function(point) {
          var ratio;

          ratio = participantCount > 0 ? Ember.Util.round(point.count / participantCount * 100, 0) : 0;
          return {
            id: point.id,
            ratio: ratio,
            responses: point.count,
            text: I18n.t('essay_score', 'Score: %{score}', {
              score: point.score
            })
          };
        });
      }).property('chartData')
    });
  });

}).call(this);
