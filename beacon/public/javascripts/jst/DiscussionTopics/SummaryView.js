define('jst/DiscussionTopics/SummaryView', ["compiled/handlebars_helpers","i18n!discussion_topics.summary_view","jst/_avatar"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['DiscussionTopics/SummaryView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <div class=\"discussion-column\">\n    <span class=\"discussion-drag-handle\"\n          tabindex=\"0\"\n          data-tooltip\n          title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussion_topics.summary_view")
  },data:data},helper ? helper.call(depth0, "drag_up_or_down_to_reorder", "Drag up or down to reorder", options) : helperMissing.call(depth0, "t", "drag_up_or_down_to_reorder", "Drag up or down to reorder", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"></span>\n  </div>\n";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n  <label class=\"discussion-column\">\n    <input class=\"toggleSelected\" type=\"checkbox\" aria-label=\"";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.selected), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " >\n  </label>\n";
  return buffer;
  }
function program4(depth0,data) {
  
  
  return "checked";
  }

function program6(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.unread_count) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.unread_count); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program8(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.discussion_subentry_count) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.discussion_subentry_count); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program10(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <i data-tooltip\n           title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussion_topics.summary_view")
  },data:data},helper ? helper.call(depth0, "locked", "This topic is closed for comments", options) : helperMissing.call(depth0, "t", "locked", "This topic is closed for comments", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n           class=\"icon-lock\"></i>\n      ";
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <a href=\"";
  if (helper = helpers.podcast_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.podcast_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n           data-tooltip\n           title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussion_topics.summary_view")
  },data:data},helper ? helper.call(depth0, "topic_podcast_feed", "Topic Podcast Feed", options) : helperMissing.call(depth0, "t", "topic_podcast_feed", "Topic Podcast Feed", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"><i class=\"icon-rss\"></i></a>\n      ";
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <a href=\"";
  if (helper = helpers.url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n           data-tooltip\n           title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussion_topics.summary_view")
  },data:data},helper ? helper.call(depth0, "attached_file_name", "Attached: %{display_name}", options) : helperMissing.call(depth0, "t", "attached_file_name", "Attached: %{display_name}", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"><i class=\"icon-paperclip\"></i></a>\n      ";
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <i data-tooltip\n           title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussion_topics.summary_view")
  },data:data},helper ? helper.call(depth0, "this_topic_is_used_for_grading", "This topic is used for grading", options) : helperMissing.call(depth0, "t", "this_topic_is_used_for_grading", "This topic is used for grading", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n           class=\"icon-assignment\"></i>\n      ";
  return buffer;
  }

function program18(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <a class=\"discussion-author\" href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.author)),stack1 == null || stack1 === false ? stack1 : stack1.html_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.author)),stack1 == null || stack1 === false ? stack1 : stack1.display_name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n    ";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.permissions)),stack1 == null || stack1 === false ? stack1 : stack1.moderate), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.permissions)),stack1 == null || stack1 === false ? stack1 : stack1['delete']), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<div class=\"discussion-column image-block\">\n  <div class=\"image-block-image\">\n    ";
  stack1 = self.invokePartial(partials.avatar, 'avatar', (depth0 && depth0.author), helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n  <div class=\"image-block-content\">\n    <div class=\"discussion-unread-container\">\n      <div class=\"new-and-total-badge\">\n        <span class=\"new-items\"\n              data-tooltip\n              title=\"";
  if (helper = helpers.unread_count_tooltip) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.unread_count_tooltip); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.unread_count), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n        <span class=\"total-items\"\n              data-tooltip\n              title=\"";
  if (helper = helpers.reply_count_tooltip) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.reply_count_tooltip); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.discussion_subentry_count), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n      </div>\n    </div>\n    <div class=\"discussion-last-reply\">\n      "
    + escapeExpression((helper = helpers.friendlyDatetime || (depth0 && depth0.friendlyDatetime),options={hash:{
    'contextSensitive': (true)
  },data:data},helper ? helper.call(depth0, (depth0 && depth0.last_reply_at), options) : helperMissing.call(depth0, "friendlyDatetime", (depth0 && depth0.last_reply_at), options)))
    + "\n    </div>\n    <div class=\"discussion-info-icons\">\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.locked), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.podcast_url), {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n      ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.attachments), {hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.assignment_id), {hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n    <a href=\"";
  if (helper = helpers.html_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.html_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"discussion-title\" >";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.author), {hash:{},inverse:self.noop,fn:self.program(18, program18, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <div class=\"discussion-summary ellipsis\">";
  if (helper = helpers.summary) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.summary); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n  </div>\n</div>\n";
  return buffer;
  });
  
      
  return templates['DiscussionTopics/SummaryView'];
});
