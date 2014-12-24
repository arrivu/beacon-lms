define('jst/groups/manage/groupUser', ["compiled/handlebars_helpers","i18n!groups.manage.group_user"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['groups/manage/groupUser'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "<i class=\"icon-user group-leader\"\n  aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_user")
  },data:data},helper ? helper.call(depth0, "group_leader", "Group Leader", options) : helperMissing.call(depth0, "t", "group_leader", "Group Leader", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n  title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_user")
  },data:data},helper ? helper.call(depth0, "group_leader", "Group Leader", options) : helperMissing.call(depth0, "t", "group_leader", "Group Leader", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"></i>";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <a href=\"#\"\n     data-user-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n     class=\"assign-to-group\"\n     title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_user")
  },data:data},helper ? helper.call(depth0, "assign_to_group", "Assign to Group", options) : helperMissing.call(depth0, "t", "assign_to_group", "Assign to Group", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n     aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_user")
  },data:data},helper ? helper.call(depth0, "assign_user_to_group", "Assign %{name} to a group", options) : helperMissing.call(depth0, "t", "assign_user_to_group", "Assign %{name} to a group", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n      <i class=\"icon-plus\"></i>\n  </a>\n";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <div>\n    <a href=\"#\"\n       id='group-";
  if (helper = helpers.groupId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.groupId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-user-";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-actions'\n       data-user-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n       class=\"al-trigger group-user-actions\"\n       data-kyle-menu-options='{\"appendMenuTo\": \"body\"}'\n       role=\"button\">\n        <i class=\"icon-settings\"></i><i class=\"icon-mini-arrow-down\"></i>\n        <span class=\"screenreader-only\">\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_user")
  },data:data},helper ? helper.call(depth0, "edit_group_membership", "Edit %{name}'s membership", options) : helperMissing.call(depth0, "t", "edit_group_membership", "Edit %{name}'s membership", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </span>\n    </a>\n    <ul class=\"al-options\">\n        <li>\n          <a href=\"#\"\n             data-user-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n             aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_user")
  },data:data},helper ? helper.call(depth0, "remove_from_group", "Remove %{name} from group", options) : helperMissing.call(depth0, "t", "remove_from_group", "Remove %{name} from group", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n             class=\"icon-trash remove-from-group\">\n              ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_user")
  },data:data},helper ? helper.call(depth0, "remove", "Remove", options) : helperMissing.call(depth0, "t", "remove", "Remove", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </a>\n        </li>\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isLeader), {hash:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      <li>\n        <a href=\"#\"\n           data-focus-returns-to='group-";
  if (helper = helpers.groupId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.groupId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-user-";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-actions'\n           data-user-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n           aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_user")
  },data:data},helper ? helper.call(depth0, "move_to_new_group", "Move %{name} to a new group", options) : helperMissing.call(depth0, "t", "move_to_new_group", "Move %{name} to a new group", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n           class=\"icon-updown edit-group-assignment\">\n            ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_user")
  },data:data},helper ? helper.call(depth0, "move", "Move To...", options) : helperMissing.call(depth0, "t", "move", "Move To...", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </a>\n      </li>\n    </ul>\n  </div>\n";
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <li>\n        <a href=\"#\"\n           data-user-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n           aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_user")
  },data:data},helper ? helper.call(depth0, "remove_user_as_leader", "Remove %{name} as leader", options) : helperMissing.call(depth0, "t", "remove_user_as_leader", "Remove %{name} as leader", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n           class=\"icon-user remove-as-leader\">\n            ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_user")
  },data:data},helper ? helper.call(depth0, "remove_as_leader", "Remove as Leader", options) : helperMissing.call(depth0, "t", "remove_as_leader", "Remove as Leader", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </a>\n      </li>\n      ";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      <li>\n        <a href=\"#\"\n           data-user-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n           aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_user")
  },data:data},helper ? helper.call(depth0, "set_user_as_leader", "Set %{name} as leader", options) : helperMissing.call(depth0, "t", "set_user_as_leader", "Set %{name} as leader", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n           class=\"icon-user set-as-leader\">\n            ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_user")
  },data:data},helper ? helper.call(depth0, "set_as_leader", "Set as Leader", options) : helperMissing.call(depth0, "t", "set_as_leader", "Set as Leader", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </a>\n      </li>\n      ";
  return buffer;
  }

  buffer += "<div class=\"group-user-name ellipsis\" title=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n  <i class=\"icon-drag-handle\"></i>\n  ";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n</div>\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isLeader), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.canAssignToGroup), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.canEditGroupAssignment), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
  
      
  return templates['groups/manage/groupUser'];
});
