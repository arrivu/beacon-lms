define('jst/content_migrations/subviews/ExternalToolLaunch', ["compiled/handlebars_helpers","i18n!content_migrations.subviews.external_tool_launch"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['content_migrations/subviews/ExternalToolLaunch'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<label class=\"control-label\" for=\"externalToolLaunch\"><strong>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.subviews.external_tool_launch")
  },data:data},helper ? helper.call(depth0, "course", "Course", options) : helperMissing.call(depth0, "t", "course", "Course", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</strong></label>\n<div class=\"controls\">\n  <button id=\"externalToolLaunch\" class=\"btn\" type=\"button\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.subviews.external_tool_launch")
  },data:data},helper ? helper.call(depth0, "find_a_course", "Find a Course", options) : helperMissing.call(depth0, "t", "find_a_course", "Find a Course", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n  <span class='file_name'></span>\n</div>";
  return buffer;
  });
  
      
  return templates['content_migrations/subviews/ExternalToolLaunch'];
});
