(function() {
  define(['jquery', 'underscore', 'compiled/views/quiz_reports/QuizReportGenerator', 'compiled/models/QuizReport', 'compiled/models/Progress'], function($, _, View, QuizReport, Progress) {
    module('QuizReportGenerator', {
      setup: function() {},
      teardown: function() {
        var _ref, _ref1;

        if ((_ref = this.subject) != null) {
          _ref.remove();
        }
        return (_ref1 = this.server) != null ? _ref1.restore() : void 0;
      },
      ajaxFixture: function(method, url, status, body) {
        var spy;

        spy = sinon.spy();
        this.server.respondWith(method, url, function(request) {
          spy();
          return request.respond(status, {
            'Content-Type': 'application/json'
          }, JSON.stringify(body));
        });
        return spy;
      }
    });
    test('it shows a link to generate the report', function() {
      this.quizReport = new QuizReport({
        id: 1,
        generatable: true
      });
      this.subject = new View({
        model: this.quizReport
      });
      this.subject.render();
      return equal(this.subject.$('.create-report').length, 1);
    });
    test('it does not allow the generation of item analysis reports in surveys', function() {
      this.quizReport = new QuizReport({
        generatable: false
      });
      this.subject = new View({
        model: this.quizReport
      });
      this.subject.render();
      equal(this.subject.$('.create-report').length, 0);
      return equal(this.subject.$('.btn.disabled').length, 1);
    });
    test('it requests a report to be generated', function() {
      var ajaxSpy, saveSpy;

      this.quizReport = new QuizReport({
        id: 1,
        report_type: 'student_analysis',
        generatable: true,
        url: '/api/v1/courses/1/quizzes/1/reports/1'
      });
      this.server = sinon.fakeServer.create();
      saveSpy = sinon.spy(this.quizReport, 'save');
      ajaxSpy = this.ajaxFixture('POST', '/api/v1/courses/1/quizzes/1/reports', 200, {});
      this.subject = new View({
        model: this.quizReport
      });
      this.subject.render();
      this.subject.$('.create-report').click();
      ok(saveSpy.called, 'it saves the report');
      this.server.respond();
      return ok(ajaxSpy.called, 'it requests a report to be generated');
    });
    test('it shows a download report link when report is already generated', function() {
      this.quizReport = new QuizReport({
        id: 1,
        report_type: 'student_analysis',
        generatable: true,
        file: {
          id: 1,
          url: '/files/168/download'
        }
      });
      this.subject = new View({
        model: this.quizReport
      });
      this.subject.render();
      ok(!this.subject.$('.create-report').length);
      ok(this.subject.$('a.btn').text().match(/download/i));
      return equal(this.subject.$('a.btn').attr('href'), '/files/168/download');
    });
    test('it changes link from generate to download when generation is complete', function() {
      var ajaxSpy, saveSpy;

      this.quizReport = new QuizReport({
        id: 1,
        generatable: true,
        report_type: 'student_analysis',
        url: '/api/v1/courses/1/quizzes/1/reports/1'
      });
      this.server = sinon.fakeServer.create();
      saveSpy = sinon.spy(this.quizReport, 'save');
      ajaxSpy = this.ajaxFixture('POST', '/api/v1/courses/1/quizzes/1/reports', 200, {
        file: {
          id: 1,
          url: '/files/168/download'
        }
      });
      this.subject = new View({
        model: this.quizReport
      });
      this.subject.render();
      this.subject.$('.create-report').click();
      this.subject.autoDownload = false;
      ok(saveSpy.called, 'it saves the report');
      this.server.respond();
      this.quizReport.trigger('progressResolved');
      ok(ajaxSpy.called, 'it requests a report to be generated');
      ok(!this.subject.$('.create-report').length, 're-renders once the report is generated');
      return ok(this.subject.$('a.btn .icon-download').length, 'shows the download link');
    });
    return test('it updates the progress-bar', function() {
      this.quizReport = new QuizReport({
        id: 1,
        report_type: 'student_analysis',
        generatable: true
      });
      this.subject = new View({
        model: this.quizReport
      });
      this.subject.render();
      ok(!this.subject.$('.progress .bar').length, 'pbar is hidden');
      this.quizReport.progressModel.set({
        id: 1,
        completion: 0
      });
      ok(this.subject.$('.progress .bar').length, 'pbar is shown');
      ok(this.subject.$('.progress .bar').attr('style').match(/width.*0/), 'pbar is empty');
      this.quizReport.progressModel.set({
        completion: 25
      });
      return ok(this.subject.$('.progress .bar').attr('style').match(/width.*25/), 'pbar gets updated');
    });
  });

}).call(this);
