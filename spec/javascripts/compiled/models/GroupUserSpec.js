(function() {
  define(['Backbone', 'compiled/models/Group', 'compiled/models/GroupUser', 'compiled/models/GroupCategory', 'jquery'], function(Backbone, Group, GroupUser, GroupCategory, $) {
    module('GroupUser', {
      setup: function() {
        this.groupUser = new GroupUser({
          category: new GroupCategory
        });
        this.leaveGroupStub = sinon.stub(this.groupUser, 'leaveGroup');
        return this.joinGroupStub = sinon.stub(this.groupUser, 'joinGroup');
      },
      teardown: function() {
        this.leaveGroupStub.restore();
        return this.joinGroupStub.restore();
      }
    });
    return test("updates group correctly upon save and fires joinGroup and leaveGroup appropriately", function() {
      var group1, group2;

      group1 = new Group({
        id: 777
      });
      this.groupUser.save({
        'group': group1
      });
      equal(this.groupUser.get('group'), group1);
      equal(this.joinGroupStub.callCount, 1);
      ok(this.joinGroupStub.calledWith(group1));
      equal(this.leaveGroupStub.callCount, 0);
      group2 = new Group({
        id: 123
      });
      this.groupUser.save({
        'group': group2
      });
      equal(this.groupUser.get('group'), group2);
      equal(this.joinGroupStub.callCount, 2);
      ok(this.joinGroupStub.calledWith(group2));
      this.groupUser.save({
        'group': null
      });
      equal(this.groupUser.get('group'), null);
      equal(this.joinGroupStub.callCount, 2);
      return equal(this.leaveGroupStub.callCount, 1);
    });
  });

}).call(this);
