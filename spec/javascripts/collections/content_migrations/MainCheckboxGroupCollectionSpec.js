(function() {
  define(['Backbone', 'compiled/collections/content_migrations/MainCheckboxGroupCollection', 'compiled/models/content_migrations/MainCheckboxGroupModel', 'compiled/models/ProgressingContentMigration', 'compiled/models/ContentMigration'], function(Backbone, MainCheckboxGroupCollection, MainCheckboxGroupModel, ProgressingContentMigration, MigrationModel) {
    module('MainCheckboxGroupCollectionSpec', {
      setup: function() {
        this.courseID = 15;
        this.migration = new MigrationModel({
          id: 42
        });
        return this.mainCheckboxGroupCollection = new MainCheckboxGroupCollection(null, {
          courseID: "15",
          migrationModel: this.migration
        });
      }
    });
    test('contains MainCheckboxGroupModel\'s ', function() {
      var model, modelInstance;

      model = this.mainCheckboxGroupCollection.model;
      modelInstance = new model({
        migrationModel: new ProgressingContentMigration
      });
      return ok(modelInstance instanceof MainCheckboxGroupModel, "Collection contains instances of MainCheckboxGroupsModels");
    });
    test('has a courseID', function() {
      return ok(isFinite(Number(this.mainCheckboxGroupCollection.courseID)), "Has a courseID number");
    });
    test('has a migrationModel', function() {
      return ok(this.mainCheckboxGroupCollection.migrationModel instanceof MigrationModel, "Has a migration model");
    });
    return test('endpoints set to the correct url', function() {
      var endpointURL;

      endpointURL = "/api/v1/courses/" + this.courseID + "/content_migrations/" + this.migration.id + "/selective_data";
      return equal(this.mainCheckboxGroupCollection.url(), endpointURL, "Endpoint url is correct");
    });
  });

}).call(this);
