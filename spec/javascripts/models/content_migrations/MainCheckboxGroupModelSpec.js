(function() {
  define(['compiled/models/content_migrations/MainCheckboxGroupModel', 'compiled/models/ProgressingContentMigration'], function(MainCheckboxGroupModel, ProgressingMigration) {
    module('MainCheckboxGroupModelSpec', {
      setup: function() {
        return this.modelData = {
          property: "copy[all_course_settings]",
          title: "Course Settings",
          type: "course_settings"
        };
      }
    });
    test('has progressingMigration child', function() {
      var model;

      model = new MainCheckboxGroupModel({
        migrationModel: new ProgressingMigration
      });
      return ok(model.hasOwnProperty('migrationModel'), "Has a migrationModel");
    });
    return test('raises and error if migrationModel option is not a progressingMigration', function() {
      var runModel;

      runModel = function() {
        return new MainCheckboxGroupModel({
          migrationModel: {
            notA: "progressingMigration"
          }
        });
      };
      return throws(runModel, "Throws an error when not given the correct migration");
    });
  });

}).call(this);
