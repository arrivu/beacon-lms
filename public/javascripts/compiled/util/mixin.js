(function() {
  var __slice = [].slice;

  define(['underscore'], function(_arg) {
    var extend, flatten, magicMethodRegex, magicMethods, mixin;

    extend = _arg.extend, flatten = _arg.flatten;
    magicMethods = ['attach', 'afterRender', 'initialize'];
    magicMethodRegex = RegExp("^(?:__(" + (magicMethods.join('|')) + ")__|(" + (magicMethods.join('|')) + "))$");
    return mixin = function() {
      var alreadyMixedIn, key, match, method, mixins, notMixedInYet, parentClassKey, prop, target, _i, _j, _len, _len1, _name, _ref, _ref1, _ref2;

      target = arguments[0], mixins = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if ('function' === typeof target) {
        target = target.prototype;
      }
      for (_i = 0, _len = mixins.length; _i < _len; _i++) {
        mixin = mixins[_i];
        for (key in mixin) {
          prop = mixin[key];
          if (key === 'events' || key === 'defaults' || key === 'els') {
            parentClassKey = (_ref = target.constructor) != null ? _ref.prototype[key] : void 0;
            target[key] = extend({}, parentClassKey, target[key], prop);
          } else if (match = key.match(magicMethodRegex)) {
            _ref1 = match.slice(1), alreadyMixedIn = _ref1[0], notMixedInYet = _ref1[1];
            (target[_name = "__" + (alreadyMixedIn || notMixedInYet) + "__"] || (target[_name] = [])).push(prop);
          } else {
            target[key] = prop;
          }
        }
      }
      _ref2 = (function() {
        var _k, _len1, _results;

        _results = [];
        for (_k = 0, _len1 = magicMethods.length; _k < _len1; _k++) {
          method = magicMethods[_k];
          _results.push("__" + method + "__");
        }
        return _results;
      })();
      for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
        key = _ref2[_j];
        if (target[key]) {
          target[key] = flatten(target[key], true);
        }
      }
      return target;
    };
  });

}).call(this);
