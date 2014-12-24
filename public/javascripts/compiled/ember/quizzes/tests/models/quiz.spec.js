(function() {
  define(['ember', '../start_app', 'i18n!quizzes'], function(Em, startApp, I18n) {
    var App, quiz, run;

    run = Em.run;
    App = null;
    quiz = null;
    module("Quiz", {
      setup: function() {
        var container, store;

        App = startApp();
        container = App.__container__;
        store = container.lookup('store:main');
        return run(function() {
          return quiz = store.createRecord('quiz', {
            id: '1'
          });
        });
      },
      teardown: function() {
        return run(App, 'destroy');
      }
    });
    test("isSurvey", function() {
      run(function() {
        return quiz.set('quizType', 'assignment');
      });
      ok(!quiz.get('isSurvey'));
      run(function() {
        return quiz.set('quizType', 'survey');
      });
      ok(quiz.get('isSurvey'), 'reports correctly for "survey"');
      run(function() {
        return quiz.set('quizType', 'graded_survey');
      });
      return ok(quiz.get('isSurvey'), 'reports correctly for "graded_survey"');
    });
    test("isPracticeQuiz", function() {
      run(function() {
        return quiz.set('quizType', 'assignment');
      });
      ok(!quiz.get('isPracticeQuiz'));
      run(function() {
        return quiz.set('quizType', 'practice_quiz');
      });
      return ok(quiz.get('isPracticeQuiz'));
    });
    test("isAssignment", function() {
      run(function() {
        return quiz.set('quizType', 'practice_quiz');
      });
      ok(!quiz.get('isAssignment'));
      run(function() {
        return quiz.set('quizType', 'assignment');
      });
      return ok(quiz.get('isAssignment'));
    });
    test("tScoringPolicy", function() {
      run(function() {
        return quiz.set('scoringPolicy', 'keep_highest');
      });
      equal(quiz.get('tScoringPolicy'), I18n.t('keep_highest', 'Highest'));
      run(function() {
        return quiz.set('scoringPolicy', 'keep_latest');
      });
      return equal(quiz.get('tScoringPolicy'), I18n.t('keep_latest', 'Latest'));
    });
    test("tQuizType", function() {
      var assertTQuizType, setQuizType;

      setQuizType = function(type) {
        return run(function() {
          return quiz.set('quizType', type);
        });
      };
      assertTQuizType = function(tQuizType) {
        return equal(quiz.get('tQuizType'), tQuizType);
      };
      setQuizType('assignment');
      assertTQuizType(I18n.t('graded_quiz', 'Graded Quiz'));
      setQuizType('survey');
      assertTQuizType(I18n.t('survey', 'Survey'));
      setQuizType('graded_survey');
      assertTQuizType(I18n.t('graded_survey', 'Graded Survey'));
      setQuizType('practice_quiz');
      return assertTQuizType(I18n.t('practice_quiz', 'Practice Quiz'));
    });
    test("unlimitedAllowedAttempts", function() {
      run(function() {
        return quiz.set("allowedAttempts", 1);
      });
      ok(!quiz.get("unlimitedAllowedAttempts"));
      run(function() {
        return quiz.set("allowedAttempts", -1);
      });
      return ok(quiz.get("unlimitedAllowedAttempts"));
    });
    test("multipleAttemptsAllowed", function() {
      run(function() {
        return quiz.set("allowedAttempts", 1);
      });
      ok(!quiz.get("multipleAttemptsAllowed"));
      run(function() {
        return quiz.set("allowedAttempts", -1);
      });
      ok(quiz.get("multipleAttemptsAllowed"));
      run(function() {
        return quiz.set("allowedAttempts", 2);
      });
      return ok(quiz.get("multipleAttemptsAllowed"));
    });
    test("alwaysShowResults", function() {
      run(function() {
        return quiz.set("hideResults", null);
      });
      ok(quiz.get("alwaysShowResults"));
      run(function() {
        return quiz.set("hideResults", 'always');
      });
      return ok(!quiz.get("alwaysShowResults"));
    });
    test("showResultsAfterLastAttempt", function() {
      run(function() {
        return quiz.set("hideResults", false);
      });
      ok(!quiz.get("showResultsAfterLastAttempt"));
      run(function() {
        return quiz.set("hideResults", 'until_after_last_attempt');
      });
      return ok(quiz.get("showResultsAfterLastAttempt"));
    });
    test("sortSlug", function() {
      var date;

      date = new Date();
      run(function() {
        quiz.set('quizType', 'assignment');
        quiz.set('dueAt', date);
        return quiz.set('title', 'ohi');
      });
      equal(quiz.get('sortSlug'), date.toISOString() + 'ohi', 'uses dueAt when isAssignment');
      date = new Date();
      run(function() {
        quiz.set('lockAt', date);
        return quiz.set('quizType', 'graded_survey');
      });
      equal(quiz.get('sortSlug'), date.toISOString() + 'ohi', 'uses lockAt when not isAssignment');
      run(function() {
        return quiz.set('lockAt', null);
      });
      return equal(quiz.get('sortSlug'), App.Quiz.SORT_LAST + 'ohi', 'uses a sort_last token when no date');
    });
    return test("allDates", function() {
      var date;

      date = new Date();
      return run(function() {
        quiz.set('lockAt', date);
        return equal(quiz.get("allDates").length, 1, 'builds the date');
      });
    });
  });

}).call(this);
