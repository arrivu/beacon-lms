(function() {
  define(['ember', '../multiple_choice/correct_pie_view'], function(Ember, BaseChartView) {
    return BaseChartView.extend({
      templateName: 'quiz/statistics/questions/multiple_choice/correct_pie',
      updateChart: (function() {
        var ratio;

        ratio = this.get('controller.correctResponseRatio');
        if (ratio === void 0) {
          return;
        }
        return Ember.run.schedule('render', this, function() {
          this.foreground.datum({
            endAngle: ratio * this.CIRCLE
          }).attr('d', this.arc);
          return this.text.text(this.FMT_PERCENT(ratio));
        });
      }).observes('controller.correctResponseRatio')
    });
  });

}).call(this);
