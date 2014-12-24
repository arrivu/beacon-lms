(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!dialog', 'jquery', 'underscore', 'Backbone', 'jqueryui/dialog'], function(I18n, $, _, Backbone) {
    var DialogBaseView, _ref;

    return DialogBaseView = (function(_super) {
      __extends(DialogBaseView, _super);

      function DialogBaseView() {
        this.cancel = __bind(this.cancel, this);        _ref = DialogBaseView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      DialogBaseView.prototype.initialize = function() {
        DialogBaseView.__super__.initialize.apply(this, arguments);
        this.initDialog();
        return this.setElement(this.dialog);
      };

      DialogBaseView.prototype.defaultOptions = function() {
        return {
          autoOpen: false,
          width: 420,
          resizable: false,
          buttons: []
        };
      };

      DialogBaseView.prototype.initDialog = function() {
        var opts;

        opts = _.extend({}, this.defaultOptions(), {
          buttons: [
            {
              text: I18n.t('#buttons.cancel', 'Cancel'),
              'class': 'cancel_button',
              click: this.cancel
            }, {
              text: I18n.t('#buttons.update', 'Update'),
              'class': 'btn-primary',
              click: this.update
            }
          ]
        }, _.result(this, 'dialogOptions'));
        this.dialog = $("<div id=\"" + opts.id + "\"></div>").appendTo('body').dialog(opts);
        if (opts.containerId) {
          this.dialog.parent().attr('id', opts.containerId);
        }
        return this.dialog;
      };

      DialogBaseView.prototype.show = function() {
        return this.dialog.dialog('open');
      };

      DialogBaseView.prototype.close = function() {
        return this.dialog.dialog('close');
      };

      DialogBaseView.prototype.update = function(e) {
        throw 'Not yet implemented';
      };

      DialogBaseView.prototype.cancel = function(e) {
        e.preventDefault();
        return this.close();
      };

      return DialogBaseView;

    })(Backbone.View);
  });

}).call(this);
