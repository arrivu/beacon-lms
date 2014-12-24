define('jst/assignments/DeleteGroup', ["compiled/handlebars_helpers","i18n!assignments.delete_group"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['assignments/DeleteGroup'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n          <option class=\"move_to_ag_";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" value=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</option>\n        ";
  return buffer;
  }

  buffer += "<div class=\"form-dialog-content\">\n  <div class=\"form-horizontal\">\n    <p>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.delete_group"),
    'w0': ("<strong>$1</strong>"),
    'w1': ("<strong class=\"assignment_count\">$1</strong>")
  },data:data},helper ? helper.call(depth0, "warnings.delete_assignment_group", "You are about to delete *%{name}*, which has **%{assignment_count}** assignments in it.", options) : helperMissing.call(depth0, "t", "warnings.delete_assignment_group", "You are about to delete *%{name}*, which has **%{assignment_count}** assignments in it.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </p>\n      <p>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.delete_group")
  },data:data},helper ? helper.call(depth0, "would_you_like", "Would you like to:", options) : helperMissing.call(depth0, "t", "would_you_like", "Would you like to:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n    <p>\n      <label class=\"radio\"><input type=\"radio\" class=\"assignment_group_delete\" name=\"action\" value=\"delete\" checked=\"checked\"/> ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.delete_group")
  },data:data},helper ? helper.call(depth0, "labels.delete_assignments_in_group", "Delete its assignments", options) : helperMissing.call(depth0, "t", "labels.delete_assignments_in_group", "Delete its assignments", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n    </p>\n    <p>\n      <label id=\"ag_move_";
  if (helper = helpers.label_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"radio\"><input type=\"radio\" class=\"assignment_group_move\" name=\"action\" value=\"move\"/> ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.delete_group")
  },data:data},helper ? helper.call(depth0, "labels.move_assignments_to", "Move its assignments to", options) : helperMissing.call(depth0, "t", "labels.move_assignments_to", "Move its assignments to", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n      <select name=\"move_assignments_to\" class=\"group_select\" title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.delete_group")
  },data:data},helper ? helper.call(depth0, "tooltips.target_group", "Select a group to move this assignment to", options) : helperMissing.call(depth0, "t", "tooltips.target_group", "Select a group to move this assignment to", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" aria-labelledby=\"ag_move_";
  if (helper = helpers.label_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n        <option value=\"\" class=\"blank\">[ ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.delete_group")
  },data:data},helper ? helper.call(depth0, "options.select_group", "Select a Group", options) : helperMissing.call(depth0, "t", "options.select_group", "Select a Group", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ]</option>\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.groups), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </select>\n    </p>\n\n\n  </div>\n</div>\n<div class=\"form-controls\">\n  <button\n    class=\"cancel_button btn dialog_closer\"\n    type=\"button\"\n  >";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.delete_group")
  },data:data},helper ? helper.call(depth0, "cancel", "Cancel", options) : helperMissing.call(depth0, "t", "cancel", "Cancel", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n  <button\n    class=\"delete_group btn btn-primary\"\n    data-text-while-loading='";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.delete_group")
  },data:data},helper ? helper.call(depth0, "deleting", "Deleting...", options) : helperMissing.call(depth0, "t", "deleting", "Deleting...", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'\n    type=\"button\"\n  >";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.delete_group")
  },data:data},helper ? helper.call(depth0, "delete", "Delete Group", options) : helperMissing.call(depth0, "t", "delete", "Delete Group", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n</div>\n";
  return buffer;
  });
  
      
  return templates['assignments/DeleteGroup'];
});
