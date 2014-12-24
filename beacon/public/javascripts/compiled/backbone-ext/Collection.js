(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __slice = [].slice;

  define(['vendor/backbone', 'underscore', 'compiled/util/mixin', 'compiled/backbone-ext/DefaultUrlMixin'], function(Backbone, _, mixin, DefaultUrlMixin) {
    var _ref;

    return Backbone.Collection = (function(_super) {
      __extends(Collection, _super);

      function Collection() {
        _ref = Collection.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Collection.mixin = function() {
        var mixins;

        mixins = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        return mixin.apply(null, [this].concat(__slice.call(mixins)));
      };

      Collection.mixin(DefaultUrlMixin);

      Collection.prototype.defaults = {
        params: void 0,
        resourceName: void 0,
        contextAssetString: void 0
      };

      Collection.optionProperty = function(property) {
        return this.__optionProperties__ = (this.__optionProperties__ || []).concat([property]);
      };

      Collection.prototype.setOptionProperties = function() {
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

      Collection.prototype.initialize = function(models, options) {
        this.options = _.extend({}, this.defaults, options);
        this.setOptionProperties();
        return Collection.__super__.initialize.apply(this, arguments);
      };

      Collection.prototype.setParam = function(name, value) {
        var _base, _ref1;

        if ((_ref1 = (_base = this.options).params) == null) {
          _base.params = {};
        }
        this.options.params[name] = value;
        return this.trigger('setParam', name, value);
      };

      Collection.prototype.setParams = function(params) {
        var name, value;

        for (name in params) {
          value = params[name];
          this.setParam(name, value);
        }
        return this.trigger('setParams', params);
      };

      Collection.prototype.deleteParam = function(name) {
        var _ref1;

        if ((_ref1 = this.options.params) != null) {
          delete _ref1[name];
        }
        return this.trigger('deleteParam', name);
      };

      Collection.prototype.fetch = function(options) {
        var _this = this;

        if (options == null) {
          options = {};
        }
        if ((options.data == null) && (this.options.params != null)) {
          options.data = this.options.params;
        }
        return Collection.__super__.fetch.call(this, options).then(null, function(xhr) {
          return _this.trigger('fetch:fail', xhr);
        });
      };

      Collection.prototype.url = function() {
        return this._defaultUrl();
      };

      Collection.optionProperty('contextAssetString');

      Collection.optionProperty('resourceName');

      Collection.prototype.parse = function(response, options) {
        var collectionKeys, collections, index, primaryCollection, primaryCollectionKey, rootMeta;

        if (response == null) {
          return Collection.__super__.parse.apply(this, arguments);
        }
        rootMeta = _.pick(response, 'meta', 'links', 'linked');
        if (_.isEmpty(rootMeta)) {
          return Collection.__super__.parse.apply(this, arguments);
        }
        collections = _.omit(response, 'meta', 'links', 'linked');
        if (_.isEmpty(collections)) {
          return Collection.__super__.parse.apply(this, arguments);
        }
        collectionKeys = _.keys(collections);
        primaryCollectionKey = _.first(collectionKeys);
        primaryCollection = collections[primaryCollectionKey];
        if (primaryCollection == null) {
          return Collection.__super__.parse.apply(this, arguments);
        }
        if (collectionKeys.length > 1) {
          if (typeof console !== "undefined" && console !== null) {
            if (typeof console.warn === "function") {
              console.warn("Found more then one primary collection, using '" + primaryCollectionKey + "'.");
            }
          }
        }
        index = {};
        _.each(rootMeta.linked || {}, function(link, key) {
          return index[key] = _.indexBy(link, 'id');
        });
        if (_.isEmpty(index)) {
          return Collection.__super__.parse.call(this, primaryCollection, options);
        }
        _.each(this.sideLoad || {}, function(meta, relation) {
          var collection, foreignKey;

          if (_.isBoolean(meta) && meta) {
            meta = {};
          }
          if (_.isString(meta)) {
            meta = {
              collection: meta
            };
          }
          if (!_.isObject(meta)) {
            return;
          }
          foreignKey = meta.foreignKey, collection = meta.collection;
          if (foreignKey == null) {
            foreignKey = "" + relation;
          }
          if (collection == null) {
            collection = "" + relation + "s";
          }
          collection = index[collection] || {};
          return _.each(primaryCollection, function(item) {
            var id, related;

            if (!item.links) {
              return;
            }
            related = null;
            id = item.links[foreignKey];
            if (_.isArray(id)) {
              if (_.isEmpty(collection)) {
                collection = index[relation] || index[foreignKey];
                if (collection == null) {
                  throw "Could not find linked collection for '" + relation + "' using '" + foreignKey + "'.";
                }
              }
              related = _.map(id, function(pk) {
                return collection[pk];
              });
            } else {
              related = collection[id];
            }
            if ((id != null) && (related != null)) {
              item[relation] = related;
              delete item.links[foreignKey];
              if (_.isEmpty(item.links)) {
                return delete item.links;
              }
            }
          });
        });
        return Collection.__super__.parse.call(this, primaryCollection, options);
      };

      return Collection;

    })(Backbone.Collection);
  });

}).call(this);
