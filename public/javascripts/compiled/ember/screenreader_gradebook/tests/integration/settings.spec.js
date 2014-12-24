(function() {
  define(['../start_app', 'underscore', 'ember', '../shared_ajax_fixtures', 'jquery', 'vendor/jquery.ba-tinypubsub'], function(startApp, _, Ember, fixtures, $) {
    var App;

    App = null;
    fixtures.create();
    module('global settings', {
      setup: function() {
        var _this = this;

        App = startApp();
        return visit('/').then(function() {
          _this.controller = App.__container__.lookup('controller:screenreader_gradebook');
          return _this.controller.set('hideStudentNames', false);
        });
      },
      teardown: function() {
        return Ember.run(App, 'destroy');
      }
    });
    test('student names are hidden', function() {
      var selection,
        _this = this;

      selection = '#student_select option[value=1]';
      equal($(selection).text(), "Bob");
      return click("#hide_names_checkbox").then(function() {
        $(selection).text().search("Student") !== -1;
        return click("#hide_names_checkbox").then(function() {
          return equal($(selection).text(), "Bob");
        });
      });
    });
    test('secondary id says hidden', function() {
      var _this = this;

      Ember.run(function() {
        var student;

        student = _this.controller.get('students.firstObject');
        Ember.setProperties(student, {
          isLoaded: true,
          isLoading: false
        });
        return _this.controller.set('selectedStudent', student);
      });
      equal(Ember.$.trim(find(".secondary_id").text()), '');
      click("#hide_names_checkbox");
      return andThen(function() {
        return equal($.trim(find(".secondary_id:first").text()), 'hidden');
      });
    });
    return test('view concluded enrollments', function() {
      var enrollments,
        _this = this;

      enrollments = this.controller.get('enrollments');
      ok(enrollments.content.length > 1);
      _.each(enrollments.content, function(enrollment) {
        return ok(enrollment.workflow_state === void 0);
      });
      return click("#concluded_enrollments").then(function() {
        var completed_at, en;

        enrollments = _this.controller.get('enrollments');
        equal(enrollments.content.length, 1);
        en = enrollments.objectAt(0);
        ok(en.workflow_state === "completed");
        completed_at = new Date(en.completed_at);
        ok(completed_at.getTime() < new Date().getTime());
        return click("#concluded_enrollments").then(function() {
          enrollments = _this.controller.get('enrollments');
          return ok(enrollments.content.length > 1);
        });
      });
    });
  });

}).call(this);
