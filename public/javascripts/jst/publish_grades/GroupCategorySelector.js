define('jst/publish_grades/GroupCategorySelector', ["compiled/handlebars_helpers","i18n!publish_grades.group_category_selector"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['publish_grades/GroupCategorySelector'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  
  return "assignment[group_category_id]";
  }

function program3(depth0,data) {
  
  
  return "group_category_id";
  }

function program5(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n          <option value=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" "
    + escapeExpression((helper = helpers.selectedIf || (depth1 && depth1.selectedIf),options={hash:{},data:data},helper ? helper.call(depth0, (depth1 && depth1.groupCategoryId), (depth0 && depth0.id), options) : helperMissing.call(depth0, "selectedIf", (depth1 && depth1.groupCategoryId), (depth0 && depth0.id), options)))
    + ">\n            ";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n          </option>\n        ";
  return buffer;
  }

  buffer += "<div class=\"form-column-left\">\n  ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("publish_grades.group_category_selector")
  },data:data},helper ? helper.call(depth0, "group_assignment_header", "Group Assignment", options) : helperMissing.call(depth0, "t", "group_assignment_header", "Group Assignment", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n\n<div class=\"form-column-right\">\n  <div class=\"border border-trbl border-round\">\n\n    \n    <label class=\"checkbox flush\">\n      "
    + escapeExpression((helper = helpers.checkbox || (depth0 && depth0.checkbox),options={hash:{
    'id': ("assignment_has_group_category"),
    'prefix': ((depth0 && depth0.prefix)),
    'checked': ((depth0 && depth0.groupCategoryId)),
    'disabled': ((depth0 && depth0.groupCategoryIdFrozen))
  },data:data},helper ? helper.call(depth0, "has_group_category", options) : helperMissing.call(depth0, "checkbox", "has_group_category", options)))
    + "\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("publish_grades.group_category_selector")
  },data:data},helper ? helper.call(depth0, "is_group_assignment", "This is a Group Assignment", options) : helperMissing.call(depth0, "t", "is_group_assignment", "This is a Group Assignment", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </label>\n\n    \n    <div class=\"nested\">\n      <div class=\"group_submission_warning alert\" style=\"display:none\">\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("publish_grades.group_category_selector")
  },data:data},helper ? helper.call(depth0, "students_already_submitted_warning", "Prior individual submissions will not be counted as group submissions and will show incorrectly in speedgrader.", options) : helperMissing.call(depth0, "t", "students_already_submitted_warning", "Prior individual submissions will not be counted as group submissions and will show incorrectly in speedgrader.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </div>\n      <div id=\"group_category_options\" style=\""
    + escapeExpression((helper = helpers.hiddenUnless || (depth0 && depth0.hiddenUnless),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.groupCategoryId), options) : helperMissing.call(depth0, "hiddenUnless", (depth0 && depth0.groupCategoryId), options)))
    + "\">\n      <label class=\"checkbox\" >\n        "
    + escapeExpression((helper = helpers.checkbox || (depth0 && depth0.checkbox),options={hash:{
    'id': ((depth0 && depth0.null)),
    'prefix': ((depth0 && depth0.prefix)),
    'checked': ((depth0 && depth0.gradeGroupStudentsIndividually)),
    'disabled': ((depth0 && depth0.groupCategoryIdFrozen))
  },data:data},helper ? helper.call(depth0, "grade_group_students_individually", options) : helperMissing.call(depth0, "checkbox", "grade_group_students_individually", options)))
    + "\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("publish_grades.group_category_selector")
  },data:data},helper ? helper.call(depth0, "grade_group_students_individually", "Assign Grades to Each Student Individually", options) : helperMissing.call(depth0, "t", "grade_group_students_individually", "Assign Grades to Each Student Individually", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </label>\n\n      \n      <label for=\"group_category_id\">\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("publish_grades.group_category_selector")
  },data:data},helper ? helper.call(depth0, "group_set", "Group Set", options) : helperMissing.call(depth0, "t", "group_set", "Group Set", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </label>\n      <select id=\"assignment_group_category_id\"\n        name=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.nested), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n        "
    + escapeExpression((helper = helpers.disabledIfIncludes || (depth0 && depth0.disabledIfIncludes),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.frozenAttributes), "group_category_id", options) : helperMissing.call(depth0, "disabledIfIncludes", (depth0 && depth0.frozenAttributes), "group_category_id", options)))
    + ">\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.groupCategories), {hash:{},inverse:self.noop,fn:self.programWithDepth(5, program5, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        <option value=\"new\">\n          [ ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("publish_grades.group_category_selector")
  },data:data},helper ? helper.call(depth0, "group_category_options", "New Group Category", options) : helperMissing.call(depth0, "t", "group_category_options", "New Group Category", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ]\n        </option>\n      </select>\n    </div>\n  </div>\n</div>\n";
  return buffer;
  });
  
      
  return templates['publish_grades/GroupCategorySelector'];
});
