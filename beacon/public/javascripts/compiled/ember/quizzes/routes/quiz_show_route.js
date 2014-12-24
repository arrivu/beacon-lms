(function() {
  define(['ember', 'i18n!quiz_overview_route', '../shared/title_builder'], function(Em, I18n, titleBuilder) {
    return Em.Route.extend({
      model: function() {
        return this.modelFor('quiz');
      },
      afterModel: function(quiz, transition) {
        var desc, title;

        title = quiz.get('title');
        desc = I18n.t('overview', 'Overview');
        return titleBuilder([title, desc]);
      }
    });
  });

}).call(this);
