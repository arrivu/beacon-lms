define('jst/content_migrations/SelectContent', ["compiled/handlebars_helpers","i18n!content_migrations.select_content"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['content_migrations/SelectContent'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<ul role=\"tree\" tabindex=\"0\" aria-label='";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.select_content")
  },data:data},helper ? helper.call(depth0, "select_content_label", "Select content, Use the up and down arrow keys to navigate through the tree. Press right to expand and left to collapse.", options) : helperMissing.call(depth0, "t", "select_content_label", "Select content, Use the up and down arrow keys to navigate through the tree. Press right to expand and left to collapse.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'>\n  <li class=\"form-dialog-content\">\n</ul>\n\n<div class=\"form-controls\">\n  <input id=\"cancelSelect\" class=\"btn btn-default\" type=\"button\" value='";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.select_content")
  },data:data},helper ? helper.call(depth0, "cancel_btn", "Cancel", options) : helperMissing.call(depth0, "t", "cancel_btn", "Cancel", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'/>\n  <input id=\"selectContentBtn\" class=\"btn btn-primary\" type=\"submit\" value='";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.select_content")
  },data:data},helper ? helper.call(depth0, "select_content_btn", "Select Content", options) : helperMissing.call(depth0, "t", "select_content_btn", "Select Content", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "' disabled/>\n</div>\n";
  return buffer;
  });
  
      
  return templates['content_migrations/SelectContent'];
});
