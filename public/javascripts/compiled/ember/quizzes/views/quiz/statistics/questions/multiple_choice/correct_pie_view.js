(function() {
  define(['ember', 'vendor/d3.v3'], function(Ember, d3) {
    return Ember.View.extend({
      radius: 80,
      CIRCLE: 2 * Math.PI,
      FMT_PERCENT: d3.format('%'),
      renderChart: (function() {
        var background, ratio;

        ratio = this.get('controller.correctResponseRatio');
        this.arc = d3.svg.arc().innerRadius(this.radius / 2).outerRadius(this.radius / 2.5).startAngle(0);
        this.svg = d3.select(this.$('svg')[0]).attr('width', this.radius).attr('height', this.radius).append('g').attr('transform', "translate(" + (this.radius / 2) + "," + (this.radius / 2) + ")");
        background = this.svg.append('path').datum({
          endAngle: this.CIRCLE
        }).attr('class', 'background').attr('d', this.arc);
        this.foreground = this.svg.append('path').datum({
          endAngle: this.CIRCLE * ratio
        }).attr('class', 'foreground').attr('d', this.arc);
        return this.text = this.svg.append('text').attr('text-anchor', 'middle').attr('dy', '.35em').text(this.FMT_PERCENT(ratio));
      }).on('didInsertElement'),
      removeChart: (function() {
        return this.svg.remove();
      }).on('willDestroyElement')
    });
  });

}).call(this);
