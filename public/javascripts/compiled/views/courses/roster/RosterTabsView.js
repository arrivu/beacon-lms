(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!roster', 'jquery', 'underscore', 'Backbone', 'jst/courses/roster/rosterTabs'], function(I18n, $, _, Backbone, template) {
    var RosterTabsView, _ref;

    return RosterTabsView = (function(_super) {
      __extends(RosterTabsView, _super);

      function RosterTabsView() {
        _ref = RosterTabsView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      RosterTabsView.prototype.template = template;

      RosterTabsView.prototype.tagName = 'li';

      RosterTabsView.prototype.className = 'collectionViewItems ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all';

      RosterTabsView.prototype.attach = function() {
        return this.collection.on('reset', this.render, this);
      };

      RosterTabsView.prototype.fetch = function() {
        if (ENV.canManageCourse) {
          return this.collection.fetch();
        }
      };

      RosterTabsView.prototype.toJSON = function() {
        var json;

        json = {};
        json.collection = RosterTabsView.__super__.toJSON.apply(this, arguments);
        json.course = ENV.course;
        return json;
      };

      return RosterTabsView;

    })(Backbone.View);
  });

}).call(this);
