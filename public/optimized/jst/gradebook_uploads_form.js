define('jst/gradebook_uploads_form', ["compiled/handlebars_helpers","i18n!gradebook_uploads_form"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['gradebook_uploads_form'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<form action=\"";
  if (helper = helpers.action) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.action); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" enctype=\"multipart/form-data\" id=\"upload_modal\" method=\"post\" title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("gradebook_uploads_form")
  },data:data},helper ? helper.call(depth0, "titles.upload_form", "Choose a CSV file to upload", options) : helperMissing.call(depth0, "t", "titles.upload_form", "Choose a CSV file to upload", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n  <input type=\"hidden\" name='authenticity_token' value=\"";
  if (helper = helpers.authenticityToken) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.authenticityToken); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n  <p aria-hidden=\"true\">\n    <a class=\"icon-question\"\n      target=\"_blank\"\n      href=\"http://guides.instructure.com/m/4152/l/55013-how-do-i-upload-changes-to-the-gradebook\">\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("gradebook_uploads_form")
  },data:data},helper ? helper.call(depth0, "what_should_csv_look_like", "What should the CSV file look like?", options) : helperMissing.call(depth0, "t", "what_should_csv_look_like", "What should the CSV file look like?", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </a>\n  </p>\n  <p style=\"font-size: 1.2em;\">\n    <label for=\"gradebook_upload_uploaded_data\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("gradebook_uploads_form")
  },data:data},helper ? helper.call(depth0, "labels.upload", "Choose a CSV file to upload:", options) : helperMissing.call(depth0, "t", "labels.upload", "Choose a CSV file to upload:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n    <input id=\"gradebook_upload_uploaded_data\" name=\"gradebook_upload[uploaded_data]\" type=\"file\" />\n  </p>\n\n  <button class=\"btn btn-primary\" type=\"submit\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("gradebook_uploads_form")
  },data:data},helper ? helper.call(depth0, "buttons.upload_data", "Upload Data", options) : helperMissing.call(depth0, "t", "buttons.upload_data", "Upload Data", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n</form>\n";
  return buffer;
  });
  
      
  return templates['gradebook_uploads_form'];
});
