(function() {
  define(['../start_app', 'ember', '../../controllers/quiz_controller', 'ember-qunit', '../environment_setup'], function(startApp, Ember, QuizController, emq) {
    var App, run, setDates, testDateEquality, tomorrow, twoDaysOut, yesterday;

    run = Ember.run;
    App = startApp();
    emq.setResolver(Ember.DefaultResolver.create({
      namespace: App
    }));
    yesterday = new Date(new Date().getTime() - 86400000);
    tomorrow = new Date(new Date().getTime() + 86400000);
    twoDaysOut = new Date(new Date().getTime() + (86400000 * 2));
    setDates = function(unlock, lock) {
      this.qc.get('model').set('unlockAt', unlock);
      return this.qc.get('model').set('lockAt', lock);
    };
    testDateEquality = function(one, two, withinMS) {
      var withinRange;

      if (withinMS == null) {
        withinMS = 100;
      }
      withinRange = Math.abs(one - two) < withinMS;
      if (one === null || two === null) {
        return equal(one, two, 'both dates are null');
      } else {
        return ok(withinRange, "" + (one.toISOString()) + " && " + (two.toISOString()) + " are close enough to be considered the same (within " + withinMS + " ms apart)");
      }
    };
    emq.moduleFor('controller:quiz', 'QuizController', {
      setup: function() {
        App = startApp();
        emq.setResolver(Ember.DefaultResolver.create({
          namespace: App
        }));
        this.model = Ember.Object.create({
          unlockAt: yesterday,
          lockAt: tomorrow,
          save: function() {
            return {
              then: function(func) {
                return func.call(this.model);
              }
            };
          }
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
    emq.test('when unlocked quiz, toggleLock calls lock', function() {
      var old, wasCalled,
        _this = this;

      this.qc.set('isLocked', false);
      wasCalled = false;
      old = this.qc._actions.lock;
      this.qc._actions.lock = function() {
        return wasCalled = true;
      };
      return Ember.run(function() {
        _this.qc.send('toggleLock');
        equal(wasCalled, true);
        return _this.qc._actions.lock = old;
      });
    });
    emq.test('lock action: sets lockAt to now', function() {
      setDates.call(this, yesterday, tomorrow);
      equal(this.qc.get('isLocked'), false);
      this.qc.send('lock');
      return testDateEquality(this.qc.get('lockAt'), new Date());
    });
    emq.test('lock action: sets dueAt to now if it doesnt exist', function() {
      setDates.call(this, yesterday, tomorrow);
      equal(this.qc.get('isLocked'), false);
      this.qc.send('lock');
      return testDateEquality(this.qc.get('dueAt'), new Date());
    });
    emq.test('lock action: doesnt sets dueAt if it exist', function() {
      setDates.call(this, yesterday, tomorrow);
      equal(this.qc.get('isLocked'), false);
      this.qc.set('dueAt', yesterday);
      this.qc.send('lock');
      return testDateEquality(this.qc.get('dueAt'), yesterday);
    });
    emq.test('lock action: sets dueAt to now if it exist, but is in the future', function() {
      setDates.call(this, yesterday, tomorrow);
      equal(this.qc.get('isLocked'), false);
      this.qc.set('dueAt', tomorrow);
      this.qc.send('lock');
      return testDateEquality(this.qc.get('dueAt'), new Date());
    });
    emq.test('when locked quiz, toggleLock calls unlock', function() {
      var old, wasCalled;

      this.qc.set('isLocked', true);
      wasCalled = false;
      old = this.qc._actions.unlock;
      this.qc._actions.unlock = function() {
        return wasCalled = true;
      };
      this.qc.send('toggleLock');
      equal(wasCalled, true);
      return this.qc._actions.unlock = old;
    });
    emq.test('unlock action: sets unlock to now when set to something in the future', function() {
      setDates.call(this, tomorrow, twoDaysOut);
      equal(this.qc.get('isLocked'), true);
      this.qc.send('unlock');
      return testDateEquality(this.qc.get('unlockAt'), new Date());
    });
    emq.test('unlock action: doesnt sets unlock when it doesnt exist', function() {
      setDates.call(this, null, yesterday);
      equal(this.qc.get('isLocked'), true);
      this.qc.send('unlock');
      return testDateEquality(this.qc.get('unlockAt'), null);
    });
    emq.test('unlock action: doesnt sets unlock when it is has already passed', function() {
      setDates.call(this, yesterday, yesterday);
      equal(this.qc.get('isLocked'), true);
      this.qc.send('unlock');
      return testDateEquality(this.qc.get('unlockAt'), yesterday);
    });
    emq.test('unlock action: removes lockAt when it is a past date', function() {
      setDates.call(this, yesterday, yesterday);
      equal(this.qc.get('isLocked'), true);
      this.qc.send('unlock');
      return testDateEquality(this.qc.get('lockAt'), null);
    });
    emq.test('unlock action: leaves lockAt unchanged when it was already null', function() {
      setDates.call(this, tomorrow, null);
      equal(this.qc.get('isLocked'), true);
      this.qc.send('unlock');
      return testDateEquality(this.qc.get('lockAt'), null);
    });
    return emq.test('unlock action: leaves lockAt unchanged when it is a future date', function() {
      setDates.call(this, tomorrow, twoDaysOut);
      equal(this.qc.get('isLocked'), true);
      this.qc.send('unlock');
      return testDateEquality(this.qc.get('lockAt'), twoDaysOut);
    });
  });

}).call(this);
