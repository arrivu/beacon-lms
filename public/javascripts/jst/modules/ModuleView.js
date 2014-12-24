define('jst/modules/ModuleView', ["compiled/handlebars_helpers","i18n!modules.module_view"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['modules/ModuleView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"pull-right\">\n  <div class=\"editable-show\">\n    <span class=\"prereqs\">\n      <strong>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("modules.module_view")
  },data:data},helper ? helper.call(depth0, "module.prerequisites", "Prerequisites", options) : helperMissing.call(depth0, "t", "module.prerequisites", "Prerequisites", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ":</strong> \n      Yadda yadda\n    </span>\n\n    <span class=\"module-published-button\">\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("modules.module_view")
  },data:data},helper ? helper.call(depth0, "module.published", "Published", options) : helperMissing.call(depth0, "t", "module.published", "Published", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " <i class=\"icon-publish\" aria-hidden=\"true\"></i>\n    </span>\n\n    <a href=\"#\" class=\"btn add-item-button\"><i class=\"icon-plus\"></i></a>\n    <a href=\"#\" class=\"btn module-settings-button\">\n      <i class=\"icon-settings\"></i><i class=\"icon-mini-arrow-down\"></i>\n    </a>\n  </div>\n</div>\n<h2 class=\"ig-header\">\n  <i class=\"icon-mini-arrow-right\"></i> ";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n</h2>\n<div class=\"module_items\"></div>";
  return buffer;
  });
  
      
  return templates['modules/ModuleView'];
});
