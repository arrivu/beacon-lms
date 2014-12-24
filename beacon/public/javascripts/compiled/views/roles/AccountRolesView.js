(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'Backbone', 'jst/roles/accountRoles'], function($, _, Backbone, template) {
    var AccountRolesView, _ref;

    return AccountRolesView = (function(_super) {
      __extends(AccountRolesView, _super);

      function AccountRolesView() {
        _ref = AccountRolesView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      AccountRolesView.prototype.template = template;

      return AccountRolesView;

    })(Backbone.View);
  });

}).call(this);
