define('jst/accounts/admin_tools/commMessagesContentPane', ["compiled/handlebars_helpers","i18n!accounts.admin_tools.comm_messages_content_pane"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['accounts/admin_tools/commMessagesContentPane'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<h3>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.comm_messages_content_pane")
  },data:data},helper ? helper.call(depth0, "view_notifications", "View Notifications", options) : helperMissing.call(depth0, "t", "view_notifications", "View Notifications", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h3>\n<p>\n  ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.comm_messages_content_pane")
  },data:data},helper ? helper.call(depth0, "search_info2", "To view all notifications sent to a Canvas user, select the user and date range for your search.", options) : helperMissing.call(depth0, "t", "search_info2", "To view all notifications sent to a Canvas user, select the user and date range for your search.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</p>\n\n<form id=\"commMessagesSearchForm\" class='form-horizontal'></form>\n<hr />\n<div id=\"commMessagesSearchOverview\"></div>\n\n<div id=\"commMessagesSearchResults\"></div>\n";
  return buffer;
  });
  
      
  return templates['accounts/admin_tools/commMessagesContentPane'];
});
