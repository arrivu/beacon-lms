(function() {
  define(['ember-data'], function(DS) {
    var UserSerializer;

    return UserSerializer = DS.ActiveModelSerializer.extend({
      extractArray: function(store, primaryType, payload) {
        var _ref;

        if ((_ref = payload['users']) != null) {
          _ref.forEach(function(user) {
            if (user.links) {
              user.quiz_submission_id = user.links.quiz_submission;
              return delete user.links.quiz_submission;
            }
          });
        }
        return this._super(store, primaryType, payload);
      }
    });
  });

}).call(this);
