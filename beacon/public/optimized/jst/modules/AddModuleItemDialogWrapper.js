define('jst/modules/AddModuleItemDialogWrapper', ["compiled/handlebars_helpers","i18n!modules.add_module_item_dialog_wrapper"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['modules/AddModuleItemDialogWrapper'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<div class=\"outlet\"></div>\n\n<div class=\"button-container\">\n  <button class=\"btn dialog_closer\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("modules.add_module_item_dialog_wrapper")
  },data:data},helper ? helper.call(depth0, "cancel", "Cancel", options) : helperMissing.call(depth0, "t", "cancel", "Cancel", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n  <button class=\"btn btn-primary\" data-text-while-loading=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("modules.add_module_item_dialog_wrapper")
  },data:data},helper ? helper.call(depth0, "creating", "Creating...", options) : helperMissing.call(depth0, "t", "creating", "Creating...", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" type=\"submit\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("modules.add_module_item_dialog_wrapper")
  },data:data},helper ? helper.call(depth0, "Save", "Save", options) : helperMissing.call(depth0, "t", "Save", "Save", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n</div>\n";
  return buffer;
  });
  
      
  return templates['modules/AddModuleItemDialogWrapper'];
});
