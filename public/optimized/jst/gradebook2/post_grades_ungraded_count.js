define('jst/gradebook2/post_grades_ungraded_count', ["compiled/handlebars_helpers"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['gradebook2/post_grades_ungraded_count'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<h4 class=\"text-left\" style=\"color: #AAAAAA\"><a href=\"#\" id=\"needs-grading\">";
  if (helper = helpers.needs_grading_count) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.needs_grading_count); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " assignments</a> have ungraded submissions.</h4>\n\n";
  return buffer;
  });
  
      
  return templates['gradebook2/post_grades_ungraded_count'];
});
