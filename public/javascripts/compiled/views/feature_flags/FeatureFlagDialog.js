(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!feature_flags', 'compiled/views/DialogBaseView', 'jst/feature_flags/featureFlagDialog'], function(I18n, DialogBaseView, template) {
    var FeatureFlagDialog, _ref;

    return FeatureFlagDialog = (function(_super) {
      __extends(FeatureFlagDialog, _super);

      function FeatureFlagDialog() {
        this.onConfirm = __bind(this.onConfirm, this);
        this.onCancel = __bind(this.onCancel, this);        _ref = FeatureFlagDialog.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      FeatureFlagDialog.optionProperty('deferred');

      FeatureFlagDialog.optionProperty('message');

      FeatureFlagDialog.optionProperty('title');

      FeatureFlagDialog.optionProperty('hasCancelButton');

      FeatureFlagDialog.prototype.template = template;

      FeatureFlagDialog.prototype.labels = {
        okay: I18n.t('#buttons.okay', 'Okay'),
        cancel: I18n.t('#buttons.cancel', 'Cancel')
      };

      FeatureFlagDialog.prototype.dialogOptions = function() {
        var options;

        options = {
          title: this.title,
          height: 300,
          width: 500,
          buttons: [
            {
              text: this.labels.okay,
              click: this.onConfirm,
              "class": 'btn-primary'
            }
          ]
        };
        if (this.hasCancelButton) {
          options.buttons.unshift({
            text: this.labels.cancel,
            click: this.onCancel
          });
        }
        return options;
      };

      FeatureFlagDialog.prototype.onCancel = function(e) {
        this.deferred.reject();
        return this.close();
      };

      FeatureFlagDialog.prototype.onConfirm = function(e) {
        if (this.hasCancelButton) {
          this.deferred.resolve();
        } else {
          this.deferred.reject();
        }
        return this.close();
      };

      FeatureFlagDialog.prototype.toJSON = function() {
        return {
          message: this.message
        };
      };

      return FeatureFlagDialog;

    })(DialogBaseView);
  });

}).call(this);
