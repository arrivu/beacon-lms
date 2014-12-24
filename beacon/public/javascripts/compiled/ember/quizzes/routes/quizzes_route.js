(function() {
  define(['ember', '../shared/environment', 'i18n!quizzes_route', '../shared/title_builder', '../models/quiz'], function(Ember, env, I18n, titleBuilder, Quiz) {
    var QuizzesRoute;

    return QuizzesRoute = Ember.Route.extend({
      activate: function() {
        return $("body").addClass("with_item_groups");
      },
      deactivate: function() {
        return $("body").removeClass("with_item_groups");
      },
      model: function(params) {
        var quizRecordsArray,
          _this = this;

        quizRecordsArray = this.store.find('quiz');
        quizRecordsArray.then(function(quizzes) {
          var perms;

          perms = env.get('env.PERMISSIONS');
          perms.create = _this.store.metadataFor('quiz').permissions.quizzes.create;
          env.set('env.PERMISSIONS', perms);
          _this.store.adapterFor(Quiz).loadRemainingPages(_this.store).then(function() {
            var controller;

            _this.finishedPaginating = true;
            controller = _this.get('controller');
            if (controller) {
              return controller.set('finishedPaginationLoading', true);
            }
          });
          return quizzes;
        });
        return quizRecordsArray;
      },
      setupController: function(controller, model) {
        controller.set('model', model);
        return controller.set('finishedPaginationLoading', this.finishedPaginating);
      },
      afterModel: function() {
        var title;

        title = I18n.t('quizzes_route_title', 'Quizzes');
        return titleBuilder([title]);
      }
    });
  });

}).call(this);
