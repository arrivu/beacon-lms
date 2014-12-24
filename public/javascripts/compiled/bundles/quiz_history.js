(function() {
  require(['jquery', 'quiz_arrows', 'quiz_inputs', 'quiz_history'], function($, createQuizArrows, inputMethods) {
    return $(function() {
      createQuizArrows();
      inputMethods.disableInputs('[type=radio], [type=checkbox]');
      return inputMethods.setWidths();
    });
  });

}).call(this);
