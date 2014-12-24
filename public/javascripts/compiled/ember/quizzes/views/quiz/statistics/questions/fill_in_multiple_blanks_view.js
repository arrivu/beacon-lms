(function() {
  define(['../questions_view'], function(Base) {
    return Base.extend({
      preselectAnswerSet: (function() {
        var blankId;

        if (!this.get('controller.activeAnswer')) {
          blankId = this.get('controller.answerSets.firstObject.id');
          if (blankId) {
            return this.get('controller').send('activateAnswer', blankId);
          }
        }
      }).on('didInsertElement')
    });
  });

}).call(this);
