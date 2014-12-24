(function() {
  define(['jquery', 'underscore', 'compiled/models/Assignment', 'compiled/views/assignments/EditHeaderView', 'helpers/fakeENV'], function($, _, Assignment, EditHeaderView, fakeENV) {
    var defaultAssignmentOpts, editHeaderView;

    defaultAssignmentOpts = {
      name: 'Test Assignment',
      assignment_overrides: []
    };
    editHeaderView = function() {
      var app, assignment;

      assignment = new Assignment(defaultAssignmentOpts);
      app = new EditHeaderView({
        model: assignment
      });
      return app.render();
    };
    module('EditHeaderView', {
      setup: function() {
        return fakeENV.setup();
      },
      teardown: function() {
        return fakeENV.teardown();
      }
    });
    test('renders', function() {
      var view;

      view = editHeaderView();
      return ok(view.$('.header-bar-right').length > 0, 'header bar is rendered');
    });
    return test('delete works for an un-saved assignment', function() {
      var cb, view;

      view = editHeaderView();
      cb = sinon.stub(view, 'onDeleteSuccess');
      view["delete"]();
      return equal(cb.called, true, 'onDeleteSuccess was called');
    });
  });

}).call(this);
