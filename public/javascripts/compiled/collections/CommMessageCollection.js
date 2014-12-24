(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['compiled/collections/PaginatedCollection'], function(PaginatedCollection) {
    var CommMessageCollection, _ref;

    return CommMessageCollection = (function(_super) {
      __extends(CommMessageCollection, _super);

      function CommMessageCollection() {
        _ref = CommMessageCollection.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      CommMessageCollection.prototype.url = function() {
        return "/api/v1/comm_messages/";
      };

      return CommMessageCollection;

    })(PaginatedCollection);
  });

}).call(this);
