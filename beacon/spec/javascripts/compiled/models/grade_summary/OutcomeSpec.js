(function() {
  define(['compiled/models/grade_summary/Outcome'], function(Outcome) {
    module("Outcome");
    test("#status should be mastery if the score equals the mastery points", function() {
      var outcome;

      outcome = new Outcome({
        score: 3,
        mastery_points: 3
      });
      return equal(outcome.status(), 'mastery');
    });
    test("#status should be mastery if the score is greater than the mastery points", function() {
      var outcome;

      outcome = new Outcome({
        score: 4,
        mastery_points: 3
      });
      return equal(outcome.status(), 'mastery');
    });
    test("#status should be near if the score is greater than half the mastery points", function() {
      var outcome;

      outcome = new Outcome({
        score: 2,
        mastery_points: 3
      });
      return equal(outcome.status(), 'near');
    });
    test("#status should be remedial if the score is less than half the mastery points", function() {
      var outcome;

      outcome = new Outcome({
        score: 1,
        mastery_points: 3
      });
      return equal(outcome.status(), 'remedial');
    });
    test("#status should be undefined if there is no score", function() {
      var outcome;

      outcome = new Outcome({
        mastery_points: 3
      });
      return equal(outcome.status(), 'undefined');
    });
    test("#percentProgress should be zero if score isn't defined", function() {
      var outcome;

      outcome = new Outcome({
        points_possible: 3
      });
      return equal(outcome.percentProgress(), 0);
    });
    test("#percentProgress should be score over points possible", function() {
      var outcome;

      outcome = new Outcome({
        score: 5,
        points_possible: 10
      });
      return equal(outcome.percentProgress(), 50);
    });
    return test("#masteryPercent should be master_points over points possible", function() {
      var outcome;

      outcome = new Outcome({
        mastery_points: 5,
        points_possible: 10
      });
      return equal(outcome.masteryPercent(), 50);
    });
  });

}).call(this);
