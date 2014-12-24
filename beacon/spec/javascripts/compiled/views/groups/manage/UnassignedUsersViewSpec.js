(function() {
  define(['jquery', 'compiled/views/groups/manage/UnassignedUsersView', 'compiled/views/groups/manage/AssignToGroupMenu', 'compiled/collections/GroupCollection', 'compiled/collections/UnassignedGroupUserCollection', 'compiled/models/Group', 'compiled/models/GroupCategory', 'helpers/fakeENV', 'helpers/jquery.simulate'], function($, UnassignedUsersView, AssignToGroupMenu, GroupCollection, UnassignedGroupUserCollection, Group, GroupCategory, fakeENV) {
    var clock, groups, users, view;

    clock = null;
    view = null;
    groups = null;
    users = null;
    module('UnassignedUsersView', {
      setup: function() {
        var menu;

        fakeENV.setup();
        $('#fixtures').html('<div id="content"></div>');
        clock = sinon.useFakeTimers();
        groups = new GroupCollection([
          new Group({
            name: "a group"
          }), new Group({
            name: "another group"
          })
        ]);
        users = new UnassignedGroupUserCollection([
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
          category: new GroupCategory
        });
        menu = new AssignToGroupMenu({
          collection: groups
        });
        view = new UnassignedUsersView({
          collection: users,
          groupsCollection: groups,
          assignToGroupMenu: menu
        });
        view.render();
        return $('#fixtures').append(view.$el).append($('<div />', {
          id: 'content'
        }));
      },
      teardown: function() {
        fakeENV.teardown();
        $('#fixtures').empty();
        clock.restore();
        view.remove();
        return $('#fixtures').empty();
      }
    });
    return test('opens the assignToGroupMenu', function() {
      var $menu;

      view.$('.assign-to-group').eq(0).simulate('click');
      clock.tick(100);
      $menu = $('.assign-to-group-menu').filter(':visible');
      equal($menu.length, 1);
      return equal($menu.find('.set-group').length, 2);
    });
  });

}).call(this);
