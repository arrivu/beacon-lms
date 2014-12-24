define('jst/accounts/admin_tools/gradeChangeLoggingResults', ["compiled/handlebars_helpers","i18n!accounts.admin_tools.grade_change_logging_results"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['accounts/admin_tools/gradeChangeLoggingResults'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <td>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.grade_change_logging_results")
  },data:data},helper ? helper.call(depth0, "date", "Date", options) : helperMissing.call(depth0, "t", "date", "Date", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</td>\n        <td>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.grade_change_logging_results")
  },data:data},helper ? helper.call(depth0, "time", "Time", options) : helperMissing.call(depth0, "t", "time", "Time", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</td>\n        <td>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.grade_change_logging_results")
  },data:data},helper ? helper.call(depth0, "from", "From", options) : helperMissing.call(depth0, "t", "from", "From", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</td>\n        <td>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.grade_change_logging_results")
  },data:data},helper ? helper.call(depth0, "To", "To", options) : helperMissing.call(depth0, "t", "To", "To", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</td>\n        <td>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.grade_change_logging_results")
  },data:data},helper ? helper.call(depth0, "Grader", "Grader", options) : helperMissing.call(depth0, "t", "Grader", "Grader", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</td>\n        <td>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.grade_change_logging_results")
  },data:data},helper ? helper.call(depth0, "Student", "Student", options) : helperMissing.call(depth0, "t", "Student", "Student", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</td>\n        <td>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.grade_change_logging_results")
  },data:data},helper ? helper.call(depth0, "Course", "Course", options) : helperMissing.call(depth0, "t", "Course", "Course", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</td>\n        <td>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.grade_change_logging_results")
  },data:data},helper ? helper.call(depth0, "Assignment", "Assignment", options) : helperMissing.call(depth0, "t", "Assignment", "Assignment", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</td>\n      </tr>\n    </thead>\n    <tbody class=\"collectionViewItems\"></tbody>\n  </table>\n  <div class=\"paginatedLoadingIndicator\"></div>\n\n";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n\n  <div class=\"alert alert-info\">\n    <p class=\"lead\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.grade_change_logging_results")
  },data:data},helper ? helper.call(depth0, "no_item_found", "No items found", options) : helperMissing.call(depth0, "t", "no_item_found", "No items found", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n  </div>\n  <div class=\"paginatedLoadingIndicator\"></div>\n\n";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.collection)),stack1 == null || stack1 === false ? stack1 : stack1.length), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
  
      
  return templates['accounts/admin_tools/gradeChangeLoggingResults'];
});
