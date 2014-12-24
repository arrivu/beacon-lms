(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'Backbone', 'compiled/views/feature_flags/FeatureFlagDialog', 'jst/feature_flags/featureFlag'], function($, Backbone, FeatureFlagDialog, template) {
    var FeatureFlagView, _ref;

    return FeatureFlagView = (function(_super) {
      __extends(FeatureFlagView, _super);

      function FeatureFlagView() {
        _ref = FeatureFlagView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      FeatureFlagView.prototype.tagName = 'li';

      FeatureFlagView.prototype.className = 'feature-flag';

      FeatureFlagView.prototype.template = template;

      FeatureFlagView.prototype.els = {
        '.element_toggler i': '$detailToggle'
      };

      FeatureFlagView.prototype.events = {
        'click button': 'onToggleValue',
        'click .element_toggler': 'onToggleDetails',
        'keyclick .element_toggler': 'onToggleDetails'
      };

      FeatureFlagView.prototype.onToggleValue = function(e) {
        return this.toggleValue($(e.currentTarget));
      };

      FeatureFlagView.prototype.onToggleDetails = function(e) {
        return this.toggleDetailsArrow();
      };

      FeatureFlagView.prototype.toggleDetailsArrow = function() {
        this.$detailToggle.toggleClass('icon-mini-arrow-right');
        return this.$detailToggle.toggleClass('icon-mini-arrow-down');
      };

      FeatureFlagView.prototype.shouldDelete = function(action) {
        var _ref1;

        return ((_ref1 = ENV.ACCOUNT) != null ? _ref1.site_admin : void 0) && this.model.get('hidden') && action === 'off';
      };

      FeatureFlagView.prototype.toggleValue = function($target) {
        var action,
          _this = this;

        action = $target.data('action');
        return $.when(this.canUpdate(action)).then(function() {
          $target.siblings().removeClass('active').attr('aria-checked', false);
          $target.addClass('active').attr('aria-checked', true);
          if (_this.shouldDelete(action)) {
            return _this.deleteFlag();
          } else {
            return _this.updateFlag(action);
          }
        });
      };

      FeatureFlagView.prototype.canUpdate = function(action) {
        var deferred, view, warning;

        deferred = $.Deferred();
        warning = this.model.warningFor(action);
        if (!warning) {
          return deferred.resolve();
        }
        view = new FeatureFlagDialog({
          deferred: deferred,
          message: warning.message,
          title: this.model.get('display_name'),
          hasCancelButton: !warning.locked
        });
        view.render();
        view.show();
        return deferred;
      };

      FeatureFlagView.prototype.deleteFlag = function() {
        return this.model.destroy({
          silent: true
        });
      };

      FeatureFlagView.prototype.updateFlag = function(action) {
        return this.model.save({
          state: action
        }).then(this.model.updateTransitions);
      };

      return FeatureFlagView;

    })(Backbone.View);
  });

}).call(this);
