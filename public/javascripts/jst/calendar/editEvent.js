define('jst/calendar/editEvent', ["compiled/handlebars_helpers","i18n!calendar.edit_event"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['calendar/editEvent'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<div class=\"content\" id=\"edit_event_tabs\">\n  <ul class=\"tab_list\">\n    <li><a href=\"#edit_calendar_event_form_holder\" class=\"edit_calendar_event_option\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.edit_event")
  },data:data},helper ? helper.call(depth0, "tabs.event", "Event", options) : helperMissing.call(depth0, "t", "tabs.event", "Event", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></li>\n    <li><a href=\"#edit_assignment_form_holder\" class=\"edit_assignment_option\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.edit_event")
  },data:data},helper ? helper.call(depth0, "tabs.assignment", "Assignment", options) : helperMissing.call(depth0, "t", "tabs.assignment", "Assignment", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></li>\n  </ul>\n  <div id=\"edit_calendar_event_form_holder\" class=\"tab_holder clearfix\"></div>\n  <div id=\"edit_assignment_form_holder\" class=\"tab_holder clearfix\"></div>\n</div>";
  return buffer;
  });
  
      
  return templates['calendar/editEvent'];
});
