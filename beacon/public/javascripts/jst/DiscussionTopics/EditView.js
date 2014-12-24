define('jst/DiscussionTopics/EditView', ["compiled/handlebars_helpers","i18n!discussion_topics.edit_view"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['DiscussionTopics/EditView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.title), {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  <div class=\"discussion-edit-header row-fluid\">\n    <div class=\"span4 offset8 text-right\">\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.published), {hash:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n  </div>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    <h1 class=\"screenreader-only\" style=\"display: inline\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h1>\n  ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <h1 class=\"screenreader-only\" style=\"display: inline\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussion_topics.edit_view")
  },data:data},helper ? helper.call(depth0, "page_header_title", "New Discussion", options) : helperMissing.call(depth0, "t", "page_header_title", "New Discussion", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h1>\n  ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <span id=\"topic-draft-state\" class=\"published-status published\">\n          <i class=\"icon-publish\"></i>\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussion_topics.edit_view")
  },data:data},helper ? helper.call(depth0, "buttons.published", "Published", options) : helperMissing.call(depth0, "t", "buttons.published", "Published", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </span>\n      ";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <span id=\"topic-draft-state\" class=\"published-status unpublished\">\n          <i class=\"icon-unpublished\"></i>\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussion_topics.edit_view")
  },data:data},helper ? helper.call(depth0, "buttons.not_published", "Not Published", options) : helperMissing.call(depth0, "t", "buttons.not_published", "Not Published", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </span>\n      ";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n<fieldset>\n\n  <div class=\"control-group\">\n    <label class=\"control-label\" for=\"discussion_attachment_uploaded_data\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussion_topics.edit_view")
  },data:data},helper ? helper.call(depth0, "attachment", "Attachment", options) : helperMissing.call(depth0, "t", "attachment", "Attachment", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n    <div class=\"controls\">\n      ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.attachments), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      <input type=\"file\"\n             name=\"attachment\"\n             ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.attachments), {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n             id=\"discussion_attachment_uploaded_data\" >\n    </div>\n  </div>\n\n</fieldset>\n";
  return buffer;
  }
function program11(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <div class=\"attachmentRow\">\n          <a href=\"";
  if (helper = helpers.url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\""
    + escapeExpression((helper = helpers.mimeClass || (depth0 && depth0.mimeClass),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0['content-type']), options) : helperMissing.call(depth0, "mimeClass", (depth0 && depth0['content-type']), options)))
    + "\">";
  if (helper = helpers.display_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.display_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\n          <button type=\"button\" class=\"removeAttachment close\" style=\"float:none\">×</button>\n        </div>\n      ";
  return buffer;
  }

function program13(depth0,data) {
  
  
  return "style=\"display:none\"";
  }

function program15(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <div class=\"control-group\">\n    <label class=\"control-label\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussion_topics.edit_view")
  },data:data},helper ? helper.call(depth0, "options", "Options", options) : helperMissing.call(depth0, "t", "options", "Options", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n    <div class=\"controls\">\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isTopic), {hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.contextIsCourse), {hash:{},inverse:self.noop,fn:self.program(18, program18, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.canModerate), {hash:{},inverse:self.noop,fn:self.program(21, program21, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.showAssignment), {hash:{},inverse:self.noop,fn:self.program(23, program23, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n  </div>\n  ";
  return buffer;
  }
function program16(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <label class=\"checkbox\" for=\"threaded\">\n          "
    + escapeExpression((helper = helpers.checkbox || (depth0 && depth0.checkbox),options={hash:{},data:data},helper ? helper.call(depth0, "threaded", options) : helperMissing.call(depth0, "checkbox", "threaded", options)))
    + "\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussion_topics.edit_view")
  },data:data},helper ? helper.call(depth0, "allow_threaded_replies", "Allow threaded replies", options) : helperMissing.call(depth0, "t", "allow_threaded_replies", "Allow threaded replies", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </label>\n      ";
  return buffer;
  }

function program18(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isAnnouncement), {hash:{},inverse:self.noop,fn:self.program(19, program19, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        <label class=\"checkbox\" for=\"require_initial_post\">\n          "
    + escapeExpression((helper = helpers.checkbox || (depth0 && depth0.checkbox),options={hash:{},data:data},helper ? helper.call(depth0, "require_initial_post", options) : helperMissing.call(depth0, "checkbox", "require_initial_post", options)))
    + "\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussion_topics.edit_view")
  },data:data},helper ? helper.call(depth0, "users_must_post_before_seeing_replies", "Users must post before seeing replies", options) : helperMissing.call(depth0, "t", "users_must_post_before_seeing_replies", "Users must post before seeing replies", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </label>\n      ";
  return buffer;
  }
function program19(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n          <label class=\"checkbox\" for=\"delay_posting\">\n            "
    + escapeExpression((helper = helpers.checkbox || (depth0 && depth0.checkbox),options={hash:{
    'checked': ((depth0 && depth0.delayed_post_at)),
    'class': ("element_toggler"),
    'aria-controls': ("discussion_topic_delay_post_container")
  },data:data},helper ? helper.call(depth0, "delay_posting", options) : helperMissing.call(depth0, "checkbox", "delay_posting", options)))
    + "\n            ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussion_topics.edit_view")
  },data:data},helper ? helper.call(depth0, "delay_posting", "Delay posting", options) : helperMissing.call(depth0, "t", "delay_posting", "Delay posting", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </label>\n          <label id=\"discussion_topic_delay_post_container\"\n                 style=\""
    + escapeExpression((helper = helpers.hiddenUnless || (depth0 && depth0.hiddenUnless),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.delayed_post_at), options) : helperMissing.call(depth0, "hiddenUnless", (depth0 && depth0.delayed_post_at), options)))
    + "\"\n                 class=\"checkbox\">\n            ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussion_topics.edit_view")
  },data:data},helper ? helper.call(depth0, "post_at", "Post At", options) : helperMissing.call(depth0, "t", "post_at", "Post At", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            <input type=\"text\"\n                   class=\"datetime_field input-medium\"\n                   name=\"delayed_post_at\"\n                   \n                   value=\""
    + escapeExpression((helper = helpers.datetimeFormatted || (depth0 && depth0.datetimeFormatted),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.delayed_post_at), false, options) : helperMissing.call(depth0, "datetimeFormatted", (depth0 && depth0.delayed_post_at), false, options)))
    + "\">\n          </label>\n        ";
  return buffer;
  }

function program21(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <label class=\"checkbox\" for=\"podcast_enabled\">\n          "
    + escapeExpression((helper = helpers.checkbox || (depth0 && depth0.checkbox),options={hash:{
    'checked': ((depth0 && depth0.podcast_url)),
    'class': ("element_toggler"),
    'aria-controls': ("podcast_has_student_posts_container")
  },data:data},helper ? helper.call(depth0, "podcast_enabled", options) : helperMissing.call(depth0, "checkbox", "podcast_enabled", options)))
    + "\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussion_topics.edit_view")
  },data:data},helper ? helper.call(depth0, "enable_podcast_feed", "Enable podcast feed", options) : helperMissing.call(depth0, "t", "enable_podcast_feed", "Enable podcast feed", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </label>\n\n        <label id=\"podcast_has_student_posts_container\"\n               style=\""
    + escapeExpression((helper = helpers.hiddenUnless || (depth0 && depth0.hiddenUnless),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.podcast_url), options) : helperMissing.call(depth0, "hiddenUnless", (depth0 && depth0.podcast_url), options)))
    + "\"\n               class=\"checkbox\" for=\"podcast_has_student_posts\">\n          "
    + escapeExpression((helper = helpers.checkbox || (depth0 && depth0.checkbox),options={hash:{},data:data},helper ? helper.call(depth0, "podcast_has_student_posts", options) : helperMissing.call(depth0, "checkbox", "podcast_has_student_posts", options)))
    + "\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussion_topics.edit_view")
  },data:data},helper ? helper.call(depth0, "include_replies_in_podcast_feed", "Include Replies in podcast feed", options) : helperMissing.call(depth0, "t", "include_replies_in_podcast_feed", "Include Replies in podcast feed", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </label>\n      ";
  return buffer;
  }

function program23(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <label class=\"checkbox\" for=\"use_for_grading\">\n          "
    + escapeExpression((helper = helpers.checkbox || (depth0 && depth0.checkbox),options={hash:{
    'id': ("use_for_grading"),
    'class': ("element_toggler"),
    'aria-controls': ("assignment_options"),
    'checked': ((depth0 && depth0.set_assignment))
  },data:data},helper ? helper.call(depth0, "assignment.set_assignment", options) : helperMissing.call(depth0, "checkbox", "assignment.set_assignment", options)))
    + "\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussion_topics.edit_view")
  },data:data},helper ? helper.call(depth0, "use_for_grading", "Graded", options) : helperMissing.call(depth0, "t", "use_for_grading", "Graded", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </label>\n      ";
  return buffer;
  }

function program25(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.isLargeRoster), {hash:{},inverse:self.noop,fn:self.program(26, program26, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.contextIsCourse), {hash:{},inverse:self.noop,fn:self.program(28, program28, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }
function program26(depth0,data) {
  
  
  return "\n    <div id=\"group_category_options\" class=\"control-group\"></div>\n  ";
  }

function program28(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <div id=\"availability_options\" style=\""
    + escapeExpression((helper = helpers.hiddenIf || (depth0 && depth0.hiddenIf),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.set_assignment), options) : helperMissing.call(depth0, "hiddenIf", (depth0 && depth0.set_assignment), options)))
    + "\">\n      <fieldset>\n        <div class=\"control-group\">\n          <label class=\"control-label\" for=\"delayed_post_at\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussion_topics.edit_view")
  },data:data},helper ? helper.call(depth0, "available_from", "Available From", options) : helperMissing.call(depth0, "t", "available_from", "Available From", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n          <div class=\"controls\">\n            <input type=\"text\"\n                   class=\"datetime_field input-medium\"\n                   name=\"delayed_post_at\"\n                   id=\"delayed_post_at\"\n                   \n                   value=\""
    + escapeExpression((helper = helpers.datetimeFormatted || (depth0 && depth0.datetimeFormatted),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.delayed_post_at), false, options) : helperMissing.call(depth0, "datetimeFormatted", (depth0 && depth0.delayed_post_at), false, options)))
    + "\">\n          </div>\n        </div>\n      </fieldset>\n\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isTopic), {hash:{},inverse:self.noop,fn:self.program(29, program29, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n  ";
  return buffer;
  }
function program29(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <fieldset>\n          <div class=\"control-group\">\n            <label class=\"control-label\" for=\"lock_at\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussion_topics.edit_view")
  },data:data},helper ? helper.call(depth0, "until", "Until", options) : helperMissing.call(depth0, "t", "until", "Until", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n            <div class=\"controls\">\n              <input type=\"text\"\n                     class=\"datetime_field input-medium\"\n                     name=\"lock_at\"\n                     id=\"lock_at\"\n                     \n                     value=\""
    + escapeExpression((helper = helpers.datetimeFormatted || (depth0 && depth0.datetimeFormatted),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.lock_at), false, options) : helperMissing.call(depth0, "datetimeFormatted", (depth0 && depth0.lock_at), false, options)))
    + "\">\n            </div>\n          </div>\n        </fieldset>\n      ";
  return buffer;
  }

function program31(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <div id=\"assignment_options\" style=\""
    + escapeExpression((helper = helpers.hiddenUnless || (depth0 && depth0.hiddenUnless),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.set_assignment), options) : helperMissing.call(depth0, "hiddenUnless", (depth0 && depth0.set_assignment), options)))
    + "\">\n    <fieldset>\n      <div class=\"control-group\">\n        <label class=\"control-label\" for=\"discussion_topic_assignment_points_possible\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussion_topics.edit_view")
  },data:data},helper ? helper.call(depth0, "points_possible", "Points Possible", options) : helperMissing.call(depth0, "t", "points_possible", "Points Possible", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n        <div class=\"controls\">\n          <input type=\"text\"\n                 id=\"discussion_topic_assignment_points_possible\"\n                 name=\"assignment[points_possible]\"\n                 class=\"input-small\"\n                 value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.assignment)),stack1 == null || stack1 === false ? stack1 : stack1.pointsPossible)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" />\n        </div>\n      </div>\n\n      <div id=\"grading_type_options\" class=\"control-group\"></div>\n\n      <div id=\"assignment_group_options\" class=\"control-group\"></div>\n\n      ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.isLargeRoster), {hash:{},inverse:self.noop,fn:self.program(32, program32, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </fieldset>\n\n    <hr>\n\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.differentiatedAssignmentsEnabled), {hash:{},inverse:self.noop,fn:self.program(34, program34, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    <div class='js-assignment-overrides'></div>\n  </div>\n";
  return buffer;
  }
function program32(depth0,data) {
  
  
  return "\n        <div id=\"peer_review_options\" class=\"control-group\"></div>\n      ";
  }

function program34(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      <div class=\"text-center pad-box-mini\" style=\"margin-bottom:10px\">\n        <span>\n          <em>\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussion_topics.edit_view"),
    'w0': ("<strong>$1</strong>")
  },data:data},helper ? helper.call(depth0, "only_visible_to_overrides_note", "Note: This discussion is *only* visible to the section(s) specified below:", options) : helperMissing.call(depth0, "t", "only_visible_to_overrides_note", "Note: This discussion is *only* visible to the section(s) specified below:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </em>\n        </span>\n      </div>\n    ";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, (depth0 && depth0.draftStateEnabled), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n\n<fieldset>\n  <div class=\"control-group\">\n    <label class=\"hidden-inline-text\" for=\"discussion-title\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussion_topics.edit_view")
  },data:data},helper ? helper.call(depth0, "topic_title", "Topic Title", options) : helperMissing.call(depth0, "t", "topic_title", "Topic Title", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n    <input type=\"text\"\n           id=\"discussion-title\"\n           name=\"title\"\n           placeholder=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussion_topics.edit_view")
  },data:data},helper ? helper.call(depth0, "topic_title", "Topic Title", options) : helperMissing.call(depth0, "t", "topic_title", "Topic Title", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n           value=\"";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n           maxlength=\"254\"\n           class=\"input-block-level\">\n  </div>\n  <div class=\"control-group\">\n      <div style=\"float: right;\">\n        <a href=\"#\" class=\"rte_switch_views_link\">\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussion_topics.edit_view")
  },data:data},helper ? helper.call(depth0, "#editor.switch_editor_html", "HTML Editor", options) : helperMissing.call(depth0, "t", "#editor.switch_editor_html", "HTML Editor", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </a>\n        <a href=\"#\" class=\"rte_switch_views_link\" style=\"display:none;\">\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussion_topics.edit_view")
  },data:data},helper ? helper.call(depth0, "#editor.switch_editor_rich_text", "Rich Content Editor", options) : helperMissing.call(depth0, "t", "#editor.switch_editor_rich_text", "Rich Content Editor", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </a>\n      </div>\n      <div style=\"clear:both;\"></div>\n      <textarea name=\"message\"\n                class=\"input-block-level\"\n                style=\"width: 100%; min-height: 200px;\">"
    + escapeExpression((helper = helpers.convertApiUserContent || (depth0 && depth0.convertApiUserContent),options={hash:{
    'forEditing': (1)
  },data:data},helper ? helper.call(depth0, (depth0 && depth0.message), options) : helperMissing.call(depth0, "convertApiUserContent", (depth0 && depth0.message), options)))
    + "</textarea>\n  </div>\n\n</fieldset>\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.canAttach), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<fieldset>\n\n  ";
  stack1 = (helper = helpers.ifAny || (depth0 && depth0.ifAny),options={hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.isTopic), (depth0 && depth0.contextIsCourse), (depth0 && depth0.canModerate), (depth0 && depth0.showAssignment), options) : helperMissing.call(depth0, "ifAny", (depth0 && depth0.isTopic), (depth0 && depth0.contextIsCourse), (depth0 && depth0.canModerate), (depth0 && depth0.showAssignment), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n</fieldset>\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isTopic), {hash:{},inverse:self.noop,fn:self.program(25, program25, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.showAssignment), {hash:{},inverse:self.noop,fn:self.program(31, program31, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n<div class=\"form-actions flush\">\n  <button type=\"submit\"\n          data-text-while-loading=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussion_topics.edit_view")
  },data:data},helper ? helper.call(depth0, "saving", "Saving...", options) : helperMissing.call(depth0, "t", "saving", "Saving...", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n          class=\"btn btn-primary\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussion_topics.edit_view")
  },data:data},helper ? helper.call(depth0, "save", "Save", options) : helperMissing.call(depth0, "t", "save", "Save", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n</div>\n";
  return buffer;
  });
  
      
  return templates['DiscussionTopics/EditView'];
});
