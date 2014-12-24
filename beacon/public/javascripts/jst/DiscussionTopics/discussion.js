define('jst/DiscussionTopics/discussion', ["compiled/handlebars_helpers","i18n!discussion_topics.discussion","jst/assignments/_available_date_description"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['DiscussionTopics/discussion'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.published), {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "discussion-published";
  }

function program4(depth0,data) {
  
  
  return "discussion-unpublished";
  }

function program6(depth0,data) {
  
  
  return "\n      <div class=\"draggable-handle\">\n        <i class=\"icon-drag-handle\"></i>\n      </div>\n    ";
  }

function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.assignment)),stack1 == null || stack1 === false ? stack1 : stack1.peer_reviews), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        <i class=\"icon-assignment\" aria-hidden=\"true\"></i>\n      ";
  return buffer;
  }
function program9(depth0,data) {
  
  
  return "\n          <i class=\"icon-peer-review\" aria-hidden=\"true\"></i>\n        ";
  }

function program11(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n          <span class=\"screenreader-only\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussion_topics.discussion")
  },data:data},helper ? helper.call(depth0, "graded_discussion", "Graded discussion:", options) : helperMissing.call(depth0, "t", "graded_discussion", "Graded discussion:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n        ";
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.closed), {hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;
  }
function program14(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n          ";
  stack1 = self.invokePartial(partials['assignments/available_date_description'], 'assignments/available_date_description', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.assignment)),stack1 == null || stack1 === false ? stack1 : stack1.due_at), {hash:{},inverse:self.program(19, program19, data),fn:self.program(17, program17, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;
  }
function program17(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n          <span class=\"discussion-date-type\">\n            ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussion_topics.discussion")
  },data:data},helper ? helper.call(depth0, "due", "Due", options) : helperMissing.call(depth0, "t", "due", "Due", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </span>\n          <span "
    + escapeExpression((helper = helpers.contextSensitiveDatetimeTitle || (depth0 && depth0.contextSensitiveDatetimeTitle),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.assignment)),stack1 == null || stack1 === false ? stack1 : stack1.due_at), options) : helperMissing.call(depth0, "contextSensitiveDatetimeTitle", ((stack1 = (depth0 && depth0.assignment)),stack1 == null || stack1 === false ? stack1 : stack1.due_at), options)))
    + ">\n            "
    + escapeExpression((helper = helpers.datetimeFormatted || (depth0 && depth0.datetimeFormatted),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.assignment)),stack1 == null || stack1 === false ? stack1 : stack1.due_at), options) : helperMissing.call(depth0, "datetimeFormatted", ((stack1 = (depth0 && depth0.assignment)),stack1 == null || stack1 === false ? stack1 : stack1.due_at), options)))
    + "\n          </span>\n        ";
  return buffer;
  }

function program19(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussion_topics.discussion")
  },data:data},helper ? helper.call(depth0, "no_due_date", "No Due Date", options) : helperMissing.call(depth0, "t", "no_due_date", "No Due Date", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }

function program21(depth0,data) {
  
  
  return " data-view=\"publishIcon\" ";
  }

function program23(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussion_topics.discussion")
  },data:data},helper ? helper.call(depth0, "user_subscribed", "You are subscribed to this topic. Click to unsubscribe.", options) : helperMissing.call(depth0, "t", "user_subscribed", "You are subscribed to this topic. Click to unsubscribe.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          ";
  return buffer;
  }

function program25(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussion_topics.discussion")
  },data:data},helper ? helper.call(depth0, "user_unsubscribed", "You are not subscribed to this topic. Click to subscribe.", options) : helperMissing.call(depth0, "t", "user_unsubscribed", "You are not subscribed to this topic. Click to subscribe.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          ";
  return buffer;
  }

function program27(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <a href=\"#\" class=\"al-trigger\" role=\"button\" id=\"manage_link\">\n          <i class=\"icon-settings\"></i><i class=\"icon-mini-arrow-down\"></i>\n          <span class=\"screenreader-only\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussion_topics.discussion")
  },data:data},helper ? helper.call(depth0, "manage", "Manage", options) : helperMissing.call(depth0, "t", "manage", "Manage", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n        </a>\n\n        <ul class=\"al-options\">\n          ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.locked), {hash:{},inverse:self.program(30, program30, data),fn:self.program(28, program28, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          <li>\n            <a href=\"#\" class=\"icon-trash\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussion_topics.discussion")
  },data:data},helper ? helper.call(depth0, "delete", "Delete", options) : helperMissing.call(depth0, "t", "delete", "Delete", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n          </li>\n          ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.pinnable), {hash:{},inverse:self.noop,fn:self.program(33, program33, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.ENV)),stack1 == null || stack1 === false ? stack1 : stack1.permissions)),stack1 == null || stack1 === false ? stack1 : stack1.manage_content), {hash:{},inverse:self.noop,fn:self.program(40, program40, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </ul>\n      ";
  return buffer;
  }
function program28(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            <li>\n              <a href=\"#\" class=\"icon-lock\">\n                ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussion_topics.discussion")
  },data:data},helper ? helper.call(depth0, "open_to_comments", "Open to comments", options) : helperMissing.call(depth0, "t", "open_to_comments", "Open to comments", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n              </a>\n            </li>\n          ";
  return buffer;
  }

function program30(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.can_lock), {hash:{},inverse:self.noop,fn:self.program(31, program31, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          ";
  return buffer;
  }
function program31(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n              <li>\n                <a href=\"#\" class=\"icon-lock\">\n                  ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussion_topics.discussion")
  },data:data},helper ? helper.call(depth0, "close_for_comments", "Close for comments", options) : helperMissing.call(depth0, "t", "close_for_comments", "Close for comments", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </a>\n              </li>\n            ";
  return buffer;
  }

function program33(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <li>\n              <a href=\"#\" class=\"icon-pin\">\n                ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.pinned), {hash:{},inverse:self.program(36, program36, data),fn:self.program(34, program34, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n              </a>\n            </li>\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.pinned), {hash:{},inverse:self.noop,fn:self.program(38, program38, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          ";
  return buffer;
  }
function program34(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                  ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussion_topics.discussion")
  },data:data},helper ? helper.call(depth0, "unpin", "Unpin", options) : helperMissing.call(depth0, "t", "unpin", "Unpin", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                ";
  return buffer;
  }

function program36(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                  ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussion_topics.discussion")
  },data:data},helper ? helper.call(depth0, "pin", "Pin", options) : helperMissing.call(depth0, "t", "pin", "Pin", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                ";
  return buffer;
  }

function program38(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n              <li>\n                <a href=\"#\"\n                  class=\"move_item icon-updown\"\n                >";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussion_topics.discussion")
  },data:data},helper ? helper.call(depth0, "move", "Move To&hellip;", options) : helperMissing.call(depth0, "t", "move", "Move To&hellip;", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n              </li>\n            ";
  return buffer;
  }

function program40(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.discussion_topic_menu_tools), {hash:{},inverse:self.noop,fn:self.program(41, program41, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          ";
  return buffer;
  }
function program41(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n              <li>\n                <a class=\"menu_tool_link\" href=\"";
  if (helper = helpers.url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n                  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.icon_url), {hash:{},inverse:self.noop,fn:self.program(42, program42, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                  ";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n                </a>\n              </li>\n            ";
  return buffer;
  }
function program42(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "<img class=\"icon\" src=\"";
  if (helper = helpers.icon_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.icon_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" />";
  return buffer;
  }

  buffer += "<div class=\"discussion-content\" id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "_discussion_content\">\n  <div class=\"discussion-row";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.ENV)),stack1 == null || stack1 === false ? stack1 : stack1.permissions)),stack1 == null || stack1 === false ? stack1 : stack1.publish), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n    ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.permissions)),stack1 == null || stack1 === false ? stack1 : stack1.moderate), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    <div class=\"discussion-type\">\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.assignment), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n\n    <div class=\"discussion-title\">\n      <h3 class=\"inline-block discussion-title-block\">\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.assignment), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        <a href=\"";
  if (helper = helpers.html_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.html_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"title\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\n      </h3>\n      <small "
    + escapeExpression((helper = helpers.contextSensitiveDatetimeTitle || (depth0 && depth0.contextSensitiveDatetimeTitle),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.last_reply_at), options) : helperMissing.call(depth0, "contextSensitiveDatetimeTitle", (depth0 && depth0.last_reply_at), options)))
    + ">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussion_topics.discussion")
  },data:data},helper ? helper.call(depth0, "last_post_date", "Last post %{display_last_reply_at}", options) : helperMissing.call(depth0, "t", "last_post_date", "Last post %{display_last_reply_at}", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</small>\n    </div>\n\n    <div class=\"discussion-date-available\">\n      ";
  stack1 = helpers['with'].call(depth0, (depth0 && depth0.defaultDates), {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n\n    <div class=\"discussion-due-date\">\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.assignment), {hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n\n    <div class=\"discussion-status\">\n      <span id=\"publish-icon\" class=\"publish-icon\" ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.ENV)),stack1 == null || stack1 === false ? stack1 : stack1.DRAFT_STATE), {hash:{},inverse:self.noop,fn:self.program(21, program21, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "></span>\n      <a href=\"#\" data-view=\"toggleableSubscriptionIcon\" class=\"subscription-toggler\">\n        <span class=\"screenreader-only\">\n          ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.subscribed), {hash:{},inverse:self.program(25, program25, data),fn:self.program(23, program23, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </span>\n      </a>\n    </div>\n\n    <div class=\"discussion-unread-status\">\n      <div class=\"new-and-total-badge pull-right\">\n        <span class=\"new-items\"\n              title=\"";
  if (helper = helpers.unread_count_tooltip) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.unread_count_tooltip); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n              aria-hidden=\"true\"\n              data-tooltip>\n          ";
  if (helper = helpers.unread_count) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.unread_count); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n        </span>\n        <span class=\"screenreader-only\">\n          ";
  if (helper = helpers.unread_count_tooltip) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.unread_count_tooltip); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n        </span>\n\n        <div class=\"total-items\"\n             title=\"";
  if (helper = helpers.reply_count_tooltip) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.reply_count_tooltip); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n             aria-hidden=\"true\"\n             data-tooltip>\n          ";
  if (helper = helpers.discussion_subentry_count) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.discussion_subentry_count); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n        </div>\n        <div class=\"screenreader-only\">\n          ";
  if (helper = helpers.reply_count_tooltip) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.reply_count_tooltip); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n        </div>\n      </div>\n    </div>\n\n\n    <div class=\"discussion-actions\">\n      ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.permissions)),stack1 == null || stack1 === false ? stack1 : stack1['delete']), {hash:{},inverse:self.noop,fn:self.program(27, program27, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n  </div>\n</div>\n";
  return buffer;
  });
  
      
  return templates['DiscussionTopics/discussion'];
});
