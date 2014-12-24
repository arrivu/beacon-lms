(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['compiled/collections/PaginatedCollection'], function(PaginatedCollection) {
    var UserObserveesCollection, _ref;

    return UserObserveesCollection = (function(_super) {
      __extends(UserObserveesCollection, _super);

      function UserObserveesCollection() {
        _ref = UserObserveesCollection.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      UserObserveesCollection.prototype.url = function() {
        return "/api/v1/users/" + this.user_id + "/observees";
      };

      return UserObserveesCollection;

    })(PaginatedCollection);
  });

}).call(this);
