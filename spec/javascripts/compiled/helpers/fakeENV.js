(function() {
  define(['underscore'], function(_) {
    return {
      setup: function(options) {
        var defaults;

        if (options == null) {
          options = {};
        }
        if (!window.ENV) {
          window.ENV = {};
        }
        defaults = {
          current_user_id: 1,
          current_user_roles: ["user", "teacher", "admin", "student"],
          current_user_cache_key: "users/1-20111116001415",
          context_asset_string: "user_1",
          domain_root_account_cache_key: "accounts/1-20111117224337",
          context_cache_key: "users/1-20111116001415",
          PERMISSIONS: {}
        };
        return window.ENV = _.extend(defaults, options);
      },
      teardown: function() {
        return window.ENV = {};
      }
    };
  });

}).call(this);
