define('jst/assignments/GradingTypeSelector', ["compiled/handlebars_helpers","i18n!assignments.grading_type_selector"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['assignments/GradingTypeSelector'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function";

function program1(depth0,data) {
  
  
  return "assignment[grading_type]";
  }

function program3(depth0,data) {
  
  
  return "grading_type";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      <option value=\"not_graded\" "
    + escapeExpression((helper = helpers.selectedIf || (depth0 && depth0.selectedIf),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.isNotGraded), options) : helperMissing.call(depth0, "selectedIf", (depth0 && depth0.isNotGraded), options)))
    + ">\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.grading_type_selector")
  },data:data},helper ? helper.call(depth0, "grading_type_options.not_graded", "Not Graded", options) : helperMissing.call(depth0, "t", "grading_type_options.not_graded", "Not Graded", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </option>\n    ";
  return buffer;
  }

function program7(depth0,data) {
  
  
  return "assignment[grading_standard_id]";
  }

function program9(depth0,data) {
  
  
  return "grading_standard_id";
  }

  buffer += "<div class=\"form-column-left no-group\">\n  <label for=\"assignment_grading_type\">\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.grading_type_selector")
  },data:data},helper ? helper.call(depth0, "display_grade_as", "Display Grade as", options) : helperMissing.call(depth0, "t", "display_grade_as", "Display Grade as", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </label>\n</div>\n\n<div class=\"form-column-right\">\n  <select id=\"assignment_grading_type\"\n    name=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.nested), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n    aria-controls=\"graded_assignment_fields view-grading-levels\"\n    "
    + escapeExpression((helper = helpers.disabledIfIncludes || (depth0 && depth0.disabledIfIncludes),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.frozenAttributes), "grading_type", options) : helperMissing.call(depth0, "disabledIfIncludes", (depth0 && depth0.frozenAttributes), "grading_type", options)))
    + ">\n    <option value=\"percent\" "
    + escapeExpression((helper = helpers.selectedIf || (depth0 && depth0.selectedIf),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.gradingType), "percent", options) : helperMissing.call(depth0, "selectedIf", (depth0 && depth0.gradingType), "percent", options)))
    + ">\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.grading_type_selector")
  },data:data},helper ? helper.call(depth0, "grading_type_options.percent", "Percentage", options) : helperMissing.call(depth0, "t", "grading_type_options.percent", "Percentage", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </option>\n    <option value=\"pass_fail\" "
    + escapeExpression((helper = helpers.selectedIf || (depth0 && depth0.selectedIf),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.gradingType), "pass_fail", options) : helperMissing.call(depth0, "selectedIf", (depth0 && depth0.gradingType), "pass_fail", options)))
    + ">\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.grading_type_selector")
  },data:data},helper ? helper.call(depth0, "grading_type_options.pass_fail", "Complete/Incomplete", options) : helperMissing.call(depth0, "t", "grading_type_options.pass_fail", "Complete/Incomplete", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </option>\n    <option value=\"points\" "
    + escapeExpression((helper = helpers.selectedIf || (depth0 && depth0.selectedIf),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.gradingType), "points", options) : helperMissing.call(depth0, "selectedIf", (depth0 && depth0.gradingType), "points", options)))
    + ">\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.grading_type_selector")
  },data:data},helper ? helper.call(depth0, "grading_type_options.points", "Points", options) : helperMissing.call(depth0, "t", "grading_type_options.points", "Points", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </option>\n    <option value=\"letter_grade\" "
    + escapeExpression((helper = helpers.selectedIf || (depth0 && depth0.selectedIf),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.gradingType), "letter_grade", options) : helperMissing.call(depth0, "selectedIf", (depth0 && depth0.gradingType), "letter_grade", options)))
    + ">\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.grading_type_selector")
  },data:data},helper ? helper.call(depth0, "grading_type_options.letter_grade", "Letter Grade", options) : helperMissing.call(depth0, "t", "grading_type_options.letter_grade", "Letter Grade", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </option>\n    <option value=\"gpa_scale\" "
    + escapeExpression((helper = helpers.selectedIf || (depth0 && depth0.selectedIf),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.gradingType), "gpa_scale", options) : helperMissing.call(depth0, "selectedIf", (depth0 && depth0.gradingType), "gpa_scale", options)))
    + ">\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.grading_type_selector")
  },data:data},helper ? helper.call(depth0, "grading_type_options.gpa_scale", "GPA Scale", options) : helperMissing.call(depth0, "t", "grading_type_options.gpa_scale", "GPA Scale", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </option>\n    ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.preventNotGraded), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </select>\n  <a id=gpa-scale-question\n     tabindex=\"0\"\n     aria-label=\"";
  if (helper = helpers.gpaScaleQuestionLabel) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.gpaScaleQuestionLabel); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n     style=\""
    + escapeExpression((helper = helpers.hiddenUnless || (depth0 && depth0.hiddenUnless),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.isGpaScaled), options) : helperMissing.call(depth0, "hiddenUnless", (depth0 && depth0.isGpaScaled), options)))
    + "\">\n     <i class=\"icon-question\"></i>\n  </a>\n\n  <p id=view-grading-levels\n    class=\"help-block\"\n    style=\""
    + escapeExpression((helper = helpers.hiddenUnless || (depth0 && depth0.hiddenUnless),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.isLetterOrGpaGraded), options) : helperMissing.call(depth0, "hiddenUnless", (depth0 && depth0.isLetterOrGpaGraded), options)))
    + "\"\n    aria-expanded=";
  if (helper = helpers.isLetterOrGpaGraded) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.isLetterOrGpaGraded); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ">\n    <a href=\"#\" class=edit_letter_grades_link>\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.grading_type_selector")
  },data:data},helper ? helper.call(depth0, "view_grading_scheme", "View Grading Scheme", options) : helperMissing.call(depth0, "t", "view_grading_scheme", "View Grading Scheme", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </a>\n  </p>\n  <input name=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.nested), {hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n    class=grading_standard_id\n    value=\"";
  if (helper = helpers.gradingStandardId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.gradingStandardId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n    type=\"hidden\">\n</div>\n\n<div\n  id=\"gpa-scale-dialog\"\n  title=";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.grading_type_selector")
  },data:data},helper ? helper.call(depth0, "gpa_scale_title", "\"What is GPA Scale Grading?\"", options) : helperMissing.call(depth0, "t", "gpa_scale_title", "\"What is GPA Scale Grading?\"", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  style=\"display: none;\">\n  <p>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.grading_type_selector")
  },data:data},helper ? helper.call(depth0, "gpa_scale_explainer", "GPA Scale Grading is designed for schools that use a 4.0 scale (or 5.0/6.0) for all assignments. This grading scheme is similar to the Letter Grade display but features some important differences:", options) : helperMissing.call(depth0, "t", "gpa_scale_explainer", "GPA Scale Grading is designed for schools that use a 4.0 scale (or 5.0/6.0) for all assignments. This grading scheme is similar to the Letter Grade display but features some important differences:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n\n  <ul>\n    <li>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.grading_type_selector")
  },data:data},helper ? helper.call(depth0, "gpa_scale_input_explainer", "Scores are inputted on the 4.0 scale. For instance, if an assignment is out of 100 points, inputting 4.0 results in 100%, 3.0 results in 87%, etc.", options) : helperMissing.call(depth0, "t", "gpa_scale_input_explainer", "Scores are inputted on the 4.0 scale. For instance, if an assignment is out of 100 points, inputting 4.0 results in 100%, 3.0 results in 87%, etc.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</li>\n\n    <li>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.grading_type_selector")
  },data:data},helper ? helper.call(depth0, "gpa_scale_percentage_explainer", "You cannot input points directly, but can input percentages. For instance, if an assignment is out of 50 points, inputting \"40\" will not work, but \"80%\" will.", options) : helperMissing.call(depth0, "t", "gpa_scale_percentage_explainer", "You cannot input points directly, but can input percentages. For instance, if an assignment is out of 50 points, inputting \"40\" will not work, but \"80%\" will.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</li>\n\n    <li>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.grading_type_selector")
  },data:data},helper ? helper.call(depth0, "gpa_scale_scores_explainer", "The only scores allowed are predefined in the grading scheme.", options) : helperMissing.call(depth0, "t", "gpa_scale_scores_explainer", "The only scores allowed are predefined in the grading scheme.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</li>\n\n    <li>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.grading_type_selector")
  },data:data},helper ? helper.call(depth0, "gpa_scale_letters_explainer", "Letter grades can be used in addition to number grades.", options) : helperMissing.call(depth0, "t", "gpa_scale_letters_explainer", "Letter grades can be used in addition to number grades.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</li>\n  </ul>\n\n  <p>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.grading_type_selector")
  },data:data},helper ? helper.call(depth0, "gpa_scale_recommendation", "Unless your school uses a 4.0 scale (or 5.0/6.0) for grading, Canvas recommends displaying grades as Letter Grade.", options) : helperMissing.call(depth0, "t", "gpa_scale_recommendation", "Unless your school uses a 4.0 scale (or 5.0/6.0) for grading, Canvas recommends displaying grades as Letter Grade.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n</div>";
  return buffer;
  });
  
      
  return templates['assignments/GradingTypeSelector'];
});
