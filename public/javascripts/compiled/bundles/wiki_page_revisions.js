(function() {
  require(['jquery', 'compiled/models/WikiPage', 'compiled/collections/WikiPageRevisionsCollection', 'compiled/views/wiki/WikiPageContentView', 'compiled/views/wiki/WikiPageRevisionsView'], function($, WikiPage, WikiPageRevisionsCollection, WikiPageContentView, WikiPageRevisionsView) {
    var contentView, revisions, revisionsView, wikiPage;

    $('body').addClass('show revisions');
    wikiPage = new WikiPage(ENV.WIKI_PAGE, {
      revision: ENV.WIKI_PAGE_REVISION,
      contextAssetString: ENV.context_asset_string
    });
    revisions = new WikiPageRevisionsCollection([], {
      parentModel: wikiPage
    });
    revisionsView = new WikiPageRevisionsView({
      collection: revisions,
      pages_path: ENV.WIKI_PAGES_PATH
    });
    revisionsView.on('selectionChanged', function(newSelection) {
      contentView.setModel(newSelection.model);
      if (!newSelection.model.get('title') || newSelection.model.get('title') === '') {
        return contentView.$el.disableWhileLoading(newSelection.model.fetch());
      }
    });
    revisionsView.$el.appendTo('#wiki_page_revisions');
    revisionsView.render();
    contentView = new WikiPageContentView;
    contentView.$el.appendTo('#wiki_page_revisions');
    contentView.on('render', function() {
      return revisionsView.reposition();
    });
    contentView.render();
    revisionsView.collection.setParams({
      per_page: 10
    });
    return revisionsView.collection.fetch();
  });

}).call(this);
