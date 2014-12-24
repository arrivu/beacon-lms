(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'Backbone', 'compiled/collections/PaginatedCollection'], function($, Backbone, PaginatedCollection) {
    var WrappedCollection, _ref;

    return WrappedCollection = (function(_super) {
      __extends(WrappedCollection, _super);

      function WrappedCollection() {
        _ref = WrappedCollection.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      WrappedCollection.optionProperty('key');

      WrappedCollection.prototype.parse = function(response) {
        this.linked = response.linked;
        return response[this.key];
      };

      return WrappedCollection;

    })(PaginatedCollection);
  });

}).call(this);
