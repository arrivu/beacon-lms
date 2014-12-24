define('jst/groups/manage/_selfSignupHelp', ["compiled/handlebars_helpers","i18n!groups.manage.self_signup_help"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['groups/manage/_selfSignupHelp'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<a href=\"#\"\n  class=\"icon-question\"\n  title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.self_signup_help")
  },data:data},helper ? helper.call(depth0, "self_signup_description", "You can create sets of groups where students can sign up on their own. Students are still limited to being in only one group in the set, but this way students can organize themselves into groups instead of needing the teacher to do the work. Note that as long as this option is enabled, students can move themselves from one group to another.", options) : helperMissing.call(depth0, "t", "self_signup_description", "You can create sets of groups where students can sign up on their own. Students are still limited to being in only one group in the set, but this way students can organize themselves into groups instead of needing the teacher to do the work. Note that as long as this option is enabled, students can move themselves from one group to another.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n  aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.self_signup_help")
  },data:data},helper ? helper.call(depth0, "about_self_signup_groups", "About Self Sign-up Groups", options) : helperMissing.call(depth0, "t", "about_self_signup_groups", "About Self Sign-up Groups", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n  data-tooltip='{\"tooltipClass\":\"popover popover-padded\", \"position\":\"right\"}'></a>";
  return buffer;
  });
  
Handlebars.registerPartial('groups/manage/selfSignupHelp', templates['groups/manage/_selfSignupHelp']);

      
  return templates['groups/manage/_selfSignupHelp'];
});
