(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'Backbone'], function($, _arg) {
    var NavigationPillView, View, _ref;

    View = _arg.View;
    return NavigationPillView = (function(_super) {
      __extends(NavigationPillView, _super);

      function NavigationPillView() {
        _ref = NavigationPillView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      NavigationPillView.prototype.events = {
        'click a': 'onToggle'
      };

      NavigationPillView.prototype.onToggle = function(e) {
        e.preventDefault();
        return this.setActiveTab(e.target);
      };

      NavigationPillView.prototype.setActiveTab = function(active) {
        this.$('li').removeClass('active');
        $(active).parent().addClass('active');
        return this.trigger('pillchange', $(active).data('id'));
      };

      NavigationPillView.prototype.setActiveView = function(viewName) {
        return this.setActiveTab(this.$("[data-id=" + viewName + "]"));
      };

      return NavigationPillView;

    })(View);
  });

}).call(this);
