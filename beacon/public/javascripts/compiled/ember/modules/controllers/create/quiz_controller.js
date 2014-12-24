(function() {
  define(['./base_controller', 'i18n!create_module_item_quiz', '../../models/item', 'ic-ajax'], function(Base, I18n, Item, _arg) {
    var CreateQuizController, request;

    request = _arg.request;
    return CreateQuizController = Base.extend({
      text: {
        quizName: I18n.t('quiz_name', 'Quiz Name')
      },
      types: [
        {
          value: 'assignment',
          label: I18n.t('graded_quiz', 'Graded Quiz')
        }, {
          value: 'practice_quiz',
          label: I18n.t('practice_quiz', 'Practice Quiz')
        }, {
          value: 'graded_survey',
          label: I18n.t('graded_survey', 'Graded Survey')
        }, {
          value: 'survey',
          label: I18n.t('ungrded_survey', 'Ungraded Survey')
        }
      ],
      createItem: function() {
        var item, quiz,
          _this = this;

        quiz = this.get('model');
        item = Item.createRecord({
          title: quiz.title,
          type: 'Quiz'
        });
        request({
          url: "/api/v1/courses/" + ENV.course_id + "/quizzes",
          type: 'post',
          data: {
            quiz: quiz
          }
        }).then((function(savedQuiz) {
          item.set('content_id', savedQuiz.id);
          return item.save();
        }), (function() {
          return _this.handleContentError(item);
        }));
        return item;
      }
    });
  });

}).call(this);
