define('jst/discussions/_entry_content', ["compiled/handlebars_helpers","i18n!discussions.entry_content","jst/_avatar"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['discussions/_entry_content'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "collapsable";
  }

function program3(depth0,data) {
  
  
  return "data-event=\"toggleCollapsed\"";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.author)),stack1 == null || stack1 === false ? stack1 : stack1.html_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-bypass";
  return buffer;
  }

function program7(depth0,data) {
  
  
  return "unknown";
  }

function program9(depth0,data) {
  
  var stack1;
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.author)),stack1 == null || stack1 === false ? stack1 : stack1.url), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }
function program10(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.author)),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" ";
  return buffer;
  }

function program12(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.author)),stack1 == null || stack1 === false ? stack1 : stack1.display_name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program14(depth0,data) {
  
  var stack1, helper, options;
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussions.entry_content")
  },data:data},helper ? helper.call(depth0, "unknown_author", "Unknown Author", options) : helperMissing.call(depth0, "t", "unknown_author", "Unknown Author", options));
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }

function program16(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n          <li><a data-pushstate href=\"#entry-";
  if (helper = helpers.parent_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.parent_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"><i class=\"icon-replied\"></i> ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussions.entry_content")
  },data:data},helper ? helper.call(depth0, "go_to_parent", "Go To Parent", options) : helperMissing.call(depth0, "t", "go_to_parent", "Go To Parent", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></li>\n        ";
  return buffer;
  }

function program18(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n          <li><a href=\"#topic\" data-pushstate><i class=\"icon-discussion\"></i> ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussions.entry_content")
  },data:data},helper ? helper.call(depth0, "go_to_topic", "Go To Topic", options) : helperMissing.call(depth0, "t", "go_to_topic", "Go To Topic", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></li>\n        ";
  return buffer;
  }

function program20(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n          <li><a data-event=\"edit\" href=\"#\"><i class=\"icon-edit\"></i> ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussions.entry_content")
  },data:data},helper ? helper.call(depth0, "edit", "Edit", options) : helperMissing.call(depth0, "t", "edit", "Edit", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></li>\n          <li><a data-event=\"remove\" href=\"#\"><i class=\"icon-trash\"></i> ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussions.entry_content")
  },data:data},helper ? helper.call(depth0, "delete", "Delete", options) : helperMissing.call(depth0, "t", "delete", "Delete", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></li>\n        ";
  return buffer;
  }

function program22(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n          <li><a href=\"";
  if (helper = helpers.speedgraderUrl) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.speedgraderUrl); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"><i class=\"icon-check\"></i> ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussions.entry_content")
  },data:data},helper ? helper.call(depth0, "open_in_speedgrader", "Open in SpeedGrader", options) : helperMissing.call(depth0, "t", "open_in_speedgrader", "Open in SpeedGrader", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></li>\n        ";
  return buffer;
  }

function program24(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <div class=\"discussion-fyi\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussions.entry_content"),
    'w0': ("<a %{editor_href}>$1</a>")
  },data:data},helper ? helper.call(depth0, "edited_comment", "Edited by *%{editor.display_name}* on %{edited_at}", options) : helperMissing.call(depth0, "t", "edited_comment", "Edited by *%{editor.display_name}* on %{edited_at}", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n  ";
  return buffer;
  }

function program26(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <div class=\"comment_attachments\">\n      ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.attachments), {hash:{},inverse:self.noop,fn:self.program(27, program27, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n  ";
  return buffer;
  }
function program27(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <div><a href=\"";
  if (helper = helpers.url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\""
    + escapeExpression((helper = helpers.mimeClass || (depth0 && depth0.mimeClass),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0['content-type']), options) : helperMissing.call(depth0, "mimeClass", (depth0 && depth0['content-type']), options)))
    + "\" title=\"";
  if (helper = helpers.filename) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.filename); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.display_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.display_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></div>\n      ";
  return buffer;
  }

function program29(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n<div class=\"entry-controls hide-if-collapsed hide-if-replying\">\n  <div class=\"notification\" data-bind=\"notification\"></div>\n  <a class=\"discussion-reply-action entry-control\"\n     data-event=\"addReply\"\n     href=\"#\">\n    <i class=\"icon-replied\"></i>\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussions.entry_content")
  },data:data},helper ? helper.call(depth0, "write_a_reply", "Reply", options) : helperMissing.call(depth0, "t", "write_a_reply", "Reply", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </a>\n</div>\n";
  return buffer;
  }

  buffer += "<header class=\"entry-header discussion-section admin-link-hover-area clearfix ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.collapsable), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.collapsable), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n  ";
  stack1 = self.invokePartial(partials.avatar, 'avatar', (depth0 && depth0.author), helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  <div class=\"discussion-header-content right-of-avatar\">\n    <div class=\"pull-left span4\">\n      <h2 class=\"discussion-title\">\n        <a ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.author)),stack1 == null || stack1 === false ? stack1 : stack1.html_url), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " class=\"author ";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 && depth0.author)),stack1 == null || stack1 === false ? stack1 : stack1.id), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussions.entry_content")
  },data:data},helper ? helper.call(depth0, "authors_name", "Author's name", options) : helperMissing.call(depth0, "t", "authors_name", "Author's name", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.author), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " class=\"author\">";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.author), {hash:{},inverse:self.program(14, program14, data),fn:self.program(12, program12, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n      </h2>\n      <div class=\"discussion-pubdate hide-if-collapsed\">"
    + escapeExpression((helper = helpers.friendlyDatetime || (depth0 && depth0.friendlyDatetime),options={hash:{
    'pubdate': (true),
    'contextSensitive': (true)
  },data:data},helper ? helper.call(depth0, (depth0 && depth0.created_at), options) : helperMissing.call(depth0, "friendlyDatetime", (depth0 && depth0.created_at), options)))
    + "</div>\n      <div class=\"show-if-collapsed discussion-subtitle summary ellipsis\">";
  if (helper = helpers.summary) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.summary); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n    </div>\n    <div class=\"admin-links hide-if-collapsed\">\n      <a role=\"button\" class=\"al-trigger dim-till-hover\" href=\"#\"><i\n          class=\"icon-settings standalone-icon\"></i><i class=\"icon-mini-arrow-down standalone-icon\"></i><span\n          class=\"screenreader-only\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussions.entry_content")
  },data:data},helper ? helper.call(depth0, "manage_discussion_entry", "Manage Discussion Entry", options) : helperMissing.call(depth0, "t", "manage_discussion_entry", "Manage Discussion Entry", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span></a>\n      <ul class=\"al-options\">\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.parent_id), {hash:{},inverse:self.program(18, program18, data),fn:self.program(16, program16, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.canModerate), {hash:{},inverse:self.noop,fn:self.program(20, program20, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.speedgraderUrl), {hash:{},inverse:self.noop,fn:self.program(22, program22, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </ul>\n    </div>\n    <div class=\"discussion-header-right\">\n      <div class=\"headerBadges show-if-collapsed\"></div>\n    </div>\n  </div>\n</header>\n<div class=\"discussion-section message_wrapper hide-if-collapsed\">\n  <span class=\"message-notification\" data-bind=\"messageNotification\"></span>\n  <div data-bind=\"message\" class=\"message user_content\">"
    + escapeExpression((helper = helpers.convertApiUserContent || (depth0 && depth0.convertApiUserContent),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.message), options) : helperMissing.call(depth0, "convertApiUserContent", (depth0 && depth0.message), options)))
    + "</div>\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.editor), {hash:{},inverse:self.noop,fn:self.program(24, program24, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.attachments), {hash:{},inverse:self.noop,fn:self.program(26, program26, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.inlineReplyLink), {hash:{},inverse:self.noop,fn:self.program(29, program29, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
  
Handlebars.registerPartial('discussions/entry_content', templates['discussions/_entry_content']);

      
  return templates['discussions/_entry_content'];
});
