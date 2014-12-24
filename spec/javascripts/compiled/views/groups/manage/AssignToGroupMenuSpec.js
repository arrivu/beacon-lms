(function() {
  define(['jquery', 'compiled/views/groups/manage/AssignToGroupMenu', 'compiled/collections/GroupCollection', 'compiled/models/Group', 'compiled/models/GroupUser', 'compiled/models/GroupCategory'], function($, AssignToGroupMenu, GroupCollection, Group, GroupUser, GroupCategory) {
    var user, view;

    view = null;
    user = null;
    module('AssignToGroupMenu', {
      setup: function() {
        var groupCategory, groups;

        groupCategory = new GroupCategory;
        user = new GroupUser({
          id: 1,
          name: "bob",
          group: null,
          category: groupCategory
        });
        groups = new GroupCollection([
          new Group({
            id: 1,
            name: "a group"
          })
        ], {
          category: groupCategory
        });
        view = new AssignToGroupMenu({
          collection: groups,
          model: user
        });
        view.render();
        return view.$el.appendTo($(document.body));
      },
      teardown: function() {
        return view.remove();
      }
    });
    return test("updates the user's group", function() {
      var $link;

      equal(user.get('group'), null);
      $link = view.$('.set-group');
      equal($link.length, 1);
      $link.click();
      return equal(user.get('group').id, 1);
    });
  });

}).call(this);
