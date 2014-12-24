define('jst/courses/roster/LinkToStudentsView', ["compiled/handlebars_helpers","i18n!courses.roster.link_to_students_view"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['courses/roster/LinkToStudentsView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<p>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("courses.roster.link_to_students_view")
  },data:data},helper ? helper.call(depth0, "link_student_desc", "When an observer is linked to a student, they have access to that student's grades and course interactions.", options) : helperMissing.call(depth0, "t", "link_student_desc", "When an observer is linked to a student, they have access to that student's grades and course interactions.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n\n<p>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("courses.roster.link_to_students_view"),
    'w0': ("<b>$1</b>")
  },data:data},helper ? helper.call(depth0, "link_student_action", "To link the course observer *%{name}* to a student, select the student's name from the list below.", options) : helperMissing.call(depth0, "t", "link_student_action", "To link the course observer *%{name}* to a student, select the student's name from the list below.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n\n<input id=\"student_input\" name=\"students\" data-finder_url=\"";
  if (helper = helpers.studentsUrl) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.studentsUrl); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" type=\"text\" style=\"display:none;\">\n";
  return buffer;
  });
  
      
  return templates['courses/roster/LinkToStudentsView'];
});
