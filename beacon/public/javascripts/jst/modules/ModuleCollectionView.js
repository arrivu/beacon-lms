define('jst/modules/ModuleCollectionView', ["compiled/handlebars_helpers","i18n!modules.module_collection_view"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['modules/ModuleCollectionView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "editable";
  }

  buffer += "<div class=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.editable), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n  <h2 class=\"page-header screenreader-only\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("modules.module_collection_view")
  },data:data},helper ? helper.call(depth0, "course_modules", "Course Modules", options) : helperMissing.call(depth0, "t", "course_modules", "Course Modules", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h2>\n  <div class=\"modules-toolbar\">\n    <div class=\"pull-right editable-show\">\n      <a href=\"#\" class=\"btn preview-modules-button\">\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("modules.module_collection_view")
  },data:data},helper ? helper.call(depth0, "button.preview", "Preview", options) : helperMissing.call(depth0, "t", "button.preview", "Preview", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </a>\n      <a href=\"#\" class=\"btn btn-primary add-module-button\">\n        <i class=\"icon-plus\"></i> ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("modules.module_collection_view")
  },data:data},helper ? helper.call(depth0, "header.module", "Module", options) : helperMissing.call(depth0, "t", "header.module", "Module", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </a>\n      <a href=\"#\" class=\"btn modules-settings-button\">\n        <i class=\"icon-settings\"></i><i class=\"icon-mini-arrow-down\"></i>\n      </a>\n    </div>\n    <input type=\"search\" placeholder=\"Search for module or item inside module\" class=\"module-search\" />\n  </div>\n  <div class=\"item-group-container modules collectionViewItems\"></div>\n</div>\n<!-- div class=\"paginatedLoadingIndicator\" style=\"display: none\"></div -->";
  return buffer;
  });
  
      
  return templates['modules/ModuleCollectionView'];
});
