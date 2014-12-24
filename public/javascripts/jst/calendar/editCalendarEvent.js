define('jst/calendar/editCalendarEvent', ["compiled/handlebars_helpers","i18n!calendar.edit_calendar_event"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['calendar/editCalendarEvent'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n            ";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n          ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n            <input id=\"calendar_event_title\" name=\"calendar_event[title]\" size=\"30\" maxlength=\"255\" style=\"width: 150px;\" type=\"text\" value=\"";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"/>\n          ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n              ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.can_create_calendar_events), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                <option value=\"";
  if (helper = helpers.asset_string) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.asset_string); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</option>\n              ";
  return buffer;
  }

  buffer += "<form action='#' id='edit_calendar_event_form' style='padding: 5px; width: 400px'>\n  <div class=\"event-details-content\">\n    <table class=\"formtable\" style=\"width: 100%;\">\n      <tr>\n        <td style=\"vertical-align: top;\"><label for=\"calendar_event_title\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.edit_calendar_event")
  },data:data},helper ? helper.call(depth0, "title", "Title:", options) : helperMissing.call(depth0, "t", "title", "Title:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label></td>\n        <td>\n          ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.lockedTitle), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </td>\n      </tr>\n      <tr>\n        <td style=\"vertical-align: top;\"><label for=\"calendar_event_date\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.edit_calendar_event")
  },data:data},helper ? helper.call(depth0, "date", "Date:", options) : helperMissing.call(depth0, "t", "date", "Date:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label></td>\n        <td><input id=\"calendar_event_date\"type=\"text\" name=\"date\" style=\"width: 100px;\" class=\"date_field\"/></td>\n      </tr>\n      <tr>\n        <td style=\"vertical-align: top;\"><label for=\"calendar_event_start_time\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.edit_calendar_event")
  },data:data},helper ? helper.call(depth0, "from", "From:", options) : helperMissing.call(depth0, "t", "from", "From:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label></td>\n        <td>\n          <div style=\"float: left;\"><input id=\"calendar_event_start_time\" type=\"text\" name=\"start_time\" style=\"width: 60px;\" class=\"time_field start_time\"/></div>\n          <div style=\"float: left; margin: 5px\"><label for=\"calendar_event_end_time\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.edit_calendar_event")
  },data:data},helper ? helper.call(depth0, "timespan_separator", "to", options) : helperMissing.call(depth0, "t", "timespan_separator", "to", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label></div>\n          <div style=\"float: left;\"><input id=\"calendar_event_end_time\" type=\"text\" name=\"end_time\" style=\"width: 60px;\" class=\"time_field end_time\"/></div>\n          <div class=\"clear\"></div>\n        </td>\n      </tr>\n      <tr>\n        <td style=\"vertical-align: top;\"><label for=\"calendar_event_location_name\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.edit_calendar_event")
  },data:data},helper ? helper.call(depth0, "location", "Location:", options) : helperMissing.call(depth0, "t", "location", "Location:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label></td>\n        <td><input id=\"calendar_event_location_name\" name=\"location_name\" size=\"30\" maxlength=\"255\" style=\"width: 185px;\" type=\"text\" value=\"";
  if (helper = helpers.location_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.location_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"/></td>\n      </tr>\n      <tr class=\"context_select\">\n        <td><label for=\"calendar_event_context\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.edit_calendar_event")
  },data:data},helper ? helper.call(depth0, "calendar", "Calendar:", options) : helperMissing.call(depth0, "t", "calendar", "Calendar:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</td>\n        <td>\n          <select id=\"calendar_event_context\" class=\"context_id\" name=\"calendar_event[context_code]\">\n            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.contexts), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </select>\n        </td>\n      </tr>\n    </table>\n  </div>\n  <div class=\"popover-links-holder event-details-footer pull-right\">\n    <a href=\"#\" class=\"event_button btn btn-secondary more_options_link\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.edit_calendar_event")
  },data:data},helper ? helper.call(depth0, "links.more_options", "More Options", options) : helperMissing.call(depth0, "t", "links.more_options", "More Options", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n    <button type=\"submit\" class=\"event_button btn btn-primary\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.edit_calendar_event")
  },data:data},helper ? helper.call(depth0, "#buttons.submit", "Submit", options) : helperMissing.call(depth0, "t", "#buttons.submit", "Submit", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n  </div>\n</form>\n";
  return buffer;
  });
  
      
  return templates['calendar/editCalendarEvent'];
});
