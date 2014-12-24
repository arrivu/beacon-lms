(function() {
  define(['./base_controller', 'i18n!add_module_item', '../../../shared/xhr/fetch_all_pages', 'ic-ajax', '../../models/item'], function(Base, I18n, fetch, _arg, Item) {
    var AddQuizController, request;

    request = _arg.request;
    AddQuizController = Base.extend({
      quizzes: (function() {
        var _base;

        return (_base = this.constructor).quizzes || (_base.quizzes = fetch("/api/v1/courses/" + ENV.course_id + "/quizzes"));
      }).property(),
      title: (function() {
        return I18n.t('add_quiz_to', "Add a quizzes to %{module}", {
          module: this.get('moduleController.name')
        });
      }).property('moduleController.name'),
      actions: {
        toggleSelected: function(quiz) {
          var quizzes;

          quizzes = this.get('model.selected');
          if (quizzes.contains(quiz)) {
            return quizzes.removeObject(quiz);
          } else {
            return quizzes.addObject(quiz);
          }
        }
      }
    });
    return AddQuizController.reopenClass({
      quizzes: null
    });
  });

}).call(this);
