(function() {
  require(['jquery', 'quiz_arrows', 'quizzes', 'supercalc', 'quiz_rubric'], function($, CreateQuizArrows) {
    $('#show_question_details').on('click', function(e) {
      if ($(this).is(':checked')) {
        return CreateQuizArrows();
      } else {
        return $('.answer_arrow').remove();
      }
    });
    return $('body').on('saved', '.question', function() {
      $('.answer_arrow').remove();
      if ($('#show_question_details').is(':checked')) {
        return CreateQuizArrows();
      }
    });
  });

}).call(this);
