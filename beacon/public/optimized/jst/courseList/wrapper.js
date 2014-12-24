define('jst/courseList/wrapper', ["compiled/handlebars_helpers","i18n!course_list.wrapper"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['courseList/wrapper'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<div class=\"customListWrapper\">\n  <button class=\"btn btn-small customListRestore\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("course_list.wrapper")
  },data:data},helper ? helper.call(depth0, "reset_course_menu", "Reset", options) : helperMissing.call(depth0, "t", "reset_course_menu", "Reset", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n  <a class=\"customListClose\" href=\"#\" title='";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("course_list.wrapper")
  },data:data},helper ? helper.call(depth0, "close_course_menu_title", "close", options) : helperMissing.call(depth0, "t", "close_course_menu_title", "close", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "' aria-label='";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("course_list.wrapper")
  },data:data},helper ? helper.call(depth0, "close_course_menu_title", "close", options) : helperMissing.call(depth0, "t", "close_course_menu_title", "close", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "' role=\"button\"></a>\n  <ul class=\"customListContent menu-item-drop-column-list\"></ul>\n</div>";
  return buffer;
  });
  
      
  return templates['courseList/wrapper'];
});
