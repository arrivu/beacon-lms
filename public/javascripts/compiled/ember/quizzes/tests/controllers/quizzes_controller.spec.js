(function() {
  define(['../start_app', 'ember', 'ic-ajax', '../../controllers/quizzes_controller', '../../models/quiz', 'ember-data', '../environment_setup'], function(startApp, Ember, ajax, QuizzesController, Quiz, DS) {
    var App, run, store;

    App = null;
    store = null;
    run = Ember.run;
    module('quizzes_controller', {
      setup: function() {
        var container, quizzes,
          _this = this;

        App = startApp();
        run(function() {
          return _this.qc = QuizzesController.create();
        });
        container = App.__container__;
        store = container.lookup('store:main');
        quizzes = null;
        return run(function() {
          quizzes = Em.A([
            store.createRecord('quiz', {
              quizType: 'survey',
              title: 'Test Quiz'
            }), store.createRecord('quiz', {
              quizType: 'graded_survey',
              title: 'Test survey'
            }), store.createRecord('quiz', {
              quizType: 'practice_quiz',
              title: 'Test practice quiz'
            }), store.createRecord('quiz', {
              quizType: 'practice_quiz',
              title: 'Other practice'
            }), store.createRecord('quiz', {
              quizType: 'assignment',
              title: 'Assignment test'
            })
          ]);
          return _this.qc.set('model', quizzes);
        });
      },
      teardown: function() {
        var _this = this;

        run(function() {
          return _this.qc.destroy();
        });
        return run(App, 'destroy');
      }
    });
    test('raw quiz types counts calculated correctly', function() {
      equal(this.qc.get('rawSurveys').length, 2);
      equal(this.qc.get('rawPractices').length, 2);
      return equal(this.qc.get('rawAssignments').length, 1);
    });
    test('quizzes filters match correctly', function() {
      this.qc.set('searchFilter', 'quiz');
      equal(this.qc.get('surveys').length, 1);
      equal(this.qc.get('practices').length, 1);
      return equal(this.qc.get('assignments').length, 0);
    });
    return test('sorts by sortSlug', function() {
      var arrangedContent, assignment, practice, survey,
        _this = this;

      practice = this.qc.findBy('title', 'Other practice');
      assignment = this.qc.findBy('title', 'Assignment test');
      survey = this.qc.findBy('title', 'Test survey');
      run(function() {
        practice.set('quizType', 'assignment');
        practice.set('dueAt', new Date("May 1, 2014"));
        assignment.set('dueAt', new Date("May 2, 2014"));
        survey.set('title', '1AThingThatShouldComeFirstButDoeNot');
        return _this.qc.set('model', [assignment, survey, practice]);
      });
      arrangedContent = this.qc.get('arrangedContent');
      ok(arrangedContent.objectAt(0) === practice);
      ok(arrangedContent.objectAt(1) === assignment);
      return ok(arrangedContent.objectAt(2) === survey, 'quizzes without due dates come last');
    });
  });

}).call(this);
