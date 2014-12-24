define('jst/SetDefaultGradeDialog', ["compiled/handlebars_helpers","i18n!set_default_grade_dialog","jst/_grading_box"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['SetDefaultGradeDialog'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;


  buffer += "<form action=\"";
  if (helper = helpers.url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" method=\"POST\" title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("set_default_grade_dialog")
  },data:data},helper ? helper.call(depth0, "dialog_title", "Default grade for %{assignment.name}", options) : helperMissing.call(depth0, "t", "dialog_title", "Default grade for %{assignment.name}", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n  <input type=\"hidden\" name=\"assignment_id\" class=\"assignment_id\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.assignment)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/>\n  <div>\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("set_default_grade_dialog"),
    'w0': ("<b>$1</b>")
  },data:data},helper ? helper.call(depth0, "default_grades", "Give all students the same grade for *%{assignment.name}* by entering and submitting a grade value below:", options) : helperMissing.call(depth0, "t", "default_grades", "Give all students the same grade for *%{assignment.name}* by entering and submitting a grade value below:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n  <p style=\"text-align: center;\" class=\"grading_box_holder\">\n    ";
  stack1 = self.invokePartial(partials.grading_box, 'grading_box', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </p>\n  <div>\n    <input type=\"checkbox\" name=\"overwrite_existing_grades\" id=\"overwrite_existing_grades_for_"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.assignment)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/>\n    <label for=\"overwrite_existing_grades_for_"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.assignment)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("set_default_grade_dialog")
  },data:data},helper ? helper.call(depth0, "overwrite", "Overwrite already-entered grades", options) : helperMissing.call(depth0, "t", "overwrite", "Overwrite already-entered grades", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n  </div>\n  <button type=\"submit\" class=\"btn\" data-text-while-loading=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("set_default_grade_dialog")
  },data:data},helper ? helper.call(depth0, "set_grades_button_loading", "Setting Grades...", options) : helperMissing.call(depth0, "t", "set_grades_button_loading", "Setting Grades...", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("set_default_grade_dialog")
  },data:data},helper ? helper.call(depth0, "set_grades_button", "Set Default Grade", options) : helperMissing.call(depth0, "t", "set_grades_button", "Set Default Grade", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n</form>\n";
  return buffer;
  });
  
      
  return templates['SetDefaultGradeDialog'];
});
