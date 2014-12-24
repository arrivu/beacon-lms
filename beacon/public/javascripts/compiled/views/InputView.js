(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone'], function(_arg) {
    var InputView, View, _ref;

    View = _arg.View;
    return InputView = (function(_super) {
      __extends(InputView, _super);

      function InputView() {
        _ref = InputView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      InputView.prototype.tagName = 'input';

      InputView.prototype.defaults = {
        modelAttribute: 'unnamed'
      };

      InputView.prototype.initialize = function() {
        InputView.__super__.initialize.apply(this, arguments);
        return this.setupElement();
      };

      InputView.prototype.setElement = function() {
        InputView.__super__.setElement.apply(this, arguments);
        return this.setupElement();
      };

      InputView.prototype.setupElement = function() {
        var _ref1, _ref2;

        this.lastValue = (_ref1 = this.el) != null ? _ref1.value : void 0;
        return this.modelAttribute = this.$el.attr('name') || ((_ref2 = this.options) != null ? _ref2.modelAttribute : void 0);
      };

      InputView.prototype.attach = function() {
        var _this = this;

        if (!this.collection) {
          return;
        }
        this.collection.on('beforeFetch', function() {
          return _this.$el.addClass('loading');
        });
        this.collection.on('fetch', function() {
          return _this.$el.removeClass('loading');
        });
        return this.collection.on('fetch:fail', function() {
          return _this.$el.removeClass('loading');
        });
      };

      InputView.prototype.updateModel = function() {
        var value;

        value = this.el.value;
        if (value && value.length < this.options.minLength && !(this.options.allowSmallerNumbers && value > 0)) {
          if (!this.options.setParamOnInvalid) {
            return;
          }
          value = false;
        }
        return this.setParam(value);
      };

      InputView.prototype.setParam = function(value) {
        var _ref1, _ref2, _ref3;

        if ((_ref1 = this.model) != null) {
          _ref1.set(this.modelAttribute, value);
        }
        if (value === '') {
          return (_ref2 = this.collection) != null ? _ref2.deleteParam(this.modelAttribute) : void 0;
        } else {
          return (_ref3 = this.collection) != null ? _ref3.setParam(this.modelAttribute, value) : void 0;
        }
      };

      return InputView;

    })(View);
  });

}).call(this);
