define('jst/courses/roster/resendInvitations', ["compiled/handlebars_helpers","i18n!courses.roster.resend_invitations"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['courses/roster/resendInvitations'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <p>\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("courses.roster.resend_invitations")
  },data:data},helper ? helper.call(depth0, "pending_invitations", "%{pendingInvitationsCount} invitations haven't been accepted.", options) : helperMissing.call(depth0, "t", "pending_invitations", "%{pendingInvitationsCount} invitations haven't been accepted.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.available), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </p>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.sending), {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <a href=\"javascript:void(0)\">\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("courses.roster.resend_invitations")
  },data:data},helper ? helper.call(depth0, "re_sending_invitations", "Resending...", options) : helperMissing.call(depth0, "t", "re_sending_invitations", "Resending...", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </a>\n      ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <a href=\"javascript:void(0)\" class=\"resend-pending-invitations\">\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("courses.roster.resend_invitations")
  },data:data},helper ? helper.call(depth0, "re_send_invitations", "Resend", options) : helperMissing.call(depth0, "t", "re_send_invitations", "Resend", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </a>\n      ";
  return buffer;
  }

  stack1 = (helper = helpers.ifAll || (depth0 && depth0.ifAll),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.canResend), (depth0 && depth0.pendingInvitationsCount), options) : helperMissing.call(depth0, "ifAll", (depth0 && depth0.canResend), (depth0 && depth0.pendingInvitationsCount), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
  
      
  return templates['courses/roster/resendInvitations'];
});
