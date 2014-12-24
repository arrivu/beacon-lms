(function() {
  define([], function() {
    var ModuleItemViewRegister;

    return ModuleItemViewRegister = (function() {
      function ModuleItemViewRegister() {}

      ModuleItemViewRegister.views = {};

      ModuleItemViewRegister.register = function(options) {
        var key, view;

        key = options != null ? options.key : void 0;
        view = options != null ? options.view : void 0;
        return this.views[key] = view;
      };

      return ModuleItemViewRegister;

    })();
  });

}).call(this);
