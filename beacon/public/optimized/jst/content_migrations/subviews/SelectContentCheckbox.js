define('jst/content_migrations/subviews/SelectContentCheckbox', ["compiled/handlebars_helpers","i18n!content_migrations.subviews.select_content_checkbox"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['content_migrations/subviews/SelectContentCheckbox'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<div class=\"radio\">\n  <label>\n    <input type=\"radio\" name=\"selective_import\" value=false>\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.subviews.select_content_checkbox")
  },data:data},helper ? helper.call(depth0, "select_all_content", "All content", options) : helperMissing.call(depth0, "t", "select_all_content", "All content", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </label>\n</div>\n\n<div class=\"radio\">\n  <label>\n    <input type=\"radio\" name=\"selective_import\" value=true>\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.subviews.select_content_checkbox")
  },data:data},helper ? helper.call(depth0, "select_specific_content", "Select specific content", options) : helperMissing.call(depth0, "t", "select_specific_content", "Select specific content", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </label>\n</div>\n\n";
  return buffer;
  });
  
      
  return templates['content_migrations/subviews/SelectContentCheckbox'];
});
