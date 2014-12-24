(function() {
  define(['jquery', 'compiled/models/WikiPageRevision', 'compiled/collections/WikiPageRevisionsCollection', 'compiled/views/wiki/WikiPageRevisionView'], function($, WikiPageRevision, WikiPageRevisionsCollection, WikiPageRevisionView) {
    module('WikiPageRevisionView');
    test('binds to model change triggers', function() {
      var revision, view;

      revision = new WikiPageRevision;
      view = new WikiPageRevisionView({
        model: revision
      });
      this.mock(view).expects('render').atLeast(1);
      return revision.set('body', 'A New Body');
    });
    test('restore delegates to model.restore', function() {
      var revision, view;

      revision = new WikiPageRevision;
      view = new WikiPageRevisionView({
        model: revision
      });
      this.mock(revision).expects('restore').atLeast(1).returns($.Deferred());
      return view.restore();
    });
    return test('toJSON serializes expected values', function() {
      var attributes, collection, json, revision, view, _ref, _ref1, _ref2, _ref3;

      attributes = {
        latest: true,
        selected: true,
        title: 'Title',
        body: 'Body'
      };
      revision = new WikiPageRevision(attributes);
      collection = new WikiPageRevisionsCollection([revision]);
      collection.latest = new WikiPageRevision(attributes);
      view = new WikiPageRevisionView({
        model: revision
      });
      json = view.toJSON();
      strictEqual((_ref = json.IS) != null ? _ref.LATEST : void 0, true, 'IS.LATEST');
      strictEqual((_ref1 = json.IS) != null ? _ref1.SELECTED : void 0, true, 'IS.SELECTED');
      strictEqual((_ref2 = json.IS) != null ? _ref2.LOADED : void 0, true, 'IS.LOADED');
      return strictEqual((_ref3 = json.IS) != null ? _ref3.SAME_AS_LATEST : void 0, true, 'IS.SAME_AS_LATEST');
    });
  });

}).call(this);
