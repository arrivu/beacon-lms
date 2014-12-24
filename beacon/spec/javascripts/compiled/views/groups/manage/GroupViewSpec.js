(function() {
  define(['jquery', 'compiled/views/groups/manage/GroupView', 'compiled/views/groups/manage/GroupUsersView', 'compiled/views/groups/manage/GroupDetailView', 'compiled/collections/GroupCollection', 'compiled/collections/GroupUserCollection', 'compiled/models/Group', 'helpers/fakeENV'], function($, GroupView, GroupUsersView, GroupDetailView, GroupCollection, GroupUserCollection, Group, fakeENV) {
    var assertCollapsed, assertExpanded, group, users, view;

    view = null;
    group = null;
    users = null;
    module('GroupView', {
      setup: function() {
        var groupDetailView, groupUsersView;

        fakeENV.setup();
        group = new Group({
          id: 42,
          name: 'Foo Group',
          members_count: 7
        });
        users = new GroupUserCollection([
          {
            id: 1,
            name: "bob",
            sortable_name: "bob"
          }, {
            id: 2,
            name: "joe",
            sortable_name: "joe"
          }
        ], {
          group: group
        });
        users.loaded = true;
        users.loadedAll = true;
        group.users = function() {
          return users;
        };
        groupUsersView = new GroupUsersView({
          model: group,
          collection: users
        });
        groupDetailView = new GroupDetailView({
          model: group,
          users: users
        });
        view = new GroupView({
          groupUsersView: groupUsersView,
          groupDetailView: groupDetailView,
          model: group
        });
        view.render();
        return view.$el.appendTo($(document.body));
      },
      teardown: function() {
        fakeENV.teardown();
        return view.remove();
      }
    });
    assertCollapsed = function(view) {
      ok(view.$el.hasClass('group-collapsed'), 'expand visible');
      return ok(!view.$el.hasClass('group-expanded'), 'collapse hidden');
    };
    assertExpanded = function(view) {
      ok(!view.$el.hasClass('group-collapsed'), 'expand hidden');
      return ok(view.$el.hasClass('group-expanded'), 'collapse visible');
    };
    test('initial state should be collapsed', function() {
      return assertCollapsed(view);
    });
    test('expand/collpase buttons', function() {
      view.$('.toggle-group').eq(0).click();
      assertExpanded(view);
      view.$('.toggle-group').eq(0).click();
      return assertCollapsed(view);
    });
    test('renders groupUsers', function() {
      return ok(view.$('.group-user').length);
    });
    return test('removes the group after successful deletion', function() {
      var confirmStub, server, url;

      url = "/api/v1/groups/" + (view.model.get('id'));
      server = sinon.fakeServer.create();
      server.respondWith(url, [
        200, {
          'Content-Type': 'application/json'
        }, JSON.stringify({})
      ]);
      confirmStub = sinon.stub(window, 'confirm');
      confirmStub.returns(true);
      view.$('.delete-group').click();
      server.respond();
      ok(!view.$el.hasClass('hidden'), 'group hidden');
      server.restore();
      return confirmStub.restore();
    });
  });

}).call(this);
