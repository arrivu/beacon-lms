(function() {
  define(['ember-data', './user_serializer'], function(DS, UserSerializer) {
    var UnsubmittedStudentSerializer;

    return UnsubmittedStudentSerializer = UserSerializer.extend({
      typeForRoot: function(root) {
        return this._super('unsubmitted_students');
      }
    });
  });

}).call(this);
