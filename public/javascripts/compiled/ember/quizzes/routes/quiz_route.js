(function() {
  define(['ember', '../mixins/redirect', '../shared/environment', 'i18n!quiz_route', '../shared/title_builder'], function(Ember, Redirect, env, I18n, titleBuilder) {
    var QuizRoute;

    return QuizRoute = Ember.Route.extend(Redirect, {
      afterModel: function(quiz, transition) {
        var msg;

        env.set("quizId", quiz.id);
        titleBuilder([quiz.get('title')]);
        if (quiz.get("deleted")) {
          quiz.unloadRecord();
          msg = I18n.t('that_quiz_has_been_deleted', 'That quiz has been deleted');
          return this.redirectTo('quizzes', msg);
        }
      },
      actions: {
        error: function(error, transition) {
          var messages, msg;

          messages = Ember.A(["Not Found", "Unauthorized", "Authorization Required"]);
          if (messages.contains(error.errorThrown.trim())) {
            msg = I18n.t('that_quiz_doesnt_exist', "That quiz doesn't exist");
            return this.redirectTo('quizzes', msg);
          }
        },
        _destroyModal: function() {
          return this.disconnectOutlet({
            outlet: 'modal',
            parentView: 'application'
          });
        },
        confirmDeletion: function() {
          return this.render('confirm_delete', {
            into: 'application',
            outlet: 'modal'
          });
        },
        messageStudents: function() {
          return this.render('quiz/message_students', {
            into: 'application',
            outlet: 'modal'
          });
        }
      }
    });
  });

}).call(this);
