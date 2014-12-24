define('jst/calendar/editApptCalendarEvent', ["compiled/handlebars_helpers","i18n!calendar.edit_appt_calendar_event"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['calendar/editApptCalendarEvent'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<form action=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.calendarEvent)),stack1 == null || stack1 === false ? stack1 : stack1.appointment_group_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" id=\"edit_appt_calendar_event_form\">\n  <p>\n    <strong>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.edit_appt_calendar_event")
  },data:data},helper ? helper.call(depth0, "description", "Description:", options) : helperMissing.call(depth0, "t", "description", "Description:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</strong><br>\n    <textarea name=\"description\">";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</textarea>\n  </p>\n  <p>\n    "
    + escapeExpression((helper = helpers.checkbox || (depth0 && depth0.checkbox),options={hash:{
    'id': ((depth0 && depth0.null))
  },data:data},helper ? helper.call(depth0, "max_participants_option", options) : helperMissing.call(depth0, "checkbox", "max_participants_option", options)))
    + "\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.edit_appt_calendar_event")
  },data:data},helper ? helper.call(depth0, "slot_limit", "Limit this slot to", options) : helperMissing.call(depth0, "t", "slot_limit", "Limit this slot to", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <input type=\"number\" name=\"max_participants\" class=\"max-participants\" min=\"1\" disabled>\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.edit_appt_calendar_event")
  },data:data},helper ? helper.call(depth0, "users", "users.", options) : helperMissing.call(depth0, "t", "users", "users.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </p>\n</form>\n";
  return buffer;
  });
  
      
  return templates['calendar/editApptCalendarEvent'];
});
