define('jst/calendar/calendarHeader', ["compiled/handlebars_helpers","i18n!calendar.calendar_header"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['calendar/calendarHeader'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n          <button type=\"button\" id=\"scheduler\" class=\"btn\" role=\"radio\" aria-checked=\"false\">\n            ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.calendar_header")
  },data:data},helper ? helper.call(depth0, "links.calendar_scheduler", "Scheduler", options) : helperMissing.call(depth0, "t", "links.calendar_scheduler", "Scheduler", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </button>\n        ";
  return buffer;
  }

  buffer += "<div class=\"calendar_header header-table\">\n  <div class=\"recommend_agenda screenreader-only\">\n    <button id=\"use_agenda\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.calendar_header")
  },data:data},helper ? helper.call(depth0, "links.improved_accessibility_recommend_agenda", "Warning: For improved accessibility, please use the \"Agenda view\" Calendar.", options) : helperMissing.call(depth0, "t", "links.improved_accessibility_recommend_agenda", "Warning: For improved accessibility, please use the \"Agenda view\" Calendar.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n  </div>\n  <div class=\"header-table-row\">\n    <div class=\"header-table-cell header-table-left\">\n      <div class=\"calendar_navigator\"></div>\n      <h2 class=\"appointment_group_title\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.calendar_header")
  },data:data},helper ? helper.call(depth0, "my_appointment_groups", "My Appointment Groups", options) : helperMissing.call(depth0, "t", "my_appointment_groups", "My Appointment Groups", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h2>\n      <button class=\"btn scheduler_done_button\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.calendar_header")
  },data:data},helper ? helper.call(depth0, "done_go_back_to_list", "Done, Go Back To List", options) : helperMissing.call(depth0, "t", "done_go_back_to_list", "Done, Go Back To List", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n    </div>\n    <div class=\"calendar_action_buttons header-table-cell header-table-right\">\n      <span id=\"refresh_calendar_link\"\n            title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.calendar_header")
  },data:data},helper ? helper.call(depth0, "loading", "Loading", options) : helperMissing.call(depth0, "t", "loading", "Loading", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n            data-tooltip>\n        <span class=\"screenreader-only\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.calendar_header")
  },data:data},helper ? helper.call(depth0, "loading", "Loading", options) : helperMissing.call(depth0, "t", "loading", "Loading", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n      </span>\n      <span class=\"calendar_view_buttons btn-group\" role=\"radiogroup\">\n        <button type=\"button\" id=\"week\" class=\"btn calendar-button\" role=\"radio\" aria-checked=\"false\">\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.calendar_header")
  },data:data},helper ? helper.call(depth0, "links.calendar_week", "Week", options) : helperMissing.call(depth0, "t", "links.calendar_week", "Week", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          <span class=\"screenreader-only accessibility-warning\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.calendar_header")
  },data:data},helper ? helper.call(depth0, "links.accessibility_warning", "Warning: This view is not accessible to screenreaders. Use the Agenda View instead.", options) : helperMissing.call(depth0, "t", "links.accessibility_warning", "Warning: This view is not accessible to screenreaders. Use the Agenda View instead.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n        </button>\n        <button type=\"button\" id=\"month\" class=\"btn calendar-button\" role=\"radio\" aria-checked=\"false\">\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.calendar_header")
  },data:data},helper ? helper.call(depth0, "links.calendar_month", "Month", options) : helperMissing.call(depth0, "t", "links.calendar_month", "Month", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          <span class=\"screenreader-only accessibility-warning\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.calendar_header")
  },data:data},helper ? helper.call(depth0, "links.accessibility_warning", "Warning: This view is not accessible to screenreaders. Use the Agenda View instead.", options) : helperMissing.call(depth0, "t", "links.accessibility_warning", "Warning: This view is not accessible to screenreaders. Use the Agenda View instead.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n        </button>\n        <button type=\"button\" id=\"agenda\" class=\"btn\" role=\"radio\" aria-checked=\"false\">\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.calendar_header")
  },data:data},helper ? helper.call(depth0, "links.calendar_agenda", "Agenda", options) : helperMissing.call(depth0, "t", "links.calendar_agenda", "Agenda", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </button>\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.showScheduler), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </span>\n      <a href=\"#\" id=\"create_new_event_link\" class=\"btn\" title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.calendar_header")
  },data:data},helper ? helper.call(depth0, "create_event", "Create New Event", options) : helperMissing.call(depth0, "t", "create_event", "Create New Event", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-tooltip role=\"button\">\n        <i class=\"icon-plus\"></i>\n        <span class=\"screenreader-only\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.calendar_header")
  },data:data},helper ? helper.call(depth0, "create_event", "Create New Event", options) : helperMissing.call(depth0, "t", "create_event", "Create New Event", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n      </a>\n    </div>\n  </div>\n</div>\n";
  return buffer;
  });
  
      
  return templates['calendar/calendarHeader'];
});
