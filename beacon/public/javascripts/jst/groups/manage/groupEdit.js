define('jst/groups/manage/groupEdit', ["compiled/handlebars_helpers","i18n!groups.manage.group_edit"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['groups/manage/groupEdit'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n";
  stack1 = (helper = helpers.ifEqual || (depth0 && depth0.ifEqual),options={hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.role), "student_organized", options) : helperMissing.call(depth0, "ifEqual", (depth0 && depth0.role), "student_organized", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n<div class=\"control-group\">\n  <label class=\"control-label\" for=\"group_join_level\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_edit")
  },data:data},helper ? helper.call(depth0, "group_join_level", "Joining", options) : helperMissing.call(depth0, "t", "group_join_level", "Joining", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n  <div class=\"controls\">\n    <select id=\"group_join_level\" name=\"join_level\">\n      <option value=\"parent_context_auto_join\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_edit")
  },data:data},helper ? helper.call(depth0, "open", "Members are free to join", options) : helperMissing.call(depth0, "t", "open", "Members are free to join", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n      <option value=\"invitation_only\" "
    + escapeExpression((helper = helpers.selectedIf || (depth0 && depth0.selectedIf),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.join_level), "invitation_only", options) : helperMissing.call(depth0, "selectedIf", (depth0 && depth0.join_level), "invitation_only", options)))
    + ">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_edit")
  },data:data},helper ? helper.call(depth0, "invitation_only", "Invitation only", options) : helperMissing.call(depth0, "t", "invitation_only", "Invitation only", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n    </select>\n  </div>\n</div>\n";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n<div class=\"control-group\">\n  <label class=\"control-label\" for=\"group_max_membership\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_edit")
  },data:data},helper ? helper.call(depth0, "group_max_membership", "Limit groups to", options) : helperMissing.call(depth0, "t", "group_max_membership", "Limit groups to", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n  <div class=\"controls\">\n    <input type=\"number\" id=\"group_max_membership\" name='max_membership' value=\"";
  if (helper = helpers.max_membership) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.max_membership); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"input-mini\">\n    <span>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_edit")
  },data:data},helper ? helper.call(depth0, "group_max_membership_members", "members", options) : helperMissing.call(depth0, "t", "group_max_membership_members", "members", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n    <span class=\"hint-text\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_edit")
  },data:data},helper ? helper.call(depth0, "group_max_membership_help", "(Leave blank to use group set max)", options) : helperMissing.call(depth0, "t", "group_max_membership_help", "(Leave blank to use group set max)", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n  </div>\n</div>\n";
  return buffer;
  }

  buffer += "<div class=\"control-group\">\n  <label class=\"control-label\" for=\"group_name\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_edit")
  },data:data},helper ? helper.call(depth0, "group_name", "Group Name", options) : helperMissing.call(depth0, "t", "group_name", "Group Name", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n  <div class=\"controls\">\n    <input type=\"text\" id=\"group_name\" name='name' value=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n           placeholder=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_edit")
  },data:data},helper ? helper.call(depth0, "group_name", "Group Name", options) : helperMissing.call(depth0, "t", "group_name", "Group Name", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n  </div>\n</div>\n";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.nameOnly), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n<div class=\"form-controls\">\n  <button class=\"btn dialog_closer\" type=\"button\"\n          data-dismiss='modal'>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_edit")
  },data:data},helper ? helper.call(depth0, "cancel", "Cancel", options) : helperMissing.call(depth0, "t", "cancel", "Cancel", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n  <button class=\"btn btn-primary\"\n          data-text-while-loading='";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_edit")
  },data:data},helper ? helper.call(depth0, "saving", "Saving...", options) : helperMissing.call(depth0, "t", "saving", "Saving...", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'\n          type=\"submit\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_edit")
  },data:data},helper ? helper.call(depth0, "save", "Save", options) : helperMissing.call(depth0, "t", "save", "Save", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n</div>\n";
  return buffer;
  });
  
      
  return templates['groups/manage/groupEdit'];
});
