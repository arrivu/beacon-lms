define('jst/conversations/message', ["compiled/handlebars_helpers","i18n!conversations.message"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['conversations/message'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    ";
  if (helper = helpers.subject) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.subject); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n  ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    (";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.message")
  },data:data},helper ? helper.call(depth0, "no_subject", "No subject", options) : helperMissing.call(depth0, "t", "no_subject", "No subject", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ")\n  ";
  return buffer;
  }

function program5(depth0,data) {
  
  
  return "active";
  }

function program7(depth0,data) {
  
  var stack1, helper, options;
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.message")
  },data:data},helper ? helper.call(depth0, "unstar_conversation", "Unstar conversation", options) : helperMissing.call(depth0, "t", "unstar_conversation", "Unstar conversation", options));
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }

function program9(depth0,data) {
  
  var stack1, helper, options;
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.message")
  },data:data},helper ? helper.call(depth0, "star_conversation", "Star conversation", options) : helperMissing.call(depth0, "t", "star_conversation", "Star conversation", options));
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }

function program11(depth0,data) {
  
  
  return "true";
  }

function program13(depth0,data) {
  
  
  return "false";
  }

function program15(depth0,data) {
  
  
  return "read";
  }

function program17(depth0,data) {
  
  var stack1, helper, options;
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.message")
  },data:data},helper ? helper.call(depth0, "mark_as_read", "Mark as read", options) : helperMissing.call(depth0, "t", "mark_as_read", "Mark as read", options));
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }

function program19(depth0,data) {
  
  var stack1, helper, options;
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.message")
  },data:data},helper ? helper.call(depth0, "mark_as_unread", "Mark as unread", options) : helperMissing.call(depth0, "t", "mark_as_unread", "Mark as unread", options));
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }

  buffer += "<b class=\"author\">"
    + escapeExpression((helper = helpers.list || (depth0 && depth0.list),options={hash:{
    'propName': ("name"),
    'limit': (2)
  },data:data},helper ? helper.call(depth0, (depth0 && depth0.participants), options) : helperMissing.call(depth0, "list", (depth0 && depth0.participants), options)))
    + "</b>\n\n<span class=\"date pull-right\">"
    + escapeExpression((helper = helpers.friendlyDatetime || (depth0 && depth0.friendlyDatetime),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.timestamp), options) : helperMissing.call(depth0, "friendlyDatetime", (depth0 && depth0.timestamp), options)))
    + "</span>\n\n<p class=\"subject\">\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.subject), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</p>\n\n<span class=\"message-count label\">\n  ";
  if (helper = helpers.message_count) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.message_count); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n  <span class=\"screenreader-only\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.message")
  },data:data},helper ? helper.call(depth0, "total_messages", "Total messages", options) : helperMissing.call(depth0, "t", "total_messages", "Total messages", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n</span>\n\n<div class=\"summary\">";
  if (helper = helpers.last_message) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.last_message); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n\n<ul class=\"message-actions unstyled\">\n  <li>\n    <a href=\"#\"\n       class=\"star-btn ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.starred), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n       title=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.starred), {hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n       aria-checked=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.starred), {hash:{},inverse:self.program(13, program13, data),fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n       role=\"checkbox\">\n      &#9734;\n      <span class=\"screenreader-only\">\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.message")
  },data:data},helper ? helper.call(depth0, "starred", "Starred", options) : helperMissing.call(depth0, "t", "starred", "Starred", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </span>\n    </a>\n  </li>\n  <li>\n    <a href=\"#\"\n       class=\"read-state ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.unread), {hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n       role=\"checkbox\"\n       aria-checked=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.unread), {hash:{},inverse:self.program(13, program13, data),fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n       title=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.unread), {hash:{},inverse:self.program(19, program19, data),fn:self.program(17, program17, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n      <span class=\"screenreader-only\">\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.message")
  },data:data},helper ? helper.call(depth0, "unread", "Unread", options) : helperMissing.call(depth0, "t", "unread", "Unread", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </span>\n    </a>\n  </li>\n</ul>\n\n<a href=\"#\" class=\"open-message\" role=\"button\">\n  ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.message")
  },data:data},helper ? helper.call(depth0, "open_message", "Open Message", options) : helperMissing.call(depth0, "t", "open_message", "Open Message", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</a>\n";
  return buffer;
  });
  
      
  return templates['conversations/message'];
});
