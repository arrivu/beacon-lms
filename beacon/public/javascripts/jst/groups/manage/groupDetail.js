define('jst/groups/manage/groupDetail', ["compiled/handlebars_helpers","i18n!groups.manage.group_detail"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['groups/manage/groupDetail'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  
  return "span5";
  }

function program3(depth0,data) {
  
  
  return "span8";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <div class=\"span3 ellipsis group-leader\">\n    <i class=\"icon-user\" aria-hidden=\"true\"></i>\n    <a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.leader)),stack1 == null || stack1 === false ? stack1 : stack1.html_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n      <span class=\"screenreader-only\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_detail")
  },data:data},helper ? helper.call(depth0, "group_leader", "Group Leader", options) : helperMissing.call(depth0, "t", "group_leader", "Group Leader", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n      "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.leader)),stack1 == null || stack1 === false ? stack1 : stack1.display_name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n    </a>\n  </div>\n  ";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      <a href=\"#\" class=\"add-user action-darkgray\" data-tooltip aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_detail")
  },data:data},helper ? helper.call(depth0, "add_user_to_group", "Assign user to group", options) : helperMissing.call(depth0, "t", "add_user_to_group", "Assign user to group", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_detail")
  },data:data},helper ? helper.call(depth0, "add_user_to_group", "Assign user to group", options) : helperMissing.call(depth0, "t", "add_user_to_group", "Assign user to group", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"><i class=\"icon-add\"></i></a>\n    ";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n          <li><a href=\"#\" data-focus-returns-to='group-";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-actions' class=\"icon-edit edit-group\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_detail")
  },data:data},helper ? helper.call(depth0, "group_edit", "Edit", options) : helperMissing.call(depth0, "t", "group_edit", "Edit", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></li>\n          <li><a href=\"#\" class=\"icon-trash delete-group\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_detail")
  },data:data},helper ? helper.call(depth0, "group_delete", "Delete", options) : helperMissing.call(depth0, "t", "group_delete", "Delete", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></li>\n        ";
  return buffer;
  }

  buffer += "<div class=\"row-fluid group-header\">\n  <div class=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.leader), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ellipsis\">\n    <a href=\"#\" class=\"toggle-group group-heading\" aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_detail")
  },data:data},helper ? helper.call(depth0, "show_group_details", "Show details for group %{name}", options) : helperMissing.call(depth0, "t", "show_group_details", "Show details for group %{name}", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" title=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" aria-expanded=\"false\">\n      <i class=\"group-collapsed-item icon-mini-arrow-right\"></i>\n      <i class=\"group-expanded-item icon-mini-arrow-down\"></i>\n      <span class=\"group-name\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n    </a>\n  </div>\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.leader), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  <div class=\"span2 ellipsis\">\n    <span class=\"label label-info show-group-full\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_detail")
  },data:data},helper ? helper.call(depth0, "group_full", "Full", options) : helperMissing.call(depth0, "t", "group_full", "Full", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n    <br class=\"show-group-full\"/>\n    <span class=\"toggle-group group-summary\">";
  if (helper = helpers.summary) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.summary); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n  </div>\n  <div class=\"span2 group-actions\">\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.canAssignUsers), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <div class=\"inline-block\">\n      <a id='group-";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-actions' class=\"al-trigger action-darkgray\" href=\"#\" role=\"button\">\n        <i class=\"icon-settings\"></i><i class=\"icon-mini-arrow-down\"></i>\n        <span class=\"screenreader-only\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_detail")
  },data:data},helper ? helper.call(depth0, "group_settings", "Settings", options) : helperMissing.call(depth0, "t", "group_settings", "Settings", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n      </a>\n      <ul class=\"al-options\">\n        <li><a href=\"/groups/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"icon-group visit-group\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_detail")
  },data:data},helper ? helper.call(depth0, "visit_group_homepage", "Visit Group Homepage", options) : helperMissing.call(depth0, "t", "visit_group_homepage", "Visit Group Homepage", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></li>\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.canEdit), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </ul>\n    </div>\n  </div>\n</div>\n";
  return buffer;
  });
  
      
  return templates['groups/manage/groupDetail'];
});
