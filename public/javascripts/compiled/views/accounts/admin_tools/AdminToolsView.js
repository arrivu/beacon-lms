(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'jquery', 'jst/accounts/admin_tools/AdminTools', 'jqueryui/tabs'], function(Backbone, $, template) {
    var AdminToolsView, _ref;

    return AdminToolsView = (function(_super) {
      __extends(AdminToolsView, _super);

      function AdminToolsView() {
        _ref = AdminToolsView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      AdminToolsView.child('restoreContentPaneView', '#restoreContentPane');

      AdminToolsView.child('messageContentPaneView', '#commMessagesPane');

      AdminToolsView.child('loggingContentPaneView', '#loggingPane');

      AdminToolsView.optionProperty('tabs');

      AdminToolsView.prototype.template = template;

      AdminToolsView.prototype.els = {
        '#adminToolsTabs': '$adminToolsTabs'
      };

      AdminToolsView.prototype.afterRender = function() {
        return this.$adminToolsTabs.tabs();
      };

      AdminToolsView.prototype.toJSON = function(json) {
        json = AdminToolsView.__super__.toJSON.apply(this, arguments);
        json.courseRestore = this.tabs.courseRestore;
        json.viewMessages = this.tabs.viewMessages;
        json.logging = this.tabs.logging;
        return json;
      };

      return AdminToolsView;

    })(Backbone.View);
  });

}).call(this);
