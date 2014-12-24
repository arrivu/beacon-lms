define('jst/gradebook2/post_grades_summary', ["compiled/handlebars_helpers"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['gradebook2/post_grades_summary'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<style>\n    .post-summary-center {\n        margin-top: 120px\n    }\n</style>\n<div class=\"post-summary post-summary-center\" style=\"margin-left: 75px\">\n    <h1 class=\"lead text-left\" style=\"color: #aaaaaa; font-size: 28px\">You are ready to post <span class=\"assignments_to_post_count\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.assignments_to_post)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span> assignments.</h1>\n    <div id=\"ungraded_count\"></div>\n</div>";
  return buffer;
  });
  
      
  return templates['gradebook2/post_grades_summary'];
});
