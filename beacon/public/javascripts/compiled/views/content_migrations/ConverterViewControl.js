(function() {
  define(['jquery', 'underscore', 'vendor/jquery.ba-tinypubsub'], function($, _) {
    var ConverterViewControl;

    return ConverterViewControl = (function() {
      function ConverterViewControl() {}

      ConverterViewControl.subscribed = false;

      ConverterViewControl.registeredViews = [];

      ConverterViewControl.getModel = function() {
        return this._model;
      };

      ConverterViewControl.setModel = function(model) {
        if (!this._model) {
          return this._model = model;
        }
      };

      ConverterViewControl.register = function(options) {
        this.registeredViews.push(options);
        if (!this.subscribed) {
          $.subscribe('contentImportChange', this.renderView);
          return this.subscribed = true;
        }
      };

      ConverterViewControl.resetControl = function() {
        this.subscribed = false;
        return this.registeredViews.length = 0;
      };

      ConverterViewControl.getView = function(key) {
        return _.find(ConverterViewControl.registeredViews, function(regView) {
          return regView.key === key;
        });
      };

      ConverterViewControl.renderView = function(options) {
        var migrationConverterView, regView, value, _ref;

        value = options.value;
        migrationConverterView = options.migrationConverter;
        regView = ConverterViewControl.getView(value);
        if (regView != null ? (_ref = regView.view) != null ? _ref.validateBeforeSave : void 0 : void 0) {
          migrationConverterView.validateBeforeSave = regView.view.validateBeforeSave;
        }
        return migrationConverterView.renderConverter(regView != null ? regView.view : void 0);
      };

      return ConverterViewControl;

    }).call(this);
  });

}).call(this);
