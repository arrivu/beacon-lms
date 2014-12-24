(function() {
  define(['ic-ajax', 'ember', 'underscore', '../start_app', '../environment_setup'], function(ajax, Ember, _, startApp) {
    var App, progressFixture, run, subject, testWithTimeout, timeout;

    run = Ember.run;
    App = null;
    subject = null;
    timeout = null;
    progressFixture = function(attrs) {
      return _.extend({
        "completion": 0,
        "context_id": 1,
        "context_type": "Quizzes::QuizStatistics",
        "created_at": "2014-04-02T09:40:32Z",
        "id": 1,
        "message": null,
        "tag": "Quizzes::QuizStatistics",
        "updated_at": "2014-04-02T09:40:36Z",
        "user_id": null,
        "workflow_state": "running",
        "url": "http://localhost:3000/api/v1/progress/1"
      }, attrs);
    };
    module("Progress", {
      setup: function() {
        App = startApp();
        return run(function() {
          var adapter, container, store;

          container = App.__container__;
          store = container.lookup('store:main');
          subject = store.createRecord('progress', progressFixture());
          adapter = container.lookup('adapter:progress');
          return adapter.ajax = function(url, method) {
            return ajax.request({
              url: url,
              type: method
            });
          };
        });
      },
      teardown: function() {
        clearTimeout(timeout);
        return run(App, 'destroy');
      }
    });
    testWithTimeout = function(desc, callback) {
      return asyncTest(desc, function() {
        timeout = setTimeout((function() {
          ok(false, "timed out");
          return start();
        }), 1000);
        return callback();
      });
    };
    testWithTimeout('#trackCompletion: it polls until complete', function() {
      expect(1);
      ajax.defineFixture('/api/v1/progress/1', {
        response: progressFixture({
          workflow_state: 'completed'
        }),
        jqXHR: {},
        textStatus: 'success'
      });
      return run(function() {
        return subject.trackCompletion(5).then(function() {
          ok(true, "notifies me when it's done");
          return start();
        });
      });
    });
    return testWithTimeout('#trackCompletion: it reports failures', function() {
      expect(1);
      ajax.defineFixture('/api/v1/progress/1', {
        response: progressFixture({
          workflow_state: 'failed'
        }),
        jqXHR: {},
        textStatus: 'success'
      });
      return run(function() {
        return subject.trackCompletion(5).then(function() {
          ok(false, "progress success callback should never be called");
          return start();
        }, function() {
          ok(true, "progress failure callback should be called");
          return start();
        });
      });
    });
  });

}).call(this);
