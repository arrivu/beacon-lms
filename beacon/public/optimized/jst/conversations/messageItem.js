define('jst/conversations/messageItem', ["compiled/handlebars_helpers","i18n!conversations.message_item","jst/_avatar"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['conversations/messageItem'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return ",";
  }

function program3(depth0,data) {
  
  
  return "\n          <a href=\"#\" class=\"message-participants-toggle\"></a>\n        ";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<ul class=\"message-attachments\">\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.media_comment), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.attachments), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>\n";
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <li><a class=\"instructure_inline_media_comment\" data-media_comment_id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.media_comment)),stack1 == null || stack1 === false ? stack1 : stack1.media_id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.media_comment)),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n      <i class=\"icon-media\"></i> "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.media_comment)),stack1 == null || stack1 === false ? stack1 : stack1.display_name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n    </a></li>\n  ";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    <li><a href=\"";
  if (helper = helpers.url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.thumbnail_url), {hash:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  if (helper = helpers.display_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.display_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n    </a></li>\n  ";
  return buffer;
  }
function program9(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n        \n        <!--img class=\"message-attachment-thumbnail\" src=\"";
  if (helper = helpers.thumbnail_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.thumbnail_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" /-->\n        <i class=\"icon-paperclip\"></i>\n      ";
  return buffer;
  }

function program11(depth0,data) {
  
  
  return "\n        <i class=\"icon-paperclip\"></i>\n      ";
  }

  buffer += "<div class=\"row-fluid message-info\">\n  <div class=\"span8 user-info\">\n    ";
  stack1 = self.invokePartial(partials.avatar, 'avatar', (depth0 && depth0.author), helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <div class=\"message-author-and-participants\">\n      <b class=\"username\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.author)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</b>";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.participants)),stack1 == null || stack1 === false ? stack1 : stack1.length), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n      <span class=\"message-participants-wrapper\">\n        <span class=\"message-participants\"\n              aria-live=\"polite\"></span>\n\n        <div class=\"hidden\">\n          <span class=\"summarized-message-participants\">\n            "
    + escapeExpression((helper = helpers.list || (depth0 && depth0.list),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.summarizedParticipantNames), options) : helperMissing.call(depth0, "list", (depth0 && depth0.summarizedParticipantNames), options)))
    + "...\n          </span>\n          <span class=\"full-message-participants\">\n            "
    + escapeExpression((helper = helpers.list || (depth0 && depth0.list),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.participantNames), options) : helperMissing.call(depth0, "list", (depth0 && depth0.participantNames), options)))
    + "\n          </span>\n        </div>\n\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.summarizedParticipantNames), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </span>\n\n      <span class=\"context\">";
  if (helper = helpers.context_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.context_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n\n    </div>\n  </div>\n\n	<div class=\"span4 message-metadata\">\n		<div class=\"date pull-right\">\n			"
    + escapeExpression((helper = helpers.tEventToString || (depth0 && depth0.tEventToString),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.created_at), "long", "tiny", options) : helperMissing.call(depth0, "tEventToString", (depth0 && depth0.created_at), "long", "tiny", options)))
    + "\n		</div>\n\n    <ul class=\"actions pull-right unstyled\">\n      <li>\n        <a href=\"#\"\n           class=\"icon-reply-2 reply-btn\"\n           title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.message_item")
  },data:data},helper ? helper.call(depth0, "reply", "Reply", options) : helperMissing.call(depth0, "t", "reply", "Reply", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n           data-tooltip>\n          <span class=\"screenreader-only\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.message_item")
  },data:data},helper ? helper.call(depth0, "reply", "Reply", options) : helperMissing.call(depth0, "t", "reply", "Reply", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n        </a>\n      </li>\n\n      <li>\n        <div class=\"inline-block\">\n          <a href=\"#\"\n             data-kyle-menu-options='{\"appendMenuTo\": \"body\"}'\n             role=\"button\"\n             class=\"al-trigger\"\n             title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.message_item")
  },data:data},helper ? helper.call(depth0, "more_options", "More options", options) : helperMissing.call(depth0, "t", "more_options", "More options", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n             data-tooltip>\n            <i class=\"icon-settings\"></i>\n            <i class=\"icon-mini-arrow-down\"></i>\n            <span class=\"screenreader-only\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.message_item")
  },data:data},helper ? helper.call(depth0, "message_actions", "Message actions", options) : helperMissing.call(depth0, "t", "message_actions", "Message actions", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n          </a>\n          <ul class=\"al-options\">\n            <li>\n              <a href=\"#\" class=\"reply-all-btn\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.message_item")
  },data:data},helper ? helper.call(depth0, "reply_all", "Reply all", options) : helperMissing.call(depth0, "t", "reply_all", "Reply all", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n            </li>\n            <li>\n              <a href=\"#\" class=\"forward-btn\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.message_item")
  },data:data},helper ? helper.call(depth0, "forward", "Forward", options) : helperMissing.call(depth0, "t", "forward", "Forward", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n            </li>\n            <li>\n              <a href=\"#\" class=\"delete-btn\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.message_item")
  },data:data},helper ? helper.call(depth0, "delete", "Delete", options) : helperMissing.call(depth0, "t", "delete", "Delete", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n            </li>\n          </ul>\n        </div>\n      </li>\n    </ul>\n	</div>\n</div>\n\n<p>";
  if (helper = helpers.bodyHTML) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.bodyHTML); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.has_attachments), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
  
      
  return templates['conversations/messageItem'];
});
