(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'jst/modules/ModuleCollectionView', 'compiled/views/modules/ModuleView', 'compiled/views/PaginatedCollectionView', 'i18n!context_modules'], function($, template, ModuleView, PaginatedCollectionView, I18n) {
    var ModulesCollectionView, _ref;

    return ModulesCollectionView = (function(_super) {
      __extends(ModulesCollectionView, _super);

      function ModulesCollectionView() {
        _ref = ModulesCollectionView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      ModulesCollectionView.prototype.template = template;

      ModulesCollectionView.prototype.itemView = ModuleView;

      ModulesCollectionView.optionProperty('editable');

      ModulesCollectionView.prototype.toJSON = function() {
        var json;

        json = ModulesCollectionView.__super__.toJSON.apply(this, arguments);
        json.editable = this.editable;
        return json;
      };

      return ModulesCollectionView;

    })(PaginatedCollectionView);
  });

}).call(this);
