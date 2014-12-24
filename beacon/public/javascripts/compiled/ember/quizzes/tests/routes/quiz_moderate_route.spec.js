(function() {
  define(['../start_app', 'ember', 'ember-qunit'], function(startApp, Ember, emq) {
    var App, createTestSubmission, createTestUser, mockSubmissions, mockUsers, run;

    run = Ember.run;
    App = startApp();
    emq.setResolver(Ember.DefaultResolver.create({
      namespace: App
    }));
    emq.moduleFor('route:quiz_moderate', 'Quiz moderate route');
    emq.test('sanity', function() {
      var route;

      route = this.subject();
      return ok(this.subject);
    });
    createTestSubmission = function(userId, other) {
      return Ember.Object.create({
        other: other,
        user: {
          id: userId
        }
      });
    };
    createTestUser = function(id) {
      return Ember.Object.create({
        id: 1
      });
    };
    mockSubmissions = function() {
      var one, three, two;

      one = createTestSubmission(1, 'one');
      two = createTestSubmission(2, 'two');
      three = createTestSubmission(3, 'three');
      return [one, two, three];
    };
    mockUsers = function() {
      var four, one, three, two;

      one = createTestUser(1);
      two = createTestUser(2);
      three = createTestUser(3);
      four = createTestUser(4);
      return [one, two, three, four];
    };
    emq.test('createSubHash: builds hash with user ids as keys', function() {
      var hash, quizSubmissions, route;

      quizSubmissions = mockSubmissions();
      route = this.subject();
      hash = route.createSubHash(quizSubmissions);
      return equal(hash[1].other, quizSubmissions[0].other);
    });
    return emq.test('combineModels: ensures a submission, or standin for each user', function() {
      var quizSubmissions, route, updatedUsers, users;

      users = mockUsers();
      quizSubmissions = mockSubmissions();
      route = this.subject();
      updatedUsers = route.combineModels(users, quizSubmissions);
      return ok(updatedUsers[3].quizSubmission);
    });
  });

}).call(this);
