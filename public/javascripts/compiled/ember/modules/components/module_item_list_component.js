(function() {
  define(['ember', 'ic-lazy-list', '../models/item'], function(Ember, LazyList, Item) {
    var ModuleItemComponent;

    return ModuleItemComponent = LazyList.IcLazyListComponent.extend({
      normalize: function(_arg) {
        var item, response, _i, _len, _results;

        response = _arg.response;
        _results = [];
        for (_i = 0, _len = response.length; _i < _len; _i++) {
          item = response[_i];
          _results.push(Item.createRecord(item));
        }
        return _results;
      }
    });
  });

}).call(this);
