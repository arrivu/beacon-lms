(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['underscore', 'compiled/views/CollectionView', 'compiled/views/feature_flags/FeatureFlagView', 'jst/feature_flags/featureFlagList'], function(_, CollectionView, FeatureFlagView, template) {
    var FeatureFlagListView, _ref;

    return FeatureFlagListView = (function(_super) {
      __extends(FeatureFlagListView, _super);

      function FeatureFlagListView() {
        _ref = FeatureFlagListView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      FeatureFlagListView.prototype.tagName = 'div';

      FeatureFlagListView.optionProperty('flags');

      FeatureFlagListView.optionProperty('title');

      FeatureFlagListView.prototype.template = template;

      FeatureFlagListView.prototype.itemView = FeatureFlagView;

      FeatureFlagListView.prototype.toJSON = function() {
        return _.extend(FeatureFlagListView.__super__.toJSON.apply(this, arguments), {
          title: this.title
        });
      };

      return FeatureFlagListView;

    })(CollectionView);
  });

}).call(this);
