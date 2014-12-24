(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __slice = [].slice;

  define(['jquery', 'vendor/backbone', 'underscore', 'str/htmlEscape', 'compiled/util/mixin'], function($, Backbone, _, htmlEscape, mixin) {
    var _ref;

    Backbone.View = (function(_super) {
      __extends(View, _super);

      function View() {
        this.renderView = __bind(this.renderView, this);
        this.createBindings = __bind(this.createBindings, this);
        this.render = __bind(this.render, this);        _ref = View.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      View.prototype.defaults = {};

      View.prototype.els = null;

      View.optionProperty = function(property) {
        return this.__optionProperties__ = (this.__optionProperties__ || []).concat([property]);
      };

      View.optionProperty('template');

      View.child = function(name, selector) {
        var _ref1;

        this.optionProperty(name);
        if ((_ref1 = this.__childViews__) == null) {
          this.__childViews__ = [];
        }
        return this.__childViews__ = this.__childViews__.concat([
          {
            name: name,
            selector: selector
          }
        ]);
      };

      View.prototype.initialize = function(options) {
        var fn, _i, _len, _ref1;

        this.options = _.extend({}, this.defaults, options);
        this.setOptionProperties();
        this.storeChildrenViews();
        this.$el.data('view', this);
        this._setViewProperties();
        if (this.__initialize__) {
          _ref1 = this.__initialize__;
          for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
            fn = _ref1[_i];
            fn.call(this);
          }
        }
        this.attach();
        return this;
      };

      View.prototype.storeChildrenViews = function() {
        var _this = this;

        if (!this.constructor.__childViews__) {
          return;
        }
        return this.children = _.map(this.constructor.__childViews__, function(viewObj) {
          return _this[viewObj.name];
        });
      };

      View.prototype.setOptionProperties = function() {
        var property, _i, _len, _ref1, _results;

        _ref1 = this.constructor.__optionProperties__;
        _results = [];
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          property = _ref1[_i];
          if (this.options[property] !== void 0) {
            _results.push(this[property] = this.options[property]);
          } else {
            _results.push(void 0);
          }
        }
        return _results;
      };

      View.prototype.render = function() {
        this.renderEl();
        this._afterRender();
        return this;
      };

      View.prototype.renderEl = function() {
        if (this.template) {
          return this.$el.html(this.template(this.toJSON()));
        }
      };

      View.prototype.cacheEls = function() {
        var name, selector, _ref1, _results;

        if (this.els) {
          _ref1 = this.els;
          _results = [];
          for (selector in _ref1) {
            name = _ref1[selector];
            _results.push(this[name] = this.$(selector));
          }
          return _results;
        }
      };

      View.prototype._afterRender = function() {
        this.cacheEls();
        this.createBindings();
        if (this.options.views) {
          this.renderViews();
        }
        this.renderChildViews();
        return this.afterRender();
      };

      View.prototype.afterRender = function() {
        var fn, _i, _len, _ref1, _results;

        if (this.__afterRender__) {
          _ref1 = this.__afterRender__;
          _results = [];
          for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
            fn = _ref1[_i];
            _results.push(fn.call(this));
          }
          return _results;
        }
      };

      View.prototype.attach = function() {
        var fn, _i, _len, _ref1, _results;

        if (this.__attach__) {
          _ref1 = this.__attach__;
          _results = [];
          for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
            fn = _ref1[_i];
            _results.push(fn.call(this));
          }
          return _results;
        }
      };

      View.prototype.toJSON = function() {
        var json, model;

        model = this.model || this.collection;
        json = model ? model.present ? model.present() : model.toJSON() : this.options;
        json.cid = this.cid;
        if (window.ENV != null) {
          json.ENV = window.ENV;
        }
        return json;
      };

      View.prototype.renderChildViews = function() {
        var name, selector, target, _i, _len, _ref1, _ref2;

        if (!this.constructor.__childViews__) {
          return;
        }
        _ref1 = this.constructor.__childViews__;
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          _ref2 = _ref1[_i], name = _ref2.name, selector = _ref2.selector;
          if (this[name] == null) {
            if (typeof console !== "undefined" && console !== null) {
              if (typeof console.warn === "function") {
                console.warn("I need a child view '" + name + "' but one was not provided");
              }
            }
          }
          if (!this[name]) {
            continue;
          }
          target = this.$(selector);
          this[name].setElement(target);
          this[name].render();
        }
        return null;
      };

      View.prototype.createBindings = function(index, el) {
        var _this = this;

        return this.$('[data-bind]').each(function(index, el) {
          var $el, attribute;

          $el = $(el);
          attribute = $el.data('bind');
          return _this.model.on("change:" + attribute, function(model, value) {
            return $el.html(_this.format(attribute, value));
          });
        });
      };

      View.prototype.format = function(attribute, value) {
        return htmlEscape(value);
      };

      View.prototype.stopPropagation = function(event) {
        return event.stopPropagation();
      };

      View.mixin = function() {
        var mixins;

        mixins = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        return mixin.apply(null, [this].concat(__slice.call(mixins)));
      };

      View.prototype.renderViews = function() {
        return _.each(this.options.views, this.renderView);
      };

      View.prototype.renderView = function(view, selector) {
        var target, _ref1;

        target = this.$("#" + selector);
        if (!target.length) {
          target = this.$("." + selector);
        }
        view.setElement(target);
        view.render();
        return (_ref1 = this[selector]) != null ? _ref1 : this[selector] = view;
      };

      View.prototype.hide = function() {
        return this.$el.hide();
      };

      View.prototype.show = function() {
        return this.$el.show();
      };

      View.prototype.toggle = function() {
        return this.$el.toggle();
      };

      View.prototype._setViewProperties = function() {
        if (this.setViewProperties === false) {
          return;
        }
        if (this.model) {
          this.model.view = this;
        }
        if (this.collection) {
          this.collection.view = this;
        }
      };

      return View;

    })(Backbone.View);
    return Backbone.View;
  });

}).call(this);
