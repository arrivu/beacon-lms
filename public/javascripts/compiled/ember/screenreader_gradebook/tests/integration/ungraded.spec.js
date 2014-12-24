(function() {
  define(['compiled/userSettings', '../start_app', 'ember', '../shared_ajax_fixtures'], function(userSettings, startApp, Ember, fixtures) {
    var App, runTest, setup;

    App = null;
    fixtures.create();
    setup = function(initialSetting) {
      userSettings.contextSet('include_ungraded_assignments', initialSetting);
      App = startApp();
      return visit('/');
    };
    runTest = function() {
      var controller, initial;

      controller = App.__container__.lookup('controller:screenreader_gradebook');
      initial = controller.get('includeUngradedAssignments');
      click('#ungraded');
      return andThen(function() {
        return equal(!controller.get('includeUngradedAssignments'), initial);
      });
    };
    module('include ungraded assignments setting:false', {
      setup: function() {
        return setup.call(this, false);
      },
      teardown: function() {
        return Ember.run(App, 'destroy');
      }
    });
    test('clicking the ungraded checkbox updates includeUngradedAssignments to true', function() {
      return runTest();
    });
    module('include ungraded assignments setting:true', {
      setup: function() {
        return setup.call(this, true);
      },
      teardown: function() {
        return Ember.run(App, 'destroy');
      }
    });
    return test('clicking the ungraded checkbox updates includeUngradedAssignments to false', function() {
      return runTest();
    });
  });

}).call(this);
