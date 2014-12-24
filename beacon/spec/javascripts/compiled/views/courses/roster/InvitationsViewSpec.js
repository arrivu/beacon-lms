(function() {
  define(['jquery', 'compiled/views/courses/roster/InvitationsView', 'compiled/models/RosterUser', 'helpers/assertions'], function($, InvitationsView, RosterUser, assert) {
    var buildView, server, view;

    view = null;
    server = null;
    return module('InvitationsView', buildView = function(enrollment) {
      var model;

      model = new RosterUser({
        enrollments: [enrollment]
      });
      model.currentRole = 'student';
      return view = new InvitationsView({
        model: model
      });
    }, test('knows when invitation is pending', function() {
      var enrollment;

      enrollment = {
        id: 1,
        role: 'student',
        enrollment_state: 'invited'
      };
      buildView(enrollment);
      return equal(view.invitationIsPending(), true);
    }), test('knows when invitation is not pending', function() {
      var enrollment;

      enrollment = {
        id: 1,
        role: 'student',
        enrollment_state: 'accepted'
      };
      buildView(enrollment);
      return equal(view.invitationIsPending(), false);
    }));
  });

}).call(this);
