define('jst/profiles/uploadFileView', ["compiled/handlebars_helpers","i18n!profiles.upload_file_view"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['profiles/uploadFileView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <div class=\"row-fluid\">\n    <div class=\"span6\">\n      <p>\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("profiles.upload_file_view")
  },data:data},helper ? helper.call(depth0, "crop_instructions", "To crop image, drag the selection and then click the \"Save\" button below.", options) : helperMissing.call(depth0, "t", "crop_instructions", "To crop image, drag the selection and then click the \"Save\" button below.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </p>\n    </div>\n    <div class=\"span6 text-center avatar-preview-wrapper\">\n      <img src=\"";
  if (helper = helpers.previewURL) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.previewURL); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"\" class=\"avatar-preview\" />\n    </div>\n  </div>\n";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <a class=\"select-photo-link\" href=\"#\">\n    <i class=\"icon-image icon-select-photo\"></i>\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("profiles.upload_file_view")
  },data:data},helper ? helper.call(depth0, "choose_a_picture", "choose a picture", options) : helperMissing.call(depth0, "t", "choose_a_picture", "choose a picture", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </a>\n\n  <input id=\"selected-photo\" type=\"file\" class=\"hidden\" accept=\"image/*\" />\n";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, (depth0 && depth0.hasPreview), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n<img src=\"";
  if (helper = helpers.previewURL) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.previewURL); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n     alt=\"\"\n     id=\"upload-fullsize-preview\"\n     class=\"hidden fullsize\" />\n\n<canvas id=\"upload-canvas\"\n        class=\"hidden\"\n        height=\"128\"\n        width=\"128\"></canvas>\n";
  return buffer;
  });
  
      
  return templates['profiles/uploadFileView'];
});
