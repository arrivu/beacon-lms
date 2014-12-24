define('jst/publish_grades/NeverDrop', ["compiled/handlebars_helpers","i18n!publish_grades.never_drop"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['publish_grades/NeverDrop'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n  <select name=\"rules[never_drop][]\" aria-labelledby=\"ag_";
  if (helper = helpers.label_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "_never_drop\">\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.assignments), {hash:{},inverse:self.noop,fn:self.programWithDepth(2, program2, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </select>\n";
  return buffer;
  }
function program2(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <option "
    + escapeExpression((helper = helpers.selectedIf || (depth0 && depth0.selectedIf),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.id), (depth1 && depth1.chosen_id), options) : helperMissing.call(depth0, "selectedIf", (depth0 && depth0.id), (depth1 && depth1.chosen_id), options)))
    + " value=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</option>\n    ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n  <span>";
  if (helper = helpers.chosen) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.chosen); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n  <input type=\"hidden\" name=\"rules[never_drop][]\" value=\"";
  if (helper = helpers.chosen_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.chosen_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"/>\n";
  return buffer;
  }

  buffer += "<a\n  href=\"#\"\n  class=\"remove_never_drop\"\n  title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("publish_grades.never_drop")
  },data:data},helper ? helper.call(depth0, "remove_rule", "Remove Rule", options) : helperMissing.call(depth0, "t", "remove_rule", "Remove Rule", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n><i class=\"icon-end\"></i></a>\n\n";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.chosen), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.chosen), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
  
      
  return templates['publish_grades/NeverDrop'];
});
