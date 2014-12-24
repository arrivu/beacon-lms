define('jst/content_migrations/subviews/CourseFindSelect', ["compiled/handlebars_helpers","i18n!content_migrations.subviews.course_find_select"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['content_migrations/subviews/CourseFindSelect'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n     <optgroup label=\"";
  if (helper = helpers.property) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.property); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n         ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.value), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n       </optgroup>\n     ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n           <option value=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</option>\n         ";
  return buffer;
  }

  buffer += "<label class=\"control-label\" for=\"courseSearchField\"><strong>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.subviews.course_find_select")
  },data:data},helper ? helper.call(depth0, "search_label", "Search for a course", options) : helperMissing.call(depth0, "t", "search_label", "Search for a course", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</strong></label>\n\n<div class=\"controls\">\n  <select id=\"courseSelect\" class=\"span3\">\n    <option value=\"default\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.subviews.course_find_select")
  },data:data},helper ? helper.call(depth0, "select_default", "Select a course", options) : helperMissing.call(depth0, "t", "select_default", "Select a course", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n     ";
  stack1 = (helper = helpers.eachProp || (depth0 && depth0.eachProp),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.terms), options) : helperMissing.call(depth0, "eachProp", (depth0 && depth0.terms), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </select>\n  ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.subviews.course_find_select")
  },data:data},helper ? helper.call(depth0, "or", "or", options) : helperMissing.call(depth0, "t", "or", "or", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  <input id=\"courseSearchField\" type=\"text\" placeholder=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.subviews.course_find_select")
  },data:data},helper ? helper.call(depth0, "course_name", "Course name", options) : helperMissing.call(depth0, "t", "course_name", "Course name", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" name=\"courseSearchField\" class='span3'/>\n  <br>\n  <label class=\"checkbox\" for=\"include_completed_courses\">\n    "
    + escapeExpression((helper = helpers.checkbox || (depth0 && depth0.checkbox),options={hash:{
    'checked': ((depth0 && depth0.include_concluded))
  },data:data},helper ? helper.call(depth0, "include_completed_courses", options) : helperMissing.call(depth0, "checkbox", "include_completed_courses", options)))
    + "\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.subviews.course_find_select")
  },data:data},helper ? helper.call(depth0, "include_completed_courses", "Include completed courses", options) : helperMissing.call(depth0, "t", "include_completed_courses", "Include completed courses", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </label>\n</div>\n\n\n";
  return buffer;
  });
  
      
  return templates['content_migrations/subviews/CourseFindSelect'];
});
