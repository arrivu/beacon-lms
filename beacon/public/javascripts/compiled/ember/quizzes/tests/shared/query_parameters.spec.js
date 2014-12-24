(function() {
  define(['../../shared/query_parameters'], function(QueryParameters) {
    var jsonEqual;

    module('QueryParameters');
    jsonEqual = function(a, b) {
      return strictEqual(JSON.stringify(a), JSON.stringify(b));
    };
    test('#composeUrl: it adds a scalar parameter', function() {
      return equal(QueryParameters.composeUrl('/items', {
        page: 1
      }), '/items?page=1');
    });
    test('#composeUrl: it adds an array parameter', function() {
      var url;

      url = QueryParameters.composeUrl('/items', {
        types: ['fruit', 'vegetables']
      });
      return equal(url, '/items?types[]=fruit&types[]=vegetables');
    });
    test('#composeUrl: it adds a mix of scalar and array parameters', function() {
      var url;

      url = QueryParameters.composeUrl('/items', {
        page: 1,
        types: ['fruit', 'vegetables']
      });
      return equal(url, '/items?page=1&types[]=fruit&types[]=vegetables');
    });
    test('#extractParameters: it extracts nothing', function() {
      jsonEqual(QueryParameters.extractParameters(''), {});
      jsonEqual(QueryParameters.extractParameters('/items'), {});
      jsonEqual(QueryParameters.extractParameters('/items?'), {});
      jsonEqual(QueryParameters.extractParameters('/items?page'), {});
      jsonEqual(QueryParameters.extractParameters('/items?page='), {});
      return jsonEqual(QueryParameters.extractParameters('/items?page=&'), {});
    });
    test('#extractParameters: it extracts a scalar', function() {
      var params;

      params = QueryParameters.extractParameters('/items?page=1');
      return jsonEqual(params, {
        page: '1'
      });
    });
    test('#extractParameters: it extracts an array', function() {
      var params;

      params = QueryParameters.extractParameters('/items?types[]=fruit&types[]=vegetables');
      return jsonEqual(params, {
        types: ['fruit', 'vegetables']
      });
    });
    test('#extractParameters: it extracts a mix of scalars and arrays', function() {
      var params;

      params = QueryParameters.extractParameters('/items?page=1&types[]=fruit&types[]=vegetables');
      return jsonEqual(params, {
        page: '1',
        types: ['fruit', 'vegetables']
      });
    });
    test('#extractUrl: removes a single parameter', function() {
      var baseUrl;

      baseUrl = QueryParameters.extractUrl('/items?page=1');
      return strictEqual(baseUrl, '/items');
    });
    return test('#extractUrl: removes multiple parameters', function() {
      var baseUrl;

      baseUrl = QueryParameters.extractUrl('/items?page=1&page_size=20');
      return strictEqual(baseUrl, '/items');
    });
  });

}).call(this);
