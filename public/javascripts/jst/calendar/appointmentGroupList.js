define('jst/calendar/appointmentGroupList', ["compiled/handlebars_helpers","i18n!calendar.appointment_group_list"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['calendar/appointmentGroupList'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helperMissing=helpers.helperMissing, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  <ul class=\"scheduler-content\" id=\"appointment-group-list\">\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.appointment_groups), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </ul>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      <li class='appointment-group-item admin-link-hover-area ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.requiring_action), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.published), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "' data-appointment-group-id='";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.is_manageable), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.requiring_action), {hash:{},inverse:self.program(14, program14, data),fn:self.program(12, program12, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        <h3><a class=\"view_calendar_link\" href=\"#\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></h3>\n        <div class='ag-context'>\n          ";
  stack1 = (helper = helpers.toSentence || (depth0 && depth0.toSentence),options={hash:{},inverse:self.noop,fn:self.program(18, program18, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.contexts), options) : helperMissing.call(depth0, "toSentence", (depth0 && depth0.contexts), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.location_name), {hash:{},inverse:self.noop,fn:self.program(20, program20, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.description), {hash:{},inverse:self.noop,fn:self.program(22, program22, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.is_manageable), {hash:{},inverse:self.noop,fn:self.program(24, program24, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </li>\n    ";
  return buffer;
  }
function program3(depth0,data) {
  
  
  return "requiring-action";
  }

function program5(depth0,data) {
  
  
  return "unpublished-ag";
  }

function program7(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n          <div class=\"admin-links\">\n            <button class=\"al-trigger btn btn-mini\">\n              <i class=\"icon-settings\"></i><i class=\"icon-mini-arrow-down\"></i>\n              <span class=\"screenreader-only\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.appointment_group_list")
  },data:data},helper ? helper.call(depth0, "manage", "Manage", options) : helperMissing.call(depth0, "t", "manage", "Manage", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n            </button>\n            <ul class=\"al-options\">\n              <li><a class=\"edit_link\" href=\"#\"><i class=\"icon-edit\"></i> ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.appointment_group_list")
  },data:data},helper ? helper.call(depth0, "edit", "Edit", options) : helperMissing.call(depth0, "t", "edit", "Edit", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></li>\n              <li><a class=\"message_link\" href=\"#\"><i class=\"icon-message\"></i>&nbsp; ";
  stack1 = (helper = helpers.ifEqual || (depth0 && depth0.ifEqual),options={hash:{},inverse:self.program(10, program10, data),fn:self.program(8, program8, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.participant_type), "Group", options) : helperMissing.call(depth0, "ifEqual", (depth0 && depth0.participant_type), "Group", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></li>\n              <li><a class=\"delete_link\" href=\"#\"><i class=\"icon-trash\"></i> ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.appointment_group_list")
  },data:data},helper ? helper.call(depth0, "delete", "Delete", options) : helperMissing.call(depth0, "t", "delete", "Delete", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></li>\n            </ul>\n          </div>\n        ";
  return buffer;
  }
function program8(depth0,data) {
  
  var stack1, helper, options;
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.appointment_group_list")
  },data:data},helper ? helper.call(depth0, "message_groups", "Message Groups Who...", options) : helperMissing.call(depth0, "t", "message_groups", "Message Groups Who...", options));
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }

function program10(depth0,data) {
  
  var stack1, helper, options;
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.appointment_group_list")
  },data:data},helper ? helper.call(depth0, "message_students", "Message Students Who...", options) : helperMissing.call(depth0, "t", "message_students", "Message Students Who...", options));
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }

function program12(depth0,data) {
  
  
  return "\n          <div class=\"alert alert-warning\">\n            <div>\n              You can <a class=\"view_calendar_link\" href=\"#\">sign up</a> for this.\n            </div>\n          </div>\n        ";
  }

function program14(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n          ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.reserved_times), {hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }
function program15(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            <div class=\"alert alert-success\">\n              <div>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.appointment_group_list")
  },data:data},helper ? helper.call(depth0, "signed_up_for", "You're signed up for", options) : helperMissing.call(depth0, "t", "signed_up_for", "You're signed up for", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n              ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.reserved_times), {hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </div>\n          ";
  return buffer;
  }
function program16(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                <div><strong><a href=\"#\" class=\"show_event_link\" data-event-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.formatted_time) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.formatted_time); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></strong></div>\n              ";
  return buffer;
  }

function program18(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "<a href=\"";
  if (helper = helpers.url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>";
  return buffer;
  }

function program20(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n          <div class=\"ag-location\">\n            <strong>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.appointment_group_list")
  },data:data},helper ? helper.call(depth0, "location", "Location:", options) : helperMissing.call(depth0, "t", "location", "Location:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</strong>\n            <span>";
  if (helper = helpers.location_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.location_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n          </div>\n        ";
  return buffer;
  }

function program22(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n          <p class=\"ag-description\">"
    + escapeExpression((helper = helpers.newlinesToBreak || (depth0 && depth0.newlinesToBreak),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.description), options) : helperMissing.call(depth0, "newlinesToBreak", (depth0 && depth0.description), options)))
    + "</p>\n        ";
  return buffer;
  }

function program24(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n          <div class=\"ag-x-of-x-signed-up\">\n            ";
  stack1 = (helper = helpers.ifEqual || (depth0 && depth0.ifEqual),options={hash:{},inverse:self.program(27, program27, data),fn:self.program(25, program25, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.participant_type), "Group", options) : helperMissing.call(depth0, "ifEqual", (depth0 && depth0.participant_type), "Group", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.published), {hash:{},inverse:self.noop,fn:self.program(29, program29, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </div>\n        ";
  return buffer;
  }
function program25(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n              ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.appointment_group_list")
  },data:data},helper ? helper.call(depth0, "x_groups_have_signed_up", "%{participant_count} groups have signed up", options) : helperMissing.call(depth0, "t", "x_groups_have_signed_up", "%{participant_count} groups have signed up", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  return buffer;
  }

function program27(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n              ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.appointment_group_list")
  },data:data},helper ? helper.call(depth0, "x_people_have_signed_up", "%{participant_count} people have signed up", options) : helperMissing.call(depth0, "t", "x_people_have_signed_up", "%{participant_count} people have signed up", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  return buffer;
  }

function program29(depth0,data) {
  
  
  return "(unpublished)";
  }

function program31(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  <div class=\"scheduler-header\"></div>\n  <div class=\"scheduler-content\">\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.canManageAGroup), {hash:{},inverse:self.program(34, program34, data),fn:self.program(32, program32, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n";
  return buffer;
  }
function program32(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      <h2>\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.appointment_group_list")
  },data:data},helper ? helper.call(depth0, "scheduler_explanation_teacher_header", "You have not created any appointment groups, and there are none you can sign up for", options) : helperMissing.call(depth0, "t", "scheduler_explanation_teacher_header", "You have not created any appointment groups, and there are none you can sign up for", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </h2>\n      <p>\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.appointment_group_list")
  },data:data},helper ? helper.call(depth0, "scheduler_explanation_teacher_paragraph_1", "This is the Scheduler Tool. You can use it to create appointment groups for your students to sign up for.", options) : helperMissing.call(depth0, "t", "scheduler_explanation_teacher_paragraph_1", "This is the Scheduler Tool. You can use it to create appointment groups for your students to sign up for.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </p>\n      <p>\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.appointment_group_list")
  },data:data},helper ? helper.call(depth0, "scheduler_explanation_teacher_paragraph_2", "For example, lets say you want to go over the midterm paper assignment with each of the students in your course. You would create a new appointment group, specify the dates and times that you're available, tell it to split that time into 15 minute blocks and only allow one student per time-block.", options) : helperMissing.call(depth0, "t", "scheduler_explanation_teacher_paragraph_2", "For example, lets say you want to go over the midterm paper assignment with each of the students in your course. You would create a new appointment group, specify the dates and times that you're available, tell it to split that time into 15 minute blocks and only allow one student per time-block.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </p>\n      <p>\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.appointment_group_list")
  },data:data},helper ? helper.call(depth0, "scheduler_explanation_teacher_paragraph_3", "Then students would get notified and see that they need to sign up for one of the specified time blocks. They will be shown a calendar with the available time blocks overlaid on top of everything on their other calendars so they can pick a time that works for them.", options) : helperMissing.call(depth0, "t", "scheduler_explanation_teacher_paragraph_3", "Then students would get notified and see that they need to sign up for one of the specified time blocks. They will be shown a calendar with the available time blocks overlaid on top of everything on their other calendars so they can pick a time that works for them.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </p>\n      <p>\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.appointment_group_list"),
    'w0': ("<strong> $1</strong>")
  },data:data},helper ? helper.call(depth0, "scheduler_explanation_teacher_paragraph_4", "*Get started now by clicking the \"Create an appointment group\" button to the right. *", options) : helperMissing.call(depth0, "t", "scheduler_explanation_teacher_paragraph_4", "*Get started now by clicking the \"Create an appointment group\" button to the right. *", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </p>\n    ";
  return buffer;
  }

function program34(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      <h2>\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.appointment_group_list")
  },data:data},helper ? helper.call(depth0, "scheduler_explanation_student_header", "You do not have any appointment groups to sign up for", options) : helperMissing.call(depth0, "t", "scheduler_explanation_student_header", "You do not have any appointment groups to sign up for", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </h2>\n      <p>\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.appointment_group_list")
  },data:data},helper ? helper.call(depth0, "scheduler_explanation_student_paragraph_1", "Teachers can use this scheduler tool to schedule things for their students to sign up for. Things like: \"office hours\", \"group presentation time-slots\" or \"lunch with an alumnus\".", options) : helperMissing.call(depth0, "t", "scheduler_explanation_student_paragraph_1", "Teachers can use this scheduler tool to schedule things for their students to sign up for. Things like: \"office hours\", \"group presentation time-slots\" or \"lunch with an alumnus\".", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </p>\n      <p>\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.appointment_group_list")
  },data:data},helper ? helper.call(depth0, "scheduler_explanation_student_paragraph_2", "None of your teachers have made any appointments you can sign up for so there is not anything for you do to now. You will be notified if anyone does create something so you can come sign up for it.", options) : helperMissing.call(depth0, "t", "scheduler_explanation_student_paragraph_2", "None of your teachers have made any appointments you can sign up for so there is not anything for you do to now. You will be notified if anyone does create something so you can come sign up for it.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </p>\n    ";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, (depth0 && depth0.appointment_groups), {hash:{},inverse:self.program(31, program31, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
  
      
  return templates['calendar/appointmentGroupList'];
});
