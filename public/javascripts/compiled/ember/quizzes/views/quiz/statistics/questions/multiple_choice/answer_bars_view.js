(function() {
  define(['ember', 'vendor/d3.v3', '../../../../../mixins/views/chart_inspector', 'compiled/behaviors/tooltip'], function(Ember, d3, ChartInspectorMixin) {
    return Ember.View.extend(ChartInspectorMixin, {
      barWidth: 30,
      barMargin: 1,
      xOffset: 16,
      yAxisLabel: '',
      xAxisLabels: false,
      linearScale: true,
      width: (function() {
        return this.$().width();
      }).property(),
      height: 120,
      tooltipOptions: {
        position: {
          my: 'center+15 bottom',
          at: 'center top-8'
        }
      },
      renderChart: (function() {
        var barMargin, barWidth, data, height, highest, margin, otherAnswers, svg, sz, visibilityThreshold, width, x, xOffset, y,
          _this = this;

        data = Ember.A(this.get('controller.chartData'));
        sz = data.reduce((function(sum, item) {
          return sum + item.y;
        }), 0);
        highest = d3.max(data.mapBy('y'));
        margin = {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        };
        width = this.get('width') - margin.left - margin.right;
        height = this.get('height') - margin.top - margin.bottom;
        barWidth = this.get('barWidth');
        barMargin = this.get('barMargin');
        xOffset = this.get('xOffset');
        x = d3.scale.ordinal().rangeRoundBands([0, this.get('barWidth') * sz], .025);
        y = d3.scale.linear().range([height, 0]);
        visibilityThreshold = Math.max(5, y(highest) / 100.0);
        svg = d3.select(this.$('svg')[0]).attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        x.domain(data.map(function(d, i) {
          return d.label || i;
        }));
        y.domain([0, sz]);
        svg.selectAll('.bar').data(data).enter().append('rect').attr("class", function(d) {
          return _this.classifyChartBar(d);
        }).attr("x", function(d, i) {
          return i * (barWidth + barMargin) + xOffset;
        }).attr("width", barWidth).attr("y", function(d) {
          return y(d.y) - visibilityThreshold;
        }).attr("height", function(d) {
          return height - y(d.y) + visibilityThreshold;
        }).inspectable(this);
        otherAnswers = Ember.A([data.findBy('id', 'other'), data.findBy('id', 'none')]).compact();
        if (otherAnswers.length) {
          this.renderStripePattern(svg);
          svg.selectAll('.bar.bar-striped').data(otherAnswers).enter().append('rect').attr('class', 'bar bar-striped').attr('style', 'fill: url(#diagonalStripes);').attr('x', function(d) {
            return data.indexOf(d) * (barWidth + barMargin) + xOffset + 1;
          }).attr('width', barWidth - 2).attr('y', function(d) {
            return y(d.y + visibilityThreshold) + 1;
          }).attr('height', function(d) {
            return height - y(d.y + visibilityThreshold) - 2;
          });
        }
        return this.svg = svg;
      }).on('didInsertElement'),
      removeChart: (function() {
        if (this.svg) {
          return this.svg.remove();
        }
      }).on('willDestroyElement'),
      renderStripePattern: function(svg) {
        return svg.append('pattern').attr('id', 'diagonalStripes').attr('width', 5).attr('height', 5).attr('patternTransform', 'rotate(45 0 0)').attr('patternUnits', 'userSpaceOnUse').append('g').append('path').attr('d', 'M0,0 L0,10');
      },
      classifyChartBar: function(answer) {
        if (answer.correct) {
          return 'bar bar-highlighted';
        } else {
          return 'bar';
        }
      }
    });
  });

}).call(this);
