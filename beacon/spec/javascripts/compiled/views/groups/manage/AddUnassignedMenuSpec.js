(function() {
  define(['compiled/collections/GroupUserCollection', 'compiled/models/GroupUser', 'compiled/models/GroupCategory', 'compiled/models/Group', 'compiled/views/groups/manage/AddUnassignedMenu', 'jquery', 'helpers/fakeENV'], function(GroupUserCollection, GroupUser, GroupCategory, Group, AddUnassignedMenu, $, fakeENV) {
    var clock, sendResponse, server, users, view, waldo;

    clock = null;
    server = null;
    waldo = null;
    users = null;
    view = null;
    sendResponse = function(method, url, json) {
      return server.respond(method, url, [
        200, {
          'Content-Type': 'application/json'
        }, JSON.stringify(json)
      ]);
    };
    module('AddUnassignedMenu', {
      setup: function() {
        fakeENV.setup();
        clock = sinon.useFakeTimers();
        server = sinon.fakeServer.create();
        waldo = new GroupUser({
          id: 4,
          name: "Waldo",
          sortable_name: "Waldo"
        });
        users = new GroupUserCollection(null, {
          group: new Group,
          category: new GroupCategory
        });
        users.setParam('search_term', 'term');
        users.loaded = true;
        view = new AddUnassignedMenu({
          collection: users
        });
        view.group = new Group({
          id: 777
        });
        users.reset([
          new GroupUser({
            id: 1,
            name: "Frank Herbert",
            sortable_name: "Herbert, Frank"
          }), new GroupUser({
            id: 2,
            name: "Neal Stephenson",
            sortable_name: "Stephenson, Neal"
          }), new GroupUser({
            id: 3,
            name: "John Scalzi",
            sortable_name: "Scalzi, John"
          }), waldo
        ]);
        return view.$el.appendTo($(document.body));
      },
      teardown: function() {
        fakeENV.teardown();
        clock.restore();
        server.restore();
        return view.remove();
      }
    });
    return test("updates the user's group and removes from unassigned collection", function() {
      var $links, $waldoLink;

      equal(waldo.get('group'), null);
      $links = view.$('.assign-user-to-group');
      equal($links.length, 4);
      $waldoLink = $links.last();
      $waldoLink.click();
      sendResponse('POST', "/api/v1/groups/777/memberships", {});
      equal(waldo.get('group'), view.group);
      return ok(!users.contains(waldo));
    });
  });

}).call(this);
