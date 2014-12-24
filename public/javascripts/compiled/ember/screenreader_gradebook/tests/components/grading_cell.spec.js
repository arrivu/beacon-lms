(function() {
  define(['ember', '../start_app', '../shared_ajax_fixtures'], function(Ember, startApp, fixtures) {
    var run, setType;

    run = Ember.run;
    fixtures.create();
    setType = null;
    module('grading_cell', {
      setup: function() {
        var App,
          _this = this;

        App = startApp();
        this.component = App.GradingCellComponent.create();
        setType = function(type) {
          return run(function() {
            return _this.assignment.set('grading_type', type);
          });
        };
        this.component.reopen({
          changeGradeURL: function() {
            return "/api/v1/assignment/:assignment/:submission";
          }
        });
        return run(function() {
          _this.submission = Ember.Object.create({
            grade: 'A',
            assignment_id: 1,
            user_id: 1
          });
          _this.assignment = Ember.Object.create({
            grading_type: 'points'
          });
          _this.component.setProperties({
            'submission': _this.submission,
            assignment: _this.assignment
          });
          return _this.component.append();
        });
      },
      teardown: function() {
        var _this = this;

        return run(function() {
          _this.component.destroy();
          return App.destroy();
        });
      }
    });
    test("setting value on init", function() {
      var component;

      component = App.GradingCellComponent.create();
      equal(component.get('value'), '-');
      return equal(this.component.get('value'), 'A');
    });
    test("saveURL", function() {
      return equal(this.component.get('saveURL'), "/api/v1/assignment/1/1");
    });
    test("isPoints", function() {
      setType('points');
      return ok(this.component.get('isPoints'));
    });
    test("isPercent", function() {
      setType('percent');
      return ok(this.component.get('isPercent'));
    });
    test("isLetterGrade", function() {
      setType('letter_grade');
      return ok(this.component.get('isLetterGrade'));
    });
    test("nilPointsPossible", function() {
      var _this = this;

      ok(this.component.get('nilPointsPossible'));
      run(function() {
        return _this.assignment.set('points_possible', 10);
      });
      return equal(this.component.get('nilPointsPossible'), false);
    });
    test("isGpaScale", function() {
      setType('gpa_scale');
      return ok(this.component.get('isGpaScale'));
    });
    return asyncTest("focusOut", function() {
      var requestStub, stub, submissions,
        _this = this;

      stub = sinon.stub(this.component, 'boundUpdateSuccess');
      submissions = [];
      requestStub = null;
      run(function() {
        return requestStub = Ember.RSVP.resolve({
          all_submissions: submissions
        });
      });
      sinon.stub(this.component, 'ajax').returns(requestStub);
      return run(function() {
        _this.component.set('value', 'ohai');
        _this.component.send('focusOut');
        return requestStub.then(function() {
          start();
          return ok(stub.called);
        });
      });
    });
  });

}).call(this);
