(function() {
  define(['./start_app', 'ember', './shared_ajax_fixtures'], function(startApp, Ember, fixtures) {
    var App;

    App = null;
    fixtures.create();
    module('screenreader_gradebook', {
      setup: function() {
        var _this = this;

        App = startApp();
        return visit('/').then(function() {
          return _this.controller = App.__container__.lookup('controller:screenreader_gradebook');
        });
      },
      teardown: function() {
        return Ember.run(App, 'destroy');
      }
    });
    test('fetches enrollments', function() {
      equal(this.controller.get('enrollments').objectAt(0).user.name, 'Bob');
      return equal(this.controller.get('enrollments').objectAt(1).user.name, 'Fred');
    });
    test('fetches assignment_groups', function() {
      return equal(this.controller.get('assignment_groups').objectAt(0).name, 'AG1');
    });
    test('fetches sections', function() {
      equal(this.controller.get('sections').objectAt(0).name, 'Vampires and Demons');
      return equal(this.controller.get('sections').objectAt(1).name, 'Slayers and Scoobies');
    });
    test('fetches custom_columns', function() {
      equal(this.controller.get('custom_columns.length'), 1);
      return equal(this.controller.get('custom_columns.firstObject').title, fixtures.custom_columns[0].title);
    });
    return test('fetches outcomes', function() {
      equal(this.controller.get('outcomes').objectAt(0).title, 'Eating');
      return equal(this.controller.get('outcomes').objectAt(1).title, 'Drinking');
    });
  });

}).call(this);
