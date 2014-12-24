(function() {
  define(['Backbone', 'compiled/models/AssignmentGroup', 'compiled/models/Course', 'compiled/collections/AssignmentGroupCollection', 'compiled/views/assignments/AssignmentGroupListView', 'compiled/views/assignments/IndexView', 'compiled/views/assignments/ToggleShowByView', 'jquery', 'helpers/fakeENV', 'helpers/jquery.simulate'], function(Backbone, AssignmentGroup, Course, AssignmentGroupCollection, AssignmentGroupListView, IndexView, ToggleShowByView, $, fakeENV) {
    var assignmentGroups, assignmentIndex, fixtures;

    fixtures = $('#fixtures');
    assignmentGroups = null;
    assignmentIndex = function() {
      var app, assignmentGroupsView, course, group1, group2, showByView;

      $('<div id="content"></div>').appendTo(fixtures);
      course = new Course({
        id: 1
      });
      group1 = new AssignmentGroup({
        name: "Group 1",
        assignments: [
          {
            id: 1,
            name: 'Foo Name'
          }, {
            id: 2,
            name: 'Bar Title'
          }
        ]
      });
      group2 = new AssignmentGroup({
        name: "Group 2",
        assignments: [
          {
            id: 1,
            name: 'Baz Title'
          }, {
            id: 2,
            name: 'Qux Name'
          }
        ]
      });
      assignmentGroups = new AssignmentGroupCollection([group1, group2], {
        course: course
      });
      assignmentGroupsView = new AssignmentGroupListView({
        collection: assignmentGroups,
        course: course
      });
      showByView = false;
      if (!ENV.PERMISSIONS.manage) {
        showByView = new ToggleShowByView({
          course: course,
          assignmentGroups: assignmentGroups
        });
      }
      app = new IndexView({
        assignmentGroupsView: assignmentGroupsView,
        collection: assignmentGroups,
        createGroupView: false,
        assignmentSettingsView: false,
        showByView: showByView
      });
      return app.render();
    };
    module('assignmentIndex', {
      setup: function() {
        fakeENV.setup({
          PERMISSIONS: {
            manage: true
          }
        });
        return this.enable_spy = sinon.spy(IndexView.prototype, 'enableSearch');
      },
      teardown: function() {
        fakeENV.teardown();
        assignmentGroups = null;
        fixtures.empty();
        return this.enable_spy.restore();
      }
    });
    test('should filter by search term', function() {
      var view;

      view = assignmentIndex();
      $('#search_term').val('foo');
      view.filterResults();
      equal(view.$el.find('.assignment').not('.hidden').length, 1);
      $('#search_term').val('BooBerry');
      view.filterResults();
      equal(view.$el.find('.assignment').not('.hidden').length, 0);
      $('#search_term').val('name');
      view.filterResults();
      return equal(view.$el.find('.assignment').not('.hidden').length, 2);
    });
    test('should have search disabled on render', function() {
      var view;

      view = assignmentIndex();
      return ok(view.$('#search_term').is(':disabled'));
    });
    test('should enable search on assignmentGroup reset', function() {
      var view;

      view = assignmentIndex();
      assignmentGroups.reset();
      return ok(!view.$('#search_term').is(':disabled'));
    });
    test('enable search handler should only fire on the first reset', function() {
      var view;

      view = assignmentIndex();
      assignmentGroups.reset();
      ok(this.enable_spy.calledOnce);
      assignmentGroups.reset();
      return ok(this.enable_spy.calledOnce);
    });
    test('should show modules column', function() {
      var a1, a2, view, _ref;

      view = assignmentIndex();
      _ref = assignmentGroups.assignments(), a1 = _ref[0], a2 = _ref[1];
      a1.set('modules', ['One', 'Two']);
      a2.set('modules', ['Three']);
      ok(view.$("#assignment_1 .modules .tooltip_link").text().match(/Multiple Modules/));
      ok(view.$("#assignment_1 .modules").text().match(/One\s+Two/));
      return ok(view.$("#assignment_2 .modules").text().match(/Three Module/));
    });
    module('student index view', {
      setup: function() {
        return fakeENV.setup({
          PERMISSIONS: {
            manage: false
          }
        });
      },
      teardown: function() {
        fakeENV.teardown();
        assignmentGroups = null;
        return fixtures.empty();
      }
    });
    return test('should clear search on toggle', function() {
      var clear_spy, view;

      clear_spy = sinon.spy(IndexView.prototype, 'clearSearch');
      view = assignmentIndex();
      view.$('#search_term').val('something');
      view.showByView.toggleShowBy({
        preventDefault: function() {}
      });
      equal(view.$('#search_term').val(), "");
      ok(clear_spy.called);
      return clear_spy.restore();
    });
  });

}).call(this);
