define('jst/assignments/GroupCategorySelector', ["compiled/handlebars_helpers","i18n!assignments.group_category_selector"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['assignments/GroupCategorySelector'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.sectionLabel) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.sectionLabel); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program3(depth0,data) {
  
  var stack1, helper, options;
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.group_category_selector")
  },data:data},helper ? helper.call(depth0, "group_assignment_header", "Group Assignment", options) : helperMissing.call(depth0, "t", "group_assignment_header", "Group Assignment", options));
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }

function program5(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.fieldLabel) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fieldLabel); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program7(depth0,data) {
  
  var stack1, helper, options;
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.group_category_selector")
  },data:data},helper ? helper.call(depth0, "is_group_assignment", "This is a Group Assignment", options) : helperMissing.call(depth0, "t", "is_group_assignment", "This is a Group Assignment", options));
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }

function program9(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n          <label class=\"checkbox\" for=\"assignment_grade_students_individually\">\n            "
    + escapeExpression((helper = helpers.checkbox || (depth0 && depth0.checkbox),options={hash:{
    'id': ("assignment_grade_students_individually"),
    'prefix': ((depth0 && depth0.prefix)),
    'checked': ((depth0 && depth0.gradeGroupStudentsIndividually)),
    'disabled': ((depth0 && depth0.gradeIndividuallyDisabled))
  },data:data},helper ? helper.call(depth0, "grade_group_students_individually", options) : helperMissing.call(depth0, "checkbox", "grade_group_students_individually", options)))
    + "\n            ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.group_category_selector")
  },data:data},helper ? helper.call(depth0, "grade_group_students_individually", "Assign Grades to Each Student Individually", options) : helperMissing.call(depth0, "t", "grade_group_students_individually", "Assign Grades to Each Student Individually", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </label>\n        ";
  return buffer;
  }

function program11(depth0,data) {
  
  
  return "assignment[group_category_id]";
  }

function program13(depth0,data) {
  
  
  return "group_category_id";
  }

function program15(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            <option value=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" "
    + escapeExpression((helper = helpers.selectedIf || (depth1 && depth1.selectedIf),options={hash:{},data:data},helper ? helper.call(depth0, (depth1 && depth1.groupCategoryId), (depth0 && depth0.id), options) : helperMissing.call(depth0, "selectedIf", (depth1 && depth1.groupCategoryId), (depth0 && depth0.id), options)))
    + ">\n              ";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n            </option>\n          ";
  return buffer;
  }

function program17(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n          <div class=\"alert assignment-edit-group-alert\">\n            ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.group_category_selector")
  },data:data},helper ? helper.call(depth0, "differentiated_groups_warning", "Differentiated group assignments may yield unexpected results.", options) : helperMissing.call(depth0, "t", "differentiated_groups_warning", "Differentiated group assignments may yield unexpected results.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </div>\n        ";
  return buffer;
  }

function program19(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <div class=\"group_category_locked_explanation alert assignment-edit-group-alert\">\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.lockedMessage), {hash:{},inverse:self.program(22, program22, data),fn:self.program(20, program20, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </div>\n    ";
  return buffer;
  }
function program20(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.lockedMessage) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.lockedMessage); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program22(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.group_category_selector")
  },data:data},helper ? helper.call(depth0, "group_category_locked_explanation", "Students have already submitted homework on this assignment, so group settings cannot be changed.", options) : helperMissing.call(depth0, "t", "group_category_locked_explanation", "Students have already submitted homework on this assignment, so group settings cannot be changed.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }

  buffer += "<div class=\"form-column-left\">\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.sectionLabel), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n\n<div class=\"form-column-right\">\n  <div class=\"border border-trbl border-round\">\n    \n    <label class=\"checkbox flush\" for=\"has_group_category\">\n      "
    + escapeExpression((helper = helpers.checkbox || (depth0 && depth0.checkbox),options={hash:{
    'id': ("has_group_category"),
    'prefix': ((depth0 && depth0.prefix)),
    'checked': ((depth0 && depth0.groupCategoryId)),
    'aria-role': ("option"),
    'aria-checked': ((depth0 && depth0.ariaChecked)),
    'aria-controls': ("group_category_options"),
    'disabled': ((depth0 && depth0.hasGroupCategoryDisabled))
  },data:data},helper ? helper.call(depth0, "has_group_category", options) : helperMissing.call(depth0, "checkbox", "has_group_category", options)))
    + "\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.fieldLabel), {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </label>\n\n    \n    <div id=\"group_category_options\" style=\""
    + escapeExpression((helper = helpers.hiddenUnless || (depth0 && depth0.hiddenUnless),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.groupCategoryId), options) : helperMissing.call(depth0, "hiddenUnless", (depth0 && depth0.groupCategoryId), options)))
    + "\">\n      <div class=\"nested\">\n        ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.hideGradeIndividually), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        \n        <label for=\"group_category_id\">\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.group_category_selector")
  },data:data},helper ? helper.call(depth0, "group_set", "Group Set", options) : helperMissing.call(depth0, "t", "group_set", "Group Set", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </label>\n        <select id=\"assignment_group_category_id\"\n          name=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.nested), {hash:{},inverse:self.program(13, program13, data),fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n          "
    + escapeExpression((helper = helpers.disabledIf || (depth0 && depth0.disabledIf),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.groupCategoryIdDisabled), options) : helperMissing.call(depth0, "disabledIf", (depth0 && depth0.groupCategoryIdDisabled), options)))
    + ">\n          ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.groupCategories), {hash:{},inverse:self.noop,fn:self.programWithDepth(15, program15, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          <option value=\"new\">\n            [ ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.group_category_selector")
  },data:data},helper ? helper.call(depth0, "group_category_options", "New Group Category", options) : helperMissing.call(depth0, "t", "group_category_options", "New Group Category", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ]\n          </option>\n        </select>\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.differentiatedAssignmentsEnabled), {hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </div>\n    </div>\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.groupCategoryLocked), {hash:{},inverse:self.noop,fn:self.program(19, program19, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n</div>\n";
  return buffer;
  });
  
      
  return templates['assignments/GroupCategorySelector'];
});
