(function() {
  define(['ember-data'], function(DS) {
    return DS.ActiveModelSerializer.extend({
      extractArray: function(store, type, payload, id, requestType) {
        if (!payload.quiz_submissions) {
          payload.quiz_submissions = [];
        }
        return this._super(store, type, payload, id, requestType);
      }
    });
  });

}).call(this);
