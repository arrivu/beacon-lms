(function() {
  define(['ember', 'vendor/d3.v3'], function(Ember, d3) {
    d3.selection.prototype.inspectable = function(view) {
      return this.on('mouseover', view.inspect.bind(view)).on('mouseout', view.stopInspecting.bind(view));
    };
    return Ember.Mixin.create({
      answerTooltips: (function() {
        return this.get('controller.chartData');
      }).property(),
      tooltipOptions: {
        position: {
          my: 'center bottom',
          at: 'center top'
        }
      },
      hideAuxiliaryContent: (function() {
        return this.$('.auxiliary').hide();
      }).on('didInsertElement'),
      buildInspector: function() {
        return this.inspector = this.$('.inspector').tooltip({
          tooltipClass: 'center bottom vertical',
          show: false,
          hide: false
        }).data('tooltip');
      },
      inspect: function(datapoint) {
        var content, inspector, target;

        content = this.$(".auxiliary [data-answer='" + datapoint.id + "']");
        target = d3.event.target;
        inspector = this.inspector || this.buildInspector();
        inspector.option({
          content: function() {
            return content.clone();
          },
          position: {
            my: this.get('tooltipOptions.position.my'),
            at: this.get('tooltipOptions.position.at'),
            of: target,
            collision: 'fit fit'
          }
        });
        return inspector.element.mouseover();
      },
      stopInspecting: function() {
        return this.inspector.element.mouseout();
      },
      removeInspector: (function() {
        if (this.inspector) {
          this.inspector.destroy();
          return this.inspector = null;
        }
      }).on('willDestroyElement')
    });
  });

}).call(this);
