(function() {
  define(['compiled/models/WikiPage', 'compiled/collections/WikiPageRevisionsCollection'], function(WikiPage, WikiPageRevisionsCollection) {
    module('WikiPageRevisionsCollection');
    test('parentModel accepted in constructor', function() {
      var collection, parentModel;

      parentModel = new WikiPage;
      collection = new WikiPageRevisionsCollection([], {
        parentModel: parentModel
      });
      return strictEqual(collection.parentModel, parentModel, 'parentModel accepted in constructor');
    });
    test('url based on parentModel', function() {
      var collection, parentModel;

      parentModel = new WikiPage({
        url: 'a-page'
      }, {
        contextAssetString: 'course_73'
      });
      collection = new WikiPageRevisionsCollection([], {
        parentModel: parentModel
      });
      return equal(collection.url(), '/api/v1/courses/73/pages/a-page/revisions', 'url built properly');
    });
    return test('child models inherit parent url propertly', function() {
      var collection, parentModel;

      parentModel = new WikiPage({
        url: 'a-page'
      }, {
        contextAssetString: 'course_73'
      });
      collection = new WikiPageRevisionsCollection([], {
        parentModel: parentModel
      });
      collection.add({
        revision_id: 37
      });
      equal(collection.models.length, 1, 'child model added');
      return equal(collection.models[0].url(), '/api/v1/courses/73/pages/a-page/revisions/37', 'child url built properly');
    });
  });

}).call(this);
