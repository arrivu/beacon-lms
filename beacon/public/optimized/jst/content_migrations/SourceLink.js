define('jst/content_migrations/SourceLink', ["compiled/handlebars_helpers"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['content_migrations/SourceLink'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <span><a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.settings)),stack1 == null || stack1 === false ? stack1 : stack1.source_course_html_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-tooltip title=\""
    + escapeExpression((helper = helpers.escape_html || (depth0 && depth0.escape_html),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.settings)),stack1 == null || stack1 === false ? stack1 : stack1.source_course_name), options) : helperMissing.call(depth0, "escape_html", ((stack1 = (depth0 && depth0.settings)),stack1 == null || stack1 === false ? stack1 : stack1.source_course_name), options)))
    + "\">"
    + escapeExpression((helper = helpers.truncate || (depth0 && depth0.truncate),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.settings)),stack1 == null || stack1 === false ? stack1 : stack1.source_course_name), 25, options) : helperMissing.call(depth0, "truncate", ((stack1 = (depth0 && depth0.settings)),stack1 == null || stack1 === false ? stack1 : stack1.source_course_name), 25, options)))
    + "</a></span>\n";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n   ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.attachment), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <span><a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attachment)),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-tooltip title=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attachment)),stack1 == null || stack1 === false ? stack1 : stack1.filename)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression((helper = helpers.truncate_left || (depth0 && depth0.truncate_left),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.attachment)),stack1 == null || stack1 === false ? stack1 : stack1.filename), 25, options) : helperMissing.call(depth0, "truncate_left", ((stack1 = (depth0 && depth0.attachment)),stack1 == null || stack1 === false ? stack1 : stack1.filename), 25, options)))
    + "</a></span>\n   ";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.settings)),stack1 == null || stack1 === false ? stack1 : stack1.source_course_name), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
  
      
  return templates['content_migrations/SourceLink'];
});
