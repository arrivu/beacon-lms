define('jst/messages/sendForm', ["compiled/handlebars_helpers","i18n!messages.send_form"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['messages/sendForm'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<form action=\"";
  if (helper = helpers.location) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.location); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" method=\"post\" class=\"bootstrap-form message-send-form\">\n  <div class=\"fields\">\n    <label for=\"message-send-body\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("messages.send_form")
  },data:data},helper ? helper.call(depth0, "labels.message_body", "Message", options) : helperMissing.call(depth0, "t", "labels.message_body", "Message", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n    <textarea name=\"message\" class=\"input-xlarge\" id=\"message-send-body\"></textarea>\n\n    <input type=\"hidden\" name=\"from\" value=\"";
  if (helper = helpers.from) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.from); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" />\n    <input type=\"hidden\" name=\"subject\" value=\"";
  if (helper = helpers.subject) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.subject); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" />\n    <input type=\"hidden\" name=\"secure_id\" value=\"";
  if (helper = helpers.secureId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.secureId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" />\n    <input type=\"hidden\" name=\"message_id\" value=\"";
  if (helper = helpers.messageId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.messageId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" />\n  </div>\n\n  <div class=\"actions\">\n    <button type=\"submit\" class=\"btn btn-primary\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("messages.send_form")
  },data:data},helper ? helper.call(depth0, "labels.send_button", "Send", options) : helperMissing.call(depth0, "t", "labels.send_button", "Send", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n  </div>\n</form>\n\n";
  return buffer;
  });
  
      
  return templates['messages/sendForm'];
});
