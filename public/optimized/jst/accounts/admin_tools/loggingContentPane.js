define('jst/accounts/admin_tools/loggingContentPane', ["compiled/handlebars_helpers","i18n!accounts.admin_tools.logging_content_pane"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['accounts/admin_tools/loggingContentPane'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <option value='#loggingAuthentication'>\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.logging_content_pane")
  },data:data},helper ? helper.call(depth0, "authentication", "Login / Logout Activity", options) : helperMissing.call(depth0, "t", "authentication", "Login / Logout Activity", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </option>\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <option value='#loggingGradeChange'>\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.logging_content_pane")
  },data:data},helper ? helper.call(depth0, "grade_change", "Grade Change Activity", options) : helperMissing.call(depth0, "t", "grade_change", "Grade Change Activity", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </option>\n    ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <option value='#loggingCourse'>\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.logging_content_pane")
  },data:data},helper ? helper.call(depth0, "course", "Course Activity", options) : helperMissing.call(depth0, "t", "course", "Course Activity", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </option>\n    ";
  return buffer;
  }

function program7(depth0,data) {
  
  
  return "\n<div id=\"loggingAuthentication\" class=\"loggingTypeContent\"></div>\n";
  }

function program9(depth0,data) {
  
  
  return "\n<div id=\"loggingGradeChange\" class=\"loggingTypeContent\"></div>\n";
  }

function program11(depth0,data) {
  
  
  return "\n<div id=\"loggingCourse\" class=\"loggingTypeContent\"></div>\n";
  }

  buffer += "<label class=\"control-label\" for=\"loggingType\">\n  <h4>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.logging_content_pane")
  },data:data},helper ? helper.call(depth0, "select_label", "Select a log type to search.", options) : helperMissing.call(depth0, "t", "select_label", "Select a log type to search.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h4>\n</label>\n\n<div class=\"controls\">\n  <select id=\"loggingType\">\n    <option value=\"default\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.logging_content_pane")
  },data:data},helper ? helper.call(depth0, "select_default", "Select a Log type", options) : helperMissing.call(depth0, "t", "select_default", "Select a Log type", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.authentication), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.grade_change), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.course), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </select>\n</div>\n<hr/>\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.authentication), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.grade_change), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.course), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
  
      
  return templates['accounts/admin_tools/loggingContentPane'];
});
