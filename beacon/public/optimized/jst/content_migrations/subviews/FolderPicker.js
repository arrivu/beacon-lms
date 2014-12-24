define('jst/content_migrations/subviews/FolderPicker', ["compiled/handlebars_helpers","i18n!content_migrations.subviews.folder_picker"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['content_migrations/subviews/FolderPicker'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, functionType="function";


  buffer += "<label class=\"control-label\"><strong>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.subviews.folder_picker")
  },data:data},helper ? helper.call(depth0, "upload_to", "Upload to", options) : helperMissing.call(depth0, "t", "upload_to", "Upload to", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</strong></label>\n<div class=\"controls\">\n  <select class=\"migrationUploadTo span3\" name=\"migrationUploadTo\">\n    <option value=\"\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.subviews.folder_picker")
  },data:data},helper ? helper.call(depth0, "default_select_folder", "Select Folder", options) : helperMissing.call(depth0, "t", "default_select_folder", "Select Folder", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n    ";
  if (helper = helpers.folderOptions) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.folderOptions); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </select>\n</div>\n";
  return buffer;
  });
  
      
  return templates['content_migrations/subviews/FolderPicker'];
});
