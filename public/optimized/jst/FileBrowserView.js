define('jst/FileBrowserView', ["compiled/handlebars_helpers","compiled/util/registerTemplateCss","i18n!file_browser_view"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['FileBrowserView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<ul role=\"tree\" tabindex=\"0\" activedescendent=\"\" class=\"folderTree\"\n  aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("file_browser_view")
  },data:data},helper ? helper.call(depth0, "folder_tree_instructions", "Use the up and down arrow keys to navigate through the tree. Press right to expand folders, left to collapse, and enter to choose the selected item.", options) : helperMissing.call(depth0, "t", "folder_tree_instructions", "Use the up and down arrow keys to navigate through the tree. Press right to expand folders, left to collapse, and enter to choose the selected item.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n></ul>";
  return buffer;
  });
  
      
arguments[1]('FileBrowserView', ".folderTree{font-size:12px;}.folderTree:focus{outline:none;}.folderTree,.folderTree ul{margin:0;padding:0;list-style:none;}.folderTree li,.folderTree ul li{margin:0;padding:0;}.folderTree ul{margin-left:8px;}.folderTree li a{padding-bottom:2px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;white-space:nowrap;}.folderTree li a.active{background-color:#d6ecfc;}.folderTree .preview-thumbnail-holder{display:inline-block;width:42px;height:42px;padding-right:6px;}.folderTree .preview-thumbnail-holder .preview-thumbnail{max-width:100%;max-height:100%;}.folderTree .icon-folder:before{font-size:11px;}.folderTree i[class*=icon-],.folderTree i[class^=icon-]{color:#333333;}.folderTree .icon-mini-arrow-right{-webkit-transition:-webkit-transform 0.2s;transition:transform 0.2s;}.folderTree .expanded .icon-mini-arrow-right{-webkit-transform:rotate(90deg);transform:rotate(90deg);}");

  return templates['FileBrowserView'];
});
