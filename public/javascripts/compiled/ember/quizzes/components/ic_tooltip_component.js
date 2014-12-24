(function() {
  define(['ember', 'compiled/behaviors/tooltip'], function(Ember) {
    var IcTooltipComponent,
      _this = this;

    return IcTooltipComponent = Ember.Component.extend({
      tagName: 'span',
      linkHref: '#',
      init: function() {
        this.set('selectorId', Em.generateGuid({}, 'vdd_tooltip_'));
        return this._super.apply(this, arguments);
      },
      triggerTooltip: (function() {
        return _this.$('.vdd_tooltip_link').tooltip({
          position: {
            my: 'center bottom',
            at: 'center top-10',
            collision: 'fit fit'
          },
          tooltipClass: 'center bottom vertical',
          content: function() {
            return Em.$('#' + Em.$(this).data('tooltip-selector')).html();
          }
        });
      }).on('didInsertElement'),
      willDestroy: function() {
        var target;

        target = this.$('.vdd_tooltip_link');
        if (target) {
          target.tooltip('destroy');
        }
        return this._super();
      }
    });
  });

}).call(this);
