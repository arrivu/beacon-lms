(function() {
  define(['../../start_app', 'ember', '../../../controllers/quiz/submission_row_controller', 'ember-qunit', '../../environment_setup'], function(startApp, Ember, SubmissionRowController, emq) {
    var App, run;

    run = Ember.run;
    App = startApp();
    emq.setResolver(Ember.DefaultResolver.create({
      namespace: App
    }));
    emq.moduleFor('controller:quiz.submission_row', 'SubmissionRowController', {
      needs: ['controller:quiz', 'controller:quiz_moderate'],
      setup: function() {
        var user;

        App = startApp();
        emq.setResolver(Ember.DefaultResolver.create({
          namespace: App
        }));
        user = {
          id: 1,
          shortName: 'Wesley, Fred'
        };
        this.model = Ember.Object.create({
          user: user,
          quizSubmission: {
            id: 1,
            startedAt: new Date().getTime(),
            finishedAt: new Date().getTime(),
            attempt: 2,
            keptScore: 5,
            quizPointsPossible: 8,
            timeSpent: 60,
            quiz: {
              allowedAttempts: 5
            }
          }
        });
        this.subCtr = this.subject({
          content: {}
        });
        this.subCtr.get('controllers.quiz').set('model', {
          allowedAttempts: 10
        });
        this.subCtr.set('model', this.model);
        this.blankSub = {
          user: user,
          quizSubmission: Ember.Object.create
        };
        return this.get = function(prop) {
          return this.subCtr.get(prop);
        };
      },
      teardown: function() {
        return run(App, 'destroy');
      }
    });
    emq.test('sanity', function() {
      return equal(this.subCtr.get('model'), this.model);
    });
    emq.test('proxies attempt correctly', function() {
      return equal(this.get('attempts'), 2);
    });
    emq.test('attempts returns default when no attempts', function() {
      this.subCtr.set('model', this.blankSub);
      return equal(this.get('attempt', '--'));
    });
    emq.test('friendlyScore converted correctly', function() {
      expect(3);
      equal(this.get('friendlyScore'), '5 / 8');
      this.subCtr.set('keptScore', 0);
      equal(this.get('friendlyScore'), '0 / 8');
      this.subCtr.set('model', this.blankSub);
      return equal(this.get('friendlyScore'), void 0);
    });
    emq.test('friendlyScore rounds potentially repeating decimal score values', function() {
      this.subCtr.set('keptScore', 2.333333333333);
      return equal(this.get('friendlyScore'), '2.33 / 8');
    });
    emq.test('friendlyTime converts correctly', function() {
      equal(this.get('friendlyTime'), '01:00');
      this.subCtr.set('model', this.blankSub);
      return equal(this.get('friendlyTime'), void 0);
    });
    emq.test('remainingAttempts formats correctly when user has submission', function() {
      return equal(this.get('remainingAttempts'), '3');
    });
    return emq.test('remainingAttempts uses quiz value when no user submission', function() {
      this.subCtr.set('model', this.blankSub);
      return equal(this.get('remainingAttempts'), '10');
    });
  });

}).call(this);
