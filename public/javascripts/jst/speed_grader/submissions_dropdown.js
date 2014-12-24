define('jst/speed_grader/submissions_dropdown', ["compiled/handlebars_helpers","i18n!speed_grader.submissions_dropdown"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['speed_grader/submissions_dropdown'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helperMissing=helpers.helperMissing, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.submissions), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("speed_grader.submissions_dropdown"),
    'w0': ("<label>$1</label>")
  },data:data},helper ? helper.call(depth0, "submitted", "*Submitted:* %{submittedAt}", options) : helperMissing.call(depth0, "t", "submitted", "*Submitted:* %{submittedAt}", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <label for=\"submission_to_view\">\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("speed_grader.submissions_dropdown")
  },data:data},helper ? helper.call(depth0, "submission_to_view", "Submission to view:", options) : helperMissing.call(depth0, "t", "submission_to_view", "Submission to view:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </label>\n  <select id=\"submission_to_view\">\n  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.submissions), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </select>\n";
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    <option value=\"";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.late), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.selected), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n      ";
  if (helper = helpers.submittedAt) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.submittedAt); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.late), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.grade), {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </option>\n  ";
  return buffer;
  }
function program6(depth0,data) {
  
  
  return "class=late";
  }

function program8(depth0,data) {
  
  
  return "selected";
  }

function program10(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("speed_grader.submissions_dropdown")
  },data:data},helper ? helper.call(depth0, "loud_late", "LATE", options) : helperMissing.call(depth0, "t", "loud_late", "LATE", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("speed_grader.submissions_dropdown")
  },data:data},helper ? helper.call(depth0, "grade", "(grade: %{grade})", options) : helperMissing.call(depth0, "t", "grade", "(grade: %{grade})", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <a href=\"";
  if (helper = helpers.quizHistoryHref) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.quizHistoryHref); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=see-all-attempts>\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("speed_grader.submissions_dropdown")
  },data:data},helper ? helper.call(depth0, "see_all_quiz_attempts", "See all quiz attempts", options) : helperMissing.call(depth0, "t", "see_all_quiz_attempts", "See all quiz attempts", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </a>\n";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, (depth0 && depth0.singleSubmission), {hash:{},inverse:self.program(4, program4, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.linkToQuizHistory), {hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
  
      
  return templates['speed_grader/submissions_dropdown'];
});
