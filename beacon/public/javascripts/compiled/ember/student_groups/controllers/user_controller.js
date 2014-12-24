(function() {
  define(['i18n!student_groups', 'ember', 'ic-ajax'], function(I18n, Ember, ajax) {
    var UserController;

    return UserController = Ember.ObjectController.extend({
      idString: (function() {
        return "invitees_" + (this.get('id'));
      }).property('id'),
      isCurrentUser: (function() {
        return ENV.current_user_id === this.get('id');
      }).property('id'),
      invite: false
    });
  });

}).call(this);
