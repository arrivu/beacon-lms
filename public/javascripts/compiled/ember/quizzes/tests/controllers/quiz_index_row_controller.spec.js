(function() {
  define(['../start_app', 'ember', '../../controllers/quiz_index_row_controller', 'ember-qunit', '../environment_setup'], function(startApp, Ember, QuizIndexRowController, emq) {
    var App, run;

    run = Ember.run;
    App = startApp();
    emq.setResolver(Ember.DefaultResolver.create({
      namespace: App
    }));
    emq.moduleFor('controller:quiz_index_row', 'QuizIndexRowController', {
      needs: ['controller:quizzes'],
      setup: function() {
        App = startApp();
        emq.setResolver(Ember.DefaultResolver.create({
          namespace: App
        }));
        this.model = Ember.Object.create({
          pointsPossible: 1,
          title: 'Assignment test',
          htmlURL: 'foo/bar'
        });
        this.qc = this.subject();
        return this.qc.set('model', this.model);
      },
      teardown: function() {
        return run(App, 'destroy');
      }
    });
    emq.test('sanity', function() {
      return ok(this.qc);
    });
    emq.test('display singular points possible', function() {
      return equal(this.qc.get('pointsPossible'), '1 pt');
    });
    emq.test('display mulitple points possible', function() {
      var _this = this;

      run(function() {
        return _this.model.set('pointsPossible', 2);
      });
      return equal(this.qc.get('pointsPossible'), '2 pts');
    });
    emq.test('doesnt display when zero points possible', function() {
      var _this = this;

      run(function() {
        return _this.model.set('pointsPossible', 0);
      });
      return equal(this.qc.get('pointsPossible'), '');
    });
    emq.test('doesnt display when undefined points possible', function() {
      var _this = this;

      run(function() {
        return _this.model.set('pointsPossible', void 0);
      });
      return equal(this.qc.get('pointsPossible'), '');
    });
    return emq.test('correctly creates edit url for quiz', function() {
      return equal(this.qc.get('editUrl'), 'foo/bar/edit');
    });
  });

}).call(this);
