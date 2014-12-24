(function() {
  define(['ember', 'i18n!quiz_statistics'], function(Ember, I18n) {
    var sortQuestionsBy;

    sortQuestionsBy = function(controller, properties, asc) {
      controller.set('questionStatistics.sortProperties', properties);
      return controller.set('questionStatistics.sortAscending', asc);
    };
    return Ember.ObjectController.extend({
      questionStatistics: Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, {
        sortProperties: ['position'],
        content: []
      }),
      sortLabel: (function() {
        switch (this.get('questionStatistics.sortProperties')[0]) {
          case 'position':
            return I18n.t('sort_by_position', 'Sort By Position');
          case 'discriminationIndex':
            return I18n.t('sort_by_discrimination_index', 'Sort By Discrimination');
        }
      }).property('questionStatistics.sortProperties'),
      imageAltLabel: (function() {
        return I18n.t('stats_error.image_alt', 'Quiz statistics not available yet.');
      }).property(),
      discriminationIndexHelpDialogTitle: (function() {
        return I18n.t('discrimination_index_help_dialog_title', 'The Discrimination Index Chart');
      }).property(),
      hasError: (function() {
        return !!this.get('error');
      }).property('error'),
      errorHeaderLabel: (function() {
        switch (this.get('error')) {
          case 'stats_empty':
            return I18n.t('errors.stats_empty.header', 'Nothing to see here folks.');
          case 'stats_too_large':
            return I18n.t('errors.stats_too_large.header', 'Too much going on here folks.');
          default:
            return I18n.t('unknown.header', 'Something went wrong.');
        }
      }).property('error'),
      errorInfoLabel: (function() {
        switch (this.get('error')) {
          case 'stats_empty':
            return I18n.t('errors.stats_empty.info', 'None of your students have taken this quiz yet.');
          case 'stats_too_large':
            return I18n.t('errors.stats_too_large.info', 'This quiz is too large to display.');
          default:
            return I18n.t('unknown.info', 'An unexpected error has occurred.');
        }
      }).property('error'),
      populateQuestionStatistics: (function() {
        return this.set('questionStatistics.content', this.get('model.questionStatistics'));
      }).observes('model.questionStatistics.@each'),
      actions: {
        showAllDetails: function() {
          this.toggleProperty('allDetailsVisible');
          return null;
        },
        sortByDiscriminationIndex: function() {
          sortQuestionsBy(this, ['discriminationIndex', 'position'], false);
          return null;
        },
        sortByPosition: function() {
          sortQuestionsBy(this, ['position'], true);
          return null;
        }
      }
    });
  });

}).call(this);
