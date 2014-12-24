(function() {
  define(['ember'], function(Ember) {
    return Ember.Mixin.create({
      actions: {
        loading: function(transition) {
          var inLoadingRoute;

          inLoadingRoute = transition.router.currentHandlerInfos.some(function(handler) {
            return handler.name === 'loading';
          });
          if (!inLoadingRoute) {
            Ember.$('body').addClass('ember-loading-overlay');
            transition.promise["finally"](function() {
              return Ember.$('body').removeClass('ember-loading-overlay');
            });
          }
          return true;
        }
      }
    });
  });

}).call(this);
