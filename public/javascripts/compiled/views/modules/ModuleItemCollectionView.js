(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'jst/modules/ModuleItemCollectionView', 'compiled/views/modules/ModuleItemView', 'compiled/views/PaginatedCollectionView', 'i18n!context_modules'], function($, template, ModuleItemView, PaginatedCollectionView, I18n) {
    var ModuleItemCollectionView, _ref;

    return ModuleItemCollectionView = (function(_super) {
      __extends(ModuleItemCollectionView, _super);

      function ModuleItemCollectionView() {
        _ref = ModuleItemCollectionView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      ModuleItemCollectionView.prototype.template = template;

      ModuleItemCollectionView.prototype.itemView = ModuleItemView;

      return ModuleItemCollectionView;

    })(PaginatedCollectionView);
  });

}).call(this);
