(function() {
  define(['ember', 'compiled/behaviors/tooltip'], function(Ember) {
    var $, run;

    $ = Ember.$, run = Ember.run;
    return Ember.View.extend({
      classNames: ['report-generator', 'inline'],
      createTooltip: function() {
        var $tooltipContainer, $tooltipContent, $view,
          _this = this;

        $tooltipContent = this.$('.auxiliary').detach();
        $tooltipContainer = null;
        $view = this.$();
        return $view.tooltip({
          tooltipClass: 'center bottom vertical',
          show: false,
          hide: false,
          items: '[title]',
          position: {
            my: 'center bottom',
            at: 'center top'
          },
          content: function() {
            return $tooltipContent;
          },
          create: function() {
            return $tooltipContainer = $tooltipContent.parent();
          },
          close: function(evt, ui) {
            return run.schedule('actions', _this, function() {
              return $tooltipContent.appendTo($view);
            });
          },
          open: function() {
            return run.schedule('actions', _this, function() {
              return $tooltipContent.appendTo($tooltipContainer);
            });
          }
        }).data('tooltip');
      },
      createOrUpdateTooltip: (function() {
        return run.schedule('afterRender', this, function() {
          if (this.tooltip) {
            this.tooltip.options.content().remove();
            this.tooltip.destroy();
          }
          if (this.isDestroying) {
            return;
          }
          return this.tooltip = this.createTooltip();
        });
      }).observes('controller.file'),
      removeTooltip: (function() {
        if (this.tooltip) {
          return this.tooltip.destroy();
        }
      }).on('willDestroyElement'),
      repositionTooltip: function() {
        var $tooltip, $tooltipTarget;

        $tooltipTarget = this.$(this.tooltip.options.items);
        $tooltip = this.tooltip._find($tooltipTarget);
        if ($tooltip.length) {
          return $tooltip.position($.extend(this.tooltip.options.position, {
            of: $tooltipTarget
          }));
        }
      },
      tickProgressBar: (function() {
        return run.schedule('afterRender', this, function() {
          var $progressBar;

          if (this.isDestroying) {
            return;
          }
          this.repositionTooltip();
          $progressBar = this.tooltip.options.content().find('.bar');
          return $progressBar.css({
            width: "" + (this.get('controller.progress.completion')) + "%"
          });
        });
      }).observes('controller.progress.completion')
    });
  });

}).call(this);
