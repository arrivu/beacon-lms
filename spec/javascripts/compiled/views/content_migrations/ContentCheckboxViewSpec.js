(function() {
  define(['compiled/collections/content_migrations/ContentCheckboxCollection', 'compiled/views/content_migrations/ContentCheckboxView', 'compiled/models/content_migrations/ContentCheckbox', 'jquery', 'helpers/fakeENV', 'helpers/jquery.simulate', 'helpers/fakeENV'], function(CheckboxCollection, CheckboxView, CheckboxModel, $, fakeENV) {
    var CheckboxHelper;

    CheckboxHelper = (function() {
      var _this = this;

      function CheckboxHelper() {}

      CheckboxHelper.renderView = function(options) {
        var checkboxCollection, checkboxModel;

        options || (options = {});
        checkboxModel = new CheckboxModel(options);
        checkboxModel.property || (checkboxModel.property = "copy[all_assignments]");
        checkboxModel.title || (checkboxModel.title = "Assignments");
        checkboxModel.type || (checkboxModel.type = "assignments");
        checkboxCollection = new CheckboxCollection([checkboxModel], {
          isTopLevel: true
        });
        this.checkboxView = new CheckboxView({
          model: checkboxModel
        });
        return this.$fixtures.html(this.checkboxView.render().el);
      };

      CheckboxHelper.teardown = function() {
        return this.checkboxView.remove();
      };

      CheckboxHelper.$fixtures = $('#fixtures');

      CheckboxHelper.checkboxView = void 0;

      CheckboxHelper.$checkbox = function() {
        return this.$fixtures.find('[type=checkbox]').first();
      };

      CheckboxHelper.$carrot = function() {
        return this.$fixtures.find('.checkbox-carrot').first();
      };

      CheckboxHelper.$sublevelCheckboxes = function(scope) {
        var $boxes;

        $boxes = CheckboxHelper.checkboxView.$el.find('.collectionViewItems').last().find('[type=checkbox]');
        if (scope) {
          $boxes = $boxes.filter(scope);
        }
        return $boxes;
      };

      CheckboxHelper.serverResponse = function() {
        return [
          200, {
            "Content-Type": "application/json"
          }, JSON.stringify([
            {
              "type": "assignment_groups",
              "property": "copy[assignment_groups][id_i6314c45816f1cc6d9519d88e4b7f64ab]",
              "title": "Assignments",
              "migration_id": "i6314c45816f1cc6d9519d88e4b7f64ab",
              "sub_items": [
                {
                  "type": "assignments",
                  "property": "copy[assignments][id_i1a139fc4cbf94f961973c63bd90fc1c7]",
                  "title": "Assignment 1",
                  "migration_id": "i1a139fc4cbf94f961973c63bd90fc1c7"
                }, {
                  "type": "assignments",
                  "property": "copy[assignments][id_i7af74171d7c7207f1578328d8bbf9dae]",
                  "title": "Unnamed Quiz",
                  "migration_id": "i7af74171d7c7207f1578328d8bbf9dae"
                }, {
                  "type": "assignments",
                  "property": "copy[assignments][id_i4af043da2399a5ec221f666b38714fa8]",
                  "title": "Unnamed Quiz",
                  "migration_id": "i4af043da2399a5ec221f666b38714fa8",
                  "linked_resource": {
                    "type": "assignments",
                    "migration_id": "i7af74171d7c7207f1578328d8bbf9dae"
                  }
                }
              ]
            }
          ])
        ];
      };

      return CheckboxHelper;

    }).call(this);
    module("Content Checkbox Behaviors", {
      teardown: function() {
        return CheckboxHelper.teardown();
      }
    });
    test('renders a checkbox with name set from model property', function() {
      var nameValue;

      CheckboxHelper.renderView({
        property: 'copy[all_assignments]'
      });
      nameValue = CheckboxHelper.$checkbox().prop('name');
      return equal(nameValue, 'copy[all_assignments]', 'Adds the correct name attribute from property');
    });
    module("Sublevel Content Checkbox and Carrot Behaviors", {
      setup: function() {
        fakeENV.setup();
        this.url = '/api/v1/courses/42/content_migrations/5/selective_data?type=assignments';
        this.clock = sinon.useFakeTimers();
        this.server = sinon.fakeServer.create();
        this.server.respondWith('GET', this.url, CheckboxHelper.serverResponse());
        CheckboxHelper.renderView({
          sub_items_url: this.url
        });
        CheckboxHelper.checkboxView.$el.trigger('fetchCheckboxes');
        this.server.respond();
        this.clock.tick(15);
        return CheckboxHelper.checkboxView.$el.find("[data-state='closed']").show();
      },
      teardown: function() {
        fakeENV.teardown();
        this.server.restore();
        this.clock.restore();
        return CheckboxHelper.teardown();
      }
    });
    test('renders sublevel checkboxes', function() {
      return equal(CheckboxHelper.$sublevelCheckboxes().length, 3, "Renders all sublevel checkboxes");
    });
    return test('checkboxes with sublevel checkboxes and no url only display labels', function() {
      return equal(CheckboxHelper.checkboxView.$el.find('label[title=Assignments]').siblings('[type=checkbox]').length, 0, "Doesn't include checkbox");
    });
  });

}).call(this);
