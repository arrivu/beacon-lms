(function() {
  require(['jquery', 'underscore', 'Backbone', 'compiled/views/course_settings/NavigationView', 'compiled/collections/UserCollection', 'compiled/views/feature_flags/FeatureFlagAdminView', 'vendor/jquery.cookie', 'course_settings', 'grading_standards'], function($, _, Backbone, NavigationView, UserCollection, FeatureFlagAdminView) {
    var featureFlagView, nav_view;

    nav_view = new NavigationView({
      el: $('#tab-navigation')
    });
    featureFlagView = new FeatureFlagAdminView({
      el: '#tab-features'
    });
    featureFlagView.collection.fetch();
    return $(function() {
      return nav_view.render();
    });
  });

}).call(this);
