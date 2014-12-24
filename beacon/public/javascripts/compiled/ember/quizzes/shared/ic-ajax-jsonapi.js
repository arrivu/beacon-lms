(function() {
  define(['ic-ajax', 'jquery'], function(ajax, $) {
    var jsonapiAjax;

    return jsonapiAjax = function(url, opts) {
      var newArguments, options;

      options = {
        dataType: 'json',
        contentType: 'application/json',
        headers: {
          'Accepts': 'application/vnd.api+json'
        }
      };
      newArguments = arguments.length === 1 ? typeof url === 'string' ? $.extend(true, options, {
        url: url
      }) : typeof url === 'object' ? $.extend(true, options, url) : void 0 : $.extend(true, options, {
        url: url
      }, opts);
      return ajax.request(newArguments);
    };
  });

}).call(this);
