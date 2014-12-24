(function() {
  define(['jquery', 'compiled/jquery.kylemenu'], function($, KyleMenu) {
    return $(document).on('mousedown mouseup click keydown', '.al-trigger', function(event) {
      var $trigger, opts;

      $trigger = $(this);
      if ($trigger.data('kyleMenu')) {
        return;
      }
      opts = $.extend({
        noButton: true
      }, $trigger.data('kyleMenuOptions'));
      if ($trigger.data('append-to-body')) {
        opts.appendMenuTo = 'body';
      }
      opts = $.extend(opts, {
        popupOpts: {
          position: {
            my: $trigger.data('popup-my'),
            at: $trigger.data('popup-at'),
            within: $trigger.data('popup-within')
          }
        }
      });
      new KyleMenu($trigger, opts);
      return $trigger.trigger(event);
    });
  });

}).call(this);
