(function() {
  define(['jquery', 'compiled/collections/WikiPageRevisionsCollection', 'compiled/views/wiki/WikiPageRevisionsView'], function($, WikiPageRevisionsCollection, WikiPageRevisionsView) {
    module('WikiPageRevisionsView');
    test('selecting a model/view sets the selected attribute on the model', function() {
      var collection, fixture, view;

      fixture = $('<div id="main"><div id="content"></div></div>').appendTo('#fixtures');
      collection = new WikiPageRevisionsCollection;
      view = new WikiPageRevisionsView({
        collection: collection
      });
      view.$el.appendTo('#content');
      view.render();
      collection.add({
        revision_id: 21
      });
      collection.add({
        revision_id: 37
      });
      strictEqual(collection.models.length, 2, 'models added to collection');
      view.setSelectedModelAndView(collection.models[0], collection.models[0].view);
      strictEqual(collection.models[0].get('selected'), true, 'selected attribute set');
      strictEqual(collection.models[1].get('selected'), false, 'selected attribute not set');
      view.setSelectedModelAndView(collection.models[1], collection.models[1].view);
      strictEqual(collection.models[0].get('selected'), false, 'selected attribute not set');
      strictEqual(collection.models[1].get('selected'), true, 'selected attribute set');
      return fixture.remove();
    });
    test('prevPage fetches previous page from collection', function() {
      var collection, view;

      collection = new WikiPageRevisionsCollection;
      this.mock(collection).expects('fetch').atLeast(1).withArgs({
        page: 'prev',
        reset: true
      }).returns($.Deferred());
      view = new WikiPageRevisionsView({
        collection: collection
      });
      return view.prevPage();
    });
    test('nextPage fetches next page from collection', function() {
      var collection, view;

      collection = new WikiPageRevisionsCollection;
      this.mock(collection).expects('fetch').atLeast(1).withArgs({
        page: 'next',
        reset: true
      }).returns($.Deferred());
      view = new WikiPageRevisionsView({
        collection: collection
      });
      return view.nextPage();
    });
    test('toJSON - CAN.FETCH_PREV', function() {
      var collection, view, _ref;

      collection = new WikiPageRevisionsCollection;
      view = new WikiPageRevisionsView({
        collection: collection
      });
      this.stub(collection, 'canFetch', function(arg) {
        return arg === 'prev';
      });
      return strictEqual((_ref = view.toJSON().CAN) != null ? _ref.FETCH_PREV : void 0, true, 'can fetch previous');
    });
    return test('toJSON - CAN.FETCH_NEXT', function() {
      var collection, view, _ref;

      collection = new WikiPageRevisionsCollection;
      view = new WikiPageRevisionsView({
        collection: collection
      });
      this.stub(collection, 'canFetch', function(arg) {
        return arg === 'next';
      });
      return strictEqual((_ref = view.toJSON().CAN) != null ? _ref.FETCH_NEXT : void 0, true, 'can fetch next');
    });
  });

}).call(this);
