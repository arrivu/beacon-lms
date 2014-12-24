(function() {
  define([], function() {
    var CollectionHandler;

    return CollectionHandler = {
      isBackboneCollection: function(collection) {
        return collection instanceof Backbone.Collection;
      },
      getPreviousInRelationTo: function(collection, collectionItem) {
        var isBackbone, itemIndex, nextIndex;

        isBackbone = this.isBackboneCollection(collection);
        itemIndex = collection.indexOf(collectionItem);
        if (!(itemIndex >= 0)) {
          return null;
        }
        nextIndex = itemIndex - 1;
        if (nextIndex < 0) {
          if (isBackbone) {
            return collection.at(collection.length - 1);
          } else {
            return collection[collection.length - 1];
          }
        }
        if (isBackbone) {
          return collection.at(nextIndex);
        } else {
          return collection[nextIndex];
        }
      },
      getNextInRelationTo: function(collection, collectionItem) {
        var isBackbone, itemIndex, nextIndex;

        isBackbone = this.isBackboneCollection(collection);
        itemIndex = collection.indexOf(collectionItem);
        if (!(itemIndex >= 0)) {
          return null;
        }
        nextIndex = itemIndex + 1;
        if (nextIndex > collection.length - 1) {
          if (isBackbone) {
            return collection.at(0);
          } else {
            return collection[0];
          }
        }
        if (isBackbone) {
          return collection.at(nextIndex);
        } else {
          return collection[nextIndex];
        }
      }
    };
  });

}).call(this);
