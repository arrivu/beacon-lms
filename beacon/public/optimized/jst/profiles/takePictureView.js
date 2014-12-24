define('jst/profiles/takePictureView', ["compiled/handlebars_helpers","i18n!profiles.take_picture_view"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['profiles/takePictureView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<div class=\"webcam-preview-wrapper\">\n  <img src=\"";
  if (helper = helpers.previewURL) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.previewURL); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"\" class=\"webcam-preview\" />\n\n  <button type=\"button\" class=\"btn retry-snapshot-btn\">\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("profiles.take_picture_view")
  },data:data},helper ? helper.call(depth0, "retry", "Retry", options) : helperMissing.call(depth0, "t", "retry", "Retry", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </button>\n</div>\n\n<div class=\"webcam-capture-wrapper\">\n  <div class=\"webcam-clip\">\n    <video autoplay class=\"webcam-live-preview pending\"></video>\n  </div>\n\n  <button type=\"button\" class=\"btn take-snapshot-btn\">\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("profiles.take_picture_view")
  },data:data},helper ? helper.call(depth0, "take_picture", "Take Picture", options) : helperMissing.call(depth0, "t", "take_picture", "Take Picture", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </button>\n</div>\n\n<canvas class=\"webcam-preview-staging-area hidden\"></canvas>\n";
  return buffer;
  });
  
      
  return templates['profiles/takePictureView'];
});
