(function() {
  define(['./environment_setup'], function(env) {
    var testRedirection, verifyRoute;

    verifyRoute = function(path, expected) {
      visit(path);
      return andThen(function() {
        return wait().then(function() {
          var currentRoute;

          currentRoute = App.__container__.lookup('controller:application').get('currentRouteName');
          return equal(currentRoute, expected);
        });
      });
    };
    testRedirection = function(options) {
      var defaultRoute, path, redirectRoute;

      path = options.path, defaultRoute = options.defaultRoute, redirectRoute = options.redirectRoute;
      test("permissioned users should see " + defaultRoute, function() {
        env.setUserPermissions(true, true);
        return verifyRoute(path, defaultRoute);
      });
      return test('redirect non-permissioned users to #{redirectRoute}', function() {
        env.setUserPermissions(false, false);
        return verifyRoute(path, redirectRoute);
      });
    };
    return testRedirection;
  });

}).call(this);
