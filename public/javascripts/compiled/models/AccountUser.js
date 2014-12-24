(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['compiled/models/User'], function(User) {
    var AccountUser, _ref;

    return AccountUser = (function(_super) {
      __extends(AccountUser, _super);

      function AccountUser() {
        _ref = AccountUser.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      AccountUser.prototype.defaults = {
        avatar_url: '/images/messages/avatar-50.png'
      };

      return AccountUser;

    })(User);
  });

}).call(this);
