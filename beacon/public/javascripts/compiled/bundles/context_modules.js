(function() {
  require(['jquery', 'context_modules'], function($) {
    if (ENV.NO_MODULE_PROGRESSIONS) {
      return $('.module_progressions_link').remove();
    }
  });

}).call(this);
