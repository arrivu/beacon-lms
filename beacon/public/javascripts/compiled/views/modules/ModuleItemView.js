(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'Backbone', 'jst/modules/ModuleItemView', 'i18n!context_modules'], function($, Backbone, template, I18n) {
    var ModuleItemView, _ref;

    return ModuleItemView = (function(_super) {
      __extends(ModuleItemView, _super);

      function ModuleItemView() {
        _ref = ModuleItemView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      ModuleItemView.prototype.template = template;

      ModuleItemView.prototype.tagName = 'li';

      return ModuleItemView;

    })(Backbone.View);
  });

}).call(this);
