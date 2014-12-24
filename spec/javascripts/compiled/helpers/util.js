(function() {
  define(['jquery', 'underscore'], function($, _) {
    return {
      closeDialog: function() {
        return $('.ui-dialog-content').dialog('close');
      },
      useOldDebounce: function() {
        return _.debounce = function(func, wait, immediate) {
          return function() {
            var args, callNow, context, later, result, timeout, timestamp;

            context = this;
            args = arguments;
            timestamp = new Date();
            later = function() {
              var last, result, timeout;

              last = (new Date()) - timestamp;
              if (last < wait) {
                return timeout = setTimeout(later, wait - last);
              } else {
                timeout = null;
                if (!immediate) {
                  return result = func.apply(context, args);
                }
              }
            };
            callNow = immediate && !timeout;
            if (!timeout) {
              timeout = setTimeout(later, wait);
            }
            if (callNow) {
              result = func.apply(context, args);
            }
            return result;
          };
        };
      },
      debounce: _.debounce,
      useNormalDebounce: function() {
        return _.debounce = this.debounce;
      }
    };
  });

}).call(this);
