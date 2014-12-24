define('jst/roles/rolesOverrideIndex', ["compiled/handlebars_helpers","compiled/util/registerTemplateCss","i18n!roles.roles_override_index"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['roles/rolesOverrideIndex'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      <li role=\"heading\" aria-level=\"2\"><a href=\"#course-roles-tab\" id=\"course_role_link\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("roles.roles_override_index")
  },data:data},helper ? helper.call(depth0, "course_roles", "Course Roles", options) : helperMissing.call(depth0, "t", "course_roles", "Course Roles", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></li>\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "\n    <div id=\"course-roles-tab\" class=\"course-roles role-tab\"></div>\n  ";
  }

  buffer += "<h1 class=\"screenreader-only\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("roles.roles_override_index")
  },data:data},helper ? helper.call(depth0, "page_header_title", "Account Permissions", options) : helperMissing.call(depth0, "t", "page_header_title", "Account Permissions", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h1>\n<div id=\"role_tabs\" class=\"ui-tabs-minimal manage-permissions\">\n  <ul>\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.showCourseRoles), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <li role=\"heading\" aria-level=\"2\"><a href=\"#account-roles-tab\" id=\"account_role_link\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("roles.roles_override_index")
  },data:data},helper ? helper.call(depth0, "account_roles", "Account Roles", options) : helperMissing.call(depth0, "t", "account_roles", "Account Roles", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></li>\n  </ul>\n\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.showCourseRoles), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  <div id=\"account-roles-tab\" class=\"account-roles role-tab\"></div>\n</div>\n";
  return buffer;
  });
  
      
arguments[1]('roles/rolesOverrideIndex', ".table th,.table td{border:none !important;}.role-tab{padding-bottom:200px !important;overflow-x:scroll;}.manage-permissions thead th{text-align:center;white-space:nowrap;width:0;}.manage-permissions td{vertical-align:middle;}.manage-permissions th{width:20%;}.toolbar th,.toolbar td{background-color:#dae1e6 !important;}.toolbar th:hover,.toolbar td:hover{background-color:#dae1e6 !important;}");

  return templates['roles/rolesOverrideIndex'];
});
