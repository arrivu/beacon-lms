define('jst/modules/ModuleItemView', ["compiled/handlebars_helpers","i18n!modules.module_item_view"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['modules/ModuleItemView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<div class=\"ig-row\">\n  <!-- temporary, anticipating font-icon -->\n  <span class=\"editable-show\" style=\"color: grey;padding: 10px 8px;position: absolute;\">:: </span>\n\n  <a href=\"";
  if (helper = helpers.html_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.html_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"ig-title ellipses indent-1\">\n    <!-- span class=\"type_icon\" title=\"Quiz\">\n      <i class=\"icon-document\" aria-label=\"Item type: Document\"></i>\n      <i class=\"icon-download\" aria-label=\"Item type: Download\"></i>\n      <i class=\"icon-discussion\" aria-label=\"Item type: Discussion\"></i>\n      <i class=\"icon-assignment\" aria-label=\"Item type: Assignment\"></i>\n      <i class=\"icon-quiz\" aria-label=\"Item type: Quiz\"></i>\n      <i class=\"icon-link\" aria-label=\"Item type: Link\"></i>\n    </span -->\n    <i class=\"icon-assignment\"></i> ";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n  </a>\n  <div class=\"ig-details row-fluid\">\n    <div class=\"span4 ellipses\"><strong>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("modules.module_item_view")
  },data:data},helper ? helper.call(depth0, "module_item.available", "Available", options) : helperMissing.call(depth0, "t", "module_item.available", "Available", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</strong> Nov 1</div>\n    <div class=\"span4 ellipses\"><strong>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("modules.module_item_view")
  },data:data},helper ? helper.call(depth0, "module_item.due", "Due", options) : helperMissing.call(depth0, "t", "module_item.due", "Due", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</strong> Nov 4, 2012</div>\n    <div class=\"span4 ellipses\">-/10 ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("modules.module_item_view")
  },data:data},helper ? helper.call(depth0, "module_item.points_abbreviated", "pts", options) : helperMissing.call(depth0, "t", "module_item.points_abbreviated", "pts", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n  </div>\n  <div class=\"ig-admin editable-show\">\n    <a class=\"ig-publish-btn\">\n      <i class=\"icon-unpublished\"></i>\n      <i class=\"icon-publish\"></i>\n    </a>\n\n    <div class=\"inline-block\">\n      <a href=\"#\" class=\"al-trigger\" role=\"button\">\n        <i class=\"icon-settings\"></i><i class=\"icon-mini-arrow-down\"></i>\n        <span class=\"screenreader-only\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("modules.module_item_view")
  },data:data},helper ? helper.call(depth0, "manage", "Manage", options) : helperMissing.call(depth0, "t", "manage", "Manage", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n      </a>\n      <ul class=\"al-options\">\n        <li><a href=\"#\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("modules.module_item_view")
  },data:data},helper ? helper.call(depth0, "button.edit", "Edit", options) : helperMissing.call(depth0, "t", "button.edit", "Edit", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></li>\n        <li><a href=\"#\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("modules.module_item_view")
  },data:data},helper ? helper.call(depth0, "button.delete", "Delete", options) : helperMissing.call(depth0, "t", "button.delete", "Delete", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></li>\n      </ul>\n    </div>\n  </div>\n</div>\n";
  return buffer;
  });
  
      
  return templates['modules/ModuleItemView'];
});
