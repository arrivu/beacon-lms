define('jst/tinymce/InsertUpdateImageView', ["compiled/handlebars_helpers","compiled/util/registerTemplateCss","i18n!tinymce.insert_update_image_view"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['tinymce/InsertUpdateImageView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<div class=\"insertUpdateImage bootstrap-form form-horizontal\" >\n  <fieldset style=\"max-width: 597px;\">\n    <legend>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("tinymce.insert_update_image_view")
  },data:data},helper ? helper.call(depth0, "image_source", "Image Source", options) : helperMissing.call(depth0, "t", "image_source", "Image Source", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</legend>\n    <div class=\"ui-tabs-minimal imageSourceTabs\">\n      <ul>\n        <li><a href=\"#tabUrl\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("tinymce.insert_update_image_view")
  },data:data},helper ? helper.call(depth0, "url", "URL", options) : helperMissing.call(depth0, "t", "url", "URL", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></li>\n        <li><a href=\"#tabUploaded\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("tinymce.insert_update_image_view")
  },data:data},helper ? helper.call(depth0, "canvas", "Canvas", options) : helperMissing.call(depth0, "t", "canvas", "Canvas", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></li>\n        <li><a href=\"#tabFlickr\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("tinymce.insert_update_image_view")
  },data:data},helper ? helper.call(depth0, "flickr", "Flickr", options) : helperMissing.call(depth0, "t", "flickr", "Flickr", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></li>\n      </ul>\n      <div id=\"tabUrl\">\n        <input type=\"url\"\n               name=\"image[src]\"\n               class=\"input-xxlarge\"\n               placeholder=\"http://example.com/image.png\"\n               aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("tinymce.insert_update_image_view")
  },data:data},helper ? helper.call(depth0, "image_url_field_label", "Image URL", options) : helperMissing.call(depth0, "t", "image_url_field_label", "Image URL", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n               style=\"margin-bottom: 20px;\">\n      </div>\n      <ul class=\"folderTree insertUpdateImageTabpane\" id=\"tabUploaded\"></ul>\n      <div id=\"tabFlickr\">\n\n      </div>\n    </div>\n  </fieldset>\n  <fieldset>\n    <legend>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("tinymce.insert_update_image_view")
  },data:data},helper ? helper.call(depth0, "attributes", "Attributes", options) : helperMissing.call(depth0, "t", "attributes", "Attributes", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</legend>\n    <div class=\"control-group\">\n      <label class=\"control-label\" for=\"image_alt\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("tinymce.insert_update_image_view")
  },data:data},helper ? helper.call(depth0, "alt_text", "Alt text", options) : helperMissing.call(depth0, "t", "alt_text", "Alt text", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n      <div class=\"controls\">\n        <input type=\"text\"\n               class=\"input-xlarge\"\n               name=\"image[alt]\"\n               id=\"image_alt\"\n               aria-describedby=\"alt_text_description\">\n        <span><p class=\"help-block\" id=\"alt_text_description\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("tinymce.insert_update_image_view")
  },data:data},helper ? helper.call(depth0, "alt_help_text", "Describe the image to improve accessibility", options) : helperMissing.call(depth0, "t", "alt_help_text", "Describe the image to improve accessibility", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p></span>\n      </div>\n    </div>\n    <div class=\"control-group\">\n      <label class=\"control-label\" for=\"dimensions_controls\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("tinymce.insert_update_image_view")
  },data:data},helper ? helper.call(depth0, "dimensions", "Dimensions", options) : helperMissing.call(depth0, "t", "dimensions", "Dimensions", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n      <div class=\"controls\" id=\"dimensions_controls\" aria-describedby=\"aspect_ratio_note\">\n        <input class=\"span1\"\n               name=\"image[width]\"\n               type=\"text\"\n               aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("tinymce.insert_update_image_view")
  },data:data},helper ? helper.call(depth0, "image_width", "Image Width", options) : helperMissing.call(depth0, "t", "image_width", "Image Width", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n        x\n        <input class=\"span1\"\n               name=\"image[height]\"\n               type=\"text\"\n               aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("tinymce.insert_update_image_view")
  },data:data},helper ? helper.call(depth0, "image_height", "Image Height", options) : helperMissing.call(depth0, "t", "image_height", "Image Height", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n      <span><p class=\"help-block\" id=\"aspect_ratio_note\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("tinymce.insert_update_image_view")
  },data:data},helper ? helper.call(depth0, "dimension_help_text", "Aspect ratio will be preserved", options) : helperMissing.call(depth0, "t", "dimension_help_text", "Aspect ratio will be preserved", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p></span>\n      </div>\n    </div>\n  </fieldset>\n</div>\n";
  return buffer;
  });
  
      
arguments[1]('tinymce/InsertUpdateImageView', ".insertUpdateImage .insertUpdateImageTabpane{height:200px;overflow:auto;}.insertUpdateImage .checkbox.inline{white-space:nowrap;}.insertUpdateImage legend{margin-bottom:0px;}.insertUpdateImage legend+*{margin-top:20px;-webkit-margin-collapse:separate;}");

  return templates['tinymce/InsertUpdateImageView'];
});
