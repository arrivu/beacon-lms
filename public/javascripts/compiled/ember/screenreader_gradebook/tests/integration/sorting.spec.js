(function() {
  define(['../start_app', 'ember', '../shared_ajax_fixtures'], function(startApp, Ember, fixtures) {
    var App, checkSelection, setSelection;

    App = null;
    fixtures.create();
    setSelection = function(selection) {
      return find('#arrange_assignments').val(selection);
    };
    checkSelection = function(selection) {
      return equal(selection, find('#arrange_assignments').val());
    };
    module('screenreader_gradebook assignment sorting: no saved setting', {
      setup: function() {
        App = startApp();
        return visit('/');
      },
      teardown: function() {
        return Ember.run(App, 'destroy');
      }
    });
    test('defaults to assignment group', function() {
      return checkSelection('assignment_group');
    });
    module('screenreader_gradebook assignment sorting: toggle settings', {
      setup: function() {
        App = startApp();
        return visit('/');
      },
      teardown: function() {
        setSelection('assignment_group');
        return Ember.run(App, 'destroy');
      }
    });
    return test('loads alphabetical sorting', function() {
      setSelection('alpha');
      visit('/');
      checkSelection('alpha');
      setSelection('due_date');
      visit('/');
      return checkSelection('due_date');
    });
  });

}).call(this);
