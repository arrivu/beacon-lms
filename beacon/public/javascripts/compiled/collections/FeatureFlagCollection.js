(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['underscore', 'Backbone', 'compiled/models/FeatureFlag'], function(_, Backbone, FeatureFlag) {
    var FeatureFlagCollection, _ref;

    return FeatureFlagCollection = (function(_super) {
      __extends(FeatureFlagCollection, _super);

      function FeatureFlagCollection() {
        _ref = FeatureFlagCollection.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      FeatureFlagCollection.prototype.model = FeatureFlag;

      FeatureFlagCollection.prototype.fetch = function(options) {
        if (options == null) {
          options = {};
        }
        options.data = _.extend({
          per_page: 20
        }, options.data || {});
        return FeatureFlagCollection.__super__.fetch.call(this, options);
      };

      return FeatureFlagCollection;

    })(Backbone.Collection);
  });

}).call(this);
