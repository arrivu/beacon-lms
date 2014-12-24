define('jst/calendar/calendarNavigator', ["compiled/handlebars_helpers","i18n!calendar.calendar_navigator"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['calendar/calendarNavigator'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<button class=\"navigate_today btn\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.calendar_navigator")
  },data:data},helper ? helper.call(depth0, "today", "Today", options) : helperMissing.call(depth0, "t", "today", "Today", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n<span class=\"navigation_buttons\">\n  <button class=\"navigate_prev btn\">\n    <i class=\"icon-arrow-left\" aria-hidden=\"true\"></i>\n    <span class=\"screenreader-only\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.calendar_navigator")
  },data:data},helper ? helper.call(depth0, "previous", "Previous", options) : helperMissing.call(depth0, "t", "previous", "Previous", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n  </button>\n  <button class=\"navigate_next btn\">\n    <i class=\"icon-arrow-right\" aria-hidden=\"true\"></i>\n    <span class=\"screenreader-only\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.calendar_navigator")
  },data:data},helper ? helper.call(depth0, "next", "Next", options) : helperMissing.call(depth0, "t", "next", "Next", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n  </button>\n</span>\n<h2 class=\"navigation_title\" role=\"button\" tabindex=\"0\"></h2>\n<span class=\"date_field_wrapper\">\n  <input type=\"text\" name=\"start date\" style=\"width: 100px;\" class=\"date_field\"\n         aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.calendar_navigator")
  },data:data},helper ? helper.call(depth0, "enter_navigation_date", "Enter the date you would like to navigate to.", options) : helperMissing.call(depth0, "t", "enter_navigation_date", "Enter the date you would like to navigate to.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" />\n</span>\n";
  return buffer;
  });
  
      
  return templates['calendar/calendarNavigator'];
});
