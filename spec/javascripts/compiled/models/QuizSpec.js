(function() {
  define(['jquery', 'compiled/models/Quiz', 'compiled/models/Assignment', 'compiled/models/DateGroup', 'compiled/collections/AssignmentOverrideCollection', 'jquery.ajaxJSON'], function($, Quiz, Assignment, DateGroup, AssignmentOverrideCollection) {
    module('Quiz', {
      setup: function() {
        this.quiz = new Quiz({
          id: 1,
          html_url: 'http://localhost:3000/courses/1/quizzes/24'
        });
        return this.ajaxStub = sinon.stub($, 'ajaxJSON');
      },
      teardown: function() {
        return $.ajaxJSON.restore();
      }
    });
    test('#initialize ignores assignment if not given', function() {
      return ok(!this.quiz.get('assignment'));
    });
    test('#initialize sets assignment', function() {
      var assign;

      assign = {
        id: 1,
        title: 'Foo Bar'
      };
      this.quiz = new Quiz({
        assignment: assign
      });
      return equal(this.quiz.get('assignment').constructor, Assignment);
    });
    test('#initialize ignores assignment_overrides if not given', function() {
      return ok(!this.quiz.get('assignment_overrides'));
    });
    test('#initialize assigns assignment_override collection', function() {
      this.quiz = new Quiz({
        assignment_overrides: []
      });
      return equal(this.quiz.get('assignment_overrides').constructor, AssignmentOverrideCollection);
    });
    test('#initialize should set url from html url', function() {
      return equal(this.quiz.get('url'), 'http://localhost:3000/courses/1/quizzes/1');
    });
    test('#initialize should set edit_url from html url', function() {
      return equal(this.quiz.get('edit_url'), 'http://localhost:3000/courses/1/quizzes/1/edit');
    });
    test('#initialize should set publish_url from html url', function() {
      return equal(this.quiz.get('publish_url'), 'http://localhost:3000/courses/1/quizzes/publish');
    });
    test('#initialize should set unpublish_url from html url', function() {
      return equal(this.quiz.get('unpublish_url'), 'http://localhost:3000/courses/1/quizzes/unpublish');
    });
    test('#initialize should set title_label from title', function() {
      this.quiz = new Quiz({
        title: 'My Quiz!',
        readable_type: 'Quiz'
      });
      return equal(this.quiz.get('title_label'), 'My Quiz!');
    });
    test('#initialize should set title_label from readable_type', function() {
      this.quiz = new Quiz({
        readable_type: 'Quiz'
      });
      return equal(this.quiz.get('title_label'), 'Quiz');
    });
    test('#initialize defaults unpublishable to true', function() {
      return ok(this.quiz.get('unpublishable'));
    });
    test('#initialize sets unpublishable to false', function() {
      this.quiz = new Quiz({
        unpublishable: false
      });
      return ok(!this.quiz.get('unpublishable'));
    });
    test('#initialize sets publishable from can_unpublish and published', function() {
      this.quiz = new Quiz({
        can_unpublish: false,
        published: true
      });
      return ok(!this.quiz.get('unpublishable'));
    });
    test("#initialize sets question count", function() {
      this.quiz = new Quiz({
        question_count: 1,
        published: true
      });
      equal(this.quiz.get('question_count_label'), "1 Question");
      this.quiz = new Quiz({
        question_count: 2,
        published: true
      });
      return equal(this.quiz.get('question_count_label'), "2 Questions");
    });
    test("#initialize sets possible points count with no points", function() {
      this.quiz = new Quiz();
      return equal(this.quiz.get('possible_points_label'), '');
    });
    test("#initialize sets possible points count with 0 points", function() {
      this.quiz = new Quiz({
        points_possible: 0
      });
      return equal(this.quiz.get('possible_points_label'), '');
    });
    test("#initialize sets possible points count with 1 points", function() {
      this.quiz = new Quiz({
        points_possible: 1
      });
      return equal(this.quiz.get('possible_points_label'), "1 pt");
    });
    test("#initialize sets possible points count with 2 points", function() {
      this.quiz = new Quiz({
        points_possible: 2
      });
      return equal(this.quiz.get('possible_points_label'), "2 pts");
    });
    test('#publish saves to the server', function() {
      this.quiz.publish();
      return ok(this.ajaxStub.called);
    });
    test('#publish sets published attribute to true', function() {
      this.quiz.publish();
      return ok(this.quiz.get('published'));
    });
    test('#unpublish saves to the server', function() {
      this.quiz.unpublish();
      return ok(this.ajaxStub.called);
    });
    test('#unpublish sets published attribute to false', function() {
      this.quiz.unpublish();
      return ok(!this.quiz.get('published'));
    });
    module("Quiz#multipleDueDates");
    test("checks for multiple due dates from assignment overrides", function() {
      var quiz;

      quiz = new Quiz({
        all_dates: [
          {
            title: "Winter"
          }, {
            title: "Summer"
          }
        ]
      });
      return ok(quiz.multipleDueDates());
    });
    test("checks for no multiple due dates from quiz overrides", function() {
      var quiz;

      quiz = new Quiz;
      return ok(!quiz.multipleDueDates());
    });
    module("Quiz#allDates");
    test("gets the due dates from the assignment overrides", function() {
      var allDates, dates, dueAt, first, quiz;

      dueAt = new Date("2013-08-20T11:13:00Z");
      dates = [
        new DateGroup({
          due_at: dueAt,
          title: "Everyone"
        })
      ];
      quiz = new Quiz({
        all_dates: dates
      });
      allDates = quiz.allDates();
      first = allDates[0];
      equal(first.dueAt + "", dueAt + "");
      return equal(first.dueFor, "Everyone");
    });
    test("gets empty due dates when there are no dates", function() {
      var quiz;

      quiz = new Quiz;
      return deepEqual(quiz.allDates(), []);
    });
    test("gets the due date for section instead of null", function() {
      var dueAt, false_stub, quiz;

      dueAt = new Date("2013-11-27T11:01:00Z");
      quiz = new Quiz({
        all_dates: [
          {
            due_at: null,
            title: "Everyone"
          }, {
            due_at: dueAt,
            title: "Summer"
          }
        ]
      });
      false_stub = sinon.stub(quiz, "multipleDueDates");
      false_stub.returns(false);
      deepEqual(quiz.singleSectionDueDate(), dueAt.toISOString());
      return false_stub.restore();
    });
    test("returns due_at when only one date/section are present", function() {
      var date, quiz;

      date = Date.now();
      quiz = new Quiz({
        name: 'Taco party!'
      });
      quiz.set('due_at', date);
      return deepEqual(quiz.singleSectionDueDate(), quiz.dueAt());
    });
    module("Quiz#toView");
    test("returns the quiz's dueAt", function() {
      var date, json, quiz;

      date = Date.now();
      quiz = new Quiz({
        name: 'foo'
      });
      quiz.dueAt(date);
      json = quiz.toView();
      return deepEqual(json.dueAt, date);
    });
    test("returns quiz's lockAt", function() {
      var json, lockAt, quiz;

      lockAt = Date.now();
      quiz = new Quiz({
        name: 'foo'
      });
      quiz.lockAt(lockAt);
      json = quiz.toView();
      return deepEqual(json.lockAt, lockAt);
    });
    test("includes quiz's unlockAt", function() {
      var json, quiz, unlockAt;

      unlockAt = Date.now();
      quiz = new Quiz({
        name: 'foo'
      });
      quiz.unlockAt(unlockAt);
      json = quiz.toView();
      return deepEqual(json.unlockAt, unlockAt);
    });
    test("includes htmlUrl", function() {
      var json, quiz;

      quiz = new Quiz({
        url: 'http://example.com/quizzes/1'
      });
      json = quiz.toView();
      return deepEqual(json.htmlUrl, 'http://example.com/quizzes/1');
    });
    test("includes multipleDueDates", function() {
      var json, quiz;

      quiz = new Quiz({
        all_dates: [
          {
            title: "Summer"
          }, {
            title: "Winter"
          }
        ]
      });
      json = quiz.toView();
      return deepEqual(json.multipleDueDates, true);
    });
    test("includes allDates", function() {
      var json, quiz;

      quiz = new Quiz({
        all_dates: [
          {
            title: "Summer"
          }, {
            title: "Winter"
          }
        ]
      });
      json = quiz.toView();
      return equal(json.allDates.length, 2);
    });
    return test("includes singleSectionDueDate", function() {
      var dueAt, false_stub, json, quiz;

      dueAt = new Date("2013-11-27T11:01:00Z");
      quiz = new Quiz({
        all_dates: [
          {
            due_at: null,
            title: "Everyone"
          }, {
            due_at: dueAt,
            title: "Summer"
          }
        ]
      });
      false_stub = sinon.stub(quiz, "multipleDueDates");
      false_stub.returns(false);
      json = quiz.toView();
      equal(json.singleSectionDueDate, dueAt.toISOString());
      return false_stub.restore();
    });
  });

}).call(this);
