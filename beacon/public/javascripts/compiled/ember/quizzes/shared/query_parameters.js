(function() {
  define(['ember'], function(Ember) {
    var $, EXTRACTOR;

    $ = Ember.$;
    EXTRACTOR = /[\?|\&]([\w|\[|\]]+\=([^\?\&]+))/g;
    return {
      composeUrl: function(url, queryParams) {
        if (!queryParams) {
          return url;
        }
        return [url, decodeURIComponent($.param(queryParams))].join('?');
      },
      extractParameters: function(queryString) {
        var fragments;

        queryString || (queryString = '');
        fragments = queryString.match(EXTRACTOR) || [];
        return fragments.reduce(function(params, entry) {
          var isArray, k, v, _ref;

          entry = entry.substr(1);
          _ref = entry.split('='), k = _ref[0], v = _ref[1];
          isArray = k.substr(-2) === '[]';
          if (isArray) {
            k = k.substr(0, k.length - 2);
            params[k] = params[k] || [];
            params[k].push(v);
          } else {
            params[k] = v;
          }
          return params;
        }, {});
      },
      extractUrl: function(queryString) {
        queryString || (queryString = '');
        return queryString.replace(/\?[^=]+=.*$/, '');
      }
    };
  });

}).call(this);
