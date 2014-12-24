(function() {
  require(['jquery', 'compiled/external_tools/RedirectReturnContainer'], function($, RedirectReturnContainer) {
    return $(document).ready(function() {
      var container;

      window.external_tool_redirect = {
        ready: function() {}
      };
      container = new RedirectReturnContainer;
      return container.attachLtiEvents();
    });
  });

}).call(this);
