(function() {
  define(['react'], function(React) {
    var reactDomIsInjected, withReactDOM;

    reactDomIsInjected = false;
    return withReactDOM = function(fn) {
      return function() {
        var key, originals, retVal;

        if (reactDomIsInjected) {
          return fn.apply(this, arguments);
        }
        originals = {};
        for (key in React.DOM) {
          if (key in window) {
            originals[key] = window[key];
          }
          window[key] = React.DOM[key];
        }
        reactDomIsInjected = true;
        retVal = fn.apply(this, arguments);
        for (key in React.DOM) {
          if (key in originals) {
            window[key] = originals[key];
          } else {
            delete window[key];
          }
        }
        reactDomIsInjected = false;
        return retVal;
      };
    };
  });

}).call(this);
