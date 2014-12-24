define('jst/courses/roster/section', ["compiled/handlebars_helpers","i18n!courses.roster.section"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['courses/roster/section'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<li>\n  <div class=\"ellipsis\" title=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " - "
    + escapeExpression((helper = helpers.enrollmentName || (depth0 && depth0.enrollmentName),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.role), options) : helperMissing.call(depth0, "enrollmentName", (depth0 && depth0.role), options)))
    + "\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " - "
    + escapeExpression((helper = helpers.enrollmentName || (depth0 && depth0.enrollmentName),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.role), options) : helperMissing.call(depth0, "enrollmentName", (depth0 && depth0.role), options)))
    + "</div>\n  <a href=\"#\" title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("courses.roster.section")
  },data:data},helper ? helper.call(depth0, "remove_user_from_course_section", "Remove user from %{name}", options) : helperMissing.call(depth0, "t", "remove_user_from_course_section", "Remove user from %{name}", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n    <span class=\"screenreader-only\">\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("courses.roster.section")
  },data:data},helper ? helper.call(depth0, "remove_user_from_course_section", "Remove user from %{name}", options) : helperMissing.call(depth0, "t", "remove_user_from_course_section", "Remove user from %{name}", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </span>\n  </a>\n  <input type=\"hidden\" name=\"sections[]\" value=\"section_";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n</li>\n";
  return buffer;
  });
  
      
  return templates['courses/roster/section'];
});
