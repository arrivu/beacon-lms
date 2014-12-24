define('jst/publish_grades/AssignmentListItem', ["compiled/handlebars_helpers","i18n!publish_grades.assignment_list_item"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['publish_grades/AssignmentListItem'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  
  return "ig-published";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n      <div class=\"";
  if (helper = helpers.spanWidth) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.spanWidth); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " ellipses modules\">\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.has_modules), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </div>\n    ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n          ";
  stack1 = (helper = helpers.ifEqual || (depth0 && depth0.ifEqual),options={hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.module_count), 1, options) : helperMissing.call(depth0, "ifEqual", (depth0 && depth0.module_count), 1, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          <div id=\"module_tooltip_";
  if (helper = helpers.labelId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.labelId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" style=\"display:none;\">\n            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.modules), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </div>\n        ";
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            ";
  if (helper = helpers.module_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("publish_grades.assignment_list_item")
  },data:data},helper ? helper.call(depth0, "module", "Module", options) : helperMissing.call(depth0, "t", "module", "Module", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          ";
  return buffer;
  }

function program7(depth0,data) {
  
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
    'scope': ("publish_grades.assignment_list_item")
  },data:data},helper ? helper.call(depth0, "multiple_modules", "Multiple Modules", options) : helperMissing.call(depth0, "t", "multiple_modules", "Multiple Modules", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n          ";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "";
  buffer += "\n              <span>"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</span><br/>\n            ";
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("publish_grades.assignment_list_item")
  },data:data},helper ? helper.call(depth0, "points_possible_screen_reader", "%{pointsPossible} Points Possible", options) : helperMissing.call(depth0, "t", "points_possible_screen_reader", "%{pointsPossible} Points Possible", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("publish_grades.assignment_list_item")
  },data:data},helper ? helper.call(depth0, "no_points_possible", "No Points Possible", options) : helperMissing.call(depth0, "t", "no_points_possible", "No Points Possible", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }

function program15(depth0,data) {
  
  var stack1, helper, options;
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("publish_grades.assignment_list_item")
  },data:data},helper ? helper.call(depth0, "points_possible", "%{pointsPossible} pts", options) : helperMissing.call(depth0, "t", "points_possible", "%{pointsPossible} pts", options));
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }

function program17(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <div class=\"ig-admin\">\n      <span class=\"publish-icon\" data-view=\"publish-icon\"></span>\n      <span class=\"screenreader-only\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("publish_grades.assignment_list_item")
  },data:data},helper ? helper.call(depth0, "settings", "Edit Assignment", options) : helperMissing.call(depth0, "t", "settings", "Edit Assignment", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n      <a\n       href=\"#\"\n       class=\"icon-edit edit_assignment\"\n       id=\"assignment_";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "_settings_edit_item\"\n       tabindex=\"0\"\n       role=\"menuitem\"\n       aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("publish_grades.assignment_list_item")
  },data:data},helper ? helper.call(depth0, "assignment_edit", "Edit Assignment", options) : helperMissing.call(depth0, "t", "assignment_edit", "Edit Assignment", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n       data-focus-returns-to=\"assign_";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "_manage_link\">\n      </a>\n\n    </div>\n\n    <form data-view=\"edit-assignment\" class=\"form-dialog\"></form>\n\n  ";
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
    + "\" class=\"ig-title ellipses\">\n    <i class='icon-";
  if (helper = helpers.iconType) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.iconType); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'></i>\n    ";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n  </a>\n  <div class=\"ig-details row-fluid\">\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.canManage), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    <div class=\"";
  if (helper = helpers.spanWidth) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.spanWidth); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " ellipses\" data-view=\"date-due\"></div>\n\n    <div class=\"";
  if (helper = helpers.spanWidth) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.spanWidth); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " ellipses js-score ";
  if (helper = helpers.alignTextClass) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.alignTextClass); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n      <span class=\"screenreader-only\">\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.pointsPossible), {hash:{},inverse:self.program(13, program13, data),fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </span>\n      <span class=\"non-screenreader\" aria-hidden=\"true\">\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.pointsPossible), {hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </span>\n    </div>\n\n  </div>\n\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.canManage), {hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  return buffer;
  });
  
      
  return templates['publish_grades/AssignmentListItem'];
});
