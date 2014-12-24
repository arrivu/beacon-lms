define('jst/assignments/homework_submission_tool', ["compiled/handlebars_helpers"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['assignments/homework_submission_tool'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <img style=\"max-width: 25px; max-height: 25px;\" src='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.homework_submission)),stack1 == null || stack1 === false ? stack1 : stack1.icon_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'/>\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.icon_url), {hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n        <img style=\"max-width: 25px; max-height: 25px;\" src='";
  if (helper = helpers.icon_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.icon_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'/>\n      ";
  return buffer;
  }

function program6(depth0,data) {
  
  
  return "\n        <img src='/images/link.png'/>\n      ";
  }

  buffer += "<li class='tool'>\n  <a href='#'>\n    ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.homework_submission)),stack1 == null || stack1 === false ? stack1 : stack1.icon_url), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    ";
  if (helper = helpers.display_text) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.display_text); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n  </a>\n</li>";
  return buffer;
  });
  
      
  return templates['assignments/homework_submission_tool'];
});
