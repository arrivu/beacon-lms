define('jst/assignments/ExternalContentHomeworkFileSubmissionView', ["compiled/handlebars_helpers","i18n!assignments.external_content_homework_file_submission_view"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['assignments/ExternalContentHomeworkFileSubmissionView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<div style=\"padding: 20px;\">\n  <form class=\"form-horizontal\" role=\"form\">\n\n    <div class=\"control-group\">\n      <label class=\"control-label\">File</label>\n      <div class=\"controls\" style=\"padding-top: 5px;\">\n        <strong>";
  if (helper = helpers.text) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.text); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</strong>\n        <a href=\"#\" class=\"relaunch-tool btn btn-mini\">change</a>\n      </div>\n    </div>\n\n    <div class=\"control-group\">\n      <label class=\"control-label\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.external_content_homework_file_submission_view")
  },data:data},helper ? helper.call(depth0, "additional_comments", "Additional comments", options) : helperMissing.call(depth0, "t", "additional_comments", "Additional comments", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n      <div class=\"controls\">\n        <textarea class=\"submission_comment\" rows=\"3\" placeholder=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.external_content_homework_file_submission_view")
  },data:data},helper ? helper.call(depth0, "group_assignment_header", "Comments...", options) : helperMissing.call(depth0, "t", "group_assignment_header", "Comments...", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.external_content_homework_file_submission_view")
  },data:data},helper ? helper.call(depth0, "additional_comments", "Additional comments", options) : helperMissing.call(depth0, "t", "additional_comments", "Additional comments", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"></textarea>\n      </div>\n    </div>\n\n    <div class=\"control-group\">\n      <div class=\"controls\">\n        <button type=\"button\" class=\"cancel_button btn\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.external_content_homework_file_submission_view")
  },data:data},helper ? helper.call(depth0, "#buttons.cancel", "Cancel", options) : helperMissing.call(depth0, "t", "#buttons.cancel", "Cancel", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n        <button type=\"submit\" class=\"submit_button btn btn-primary\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.external_content_homework_file_submission_view")
  },data:data},helper ? helper.call(depth0, "buttons.submit_assignment", "Submit Assignment", options) : helperMissing.call(depth0, "t", "buttons.submit_assignment", "Submit Assignment", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n      </div>\n    </div>\n\n  </form>\n</div>\n";
  return buffer;
  });
  
      
  return templates['assignments/ExternalContentHomeworkFileSubmissionView'];
});
