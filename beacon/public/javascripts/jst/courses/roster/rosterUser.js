define('jst/courses/roster/rosterUser', ["compiled/handlebars_helpers","i18n!courses.roster.roster_user","jst/_avatar"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['courses/roster/rosterUser'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "<span class=\"label label-info\" title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("courses.roster.roster_user")
  },data:data},helper ? helper.call(depth0, "pending_acceptance_explanation", "This user has not yet accepted the invitation to the course", options) : helperMissing.call(depth0, "t", "pending_acceptance_explanation", "This user has not yet accepted the invitation to the course", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("courses.roster.roster_user")
  },data:data},helper ? helper.call(depth0, "pending_acceptance_of_invitation", "pending", options) : helperMissing.call(depth0, "t", "pending_acceptance_of_invitation", "pending", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<td>\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.canViewLoginId), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</td>\n";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    ";
  if (helper = helpers.login_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.login_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n  ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n  <div class=\"section\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n  ";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n  <div>"
    + escapeExpression((helper = helpers.enrollmentName || (depth0 && depth0.enrollmentName),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.role), options) : helperMissing.call(depth0, "enrollmentName", (depth0 && depth0.role), options)))
    + "</div>\n  ";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n<td>\n  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.enrollments), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</td>\n<td>\n  <div>";
  if (helper = helpers.total_activity_string) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.total_activity_string); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n</td>\n";
  return buffer;
  }
function program11(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n    <div "
    + escapeExpression((helper = helpers.contextSensitiveDatetimeTitle || (depth0 && depth0.contextSensitiveDatetimeTitle),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.last_activity_at), options) : helperMissing.call(depth0, "contextSensitiveDatetimeTitle", (depth0 && depth0.last_activity_at), options)))
    + ">\n      "
    + escapeExpression((helper = helpers.datetimeFormatted || (depth0 && depth0.datetimeFormatted),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.last_activity_at), options) : helperMissing.call(depth0, "datetimeFormatted", (depth0 && depth0.last_activity_at), options)))
    + "\n    </div>\n  ";
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <div class=\"admin-links\">\n    <a role=\"button\" class=\"al-trigger al-trigger-gray\" href=\"javascript:void(0)\">\n      <i class=\"icon-settings\"></i><i class=\"icon-mini-arrow-down\"></i>\n      <span class=\"screenreader-only\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("courses.roster.roster_user")
  },data:data},helper ? helper.call(depth0, "manage_user", "Manage %{name}", options) : helperMissing.call(depth0, "t", "manage_user", "Manage %{name}", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span></a>\n    <ul class=\"al-options\">\n      <li><a href=\"#\" data-event=\"resendInvitation\"><i class=\"icon-email\"></i> ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("courses.roster.roster_user")
  },data:data},helper ? helper.call(depth0, "links.resend_invitation", "Resend Invitation", options) : helperMissing.call(depth0, "t", "links.resend_invitation", "Resend Invitation", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></li>\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.canLinkStudents), {hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.canEditSections), {hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      <li><a href=\"";
  if (helper = helpers.url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"><i class=\"icon-user\"></i> ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("courses.roster.roster_user")
  },data:data},helper ? helper.call(depth0, "links.user_details", "User Details", options) : helperMissing.call(depth0, "t", "links.user_details", "User Details", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></li>\n      <li class=\"ui-menu-item\"><hr /></li>\n      <li><a href=\"#\" data-event=\"removeFromCourse\"><i class=\"icon-trash\"></i> ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("courses.roster.roster_user")
  },data:data},helper ? helper.call(depth0, "links.remove_from_course", "Remove From Course", options) : helperMissing.call(depth0, "t", "links.remove_from_course", "Remove From Course", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></li>\n    </ul>\n  </div>\n  ";
  return buffer;
  }
function program14(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      <li><a href=\"#\" data-event=\"linkToStudents\"><i class=\"icon-link\"></i> ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("courses.roster.roster_user")
  },data:data},helper ? helper.call(depth0, "links.link_to_students", "Link to Students", options) : helperMissing.call(depth0, "t", "links.link_to_students", "Link to Students", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></li>\n      ";
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      <li><a href=\"#\" data-event=\"editSections\"><i class=\"icon-edit\"></i> ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("courses.roster.roster_user")
  },data:data},helper ? helper.call(depth0, "links.edit_sections", "Edit Sections", options) : helperMissing.call(depth0, "t", "links.edit_sections", "Edit Sections", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></li>\n      ";
  return buffer;
  }

  buffer += "<td class=\"center\">\n  ";
  stack1 = self.invokePartial(partials.avatar, 'avatar', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</td>\n<td>\n  <a href=\"";
  if (helper = helpers.html_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.html_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"roster_user_name\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isPending), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</td>\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.canViewLoginIdColumn), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<td>\n  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.sections), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</td>\n<td>\n  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.enrollments), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</td>\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.ENV)),stack1 == null || stack1 === false ? stack1 : stack1.permissions)),stack1 == null || stack1 === false ? stack1 : stack1.read_reports), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<td class=\"right\">\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.canManage), {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</td>\n";
  return buffer;
  });
  
      
  return templates['courses/roster/rosterUser'];
});
