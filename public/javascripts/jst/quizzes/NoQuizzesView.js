define('jst/quizzes/NoQuizzesView', ["compiled/handlebars_helpers","i18n!quizzes.no_quizzes_view"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['quizzes/NoQuizzesView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<h2 class=\"ig-header\">\n  <i class=\"icon-mini-arrow-down\"></i> ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.no_quizzes_view")
  },data:data},helper ? helper.call(depth0, "headers.course_quizzes", "Course Quizzes", options) : helperMissing.call(depth0, "t", "headers.course_quizzes", "Course Quizzes", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</h2>\n\n<ul class=\"ig-list\">\n  <li>\n    <div class=\"ig-row ig-row-empty\">\n      <div class=\"ig-empty-msg\">\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.no_quizzes_view")
  },data:data},helper ? helper.call(depth0, "no_quizzes", "No quizzes available", options) : helperMissing.call(depth0, "t", "no_quizzes", "No quizzes available", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </div>\n    </div>\n  </li>\n</ul>\n";
  return buffer;
  });
  
      
  return templates['quizzes/NoQuizzesView'];
});
