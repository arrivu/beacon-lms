(function() {
  define(['../start_app', 'ember', '../shared_ajax_fixtures', 'jquery', 'vendor/jquery.ba-tinypubsub'], function(startApp, Ember, fixtures, $) {
    var App, mockServerResponse, openAndCloseDialog, openDialog, openWithTitleAssert, sendSuccess;

    App = null;
    fixtures.create();
    openDialog = function(trigger) {
      return click(trigger).then(function() {
        var $dialog;

        $dialog = find('.ui-dialog:visible', 'body');
        return equal($dialog.length, 1, 'the dialog opens');
      });
    };
    openWithTitleAssert = function(trigger, expectedTitle) {
      return openDialog(trigger).then(function() {
        var $dialog;

        $dialog = find('.ui-dialog:visible', 'body');
        return ok(find('.ui-dialog-title:contains("#{expectedTitle}")', $dialog), 'dialog has the expected title');
      });
    };
    openAndCloseDialog = function(trigger, expectedTitle) {
      return openWithTitleAssert(trigger, expectedTitle).then(function() {
        return click(find('.ui-dialog-titlebar-close:visible', 'body')).then(function() {
          var $dialog;

          $dialog = find('.ui-dialog:visible', 'body');
          return equal($dialog.length, 0, 'the dialog closes');
        });
      });
    };
    sendSuccess = function(server, url, response) {
      if (response == null) {
        response = '';
      }
      return server.respond('POST', url, [
        200, {
          'Content-Type': 'application/json'
        }, JSON.stringify(Ember.copy(response, true))
      ]);
    };
    mockServerResponse = function(server, url, response) {
      if (response == null) {
        response = '';
      }
      return server.respond(url, JSON.stringify(response));
    };
    module('screenreader_gradebook: dialogs open and close', {
      setup: function() {
        return App = startApp();
      },
      teardown: function() {
        return Ember.run(App, 'destroy');
      }
    });
    test('upload scores dialog displays properly', function() {
      visit('/');
      return openAndCloseDialog('#upload', 'Choose a CSV file to Upload');
    });
    test('set group weights dialog displays propery', function() {
      visit('/');
      return openAndCloseDialog('#ag_weights', 'Manage assignment group weighting');
    });
    module('screenreader_gradebook: assignment dialogs open and close', {
      setup: function() {
        var _this = this;

        App = startApp();
        return visit('/').then(function() {
          _this.controller = App.__container__.lookup('controller:screenreader_gradebook');
          _this.selected = _this.controller.get('assignments').objectAt(0);
          return Ember.run(function() {
            return _this.controller.set('selectedAssignment', _this.selected);
          });
        });
      },
      teardown: function() {
        return Ember.run(App, 'destroy');
      }
    });
    test('default grade dialog displays properly', function() {
      return openAndCloseDialog('#set_default_grade', "Default grade for " + this.selected.name);
    });
    test('curve grades dialog displays properly', function() {
      return openAndCloseDialog('#curve_grades', "Curve Grades for " + this.selected.name);
    });
    module('screenreader_gradebook: submission dialogs open and close', {
      setup: function() {
        var _this = this;

        App = startApp();
        return visit('/').then(function() {
          _this.controller = App.__container__.lookup('controller:screenreader_gradebook');
          _this.assignment = _this.controller.get('assignments').objectAt(0);
          _this.student = _this.controller.get('students').objectAt(0);
          return Ember.run(function() {
            return _this.controller.setProperties({
              'selectedAssignment': _this.assignment,
              'selectedStudent': _this.student
            });
          });
        });
      },
      teardown: function() {
        return Ember.run(App, 'destroy');
      }
    });
    test('submission details dialog', function() {
      return openAndCloseDialog('#submission_details', "" + this.student.name);
    });
    module('screenreader_gradebook: assignment and assignment_group dialogs saving', {
      setup: function() {
        var _this = this;

        App = startApp();
        return visit('/').then(function() {
          _this.controller = App.__container__.lookup('controller:screenreader_gradebook');
          _this.selAssignment = _this.controller.get('assignments').objectAt(0);
          _this.selStudent = _this.controller.get('students').objectAt(0);
          _this.server = sinon.fakeServer.create();
          _this.alert = sinon.stub(window, 'alert');
          _this.modified_assignment_group = {
            id: '1',
            name: 'AG1',
            position: 1,
            group_weight: 100
          };
          return Ember.run(function() {
            _this.controller.set('submissions', Em.copy(fixtures.submissions, true));
            _this.controller.set('selectedAssignment', _this.selAssignment);
            return _this.controller.set('selectedStudent', _this.selStudent);
          });
        });
      },
      teardown: function() {
        if (Ember.$('.ui-dialog:visible').length) {
          Ember.$('.ui-dialog:visible').remove();
        }
        this.alert.restore();
        this.server.restore();
        return Ember.run(App, 'destroy');
      }
    });
    test('default grade dialog updates the current students grade', function() {
      var $dialog,
        _this = this;

      $dialog = null;
      visit('/').then(function() {
        return openDialog('#set_default_grade').then(function() {
          $dialog = find('.ui-dialog:visible', 'body');
          return fillIn(find('[name=default_grade]', $dialog), 100).then(function() {
            return click(find('[name=overwrite_existing_grades]', $dialog)).then(function() {
              click('.button_type_submit', $dialog);
              return sendSuccess(_this.server, "/courses/" + ENV.GRADEBOOK_OPTIONS.context_id + "/gradebook/update_submission", fixtures.set_default_grade_response);
            });
          });
        });
      });
      return andThen(function() {
        return equal(parseInt(find('#student_and_assignment_grade').val(), 10), 100);
      });
    });
    test('group weights dialog update groups weights and final grade', function() {
      var $dialog,
        _this = this;

      $dialog = null;
      return visit('/').then(function() {
        var initial_final_grade;

        initial_final_grade = find(".total-grade").text();
        equal(parseFloat(initial_final_grade), "2.1");
        return openDialog("#ag_weights").then(function() {
          $dialog = find('.ui-dialog:visible', 'body');
          click(find('#group_weighting_scheme', $dialog));
          mockServerResponse(_this.server, "/courses/1", {
            course: {
              group_weighting_scheme: 'percent'
            }
          });
          return andThen(function() {
            return fillIn(find('#assignment_group_1_weight', $dialog), 100).then(function() {
              click(find('.ui-button', $dialog));
              mockServerResponse(_this.server, "/api/v1/courses/1/assignment_groups/1", _this.modified_assignment_group);
              return andThen(function() {
                var assignment_group_text, new_final_grade;

                new_final_grade = find(".total-grade").text();
                assignment_group_text = find(".assignment-group-grade").first().text();
                equal(parseFloat(new_final_grade), "3");
                return notEqual(assignment_group_text.indexOf("3 / 100"), -1);
              });
            });
          });
        });
      });
    });
    module('screenreader_gradebook: curve grades display', {
      setup: function() {
        var _this = this;

        App = startApp();
        return visit('/').then(function() {
          _this.controller = App.__container__.lookup('controller:screenreader_gradebook');
          _this.selected = _this.controller.get('assignments').objectAt(0);
          return Ember.run(function() {
            return _this.controller.set('selectedAssignment', _this.selected);
          });
        });
      },
      teardown: function() {
        return Ember.run(App, 'destroy');
      }
    });
    test('curve grades button does display with points poisslbe', function() {
      var curve_button_text;

      curve_button_text = find('#curve_grades').text();
      return notEqual(curve_button_text.indexOf("Curve Grades"), -1);
    });
    test('curve grades button does not display with 0 points possible', function() {
      var _this = this;

      Ember.run(function() {
        return _this.controller.set('selectedAssignment.points_possible', 0);
      });
      return equal(find('#curve_grades').text(), "");
    });
    return test('curve grades button does not display with null points poisslbe', function() {
      var _this = this;

      Ember.run(function() {
        return _this.controller.set('selectedAssignment.points_possible', null);
      });
      return equal(find('#curve_grades').text(), "");
    });
  });

}).call(this);
