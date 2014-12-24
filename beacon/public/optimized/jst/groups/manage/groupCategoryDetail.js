define('jst/groups/manage/groupCategoryDetail', ["compiled/handlebars_helpers","i18n!groups.manage.group_category_detail","jst/groups/manage/_selfSignupHelp"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['groups/manage/groupCategoryDetail'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"pull-right group-category-actions\">\n  ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.locked), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0['protected']), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <button class=\"btn add-group\" title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_category_detail")
  },data:data},helper ? helper.call(depth0, "add_group", "Add Group", options) : helperMissing.call(depth0, "t", "add_group", "Add Group", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"><i class='icon-plus'></i> ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_category_detail")
  },data:data},helper ? helper.call(depth0, "group", "Group", options) : helperMissing.call(depth0, "t", "group", "Group", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n  ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <span>\n      <a id=\"group-category-";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-actions\" class=\"al-trigger btn\" role=\"button\" aria-haspopup=\"true\" aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_category_detail")
  },data:data},helper ? helper.call(depth0, "settings", "Settings", options) : helperMissing.call(depth0, "t", "settings", "Settings", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" href=\"#\">\n        <i class=\"icon-settings\"></i><i class=\"icon-mini-arrow-down\"></i>\n        <span class=\"screenreader-only\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_category_detail")
  },data:data},helper ? helper.call(depth0, "category_settings", "Settings", options) : helperMissing.call(depth0, "t", "category_settings", "Settings", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n      </a>\n      <ul class=\"al-options\" role=\"menu\" tabindex=\"0\" aria-hidden=\"true\" aria-expanded=\"false\" aria-activedescendant=\"toolbar-2\">\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.canMessageMembers), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.canAssignMembers), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        <li>\n          <a href=\"#\" class=\"icon-edit edit-category\" data-focus-returns-to=\"group-category-";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-actions\" >\n            ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_category_detail")
  },data:data},helper ? helper.call(depth0, "edit_category_option", "Edit", options) : helperMissing.call(depth0, "t", "edit_category_option", "Edit", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </a>\n        </li>\n        <li>\n          <a href=\"#\" class=\"icon-trash delete-category\">\n            ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_category_detail")
  },data:data},helper ? helper.call(depth0, "delete_category_option", "Delete", options) : helperMissing.call(depth0, "t", "delete_category_option", "Delete", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </a>\n        </li>\n      </ul>\n    </span>\n  ";
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n           <li>\n             <a href=\"#\" class=\"icon-email message-all-unassigned\" data-focus-returns-to=\"group-category-";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-actions\">\n               ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_category_detail")
  },data:data},helper ? helper.call(depth0, "message_all_unassigned_option", "Message All Unassigned Students", options) : helperMissing.call(depth0, "t", "message_all_unassigned_option", "Message All Unassigned Students", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n             </a>\n           </li>\n        ";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n          <li>\n            <a href=\"#\" class=\"icon-user randomly-assign-members\" data-focus-returns-to=\"group-category-";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-actions\">\n              ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_category_detail")
  },data:data},helper ? helper.call(depth0, "randomly_assign_students_option", "Randomly Assign Students", options) : helperMissing.call(depth0, "t", "randomly_assign_students_option", "Randomly Assign Students", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </a>\n          </li>\n        ";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <div class=\"alert\">\n    <i class=\"icon-warning\"></i>\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_category_detail")
  },data:data},helper ? helper.call(depth0, "uncategorized_groups", "These groups are not associated to any particular group set. Because they were imported via SIS, they can only be updated or deleted via SIS.", options) : helperMissing.call(depth0, "t", "uncategorized_groups", "These groups are not associated to any particular group set. Because they were imported via SIS, they can only be updated or deleted via SIS.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n";
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <p>\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_category_detail")
  },data:data},helper ? helper.call(depth0, "self_signup_blurb", "Self sign-up is enabled for these groups.", options) : helperMissing.call(depth0, "t", "self_signup_blurb", "Self sign-up is enabled for these groups.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = (helper = helpers.ifEqual || (depth0 && depth0.ifEqual),options={hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.self_signup), "restricted", options) : helperMissing.call(depth0, "ifEqual", (depth0 && depth0.self_signup), "restricted", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = self.invokePartial(partials['groups/manage/selfSignupHelp'], 'groups/manage/selfSignupHelp', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </p>\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.group_limit), {hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }
function program12(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      <span>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_category_detail")
  },data:data},helper ? helper.call(depth0, "restricted_self_signup_blurb", "All students in a group are required to be in the same section.", options) : helperMissing.call(depth0, "t", "restricted_self_signup_blurb", "All students in a group are required to be in the same section.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n    ";
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <p>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_category_detail"),
    'w0': ("<strong>$1</strong>")
  },data:data},helper ? helper.call(depth0, "group_limit_blurb", "Groups are limited to *%{group_limit}* members.", options) : helperMissing.call(depth0, "t", "group_limit_blurb", "Groups are limited to *%{group_limit}* members.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n  ";
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <div class=\"alert student-organized-groups\"><i class=\"icon-warning\"></i> ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_category_detail")
  },data:data},helper ? helper.call(depth0, "self_organized_warning", "These groups are self-organized by students. Unlike other types of groups, students can belong to more than one of these groups at a time, so these groups cannot be used for graded assignments.", options) : helperMissing.call(depth0, "t", "self_organized_warning", "These groups are self-organized by students. Unlike other types of groups, students can belong to more than one of these groups at a time, so these groups cannot be used for graded assignments.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n";
  return buffer;
  }

  stack1 = helpers.unless.call(depth0, (depth0 && depth0.randomlyAssignStudentsInProgress), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.locked), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.self_signup), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  stack1 = (helper = helpers.ifEqual || (depth0 && depth0.ifEqual),options={hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.role), "student_organized", options) : helperMissing.call(depth0, "ifEqual", (depth0 && depth0.role), "student_organized", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
  
      
  return templates['groups/manage/groupCategoryDetail'];
});
