(function() {
  define(['react', 'compiled/react_files/components/ColumnHeaders'], function(React, ColumnHeaders) {
    module('ColumnHeaders');
    return test('`queryParamsFor` returns correct values', function() {
      var SORT_UPDATED_AT_DESC, queryParamsFor;

      SORT_UPDATED_AT_DESC = {
        sort: 'updated_at',
        order: 'desc'
      };
      queryParamsFor = ColumnHeaders.type.prototype.queryParamsFor;
      deepEqual(queryParamsFor({}, 'updated_at'), SORT_UPDATED_AT_DESC, 'was not sorted by anything');
      deepEqual(queryParamsFor({
        sort: 'created_at',
        order: 'desc'
      }, 'updated_at'), SORT_UPDATED_AT_DESC, 'was sorted by other column');
      deepEqual(queryParamsFor({
        sort: 'updated_at',
        order: 'asc'
      }, 'updated_at'), SORT_UPDATED_AT_DESC, 'was sorted by this column ascending');
      return deepEqual(queryParamsFor({
        sort: 'updated_at',
        order: 'desc'
      }, 'updated_at'), {
        sort: 'updated_at',
        order: 'asc'
      });
    });
  });

}).call(this);
