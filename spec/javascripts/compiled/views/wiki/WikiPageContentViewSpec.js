(function() {
  define(['jquery', 'compiled/models/WikiPage', 'compiled/views/wiki/WikiPageContentView'], function($, WikiPage, WikiPageContentView) {
    module('WikiPageContentView');
    test('setModel causes a re-render', function() {
      var contentView, wikiPage;

      wikiPage = new WikiPage;
      contentView = new WikiPageContentView;
      this.mock(contentView).expects('render').atLeast(1);
      return contentView.setModel(wikiPage);
    });
    test('setModel binds to the model change:title trigger', function() {
      var contentView, wikiPage;

      wikiPage = new WikiPage;
      contentView = new WikiPageContentView;
      contentView.setModel(wikiPage);
      this.mock(contentView).expects('render').atLeast(1);
      return wikiPage.set('title', 'A New Title');
    });
    test('setModel binds to the model change:title trigger', function() {
      var contentView, wikiPage;

      wikiPage = new WikiPage;
      contentView = new WikiPageContentView;
      contentView.setModel(wikiPage);
      this.mock(contentView).expects('render').atLeast(1);
      return wikiPage.set('body', 'A New Body');
    });
    return test('render publishes a "userContent/change" (to enhance user content)', function() {
      var contentView;

      contentView = new WikiPageContentView;
      $.subscribe('userContent/change', this.mock().atLeast(1));
      return contentView.render();
    });
  });

}).call(this);
