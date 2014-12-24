(function() {
  define(['ember'], function(Ember) {
    return Ember.ObjectController.extend({
      discriminationIndexClass: (function() {
        if (this.get('discriminationIndex') > 0.25) {
          return 'positive';
        } else {
          return 'negative';
        }
      }).property('discriminationIndex'),
      sign: (function() {
        if (this.get('discriminationIndex') > 0) {
          return '+';
        } else {
          return '';
        }
      }).property('discriminationIndex'),
      chartData: (function() {
        var stats;

        stats = {
          top: {
            correct: this.get('correctTopStudentCount'),
            total: this.get('topStudentCount')
          },
          mid: {
            correct: this.get('correctMiddleStudentCount'),
            total: this.get('middleStudentCount')
          },
          bot: {
            correct: this.get('correctBottomStudentCount'),
            total: this.get('bottomStudentCount')
          }
        };
        return {
          correct: [stats.top.correct, stats.mid.correct, stats.bot.correct],
          total: [stats.top.total, stats.mid.total, stats.bot.total],
          ratio: [(parseFloat(stats.top.correct) / stats.top.total) || 0, (parseFloat(stats.mid.correct) / stats.mid.total) || 0, (parseFloat(stats.bot.correct) / stats.bot.total) || 0]
        };
      }).property('{top,middle,bottom}StudentCount')
    });
  });

}).call(this);
