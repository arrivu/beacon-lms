(function() {
  require(['jquery', 'compiled/collections/UserCollection', 'jst/modules/ProgressionsIndex', 'compiled/views/PaginatedCollectionView', 'compiled/views/modules/ProgressionStudentView'], function($, UserCollection, progressionsIndexTemplate, PaginatedCollectionView, ProgressionStudentView) {
    var indexView, students;

    $(document.body).addClass('context_modules2');
    if (ENV.RESTRICTED_LIST) {
      students = new UserCollection(ENV.VISIBLE_STUDENTS);
      students.urls = null;
    } else {
      students = new UserCollection(null, {
        params: {
          per_page: 50,
          enrollment_type: 'student'
        }
      });
    }
    indexView = new PaginatedCollectionView({
      collection: students,
      itemView: ProgressionStudentView,
      template: progressionsIndexTemplate,
      modules_url: ENV.MODULES_URL,
      autoFetch: true
    });
    if (!ENV.RESTRICTED_LIST) {
      students.fetch({
        success: function() {
          return indexView.resetScrollContainer(indexView.$el.find('#progression_students .collectionViewItems'));
        }
      });
    }
    indexView.render();
    if (ENV.RESTRICTED_LIST && ENV.VISIBLE_STUDENTS.length === 1) {
      indexView.$el.find('#progression_students').hide();
    }
    return indexView.$el.appendTo($('#content'));
  });

}).call(this);
