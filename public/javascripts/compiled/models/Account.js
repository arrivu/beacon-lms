(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['underscore', 'Backbone'], function(_, Backbone) {
    var Account, _ref;

    return Account = (function(_super) {
      __extends(Account, _super);

      function Account() {
        _ref = Account.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Account.prototype.urlRoot = '/api/v1/accounts';

      Account.prototype.present = function() {
        return _.clone(this.attributes);
      };

      Account.prototype.toJSON = function() {
        return {
          id: this.get('id'),
          account: _.omit(this.attributes, 'id')
        };
      };

      return Account;

    })(Backbone.Model);
  });

}).call(this);
