(function() {
  define(['../start_app', 'ember', '../shared_ajax_fixtures'], function(startApp, Ember, fixtures) {
    var App, buttonDisabled, checkSelectedText, checkSelection, checkText, studentSectionAssertions;

    App = null;
    fixtures.create();
    buttonDisabled = function(trigger, expectedBoolean) {
      return equal(find(trigger).prop('disabled'), expectedBoolean);
    };
    checkSelection = function(id, selection) {
      return equal(id, find(selection).val());
    };
    checkSelectedText = function(text, selection) {
      return equal(text, find(selection).find('option:selected').text());
    };
    checkText = function(selector, expectedText) {
      return equal(Ember.$.trim(find(".assignmentsPanel " + selector).text()), expectedText);
    };
    studentSectionAssertions = function(selected, currentIndex, expectedIndex) {
      equal(currentIndex, expectedIndex);
      checkSelection(selected.id, '#student_select');
      return checkSelectedText(selected.name, '#student_select');
    };
    module('screenreader_gradebook student/assignment navigation: on page load', {
      setup: function() {
        var _this = this;

        App = startApp();
        return visit('/').then(function() {
          return _this.controller = App.__container__.lookup('controller:screenreader_gradebook');
        });
      },
      teardown: function() {
        return Ember.run(App, 'destroy');
      }
    });
    test('Previous Student button is disabled', function() {
      return buttonDisabled('.student_navigation .previous_object:first', true);
    });
    test('Previous Assignment button is disabled', function() {
      return buttonDisabled('.assignment_navigation .previous_object', true);
    });
    test('Next Student button is active', function() {
      return buttonDisabled('.student_navigation .next_object:first', false);
    });
    test('Next Assignment button is active', function() {
      return buttonDisabled('.assignment_navigation .next_object', false);
    });
    test('no student or assignment is loaded', function() {
      checkText('.student_selection', 'Select a student to view additional information here.');
      return checkText('.assignment_selection', 'Select an assignment to view additional information here.');
    });
    module('screenreader_gradebook student/assignment navigation: with first item selected', {
      setup: function() {
        var _this = this;

        App = startApp();
        return visit('/').then(function() {
          _this.controller = App.__container__.lookup('controller:screenreader_gradebook');
          return Ember.run(function() {
            _this.controller.set('selectedStudent', _this.controller.get('students.firstObject'));
            return _this.controller.set('selectedAssignment', _this.controller.get('assignments.firstObject'));
          });
        });
      },
      teardown: function() {
        return Ember.run(App, 'destroy');
      }
    });
    test('Previous buttons are disabled', function() {
      buttonDisabled('.student_navigation .previous_object:first', true);
      buttonDisabled('.assignment_navigation .previous_object', true);
      checkText('.student_selection', 'Bob');
      return checkText('.assignment_selection', 'Z Eats Soup');
    });
    test('clicking Next Student button displays next student', function() {
      var before,
        _this = this;

      before = this.controller.get('selectedStudent');
      checkSelection(before.id, '#student_select');
      return click('.student_navigation .next_object:first').then(function() {
        var after, next;

        after = _this.controller.get('selectedStudent');
        checkSelection(after.id, '#student_select');
        notEqual(before.id, after.id);
        next = _this.controller.get('students').indexOf(before) + 1;
        return equal(next, _this.controller.get('students').indexOf(after));
      });
    });
    test('clicking Next Assignment button displays next assignment', function() {
      var before,
        _this = this;

      before = this.controller.get('selectedAssignment');
      checkSelection(before.id, '#assignment_select');
      return click('.assignment_navigation .next_object').then(function() {
        var after, next;

        after = _this.controller.get('selectedAssignment');
        checkSelection(after.id, '#assignment_select');
        notEqual(before, after);
        next = _this.controller.get('assignments').indexOf(before) + 1;
        return equal(next, _this.controller.get('assignments').indexOf(after));
      });
    });
    test('clicking next then previous will refocus on next student', function() {
      var _this = this;

      return click('.student_navigation .next_object:first').then(function() {
        return click('.student_navigation .previous_object:first').then(function() {
          return equal($(".student_navigation .next_object:first")[0], document.activeElement);
        });
      });
    });
    test('clicking next then previous will refocus on next assignment', function() {
      var _this = this;

      return click('.assignment_navigation .next_object').then(function() {
        return click('.assignment_navigation .previous_object').then(function() {
          return equal($(".assignment_navigation .next_object")[0], document.activeElement);
        });
      });
    });
    module('screenreader_gradebook student/assignment navigation: with second item selected', {
      setup: function() {
        var _this = this;

        App = startApp();
        return visit('/').then(function() {
          _this.controller = App.__container__.lookup('controller:screenreader_gradebook');
          return Ember.run(function() {
            _this.controller.set('selectedStudent', _this.controller.get('students').objectAt(1));
            return _this.controller.set('selectedAssignment', _this.controller.get('assignments').objectAt(1));
          });
        });
      },
      teardown: function() {
        return Ember.run(App, 'destroy');
      }
    });
    test('Previous/Next Student buttons are both active', function() {
      buttonDisabled('.student_navigation .previous_object:first', false);
      return buttonDisabled('.student_navigation .next_object:first', false);
    });
    test('Previous/Next Assignment buttons are both active', function() {
      buttonDisabled('.assignment_navigation .previous_object', false);
      return buttonDisabled('.assignment_navigation .next_object', false);
    });
    module('screenreader_gradebook student/assignment navigation: with last item selected', {
      setup: function() {
        var _this = this;

        App = startApp();
        return visit('/').then(function() {
          _this.controller = App.__container__.lookup('controller:screenreader_gradebook');
          return Ember.run(function() {
            _this.controller.set('selectedStudent', _this.controller.get('students.lastObject'));
            return _this.controller.set('selectedAssignment', _this.controller.get('assignments.lastObject'));
          });
        });
      },
      teardown: function() {
        return Ember.run(App, 'destroy');
      }
    });
    test('Previous Student button is active', function() {
      return buttonDisabled('.student_navigation .previous_object:first', false);
    });
    test('Previous Assignment button is active', function() {
      return buttonDisabled('.assignment_navigation .previous_object', false);
    });
    test('Next Student button is disabled', function() {
      return buttonDisabled('.student_navigation .next_object:first', true);
    });
    test('Next Assignment button is disabled', function() {
      return buttonDisabled('.assignment_navigation .next_object', true);
    });
    test('clicking Previous Student button displays previous student', function() {
      var before,
        _this = this;

      before = this.controller.get('selectedStudent');
      checkSelection(before.id, '#student_select');
      return click('.student_navigation .previous_object:first').then(function() {
        var after, previous;

        after = _this.controller.get('selectedStudent');
        checkSelection(after.id, '#student_select');
        notEqual(before.id, after.id);
        previous = _this.controller.get('students').indexOf(before) - 1;
        return equal(previous, _this.controller.get('students').indexOf(after));
      });
    });
    test('clicking Previous Assignment button displays previous assignment', function() {
      var before,
        _this = this;

      before = this.controller.get('selectedAssignment');
      checkSelection(before.id, '#assignment_select');
      return click('.assignment_navigation .previous_object').then(function() {
        var after, previous;

        after = _this.controller.get('selectedAssignment');
        checkSelection(after.id, '#assignment_select');
        notEqual(before.id, after.id);
        previous = _this.controller.get('assignments').indexOf(before) - 1;
        return equal(previous, _this.controller.get('assignments').indexOf(after));
      });
    });
    test('clicking previous then next will reset the focus for students', function() {
      var _this = this;

      return click('.student_navigation .previous_object:first').then(function() {
        return click('.student_navigation .next_object:first').then(function() {
          return equal($(".student_navigation .previous_object:first")[0], document.activeElement);
        });
      });
    });
    test('clicking previous then next will reset the focus for assignments', function() {
      var _this = this;

      return click('.assignment_navigation .previous_object').then(function() {
        return click('.assignment_navigation .next_object').then(function() {
          return equal($(".assignment_navigation .previous_object")[0], document.activeElement);
        });
      });
    });
    module('screenreader_gradebook assignment navigation: display update', {
      setup: function() {
        var _this = this;

        App = startApp();
        return visit('/').then(function() {
          _this.controller = App.__container__.lookup('controller:screenreader_gradebook');
          return Ember.run(function() {
            _this.controller.set('selectedStudent', _this.controller.get('students.firstObject'));
            return _this.controller.set('selectedAssignment', _this.controller.get('assignments.firstObject'));
          });
        });
      },
      teardown: function() {
        return Ember.run(App, 'destroy');
      }
    });
    test('screenreader_gradebook assignment selection: grade for field updates', function() {
      var assignment_name_selector, newSelectedAssigName, selectedAssigName,
        _this = this;

      assignment_name_selector = "label[for='student_and_assignment_grade']";
      selectedAssigName = this.controller.get('selectedAssignment.name');
      checkText(assignment_name_selector, "Grade for: " + selectedAssigName);
      Ember.run(function() {
        return _this.controller.set('selectedAssignment', _this.controller.get('assignments').objectAt(2));
      });
      newSelectedAssigName = this.controller.get('selectedAssignment.name');
      return checkText(assignment_name_selector, "Grade for: " + newSelectedAssigName);
    });
    module('screenreader_gradebook assignment navigation: assignment sorting', {
      setup: function() {
        var _this = this;

        App = startApp();
        return visit('/').then(function() {
          return _this.controller = App.__container__.lookup('controller:screenreader_gradebook');
        });
      },
      teardown: function() {
        var _this = this;

        Ember.run(function() {
          return _this.controller.set('assignmentSort', _this.controller.get('assignmentSortOptions').findBy('value', 'assignment_group'));
        });
        return Ember.run(App, 'destroy');
      }
    });
    test('alphabetical', function() {
      var before, first,
        _this = this;

      before = this.controller.get('assignments.firstObject');
      Ember.run(function() {
        return _this.controller.set('assignmentSort', _this.controller.get('assignmentSortOptions').findBy('value', 'alpha'));
      });
      buttonDisabled('.assignment_navigation .next_object', false);
      buttonDisabled('.assignment_navigation .previous_object', true);
      first = this.controller.get('assignments.firstObject');
      notEqual(before, first);
      return click('.assignment_navigation .next_object').then(function() {
        return checkSelection(first.id, '#assignment_select');
      });
    });
    test('due date', function() {
      var before, first,
        _this = this;

      before = this.controller.get('assignments.firstObject');
      Ember.run(function() {
        return _this.controller.set('assignmentSort', _this.controller.get('assignmentSortOptions').findBy('value', 'due_date'));
      });
      buttonDisabled('.assignment_navigation .next_object', false);
      buttonDisabled('.assignment_navigation .previous_object', true);
      first = this.controller.get('assignments.firstObject');
      notEqual(before, first);
      return click('.assignment_navigation .next_object').then(function() {
        return checkSelection(first.id, '#assignment_select');
      });
    });
    test('changing sorting option with selectedAssignment', function() {
      var _this = this;

      Ember.run(function() {
        return _this.controller.set('assignmentSort', _this.controller.get('assignmentSortOptions').findBy('value', 'alpha'));
      });
      return click('.assignment_navigation .next_object').then(function() {
        var first, second;

        first = _this.controller.get('selectedAssignment');
        checkSelection(first.id, '#assignment_select');
        equal(first.name, "Apples are good");
        second = _this.controller.get('assignments').objectAt(_this.controller.get('assignmentIndex') + 1);
        return click('.assignment_navigation .next_object').then(function() {
          checkSelection(second.id, '#assignment_select');
          notEqual(first.id, second.id);
          equal(second.name, "Big Bowl of Nachos");
          return click('.assignment_navigation .previous_object').then(function() {
            var next, oldIndex, selected, selectedIndex;

            selected = _this.controller.get('selectedAssignment');
            equal(selected.id, first.id);
            checkSelection(selected.id, '#assignment_select');
            oldIndex = _this.controller.get('assignmentIndex');
            Ember.run(function() {
              return _this.controller.set('assignmentSort', _this.controller.get('assignmentSortOptions').findBy('value', 'due_date'));
            });
            equal(selected.id, _this.controller.get('selectedAssignment.id'));
            notEqual(oldIndex, _this.controller.get('assignmentIndex'));
            selectedIndex = _this.controller.get('assignmentIndex');
            next = _this.controller.get('assignments').objectAt(selectedIndex + 1);
            return click('.assignment_navigation .next_object').then(function() {
              return checkSelection(next.id, '#assignment_select');
            });
          });
        });
      });
    });
    module('screenreader_gradebook student navigation: section selection', {
      setup: function() {
        var _this = this;

        App = startApp();
        return visit('/').then(function() {
          _this.controller = App.__container__.lookup('controller:screenreader_gradebook');
          return Ember.run(function() {
            return _this.controller.set('selectedSection', _this.controller.get('sections.lastObject'));
          });
        });
      },
      teardown: function() {
        return Ember.run(App, 'destroy');
      }
    });
    test('prev/next still work', function() {
      var _this = this;

      buttonDisabled('.student_navigation .previous_object:first', true);
      buttonDisabled('.student_navigation .next_object:first', false);
      return click('.student_navigation .next_object:first').then(function() {
        var first, index;

        first = _this.controller.get('selectedStudent');
        index = _this.controller.get('studentIndex');
        buttonDisabled('.student_navigation .previous_object:first', true);
        studentSectionAssertions(first, index, 0);
        click('.student_navigation .next_object:first').then(function() {
          var second;

          second = _this.controller.get('selectedStudent');
          index = _this.controller.get('studentIndex');
          buttonDisabled('.student_navigation .previous_object:first', false);
          studentSectionAssertions(second, index, 1);
          return notEqual(first, second);
        });
        return click('.student_navigation .previous_object:first').then(function() {
          buttonDisabled('.student_navigation .previous_object:first', true);
          return buttonDisabled('.student_navigation .next_object:first', false);
        });
      });
    });
    test('resets selectedStudent when student is not in both sections', function() {
      var _this = this;

      return click('.student_navigation .next_object:first').then(function() {
        var firstStudent, resetStudent;

        firstStudent = _this.controller.get('selectedStudent');
        Ember.run(function() {
          return _this.controller.set('selectedSection', _this.controller.get('sections.firstObject'));
        });
        resetStudent = _this.controller.get('selectedStudent');
        notEqual(firstStudent, resetStudent);
        equal(resetStudent, null);
        return click('.student_navigation .next_object:first').then(function() {
          var current;

          current = _this.controller.get('selectedStudent');
          notEqual(current, firstStudent);
          return notEqual(current, resetStudent);
        });
      });
    });
    test('maintains selectedStudent when student is in both sections and updates navigation points', function() {
      var _this = this;

      Ember.run(function() {
        return _this.controller.set('selectedStudent', _this.controller.get('students').objectAt(4));
      });
      return visit('/').then(function() {
        var newSelected, position, selected;

        buttonDisabled('.student_navigation .previous_object:first', false);
        buttonDisabled('.student_navigation .next_object:first', false);
        selected = _this.controller.get('selectedStudent');
        checkSelectedText(selected.name, '#student_select');
        checkSelectedText(_this.controller.get('selectedSection.name'), '#section_select');
        position = _this.controller.get('studentsInSelectedSection').indexOf(selected);
        equal(position, 1);
        equal(_this.controller.get("studentIndex"), position);
        Ember.run(function() {
          return _this.controller.set('selectedSection', _this.controller.get('sections.firstObject'));
        });
        buttonDisabled('.student_navigation .previous_object:first', false);
        buttonDisabled('.student_navigation .next_object:first', false);
        newSelected = _this.controller.get('selectedStudent');
        checkSelectedText(newSelected.name, '#student_select');
        checkSelectedText(_this.controller.get('selectedSection.name'), '#section_select');
        equal(selected, newSelected);
        position = _this.controller.get('studentsInSelectedSection').indexOf(selected);
        equal(position, 3);
        return equal(_this.controller.get("studentIndex"), position);
      });
    });
    module('screenreader_gradebook student/assignment navigation: announcing selection with aria-live', {
      setup: function() {
        var _this = this;

        App = startApp();
        return visit('/').then(function() {
          _this.controller = App.__container__.lookup('controller:screenreader_gradebook');
          return Ember.run(function() {
            _this.controller.set('selectedStudent', _this.controller.get('students.firstObject'));
            return _this.controller.set('selectedAssignment', _this.controller.get('assignments.firstObject'));
          });
        });
      },
      teardown: function() {
        return Ember.run(App, 'destroy');
      }
    });
    return test('aria-announcer', function() {
      var _this = this;

      equal(Ember.$.trim(find(".aria-announcer").text()), "");
      click('.student_navigation .next_object:first').then(function() {
        var expected;

        expected = _this.controller.get('selectedStudent.name');
        return equal(Ember.$.trim(find(".aria-announcer").text()), expected);
      });
      click('.assignment_navigation .next_object').then(function() {
        var expected;

        expected = _this.controller.get('selectedAssignment.name');
        return equal(Ember.$.trim(find(".aria-announcer").text()), expected);
      });
      return click('#hide_names_checkbox').then(function() {
        return Ember.run(function() {
          return equal(Ember.$.trim(find(".aria-announcer").text()), "");
        });
      });
    });
  });

}).call(this);
