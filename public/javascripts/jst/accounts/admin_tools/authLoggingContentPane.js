define('jst/accounts/admin_tools/authLoggingContentPane', ["compiled/handlebars_helpers","i18n!accounts.admin_tools.auth_logging_content_pane"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['accounts/admin_tools/authLoggingContentPane'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<h3>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.auth_logging_content_pane")
  },data:data},helper ? helper.call(depth0, "auth_logging", "User Login / Logout Activity", options) : helperMissing.call(depth0, "t", "auth_logging", "User Login / Logout Activity", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h3>\n\n<form id=\"authLoggingSearchForm\" class='form-horizontal'></form>\n<hr />\n\n<div id=\"authLoggingSearchResults\"></div>\n\n";
  return buffer;
  });
  
      
  return templates['accounts/admin_tools/authLoggingContentPane'];
});
