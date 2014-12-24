(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!account_settings', 'jquery', 'underscore', 'Backbone', 'jst/feature_flags/featureFlagAdminView', 'compiled/collections/FeatureFlagCollection', 'compiled/views/feature_flags/FeatureFlagListView'], function(I18n, $, _, Backbone, template, FeatureFlagCollection, FeatureFlagListView) {
    var FeatureFlagAdminView;

    return FeatureFlagAdminView = (function(_super) {
      __extends(FeatureFlagAdminView, _super);

      FeatureFlagAdminView.prototype.template = template;

      FeatureFlagAdminView.prototype["default"] = {
        account: [],
        rootaccount: [],
        course: [],
        user: []
      };

      FeatureFlagAdminView.prototype.els = {
        '.alert': '$alertBox'
      };

      FeatureFlagAdminView.prototype.featureGroups = ['account', 'course', 'user'];

      FeatureFlagAdminView.prototype.titles = {
        account: I18n.t('account', 'Account'),
        course: I18n.t('course', 'Course'),
        user: I18n.t('user', 'User')
      };

      function FeatureFlagAdminView() {
        this.onSync = __bind(this.onSync, this);        FeatureFlagAdminView.__super__.constructor.apply(this, arguments);
        this.collection = new FeatureFlagCollection;
        this.attachEvents();
      }

      FeatureFlagAdminView.prototype.attachEvents = function() {
        return this.collection.on('sync', this.onSync);
      };

      FeatureFlagAdminView.prototype.onSync = function(collection, response, xhr) {
        this.collection.off('sync');
        return this.render();
      };

      FeatureFlagAdminView.prototype.shouldShowTitles = function(features) {
        var counts;

        counts = _.map(this.featureGroups, function(key) {
          return features[key].length;
        });
        return _.reject(counts, function(count) {
          return count === 0;
        }).length > 1;
      };

      FeatureFlagAdminView.prototype.render = function() {
        var features,
          _this = this;

        FeatureFlagAdminView.__super__.render.apply(this, arguments);
        if (this.collection.length) {
          this.$alertBox.hide();
        } else {
          this.$alertBox.show();
        }
        features = _.extend({}, this["default"], this.collection.groupBy('appliesTo'));
        features.account = features.account.concat(features.rootaccount);
        return _.each(this.featureGroups, function(group) {
          var title, view, _ref;

          if (!((_ref = features[group]) != null ? _ref.length : void 0)) {
            return;
          }
          title = _this.shouldShowTitles(features) ? _this.titles[group] : null;
          view = new FeatureFlagListView({
            collection: new Backbone.Collection(features[group]),
            el: $("." + group + "-feature-flags"),
            title: title
          });
          return view.render();
        });
      };

      return FeatureFlagAdminView;

    })(Backbone.View);
  });

}).call(this);
