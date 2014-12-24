(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'jst/content_migrations/subviews/ExternalToolLaunch', 'jquery'], function(Backbone, template, $) {
    var ExternalToolLaunchView, _ref;

    return ExternalToolLaunchView = (function(_super) {
      __extends(ExternalToolLaunchView, _super);

      function ExternalToolLaunchView() {
        this.setUrl = __bind(this.setUrl, this);        _ref = ExternalToolLaunchView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      ExternalToolLaunchView.prototype.template = template;

      ExternalToolLaunchView.prototype.events = {
        "click #externalToolLaunch": "launchExternalTool"
      };

      ExternalToolLaunchView.prototype.els = {
        '.file_name': '$fileName'
      };

      ExternalToolLaunchView.optionProperty('contentReturnView');

      ExternalToolLaunchView.prototype.initialize = function(options) {
        ExternalToolLaunchView.__super__.initialize.call(this, options);
        return this.contentReturnView.on('ready', this.setUrl);
      };

      ExternalToolLaunchView.prototype.launchExternalTool = function(event) {
        event.preventDefault();
        return this.contentReturnView.render();
      };

      ExternalToolLaunchView.prototype.setUrl = function(data) {
        this.$fileName.html(data.text);
        return this.model.set('settings', {
          file_url: data.url
        });
      };

      return ExternalToolLaunchView;

    })(Backbone.View);
  });

}).call(this);
