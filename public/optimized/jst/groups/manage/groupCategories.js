define('jst/groups/manage/groupCategories', ["compiled/handlebars_helpers","compiled/util/registerTemplateCss","i18n!groups.manage.group_categories"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['groups/manage/groupCategories'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <h2>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_categories")
  },data:data},helper ? helper.call(depth0, "headings.course_groups", "Student Groups", options) : helperMissing.call(depth0, "t", "headings.course_groups", "Student Groups", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h2>\n    <p>\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_categories")
  },data:data},helper ? helper.call(depth0, "course_group_explanation", "Student groups are a useful way to organize students for things like group projects or papers. Every student group gets their own calendar, discussion board and collaboration tools so they can organize themselves and work together more effectively.", options) : helperMissing.call(depth0, "t", "course_group_explanation", "Student groups are a useful way to organize students for things like group projects or papers. Every student group gets their own calendar, discussion board and collaboration tools so they can organize themselves and work together more effectively.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </p>\n\n    <p>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_categories")
  },data:data},helper ? helper.call(depth0, "group_assignment_instructions", "You can randomly assign students to groups of a specific size, or manually create and organize the groups. Once your groups are created, you can set assignments to be \"group submission\" assignments, which means each group will have one submission for all users of that group.", options) : helperMissing.call(depth0, "t", "group_assignment_instructions", "You can randomly assign students to groups of a specific size, or manually create and organize the groups. Once your groups are created, you can set assignments to be \"group submission\" assignments, which means each group will have one submission for all users of that group.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </p>\n  ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <h2>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_categories")
  },data:data},helper ? helper.call(depth0, "headings.account_groups", "Account-level Student Groups", options) : helperMissing.call(depth0, "t", "headings.account_groups", "Account-level Student Groups", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h2>\n    <p>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_categories")
  },data:data},helper ? helper.call(depth0, "account_group_explanation", "Account-level student groups are a good way to group students without being tied to a specific course. Every student group gets their own calendar, discussion board and collaboration tools so they can organize themselves and work together more effectively.", options) : helperMissing.call(depth0, "t", "account_group_explanation", "Account-level student groups are a good way to group students without being tied to a specific course. Every student group gets their own calendar, discussion board and collaboration tools so they can organize themselves and work together more effectively.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </p>\n  ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <li class=\"static\"><a href=\"/courses/";
  if (helper = helpers.context_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.context_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/users\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_categories")
  },data:data},helper ? helper.call(depth0, "tabs.everyone", "Everyone", options) : helperMissing.call(depth0, "t", "tabs.everyone", "Everyone", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></li>\n  ";
  return buffer;
  }

  buffer += "<h1 class=\"screenreader-only\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_categories")
  },data:data},helper ? helper.call(depth0, "headings.groups", "Groups", options) : helperMissing.call(depth0, "t", "headings.groups", "Groups", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h1>\n<div class='pull-right group-categories-actions'>\n  <button id='add-group-set' class='btn btn-primary' title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_categories")
  },data:data},helper ? helper.call(depth0, "add_group_set", "Add Group Set", options) : helperMissing.call(depth0, "t", "add_group_set", "Add Group Set", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"><i class='icon-plus'></i> ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_categories")
  },data:data},helper ? helper.call(depth0, "group_set", "Group Set", options) : helperMissing.call(depth0, "t", "group_set", "Group Set", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n</div>\n<div class='empty-groupset-instructions'>\n  ";
  stack1 = (helper = helpers.ifEqual || (depth0 && depth0.ifEqual),options={hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.ENV)),stack1 == null || stack1 === false ? stack1 : stack1.group_user_type), "student", options) : helperMissing.call(depth0, "ifEqual", ((stack1 = (depth0 && depth0.ENV)),stack1 == null || stack1 === false ? stack1 : stack1.group_user_type), "student", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n<div style=\"display:none\">\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isCourse), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n<div id=\"group_categories_tabs\" class=\"ui-tabs-minimal\">\n  <ul class='collectionViewItems'>\n  </ul>\n  <!--panels get inserted dynamically-->\n</div>\n\n";
  return buffer;
  });
  
      
arguments[1]('groups/manage/groupCategories', ".group_categories_area{min-height:250px;}#group_categories_tabs{margin:0 -1em -1em;}#group_categories_tabs>.collectionViewItems{padding:10px 0 0 1em;border-bottom:0px;}#group_categories_tabs>.tab-panel{position:relative;border-top:1px solid #aaaaaa;}.group-edit-dialog .outlet>.control-group{margin:20px 0;}.group-categories-actions{height:36px;padding-bottom:10px;z-index:1;position:relative;}");

  return templates['groups/manage/groupCategories'];
});
