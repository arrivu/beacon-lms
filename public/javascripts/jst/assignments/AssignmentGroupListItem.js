define('jst/assignments/AssignmentGroupListItem', ["compiled/handlebars_helpers","i18n!assignments.assignment_group_list_item"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['assignments/AssignmentGroupListItem'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      <span class=\"sortable-handle\">\n        <a href=\"#\" class=\"icon-drag-handle\">\n        <span class=\"screenreader-only accessibility-warning\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.assignment_group_list_item")
  },data:data},helper ? helper.call(depth0, "move_to_accessibility_warning", "Warning: for improved accessibility of reordering assignments and groups, please use the Move To Dialog option found in the menu.", options) : helperMissing.call(depth0, "t", "move_to_accessibility_warning", "Warning: for improved accessibility of reordering assignments and groups, please use the Move To Dialog option found in the menu.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n        </a>\n      </span>\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n      <h3\n      class=\"ig-header-title element_toggler\"\n      aria-controls=\"assignment_group_";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "_assignments\"\n      aria-expanded=\"true\"\n      aria-label=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " ";
  if (helper = helpers.toggleMessage) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.toggleMessage); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n      role=\"button\"\n      tabindex=\"0\"\n      >\n      <i class=\"icon-mini-arrow-down\"></i>\n      ";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n      </h3>\n    ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n      <h2\n      class=\"ig-header-title element_toggler\"\n      aria-controls=\"assignment_group_";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "_assignments\"\n      aria-expanded=\"true\"\n      aria-label=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " ";
  if (helper = helpers.toggleMessage) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.toggleMessage); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n      role=\"button\"\n      tabindex=\"0\"\n      >\n      <i class=\"icon-mini-arrow-down\"></i>\n      ";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n      </h2>\n    ";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <ul class=\"pill\">\n          ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.showWeight), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.showRules), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </ul>\n      ";
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            <li>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.assignment_group_list_item")
  },data:data},helper ? helper.call(depth0, "group_weight", "%{groupWeight}% of Total", options) : helperMissing.call(depth0, "t", "group_weight", "%{groupWeight}% of Total", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</li>\n          ";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            <li>\n              <a\n                href='#'\n                title='";
  stack1 = (helper = helpers.toSentence || (depth0 && depth0.toSentence),options={hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.displayableRules), options) : helperMissing.call(depth0, "toSentence", (depth0 && depth0.displayableRules), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'\n                class=\"tooltip_link\"\n                data-tooltip-selector=\"#ag_";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "_rules_tooltip\"\n              >";
  if (helper = helpers.rulesText) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.rulesText); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "<i class=\"icon-mini-arrow-down\"></i></a>\n              <div id=\"ag_";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "_rules_tooltip\" style=\"display:none;\">\n                ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.displayableRules), {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n              </div>\n            </li>\n          ";
  return buffer;
  }
function program11(depth0,data) {
  
  
  return escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0));
  }

function program13(depth0,data) {
  
  var buffer = "";
  buffer += "\n                  <span>"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</span><br/>\n                ";
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <a\n          href=\"#\"\n          class=\"btn add_assignment\"\n          title='";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.assignment_group_list_item")
  },data:data},helper ? helper.call(depth0, "add_assignment_to", "Add Assignment to %{name}", options) : helperMissing.call(depth0, "t", "add_assignment_to", "Add Assignment to %{name}", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'\n        >\n          \n          <span class=\"screenreader-only\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.assignment_group_list_item")
  },data:data},helper ? helper.call(depth0, "add_assignment_to", "Add Assignment to %{name}", options) : helperMissing.call(depth0, "t", "add_assignment_to", "Add Assignment to %{name}", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n          <i class=\"icon-plus\"></i>\n        </a>\n\n        <div class=\"inline-block\">\n          <a id=\"ag_";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "_manage_link\" class=\"al-trigger btn\" href=\"#\" tabindex=\"0\" role=\"button\">\n            <span class=\"screenreader-only\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.assignment_group_list_item")
  },data:data},helper ? helper.call(depth0, "manage", "Manage", options) : helperMissing.call(depth0, "t", "manage", "Manage", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n            <i class=\"icon-settings\"></i><i class=\"icon-mini-arrow-down\"></i>\n          </a>\n          <ul class=\"al-options\">\n            <li>\n              <a\n                href=\"#\"\n                class=\"edit_group icon-edit\"\n                aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.assignment_group_list_item")
  },data:data},helper ? helper.call(depth0, "assignment_group_edit", "Edit Assignment Group", options) : helperMissing.call(depth0, "t", "assignment_group_edit", "Edit Assignment Group", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n                data-focus-returns-to=\"ag_";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "_manage_link\"\n              >";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.assignment_group_list_item")
  },data:data},helper ? helper.call(depth0, "edit", "Edit", options) : helperMissing.call(depth0, "t", "edit", "Edit", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n            </li>\n            ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.hasFrozenAssignments), {hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.canMove), {hash:{},inverse:self.noop,fn:self.program(18, program18, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </ul>\n        </div>\n      ";
  return buffer;
  }
function program16(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n              <li>\n                <a\n                  href=\"#\"\n                  class=\"delete_group icon-trash\"\n                  aria-label='";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.assignment_group_list_item")
  },data:data},helper ? helper.call(depth0, "assignment_group_delete", "Delete Assignment Group", options) : helperMissing.call(depth0, "t", "assignment_group_delete", "Delete Assignment Group", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'\n                  data-focus-returns-to=\"ag_";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "_manage_link\"\n                >";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.assignment_group_list_item")
  },data:data},helper ? helper.call(depth0, "delete", "Delete", options) : helperMissing.call(depth0, "t", "delete", "Delete", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n              </li>\n            ";
  return buffer;
  }

function program18(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            <li>\n              <a\n                href=\"#\"\n                class=\"move_group icon-updown\"\n                aria-label='";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.assignment_group_list_item")
  },data:data},helper ? helper.call(depth0, "assignment_group_move", "Move Assignment Group", options) : helperMissing.call(depth0, "t", "assignment_group_move", "Move Assignment Group", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'\n                data-focus-returns-to=\"ag_";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "_manage_link\"\n              >";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.assignment_group_list_item")
  },data:data},helper ? helper.call(depth0, "move", "Move To…", options) : helperMissing.call(depth0, "t", "move", "Move To…", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n            </li>\n            ";
  return buffer;
  }

function program20(depth0,data) {
  
  
  return "\n    <form data-view=\"createAssignment\" class=\"form-dialog\"></form>\n    <form data-view=\"editAssignmentGroup\" class=\"form-dialog\"></form>\n    <form data-view=\"deleteAssignmentGroup\" class=\"form-dialog\"></form>\n    <form data-view=\"moveAssignmentGroup\" class=\"form-dialog\"></form>\n  ";
  }

  buffer += "<div id=\"assignment_group_";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"assignment_group\">\n\n  <div class=\"ig-header\" style=\"position:relative;\">\n    ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.ENV)),stack1 == null || stack1 === false ? stack1 : stack1.PERMISSIONS)),stack1 == null || stack1 === false ? stack1 : stack1.manage), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.course_home), {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    <div class=\"ag-header-controls\">\n      ";
  stack1 = (helper = helpers.ifAny || (depth0 && depth0.ifAny),options={hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.showWeight), (depth0 && depth0.showRules), options) : helperMissing.call(depth0, "ifAny", (depth0 && depth0.showWeight), (depth0 && depth0.showRules), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n      ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.ENV)),stack1 == null || stack1 === false ? stack1 : stack1.PERMISSIONS)),stack1 == null || stack1 === false ? stack1 : stack1.manage), {hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n\n\n  </div>\n\n  <div id=\"assignment_group_";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "_assignments\" >\n    <ul class=\"collectionViewItems ig-list draggable\"></ul>\n  </div>\n\n  ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.ENV)),stack1 == null || stack1 === false ? stack1 : stack1.PERMISSIONS)),stack1 == null || stack1 === false ? stack1 : stack1.manage), {hash:{},inverse:self.noop,fn:self.program(20, program20, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  return buffer;
  });
  
      
  return templates['assignments/AssignmentGroupListItem'];
});
