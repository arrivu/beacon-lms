(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['compiled/collections/PaginatedCollection', 'compiled/models/RecipientModel'], function(PaginatedCollection, RecipientModel) {
    var RecipientCollection, _ref;

    return RecipientCollection = (function(_super) {
      __extends(RecipientCollection, _super);

      function RecipientCollection() {
        _ref = RecipientCollection.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      RecipientCollection.prototype.model = RecipientModel;

      RecipientCollection.prototype.fetch = function() {
        return this.deferred = RecipientCollection.__super__.fetch.apply(this, arguments);
      };

      return RecipientCollection;

    })(PaginatedCollection);
  });

}).call(this);
