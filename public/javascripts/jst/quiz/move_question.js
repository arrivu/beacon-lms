define('jst/quiz/move_question', ["compiled/handlebars_helpers"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['quiz/move_question'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<li class=\"list_question\">\n  <input type=\"checkbox\" id=\"list_question_"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.assessment_question)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"list_question_checkbox\" name=\"questions["
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.assessment_question)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.assessment_question)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" />\n  <label for=\"list_question_"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.assessment_question)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"list_question_name\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.assessment_question)),stack1 == null || stack1 === false ? stack1 : stack1.question_data)),stack1 == null || stack1 === false ? stack1 : stack1.question_name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</label>\n  <div class=\"list_question_text\">";
  stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.assessment_question)),stack1 == null || stack1 === false ? stack1 : stack1.question_data)),stack1 == null || stack1 === false ? stack1 : stack1.question_text)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n</li>\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, (depth0 && depth0.questions), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
  
      
  return templates['quiz/move_question'];
});
