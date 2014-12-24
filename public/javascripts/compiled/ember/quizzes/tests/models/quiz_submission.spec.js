(function() {
  define(["../start_app", "ember"], function(startApp, Ember) {
    var App, container, quizSubmission, run, store;

    App = null;
    run = Ember.run;
    container = null;
    store = null;
    quizSubmission = null;
    module("QuizSubmission", {
      setup: function() {
        App = startApp();
        return run(function() {
          container = App.__container__;
          store = container.lookup("store:main");
          return quizSubmission = store.createRecord("quiz_submission", {
            id: "1"
          });
        });
      },
      teardown: function() {
        return run(App, "destroy");
      }
    });
    test("isCompleted", function() {
      run(function() {
        return quizSubmission.set("workflowState", "pending_review");
      });
      ok(quizSubmission.get("isCompleted"));
      run(function() {
        return quizSubmission.set("workflowState", "complete");
      });
      ok(quizSubmission.get("isCompleted"));
      run(function() {
        return quizSubmission.set("workflowState", "invalid");
      });
      return ok(!quizSubmission.get("isCompleted"));
    });
    test("isComplete", function() {
      run(function() {
        return quizSubmission.set("workflowState", "pending_review");
      });
      ok(!quizSubmission.get("isComplete"));
      run(function() {
        return quizSubmission.set("workflowState", "complete");
      });
      return ok(quizSubmission.get("isComplete"));
    });
    return test("isUntaken", function() {
      run(function() {
        return quizSubmission.set("workflowState", "untaken");
      });
      ok(quizSubmission.get("isUntaken"));
      run(function() {
        return quizSubmission.set("workflowState", "complete");
      });
      return ok(!quizSubmission.get("isUntaken"));
    });
  });

}).call(this);
