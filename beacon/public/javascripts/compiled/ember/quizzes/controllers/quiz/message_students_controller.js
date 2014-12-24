(function() {
  define(['ember', 'ic-ajax', 'i18n!quiz_message_students'], function(Ember, ajax, I18n) {
    var equal;

    equal = Ember.computed.equal;
    return Ember.ArrayController.extend({
      needs: ['quiz'],
      quiz: Ember.computed.alias('controllers.quiz.model'),
      title: I18n.t('message_students_who', 'Message Students Who...'),
      recipientGroups: (function() {
        return [
          Ember.Object.create({
            id: 'submitted',
            name: I18n.t('students_who_have_taken_the_quiz', 'Students Who Have Taken the Quiz')
          }), Ember.Object.create({
            id: 'unsubmitted',
            name: I18n.t('student_who_have_not_taken_the_quiz', 'Students Who Have Not Taken the Quiz')
          })
        ];
      }).property('quiz.submittedStudents', 'quiz.unsubmittedStudents'),
      recipients: (function() {
        if (this.get('selectedRecipientGroup') === 'submitted') {
          return this.get('quiz.submittedStudents');
        } else {
          return this.get('quiz.unsubmittedStudents');
        }
      }).property('selectedRecipientGroup', 'quiz.submittedStudents', 'quiz.unsubmittedStudents'),
      showUnsubmitted: equal('selectedRecipientGroup', 'unsubmitted'),
      noRecipients: equal('recipients.length', 0),
      moreRecipientsLabel: (function() {
        var pagination, shown, total;

        if (this.get('selectedRecipientGroup') === 'submitted') {
          pagination = this.store.metadataFor("submittedStudent").pagination;
          shown = this.get('quiz.submittedStudents.length');
        } else {
          pagination = this.store.metadataFor("unsubmittedStudent").pagination;
          shown = this.get('quiz.unsubmittedStudents.length');
        }
        total = pagination ? pagination.count : 0;
        if (total > shown) {
          return I18n.t('and_num_more_students', 'and %{num} more students', {
            num: total - shown
          });
        }
      }).property('selectedRecipientGroup', 'quiz.submittedStudents', 'quiz.unsubmittedStudents'),
      modalHeight: (function() {
        return 325 + this.get('recipients.length') * 10;
      }).property('recipients', 'recipients.isFulfilled'),
      actions: {
        submit: function() {
          if (this.get('messageBody')) {
            ajax.request({
              url: this.get('quiz.messageStudentsUrl'),
              data: JSON.stringify({
                conversations: [
                  {
                    recipients: this.get('selectedRecipientGroup'),
                    body: this.get('messageBody')
                  }
                ]
              }),
              type: 'POST',
              dataType: 'json',
              contentType: 'application/json'
            });
            return Ember.$.flashMessage(I18n.t('message_sent_successfully', 'Message sent successfully'));
          } else {
            return Ember.$.flashWarning(I18n.t('message_not_sent_because_empty', 'Message not sent because it was left empty'));
          }
        }
      }
    });
  });

}).call(this);
