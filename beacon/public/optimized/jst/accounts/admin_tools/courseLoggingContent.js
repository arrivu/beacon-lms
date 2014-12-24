define('jst/accounts/admin_tools/courseLoggingContent', ["compiled/handlebars_helpers","i18n!accounts.admin_tools.course_logging_content"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['accounts/admin_tools/courseLoggingContent'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<h3>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.course_logging_content")
  },data:data},helper ? helper.call(depth0, "course_activity", "Course Activity", options) : helperMissing.call(depth0, "t", "course_activity", "Course Activity", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h3>\n\n<form id=\"courseLoggingForm\" class='form-horizontal pad-box border border-trbl search-controls'>\n  <div id=\"courseCourseSearch\" class=\"control-group\"></div>\n  <div id=\"courseDateRangeSearch\"></div>\n\n  <div class=\"control-group\">\n    <div class=\"controls\">\n      <button type=\"submit\" class=\"btn btn-primary\" name=\"course_submit\">\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.course_logging_content")
  },data:data},helper ? helper.call(depth0, "find", "Find", options) : helperMissing.call(depth0, "t", "find", "Find", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </button>\n    </div>\n  </div>\n</form>\n\n<hr />\n\n<div id=\"courseLoggingSearchResults\"></div>\n";
  return buffer;
  });
  
      
  return templates['accounts/admin_tools/courseLoggingContent'];
});
