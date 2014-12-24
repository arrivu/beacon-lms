(function() {
  define(['ember', 'ic-ajax', './parse_link_header'], function(_arg, ajax, parseLinkHeader) {
    var $, ArrayProxy, fetch, fetchAllPages;

    $ = _arg.$, ArrayProxy = _arg.ArrayProxy;
    fetch = function(url, options) {
      var opts, records;

      opts = $.extend({
        dataType: "json"
      }, {
        data: options.data
      });
      records = options.records;
      return ajax.raw(url, opts).then(function(result) {
        var meta, response;

        response = options.process ? options.process(result.response) : result.response;
        records.pushObjects(response);
        meta = parseLinkHeader(result.jqXHR);
        if (meta.next) {
          return fetch(meta.next, options);
        } else {
          records.set('isLoaded', true);
          records.set('isLoading', false);
          return records;
        }
      });
    };
    return fetchAllPages = function(url, options) {
      var records;

      if (options == null) {
        options = {};
      }
      records = options.records || (options.records = ArrayProxy.create({
        content: []
      }));
      records.set('isLoading', true);
      records.set('promise', fetch(url, options));
      return records;
    };
  });

}).call(this);
