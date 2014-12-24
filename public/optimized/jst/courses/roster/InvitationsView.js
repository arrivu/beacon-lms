define('jst/courses/roster/InvitationsView', ["compiled/handlebars_helpers","i18n!courses.roster.invitations_view"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['courses/roster/InvitationsView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("courses.roster.invitations_view")
  },data:data},helper ? helper.call(depth0, "student_invitation_unaccepted_available", "%{name} hasn't yet accepted the invitation to join the course. The invitation was sent: %{time}", options) : helperMissing.call(depth0, "t", "student_invitation_unaccepted_available", "%{name} hasn't yet accepted the invitation to join the course. The invitation was sent: %{time}", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("courses.roster.invitations_view")
  },data:data},helper ? helper.call(depth0, "student_invitation_unaccepted_unavailable", "%{name} was added to the course: %{time}", options) : helperMissing.call(depth0, "t", "student_invitation_unaccepted_unavailable", "%{name} was added to the course: %{time}", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <div class=\"invitations_pending_publish\">\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("courses.roster.invitations_view"),
    'w0': ("<b>$1</b>")
  },data:data},helper ? helper.call(depth0, "invitations_pending_publish", "Invitations aren't sent until the course is *published*", options) : helperMissing.call(depth0, "t", "invitations_pending_publish", "Invitations aren't sent until the course is *published*", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n  ";
  return buffer;
  }

  buffer += "<div class=\"admin_enrollment_re_send\">\n  ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("courses.roster.invitations_view")
  },data:data},helper ? helper.call(depth0, "admin_invitation_unaccepted", "%{name} hasn't yet accepted the invitation to join the course. The invitation was sent: %{time}", options) : helperMissing.call(depth0, "t", "admin_invitation_unaccepted", "%{name} hasn't yet accepted the invitation to join the course. The invitation was sent: %{time}", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n<div class=\"student_enrollment_re_send\">\n  ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.course)),stack1 == null || stack1 === false ? stack1 : stack1.available), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 && depth0.course)),stack1 == null || stack1 === false ? stack1 : stack1.available), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n<div class=\"accepted_enrollment_re_send\">\n  ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("courses.roster.invitations_view")
  },data:data},helper ? helper.call(depth0, "accepted_invitation", "%{name} has already received and accepted the invitation to join the course, but you can still re-send the invitation if it is needed.", options) : helperMissing.call(depth0, "t", "accepted_invitation", "%{name} has already received and accepted the invitation to join the course, but you can still re-send the invitation if it is needed.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  return buffer;
  });
  
      
  return templates['courses/roster/InvitationsView'];
});
