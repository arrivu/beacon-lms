define('jst/SubmissionDetailsDialog', ["compiled/handlebars_helpers","compiled/util/registerTemplateCss","i18n!submission_details_dialog","jst/_grading_box","jst/_submission_detail","jst/_avatar"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['SubmissionDetailsDialog'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      <a class=\"more-details-link\" target=\"_blank\" href=\"";
  if (helper = helpers.speedGraderUrl) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.speedGraderUrl); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("submission_details_dialog")
  },data:data},helper ? helper.call(depth0, "more_details_in_the_speedgrader", "More details in the SpeedGrader", options) : helperMissing.call(depth0, "t", "more_details_in_the_speedgrader", "More details in the SpeedGrader", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n          <label for=\"submission_to_view\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("submission_details_dialog")
  },data:data},helper ? helper.call(depth0, "this_was_submitted_multiple_times_choose_a_submission_to_view", "Submitted multiple times, choose which to view:", options) : helperMissing.call(depth0, "t", "this_was_submitted_multiple_times_choose_a_submission_to_view", "Submitted multiple times, choose which to view:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n          <select id=\"submission_to_view\">\n            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.submission_history), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </select>\n        ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n              <option>"
    + escapeExpression((helper = helpers.datetimeFormatted || (depth0 && depth0.datetimeFormatted),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.submitted_at), options) : helperMissing.call(depth0, "datetimeFormatted", (depth0 && depth0.submitted_at), options)))
    + " ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.late), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n            ";
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += " ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("submission_details_dialog")
  },data:data},helper ? helper.call(depth0, "late", "LATE", options) : helperMissing.call(depth0, "t", "late", "LATE", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n          ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.submitted_at), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            <strong>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("submission_details_dialog")
  },data:data},helper ? helper.call(depth0, "submitted", "Submitted:", options) : helperMissing.call(depth0, "t", "submitted", "Submitted:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " "
    + escapeExpression((helper = helpers.datetimeFormatted || (depth0 && depth0.datetimeFormatted),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.submitted_at), options) : helperMissing.call(depth0, "datetimeFormatted", (depth0 && depth0.submitted_at), options)))
    + " ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.late), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</strong>\n          ";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        ";
  stack1 = self.invokePartial(partials.submission_detail, 'submission_detail', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <div class=\"rubric-link\"><a class=\"rubric\" href=\"";
  if (helper = helpers.speedGraderUrl) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.speedGraderUrl); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("submission_details_dialog")
  },data:data},helper ? helper.call(depth0, "view_rubric_assessment_in_the_speedgrader", "View Rubric Assessment in the SpeedGrader", options) : helperMissing.call(depth0, "t", "view_rubric_assessment_in_the_speedgrader", "View Rubric Assessment in the SpeedGrader", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></div>\n      ";
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      <h1>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("submission_details_dialog")
  },data:data},helper ? helper.call(depth0, "loading_comments", "Loading comments...", options) : helperMissing.call(depth0, "t", "loading_comments", "Loading comments...", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h1>\n    ";
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.submission_comments), {hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }
function program17(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <h1>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("submission_details_dialog")
  },data:data},helper ? helper.call(depth0, "comments", "Comments", options) : helperMissing.call(depth0, "t", "comments", "Comments", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h1>\n        <div class=\"submission_details_comments\">\n          ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.submission_comments), {hash:{},inverse:self.noop,fn:self.program(18, program18, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n      ";
  return buffer;
  }
function program18(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            <article class=\"comment clearfix\">\n              "
    + escapeExpression((helper = helpers.friendlyDatetime || (depth0 && depth0.friendlyDatetime),options={hash:{
    'pubdate': (true)
  },data:data},helper ? helper.call(depth0, (depth0 && depth0.created_at), options) : helperMissing.call(depth0, "friendlyDatetime", (depth0 && depth0.created_at), options)))
    + "\n              ";
  stack1 = self.invokePartial(partials.avatar, 'avatar', (depth0 && depth0.author), helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n              <div class=\"middle\">\n                <address class=\"vcard\">\n                  <a class=\"fn url\" href=\"";
  if (helper = helpers.url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.author_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.author_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\n                </address>\n                <div>\n                  "
    + escapeExpression((helper = helpers.newlinesToBreak || (depth0 && depth0.newlinesToBreak),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.comment), options) : helperMissing.call(depth0, "newlinesToBreak", (depth0 && depth0.comment), options)))
    + "\n                </div>\n                ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.media_comment), {hash:{},inverse:self.noop,fn:self.program(19, program19, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                <div class=\"comment_attachments\">\n                  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.attachments), {hash:{},inverse:self.noop,fn:self.program(21, program21, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </div>\n              </div>\n            </article>\n          ";
  return buffer;
  }
function program19(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                  <a data-media_comment_id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.media_comment)),stack1 == null || stack1 === false ? stack1 : stack1.media_id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-media_comment_type=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.media_comment)),stack1 == null || stack1 === false ? stack1 : stack1.media_type)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.media_comment)),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"play_comment_link media-comment instructure_inline_media_comment\" >";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("submission_details_dialog")
  },data:data},helper ? helper.call(depth0, "links.click_to_view", "click here to view", options) : helperMissing.call(depth0, "t", "links.click_to_view", "click here to view", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n                ";
  return buffer;
  }

function program21(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                    <div><a href=\"";
  if (helper = helpers.url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\""
    + escapeExpression((helper = helpers.mimeClass || (depth0 && depth0.mimeClass),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0['content-type']), options) : helperMissing.call(depth0, "mimeClass", (depth0 && depth0['content-type']), options)))
    + "\" title=\"";
  if (helper = helpers.filename) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.filename); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.display_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.display_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></div>\n                  ";
  return buffer;
  }

function program23(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <span id=\"group-comment-container\">\n      "
    + escapeExpression((helper = helpers.checkbox || (depth0 && depth0.checkbox),options={hash:{
    'id': ("group_comment")
  },data:data},helper ? helper.call(depth0, "comment.group_comment", options) : helperMissing.call(depth0, "checkbox", "comment.group_comment", options)))
    + "\n      <label for=\"group_comment\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("submission_details_dialog")
  },data:data},helper ? helper.call(depth0, "labels.group_comment", "Send Comment to the Whole Group", options) : helperMissing.call(depth0, "t", "labels.group_comment", "Send Comment to the Whole Group", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n    </span>\n    ";
  return buffer;
  }

  buffer += "<div class=\"submission_details_dialog\">\n  <h1 class=\"assignment-name\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.assignment)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h1>\n  <section class=\"submission-details\">\n    <form class=\"submission_details_grade_form form-inline\">\n      <strong><label for=\"";
  if (helper = helpers.inputName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.inputName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("submission_details_dialog")
  },data:data},helper ? helper.call(depth0, "grade_form_label", "Grade:", options) : helperMissing.call(depth0, "t", "grade_form_label", "Grade:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label></strong>\n      ";
  stack1 = self.invokePartial(partials.grading_box, 'grading_box', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      <button style=\"float: right;\" class=\"btn\" type=\"submit\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("submission_details_dialog")
  },data:data},helper ? helper.call(depth0, "update_grade", "Update Grade", options) : helperMissing.call(depth0, "t", "update_grade", "Update Grade", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n    </form>\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.speedGraderUrl), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <div>\n      <h2>\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.moreThanOneSubmission), {hash:{},inverse:self.program(7, program7, data),fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </h2>\n      ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.submission_history), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.rubric_assessment), {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n  </section>\n  <section>\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.loading), {hash:{},inverse:self.program(16, program16, data),fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </section>\n  <form class=\"submission_details_add_comment_form clearfix\">\n    <label for=\"add_a_comment\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("submission_details_dialog")
  },data:data},helper ? helper.call(depth0, "add_a_comment", "Add a comment", options) : helperMissing.call(depth0, "t", "add_a_comment", "Add a comment", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n    <textarea id=\"add_a_comment\" name=\"comment[text_comment]\"></textarea>\n    ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.assignment)),stack1 == null || stack1 === false ? stack1 : stack1.group_category_id), {hash:{},inverse:self.noop,fn:self.program(23, program23, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <button class=\"btn\" type=\"submit\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("submission_details_dialog")
  },data:data},helper ? helper.call(depth0, "post_comment", "Post Comment", options) : helperMissing.call(depth0, "t", "post_comment", "Post Comment", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n  </form>\n</div>\n";
  return buffer;
  });
  
      
arguments[1]('SubmissionDetailsDialog', ".submission_details_dialog .more-details-link{font-size:1.2em;line-height:42px;}.submission_details_dialog h1,.submission_details_dialog .h1{margin:20px 0 0;padding:0 12px;font-size:23px;}.submission_details_dialog .submission-details{padding:10px;}.submission_details_dialog .submission-details h1,.submission_details_dialog .submission-details .h1{margin:0 -10px 15px;border-bottom:1px solid #bbb;}.submission_details_dialog .submission-details h2,.submission_details_dialog .submission-details h2 select,.submission_details_dialog .submission-details .h2,.submission_details_dialog .submission-details .h2 select{font-size:15px;}.submission_details_dialog .submission_detail{font-size:1.1em;margin:3px 0 10px;}.submission_details_dialog .rubric-link{font-weight:bold;}.submission_details_dialog .submisison-attachment{padding:3px 0;}.submission_details_dialog .submisison-attachment a{font-size:11px;}.submission_details_dialog .submisison-attachment a.turnitin_similarity_score{font-size:10px;}.submission_details_dialog .submission_details_comments{overflow:auto;max-height:200px;border-top:1px solid #bbb;padding:0 12px;position:relative;background:#A3A3A3 url(/images/messages/messages-background.png) 0 0 repeat;}.submission_details_dialog .comment{background:#fff;clear:both;border-bottom:1px solid #ccc;padding:10px;margin:10px 0;}.submission_details_dialog .comment:last-child{border-bottom:none;}.submission_details_dialog .comment .middle{padding-left:69px;}.submission_details_dialog .comment .avatar{float:left;}.submission_details_dialog .comment time{float:right;color:#777;font-size:11px;}.submission_details_dialog .comment address{font-style:normal;font-weight:bold;margin:0;}.submission_details_dialog .comment .comment_attachments a{padding-top:4px;}.submission_details_add_comment_form{position:relative;border-top:1px solid #bbb;background-color:#F2F2F2;margin:0px;padding:5px 10px;}.submission_details_add_comment_form label{font-weight:bold;display:block;}.submission_details_add_comment_form #add_a_comment{width:99%;display:block;}.submission_details_add_comment_form #group-comment-container{float:left;}.submission_details_add_comment_form #group-comment-container label{display:inline;font-weight:normal;}.submission_details_add_comment_form .btn{float:right;}");

  return templates['SubmissionDetailsDialog'];
});
