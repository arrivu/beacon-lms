define('jst/content_migrations/subviews/QuestionBank', ["compiled/handlebars_helpers","i18n!content_migrations.subviews.question_bank"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['content_migrations/subviews/QuestionBank'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <option value="
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.assessment_question_bank)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.assessment_question_bank)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</option>\n    ";
  return buffer;
  }

  buffer += "<label class=\"control-label\"><strong>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.subviews.question_bank")
  },data:data},helper ? helper.call(depth0, "default_question_bank_label", "Default Question bank", options) : helperMissing.call(depth0, "t", "default_question_bank_label", "Default Question bank", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</strong></label>\n<div class=\"controls\">\n  <select class=\"questionBank span3\">\n    <option value=\"\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.subviews.question_bank")
  },data:data},helper ? helper.call(depth0, "select_question_bank", "Select question bank", options) : helperMissing.call(depth0, "t", "select_question_bank", "Select question bank", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n    <option value=\"new_question_bank\" id=\"createQuestion\" aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.subviews.question_bank")
  },data:data},helper ? helper.call(depth0, "aria_new_label", "Create new question bank", options) : helperMissing.call(depth0, "t", "aria_new_label", "Create new question bank", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.subviews.question_bank")
  },data:data},helper ? helper.call(depth0, "create_new_question", "-- Create new question bank --", options) : helperMissing.call(depth0, "t", "create_new_question", "-- Create new question bank --", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.questionBanks), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </select>\n</div>\n<br />\n<div class=\"controls\" aria-live=\"assertive\">\n  <input title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.subviews.question_bank")
  },data:data},helper ? helper.call(depth0, "question_bank_title", "New question bank name", options) : helperMissing.call(depth0, "t", "question_bank_title", "New question bank name", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"aria-label=";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.subviews.question_bank")
  },data:data},helper ? helper.call(depth0, "question_bank_placeholder_aria", "\"Enter new question bank name\"", options) : helperMissing.call(depth0, "t", "question_bank_placeholder_aria", "\"Enter new question bank name\"", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " placeholder=";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.subviews.question_bank")
  },data:data},helper ? helper.call(depth0, "question_bank_placeholder", "\"Question bank name\"", options) : helperMissing.call(depth0, "t", "question_bank_placeholder", "\"Question bank name\"", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " type=\"text\" style=\"display:none\" id=\"createQuestionInput\"/>\n</div>\n";
  return buffer;
  });
  
      
  return templates['content_migrations/subviews/QuestionBank'];
});
