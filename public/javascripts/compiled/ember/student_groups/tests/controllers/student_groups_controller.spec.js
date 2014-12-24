(function() {
  define(['../start_app', 'ember', 'ic-ajax', '../../controllers/student_groups_controller', 'helpers/fakeENV'], function(startApp, Ember, ajax, StudentGroupsController, fakeENV) {
    var App, run;

    App = null;
    run = Ember.run;
    module('student_groups_controller', {
      setup: function() {
        var groups,
          _this = this;

        App = startApp();
        fakeENV.setup();
        run(function() {
          return _this.sgc = StudentGroupsController.create();
        });
        groups = null;
        run(function() {
          return groups = [
            {
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
            }, {
              id: 2,
              name: "two",
              group_category_id: 1,
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
                }
              ]
            }
          ];
        });
        return this.sgc.set('groups', groups);
      },
      teardown: function() {
        var _this = this;

        run(function() {
          _this.sgc.destroy();
          return fakeENV.teardown();
        });
        return Ember.run(App, 'destroy');
      }
    });
    test('Groups are sorted group category id', function() {
      var sorted;

      sorted = this.sgc.get('sortedGroups');
      return equal(sorted[0].name, "two");
    });
    test('filterText will filter groups by user name', function() {
      var sorted;

      this.sgc.set('filterText', "pink");
      sorted = this.sgc.get('sortedGroups');
      equal(sorted.length, 1);
      return equal(sorted[0].name, "one");
    });
    test('is member of category should be true if the current user is', function() {
      ENV.current_user_id = 1;
      return equal(this.sgc.isMemberOfCategory(1) != null, true);
    });
    test('is member of category should be false if the current user is not', function() {
      ENV.current_user_id = 4;
      return equal(this.sgc.isMemberOfCategory(1) != null, false);
    });
    return test('remove from category removes the user from any group in the category', function() {
      ENV.current_user_id = 2;
      equal(this.sgc.isMemberOfCategory(1) != null, true);
      this.sgc.removeFromCategory(1);
      return equal(this.sgc.isMemberOfCategory(1) != null, false);
    });
  });

}).call(this);
