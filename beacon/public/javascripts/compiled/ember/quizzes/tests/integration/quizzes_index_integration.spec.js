(function() {
  define(['../start_app', 'ember', 'ic-ajax', '../shared_ajax_fixtures', '../../shared/environment', '../test_title', '../environment_setup', '../../../../behaviors/elementToggler'], function(startApp, Ember, ajax, fixtures, env, testTitle) {
    var App;

    App = null;
    module('quizzes index integration', {
      setup: function() {
        fixtures.create();
        return App = startApp();
      },
      teardown: function() {
        return Ember.run(App, 'destroy');
      }
    });
    testTitle({
      path: '/',
      title: 'Quizzes'
    });
    test('Quizzes pages load appropriately', function() {
      return visit('/').then(function() {
        return equal(find('.quiz').length, 2, 'Loads data into controller appropriately');
      });
    });
    test('Filtering quizzes', function() {
      return visit('/').then(function() {
        return fillIn('input.search-filter', 'alt').then(function() {
          return equal(find('.quiz').length, 1, 'Filterings quiz works');
        });
      });
    });
    test('Collapsing item groups', function() {
      return visit('/').then(function() {
        ok(find('.item-group-condensed .ig-header-title').length);
        ok(find('.item-group-condensed .ig-list').is(':visible'), 'Group starts expanded');
        return click('.item-group-condensed .ig-header-title').then(function() {
          return ok(find('.item-group-condensed .ig-list').is(':hidden'), 'Group gets collapsed');
        });
      });
    });
    test('Expanding item groups when a filter matches', function() {
      return visit('/').then(function() {
        equal(find('.quiz:visible').length, 2, 'Quiz entries are initially visible');
        return click('.item-group-condensed .ig-header-title').then(function() {
          ok(find('.item-group-condensed .ig-list').is(':hidden'), 'Group gets collapsed');
          equal(find('.quiz:visible').length, 0, 'All quiz entries are hidden');
          return fillIn('input.search-filter', 'alt').then(function() {
            ok(find('.item-group-condensed .ig-list').is(':visible'), 'Group gets expanded');
            return equal(find('.quiz:visible').length, 1, 'Matched quiz entry becomes visible');
          });
        });
      });
    });
    test('Heading bar with no manage permission', function() {
      return visit('/').then(function() {
        equal(find('#new-quiz').length, 0, 'Hides new quiz button by default');
        return equal(find('.header-bar-right ic-actions').length, 0, 'Hides admin dropdown by default');
      });
    });
    return test('Heading bar with manage permissions', function() {
      Ember.run(function() {
        return env.set('env.PERMISSIONS.manage', true);
      });
      return visit('/').then(function() {
        equal(find('#new-quiz').length, 1, 'Displays quiz button when permission');
        return equal(find('.header-bar-right ic-actions').length, 1);
      });
    });
  });

}).call(this);
