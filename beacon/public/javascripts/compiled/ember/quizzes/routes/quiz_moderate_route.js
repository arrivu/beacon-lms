(function() {
  define(['ember', '../mixins/redirect', '../shared/environment', 'i18n!quiz_moderate_route', '../shared/title_builder'], function(Em, Redirect, env, I18n, titleBuilder) {
    var ModerateRoute;

    ModerateRoute = Em.Route.extend(Redirect, {
      beforeModel: function(transition) {
        return this.validateRoute('canManage', 'quiz.show');
      },
      model: function() {
        return this.combinedUsersSubmissionsPromise();
      },
      afterModel: function() {
        var desc, title;

        title = this.modelFor('quiz').get('title');
        desc = I18n.t('moderate', "Moderate");
        return titleBuilder([title, desc]);
      },
      combinedUsersSubmissionsPromise: function() {
        var quiz, _this;

        quiz = this.modelFor('quiz');
        _this = this;
        return quiz.get('studentQuizSubmissions').then(function(quizSubmissions) {
          quizSubmissions || (quizSubmissions = []);
          return quiz.get('users').then(function(users) {
            return _this.combineModels(users, quizSubmissions);
          });
        });
      },
      combineModels: function(users, quizSubmissions) {
        var userSubHash;

        userSubHash = this.createSubHash(quizSubmissions);
        users.forEach(function(user) {
          var quizSubmission;

          quizSubmission = userSubHash[user.get('id')] || Ember.Object.create();
          return user.set('quizSubmission', quizSubmission);
        });
        return users;
      },
      createSubHash: function(submissions) {
        var hash;

        hash = {};
        submissions.forEach(function(sub) {
          var id;

          id = sub.get('user.id');
          return hash[id] = sub;
        });
        return hash;
      },
      forceReload: function(quiz) {
        var link, relationship, resolver,
          _this = this;

        resolver = Em.RSVP.defer();
        resolver.resolve = function(promise) {
          return promise.then(function() {
            Ember.run.later(_this, (function() {
              return this.controllerFor('quiz.moderate').set('reloading', false);
            }), 500);
            return _this.combinedUsersSubmissionsPromise().then(function(models) {
              return _this.get('controller').set('content', models);
            });
          });
        };
        relationship = quiz.constructor.metaForProperty('studentQuizSubmissions');
        link = quiz.get('links.studentQuizSubmissions');
        return this.store.findHasMany(quiz, link, relationship, resolver);
      },
      actions: {
        refreshData: function() {
          var quiz;

          quiz = this.modelFor('quiz');
          this.controllerFor('quiz.moderate').set('reloading', true);
          return this.forceReload(quiz);
        },
        studentExtension: function(model) {
          var controller;

          model = model.get("length") ? model : [model];
          controller = this.controllerFor('quiz.moderate.student_extension');
          controller.set('model', Em.A(model));
          return this.render('quiz/moderate/student_extension', {
            into: 'application',
            outlet: 'modal',
            controller: controller
          });
        },
        extendTime: function(model) {
          var controller;

          controller = this.controllerFor('quiz.moderate.extend_time');
          controller.set('model', model);
          return this.render('quiz/moderate/extend_time', {
            into: 'application',
            outlet: 'modal',
            controller: controller
          });
        }
      }
    });
    return ModerateRoute;
  });

}).call(this);
