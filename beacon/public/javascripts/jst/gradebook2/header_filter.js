define('jst/gradebook2/header_filter', ["compiled/handlebars_helpers","i18n!gradebook2.header_filter"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['gradebook2/header_filter'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<div class=\"inline-block\">\n  <a class=\"al-trigger\" href=\"#\" data-append-to-body=\"true\" role=\"button\">\n    <span class=\"current-label\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("gradebook2.header_filter")
  },data:data},helper ? helper.call(depth0, "course_average", "Course average", options) : helperMissing.call(depth0, "t", "course_average", "Course average", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n    <i class=\"icon-mini-arrow-down\"></i>\n  </a>\n\n  <ul class=\"al-options\">\n    <li><a href=\"#\" data-method=\"average\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("gradebook2.header_filter")
  },data:data},helper ? helper.call(depth0, "course_average", "Course average", options) : helperMissing.call(depth0, "t", "course_average", "Course average", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></li>\n    <li><a href=\"#\" data-method=\"median\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("gradebook2.header_filter")
  },data:data},helper ? helper.call(depth0, "course_median", "Course median", options) : helperMissing.call(depth0, "t", "course_median", "Course median", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></li>\n    <li><a href=\"#\" data-method=\"mode\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("gradebook2.header_filter")
  },data:data},helper ? helper.call(depth0, "course_mode", "Course mode", options) : helperMissing.call(depth0, "t", "course_mode", "Course mode", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></li>\n  </ul>\n</div>\n";
  return buffer;
  });
  
      
  return templates['gradebook2/header_filter'];
});
