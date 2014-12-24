(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'underscore', 'compiled/models/Account'], function(_arg, _, Account) {
    var Model, Role, _ref;

    Model = _arg.Model;
    return Role = (function(_super) {
      __extends(Role, _super);

      function Role() {
        _ref = Role.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Role.prototype.initialize = function(attributes, options) {
        Role.__super__.initialize.apply(this, arguments);
        if (attributes) {
          return this.set(this.nestAccountModel(attributes));
        }
      };

      Role.prototype.idAttribute = 'role';

      Role.prototype.isNew = function() {
        return this.get('id') == null;
      };

      Role.prototype.urlRoot = function() {
        return "/api/v1/accounts/" + (this.get('account').get('id')) + "/roles";
      };

      Role.prototype.resourceName = 'roles';

      Role.prototype.nestAccountModel = function(data) {
        data.account = new Account(data.account);
        return data;
      };

      Role.prototype.parse = function(data) {
        if (data.role) {
          this.set('id', data.role);
        }
        data = this.nestAccountModel(data);
        return data;
      };

      Role.prototype.validate = function(attrs) {
        var errors;

        errors = {};
        if (!_.isEmpty(errors)) {
          return errors;
        }
      };

      return Role;

    })(Model);
  });

}).call(this);
