(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['underscore', 'Backbone', 'compiled/collections/PaginatedCollection', 'compiled/models/WikiPageRevision'], function(_, Backbone, PaginatedCollection, WikiPageRevision) {
    var WikiPageRevisionsCollection, revisionOptions, _ref;

    revisionOptions = ['parentModel'];
    return WikiPageRevisionsCollection = (function(_super) {
      __extends(WikiPageRevisionsCollection, _super);

      function WikiPageRevisionsCollection() {
        _ref = WikiPageRevisionsCollection.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      WikiPageRevisionsCollection.prototype.model = WikiPageRevision;

      WikiPageRevisionsCollection.prototype.url = function() {
        return "" + (this.parentModel.url()) + "/revisions";
      };

      WikiPageRevisionsCollection.prototype.initialize = function(models, options) {
        var collection, parentModel, setupModel;

        WikiPageRevisionsCollection.__super__.initialize.apply(this, arguments);
        _.extend(this, _.pick(options || {}, revisionOptions));
        if (this.parentModel) {
          collection = this;
          parentModel = collection.parentModel;
          setupModel = function(model) {
            model.page = parentModel;
            model.pageUrl = parentModel.get('url');
            model.contextAssetString = parentModel.contextAssetString;
            if (!!model.get('latest')) {
              return collection.latest = model;
            }
          };
          this.on('reset', function(models) {
            return models.each(setupModel);
          });
          return this.on('add', function(model) {
            return setupModel(model);
          });
        }
      };

      return WikiPageRevisionsCollection;

    })(PaginatedCollection);
  });

}).call(this);
