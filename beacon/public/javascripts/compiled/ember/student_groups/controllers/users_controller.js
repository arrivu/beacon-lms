(function() {
  define(['ember'], function(Ember) {
    var UsersController;

    return UsersController = Ember.ArrayController.extend({
      usersPath: "/api/v1/courses/" + ENV.course_id + "/users",
      itemController: 'user'
    });
  });

}).call(this);
