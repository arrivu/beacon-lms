define('jst/accounts/admin_tools/gradeChangeLoggingContent', ["compiled/handlebars_helpers","i18n!accounts.admin_tools.grade_change_logging_content"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['accounts/admin_tools/gradeChangeLoggingContent'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<h3>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.grade_change_logging_content")
  },data:data},helper ? helper.call(depth0, "grade_change_activity", "Grade Change Activity", options) : helperMissing.call(depth0, "t", "grade_change_activity", "Grade Change Activity", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h3>\n\n<form id=\"gradeChangeLoggingForm\" class='form-horizontal pad-box border border-trbl search-controls'>\n  <div id=\"gradeChangeGraderSearch\" class=\"control-group\"></div>\n  <div id=\"gradeChangeStudentSearch\" class=\"control-group\"></div>\n\n  <div class=\"control-group\">\n    <div class=\"controls\">\n      <input type=\"text\" id=\"gradeChangeCourseSearch\" class=\"\" name=\"course_id\" placeholder=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.grade_change_logging_content")
  },data:data},helper ? helper.call(depth0, "message_course_id", "Course Id", options) : helperMissing.call(depth0, "t", "message_course_id", "Course Id", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" maxlength=\"50\" />\n    </div>\n  </div>\n\n  <div class=\"control-group\">\n    <div class=\"controls\">\n      <input type=\"text\" id=\"gradeChangeAssignmentSearch\" class=\"\" name=\"assignment_id\" placeholder=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.grade_change_logging_content")
  },data:data},helper ? helper.call(depth0, "message_assignment_id", "Assignment Id", options) : helperMissing.call(depth0, "t", "message_assignment_id", "Assignment Id", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" maxlength=\"50\" />\n    </div>\n  </div>\n\n  <div id=\"gradeChangeDateRangeSearch\"></div>\n\n  <div class=\"control-group\">\n    <div class=\"controls\">\n      <button type=\"submit\" class=\"btn btn-primary\" name=\"gradeChange_submit\">\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.grade_change_logging_content")
  },data:data},helper ? helper.call(depth0, "find", "Find", options) : helperMissing.call(depth0, "t", "find", "Find", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </button>\n    </div>\n  </div>\n</form>\n\n<hr />\n\n<div id=\"gradeChangeLoggingSearchResults\"></div>\n";
  return buffer;
  });
  
      
  return templates['accounts/admin_tools/gradeChangeLoggingContent'];
});
