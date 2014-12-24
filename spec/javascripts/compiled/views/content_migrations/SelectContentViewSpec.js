(function() {
  define(['jquery', 'Backbone', 'compiled/views/content_migrations/SelectContentView', 'compiled/models/ProgressingContentMigration', 'helpers/fakeENV', 'helpers/jquery.simulate'], function($, Backbone, SelectContentView, ProgressingMigration, fakeENV) {
    var SelectContentHelper;

    SelectContentHelper = (function() {
      function SelectContentHelper() {}

      SelectContentHelper.url = '/api/v1/courses/42/content_migrations/5/selective_data';

      SelectContentHelper.$caret = function() {
        return this.$fixtures.find('.checkbox-caret').first();
      };

      SelectContentHelper.toplevelCheckboxResponse = function() {
        return [
          200, {
            "Content-Type": "application/json"
          }, JSON.stringify([
            {
              "type": "course_settings",
              "property": "copy[all_course_settings]",
              "title": "Course Settings"
            }, {
              "type": "syllabus_body",
              "property": "copy[all_syllabus_body]",
              "title": "Syllabus Body"
            }, {
              "count": 2,
              "property": "copy[all_assignments]",
              "sub_items_url": this.url + "?type=assignments",
              "title": "Assignments",
              "type": "assignments"
            }
          ])
        ];
      };

      SelectContentHelper.sublevelCheckboxResponse = function() {
        return [
          200, {
            "Content-Type": "application/json"
          }, JSON.stringify([
            {
              "type": "assignment_groups",
              "property": "copy[assignment_groups][id_i6314c45816f1cc6d9519d88e4b7f64ab]",
              "title": "Assignment group",
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

      return SelectContentHelper;

    })();
    module('SelectContentView: Integration Tests', {
      setup: function() {
        this.server = sinon.fakeServer.create();
        fakeENV.setup();
        this.$fixtures = $('#fixtures');
        this.model = new ProgressingMigration({
          id: 5,
          course_id: 42
        });
        this.selectContentView = new SelectContentView({
          model: this.model,
          title: 'Select Content',
          width: 600,
          height: 400,
          fixDialogButtons: false
        });
        this.$fixtures.append(this.selectContentView.$el);
        this.server.respondWith('GET', SelectContentHelper.url, SelectContentHelper.toplevelCheckboxResponse());
        this.selectContentView.open();
        this.server.respond();
        return this.tree = this.selectContentView.$el.find('ul[role=tree]');
      },
      teardown: function() {
        fakeENV.teardown();
        this.server.restore();
        return this.selectContentView.remove();
      }
    });
    test('render top level checkboxes when opened', function() {
      var $checkboxes;

      $checkboxes = this.selectContentView.$el.find('[type=checkbox]');
      return equal($checkboxes.length, 3, "Renders all checkboxes");
    });
    test('changes parents to intermediate when not all of the sublevel checkboxes are check', function() {
      var $subCheckboxes, indeterminate;

      this.server.respondWith('GET', SelectContentHelper.url + "?type=assignments", SelectContentHelper.sublevelCheckboxResponse());
      this.selectContentView.$el.find('[data-type=assignments] .checkbox-caret').simulate('click');
      this.server.respond();
      $subCheckboxes = this.selectContentView.$el.find('.collectionViewItems').last().find('[type=checkbox]');
      this.selectContentView.$el.find("[data-state='closed']").show();
      this.selectContentView.$el.find($subCheckboxes[2]).simulate('click');
      indeterminate = this.selectContentView.$el.find("input[name='copy[all_assignments]']").first().prop('indeterminate');
      return ok(indeterminate || indeterminate === 'true', "Parent changed to intermediate");
    });
    test("clicking the caret shows and hides checkboxes", function() {
      var $caret, $sublevelCheckboxes;

      $caret = this.selectContentView.$el.find("[data-type=assignments] .checkbox-caret").first();
      $sublevelCheckboxes = $caret.closest('div').siblings('ul').first();
      equal($caret.parents('[role=treeitem]').attr('aria-expanded'), 'false');
      $caret.simulate('click');
      return equal($caret.parents('[role=treeitem]').attr('aria-expanded'), 'true');
    });
    test("checking a checkbox checks all children checkboxes", function() {
      var $assignmentCarrot, clock;

      this.server.respondWith('GET', SelectContentHelper.url + "?type=assignments", SelectContentHelper.sublevelCheckboxResponse());
      $assignmentCarrot = this.selectContentView.$el.find('[data-type=assignments] .checkbox-caret');
      $assignmentCarrot.simulate('click');
      this.server.respond();
      clock = sinon.useFakeTimers();
      this.selectContentView.$el.find("input[name='copy[all_assignments]']").simulate('click');
      clock.tick(1);
      this.selectContentView.$el.find('[data-type=assignments] input[type=checkbox]').each(function() {
        return ok($(this).is(':checked'), 'checkbox is checked');
      });
      return clock.restore();
    });
    test('checking toplevel then expanding should also check all children when they are loaded', function() {
      var $assignmentCarrot, clock;

      this.server.respondWith('GET', SelectContentHelper.url + "?type=assignments", SelectContentHelper.sublevelCheckboxResponse());
      this.selectContentView.$el.find("input[name='copy[all_assignments]']").simulate('click');
      clock = sinon.useFakeTimers();
      $assignmentCarrot = this.selectContentView.$el.find('[data-type=assignments] .checkbox-caret');
      $assignmentCarrot.simulate('click');
      this.server.respond();
      clock.tick(1);
      this.selectContentView.$el.find('[data-type=assignments] input[type=checkbox]').each(function() {
        return ok($(this).is(':checked'), 'checkbox is checked');
      });
      return clock.restore();
    });
    test("pressing the cancel button closes the dialog view", function() {
      this.selectContentView.$el.find('#cancelSelect').simulate('click');
      return ok(!this.selectContentView.dialog.isOpen(), "Dialog is closed");
    });
    test("select content button is disabled unless content is selected", function() {
      ok(this.selectContentView.$el.find('#selectContentBtn').prop('disabled'), 'Disabled by default');
      this.selectContentView.$el.find('input[type=checkbox]').first().simulate('click');
      ok(!this.selectContentView.$el.find('#selectContentBtn').prop('disabled'), 'Enabled after checking item');
      this.selectContentView.$el.find('input[type=checkbox]').first().simulate('click');
      return ok(this.selectContentView.$el.find('#selectContentBtn').prop('disabled'), 're-disabled if no selected');
    });
    test("pressing the up/down arrow selects the next treeitem", function() {
      var $currentlySelected, $treeitems, downEvent, upEvent;

      downEvent = jQuery.Event("keyup", {
        which: 40
      });
      upEvent = jQuery.Event("keyup", {
        which: 38
      });
      $treeitems = this.selectContentView.$el.find('[role=treeitem]:visible');
      this.tree = this.selectContentView.$el.find('ul[role=tree]');
      this.tree.trigger(downEvent);
      this.tree.trigger(downEvent);
      $currentlySelected = this.selectContentView.$el.find('[aria-selected=true]');
      equal($treeitems.index($currentlySelected), 1, "pressing down moves to the second item");
      this.tree.trigger(upEvent);
      $currentlySelected = this.selectContentView.$el.find('[aria-selected=true]');
      return equal($treeitems.index($currentlySelected), 0, "pressing up moves to the first item");
    });
    test("pressing home/end buttons move you to the first and last treeitem", function() {
      var $currentlySelected, $treeitems, endEvent, homeEvent;

      homeEvent = jQuery.Event("keyup", {
        which: 36
      });
      endEvent = jQuery.Event("keyup", {
        which: 35
      });
      $treeitems = this.selectContentView.$el.find('[role=treeitem]:visible');
      this.tree.trigger(endEvent);
      $currentlySelected = this.selectContentView.$el.find('[aria-selected=true]');
      equal($treeitems.index($currentlySelected), $treeitems.length - 1, "pressing the end button moves to last item");
      this.tree.trigger(homeEvent);
      $currentlySelected = this.selectContentView.$el.find('[aria-selected=true]');
      return equal($treeitems.index($currentlySelected), 0, "pressing the home button moves to the first item");
    });
    test("pressing right arrow expands", function() {
      var $currentlySelected, downEvent, rightEvent;

      rightEvent = jQuery.Event("keyup", {
        which: 39
      });
      downEvent = jQuery.Event("keyup", {
        which: 40
      });
      this.tree.trigger(downEvent);
      this.tree.trigger(downEvent);
      this.tree.trigger(downEvent);
      this.tree.trigger(rightEvent);
      $currentlySelected = this.selectContentView.$el.find('[aria-selected=true]');
      return equal($currentlySelected.attr('aria-expanded'), "true", "expands the tree item when right is pressed");
    });
    test("aria levels are correctly represented", function() {
      var $assignmentCarrot, clock;

      this.server.respondWith('GET', SelectContentHelper.url + "?type=assignments", SelectContentHelper.sublevelCheckboxResponse());
      this.selectContentView.$el.find("input[name='copy[all_assignments]']").simulate('click');
      clock = sinon.useFakeTimers();
      $assignmentCarrot = this.selectContentView.$el.find('[data-type=assignments] .checkbox-caret');
      $assignmentCarrot.simulate('click');
      this.server.respond();
      clock.tick(1);
      equal(this.selectContentView.$el.find("[name='copy[all_assignments]']").parents('[role=treeitem]').attr('aria-level'), "1", 'top level aria level is 1');
      equal(this.selectContentView.$el.find("[name='copy[assignment_groups][id_i6314c45816f1cc6d9519d88e4b7f64ab]']").parents('[role=treeitem]').attr('aria-level'), "2", 'second level has a level of 2');
      return clock.restore();
    });
    return test("active decendant is set propertly when clicking on treeitems", function() {
      var $tree, $treeitem, $treeitemHeading;

      $tree = this.selectContentView.$el.find('[role=tree]');
      $treeitem = this.selectContentView.$el.find('[role=treeitem]:first');
      $treeitemHeading = this.selectContentView.$el.find('[role=treeitem]:first .treeitem-heading');
      $treeitemHeading.click();
      return equal($tree.attr('aria-activedescendant'), $treeitem.attr('id'));
    });
  });

}).call(this);
