(function() {
  define(['ember', 'vendor/d3.v3'], function(Ember, d3) {
    return Ember.View.extend({
      width: 270,
      height: 14 * 3,
      renderChart: (function() {
        var barHeight, barWidth, data, svg;

        barHeight = this.get('height') / 3;
        barWidth = this.get('width') / 2;
        data = this.get('controller.chartData');
        svg = this.svg = d3.select(this.$('svg')[0]).attr('width', this.get('width')).attr('height', this.get('height')).append('g');
        svg.selectAll('.bar.correct').data(data.ratio).enter().append('rect').attr('class', 'bar correct').attr('x', barWidth).attr('width', function(correctRatio) {
          return correctRatio * barWidth;
        }).attr('y', function(d, bracket) {
          return bracket * barHeight;
        }).attr('height', function() {
          return barHeight - 1;
        });
        return svg.selectAll('.bar.incorrect').data(data.ratio).enter().append('rect').attr('class', 'bar incorrect').attr('x', function(correctRatio) {
          return -1 * (1 - correctRatio * barWidth);
        }).attr('width', function(correctRatio) {
          return (1 - correctRatio) * barWidth;
        }).attr('y', function(d, bracket) {
          return bracket * barHeight;
        }).attr('height', function() {
          return barHeight - 1;
        });
      }).on('didInsertElement'),
      removeChart: (function() {
        return this.svg.remove();
      }).on('willDestroyElement')
    });
  });

}).call(this);
