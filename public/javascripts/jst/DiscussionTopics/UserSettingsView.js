define('jst/DiscussionTopics/UserSettingsView', ["compiled/handlebars_helpers","i18n!discussion_topics.user_settings_view"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['DiscussionTopics/UserSettingsView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<fieldset>\n  <p><b>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussion_topics.user_settings_view")
  },data:data},helper ? helper.call(depth0, "my_settings", "My Settings", options) : helperMissing.call(depth0, "t", "my_settings", "My Settings", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</b></p>\n\n  <label class=\"checkbox\" for=\"manual_mark_as_read\">\n    "
    + escapeExpression((helper = helpers.checkbox || (depth0 && depth0.checkbox),options={hash:{},data:data},helper ? helper.call(depth0, "manual_mark_as_read", options) : helperMissing.call(depth0, "checkbox", "manual_mark_as_read", options)))
    + "\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussion_topics.user_settings_view")
  },data:data},helper ? helper.call(depth0, "manually_mark_as_read", "Manually mark posts as read", options) : helperMissing.call(depth0, "t", "manually_mark_as_read", "Manually mark posts as read", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </label>\n</fieldset>\n";
  return buffer;
  });
  
      
  return templates['DiscussionTopics/UserSettingsView'];
});
