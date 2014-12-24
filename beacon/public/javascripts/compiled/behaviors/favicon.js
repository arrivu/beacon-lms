(function() {
  define(['jquery', 'INST'], function($, INST) {
    var link, set;

    link = null;
    set = function(env) {
      var favicon;

      if (link) {
        link.remove();
      }
      favicon = env === 'development' ? '/favicon-green.ico' : env === 'test' ? '/favicon-yellow.ico' : '/favicon.ico';
      link = $('<link />').attr({
        rel: 'icon',
        type: 'image/x-icon',
        href: favicon
      });
      return $(document.head).append(link);
    };
    set(INST != null ? INST.environment : void 0);
    return set;
  });

}).call(this);
