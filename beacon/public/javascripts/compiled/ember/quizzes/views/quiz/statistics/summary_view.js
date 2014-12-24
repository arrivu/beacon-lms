(function() {
  define(['ember', 'vendor/d3.v3'], function(Ember, d3) {
    var BAR_MARGIN, BAR_WIDTH, HEIGHT, MARGIN_B, MARGIN_L, MARGIN_R, MARGIN_T, SummaryView, WIDTH, renderMedianDistGraph, renderPercentileChart;

    MARGIN_T = 0;
    MARGIN_R = 0;
    MARGIN_B = 40;
    MARGIN_L = -40;
    WIDTH = 960;
    HEIGHT = 220;
    BAR_WIDTH = 10;
    BAR_MARGIN = 0.25;
    SummaryView = Ember.View.extend({
      generateScoreChart: (function() {
        var data, height, highest, svg, width, x, xAxis, y;

        data = this.get('controller.scoreChartData');
        width = WIDTH - MARGIN_L - MARGIN_R;
        height = HEIGHT - MARGIN_T - MARGIN_B;
        highest = d3.max(data);
        x = d3.scale.ordinal().rangeRoundBands([0, BAR_WIDTH * data.length], BAR_MARGIN);
        y = d3.scale.linear().range([0, highest]).rangeRound([height, 0]);
        x.domain(data.map(function(d, i) {
          return i;
        }));
        y.domain([0, highest]);
        xAxis = d3.svg.axis().scale(x).orient("bottom").tickValues(d3.range(0, 101, 10)).tickFormat(function(d) {
          return d + '%';
        });
        svg = d3.select(this.$('svg')[0]).attr('width', width + MARGIN_L + MARGIN_R).attr('height', height + MARGIN_T + MARGIN_B).attr('viewBox', "0 0 " + (width + MARGIN_L + MARGIN_R) + " " + (height + MARGIN_T + MARGIN_B)).attr('preserveAspectRatio', 'xMinYMax').append('g').attr("transform", "translate(" + MARGIN_L + "," + MARGIN_T + ")");
        svg.append('g').attr('class', 'x axis').attr('transform', "translate(0," + height + ")").call(xAxis);
        renderPercentileChart(svg, data, x, y, height);
        renderMedianDistGraph(svg, data, x, y, BAR_MARGIN);
        return this.svg = svg;
      }).on('didInsertElement'),
      removeScoreChart: (function() {
        if (this.svg) {
          return this.svg.remove();
        }
      }).on('willDestroyElement')
    });
    renderPercentileChart = function(svg, percentileData, x, y, height) {
      var data, highest, visibilityThreshold;

      data = percentileData;
      highest = y.domain()[1];
      visibilityThreshold = Math.min(highest / 100, 0.5);
      return svg.selectAll('rect.bar').data(data).enter().append('rect').attr("class", 'bar').attr('x', function(d, i) {
        return x(i);
      }).attr('width', x.rangeBand).attr('y', function(d) {
        return y(d + visibilityThreshold);
      }).attr('height', function(d) {
        return height - y(d + visibilityThreshold);
      });
    };
    renderMedianDistGraph = function(svg, percentileData, x, y, barMargin) {
      var data;

      data = d3.range(0, 101, 10).map(function(percentile) {
        var entries, point;

        entries = percentileData.slice(percentile, percentile + 10);
        point = d3.max(entries);
        return {
          y: point,
          percentile: percentile + entries.indexOf(point)
        };
      });
      return svg.selectAll('path.median-dist-graph').data(data).enter().append('path').attr('class', 'median-dist-graph');
    };
    return SummaryView;
  });

}).call(this);
