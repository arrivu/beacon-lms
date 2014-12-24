define('jst/content_migrations/ExternalToolContent', ["compiled/handlebars_helpers","i18n!content_migrations.external_tool_content"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['content_migrations/ExternalToolContent'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<div class=\"control-group externalToolLaunch\"></div>\n<div class=\"control-group content\">\n  <label class=\"control-label\"><strong>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.external_tool_content")
  },data:data},helper ? helper.call(depth0, "content", "Content", options) : helperMissing.call(depth0, "t", "content", "Content", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</strong></label>\n  <div class=\"controls selectContent\"></div>\n</div>\n";
  return buffer;
  });
  
      
  return templates['content_migrations/ExternalToolContent'];
});
