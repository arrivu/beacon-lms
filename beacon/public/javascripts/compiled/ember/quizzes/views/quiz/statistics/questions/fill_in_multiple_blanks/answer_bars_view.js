(function() {
  define(['ember', '../multiple_choice/answer_bars_view'], function(Ember, BaseChartView) {
    return BaseChartView.extend({
      templateName: 'quiz/statistics/questions/multiple_choice/answer_bars',
      updateChart: (function() {
        return Ember.run.schedule('actions', this, function() {
          this.rerender();
          return this.removeInspector();
        });
      }).observes('controller.chartData')
    });
  });

}).call(this);
