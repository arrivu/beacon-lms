define('jst/calendar/editAppointmentGroup', ["compiled/handlebars_helpers","i18n!calendar.edit_appointment_group"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['calendar/editAppointmentGroup'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  
  return " ";
  }

function program3(depth0,data) {
  
  
  return " style=\"display:none;\" ";
  }

  buffer += "<form action='#' id='edit_appointment_form'>\n  <div class=\"left-column-wrapper\">\n    <p>\n      <label for=\"edit-appointment-name-";
  if (helper = helpers.uniqid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.uniqid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"><b>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.edit_appointment_group")
  },data:data},helper ? helper.call(depth0, "name", "Name", options) : helperMissing.call(depth0, "t", "name", "Name", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</b></label><br />\n      <input type=\"text\" id=\"edit-appointment-name-";
  if (helper = helpers.uniqid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.uniqid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" name=\"title\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.appointment_group)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/>\n    </p>\n    <p>\n      <label for=\"edit-appointment-location-";
  if (helper = helpers.uniqid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.uniqid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"><b>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.edit_appointment_group")
  },data:data},helper ? helper.call(depth0, "location", "Location", options) : helperMissing.call(depth0, "t", "location", "Location", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</b></label><br />\n      <input type=\"text\" id=\"edit-appointment-location-";
  if (helper = helpers.uniqid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.uniqid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" name=\"location\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.appointment_group)),stack1 == null || stack1 === false ? stack1 : stack1.location_name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/>\n    </p>\n    <div class=\"select-calendar-container\">\n        <b>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.edit_appointment_group")
  },data:data},helper ? helper.call(depth0, "calendar", "Calendar", options) : helperMissing.call(depth0, "t", "calendar", "Calendar", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</b><br />\n      <button class=\"btn ag_contexts_selector\"></button>\n      <div class=\"ag-menu-container\"></div>\n    </div>\n    <p>\n      "
    + escapeExpression((helper = helpers.checkbox || (depth0 && depth0.checkbox),options={hash:{
    'id': ("group-signup-checkbox"),
    'uniqid': (true),
    'class': ("group-signup-checkbox")
  },data:data},helper ? helper.call(depth0, "use_group_signup", options) : helperMissing.call(depth0, "checkbox", "use_group_signup", options)))
    + "\n      <label for=\"group-signup-checkbox-";
  if (helper = helpers.uniqid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.uniqid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.edit_appointment_group")
  },data:data},helper ? helper.call(depth0, "group_signup", "Have students sign up in groups.", options) : helperMissing.call(depth0, "t", "group_signup", "Have students sign up in groups.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n    </p>\n    <div class=\"group-signup\" style=\"display: none\">\n      <label for=\"edit-appointment-group-cat-";
  if (helper = helpers.uniqid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.uniqid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"><b>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.edit_appointment_group")
  },data:data},helper ? helper.call(depth0, "group_category", "Group Category", options) : helperMissing.call(depth0, "t", "group_category", "Group Category", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</b></label><br />\n      <div class=\"group_select\">\n        <select id=\"edit-appointment-group-cat-";
  if (helper = helpers.uniqid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.uniqid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" name=\"group_category_id\"></select>\n      </div>\n    </div>\n  </div>\n  <div class=\"right-column-wrapper\">\n    <div class=\"time-block-list-wrapper\">\n      <div class=\"time-block-list\">\n        <table class=\"time-block-list-header\" role=\"presentation\">\n          <tr>\n            <td class=\"date-column\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.edit_appointment_group")
  },data:data},helper ? helper.call(depth0, "date", "Date", options) : helperMissing.call(depth0, "t", "date", "Date", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</td>\n            <td class=\"time-range-column\" colspan=\"4\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.edit_appointment_group")
  },data:data},helper ? helper.call(depth0, "time_range", "Time Range", options) : helperMissing.call(depth0, "t", "time_range", "Time Range", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</td>\n          </tr>\n        </table>\n        <div class=\"time-block-list-body-wrapper form-inline\">\n          <table class=\"time-block-list-body\"></table>\n        </div>\n        <div class=\"splitter\">\n          <p>\n            <a class=\"split-link btn\" href=\"#\">Split</a>\n            into slots of \n            <input type=\"number\" name=\"duration\" value=\"30\" style=\"width: 40px\"\n              aria-label=\""
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "slot_duration_label", "Minutes per slot", options) : helperMissing.call(depth0, "t", "slot_duration_label", "Minutes per slot", options)))
    + "\" />\n            minutes each.\n          </p>\n        </div>\n      </div>\n    </div>\n    <div style=\"margin-top: 1.5em\">\n      <div id=\"options_help_dialog\" style=\"display: none;\">\n        <p>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.edit_appointment_group")
  },data:data},helper ? helper.call(depth0, "appt_group_options_help1", "Some existing reservations are over the limit you have added. These will not be affected, this change only prevents new reservations from being made.", options) : helperMissing.call(depth0, "t", "appt_group_options_help1", "Some existing reservations are over the limit you have added. These will not be affected, this change only prevents new reservations from being made.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n        <p>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.edit_appointment_group")
  },data:data},helper ? helper.call(depth0, "appt_group_options_help2", "You can, however, manually remove any existing reservations.", options) : helperMissing.call(depth0, "t", "appt_group_options_help2", "You can, however, manually remove any existing reservations.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n      </div>\n      <b>Options</b>\n      <ul class=\"ag-options\">\n        <li>\n          "
    + escapeExpression((helper = helpers.checkbox || (depth0 && depth0.checkbox),options={hash:{
    'id': ("appointment-blocks-per-slot-option-button"),
    'class': ("appointment-blocks-per-slot-option-button"),
    'uniqid': (true)
  },data:data},helper ? helper.call(depth0, "per_slot_option", options) : helperMissing.call(depth0, "checkbox", "per_slot_option", options)))
    + "\n          <label for=\"appointment-blocks-per-slot-option-button-";
  if (helper = helpers.uniqid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.uniqid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">Limit each time slot to</label>\n          <input type=\"number\" name=\"participants_per_appointment\" \n            value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.appointment_group)),stack1 == null || stack1 === false ? stack1 : stack1.participants_per_appointment)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" min=\"1\"\n            style=\"width: 40px;\"\n            aria-label=\""
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "participants_per_appointment_label", "Max users/groups per appointment", options) : helperMissing.call(depth0, "t", "participants_per_appointment_label", "Max users/groups per appointment", options)))
    + "\" />\n          <label for=\"appointment-blocks-per-slot-option-button-";
  if (helper = helpers.uniqid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.uniqid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n            <span ";
  stack1 = (helper = helpers.ifEqual || (depth0 && depth0.ifEqual),options={hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.participant_type), "Group", options) : helperMissing.call(depth0, "ifEqual", (depth0 && depth0.participant_type), "Group", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " class=\"per_appointment_groups_label\">groups.</span>\n            <span ";
  stack1 = (helper = helpers.ifEqual || (depth0 && depth0.ifEqual),options={hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.participant_type), "Group", options) : helperMissing.call(depth0, "ifEqual", (depth0 && depth0.participant_type), "Group", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " class=\"per_appointment_users_label\">users.</span>\n          </label>\n          <a href=\"#\" class=\"reservation_help hidden\" title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.edit_appointment_group")
  },data:data},helper ? helper.call(depth0, "affect_reservations", "How will this affect reservations?", options) : helperMissing.call(depth0, "t", "affect_reservations", "How will this affect reservations?", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n            <img alt=\"Help\" src=\"/images/help.png\">\n          </a>\n        </li>\n        <li>\n          <label for=\"appointment-blocks-participant-visibility-button-";
  if (helper = helpers.uniqid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.uniqid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">"
    + escapeExpression((helper = helpers.checkbox || (depth0 && depth0.checkbox),options={hash:{
    'id': ("appointment-blocks-participant-visibility-button"),
    'uniqid': (true)
  },data:data},helper ? helper.call(depth0, "participant_visibility", options) : helperMissing.call(depth0, "checkbox", "participant_visibility", options)))
    + " Allow students to see who has signed up for time slots.</label>\n        </li>\n        <li>\n          "
    + escapeExpression((helper = helpers.checkbox || (depth0 && depth0.checkbox),options={hash:{
    'id': ("max-per-student-option"),
    'uniqid': (true),
    'class': ("max-per-student-option")
  },data:data},helper ? helper.call(depth0, "max_appointments_per_participant_option", options) : helperMissing.call(depth0, "checkbox", "max_appointments_per_participant_option", options)))
    + "\n          <label for=\"max-per-student-option-";
  if (helper = helpers.uniqid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.uniqid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">Limit participants to attend </label>\n          <input type=\"number\" name=\"max_appointments_per_participant\"\n            value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.appointment_group)),stack1 == null || stack1 === false ? stack1 : stack1.max_appointments_per_participant)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" min=\"1\"\n            style=\"width: 40px\"\n            aria-label=\""
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "appointments_per_participant_label", "Maximum number of appointments a participant can attend", options) : helperMissing.call(depth0, "t", "appointments_per_participant_label", "Maximum number of appointments a participant can attend", options)))
    + "\" />\n          <label for=\"max-per-student-option-";
  if (helper = helpers.uniqid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.uniqid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">appointment(s).</label>\n          <a href=\"#\" class=\"reservation_help hidden\" title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.edit_appointment_group")
  },data:data},helper ? helper.call(depth0, "affect_reservations", "How will this affect reservations?", options) : helperMissing.call(depth0, "t", "affect_reservations", "How will this affect reservations?", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n            <img alt=\"Help\" src=\"/images/help.png\">\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"details-wrapper\">\n    <label for=\"edit-appointment-details-";
  if (helper = helpers.uniqid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.uniqid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"><b>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.edit_appointment_group")
  },data:data},helper ? helper.call(depth0, "details", "Details:", options) : helperMissing.call(depth0, "t", "details", "Details:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</b></label><br />\n    <textarea id=\"edit-appointment-details-";
  if (helper = helpers.uniqid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.uniqid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" name=\"description\" class=\"input-block-level\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.appointment_group)),stack1 == null || stack1 === false ? stack1 : stack1.description)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</textarea>\n  </div>\n</form>\n";
  return buffer;
  });
  
      
  return templates['calendar/editAppointmentGroup'];
});
