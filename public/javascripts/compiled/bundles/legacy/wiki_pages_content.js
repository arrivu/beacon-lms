(function() {
  require(['jquery', 'wiki', 'vendor/jquery.pageless'], function($, wikiPage) {
    wikiPage.init();
    return $(document).ready(function() {
      if (ENV.WIKI_PAGE_EDITING) {
        return $("#wiki_show_view_secondary .edit_link:first").click();
      }
    });
  });

}).call(this);
