(function() {
  define(['ember', 'vendor/d3.v3', '../../../../../mixins/views/chart_inspector'], function(Ember, d3, ChartInspectorMixin) {
    return Ember.View.extend(ChartInspectorMixin, {
      tooltipOptions: {
        position: {
          my: 'center+8 bottom',
          at: 'center top-12'
        }
      },
      renderChart: (function() {
        var area, circleVisibilityThreshold, data, height, line, margin, radius, svg, width, x, y;

        data = this.get('controller.chartData');
        radius = 4;
        circleVisibilityThreshold = radius * 4;
        margin = {
          left: circleVisibilityThreshold,
          top: circleVisibilityThreshold,
          right: circleVisibilityThreshold,
          bottom: 0
        };
        width = 580 - margin.left - margin.right;
        height = 120 - margin.top - margin.bottom;
        x = d3.scale.linear().range([0, width]);
        y = d3.scale.linear().range([height, 0]);
        svg = this.svg = d3.select(this.$('svg')[0]).attr('width', width + margin.left + margin.right).attr('height', height + margin.top + margin.bottom).append('g').attr('transform', "translate(" + margin.left + "," + margin.top + ")");
        x.domain(d3.extent(data, function(d) {
          return d.score;
        }));
        y.domain([
          0, d3.max(data, function(d) {
            return d.count;
          })
        ]);
        line = d3.svg.line().x(function(d) {
          return x(d.score);
        }).y(function(d) {
          return y(d.count);
        });
        area = d3.svg.area().x(function(d) {
          return x(d.score);
        }).y0(height).y1(function(d) {
          return y(d.count);
        });
        svg.selectAll('path.score-line').data(data).enter().append('path').attr('class', 'score-line').attr('d', line(data));
        svg.append('path').datum(data).attr('class', 'area').attr('d', area);
        return svg.selectAll('circle').data(data).enter().append('circle').attr('cx', function(d) {
          return x(d.score);
        }).attr('cy', function(d) {
          return y(d.count) - radius;
        }).attr('r', radius * 2).inspectable(this);
      }).on('didInsertElement'),
      removeChart: (function() {
        return this.svg.remove();
      }).on('willDestroyElement')
    });
  });

}).call(this);
