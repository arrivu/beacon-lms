define('jst/accounts/admin_tools/commMessagesSearchOverview', ["compiled/handlebars_helpers","i18n!accounts.admin_tools.comm_messages_search_overview"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['accounts/admin_tools/commMessagesSearchOverview'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <p>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.comm_messages_search_overview"),
    'w0': ("<strong>$1</strong>")
  },data:data},helper ? helper.call(depth0, "messages_viewed", "Notifications sent to *%{user}* from *%{start_date}* to *%{end_date}*.", options) : helperMissing.call(depth0, "t", "messages_viewed", "Notifications sent to *%{user}* from *%{start_date}* to *%{end_date}*.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, (depth0 && depth0.user), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
  
      
  return templates['accounts/admin_tools/commMessagesSearchOverview'];
});
