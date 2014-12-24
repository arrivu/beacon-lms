define('jst/conversations/messageDetail', ["compiled/handlebars_helpers","i18n!conversations.message_detail"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['conversations/messageDetail'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "title=\"";
  if (helper = helpers.subject) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.subject); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n        ";
  if (helper = helpers.subject) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.subject); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n      ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        (";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.message_detail")
  },data:data},helper ? helper.call(depth0, "no_subject", "No subject", options) : helperMissing.call(depth0, "t", "no_subject", "No subject", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ")\n      ";
  return buffer;
  }

  buffer += "<div>\n  <div class=\"message-header\">\n    <b class=\"subject\" tabindex=\"-1\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.subject), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.subject), {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </b>\n\n    <ul class=\"message-detail-actions pull-right unstyled\">\n      <li>\n        <a href=\"#\"\n           class=\"icon-reply-2 reply-btn\"\n           title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.message_detail")
  },data:data},helper ? helper.call(depth0, "reply", "Reply", options) : helperMissing.call(depth0, "t", "reply", "Reply", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n           data-tooltip>\n          <span class=\"screenreader-only\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.message_detail")
  },data:data},helper ? helper.call(depth0, "reply", "Reply", options) : helperMissing.call(depth0, "t", "reply", "Reply", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n        </a>\n      </li>\n      <li>\n        <div class=\"inline-block\" role=\"application\">\n          <a href=\"#\"\n             role=\"button\"\n             data-kyle-menu-options='{\"appendMenuTo\": \"body\"}'\n             class=\"al-trigger\"\n             title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.message_detail")
  },data:data},helper ? helper.call(depth0, "more_options", "More options", options) : helperMissing.call(depth0, "t", "more_options", "More options", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n             data-tooltip>\n            <i class=\"icon-settings\"></i>\n            <i class=\"icon-mini-arrow-down\"></i>\n            <span class=\"screenreader-only\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.message_detail")
  },data:data},helper ? helper.call(depth0, "message_actions", "Message actions", options) : helperMissing.call(depth0, "t", "message_actions", "Message actions", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n          </a>\n          <ul class=\"al-options message-header-menu\">\n            <li>\n              <a href=\"#\" class=\"reply-all-btn\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.message_detail")
  },data:data},helper ? helper.call(depth0, "reply_all", "Reply all", options) : helperMissing.call(depth0, "t", "reply_all", "Reply all", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n            </li>\n            <li>\n              <a href=\"#\" class=\"forward-btn\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.message_detail")
  },data:data},helper ? helper.call(depth0, "forward", "Forward", options) : helperMissing.call(depth0, "t", "forward", "Forward", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n            </li>\n            <li>\n              <a href=\"#\" class=\"archive-btn\">";
  if (helper = helpers.archiveToggleMessage) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.archiveToggleMessage); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\n            </li>\n\n            <li><a href=\"#\" class=\"star-toggle-btn\">";
  if (helper = helpers.starToggleMessage) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.starToggleMessage); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></li>\n\n            <li>\n              <a href=\"#\" class=\"delete-btn\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.message_detail")
  },data:data},helper ? helper.call(depth0, "delete", "Delete", options) : helperMissing.call(depth0, "t", "delete", "Delete", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n            </li>\n          </ul>\n        </div>\n      </li>\n    </ul>\n  </div>\n\n  <ul class=\"message-content unstyled\"></ul>\n</div>\n";
  return buffer;
  });
  
      
  return templates['conversations/messageDetail'];
});
