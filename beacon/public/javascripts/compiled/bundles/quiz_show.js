(function() {
  require(['jquery', 'quiz_inputs', 'quiz_show', 'quiz_rubric', 'message_students', 'jquery.disableWhileLoading', 'compiled/jquery/ModuleSequenceFooter'], function($, inputMethods) {
    return $(function() {
      var dfd, versions;

      inputMethods.setWidths();
      $('.answer input[type=text]').each(function() {
        return $(this).width(($(this).val().length || 11) * 9.5);
      });
      $(".download_submissions_link").click(function(event) {
        event.preventDefault();
        return INST.downloadSubmissions($(this).attr('href'));
      });
      if (ENV.SUBMISSION_VERSIONS_URL && !ENV.IS_SURVEY) {
        versions = $("#quiz-submission-version-table");
        versions.css({
          height: "100px"
        });
        dfd = $.get(ENV.SUBMISSION_VERSIONS_URL, function(data) {
          versions.html(data);
          return versions.css({
            height: "auto"
          });
        });
        versions.disableWhileLoading(dfd);
      }
      return $('#module_sequence_footer').moduleSequenceFooter({
        courseID: ENV.COURSE_ID,
        assetType: 'Quiz',
        assetID: ENV.QUIZ.id,
        location: location
      });
    });
  });

}).call(this);
