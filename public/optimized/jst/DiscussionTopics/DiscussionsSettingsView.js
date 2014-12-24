define('jst/DiscussionTopics/DiscussionsSettingsView', ["compiled/handlebars_helpers","i18n!discussion_topics.discussions_settings_view"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['DiscussionTopics/DiscussionsSettingsView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<fieldset>\n  <p role=\"heading\" aria-level=\"3\"><b>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussion_topics.discussions_settings_view")
  },data:data},helper ? helper.call(depth0, "my_settings", "My Settings", options) : helperMissing.call(depth0, "t", "my_settings", "My Settings", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</b></p>\n\n  <label class=\"checkbox\" for=\"manual_mark_as_read\">\n    "
    + escapeExpression((helper = helpers.checkbox || (depth0 && depth0.checkbox),options={hash:{},data:data},helper ? helper.call(depth0, "manual_mark_as_read", options) : helperMissing.call(depth0, "checkbox", "manual_mark_as_read", options)))
    + "\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussion_topics.discussions_settings_view")
  },data:data},helper ? helper.call(depth0, "manually_mark_as_read", "Manually mark posts as read", options) : helperMissing.call(depth0, "t", "manually_mark_as_read", "Manually mark posts as read", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </label>\n</fieldset>\n\n<hr />\n\n<p role=\"heading\" aria-level=\"3\"><b>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussion_topics.discussions_settings_view")
  },data:data},helper ? helper.call(depth0, "student_settings", "Student Settings", options) : helperMissing.call(depth0, "t", "student_settings", "Student Settings", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</b></p>\n\n<fieldset>\n  <label class=\"checkbox\" for=\"allow_student_discussion_topics\">\n    "
    + escapeExpression((helper = helpers.checkbox || (depth0 && depth0.checkbox),options={hash:{},data:data},helper ? helper.call(depth0, "allow_student_discussion_topics", options) : helperMissing.call(depth0, "checkbox", "allow_student_discussion_topics", options)))
    + "\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussion_topics.discussions_settings_view")
  },data:data},helper ? helper.call(depth0, "allow_student_topics", "Create discussion topics", options) : helperMissing.call(depth0, "t", "allow_student_topics", "Create discussion topics", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </label>\n  <label class=\"checkbox\" for=\"allow_student_discussion_editing\">\n    "
    + escapeExpression((helper = helpers.checkbox || (depth0 && depth0.checkbox),options={hash:{},data:data},helper ? helper.call(depth0, "allow_student_discussion_editing", options) : helperMissing.call(depth0, "checkbox", "allow_student_discussion_editing", options)))
    + "\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussion_topics.discussions_settings_view")
  },data:data},helper ? helper.call(depth0, "allow_student_discussion_editing", "Edit and delete their own posts", options) : helperMissing.call(depth0, "t", "allow_student_discussion_editing", "Edit and delete their own posts", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </label>\n  <label class=\"checkbox\" for=\"allow_student_forum_attachments\">\n    "
    + escapeExpression((helper = helpers.checkbox || (depth0 && depth0.checkbox),options={hash:{},data:data},helper ? helper.call(depth0, "allow_student_forum_attachments", options) : helperMissing.call(depth0, "checkbox", "allow_student_forum_attachments", options)))
    + "\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussion_topics.discussions_settings_view")
  },data:data},helper ? helper.call(depth0, "attach_files", "Attach files to discussions", options) : helperMissing.call(depth0, "t", "attach_files", "Attach files to discussions", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </label>\n</fieldset>\n";
  return buffer;
  });
  
      
  return templates['DiscussionTopics/DiscussionsSettingsView'];
});
