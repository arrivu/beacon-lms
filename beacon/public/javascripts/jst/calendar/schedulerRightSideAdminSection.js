define('jst/calendar/schedulerRightSideAdminSection', ["compiled/handlebars_helpers","i18n!calendar.scheduler_right_side_admin_section"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['calendar/schedulerRightSideAdminSection'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<div class=\"rs-section\">\n  <p>The scheduler tool lets you set up time slots that students (or student groups) can sign up for. To get started, click the button below.</p>\n  <button class=\"create_link btn\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.scheduler_right_side_admin_section")
  },data:data},helper ? helper.call(depth0, "create_a_new_set_of_appointments", "Create an appointment group", options) : helperMissing.call(depth0, "t", "create_a_new_set_of_appointments", "Create an appointment group", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n</div>\n";
  return buffer;
  });
  
      
  return templates['calendar/schedulerRightSideAdminSection'];
});
