(function() {
  define(['ember'], function(Ember) {
    return Ember.ObjectController.extend({
      inspectorData: Ember.computed.alias('answers'),
      chartData: (function() {
        return this.get('answers').map(function(answer) {
          return {
            id: answer.id,
            y: answer.responses,
            correct: answer.correct
          };
        });
      }).property('answers')
    });
  });

}).call(this);
