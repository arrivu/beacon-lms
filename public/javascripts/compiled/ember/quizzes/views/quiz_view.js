(function() {
  define(['ember', '../shared/environment', '../mixins/views/submission_arrows_view', 'quiz_rubric', 'compiled/jquery/ModuleSequenceFooter'], function(Ember, environment, SubmissionArrowsView, createRubricDialog) {
    var QuizView;

    return QuizView = Ember.View.extend(SubmissionArrowsView, {
      addBreadCrumb: (function() {
        var breadcrumb, escapedTitle, quizUrl;

        quizUrl = this.controller.get('htmlURL');
        escapedTitle = $("<div />").text(this.controller.get("title")).html();
        breadcrumb = $(("<li><a href=\"" + quizUrl + "\"><span class=\"ellipsible\">") + escapedTitle + "</span></a></li>");
        return $("#breadcrumbs ul").append(breadcrumb);
      }).on('didInsertElement'),
      removeBreadcrumb: (function() {
        return $("#breadcrumbs li").last().remove();
      }).on('willDestroyElement'),
      setupViewAddOns: (function() {
        this.setupControllerListeners();
        return this.addModuleSequenceFooter();
      }).on('didInsertElement'),
      addModuleSequenceFooter: function() {
        return this.$('#module_sequence_footer').moduleSequenceFooter({
          courseID: environment.get('courseId'),
          assetType: 'Quiz',
          assetID: this.controller.get("id")
        });
      },
      setupControllerListeners: function() {
        return this.get('controller').on('rubricDisplayRequest', this, this.displayRubric);
      },
      teardownControllerListeners: (function() {
        return this.get('controller').off('rubricDisplayRequest', this, this.displayRubric);
      }).on('willDestroyElement'),
      displayRubric: function() {
        var url;

        url = this.get('controller.rubricUrl');
        return createRubricDialog(url);
      }
    });
  });

}).call(this);
