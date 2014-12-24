(function() {
  define(['compiled/models/DueDateList', 'compiled/models/Assignment', 'compiled/models/AssignmentOverride', 'compiled/collections/AssignmentOverrideCollection', 'compiled/models/Section', 'compiled/collections/SectionCollection', 'underscore'], function(DueDateList, Assignment, AssignmentOverride, AssignmentOverrideCollection, Section, SectionList, _) {
    var stub;

    stub = sinon.stub;
    module("DueDateList", {
      setup: function() {
        this.date = Date.now();
        this.assignment = new Assignment({
          due_at: this.date,
          unlock_at: this.date,
          lock_at: this.date
        });
        this.partialOverrides = new AssignmentOverrideCollection([
          new AssignmentOverride({
            course_section_id: '1'
          }), new AssignmentOverride({
            course_section_id: '2'
          })
        ]);
        this.completeOverrides = new AssignmentOverrideCollection([
          new AssignmentOverride({
            course_section_id: '1'
          }), new AssignmentOverride({
            course_section_id: '2'
          }), new AssignmentOverride({
            course_section_id: '3'
          })
        ]);
        this.sections = new SectionList([
          new Section({
            id: '1',
            name: "CourseSection1"
          }), new Section({
            id: '2',
            name: "CourseSection2"
          }), new Section({
            id: '3',
            name: "CourseSection3"
          })
        ]);
        this.partialOverridesList = new DueDateList(this.partialOverrides, this.sections, this.assignment);
        return this.completeOverridesList = new DueDateList(this.completeOverrides, this.sections, this.assignment);
      }
    });
    test("#availableSections returns list of course sections that\nare not being used by the AssignmentOverrideCollection", function() {
      var availableSections;

      availableSections = this.partialOverridesList.availableSections();
      strictEqual(availableSections.length, 1);
      return strictEqual(availableSections[0].id, '3');
    });
    test("#containsSectionsWithoutOverrides returns true when a section's id\ndoes not belong to an AssignmentOverride and there isn't an\noverride representing a default due date present", function() {
      this.partialOverrides.pop();
      return strictEqual(this.partialOverridesList.containsSectionsWithoutOverrides(), true);
    });
    test("#containsSectionsWithoutOverrides returns false when overrides contain\nan override representing the default due date", function() {
      var dueDateList, overridesWithDefaultDueDate;

      overridesWithDefaultDueDate = new AssignmentOverrideCollection(this.partialOverrides.toJSON());
      overridesWithDefaultDueDate.add(AssignmentOverride.defaultDueDate());
      dueDateList = new DueDateList(overridesWithDefaultDueDate, this.sections, this.assignment);
      return strictEqual(dueDateList.containsSectionsWithoutOverrides(), false);
    });
    test("#containsSectionsWithoutOverrides returns false if all sections belong to\nan assignment override", function() {
      return strictEqual(this.completeOverridesList.containsSectionsWithoutOverrides(), false);
    });
    test("#containsBlankOverrides returns true if at least one override has a\nfalsy due_at", function() {
      return strictEqual(this.partialOverridesList.containsBlankOverrides(), true);
    });
    test("#containsBlankOverrides returns false if no overrides have a falsy due_at", function() {
      this.partialOverrides.forEach(function(override) {
        return override.set('due_at', Date.now());
      });
      return strictEqual(this.partialOverridesList.containsBlankOverrides(), false);
    });
    test("#blankOverrides returns blank overrides in the overrides", function() {
      stub(this.partialOverrides, 'blank').returns([1, 2, 3]);
      return deepEqual(this.partialOverridesList.blankOverrides(), [1, 2, 3]);
    });
    test("updates name to 'everyone' or 'everyone else' when the number of overrides\nchanges", function() {
      var defaultSection, dueDateList, override, overrides;

      overrides = new AssignmentOverrideCollection;
      dueDateList = new DueDateList(overrides, this.sections, this.assignment);
      override = new AssignmentOverride({
        id: '1'
      });
      defaultSection = dueDateList.findDefaultDueDateSection();
      dueDateList.addOverride(override);
      strictEqual(defaultSection.get('name'), 'Everyone Else');
      dueDateList.removeOverride(override);
      return strictEqual(defaultSection.get('name'), 'Everyone');
    });
    test("constructor adds an override representing the default due date using the\nassignment's due date, lock_at, and unlock_at, if an assignment is given\nand overrides don't already cover all sections", function() {
      var override;

      strictEqual(this.partialOverridesList.overrides.length, 3);
      override = this.partialOverridesList.overrides.pop();
      strictEqual(override.get('due_at'), this.date);
      strictEqual(override.get('unlock_at'), this.date);
      return strictEqual(override.get('lock_at'), this.date);
    });
    test("constructor adds a section to the list of sections representing the\nassignment's default due date if an assignment is given", function() {
      strictEqual(this.partialOverridesList.sections.length, 4);
      return strictEqual(this.partialOverridesList.sections.shift().id, Section.defaultDueDateSectionID);
    });
    test("constructor adds a section to the list of sections as an option even if all\nsections are already covered by overrids", function() {
      strictEqual(this.completeOverridesList.sections.length, 4);
      return strictEqual(this.completeOverridesList.sections.shift().id, Section.defaultDueDateSectionID);
    });
    test("constructor adds a default due date section if the section list passed\nis empty", function() {
      var dueDateList;

      dueDateList = new DueDateList(this.partialOverrides, new SectionList([]), this.assignment);
      return strictEqual(dueDateList.sections.length, 1);
    });
    test("#toJSON includes sections", function() {
      return deepEqual(this.partialOverridesList.toJSON().sections, this.sections.toJSON());
    });
    return test("#toJSON includes overrides", function() {
      return deepEqual(this.partialOverridesList.toJSON().overrides, this.partialOverrides.toJSON());
    });
  });

}).call(this);
