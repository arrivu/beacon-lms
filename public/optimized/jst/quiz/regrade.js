define('jst/quiz/regrade', ["compiled/handlebars_helpers","i18n!quiz.regrade"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['quiz/regrade'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <label class=\"checkbox\">\n      <input type=\"radio\" name=\"regrade_option\" class=\"regrade_option\" value=\"current_and_previous_correct\" "
    + escapeExpression((helper = helpers.checkedIf || (depth0 && depth0.checkedIf),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.regradeOption), "current_and_previous_correct", options) : helperMissing.call(depth0, "checkedIf", (depth0 && depth0.regradeOption), "current_and_previous_correct", options)))
    + ">\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quiz.regrade"),
    'w0': ("<em>$1</em>")
  },data:data},helper ? helper.call(depth0, "no_scores_reduced", "Award points for both corrected and previously correct answers (*no scores will be reduced*)", options) : helperMissing.call(depth0, "t", "no_scores_reduced", "Award points for both corrected and previously correct answers (*no scores will be reduced*)", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </label>\n    ";
  return buffer;
  }

  buffer += "<div class=\"regrade-options alert border-round\">\n  <h3>\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quiz.regrade"),
    'w0': ("<span>$1</span>")
  },data:data},helper ? helper.call(depth0, "regrade_options", "Regrade Options *(for students who have already answered this question):*", options) : helperMissing.call(depth0, "t", "regrade_options", "Regrade Options *(for students who have already answered this question):*", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </h3>\n\n  <div class=\"disabled regrade_disabled\" style=\""
    + escapeExpression((helper = helpers.hiddenUnless || (depth0 && depth0.hiddenUnless),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.regradeDisabled), options) : helperMissing.call(depth0, "hiddenUnless", (depth0 && depth0.regradeDisabled), options)))
    + "\">\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quiz.regrade")
  },data:data},helper ? helper.call(depth0, "regrade_disabled", "Regrading is not allowed on this question because either an answer was removed or the question type was changed after a student completed a submission.", options) : helperMissing.call(depth0, "t", "regrade_disabled", "Regrading is not allowed on this question because either an answer was removed or the question type was changed after a student completed a submission.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n\n  <div class=\"regrade_enabled\" style=\""
    + escapeExpression((helper = helpers.hiddenIf || (depth0 && depth0.hiddenIf),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.regradeDisabled), options) : helperMissing.call(depth0, "hiddenIf", (depth0 && depth0.regradeDisabled), options)))
    + "\">\n    ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.multipleAnswer), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    <label class=\"checkbox\">\n      <input type=\"radio\" name=\"regrade_option\" class=\"regrade_option\" value=\"current_correct_only\" "
    + escapeExpression((helper = helpers.checkedIf || (depth0 && depth0.checkedIf),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.regradeOption), "current_correct_only", options) : helperMissing.call(depth0, "checkedIf", (depth0 && depth0.regradeOption), "current_correct_only", options)))
    + " />\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quiz.regrade"),
    'w0': ("<em>$1</em>")
  },data:data},helper ? helper.call(depth0, "some_scores_reduced", "Only award points for the correct answer (*some students' scores may be reduced*)", options) : helperMissing.call(depth0, "t", "some_scores_reduced", "Only award points for the correct answer (*some students' scores may be reduced*)", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </label>\n\n    <label class=\"checkbox\">\n      <input type=\"radio\" name=\"regrade_option\" class=\"regrade_option\" value=\"full_credit\" "
    + escapeExpression((helper = helpers.checkedIf || (depth0 && depth0.checkedIf),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.regradeOption), "full_credit", options) : helperMissing.call(depth0, "checkedIf", (depth0 && depth0.regradeOption), "full_credit", options)))
    + " >\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quiz.regrade")
  },data:data},helper ? helper.call(depth0, "give_everyone_full_credit", "Give everyone full credit for this question.", options) : helperMissing.call(depth0, "t", "give_everyone_full_credit", "Give everyone full credit for this question.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </label>\n\n    <label class=\"checkbox\">\n      <input type=\"radio\" name=\"regrade_option\" class=\"regrade_option\" value=\"no_regrade\" "
    + escapeExpression((helper = helpers.checkedIf || (depth0 && depth0.checkedIf),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.regradeOption), "no_regrade", options) : helperMissing.call(depth0, "checkedIf", (depth0 && depth0.regradeOption), "no_regrade", options)))
    + " >\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quiz.regrade")
  },data:data},helper ? helper.call(depth0, "update_question_without_regrading", "Update question without regrading", options) : helperMissing.call(depth0, "t", "update_question_without_regrading", "Update question without regrading", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </label>\n  </div>\n</div>\n";
  return buffer;
  });
  
      
  return templates['quiz/regrade'];
});
