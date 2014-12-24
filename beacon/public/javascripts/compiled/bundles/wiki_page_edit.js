(function() {
  require(['jquery', 'compiled/models/WikiPage', 'compiled/views/wiki/WikiPageEditView'], function($, WikiPage, WikiPageEditView) {
    var wikiPage, wikiPageEditView;

    $('body').addClass('edit');
    wikiPage = new WikiPage(ENV.WIKI_PAGE, {
      revision: ENV.WIKI_PAGE_REVISION,
      contextAssetString: ENV.context_asset_string
    });
    wikiPageEditView = new WikiPageEditView({
      model: wikiPage,
      wiki_pages_path: ENV.WIKI_PAGES_PATH,
      WIKI_RIGHTS: ENV.WIKI_RIGHTS,
      PAGE_RIGHTS: ENV.PAGE_RIGHTS
    });
    $('#content').append(wikiPageEditView.$el);
    wikiPageEditView.on('cancel', function() {
      var created_at, html_url;

      created_at = wikiPage.get('created_at');
      html_url = wikiPage.get('html_url');
      if (!created_at || !html_url) {
        if (ENV.WIKI_PAGES_PATH) {
          return window.location.href = ENV.WIKI_PAGES_PATH;
        }
      } else {
        return window.location.href = html_url;
      }
    });
    return wikiPageEditView.render();
  });

}).call(this);
