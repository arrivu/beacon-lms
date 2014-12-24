(function() {
  define(['ember', '../mixins/redirect', 'i18n!quiz_statistics_route', '../shared/title_builder', '../mixins/routes/loading_overlay'], function(Ember, Redirect, I18n, titleBuilder, LoadingOverlayMixin) {
    var RC_QUIZ_TOO_LARGE, RSVP;

    RSVP = Ember.RSVP;
    RC_QUIZ_TOO_LARGE = /operation not available for large quizzes/;
    return Ember.Route.extend(Redirect, LoadingOverlayMixin, {
      beforeModel: function(transition) {
        this.set('error', null);
        return this.validateRoute('canManage', 'quiz.show');
      },
      model: function(transition, options) {
        var quiz,
          _this = this;

        quiz = this.modelFor('quiz');
        return quiz.get('quizStatistics').then(function(items) {
          return items.sortBy('createdAt').get('lastObject');
        }).then(function(latestStatistics) {
          return quiz.get('quizReports').then(function() {
            return latestStatistics;
          });
        })["catch"](function(error) {
          var jqXHR;

          jqXHR = (error || {}).jqXHR;
          if (jqXHR && jqXHR.status && jqXHR.responseText.match(RC_QUIZ_TOO_LARGE)) {
            _this.set('error', 'stats_too_large');
          } else {
            _this.set('error', 'unknown');
          }
          return RSVP.resolve([]);
        });
      },
      afterModel: function() {
        var desc, title;

        title = this.modelFor('quiz').get('title');
        desc = I18n.t('quiz_statistics', "Statistics");
        return titleBuilder([title, desc]);
      },
      actions: {
        showDiscriminationIndexHelp: function() {
          return this.render('quiz/statistics/questions/multiple_choice/discrimination_index_help', {
            into: 'application',
            outlet: 'modal'
          });
        },
        didTransition: function() {
          var error;

          if (error = this.get('error')) {
            return this.controllerFor('quizStatistics').set('error', error);
          } else if (this.modelFor('quizStatistics').get('uniqueCount') < 1) {
            return this.controllerFor('quizStatistics').set('error', 'stats_empty');
          }
        }
      }
    });
  });

}).call(this);
