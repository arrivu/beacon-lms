define('jst/assignments/AssignmentListItem', ["compiled/handlebars_helpers","i18n!assignments.assignment_list_item"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['assignments/AssignmentListItem'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  
  return "ig-published";
  }

function program3(depth0,data) {
  
  
  return "\n      <span class=\"draggable-handle\">\n        <i class=\"icon-drag-handle\"></i>\n      </span>\n    ";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n      <div class=\"";
  if (helper = helpers.spanWidth) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.spanWidth); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " ellipses modules\">\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.has_modules), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </div>\n    ";
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n          ";
  stack1 = (helper = helpers.ifEqual || (depth0 && depth0.ifEqual),options={hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.module_count), 1, options) : helperMissing.call(depth0, "ifEqual", (depth0 && depth0.module_count), 1, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          <div id=\"module_tooltip_";
  if (helper = helpers.labelId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.labelId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" style=\"display:none;\">\n            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.modules), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </div>\n        ";
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            ";
  if (helper = helpers.module_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.assignment_list_item")
  },data:data},helper ? helper.call(depth0, "module", "Module", options) : helperMissing.call(depth0, "t", "module", "Module", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          ";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            <a\n              href='#'\n              title='";
  if (helper = helpers.joined_names) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.joined_names); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'\n              class=\"tooltip_link\"\n              data-tooltip-selector=\"#module_tooltip_";
  if (helper = helpers.labelId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.labelId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n            >";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.assignment_list_item")
  },data:data},helper ? helper.call(depth0, "multiple_modules", "Multiple Modules", options) : helperMissing.call(depth0, "t", "multiple_modules", "Multiple Modules", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n          ";
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = "";
  buffer += "\n              <span>"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</span><br/>\n            ";
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.assignment_list_item")
  },data:data},helper ? helper.call(depth0, "points_possible_screen_reader", "%{pointsPossible} Points Possible", options) : helperMissing.call(depth0, "t", "points_possible_screen_reader", "%{pointsPossible} Points Possible", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.assignment_list_item")
  },data:data},helper ? helper.call(depth0, "no_points_possible", "No Points Possible", options) : helperMissing.call(depth0, "t", "no_points_possible", "No Points Possible", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }

function program17(depth0,data) {
  
  var stack1, helper, options;
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.assignment_list_item")
  },data:data},helper ? helper.call(depth0, "points_possible", "%{pointsPossible} pts", options) : helperMissing.call(depth0, "t", "points_possible", "%{pointsPossible} pts", options));
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }

function program19(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <div class=\"ig-admin\">\n      <span class=\"publish-icon\" data-view=\"publish-icon\"></span>\n\n      <div class=\"inline-block\">\n        <a\n          class=\"al-trigger al-trigger-gray\"\n          id=\"assign_";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "_manage_link\"\n          role=\"button\"\n          tabindex=\"0\"\n          href=\"#\"\n        >\n          <span class=\"screenreader-only\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.assignment_list_item")
  },data:data},helper ? helper.call(depth0, "settings", "Settings", options) : helperMissing.call(depth0, "t", "settings", "Settings", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n          <i class=\"icon-settings\"></i><i class=\"icon-mini-arrow-down\"></i>\n        </a>\n\n        <ul\n          id=\"assignment_";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "_settings_list\"\n          class=\"al-options\"\n          role=\"menu\"\n        >\n          <li>\n            <a\n              href=\"#\"\n              class=\"edit_assignment icon-edit\"\n              id=\"assignment_";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "_settings_edit_item\"\n              aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.assignment_list_item")
  },data:data},helper ? helper.call(depth0, "assignment_edit", "Edit Assignment", options) : helperMissing.call(depth0, "t", "assignment_edit", "Edit Assignment", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n              data-focus-returns-to=\"assign_";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "_manage_link\"\n            >";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.assignment_list_item")
  },data:data},helper ? helper.call(depth0, "edit", "Edit", options) : helperMissing.call(depth0, "t", "edit", "Edit", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n          </li>\n          ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.frozen), {hash:{},inverse:self.noop,fn:self.program(20, program20, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.canMove), {hash:{},inverse:self.noop,fn:self.program(22, program22, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.menu_tools), {hash:{},inverse:self.noop,fn:self.program(24, program24, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </ul>\n      </div>\n    </div>\n\n    <form data-view=\"edit-assignment\" class=\"form-dialog\"></form>\n    <form data-view=\"moveAssignment\" class=\"form-dialog\"></form>\n  ";
  return buffer;
  }
function program20(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n          <li>\n            <a\n              href=\"#\"\n              class=\"delete_assignment icon-trash\"\n              id=\"assignment_";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "_settings_delete_item\"\n              aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.assignment_list_item")
  },data:data},helper ? helper.call(depth0, "assignment_delete", "Delete Assignment", options) : helperMissing.call(depth0, "t", "assignment_delete", "Delete Assignment", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n              data-focus-returns-to=\"assign_";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "_manage_link\"\n            >";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.assignment_list_item")
  },data:data},helper ? helper.call(depth0, "delete", "Delete", options) : helperMissing.call(depth0, "t", "delete", "Delete", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n          </li>\n          ";
  return buffer;
  }

function program22(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n          <li>\n            <a\n              href=\"#\"\n              class=\"move_assignment icon-updown\"\n              id=\"assignment_";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "_settings_move_item\"\n              aria-label='";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.assignment_list_item")
  },data:data},helper ? helper.call(depth0, "assignment_move", "Move Assignment", options) : helperMissing.call(depth0, "t", "assignment_move", "Move Assignment", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'\n              data-focus-returns-to=\"assign_";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "_manage_link\"\n            >";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.assignment_list_item")
  },data:data},helper ? helper.call(depth0, "move", "Move To…", options) : helperMissing.call(depth0, "t", "move", "Move To…", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n          </li>\n          ";
  return buffer;
  }

function program24(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n          <li role=\"presentation\">\n            <a class=\"menu_tool_link\" href=\"";
  if (helper = helpers.url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n              ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.icon_url), {hash:{},inverse:self.noop,fn:self.program(25, program25, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n              ";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n            </a>\n          </li>\n          ";
  return buffer;
  }
function program25(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "<img class=\"icon\" src=\"";
  if (helper = helpers.icon_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.icon_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" />";
  return buffer;
  }

  buffer += "<div\n  id=\"assignment_";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n  class=\"ig-row ";
  stack1 = (helper = helpers.ifAll || (depth0 && depth0.ifAll),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.canManage), (depth0 && depth0.published), options) : helperMissing.call(depth0, "ifAll", (depth0 && depth0.canManage), (depth0 && depth0.published), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n  data-item-id=\"";
  if (helper = helpers.labelId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.labelId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n>\n  <a href=\"";
  if (helper = helpers.htmlUrl) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.htmlUrl); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"ig-title ellipses\">\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.canManage), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <i class='icon-";
  if (helper = helpers.iconType) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.iconType); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'></i>\n    ";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n  </a>\n  <div class=\"ig-details row-fluid\">\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.canManage), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    <div class=\"";
  if (helper = helpers.spanWidth) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.spanWidth); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " assignment-date-available ellipses\" data-view=\"date-available\"></div>\n    <div class=\"";
  if (helper = helpers.spanWidth) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.spanWidth); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " assignment-date-due ellipses\" data-view=\"date-due\"></div>\n\n    <div class=\"";
  if (helper = helpers.spanWidth) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.spanWidth); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " ellipses js-score ";
  if (helper = helpers.alignTextClass) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.alignTextClass); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n      <span class=\"screenreader-only\">\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.pointsPossible), {hash:{},inverse:self.program(15, program15, data),fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </span>\n      <span class=\"non-screenreader\" aria-hidden=\"true\">\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.pointsPossible), {hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </span>\n    </div>\n\n  </div>\n\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.canManage), {hash:{},inverse:self.noop,fn:self.program(19, program19, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  return buffer;
  });
  
      
  return templates['assignments/AssignmentListItem'];
});
