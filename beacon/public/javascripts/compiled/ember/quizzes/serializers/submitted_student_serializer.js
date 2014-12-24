(function() {
  define(['ember-data', './user_serializer'], function(DS, UserSerializer) {
    var SubmittedStudentSerializer;

    return SubmittedStudentSerializer = UserSerializer.extend({
      typeForRoot: function(root) {
        return this._super('submitted_students');
      }
    });
  });

}).call(this);
