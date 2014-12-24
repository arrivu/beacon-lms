(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['compiled/collections/PaginatedCollection', 'compiled/models/PageView'], function(PaginatedCollection, PageView) {
    var PageViewCollection, _ref;

    return PageViewCollection = (function(_super) {
      __extends(PageViewCollection, _super);

      function PageViewCollection() {
        _ref = PageViewCollection.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      PageViewCollection.prototype.model = PageView;

      return PageViewCollection;

    })(PaginatedCollection);
  });

}).call(this);
