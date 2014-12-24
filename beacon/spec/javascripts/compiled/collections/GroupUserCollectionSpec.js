(function() {
  define(['compiled/collections/GroupUserCollection', 'compiled/collections/UnassignedGroupUserCollection', 'compiled/models/GroupCategory', 'compiled/models/GroupUser', 'compiled/models/Group', 'Backbone'], function(GroupUserCollection, UnassignedGroupUserCollection, GroupCategory, GroupUser, Group, _arg) {
    var Collection, group, source, target, users;

    Collection = _arg.Collection;
    source = null;
    target = null;
    users = null;
    group = null;
    module('GroupUserCollection', {
      setup: function() {
        var category;

        group = new Group({
          id: 1
        });
        category = new GroupCategory();
        category._groups = new Collection([group]);
        users = [
          new GroupUser({
            id: 1,
            name: "bob",
            sortable_name: "bob",
            group: null
          }), new GroupUser({
            id: 2,
            name: "joe",
            sortable_name: "joe",
            group: null
          })
        ];
        source = new UnassignedGroupUserCollection(users, {
          category: category
        });
        category._unassignedUsers = source;
        target = new GroupUserCollection(null, {
          group: group,
          category: category
        });
        target.loaded = true;
        return group._users = target;
      }
    });
    test("moves user to target group's collection when group changes", function() {
      users[0].set('group', group);
      equal(source.length, 1);
      return equal(target.length, 1);
    });
    return test("removes user when target group's collection is not yet loaded", function() {
      users[0].set('group', new Group({
        id: 2
      }));
      equal(source.length, 1);
      return equal(target.length, 0);
    });
  });

}).call(this);
