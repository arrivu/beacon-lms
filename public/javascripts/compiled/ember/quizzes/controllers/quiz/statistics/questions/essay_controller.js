(function() {
  define(['../questions_controller', 'i18n!quiz_statistics'], function(Base, I18n) {
    return Base.extend({
      correctResponseRatioLabel: (function() {
        return I18n.t('correct_essay_student_ratio', '%{ratio}% of your students received full credit for this question.', {
          ratio: Em.Util.round(this.get('correctResponseRatio') * 100, 0)
        });
      }).property('correctResponseRatio'),
      correctResponseRatio: (function() {
        var participantCount;

        participantCount = this.get('participantCount');
        if (participantCount > 0) {
          return this.get('fullCredit') / participantCount;
        } else {
          return 0;
        }
      }).property('fullCredit', 'participantCount')
    });
  });

}).call(this);
