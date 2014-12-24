define('jst/re_upload_submissions_form', ["compiled/handlebars_helpers","i18n!re_upload_submissions_form"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['re_upload_submissions_form'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<form action=\".\" enctype=\"multipart/form-data\" id=\"re_upload_submissions_form\" method=\"post\" style=\"display: none;\" title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("re_upload_submissions_form")
  },data:data},helper ? helper.call(depth0, "reupload_submission_files", "Re-Upload Submission Files", options) : helperMissing.call(depth0, "t", "reupload_submission_files", "Re-Upload Submission Files", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n  <input type=\"hidden\" name='authenticity_token' value=\"";
  if (helper = helpers.authenticityToken) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.authenticityToken); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n  <p>\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("re_upload_submissions_form")
  },data:data},helper ? helper.call(depth0, "upload_info", "If you made changes to the student submission files you downloaded before, just zip them back up and upload the zip with the form below. Students will see the modified files in their comments for the submission.", options) : helperMissing.call(depth0, "t", "upload_info", "If you made changes to the student submission files you downloaded before, just zip them back up and upload the zip with the form below. Students will see the modified files in their comments for the submission.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </p>\n  <p>\n    <i>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("re_upload_submissions_form")
  },data:data},helper ? helper.call(depth0, "upload_warning", "Make sure you don't change the names of the submission files so we can recognize them.", options) : helperMissing.call(depth0, "t", "upload_warning", "Make sure you don't change the names of the submission files so we can recognize them.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</i>\n  </p>\n  <input type=\"file\" name=\"submissions_zip\"/>\n  <button type=\"submit\" class=\"btn\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("re_upload_submissions_form")
  },data:data},helper ? helper.call(depth0, "buttons.upload", "Upload Files", options) : helperMissing.call(depth0, "t", "buttons.upload", "Upload Files", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n</form>\n";
  return buffer;
  });
  
      
  return templates['re_upload_submissions_form'];
});
