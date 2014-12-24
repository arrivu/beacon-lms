(function() {
  define(['ember', 'i18n!quiz_index_row', '../shared/environment'], function(Ember, I18n, environment) {
    var QuizIndexRowController;

    return QuizIndexRowController = Ember.ObjectController.extend({
      showAsPublished: false,
      needs: ['quizzes'],
      questionCountLabel: (function() {
        return I18n.t('questions', 'Question', {
          count: this.get('questionCount')
        });
      }).property('question_count'),
      isPublishedStatusVisible: (function() {
        return this.get('published') && this.get('canUpdate');
      }).property('published', 'canUpdate'),
      disabled: (function() {
        return !this.get('unpublishable');
      }).property('unpublishable'),
      disabledMessage: I18n.t('cant_unpublish_when_students_submit', "Can't unpublish if there are student submissions"),
      editTitle: I18n.t('edit_quiz', 'Edit Quiz'),
      deleteTitle: I18n.t('delete_quiz', 'Delete Quiz'),
      editUrl: (function() {
        return this.get('htmlURL') + "/edit";
      }).property('htmlURL'),
      pointsPossible: (function() {
        var pointsPossible;

        if (!(pointsPossible = this.get('model.pointsPossible'))) {
          return '';
        }
        return I18n.t('points', 'pt', {
          count: pointsPossible
        });
      }).property('model.pointsPossible'),
      displayPublished: (function() {
        return this.set('showAsPublished', this.get('published'));
      }).on('init'),
      updatePublished: function(publishStatus) {
        var failed, success,
          _this = this;

        success = (function() {
          return _this.displayPublished();
        });
        failed = function() {
          _this.set('published', true);
          _this.set('unpublishable', false);
          return _this.displayPublished();
        };
        this.set('published', publishStatus);
        return this.get('model').save().then(success, failed);
      },
      actions: {
        publish: function() {
          return this.updatePublished(true);
        },
        unpublish: function() {
          return this.updatePublished(false);
        },
        edit: function() {
          return window.location = this.get('editUrl');
        },
        "delete": function() {
          var model;

          if (window.confirm(I18n.t('confirms.delete_quiz', 'Are you sure you want to delete this quiz?'))) {
            model = this.get('model');
            model.deleteRecord();
            model.save();
            return this.get('controllers.quizzes').removeObject(model);
          }
        }
      }
    });
  });

}).call(this);
