define('jst/calendar/editCalendarEventFull', ["compiled/handlebars_helpers","i18n!calendar.edit_calendar_event_full"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['calendar/editCalendarEventFull'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function";

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.edit_calendar_event_full")
  },data:data},helper ? helper.call(depth0, "new_calendar_event_header", "New Calendar Event", options) : helperMissing.call(depth0, "t", "new_calendar_event_header", "New Calendar Event", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;
  }

function program3(depth0,data) {
  
  var stack1, helper, options;
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.edit_calendar_event_full")
  },data:data},helper ? helper.call(depth0, "edit_calendar_event_header", "Edit Calendar Event", options) : helperMissing.call(depth0, "t", "edit_calendar_event_header", "Edit Calendar Event", options));
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }

function program5(depth0,data) {
  
  
  return "use_section_dates";
  }

function program7(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <label class=\"label_with_checkbox\" for=\"use_section_dates\">\n      "
    + escapeExpression((helper = helpers.checkbox || (depth0 && depth0.checkbox),options={hash:{},data:data},helper ? helper.call(depth0, "use_section_dates", options) : helperMissing.call(depth0, "checkbox", "use_section_dates", options)))
    + "\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.edit_calendar_event_full")
  },data:data},helper ? helper.call(depth0, "different_date_for_each_section", "Use a different date for each section", options) : helperMissing.call(depth0, "t", "different_date_for_each_section", "Use a different date for each section", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </label>\n\n    <input type=\"hidden\"\n           name=\"remove_child_events\"\n           value=\"";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.use_section_dates), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" />\n  ";
  return buffer;
  }
function program8(depth0,data) {
  
  
  return "1";
  }

function program10(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += " value=\""
    + escapeExpression((helper = helpers.tTimeToString || (depth0 && depth0.tTimeToString),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.start_at), "tiny", options) : helperMissing.call(depth0, "tTimeToString", (depth0 && depth0.start_at), "tiny", options)))
    + "\" ";
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += " value=\""
    + escapeExpression((helper = helpers.tTimeToString || (depth0 && depth0.tTimeToString),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.end_at), "tiny", options) : helperMissing.call(depth0, "tTimeToString", (depth0 && depth0.end_at), "tiny", options)))
    + "\" ";
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <table class=\"formtable show_if_using_sections\">\n      ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.course_sections), {hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </table>\n  ";
  return buffer;
  }
function program15(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      <tr class=\"date_start_end_row\">\n        <td colspan=\"4\"><label class=\"row_header\" for=\"section_";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "_start_date\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</label></td>\n      </tr>\n      <tr class=\"date_start_end_row\">\n        <td>\n          <input type=\"text\"\n                 id=\"section_";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "_start_date\"\n                 name=\"child_event_data[";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "][start_date]\"\n                 class=\"date_field\"\n                 value=\""
    + escapeExpression((helper = helpers.tDateToString || (depth0 && depth0.tDateToString),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.event)),stack1 == null || stack1 === false ? stack1 : stack1.start_at), "medium", options) : helperMissing.call(depth0, "tDateToString", ((stack1 = (depth0 && depth0.event)),stack1 == null || stack1 === false ? stack1 : stack1.start_at), "medium", options)))
    + "\"\n                 aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.edit_calendar_event_full")
  },data:data},helper ? helper.call(depth0, "date", "Date", options) : helperMissing.call(depth0, "t", "date", "Date", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n                 placeholder=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.edit_calendar_event_full")
  },data:data},helper ? helper.call(depth0, "date", "Date", options) : helperMissing.call(depth0, "t", "date", "Date", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" />\n        </td>\n        <td>\n          <input type=\"text\"\n                 name=\"child_event_data[";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "][start_time]\"\n                 class=\"time_field\"\n                 ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.all_day), {hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                 aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.edit_calendar_event_full")
  },data:data},helper ? helper.call(depth0, "start_time", "Start Time", options) : helperMissing.call(depth0, "t", "start_time", "Start Time", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n                 placeholder=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.edit_calendar_event_full")
  },data:data},helper ? helper.call(depth0, "start_time", "Start Time", options) : helperMissing.call(depth0, "t", "start_time", "Start Time", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" />\n        </td>\n\n        <td><span class=\"time_separator\">-</span></td>\n\n        <td>\n          <input type=\"text\"\n                 name=\"child_event_data[";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "][end_time]\"\n                 class=\"time_field\"\n                 ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.all_day), {hash:{},inverse:self.noop,fn:self.program(18, program18, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                 aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.edit_calendar_event_full")
  },data:data},helper ? helper.call(depth0, "end_time", "End Time", options) : helperMissing.call(depth0, "t", "end_time", "End Time", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n                 placeholder=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.edit_calendar_event_full")
  },data:data},helper ? helper.call(depth0, "end_time", "End Time", options) : helperMissing.call(depth0, "t", "end_time", "End Time", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" />\n          <input type=\"hidden\"\n                 name=\"child_event_data[";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "][context_code]\"\n                 value=\"course_section_";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" />\n        </td>\n      </tr>\n      ";
  return buffer;
  }
function program16(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += " value=\""
    + escapeExpression((helper = helpers.tTimeToString || (depth0 && depth0.tTimeToString),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.event)),stack1 == null || stack1 === false ? stack1 : stack1.start_at), "tiny", options) : helperMissing.call(depth0, "tTimeToString", ((stack1 = (depth0 && depth0.event)),stack1 == null || stack1 === false ? stack1 : stack1.start_at), "tiny", options)))
    + "\" ";
  return buffer;
  }

function program18(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += " value=\""
    + escapeExpression((helper = helpers.tTimeToString || (depth0 && depth0.tTimeToString),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.event)),stack1 == null || stack1 === false ? stack1 : stack1.end_at), "tiny", options) : helperMissing.call(depth0, "tTimeToString", ((stack1 = (depth0 && depth0.event)),stack1 == null || stack1 === false ? stack1 : stack1.end_at), "tiny", options)))
    + "\" ";
  return buffer;
  }

function program20(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      <button type=\"button\" class=\"btn delete_link\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.edit_calendar_event_full")
  },data:data},helper ? helper.call(depth0, "delete", "Delete", options) : helperMissing.call(depth0, "t", "delete", "Delete", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n    ";
  return buffer;
  }

function program22(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      <a href=\"";
  if (helper = helpers.return_to_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.return_to_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"btn\" role=\"button\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.edit_calendar_event_full")
  },data:data},helper ? helper.call(depth0, "#buttons.cancel", "Cancel", options) : helperMissing.call(depth0, "t", "#buttons.cancel", "Cancel", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n    ";
  return buffer;
  }

function program24(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.edit_calendar_event_full")
  },data:data},helper ? helper.call(depth0, "buttons.create", "Create Event", options) : helperMissing.call(depth0, "t", "buttons.create", "Create Event", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;
  }

function program26(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.edit_calendar_event_full")
  },data:data},helper ? helper.call(depth0, "buttons.update", "Update Event", options) : helperMissing.call(depth0, "t", "buttons.update", "Update Event", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;
  }

  buffer += "<h1 class=\"screenreader-only\">\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.newRecord), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</h1>\n<form id=\"editCalendarEventFull\" class=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.use_section_dates), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n  <input type=\"text\"\n         name=\"title\"\n         class=\"title input-block-level\"\n         aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.edit_calendar_event_full")
  },data:data},helper ? helper.call(depth0, "event_title", "Event Title", options) : helperMissing.call(depth0, "t", "event_title", "Event Title", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n         placeholder=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.edit_calendar_event_full")
  },data:data},helper ? helper.call(depth0, "event_title", "Event Title", options) : helperMissing.call(depth0, "t", "event_title", "Event Title", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n         value=\"";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n         maxlength=\"255\" />\n\n  <div class=\"clearfix\">\n    <a href=\"#\" class=\"switch_event_description_view pull-right\">\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.edit_calendar_event_full")
  },data:data},helper ? helper.call(depth0, "#editor.switch_editor_html", "HTML Editor", options) : helperMissing.call(depth0, "t", "#editor.switch_editor_html", "HTML Editor", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </a>\n    <a href=\"#\" class=\"switch_event_description_view pull-right\" style=\"display:none;\">\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.edit_calendar_event_full")
  },data:data},helper ? helper.call(depth0, "#editor.switch_editor_rich_text", "Rich Content Editor", options) : helperMissing.call(depth0, "t", "#editor.switch_editor_rich_text", "Rich Content Editor", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </a>\n  </div>\n  <textarea class=\"input-block-level\"\n            name=\"description\"\n            aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.edit_calendar_event_full")
  },data:data},helper ? helper.call(depth0, "event_description", "Event Description", options) : helperMissing.call(depth0, "t", "event_description", "Event Description", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n            style=\"width: 100%\">";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</textarea>\n\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.course_sections), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n  <div class=\"hide_if_using_sections date_start_end_row\">\n    <table>\n      <tbody>\n        <tr>\n          <td>\n            <input type=\"text\"\n                   name=\"start_date\"\n                   class=\"date_field\"\n                   value=\""
    + escapeExpression((helper = helpers.tDateToString || (depth0 && depth0.tDateToString),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.start_at), "medium", options) : helperMissing.call(depth0, "tDateToString", (depth0 && depth0.start_at), "medium", options)))
    + "\"\n                   aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.edit_calendar_event_full")
  },data:data},helper ? helper.call(depth0, "date", "Date", options) : helperMissing.call(depth0, "t", "date", "Date", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n                   placeholder=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.edit_calendar_event_full")
  },data:data},helper ? helper.call(depth0, "date", "Date", options) : helperMissing.call(depth0, "t", "date", "Date", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" />\n          </td>\n          <td>\n            <input type=\"text\"\n                   name=\"start_time\"\n                   class=\"time_field\"\n                   ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.all_day), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                   aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.edit_calendar_event_full")
  },data:data},helper ? helper.call(depth0, "start_time", "Start Time", options) : helperMissing.call(depth0, "t", "start_time", "Start Time", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n                   placeholder=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.edit_calendar_event_full")
  },data:data},helper ? helper.call(depth0, "start_time", "Start Time", options) : helperMissing.call(depth0, "t", "start_time", "Start Time", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" />\n          </td>\n          <td><span class=\"time_separator\">-</span></td>\n          <td>\n            <input type=\"text\"\n                   name=\"end_time\"\n                   class=\"time_field\"\n                   ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.all_day), {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                   aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.edit_calendar_event_full")
  },data:data},helper ? helper.call(depth0, "end_time", "End Time", options) : helperMissing.call(depth0, "t", "end_time", "End Time", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n                   placeholder=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.edit_calendar_event_full")
  },data:data},helper ? helper.call(depth0, "end_time", "End Time", options) : helperMissing.call(depth0, "t", "end_time", "End Time", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" />\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div>\n    <table id=\"calendar_event_location_info\">\n      <tbody>\n        <tr>\n          <td>\n            <label for=\"calendar_event_location_name\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.edit_calendar_event_full")
  },data:data},helper ? helper.call(depth0, "location_name", "Location:", options) : helperMissing.call(depth0, "t", "location_name", "Location:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n            <input id=\"calendar_event_location_name\" name=\"location_name\" size=\"30\" maxlength=\"255\" type=\"text\" value=\"";
  if (helper = helpers.location_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.location_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"/>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <label for=\"calendar_event_location_address\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.edit_calendar_event_full")
  },data:data},helper ? helper.call(depth0, "location_address", "Address:", options) : helperMissing.call(depth0, "t", "location_address", "Address:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n            <input id=\"calendar_event_location_address\" name=\"location_address\" size=\"30\" maxlength=\"255\" type=\"text\" value=\"";
  if (helper = helpers.location_address) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.location_address); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"/>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.course_sections), {hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n  <div class=\"form-actions\">\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.url), {hash:{},inverse:self.noop,fn:self.program(20, program20, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.return_to_url), {hash:{},inverse:self.noop,fn:self.program(22, program22, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <button type=\"submit\" class=\"btn btn-primary\">\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.newRecord), {hash:{},inverse:self.program(26, program26, data),fn:self.program(24, program24, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </button>\n  </div>\n\n</form>\n";
  return buffer;
  });
  
      
  return templates['calendar/editCalendarEventFull'];
});
