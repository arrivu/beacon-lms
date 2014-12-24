(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'jst/ExternalTools/ExternalContentReturnView'], function($, template) {
    var ExternalContentReturnView, _ref;

    return ExternalContentReturnView = (function(_super) {
      __extends(ExternalContentReturnView, _super);

      function ExternalContentReturnView() {
        this._contentCancel = __bind(this._contentCancel, this);
        this._contentReady = __bind(this._contentReady, this);
        this.removeDialog = __bind(this.removeDialog, this);        _ref = ExternalContentReturnView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      ExternalContentReturnView.prototype.template = template;

      ExternalContentReturnView.optionProperty('launchType');

      ExternalContentReturnView.optionProperty('launchParams');

      ExternalContentReturnView.optionProperty('displayAsModal');

      ExternalContentReturnView.prototype.defaults = {
        displayAsModal: true
      };

      ExternalContentReturnView.prototype.els = {
        'iframe.tool_launch': "$iframe"
      };

      ExternalContentReturnView.prototype.attach = function() {
        var _this = this;

        return this.model.on('change', function() {
          return _this.render();
        });
      };

      ExternalContentReturnView.prototype.toJSON = function() {
        var json;

        json = ExternalContentReturnView.__super__.toJSON.apply(this, arguments);
        json.launch_url = this.model.launchUrl(this.launchType, this.launchParams);
        return json;
      };

      ExternalContentReturnView.prototype.afterRender = function() {
        var settings, _ref1;

        this.attachLtiEvents();
        settings = this.model.get(this.launchType) || {};
        this.$iframe.width('100%');
        this.$iframe.height(settings.selection_height);
        if (this.displayAsModal) {
          return this.$el.dialog({
            title: ((_ref1 = this.model.get(this.launchType)) != null ? _ref1.label : void 0) || '',
            width: settings.selection_width,
            height: settings.selection_height,
            resizable: true,
            close: this.removeDialog
          });
        }
      };

      ExternalContentReturnView.prototype.attachLtiEvents = function() {
        $(window).on('externalContentReady', this._contentReady);
        return $(window).on('externalContentCancel', this._contentCancel);
      };

      ExternalContentReturnView.prototype.detachLtiEvents = function() {
        $(window).off('externalContentReady', this._contentReady);
        return $(window).off('externalContentCancel', this._contentCancel);
      };

      ExternalContentReturnView.prototype.removeDialog = function() {
        this.detachLtiEvents();
        return this.remove();
      };

      ExternalContentReturnView.prototype._contentReady = function(event, data) {
        this.trigger('ready', data);
        return this.removeDialog();
      };

      ExternalContentReturnView.prototype._contentCancel = function(event, data) {
        this.trigger('cancel', data);
        return this.removeDialog();
      };

      return ExternalContentReturnView;

    })(Backbone.View);
  });

}).call(this);
