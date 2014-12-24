(function() {
  define(['ember', 'ember-qunit', 'ic-ajax', '../../../../start_app', '../../../../environment_setup', '../../../../../controllers/quiz/statistics/summary/report_generator_controller', '../../../../../models/quiz_report'], function(Ember, emq, ajax, startApp, env, Controller, Model) {
    var App, FileFixture, run;

    run = Ember.run;
    App = startApp();
    emq.setResolver(Ember.DefaultResolver.create({
      namespace: App
    }));
    FileFixture = {
      "id": 1,
      "content-type": "text/csv",
      "display_name": "CNVS-4338 Quiz Student Analysis Report.csv",
      "filename": "quiz_student_analysis_report.csv",
      "url": "/files/207/download?download_frd=1&verifier=ZoWW2Rut19EYVUnpaZngFadznCeu7uAWx8USvl8X",
      "size": 1807,
      "created_at": "2014-05-08T05:56:42Z",
      "updated_at": "2014-05-08T05:56:42Z",
      "unlock_at": null,
      "locked": false,
      "hidden": false,
      "lock_at": null,
      "hidden_for_user": false,
      "thumbnail_url": null,
      "locked_for_user": false
    };
    emq.moduleFor('controller:quiz_statistics_summary_report_generator', 'QuizStatisticsSummaryReportGeneratorController', {
      setup: function() {
        var container, store,
          _this = this;

        App = startApp();
        emq.setResolver(Ember.DefaultResolver.create({
          namespace: App
        }));
        container = App.__container__;
        store = container.lookup('store:main');
        return run(function() {
          _this.model = store.createRecord('quiz_report', {
            id: 1,
            url: '/quiz_reports/1'
          });
          _this.subject = _this.subject();
          return _this.subject.set('model', _this.model);
        });
      },
      teardown: function() {
        if (ajax.raw.restore) {
          ajax.raw.restore();
        }
        return run(App, 'destroy');
      }
    });
    emq.test('sanity', function() {
      ok(this.subject);
      return equal(this.subject.get('model'), this.model);
    });
    emq.test('locking: it rejects calls to #generate when locked', function() {
      var ajaxSpy, lockSpy;

      ajaxSpy = sinon.stub(ajax, 'raw').returns(Ember.RSVP.defer().promise);
      lockSpy = sinon.spy(this.subject, 'lock');
      this.subject.send('generate');
      ok(ajaxSpy.calledOnce);
      ok(lockSpy.calledOnce);
      ok(this.subject.get('isLocked'));
      this.subject.send('generate');
      return ok(ajaxSpy.calledOnce);
    });
    emq.test('locking: it unlocks once the generation is done, regardless of status', function() {
      var ajaxSpy, lockSpy, service;

      service = Ember.RSVP.defer();
      ajaxSpy = sinon.stub(ajax, 'raw').returns(service.promise);
      lockSpy = sinon.spy(this.subject, 'lock');
      this.subject.send('generate');
      ok(this.subject.get('isLocked'));
      run(function() {
        return service.reject();
      });
      return ok(!this.subject.get('isLocked'));
    });
    emq.test('#pullGeneratedReport: it reloads and auto-downloads', function() {
      var autoDownloadSpy,
        _this = this;

      expect(3);
      ajax.defineFixture('/quiz_reports/1?include[]=file', {
        textStatus: 'success',
        response: {
          quiz_reports: [
            {
              id: 1,
              file: FileFixture
            }
          ]
        }
      });
      autoDownloadSpy = sinon.stub(this.subject, 'triggerDownload');
      return Ember.run(function() {
        equal(_this.model.get('file.id'), void 0);
        _this.subject.autoDownload = true;
        return _this.subject.pullGeneratedReport().then(function() {
          equal(_this.model.get('file.id'), 1);
          return ok(autoDownloadSpy.called, 'it triggers the download');
        });
      });
    });
    return emq.test("#pullGeneratedReport: it reloads but doesn't auto-download", function() {
      var autoDownloadSpy,
        _this = this;

      expect(3);
      ajax.defineFixture('/quiz_reports/1?include[]=file', {
        textStatus: 'success',
        response: {
          quiz_reports: [
            {
              id: 1,
              file: FileFixture
            }
          ]
        }
      });
      autoDownloadSpy = sinon.stub(this.subject, 'triggerDownload');
      return Ember.run(function() {
        equal(_this.model.get('file.id'), void 0);
        return _this.subject.pullGeneratedReport().then(function() {
          equal(_this.model.get('file.id'), 1);
          return ok(!autoDownloadSpy.called, "it doesn't trigger the download");
        });
      });
    });
  });

}).call(this);
