(function() {
  define(['../shared/environment'], function(env) {
    window.ENV = {
      context_asset_string: 'course_1',
      PERMISSIONS: {
        manage: false,
        update: false
      },
      FLAGS: {
        differentiated_assignments: true
      }
    };
    env.setEnv(ENV);
    return {
      setUserPermissions: function(canManage, canUpdate) {
        var prevContextAsset;

        prevContextAsset = env.get('env').context_asset_string;
        env.setEnv({
          context_asset_string: prevContextAsset,
          PERMISSIONS: {
            manage: canManage,
            update: canUpdate
          }
        });
        return env;
      }
    };
  });

}).call(this);
