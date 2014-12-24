define('jst/assignments/SectionDropdownView', ["compiled/handlebars_helpers"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['assignments/SectionDropdownView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n<option value=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n  "
    + escapeExpression((helper = helpers.selectedIf || (depth0 && depth0.selectedIf),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.id), ((stack1 = (depth1 && depth1.override)),stack1 == null || stack1 === false ? stack1 : stack1.course_section_id), options) : helperMissing.call(depth0, "selectedIf", (depth0 && depth0.id), ((stack1 = (depth1 && depth1.override)),stack1 == null || stack1 === false ? stack1 : stack1.course_section_id), options)))
    + ">\n  ";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n</option>\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, (depth0 && depth0.sections), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
  
      
  return templates['assignments/SectionDropdownView'];
});
