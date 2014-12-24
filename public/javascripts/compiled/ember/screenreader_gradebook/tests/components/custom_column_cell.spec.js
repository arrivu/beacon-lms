(function() {
  define(['ember', '../start_app', '../shared_ajax_fixtures'], function(Ember, startApp, fixtures) {
    var run, setType;

    run = Ember.run;
    fixtures.create();
    setType = null;
    module('custom_column_cell', {
      setup: function() {
        var App,
          _this = this;

        App = startApp();
        this.component = App.CustomColumnCellComponent.create();
        this.component.reopen({
          customColURL: function() {
            return "/api/v1/custom_gradebook_columns/:id/:user_id";
          }
        });
        return run(function() {
          _this.column = Ember.Object.create({
            id: '22',
            title: 'Notes'
          });
          _this.student = Ember.Object.create({
            id: '45'
          });
          _this.dataForStudent = [
            Ember.Object.create({
              column_id: '22',
              content: 'lots of content here'
            })
          ];
          _this.component.setProperties({
            student: _this.student,
            column: _this.column,
            dataForStudent: _this.dataForStudent
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
    test("id", function() {
      return equal(this.component.get('id'), 'custom_col_22');
    });
    test("value", function() {
      return equal(this.component.get('value'), 'lots of content here');
    });
    test("saveUrl", function() {
      return equal(this.component.get('saveURL'), '/api/v1/custom_gradebook_columns/22/45');
    });
    return asyncTest("focusOut", function() {
      var requestStub, stub,
        _this = this;

      stub = sinon.stub(this.component, 'boundSaveSuccess');
      requestStub = null;
      run(function() {
        return requestStub = Ember.RSVP.resolve({
          id: '22',
          title: 'Notes',
          content: 'less content now'
        });
      });
      sinon.stub(this.component, 'ajax').returns(requestStub);
      return run(function() {
        _this.component.set('value', 'such success');
        _this.component.send('focusOut');
        return requestStub.then(function() {
          start();
          return ok(stub.called);
        });
      });
    });
  });

}).call(this);
