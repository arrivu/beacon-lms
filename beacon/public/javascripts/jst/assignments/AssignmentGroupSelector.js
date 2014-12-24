define('jst/assignments/AssignmentGroupSelector', ["compiled/handlebars_helpers","i18n!assignments.assignment_group_selector"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['assignments/AssignmentGroupSelector'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  
  return "assignment[assignment_group_id]";
  }

function program3(depth0,data) {
  
  
  return "assignment_group_id";
  }

function program5(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      <option value=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" "
    + escapeExpression((helper = helpers.selectedIf || (depth1 && depth1.selectedIf),options={hash:{},data:data},helper ? helper.call(depth0, (depth1 && depth1.assignmentGroupId), (depth0 && depth0.id), options) : helperMissing.call(depth0, "selectedIf", (depth1 && depth1.assignmentGroupId), (depth0 && depth0.id), options)))
    + ">\n        ";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n      </option>\n    ";
  return buffer;
  }

  buffer += "<div class=\"form-column-left no-group\">\n  <label for=\"assignment_group_id\">\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.assignment_group_selector")
  },data:data},helper ? helper.call(depth0, "assignment_group", "Assignment Group", options) : helperMissing.call(depth0, "t", "assignment_group", "Assignment Group", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </label>\n</div>\n\n<div class=\"form-column-right\">\n  <select id=\"assignment_group_id\"\n    name=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.nested), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n    "
    + escapeExpression((helper = helpers.disabledIfIncludes || (depth0 && depth0.disabledIfIncludes),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.frozenAttributes), "assignment_group_id", options) : helperMissing.call(depth0, "disabledIfIncludes", (depth0 && depth0.frozenAttributes), "assignment_group_id", options)))
    + ">\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.assignmentGroups), {hash:{},inverse:self.noop,fn:self.programWithDepth(5, program5, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <option value=\"new\">\n      [ ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.assignment_group_selector")
  },data:data},helper ? helper.call(depth0, "assignment_group_options.new_group", "New Group", options) : helperMissing.call(depth0, "t", "assignment_group_options.new_group", "New Group", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ]\n    </option>\n  </select>\n</div>\n\n";
  return buffer;
  });
  
      
  return templates['assignments/AssignmentGroupSelector'];
});
