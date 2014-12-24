(function() {
  define(['ember', '../../xhr/fetch_all_pages', '../shared_ajax_fixtures'], function(_arg, fetchAllPages, fixtures) {
    var ArrayProxy;

    ArrayProxy = _arg.ArrayProxy;
    fixtures.create();
    asyncTest('passes records through by default', function() {
      return fetchAllPages(ENV.numbers_url).promise.then(function(records) {
        start();
        return deepEqual(records.get('content'), [1, 2, 3]);
      });
    });
    asyncTest('populates existing array if provided', function() {
      var myArray;

      myArray = ArrayProxy.create({
        content: []
      });
      return fetchAllPages(ENV.numbers_url, {
        records: myArray
      }).promise.then(function() {
        start();
        return deepEqual(myArray.get('content'), [1, 2, 3]);
      });
    });
    return asyncTest('calls process if provided', function() {
      return fetchAllPages(ENV.numbers_url, {
        process: function(response) {
          return response.map(function(x) {
            return x * 2;
          });
        }
      }).promise.then(function(records) {
        start();
        return deepEqual(records.get('content'), [2, 4, 6]);
      });
    });
  });

}).call(this);
