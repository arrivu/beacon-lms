define('jst/accounts/admin_tools/commMessageItem', ["compiled/handlebars_helpers","i18n!accounts.admin_tools.comm_message_item"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['accounts/admin_tools/commMessageItem'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      <td class='meta-data-label' tabindex=\"0\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.comm_message_item")
  },data:data},helper ? helper.call(depth0, "reply_to", "Reply to", options) : helperMissing.call(depth0, "t", "reply_to", "Reply to", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</td>\n      <td tabindex=\"0\">";
  if (helper = helpers.reply_to) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.reply_to); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n      ";
  return buffer;
  }

  buffer += "<div class=\"list-view border border-trbl\" data-message-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n  <header>\n    <span class=\"h6\" tabindex=\"0\">";
  if (helper = helpers.subject) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.subject); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n\n    <span class=\"label label-";
  if (helper = helpers.workflow_state) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.workflow_state); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" tabindex=\"0\">\n      ";
  if (helper = helpers.workflow_state) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.workflow_state); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n    </span>\n  </header>\n\n  <table class=\"message-meta-data\">\n    <tbody>\n    <tr>\n      <td class='meta-data-label' tabindex=\"0\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.comm_message_item")
  },data:data},helper ? helper.call(depth0, "to", "To", options) : helperMissing.call(depth0, "t", "to", "To", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</td>\n      <td tabindex=\"0\" class=\"message-to\">";
  if (helper = helpers.to) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.to); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n    </tr>\n    <tr>\n      <td class='meta-data-label' tabindex=\"0\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.comm_message_item")
  },data:data},helper ? helper.call(depth0, "from_name", "From", options) : helperMissing.call(depth0, "t", "from_name", "From", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</td>\n      <td tabindex=\"0\" class=\"message-from\">";
  if (helper = helpers.from) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.from); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n    </tr>\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.reply_to), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <tr>\n      <td class='meta-data-label' tabindex=\"0\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.comm_message_item")
  },data:data},helper ? helper.call(depth0, "created_at", "Created at", options) : helperMissing.call(depth0, "t", "created_at", "Created at", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</td>\n      <td tabindex=\"0\">"
    + escapeExpression((helper = helpers.datetimeFormatted || (depth0 && depth0.datetimeFormatted),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.created_at), options) : helperMissing.call(depth0, "datetimeFormatted", (depth0 && depth0.created_at), options)))
    + "</td>\n    </tr>\n    <tr>\n      <td class='meta-data-label' tabindex=\"0\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.comm_message_item")
  },data:data},helper ? helper.call(depth0, "sent_at", "Sent at", options) : helperMissing.call(depth0, "t", "sent_at", "Sent at", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</td>\n      <td tabindex=\"0\">"
    + escapeExpression((helper = helpers.datetimeFormatted || (depth0 && depth0.datetimeFormatted),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.sent_at), options) : helperMissing.call(depth0, "datetimeFormatted", (depth0 && depth0.sent_at), options)))
    + "</td>\n    </tr>\n    </tbody>\n  </table>\n\n  <pre class=\"message-body well\" tabindex=\"0\">\n    ";
  if (helper = helpers.body) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.body); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n  </pre>\n</div>\n";
  return buffer;
  });
  
      
  return templates['accounts/admin_tools/commMessageItem'];
});
