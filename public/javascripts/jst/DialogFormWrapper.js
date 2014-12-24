define('jst/DialogFormWrapper', ["compiled/handlebars_helpers","i18n!dialog_form_wrapper"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['DialogFormWrapper'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<div class=\"outlet\"></div>\n\n<div class=\"button-container\">\n  <button class=\"btn dialog_closer\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("dialog_form_wrapper")
  },data:data},helper ? helper.call(depth0, "cancel", "Cancel", options) : helperMissing.call(depth0, "t", "cancel", "Cancel", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n  <button\n    class=\"btn btn-primary\"\n    data-text-while-loading='";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("dialog_form_wrapper")
  },data:data},helper ? helper.call(depth0, "saving", "Saving...", options) : helperMissing.call(depth0, "t", "saving", "Saving...", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'\n    type=\"submit\"\n  >";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("dialog_form_wrapper")
  },data:data},helper ? helper.call(depth0, "save_settings", "Save Settings", options) : helperMissing.call(depth0, "t", "save_settings", "Save Settings", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n\n";
  return buffer;
  });
  
      
  return templates['DialogFormWrapper'];
});
