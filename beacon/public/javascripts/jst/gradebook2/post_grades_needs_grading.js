define('jst/gradebook2/post_grades_needs_grading', ["compiled/handlebars_helpers"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['gradebook2/post_grades_needs_grading'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <tr class=\"clickableRow\" data-url=\"gradebook/speed_grader?assignment_id=";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n            <td>";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n            <td>"
    + escapeExpression((helper = helpers.datetimeFormatted || (depth0 && depth0.datetimeFormatted),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.due_at), options) : helperMissing.call(depth0, "datetimeFormatted", (depth0 && depth0.due_at), options)))
    + "</td>\n            <td>";
  if (helper = helpers.needs_grading_count) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.needs_grading_count); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n        </tr>\n    ";
  return buffer;
  }

  buffer += "<div id=\"needs_grading\" >\n    <small><em class=\"text-left\" style=\"color: #555555\">NOTE: Students have submitted work for these assignments that has not been graded. If you post these grades now, you will need to re-post their scores after grading their latest submissions. </em></small>\n    <br><br>\n    <table class=\"table table-hover table-condensed\">\n       <tbody>\n        <thead>\n            <td>Assignment Name</td>\n            <td>Due Date</td>\n            <td>Ungraded Submissions</td>\n        </thead>\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.needs_grading), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </tbody>\n    </table>\n</div>";
  return buffer;
  });
  
      
  return templates['gradebook2/post_grades_needs_grading'];
});
