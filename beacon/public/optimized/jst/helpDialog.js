define('jst/helpDialog', ["compiled/handlebars_helpers","i18n!help_dialog"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['helpDialog'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n      <li>\n        <a href=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.url), {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" target=\"_blank\">\n          <span class=\"text\">";
  if (helper = helpers.text) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.text); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n          <span class=\"subtext\">";
  if (helper = helpers.subtext) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.subtext); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n        </a>\n      </li>\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program4(depth0,data) {
  
  
  return "#";
  }

  buffer += "<div id=\"help-dialog\">\n  <ul id=\"help-dialog-options\" class=\"help-dialog-pane\">\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.helpLinks), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </ul>\n  <form class=\"help-dialog-pane\" id=\"teacher_feedback\" style=\"display:none\" action=\"/api/v1/conversations\" method=\"POST\">\n    <label for=\"teacher-feedback-recipients\">\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("help_dialog")
  },data:data},helper ? helper.call(depth0, "which_course_is_this_question_about", "Which course is this question about?", options) : helperMissing.call(depth0, "t", "which_course_is_this_question_about", "Which course is this question about?", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      <small>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("help_dialog")
  },data:data},helper ? helper.call(depth0, "message_will_be_sent_to_all_the_teachers_tas_in_the_course", "Message will be sent to all the Teachers / TA's in the course.", options) : helperMissing.call(depth0, "t", "message_will_be_sent_to_all_the_teachers_tas_in_the_course", "Message will be sent to all the Teachers / TA's in the course.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</small>\n    </label>\n    <select class=\"input-block-level\" name=\"recipients[]\" id=\"teacher-feedback-recipients\"></select>\n    <label for=\"teacher-feedback-body\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("help_dialog")
  },data:data},helper ? helper.call(depth0, "message", "Message", options) : helperMissing.call(depth0, "t", "message", "Message", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n    <textarea id=\"teacher-feedback-body\" name=\"body\"></textarea>\n    <div class=\"button-container\">\n      <button type=\"submit\" class=\"btn\" data-text-while-loading=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("help_dialog")
  },data:data},helper ? helper.call(depth0, "sending", "Sending...", options) : helperMissing.call(depth0, "t", "sending", "Sending...", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("help_dialog")
  },data:data},helper ? helper.call(depth0, "send_message", "Send Message", options) : helperMissing.call(depth0, "t", "send_message", "Send Message", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n    </div>\n  </form>\n  <form class=\"help-dialog-pane bootstrap-form\" id=\"create_ticket\" style=\"display:none\" action=\"/errors\" method=\"POST\">\n    <h4>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("help_dialog")
  },data:data},helper ? helper.call(depth0, "file_a_ticket_for_a_personal_response_from_our_support_team", "File a ticket for a personal response from our support team", options) : helperMissing.call(depth0, "t", "file_a_ticket_for_a_personal_response_from_our_support_team", "File a ticket for a personal response from our support team", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h4>\n    <div aria-alert=\"true\" class=\"alert\">\n      <strong>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("help_dialog")
  },data:data},helper ? helper.call(depth0, "for_an_instant_answer", "For an instant answer:", options) : helperMissing.call(depth0, "t", "for_an_instant_answer", "For an instant answer:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</strong>\n      <div>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("help_dialog"),
    'w0': ("<a target=\"_blank\" href=\"http://guides.instructure.com/\">$1</a>")
  },data:data},helper ? helper.call(depth0, "see_if_your_issue_is_addressed_in_the_canvas_guides", "See if your issue is addressed in the *Canvas Guides*.", options) : helperMissing.call(depth0, "t", "see_if_your_issue_is_addressed_in_the_canvas_guides", "See if your issue is addressed in the *Canvas Guides*.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n    </div>\n    <div>\n      <label for=\"error_subject\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("help_dialog")
  },data:data},helper ? helper.call(depth0, "subject", "Subject", options) : helperMissing.call(depth0, "t", "subject", "Subject", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n      <input type=\"text\" class=\"input-block-level\" id=\"error_subject\" name=\"error[subject]\" />\n    </div>\n    <div>\n      <label for=\"error-comments\">\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("help_dialog")
  },data:data},helper ? helper.call(depth0, "description", "Description", options) : helperMissing.call(depth0, "t", "description", "Description", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        <small>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("help_dialog"),
    'w0': ("<a target=\"_blank\" href=\"http://www.techsmith.com/download/jing\">$1</a>")
  },data:data},helper ? helper.call(depth0, "include_a_link_to_a_screencast_or_screenshot_using_something_like_jing", "Include a link to a screencast/screenshot using something like *Jing*.", options) : helperMissing.call(depth0, "t", "include_a_link_to_a_screencast_or_screenshot_using_something_like_jing", "Include a link to a screencast/screenshot using something like *Jing*.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</small>\n      </label>\n      <textarea class=\"input-block-level\" id=\"error-comments\" name=\"error[comments]\"></textarea>\n    </div>\n    <label for=\"severity\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("help_dialog")
  },data:data},helper ? helper.call(depth0, "how_is_this_affecting_you", "How is this affecting you?", options) : helperMissing.call(depth0, "t", "how_is_this_affecting_you", "How is this affecting you?", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n    <select class=\"input-block-level\" name=\"error[user_perceived_severity]\" id=\"severity\">\n      <option value=\"\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("help_dialog")
  },data:data},helper ? helper.call(depth0, "please_select_one", "Please select one...", options) : helperMissing.call(depth0, "t", "please_select_one", "Please select one...", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n      <option value=\"just_a_comment\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("help_dialog")
  },data:data},helper ? helper.call(depth0, "just_a_casual_question_comment_idea_suggestion", "Just a casual question, comment, idea, suggestion", options) : helperMissing.call(depth0, "t", "just_a_casual_question_comment_idea_suggestion", "Just a casual question, comment, idea, suggestion", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n      <option value=\"not_urgent\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("help_dialog")
  },data:data},helper ? helper.call(depth0, "i_need_some_help_but_its_not_urgent", "I need some help but it's not urgent", options) : helperMissing.call(depth0, "t", "i_need_some_help_but_its_not_urgent", "I need some help but it's not urgent", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n      <option value=\"workaround_possible\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("help_dialog")
  },data:data},helper ? helper.call(depth0, "somethings_broken_but_i_can_work_around_it_for_now", "Something's broken but I can work around it for now", options) : helperMissing.call(depth0, "t", "somethings_broken_but_i_can_work_around_it_for_now", "Something's broken but I can work around it for now", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n      <option value=\"blocks_what_i_need_to_do\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("help_dialog")
  },data:data},helper ? helper.call(depth0, "i_cant_get_things_done_until_i_hear_back_from_you", "I can't get things done until I hear back from you", options) : helperMissing.call(depth0, "t", "i_cant_get_things_done_until_i_hear_back_from_you", "I can't get things done until I hear back from you", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n      <option value=\"extreme_critical_emergency\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("help_dialog")
  },data:data},helper ? helper.call(depth0, "extreme_critical_emergency", "EXTREME CRITICAL EMERGENCY!!", options) : helperMissing.call(depth0, "t", "extreme_critical_emergency", "EXTREME CRITICAL EMERGENCY!!", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n    </select>\n    <div style=\""
    + escapeExpression((helper = helpers.hiddenUnless || (depth0 && depth0.hiddenUnless),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.showEmail), options) : helperMissing.call(depth0, "hiddenUnless", (depth0 && depth0.showEmail), options)))
    + "\">\n      <label for=\"error-email\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("help_dialog")
  },data:data},helper ? helper.call(depth0, "your_email_address", "Your email address", options) : helperMissing.call(depth0, "t", "your_email_address", "Your email address", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n      <input class=\"input-block-level\" type=\"email\" name=\"error[email]\" id=\"error-email\">\n    </div>\n    <input class=\"input-block-level\" type=\"hidden\" name=\"error[url]\" value=\"";
  if (helper = helpers.url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n    <input class=\"input-block-level\" type=\"hidden\" name=\"error[context_asset_string]\" value=\"";
  if (helper = helpers.contextAssetString) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.contextAssetString); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n    <input class=\"input-block-level\" type=\"hidden\" name=\"error[user_roles]\" value=\"";
  if (helper = helpers.userRoles) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.userRoles); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n    <div class=\"button-container\">\n      <button type=\"submit\" data-text-while-loading=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("help_dialog")
  },data:data},helper ? helper.call(depth0, "Submitting_Ticket", "Submitting Ticket...", options) : helperMissing.call(depth0, "t", "Submitting_Ticket", "Submitting Ticket...", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" class=\"btn submit_button\"><img src=\"/images/email.png\" alt=\"\"/>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("help_dialog")
  },data:data},helper ? helper.call(depth0, "submit_this_support_request", "Submit Ticket", options) : helperMissing.call(depth0, "t", "submit_this_support_request", "Submit Ticket", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n    </div>\n  </form>\n</div>\n";
  return buffer;
  });
  
      
  return templates['helpDialog'];
});
