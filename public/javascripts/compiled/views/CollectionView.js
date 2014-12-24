(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!instructure', 'jquery', 'underscore', 'Backbone', 'jst/collectionView'], function(I18n, $, _, Backbone, template) {
    var CollectionView, _ref;

    return CollectionView = (function(_super) {
      __extends(CollectionView, _super);

      function CollectionView() {
        this.renderItem = __bind(this.renderItem, this);
        this.renderOnAdd = __bind(this.renderOnAdd, this);
        this.removeItem = __bind(this.removeItem, this);
        this.renderOnReset = __bind(this.renderOnReset, this);
        this.removePreviousItems = __bind(this.removePreviousItems, this);
        this.reorder = __bind(this.reorder, this);
        this.render = __bind(this.render, this);        _ref = CollectionView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      CollectionView.optionProperty('itemView');

      CollectionView.optionProperty('itemViewOptions');

      CollectionView.optionProperty('emptyMessage');

      CollectionView.optionProperty('listClassName');

      CollectionView.prototype.className = 'collectionView';

      CollectionView.prototype.els = {
        '.collectionViewItems': '$list'
      };

      CollectionView.prototype.defaults = {
        itemViewOptions: {},
        emptyMessage: I18n.t("no_items", "No items.")
      };

      CollectionView.prototype.template = template;

      CollectionView.prototype.initialize = function(options) {
        CollectionView.__super__.initialize.apply(this, arguments);
        return this.attachCollection();
      };

      CollectionView.prototype.render = function() {
        CollectionView.__super__.render.apply(this, arguments);
        if (!this.empty) {
          this.renderItems();
        }
        return this;
      };

      CollectionView.prototype.toJSON = function() {
        return _.extend(this.options, {
          emptyMessage: this.emptyMessage,
          listClassName: this.listClassName,
          ENV: ENV
        });
      };

      CollectionView.prototype.reorder = function() {
        var children, model, _ref1;

        this.collection.sort();
        this.$list.children().detach();
        children = (function() {
          var _i, _len, _ref1, _results;

          _ref1 = this.collection.models;
          _results = [];
          for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
            model = _ref1[_i];
            _results.push(model.itemView.$el);
          }
          return _results;
        }).call(this);
        return (_ref1 = this.$list).append.apply(_ref1, children);
      };

      CollectionView.prototype.attachCollection = function() {
        this.listenTo(this.collection, 'reset', this.renderOnReset);
        this.listenTo(this.collection, 'add', this.renderOnAdd);
        this.listenTo(this.collection, 'remove', this.removeItem);
        return this.empty = !this.collection.length;
      };

      CollectionView.prototype.detachCollection = function() {
        return this.stopListening(this.collection);
      };

      CollectionView.prototype.switchCollection = function(collection) {
        this.detachCollection();
        this.collection = collection;
        return this.attachCollection();
      };

      CollectionView.prototype.removePreviousItems = function(models) {
        var model, _i, _len, _ref1, _results;

        _results = [];
        for (_i = 0, _len = models.length; _i < _len; _i++) {
          model = models[_i];
          _results.push((_ref1 = model.view) != null ? _ref1.remove() : void 0);
        }
        return _results;
      };

      CollectionView.prototype.renderOnReset = function(models, options) {
        this.empty = !this.collection.length;
        this.removePreviousItems(options.previousModels);
        return this.render();
      };

      CollectionView.prototype.renderItems = function() {
        return this.collection.each(this.renderItem);
      };

      CollectionView.prototype.removeItem = function(model) {
        this.empty = !this.collection.length;
        if (this.empty) {
          return this.render();
        } else {
          return model.view.remove();
        }
      };

      CollectionView.prototype.renderOnAdd = function(model) {
        if (this.empty) {
          this.render();
        }
        this.empty = false;
        return this.renderItem(model);
      };

      CollectionView.prototype.renderItem = function(model) {
        var view;

        view = this.createItemView(model);
        view.render();
        if (typeof this.attachItemView === "function") {
          this.attachItemView(model, view);
        }
        return this.insertView(view);
      };

      CollectionView.prototype.createItemView = function(model) {
        var view;

        view = new this.itemView($.extend({}, this.itemViewOptions || {}, {
          model: model
        }));
        model.itemView = view;
        return view;
      };

      CollectionView.prototype.insertView = function(view) {
        var index;

        index = this.collection.indexOf(view.model);
        if (index === 0) {
          return this.prependView(view);
        } else if (index === this.collection.length - 1) {
          return this.appendView(view);
        } else {
          return this.insertViewAtIndex(view, index);
        }
      };

      CollectionView.prototype.insertViewAtIndex = function(view, index) {
        var $sibling;

        $sibling = this.$list.children().eq(index);
        if ($sibling.length) {
          return $sibling.before(view.el);
        } else {
          return this.$list.append(view.el);
        }
      };

      CollectionView.prototype.prependView = function(view) {
        return this.$list.prepend(view.el);
      };

      CollectionView.prototype.appendView = function(view) {
        return this.$list.append(view.el);
      };

      return CollectionView;

    })(Backbone.View);
  });

}).call(this);
