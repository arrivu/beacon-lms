(function() {
  define(['jquery'], function($) {
    var interval;

    if (!ENV.ping_url) {
      return;
    }
    return interval = setInterval(function() {
      if (document.hidden === false) {
        return $.post(ENV.ping_url).fail(function(xhr) {
          if (xhr.status === 401) {
            return clearInterval(interval);
          }
        });
      }
    }, 1000 * 180);
  });

}).call(this);
