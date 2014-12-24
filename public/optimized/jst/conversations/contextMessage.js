define('jst/conversations/contextMessage', ["compiled/handlebars_helpers","i18n!conversations.context_message"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['conversations/contextMessage'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <a class=\"context-more pull-right\" href=\"#\">\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isCondensed), {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </a>\n  ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.context_message")
  },data:data},helper ? helper.call(depth0, "labels.more", "more...", options) : helperMissing.call(depth0, "t", "labels.more", "more...", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.context_message")
  },data:data},helper ? helper.call(depth0, "labels.less", "less...", options) : helperMissing.call(depth0, "t", "labels.less", "less...", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;
  }

  buffer += "<input type=\"hidden\" name=\"included_messages[]\" value=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" />\n<div class=\"context-author pull-left\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.author)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n<div class=\"pull-right\">\n  <span class=\"context-date\">"
    + escapeExpression((helper = helpers.friendlyDatetime || (depth0 && depth0.friendlyDatetime),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.created_at), options) : helperMissing.call(depth0, "friendlyDatetime", (depth0 && depth0.created_at), options)))
    + "</span>\n  <a class=\"icon-x delete-btn\" href=\"#\" aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.context_message")
  },data:data},helper ? helper.call(depth0, "delete_message", "Delete message", options) : helperMissing.call(depth0, "t", "delete_message", "Delete message", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"></a>\n  </ul>\n</div>\n<div class=\"context-body\" aria-live=\"polite\">\n  ";
  if (helper = helpers.body) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.body); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isCondensable), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  return buffer;
  });
  
      
  return templates['conversations/contextMessage'];
});
