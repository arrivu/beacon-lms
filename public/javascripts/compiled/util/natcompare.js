(function() {
  define([], function() {
    return {
      strings: function(x, y) {
        return x.localeCompare(y, window.I18n.locale, {
          sensitivity: 'accent',
          ignorePunctuation: true,
          numeric: true
        });
      },
      by: function(f) {
        var _this = this;

        return function(x, y) {
          return _this.strings(f(x), f(y));
        };
      },
      byKey: function(key) {
        return this.by(function(x) {
          return x[key];
        });
      },
      byGet: function(key) {
        return this.by(function(x) {
          return x.get(key);
        });
      }
    };
  });

}).call(this);
