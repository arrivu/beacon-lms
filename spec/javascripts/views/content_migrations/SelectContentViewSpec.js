(function() {
  define(['compiled/views/content_migrations/SelectContentView', 'compiled/models/ProgressingContentMigration'], function(SelectContentView, ProgressingMigration) {
    return module('SelectContentViewSpec', {
      setup: function() {
        this.model = new ProgressingMigration({
          id: 5,
          course_id: 42
        });
        return this.selectContentView = new SelectContentView({
          model: this.model,
          el: $('#fixtures'),
          title: 'Select Content',
          width: 600,
          height: 400
        });
      },
      teardown: function() {
        return this.selectContentView.remove();
      }
    });
  });

}).call(this);
