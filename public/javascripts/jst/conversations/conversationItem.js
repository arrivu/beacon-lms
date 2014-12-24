define('jst/conversations/conversationItem', ["compiled/handlebars_helpers","i18n!conversations.conversation_item","jst/_avatar"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['conversations/conversationItem'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return " style=\"display:none\"";
  }

  buffer += "<li data-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"";
  if (helper = helpers.classes) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.classes); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " admin-link-hover-area\">\n  ";
  stack1 = self.invokePartial(partials.avatar, 'avatar', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  <a href=\"/conversations/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "?conversation[workflow_state]=unread\"\n     class=\"action_mark_as_unread standard_action\"\n     data-track-category=\"Thread Actions\"\n     data-track-action=\"Individual Left Side\"\n     data-track-label=\"Mark as Unread\"\n     role=\"button\"\n     title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.conversation_item")
  },data:data},helper ? helper.call(depth0, "inbox_actions.mark_as_unread", "Mark as Unread", options) : helperMissing.call(depth0, "t", "inbox_actions.mark_as_unread", "Mark as Unread", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.conversation_item")
  },data:data},helper ? helper.call(depth0, "inbox_actions.mark_as_unread", "Mark as Unread", options) : helperMissing.call(depth0, "t", "inbox_actions.mark_as_unread", "Mark as Unread", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n  <a href=\"/conversations/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "?conversation[workflow_state]=read\"\n     class=\"action_mark_as_read standard_action\"\n     data-track-category=\"Thread Actions\"\n     data-track-action=\"Individual Left Side\"\n     data-track-label=\"Mark as Read\"\n     role=\"button\"\n     title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.conversation_item")
  },data:data},helper ? helper.call(depth0, "inbox_actions.mark_as_read", "Mark as Read", options) : helperMissing.call(depth0, "t", "inbox_actions.mark_as_read", "Mark as Read", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.conversation_item")
  },data:data},helper ? helper.call(depth0, "inbox_actions.mark_as_read", "Mark as Read", options) : helperMissing.call(depth0, "t", "inbox_actions.mark_as_read", "Mark as Read", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n  <a href=\"/conversations/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "?conversation[starred]=true\"\n     class=\"action_star standard_action\"\n     data-track-category=\"Thread Actions\"\n     data-track-action=\"Individual Left Side\"\n     data-track-label=\"Star\"\n     role=\"button\"\n     title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.conversation_item")
  },data:data},helper ? helper.call(depth0, "inbox_actions.action_star", "Star", options) : helperMissing.call(depth0, "t", "inbox_actions.action_star", "Star", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.conversation_item")
  },data:data},helper ? helper.call(depth0, "inbox_actions.action_star", "Star", options) : helperMissing.call(depth0, "t", "inbox_actions.action_star", "Star", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n  <a href=\"/conversations/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "?conversation[starred]=false\"\n     class=\"action_unstar standard_action\"\n     data-track-category=\"Thread Actions\"\n     data-track-action=\"Individual Left Side\"\n     data-track-label=\"Unstar\"\n     role=\"button\"\n     title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.conversation_item")
  },data:data},helper ? helper.call(depth0, "inbox_actions.action_unstar", "Unstar", options) : helperMissing.call(depth0, "t", "inbox_actions.action_unstar", "Unstar", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.conversation_item")
  },data:data},helper ? helper.call(depth0, "inbox_actions.action_unstar", "Unstar", options) : helperMissing.call(depth0, "t", "inbox_actions.action_unstar", "Unstar", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n\n  <span class=\"date\">";
  if (helper = helpers.lastMessageAt) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.lastMessageAt); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n\n  <div class=\"conversation-summary\">\n    <img class=\"attachments\" src=\"/images/messages/attach-gray.png\" title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.conversation_item")
  },data:data},helper ? helper.call(depth0, "has_attachments", "This conversation has one or more attachments", options) : helperMissing.call(depth0, "t", "has_attachments", "This conversation has one or more attachments", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n    <img class=\"media_objects\" src=\"/images/messages/media-gray.png\" title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.conversation_item")
  },data:data},helper ? helper.call(depth0, "has_media", "This conversation has one or more media comments", options) : helperMissing.call(depth0, "t", "has_media", "This conversation has one or more media comments", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n    <span class=\"audience\">";
  if (helper = helpers.audienceHtml) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.audienceHtml); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n  </div>\n\n  <span class=\"count\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.hideCount), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">";
  if (helper = helpers.message_count) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.message_count); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n\n  <p>";
  if (helper = helpers.lastMessage) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.lastMessage); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n\n  <div class=\"admin-links\">\n    <button class=\"al-trigger btn btn-mini\" data-kyle-menu-options='{\"appendMenuTo\": \"#menu-wrapper\", \"notifyMenuActiveOnParent\": \"li.admin-link-hover-area\"}'>\n      <i class=\"icon-settings\"></i><i class=\"icon-mini-arrow-down\"></i>\n      <div class=\"screenreader-only\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.conversation_item")
  },data:data},helper ? helper.call(depth0, "inbox_actions_description", "Message Actions Menu", options) : helperMissing.call(depth0, "t", "inbox_actions_description", "Message Actions Menu", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n    </button>\n    <ul class=\"al-options\" data-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n      <li><a href=\"/conversations/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "?conversation[workflow_state]=unread\"\n             class=\"action_mark_as_unread standard_action\"\n             data-track-category=\"Thread Actions\"\n             data-track-action=\"Individual Gear\"\n             data-track-label=\"Mark as Unread\">\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.conversation_item")
  },data:data},helper ? helper.call(depth0, "inbox_actions.mark_as_unread", "Mark as Unread", options) : helperMissing.call(depth0, "t", "inbox_actions.mark_as_unread", "Mark as Unread", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </a></li>\n      <li><a href=\"/conversations/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "?conversation[workflow_state]=read\"\n             class=\"action_mark_as_read standard_action\"\n             data-track-category=\"Thread Actions\"\n             data-track-action=\"Individual Gear\"\n             data-track-label=\"Mark as Read\">\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.conversation_item")
  },data:data},helper ? helper.call(depth0, "inbox_actions.mark_as_read", "Mark as Read", options) : helperMissing.call(depth0, "t", "inbox_actions.mark_as_read", "Mark as Read", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </a></li>\n      <li><a href=\"/conversations/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "?conversation[starred]=false\"\n             class=\"action_unstar standard_action\"\n             data-track-category=\"Thread Actions\"\n             data-track-action=\"Individual Gear\"\n             data-track-label=\"Unstar\">\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.conversation_item")
  },data:data},helper ? helper.call(depth0, "inbox_actions.action_unstar", "Unstar", options) : helperMissing.call(depth0, "t", "inbox_actions.action_unstar", "Unstar", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </a></li>\n      <li><a href=\"/conversations/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "?conversation[starred]=true\"\n             class=\"action_star standard_action\"\n             data-track-category=\"Thread Actions\"\n             data-track-action=\"Individual Gear\"\n             data-track-label=\"Star\">\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.conversation_item")
  },data:data},helper ? helper.call(depth0, "inbox_actions.unstar", "Star", options) : helperMissing.call(depth0, "t", "inbox_actions.unstar", "Star", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </a></li>\n      <li><a href=\"/conversations/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "?conversation[subscribed]=0\"\n             class=\"action_unsubscribe standard_action\"\n             data-track-category=\"Thread Actions\"\n             data-track-action=\"Individual Gear\"\n             data-track-label=\"Unsubscribe\">\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.conversation_item")
  },data:data},helper ? helper.call(depth0, "inbox_actions.unsubscribe", "Unsubscribe", options) : helperMissing.call(depth0, "t", "inbox_actions.unsubscribe", "Unsubscribe", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </a></li>\n      <li><a href=\"/conversations/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "?conversation[subscribed]=1\"\n             class=\"action_subscribe standard_action\"\n             data-track-category=\"Thread Actions\"\n             data-track-action=\"Individual Gear\"\n             data-track-label=\"Subscribe\">\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.conversation_item")
  },data:data},helper ? helper.call(depth0, "inbox_actions.subscribe", "Subscribe", options) : helperMissing.call(depth0, "t", "inbox_actions.subscribe", "Subscribe", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </a></li>\n      <li><a href=\"/conversations/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "?conversation[workflow_state]=archived\"\n             class=\"action_archive standard_action\"\n             data-track-category=\"Thread Actions\"\n             data-track-action=\"Individual Gear\"\n             data-track-label=\"Archive\">\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.conversation_item")
  },data:data},helper ? helper.call(depth0, "inbox_actions.archive", "Archive", options) : helperMissing.call(depth0, "t", "inbox_actions.archive", "Archive", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </a></li>\n      <li><a href=\"/conversations/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "?conversation[workflow_state]=read\"\n             class=\"action_unarchive standard_action\"\n             data-track-category=\"Thread Actions\"\n             data-track-action=\"Individual Gear\"\n             data-track-label=\"Unarchive\">\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.conversation_item")
  },data:data},helper ? helper.call(depth0, "inbox_actions.unarchive", "Unarchive", options) : helperMissing.call(depth0, "t", "inbox_actions.unarchive", "Unarchive", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </a></li>\n      <li><a href=\"/conversations/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n             class=\"action_delete_all\">\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.conversation_item")
  },data:data},helper ? helper.call(depth0, "inbox_actions.delete", "Delete", options) : helperMissing.call(depth0, "t", "inbox_actions.delete", "Delete", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </a></li>\n    </ul>\n  </div>\n  <a href=\"/conversations/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"details_link\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.conversation_item")
  },data:data},helper ? helper.call(depth0, "read_more", "more...", options) : helperMissing.call(depth0, "t", "read_more", "more...", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n</li>\n";
  return buffer;
  });
  
      
  return templates['conversations/conversationItem'];
});
