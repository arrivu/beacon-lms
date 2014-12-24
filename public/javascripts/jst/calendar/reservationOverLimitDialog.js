define('jst/calendar/reservationOverLimitDialog', ["compiled/handlebars_helpers","i18n!calendar.reservation_over_limit_dialog"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['calendar/reservationOverLimitDialog'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.reservation_over_limit_dialog")
  },data:data},helper ? helper.call(depth0, "cancel_existing_reservation", "Cancel existing reservation and sign up for this one?", options) : helperMissing.call(depth0, "t", "cancel_existing_reservation", "Cancel existing reservation and sign up for this one?", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.reservation_over_limit_dialog")
  },data:data},helper ? helper.call(depth0, "appointment_limit_reached", "Appointment limit reached", options) : helperMissing.call(depth0, "t", "appointment_limit_reached", "Appointment limit reached", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n    <div>\n      "
    + escapeExpression((helper = helpers.semanticDateRange || (depth0 && depth0.semanticDateRange),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.start_at), (depth0 && depth0.end_at), options) : helperMissing.call(depth0, "semanticDateRange", (depth0 && depth0.start_at), (depth0 && depth0.end_at), options)))
    + "\n    </div>\n  ";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.reservation_over_limit_dialog")
  },data:data},helper ? helper.call(depth0, "would_you_like_to_cancel_that_and_sign_up_for_this", "Would you like to cancel that and sign up for this?", options) : helperMissing.call(depth0, "t", "would_you_like_to_cancel_that_and_sign_up_for_this", "Would you like to cancel that and sign up for this?", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.reservation_over_limit_dialog")
  },data:data},helper ? helper.call(depth0, "cancel_some_appointments_and_try_again", "Please cancel one of your other reservations and try again.", options) : helperMissing.call(depth0, "t", "cancel_some_appointments_and_try_again", "Please cancel one of your other reservations and try again.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;
  }

  buffer += "<div title=\"\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.reschedulable), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n\n  ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.reservation_over_limit_dialog")
  },data:data},helper ? helper.call(depth0, "you_are_already_signed_up_for", "You are already signed up for:", options) : helperMissing.call(depth0, "t", "you_are_already_signed_up_for", "You are already signed up for:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "<br>\n  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.reservations), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.reschedulable), {hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  return buffer;
  });
  
      
  return templates['calendar/reservationOverLimitDialog'];
});
