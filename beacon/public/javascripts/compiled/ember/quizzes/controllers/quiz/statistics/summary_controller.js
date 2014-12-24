(function() {
  define(['ember', 'vendor/d3.v3', '../../../shared/seconds_to_time'], function(Ember, d3, secondsToTime) {
    var max, sum;

    max = d3.max, sum = d3.sum;
    return Ember.ObjectController.extend({
      ratioFor: function(score) {
        var quizPoints;

        quizPoints = parseFloat(this.get('quiz.pointsPossible'));
        if (quizPoints > 0) {
          return Ember.Util.round(this.get(score) / quizPoints * 100.0, 0);
        } else {
          return 0;
        }
      },
      avgScoreRatio: (function() {
        return this.ratioFor('avgScore');
      }).property('avgScore'),
      highScoreRatio: (function() {
        return this.ratioFor('highScore');
      }).property('highScore'),
      lowScoreRatio: (function() {
        return this.ratioFor('lowScore');
      }).property('lowScore'),
      formattedAvgDuration: (function() {
        return secondsToTime(this.get('avgDuration'));
      }).property('avgDuration'),
      scoreChartData: (function() {
        var highest, percentile, scores, set, _i, _ref;

        set = Ember.A();
        scores = this.get('submissionStatistics.scores') || {};
        highest = max(Ember.keys(scores).map(function(d) {
          return parseInt(d, 10);
        }));
        for (percentile = _i = 0, _ref = max([100, highest]); 0 <= _ref ? _i <= _ref : _i >= _ref; percentile = 0 <= _ref ? ++_i : --_i) {
          set[percentile] = scores["" + percentile] || 0;
        }
        set[100] = sum(set.splice(100, set.length));
        return set;
      }).property('submissionStatistics')
    });
  });

}).call(this);
