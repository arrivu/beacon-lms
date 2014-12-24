(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jst/ExternalTools/AppCenterView', 'compiled/views/PaginatedCollectionView', 'compiled/views/ExternalTools/AppThumbnailView'], function(template, PaginatedCollectionView, AppThumbnailView) {
    var AppCenterView, _ref;

    return AppCenterView = (function(_super) {
      __extends(AppCenterView, _super);

      function AppCenterView() {
        this.renderItem = __bind(this.renderItem, this);        _ref = AppCenterView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      AppCenterView.prototype.filterText = '';

      AppCenterView.prototype.targetInstalledState = 'all';

      AppCenterView.prototype.template = template;

      AppCenterView.prototype.itemView = AppThumbnailView;

      AppCenterView.prototype.renderItem = function(model) {
        var categories, filter, isInstalled, name, show;

        filter = new RegExp(this.filterText, "i");
        isInstalled = model.get('is_installed') || false;
        name = model.get('name') || '';
        categories = model.get('categories') || [];
        show = true;
        if (this.targetInstalledState === 'not_installed' && isInstalled) {
          show = false;
        } else if (this.targetInstalledState === 'installed' && !isInstalled) {
          show = false;
        }
        if (show && (name.match(filter) || categories.join().match(filter))) {
          return AppCenterView.__super__.renderItem.apply(this, arguments);
        }
      };

      return AppCenterView;

    })(PaginatedCollectionView);
  });

}).call(this);
