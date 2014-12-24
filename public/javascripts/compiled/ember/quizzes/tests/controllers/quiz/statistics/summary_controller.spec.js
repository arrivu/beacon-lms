(function() {
  define(['../../../start_app', 'ember', '../../../../controllers/quiz/statistics/summary_controller', 'ember-qunit', '../../../environment_setup'], function(startApp, Ember, QuizStatisticsSummaryController, emq) {
    var App, run;

    run = Ember.run;
    App = startApp();
    emq.setResolver(Ember.DefaultResolver.create({
      namespace: App
    }));
    emq.moduleFor('controller:quiz_statistics_summary', 'QuizStatisticsSummaryController', {
      setup: function() {
        App = startApp();
        emq.setResolver(Ember.DefaultResolver.create({
          namespace: App
        }));
        this.model = Ember.Object.create({});
        this.subject = this.subject();
        return this.subject.set('model', this.model);
      },
      teardown: function() {
        return run(App, 'destroy');
      }
    });
    emq.test('sanity', function() {
      return ok(this.subject);
    });
    emq.test('#scoreChartData', function() {
      var data;

      this.model.set('submissionStatistics', {});
      this.model.set('submissionStatistics.scores', {
        42: 3,
        88: 12,
        100: 1
      });
      data = this.subject.get('scoreChartData');
      equal(data.length, 101);
      equal(data[42], 3);
      equal(data[88], 12);
      return equal(data[100], 1);
    });
    emq.test('#scoreChartData: it considers scores over 100% as 100%', function() {
      var data;

      this.model.set('submissionStatistics', {
        scores: {
          100: 1,
          101: 2,
          105: 2
        }
      });
      data = this.subject.get('scoreChartData');
      equal(data.length, 101);
      return equal(data[100], 5);
    });
    emq.test('#formattedAvgDuration: pads durations with leading zeros', function() {
      this.model.set('avgDuration', 42);
      equal(this.subject.get('formattedAvgDuration'), '00:42');
      this.model.set('avgDuration', 63);
      return equal(this.subject.get('formattedAvgDuration'), '01:03');
    });
    emq.test('#formattedAvgDuration: includes hours in output', function() {
      this.model.set('avgDuration', 3721);
      return equal(this.subject.get('formattedAvgDuration'), '01:02:01');
    });
    emq.test('#avgScoreRatio', function() {
      this.model.set('quiz', {
        pointsPossible: 32
      });
      this.model.set('avgScore', 17);
      return equal(this.subject.get('avgScoreRatio'), 53);
    });
    emq.test('#highScoreRatio', function() {
      this.model.set('quiz', {
        pointsPossible: 32
      });
      this.model.set('highScore', 30);
      return equal(this.subject.get('highScoreRatio'), 94);
    });
    return emq.test('#lowScoreRatio', function() {
      this.model.set('quiz', {
        pointsPossible: 32
      });
      this.model.set('lowScore', 4);
      return equal(this.subject.get('lowScoreRatio'), 13);
    });
  });

}).call(this);
