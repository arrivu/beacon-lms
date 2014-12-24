define('jst/ExternalTools/IndexView', ["compiled/handlebars_helpers","i18n!external_tools.index_view"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['ExternalTools/IndexView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<h2 class=\"page-header\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("external_tools.index_view")
  },data:data},helper ? helper.call(depth0, "app_headder", "External Apps", options) : helperMissing.call(depth0, "t", "app_headder", "External Apps", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  <button class=\"btn view_tools_link lm pull-right\">\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("external_tools.index_view")
  },data:data},helper ? helper.call(depth0, "view_installed_tools", "View App Configurations", options) : helperMissing.call(depth0, "t", "view_installed_tools", "View App Configurations", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </button>\n  <button class=\"btn view_app_center_link lm pull-right\">\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("external_tools.index_view")
  },data:data},helper ? helper.call(depth0, "view_app_center", "View App Center", options) : helperMissing.call(depth0, "t", "view_app_center", "View App Center", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </button>\n  <button class=\"btn btn-primary add_tool_link lm pull-right\">\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("external_tools.index_view")
  },data:data},helper ? helper.call(depth0, "add_new_tool", "Add New App", options) : helperMissing.call(depth0, "t", "add_new_tool", "Add New App", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </button>\n</h2>\n\n<p class=\"well well-small\">\n  ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("external_tools.index_view")
  },data:data},helper ? helper.call(depth0, "external_tools_note", "Apps are an easy way to add new features to Canvas. They can be added to individual courses, or to all courses in an account. Once configured, you can link to them through course modules and create assignments for assessment tools.", options) : helperMissing.call(depth0, "t", "external_tools_note", "Apps are an easy way to add new features to Canvas. They can be added to individual courses, or to all courses in an account. Once configured, you can link to them through course modules and create assignments for assessment tools.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "<br/><br/>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("external_tools.index_view"),
    'w0': ("<a href=\"https://www.eduappcenter.com/\">$1</a>"),
    'w1': ("<a href=\"http://help.instructure.com/entries/20878626-lti-tools-and-examples\"> $1</a>")
  },data:data},helper ? helper.call(depth0, "external_tools_references", "*See some LTI tools* that work great with Canvas. You can also check out the **Canvas Community topics about LTI tools**", options) : helperMissing.call(depth0, "t", "external_tools_references", "*See some LTI tools* that work great with Canvas. You can also check out the **Canvas Community topics about LTI tools**", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</p>\n\n<div class=\"clearfix\" id=\"app_center_filter_wrapper\">\n  <input type=\"text\" id=\"app_center_filter\" class=\"input-large search-query pull-right\" placeholder=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("external_tools.index_view")
  },data:data},helper ? helper.call(depth0, "search_filter", "Filter by name", options) : helperMissing.call(depth0, "t", "search_filter", "Filter by name", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n  <ul class=\"nav nav-pills\" id=\"target-installed-state-items\">\n    <li data-installed-state=\"all\" class=\"active\"><a href=\"#\" data-toggle-installed-state=\"all\" role=\"tab\" aria-selected=\"true\" >";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("external_tools.index_view")
  },data:data},helper ? helper.call(depth0, "all", "All", options) : helperMissing.call(depth0, "t", "all", "All", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></li>\n    <li data-installed-state=\"not_installed\"><a href=\"#\" data-toggle-installed-state=\"not_installed\" role=\"tab\" aria-selected=\"false\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("external_tools.index_view")
  },data:data},helper ? helper.call(depth0, "not_installed", "Not Installed", options) : helperMissing.call(depth0, "t", "not_installed", "Not Installed", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></li>\n    <li data-installed-state=\"installed\"><a href=\"#\" data-toggle-installed-state=\"installed\" role=\"tab\" aria-selected=\"false\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("external_tools.index_view")
  },data:data},helper ? helper.call(depth0, "installed", "Installed", options) : helperMissing.call(depth0, "t", "installed", "Installed", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></li>\n  </ul>\n</div>\n\n<div data-view=\"appCenter\"></div>\n<div data-view=\"externalTools\"></div>\n<div data-view=\"appFull\"></div>\n";
  return buffer;
  });
  
      
  return templates['ExternalTools/IndexView'];
});
