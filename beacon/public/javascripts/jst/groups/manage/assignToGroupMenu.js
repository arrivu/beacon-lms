define('jst/groups/manage/assignToGroupMenu', ["compiled/handlebars_helpers","compiled/util/registerTemplateCss","i18n!groups.manage.assign_to_group_menu"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['groups/manage/assignToGroupMenu'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <p>\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.assign_to_group_menu")
  },data:data},helper ? helper.call(depth0, "no_groups_created", "Groups need to be created before users can be added.", options) : helperMissing.call(depth0, "t", "no_groups_created", "Groups need to be created before users can be added.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </p>\n  ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <p class='separated'>\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.assign_to_group_menu")
  },data:data},helper ? helper.call(depth0, "all_groups_full", "All groups are full.", options) : helperMissing.call(depth0, "t", "all_groups_full", "All groups are full.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </p>\n    <p>\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.assign_to_group_menu")
  },data:data},helper ? helper.call(depth0, "all_groups_full_suggestion", "Either change group limits or add more groups.", options) : helperMissing.call(depth0, "t", "all_groups_full_suggestion", "Either change group limits or add more groups.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </p>\n  ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.isFull), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <li>\n          <a href=\"#\"\n             class=\"set-group ellipsis\"\n             data-group-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n             title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.assign_to_group_menu")
  },data:data},helper ? helper.call(depth0, "assign_user_to_group", "Assign user to this group", options) : helperMissing.call(depth0, "t", "assign_user_to_group", "Assign user to this group", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n             aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.assign_to_group_menu")
  },data:data},helper ? helper.call(depth0, "assign_user_to_group_name", "Assign user to group %{name}", options) : helperMissing.call(depth0, "t", "assign_user_to_group_name", "Assign user to group %{name}", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n            >";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\n        </li>\n      ";
  return buffer;
  }

  buffer += "<div class=\"popover-title\">\n  ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.assign_to_group_menu")
  },data:data},helper ? helper.call(depth0, "add_to_group", "Add to Group", options) : helperMissing.call(depth0, "t", "add_to_group", "Add to Group", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n\n<div class='popover-content'>\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.noGroups), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.allFull), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n  <ul class=\"unstyled assign-to-groups\">\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.groups), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </ul>\n</div>\n";
  return buffer;
  });
  
      
arguments[1]('groups/manage/assignToGroupMenu', ".assign-to-groups a.set-group{display:block;}.popover-content{overflow:auto;max-height:400px;}.popover-content .form-search{padding-right:16px;}.popover-content p{line-height:20px;}.popover-content p.separated{margin-bottom:10px;}");

  return templates['groups/manage/assignToGroupMenu'];
});
