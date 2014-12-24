define('jst/publish_grades/_assignmentListItemScore', ["compiled/handlebars_helpers","i18n!publish_grades.assignment_list_item_score"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['publish_grades/_assignmentListItemScore'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    ";
  stack1 = (helper = helpers.ifAll || (depth0 && depth0.ifAll),options={hash:{},inverse:self.program(8, program8, data),fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.submission), ((stack1 = (depth0 && depth0.submission)),stack1 == null || stack1 === false ? stack1 : stack1.submitted_or_graded), options) : helperMissing.call(depth0, "ifAll", (depth0 && depth0.submission), ((stack1 = (depth0 && depth0.submission)),stack1 == null || stack1 === false ? stack1 : stack1.submitted_or_graded), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n\n      ";
  stack1 = helpers['with'].call(depth0, (depth0 && depth0.submission), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    ";
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.notYetGraded), {hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n\n          <span class=\"score-display span5 text-right ellipsis\">\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("publish_grades.assignment_list_item_score")
  },data:data},helper ? helper.call(depth0, "empty_points_possible", "-/%{pointsPossible} pts", options) : helperMissing.call(depth0, "t", "empty_points_possible", "-/%{pointsPossible} pts", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </span>\n          <span class=\"grade-display span6 text-left ellipsis\">\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("publish_grades.assignment_list_item_score"),
    'w0': ("<em>$1</em>")
  },data:data},helper ? helper.call(depth0, "not_yet_graded", "*Not Yet Graded*", options) : helperMissing.call(depth0, "t", "not_yet_graded", "*Not Yet Graded*", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </span>\n\n        ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n\n          <span class=\"score-display span5 text-right ellipsis\">\n              ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("publish_grades.assignment_list_item_score"),
    'w0': ("<b>$1</b>")
  },data:data},helper ? helper.call(depth0, "score_with_points_possible", "*%{score}*/%{pointsPossible} pts", options) : helperMissing.call(depth0, "t", "score_with_points_possible", "*%{score}*/%{pointsPossible} pts", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </span>\n          <span class=\"grade-display span6 text-left ellipsis\">\n            <strong>\n              ";
  if (helper = helpers.gradeDisplay) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.gradeDisplay); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n            </strong>\n          </span>\n\n        ";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n\n      <span data-tooltip=\"\" class=\"span5 score-display ellipsis text-right\" title='";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("publish_grades.assignment_list_item_score")
  },data:data},helper ? helper.call(depth0, "no_submission", "No Submission", options) : helperMissing.call(depth0, "t", "no_submission", "No Submission", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'>\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("publish_grades.assignment_list_item_score")
  },data:data},helper ? helper.call(depth0, "empty_points_possible", "-/%{pointsPossible} pts", options) : helperMissing.call(depth0, "t", "empty_points_possible", "-/%{pointsPossible} pts", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </span>\n\n    ";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("publish_grades.assignment_list_item_score")
  },data:data},helper ? helper.call(depth0, "assignment_grading_type_is_not_graded", "This assignment will not be assigned a grade.", options) : helperMissing.call(depth0, "t", "assignment_grading_type_is_not_graded", "This assignment will not be assigned a grade.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    ";
  stack1 = (helper = helpers.ifAll || (depth0 && depth0.ifAll),options={hash:{},inverse:self.program(19, program19, data),fn:self.program(13, program13, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.submission), ((stack1 = (depth0 && depth0.submission)),stack1 == null || stack1 === false ? stack1 : stack1.submitted_or_graded), options) : helperMissing.call(depth0, "ifAll", (depth0 && depth0.submission), ((stack1 = (depth0 && depth0.submission)),stack1 == null || stack1 === false ? stack1 : stack1.submitted_or_graded), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;
  }
function program13(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n\n      ";
  stack1 = helpers['with'].call(depth0, (depth0 && depth0.submission), {hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    ";
  return buffer;
  }
function program14(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.notYetGraded), {hash:{},inverse:self.program(17, program17, data),fn:self.program(15, program15, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n      ";
  return buffer;
  }
function program15(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("publish_grades.assignment_list_item_score")
  },data:data},helper ? helper.call(depth0, "assignment_not_yet_graded_screenreader", "Assignment not yet graded. %{pointsPossible} points possible.", options) : helperMissing.call(depth0, "t", "assignment_not_yet_graded_screenreader", "Assignment not yet graded. %{pointsPossible} points possible.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        ";
  return buffer;
  }

function program17(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("publish_grades.assignment_list_item_score")
  },data:data},helper ? helper.call(depth0, "score_with_points_possible_screenreader", "Score: %{score} out of %{pointsPossible} points.", options) : helperMissing.call(depth0, "t", "score_with_points_possible_screenreader", "Score: %{score} out of %{pointsPossible} points.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          ";
  if (helper = helpers.gradeDisplayForScreenreader) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.gradeDisplayForScreenreader); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n\n        ";
  return buffer;
  }

function program19(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("publish_grades.assignment_list_item_score")
  },data:data},helper ? helper.call(depth0, "no_submission_for_assignment_screenreader", "No submission for this assignment. %{pointsPossible} points possible.", options) : helperMissing.call(depth0, "t", "no_submission_for_assignment_screenreader", "No submission for this assignment. %{pointsPossible} points possible.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    ";
  return buffer;
  }

  buffer += "<span class=\"non-screenreader\" aria-hidden=true>\n  ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.hideGrade), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</span>\n\n<span class=\"screenreader-only\">\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.hideGrade), {hash:{},inverse:self.program(12, program12, data),fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n</span>\n";
  return buffer;
  });
  
Handlebars.registerPartial('publish_grades/assignmentListItemScore', templates['publish_grades/_assignmentListItemScore']);

      
  return templates['publish_grades/_assignmentListItemScore'];
});
