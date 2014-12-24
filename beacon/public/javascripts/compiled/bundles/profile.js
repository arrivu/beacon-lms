(function() {
  require(['compiled/views/feature_flags/FeatureFlagAdminView', 'compiled/util/BackoffPoller', 'profile', 'user_sortable_name', 'communication_channels', 'compiled/profile/confirmEmail'], function(FeatureFlagAdminView) {
    var view;

    view = new FeatureFlagAdminView({
      el: '.feature-flag-wrapper'
    });
    return view.collection.fetch();
  });

}).call(this);
