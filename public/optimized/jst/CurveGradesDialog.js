define('jst/CurveGradesDialog', ["compiled/handlebars_helpers","i18n!curve_grades_dialog"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['CurveGradesDialog'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("curve_grades_dialog")
  },data:data},helper ? helper.call(depth0, "out_of_points_possible", "out of %{assignment.points_possible}", options) : helperMissing.call(depth0, "t", "out_of_points_possible", "out of %{assignment.points_possible}", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }

  buffer += "<form action=\"";
  if (helper = helpers.action) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.action); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" id=\"curve_grade_dialog\" style=\"display: none;\" title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("curve_grades_dialog")
  },data:data},helper ? helper.call(depth0, "curve_grade_for_assignment", "Curve Grade for %{assignment.name}", options) : helperMissing.call(depth0, "t", "curve_grade_for_assignment", "Curve Grade for %{assignment.name}", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n  <input type=\"hidden\" name=\"_method\" value=\"POST\"/>\n  <input type=\"hidden\" name=\"assignment_id\" class=\"assignment_id\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.assignment)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" />\n  <p>\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("curve_grades_dialog"),
    'w0': ("<b>$1</b>")
  },data:data},helper ? helper.call(depth0, "curve_average", "Enter an average grade for the curve for *%{assignment.name}*. The chart shows a best attempt at curving the grades based on current student scores.", options) : helperMissing.call(depth0, "t", "curve_average", "Enter an average grade for the curve for *%{assignment.name}*. The chart shows a best attempt at curving the grades based on current student scores.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </p>\n  <div style=\"min-height: 100px;\">\n    <table cellpadding=\"0\" cellspacing=\"0\">\n      <tr id=\"results_list\"></tr>\n      <tr id=\"results_values\"></tr>\n    </table>\n  </div>\n  <p style=\"text-align: center;\">\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("curve_grades_dialog")
  },data:data},helper ? helper.call(depth0, "average_score", "Average Score", options) : helperMissing.call(depth0, "t", "average_score", "Average Score", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <input type=\"number\" min=\"0\" name=\"middle_score\" id=\"middle_score\" style=\"width: 45px;\" value=\"";
  if (helper = helpers.middleScore) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.middleScore); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"/>\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.showOutOf), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </p>\n  <p>\n    "
    + escapeExpression((helper = helpers.checkbox || (depth0 && depth0.checkbox),options={hash:{},data:data},helper ? helper.call(depth0, "assign_blanks", options) : helperMissing.call(depth0, "checkbox", "assign_blanks", options)))
    + "\n    <label for=\"assign_blanks\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("curve_grades_dialog")
  },data:data},helper ? helper.call(depth0, "labels.assign_blanks", "Assign zeroes to unsubmitted students", options) : helperMissing.call(depth0, "t", "labels.assign_blanks", "Assign zeroes to unsubmitted students", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n  </p>\n  <div class=\"alert alert-danger\">\n    <p>\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("curve_grades_dialog")
  },data:data},helper ? helper.call(depth0, "this_is_permanent", "Grade curving cannot be undone. Pre-curved grade histories will be available, but the curving action is irreversible.", options) : helperMissing.call(depth0, "t", "this_is_permanent", "Grade curving cannot be undone. Pre-curved grade histories will be available, but the curving action is irreversible.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </p>\n  </div>\n  <button data-text-while-loading=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("curve_grades_dialog")
  },data:data},helper ? helper.call(depth0, "buttons.curving_grades", "Curving Grades...", options) : helperMissing.call(depth0, "t", "buttons.curving_grades", "Curving Grades...", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" type=\"submit\" class=\"btn btn-primary\">\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("curve_grades_dialog")
  },data:data},helper ? helper.call(depth0, "buttons.curve_grades", "Curve Grades", options) : helperMissing.call(depth0, "t", "buttons.curve_grades", "Curve Grades", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </button>\n</form>\n";
  return buffer;
  });
  
      
  return templates['CurveGradesDialog'];
});
