(function() {
  define(['../start_app', 'ember', 'ic-ajax', '../../controllers/group_controller', '../../controllers/student_groups_controller', 'helpers/fakeENV'], function(startApp, Ember, ajax, GroupController, StudentGroupsController, fakeENV) {
    var App, run;

    App = null;
    run = Ember.run;
    module('group_controller', {
      setup: function() {
        var _this = this;

        fakeENV.setup();
        App = startApp();
        run(function() {
          return _this.sgc = StudentGroupsController.create();
        });
        run(function() {
          return _this.gc = GroupController.create({
            parentController: _this.sgc,
            showBody: false
          });
        });
        return run(function() {
          _this.group = {
            id: 1,
            name: "one",
            group_category_id: 2,
            users: [
              {
                id: 1,
                name: "steve"
              }, {
                id: 2,
                name: "cliff"
              }, {
                id: 3,
                name: "walt"
              }, {
                id: 4,
                name: "pinkman"
              }
            ]
          };
          _this.gc.set('content', _this.group);
          return _this.gc.set('group', _this.group);
        });
      },
      teardown: function() {
        var _this = this;

        run(function() {
          fakeENV.teardown();
          _this.gc.destroy();
          return _this.sgc.destroy();
        });
        return Ember.run(App, 'destroy');
      }
    });
    test('should show body while searching', function() {
      equal(this.gc.get('showBody'), false);
      this.sgc.set('filterText', "abc");
      return equal(this.gc.get('showBody'), true);
    });
    test('member count should sum the users', function() {
      return equal(this.gc.get('memberCount'), this.group.users.length);
    });
    asyncTest('toggleBody should change show body if the group has members', function() {
      expect(1);
      return Ember.run(this, function() {
        start();
        this.gc.send('toggleBody');
        return equal(this.gc.get('showBody'), true);
      });
    });
    return test('leave should remove the current user from the group', function() {
      ENV.current_user_id = 1;
      ajax.defineFixture('/api/v1/groups/1/memberships/self', {
        response: {
          id: "1"
        },
        textStatus: 'success',
        jqXHR: {}
      });
      this.gc.send('leave', this.group);
      return equal(this.gc.get('users').length, 3);
    });
  });

}).call(this);
