define('jst/GradeDisplayWarningDialog', ["compiled/handlebars_helpers","i18n!grade_display_warning_dialog"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['GradeDisplayWarningDialog'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("grade_display_warning_dialog")
  },data:data},helper ? helper.call(depth0, "grade_display_warning.warning", "Warning", options) : helperMissing.call(depth0, "t", "grade_display_warning.warning", "Warning", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" style=\"display:none;\" id=\"grade_display_warning_dialog\">\n  <div>\n    ";
  if (helper = helpers.warning_text) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.warning_text); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n  </div>\n  <br/>\n  <label for=\"hide_warning\">\n    "
    + escapeExpression((helper = helpers.checkbox || (depth0 && depth0.checkbox),options={hash:{
    'id': ("hide_warning")
  },data:data},helper ? helper.call(depth0, "hide_warning", options) : helperMissing.call(depth0, "checkbox", "hide_warning", options)))
    + "\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("grade_display_warning_dialog")
  },data:data},helper ? helper.call(depth0, "grade_display_warning.checkbox", "Don't show for this course again.", options) : helperMissing.call(depth0, "t", "grade_display_warning.checkbox", "Don't show for this course again.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </label>\n</div>\n";
  return buffer;
  });
  
      
  return templates['GradeDisplayWarningDialog'];
});
