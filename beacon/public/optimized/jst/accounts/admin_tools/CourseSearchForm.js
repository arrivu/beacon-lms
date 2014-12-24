define('jst/accounts/admin_tools/CourseSearchForm', ["compiled/handlebars_helpers","i18n!accounts.admin_tools.course_search_form"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['accounts/admin_tools/CourseSearchForm'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <option value="
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.course)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.course)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</option>\n    ";
  return buffer;
  }

  buffer += "<div>\n  <label for=\"courseSearchField\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.course_search_form")
  },data:data},helper ? helper.call(depth0, "labels.find_deleted_course", "Search for a deleted course by ID", options) : helperMissing.call(depth0, "t", "labels.find_deleted_course", "Search for a deleted course by ID", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n</div>\n<div class=\"form-inline\">\n  <input type=\"text\" id=\"courseSearchField\" class=\"span4\" placeholder='";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.course_search_form")
  },data:data},helper ? helper.call(depth0, "course_id", "Course ID", options) : helperMissing.call(depth0, "t", "course_id", "Course ID", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "' maxlength=\"50\">\n  <input type=\"submit\" class=\"btn btn-primary span2\" id=\"courseSearchBtn\" value=\"Find\">\n</div>\n\n<div>or</div>\n\n<label class=\"control-label\" for=\"courseSelect\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.course_search_form")
  },data:data},helper ? helper.call(depth0, "select_label", "Select a course", options) : helperMissing.call(depth0, "t", "select_label", "Select a course", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n<div class=\"controls\">\n  <select id=\"courseSelect\">\n    <option value=\"default\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.course_search_form")
  },data:data},helper ? helper.call(depth0, "select_default", "Select a course", options) : helperMissing.call(depth0, "t", "select_default", "Select a course", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.courses), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </select>\n</div>\n";
  return buffer;
  });
  
      
  return templates['accounts/admin_tools/CourseSearchForm'];
});
