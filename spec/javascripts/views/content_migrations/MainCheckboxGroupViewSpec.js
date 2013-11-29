(function() {
  define(['compiled/views/content_migrations/MainCheckboxGroupView', 'compiled/models/content_migrations/MainCheckboxGroupModel', 'compiled/models/ProgressingContentMigration'], function(MainCheckboxGroupView, MainCheckboxGroupModel, ProgressingMigration) {
    module('MainCheckboxGroupViewSpec', {
      setup: function() {
        this.model = new MainCheckboxGroupModel({
          property: "copy[all_course_settings]",
          title: "Course Settings",
          type: "course_settings",
          migrationModel: new ProgressingMigration({
            course_id: 5,
            id: 42
          })
        });
        this.view = new MainCheckboxGroupView({
          model: this.model
        });
        return $('#fixtures').html(this.view.render().el);
      },
      teardown: function() {
        return this.view.remove();
      }
    });
    test('renders a checkbox with a CheckboxGroupModels title as a label', function() {
      equal(this.view.$el.find('[data-bind="title"]').text(), this.model.get('title'), "Renders title as checkbox label");
      return equal(this.view.$el.find('[type="checkbox"]').length, 1, "Renders a checkbox");
    });
    return test('clicking checkbox set model property from checkbox name', function() {
      this.view.$el.find('[type="checkbox"]').click();
      return ok(this.model.migrationModel.deepGet("copy.all_course_settings"), "all_course_settings is true");
    });
  });

}).call(this);
