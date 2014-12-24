define('jst/accounts/admin_tools/AdminTools', ["compiled/handlebars_helpers","i18n!accounts.admin_tools.admin_tools"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['accounts/admin_tools/AdminTools'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <li><a href=\"#restoreContentPane\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.admin_tools")
  },data:data},helper ? helper.call(depth0, "tab_labels.restore_course", "Restore Courses", options) : helperMissing.call(depth0, "t", "tab_labels.restore_course", "Restore Courses", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></li>\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <li class=\"notifications\"><a href=\"#commMessagesPane\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.admin_tools")
  },data:data},helper ? helper.call(depth0, "view_messages", "View Notifications", options) : helperMissing.call(depth0, "t", "view_messages", "View Notifications", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></li>\n    ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <li class=\"logging\"><a href=\"#loggingPane\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.admin_tools")
  },data:data},helper ? helper.call(depth0, "tab_labels.admin_tools_logging", "Logging", options) : helperMissing.call(depth0, "t", "tab_labels.admin_tools_logging", "Logging", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></li>\n    ";
  return buffer;
  }

function program7(depth0,data) {
  
  
  return "\n    <div id=\"restoreContentPane\"></div>\n    ";
  }

function program9(depth0,data) {
  
  
  return "\n    <div id=\"commMessagesPane\"></div>\n    ";
  }

function program11(depth0,data) {
  
  
  return "\n    <div id=\"loggingPane\"></div>\n    ";
  }

  buffer += "<div id=\"adminToolsTabs\">\n  <ul id=\"adminToolsTabNav\">\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.courseRestore), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.viewMessages), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.logging), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </ul>\n  <div id=\"adminToolsTabPanes\">\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.courseRestore), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.viewMessages), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.logging), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n</div>\n";
  return buffer;
  });
  
      
  return templates['accounts/admin_tools/AdminTools'];
});
