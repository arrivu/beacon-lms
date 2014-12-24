(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!context_modules', 'Backbone', 'jquery'], function(I18n, Backbone, $) {
    var ModuleItem, _ref;

    return ModuleItem = (function(_super) {
      __extends(ModuleItem, _super);

      function ModuleItem() {
        _ref = ModuleItem.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      return ModuleItem;

    })(Backbone.Model);
  });

}).call(this);
