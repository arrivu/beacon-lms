(function() {
  define(['ember', '../start_app', '../shared_ajax_fixtures', '../environment_setup', 'ic-ajax', 'jquery', '../test_title', 'jqueryui/dialog'], function(Ember, startApp, fixtures, env, ajax, $, testTitle) {
    var ASSIGNMENT_GROUP, App, QUIZ, store, testShowPage;

    App = null;
    QUIZ = fixtures.QUIZZES[0];
    ASSIGNMENT_GROUP = {
      fixtures: fixtures
    };
    store = null;
    module("Quiz Show Integration for Teachers", {
      setup: function() {
        App = startApp();
        fixtures.create();
        return store = App.__container__.lookup('store:main');
      },
      teardown: function() {
        return Ember.run(App, 'destroy');
      }
    });
    testShowPage = function(desc, callback) {
      return test(desc, function() {
        return visit('/1').then(callback);
      });
    };
    testTitle({
      path: '/1',
      title: 'Alt practice test: Overview'
    });
    testShowPage('shows attributes', function() {
      var html, htmlHas;

      html = find('#quiz-show').html();
      htmlHas = function(matchingHTML, desc) {
        return ok(html.match(matchingHTML), "shows " + desc);
      };
      ok(html.indexOf(QUIZ.description) !== -1, "doesn't escape server-sanitized HTML");
      htmlHas(QUIZ.title, "quiz title");
      return htmlHas(QUIZ.points_possible, "points possible");
    });
    testShowPage('shows assignment group', function() {
      var text;

      text = find('#quiz-show').text();
      return ok(text.match(ASSIGNMENT_GROUP.name));
    });
    testShowPage('show page shows submission html', function() {
      var text;

      text = find('#quiz-show').text();
      return ok(text.match('submission html!'));
    });
    testShowPage('allows user to delete a quiz', function() {
      var quiz;

      quiz = null;
      return click('ic-menu-trigger').then(function() {
        return click('ic-menu-item.js-delete');
      }).then(function() {
        stop();
        return store.find('quiz', 1).then(function(_quiz) {
          return quiz = _quiz;
        });
      }).then(function() {
        start();
        ajax.defineFixture('/api/v1/courses/1/quizzes/1', {
          response: {},
          jqXHR: {
            statusCode: 204
          },
          textStatus: 'success'
        });
        return click($('.confirm-dialog-confirm-btn'));
      }).then(function() {
        return ok(quiz.get('isDeleted'), 'quiz deleted');
      });
    });
    testShowPage('allows locking/unlocking from the dropdown menu', function() {
      var clickLockUnlockToggler, lockAt, quiz;

      quiz = null;
      lockAt = null;
      clickLockUnlockToggler = function() {
        return click('ic-menu-trigger').then(function() {
          return click('ic-menu-item.js-due-date-toggler');
        });
      };
      stop();
      store.find('quiz', 1).then(function(_quiz) {
        quiz = _quiz;
        lockAt = quiz.get('lockAt');
        return start();
      });
      return clickLockUnlockToggler().then(function() {
        return ok(quiz.get('lockAt') !== lockAt, 'lock date updated');
      }).then(function() {
        return clickLockUnlockToggler();
      }).then(function() {
        return ok(!quiz.get('lockAt'), 'can unlock quiz');
      });
    });
    testShowPage('allows sending messages to students', function() {
      var server;

      server = sinon.fakeServer.create();
      server.respondWith('POST', 'http://localhost:3000/courses/1/quizzes/1/submission_users/message', JSON.stringify({
        status: 'created'
      }));
      server.autoRespond = true;
      return click('ic-menu-trigger').then(function() {
        return click('.js-message-students');
      }).then(function() {
        fillIn('#message-body', 'Ohi');
        return sinon.spy($, 'ajax');
      }).then(function() {
        return click('.ui-dialog .btn.btn-primary');
      }).then(function() {
        var firstCall, url;

        firstCall = $.ajax.getCall(0).args[0];
        url = firstCall.url;
        equal(url, "http://localhost:3000/courses/1/quizzes/1/submission_users/message");
        server.restore();
        return $.ajax.restore();
      });
    });
    testShowPage('shows a link to take the quiz in the dropdown', function() {
      return click('ic-menu-trigger').then(function() {
        stop();
        return store.find('quiz', 1);
      }).then(function(quiz) {
        start();
        return equal($(find('.js-take-quiz')).attr('href'), quiz.get('takeQuizUrl'));
      });
    });
    testShowPage('displays a rubric link in the dropdown', function() {
      return click('ic-menu-trigger').then(function() {
        return equal(find('ic-menu-item .icon-rubric').length, 1);
      });
    });
    module("Quiz Show Integration for Students", {
      setup: function() {
        App = startApp();
        return store = App.__container__.lookup('store:main');
      },
      teardown: function() {
        return Ember.run(App, 'destroy');
      }
    });
    testShowPage = function(desc, callback) {
      return test(desc, function() {
        return visit('/2').then(callback);
      });
    };
    testShowPage('show page shows submission html', function() {
      var text;

      text = find('#quiz-show').text();
      return ok(text.match('submission html!'));
    });
    testShowPage('shows attributes', function() {
      var html, htmlHas;

      html = find('#quiz-show').html();
      htmlHas = function(matchingHTML, desc) {
        return ok(html.match(matchingHTML), "shows " + desc);
      };
      ok(html.indexOf(QUIZ.description) !== -1, "doesn't escape server-sanitized HTML");
      htmlHas(QUIZ.title, "quiz title");
      return htmlHas(QUIZ.points_possible, "points possible");
    });
    testShowPage('doesnt show teacher actions', function() {
      return ok(!find('.teacher-action-buttons').length, "shoudln't show teacher action buttons");
    });
    testShowPage('shows student actions', function() {
      return ok(find('.student-action-buttons').length, "shoud show student action buttons");
    });
    return testShowPage('doesnt show tabs', function() {
      return ok(!find('#quiz-show-tabs').length, "should not have tabs");
    });
  });

}).call(this);
