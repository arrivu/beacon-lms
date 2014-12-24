(function() {
  define([], function() {
    var getAllPages;

    return getAllPages = function(modelOrCollection, onUpdate) {
      var promise;

      if (modelOrCollection.loadedAll) {
        return;
      }
      promise = modelOrCollection.fetch({
        page: 'next'
      });
      promise.then(onUpdate);
      return promise.pipe(function() {
        return getAllPages(modelOrCollection, onUpdate);
      });
    };
  });

}).call(this);
