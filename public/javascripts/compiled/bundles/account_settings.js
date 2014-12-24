(function() {
  require(['compiled/views/feature_flags/FeatureFlagAdminView', 'account_settings', 'compiled/bundles/modules/account_quota_settings'], function(FeatureFlagAdminView) {
    var featureFlags;

    featureFlags = new FeatureFlagAdminView({
      el: '#tab-features'
    });
    return featureFlags.collection.fetch();
  });

}).call(this);
