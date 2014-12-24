define('jst/accounts/admin_tools/CourseSearchResults', ["compiled/handlebars_helpers","i18n!accounts.admin_tools.course_search_results"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['accounts/admin_tools/CourseSearchResults'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n<div class=\"well\">\n  <div class=\"h2\">\n    <span class=\"lead\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n    <p>\n    <strong>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.course_search_results")
  },data:data},helper ? helper.call(depth0, "labels.coures_id1", "Course ID:", options) : helperMissing.call(depth0, "t", "labels.coures_id1", "Course ID:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</strong> ";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " <br />\n    <strong>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.course_search_results")
  },data:data},helper ? helper.call(depth0, "labels.account_id", "Account ID:", options) : helperMissing.call(depth0, "t", "labels.account_id", "Account ID:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</strong> ";
  if (helper = helpers.account_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.account_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "<br />\n    <strong>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.course_search_results")
  },data:data},helper ? helper.call(depth0, "labels.course_code1", "Course Code:", options) : helperMissing.call(depth0, "t", "labels.course_code1", "Course Code:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</strong> ";
  if (helper = helpers.course_code) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.course_code); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "<br />\n    </p>\n  </div>\n  <button id=\"restoreCourseBtn\" class=\"btn\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.course_search_results")
  },data:data},helper ? helper.call(depth0, "labels.restore_btn", "Restore", options) : helperMissing.call(depth0, "t", "labels.restore_btn", "Restore", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>&nbsp;&nbsp;<span>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.course_search_results")
  },data:data},helper ? helper.call(depth0, "info_text", "Enrollments to this course must be restored manually.", options) : helperMissing.call(depth0, "t", "info_text", "Enrollments to this course must be restored manually.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n</div>\n";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n<div class=\"alert alert-error\">\n  <p class=\"text-error no-spacing\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.course_search_results")
  },data:data},helper ? helper.call(depth0, "error_message", "A deleted course with that ID could not be found for this account.", options) : helperMissing.call(depth0, "t", "error_message", "A deleted course with that ID could not be found for this account.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n</div>\n";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n<div class=\"alert alert-success\">\n  <p class=\"lead\">\n  ";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " has been restored!\n  </p>\n  <div>\n    <strong>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.course_search_results")
  },data:data},helper ? helper.call(depth0, "successfull_restore.subtext", "What would you like to do next?", options) : helperMissing.call(depth0, "t", "successfull_restore.subtext", "What would you like to do next?", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</strong>\n    <div>\n      <a href=\"courses/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" id=\"viewCourse\" class=\"btn\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.course_search_results")
  },data:data},helper ? helper.call(depth0, "successful_restore.view_course", "View Course", options) : helperMissing.call(depth0, "t", "successful_restore.view_course", "View Course", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>  <a href=\"/courses/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/users\" id=\"addEnrollments\" class=\"btn\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.course_search_results")
  },data:data},helper ? helper.call(depth0, "successfull_restore.add_enrollments", "Add Enrollments", options) : helperMissing.call(depth0, "t", "successfull_restore.add_enrollments", "Add Enrollments", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n    </div>\n  </div>\n</div>\n";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n<div class=\"alert alert-block\">\n  <div class=\"h2\">\n    <span class=\"lead\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.course_search_results")
  },data:data},helper ? helper.call(depth0, "notdeleted_restore.header_subtext", "(Not Deleted)", options) : helperMissing.call(depth0, "t", "notdeleted_restore.header_subtext", "(Not Deleted)", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n    <p>\n    <strong>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.course_search_results")
  },data:data},helper ? helper.call(depth0, "labels.coures_id2", "Course ID:", options) : helperMissing.call(depth0, "t", "labels.coures_id2", "Course ID:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</strong> ";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " <br />\n    <strong>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.course_search_results")
  },data:data},helper ? helper.call(depth0, "labels.account_id2", "Account ID:", options) : helperMissing.call(depth0, "t", "labels.account_id2", "Account ID:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</strong> ";
  if (helper = helpers.account_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.account_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "<br />\n    <strong>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.course_search_results")
  },data:data},helper ? helper.call(depth0, "labels.course_code2", "Course Code:", options) : helperMissing.call(depth0, "t", "labels.course_code2", "Course Code:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</strong> ";
  if (helper = helpers.course_code) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.course_code); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "<br />\n    </p>\n  </div>\n\n  <div>\n    <div>\n      <a href=\"courses/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" id=\"viewCourse\" class=\"btn\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.course_search_results")
  },data:data},helper ? helper.call(depth0, "notdeleted_restore.view_course", "View Course", options) : helperMissing.call(depth0, "t", "notdeleted_restore.view_course", "View Course", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>  <a href=\"/courses/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/users\" id=\"addEnrollments\" class=\"btn\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.course_search_results")
  },data:data},helper ? helper.call(depth0, "notdeleted_restore.add_enrollments", "Add Enrollments", options) : helperMissing.call(depth0, "t", "notdeleted_restore.add_enrollments", "Add Enrollments", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n    </div>\n  </div>\n\n</div>\n";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, (depth0 && depth0.showRestore), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.showNotFound), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.showSuccessfullRestore), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.showNonDeletedCourse), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
  
      
  return templates['accounts/admin_tools/CourseSearchResults'];
});
