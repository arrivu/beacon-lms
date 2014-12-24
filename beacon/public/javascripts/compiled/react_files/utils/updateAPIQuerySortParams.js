(function() {
  define(['underscore', 'jquery', 'compiled/util/deparam'], function(_, _arg, deparam) {
    var param, updateAPIQuerySortParams;

    param = _arg.param;
    return updateAPIQuerySortParams = function(collection, queryParams) {
      var baseUrl, newParams, newUrl, oldUrl, params, search, _ref;

      newParams = {
        include: ['user'],
        per_page: 20,
        sort: queryParams.sort || '',
        order: queryParams.order || ''
      };
      oldUrl = collection.url;
      _ref = oldUrl.split('?'), baseUrl = _ref[0], search = _ref[1];
      params = _.extend(deparam(search), newParams);
      newUrl = baseUrl + '?' + param(params);
      collection.url = newUrl;
      if (newUrl !== oldUrl && !collection.loadedAll) {
        return collection.reset();
      }
    };
  });

}).call(this);
