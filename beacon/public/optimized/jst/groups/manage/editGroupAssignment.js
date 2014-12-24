define('jst/groups/manage/editGroupAssignment', ["compiled/handlebars_helpers","compiled/util/registerTemplateCss","i18n!groups.manage.edit_group_assignment"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['groups/manage/editGroupAssignment'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <p class='separated'>\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.edit_group_assignment")
  },data:data},helper ? helper.call(depth0, "all_available_groups_full", "All available groups are full.", options) : helperMissing.call(depth0, "t", "all_available_groups_full", "All available groups are full.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </p>\n    <p>\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.edit_group_assignment")
  },data:data},helper ? helper.call(depth0, "all_groups_full_suggestion", "Either change group limits or add more groups.", options) : helperMissing.call(depth0, "t", "all_groups_full_suggestion", "Either change group limits or add more groups.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </p>\n  ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <fieldset class=\"dotted-separator\">\n      <h5>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.edit_group_assignment"),
    'w0': ("<b>$1</b>")
  },data:data},helper ? helper.call(depth0, "where_to_move", "Where would you like to move *%{userName}*?", options) : helperMissing.call(depth0, "t", "where_to_move", "Where would you like to move *%{userName}*?", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h5>\n    </fieldset>\n    <fieldset class=\"pad-box top-only\">\n      <label\n        id=\"new-group-list-label\"\n        for=\"move_from_group_";
  if (helper = helpers.groupId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.groupId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.edit_group_assignment")
  },data:data},helper ? helper.call(depth0, "move_to_group_label", "Move to group", options) : helperMissing.call(depth0, "t", "move_to_group_label", "Move to group", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ":\n      </label>\n      <select\n        id=\"move_from_group_";
  if (helper = helpers.groupId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.groupId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n        class=\"single-select\"\n        aria-labelledby=\"new-group-list-label\"\n        size='7'\n        tabindex='0'>\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.groups), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </select>\n    </fieldset>\n  ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n          ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.isFull), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n            <option\n              value=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n                ";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n            </option>\n          ";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <button\n      class=\"set-group btn btn-primary\"\n      data-text-while-loading='";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.edit_group_assignment")
  },data:data},helper ? helper.call(depth0, "saving", "Saving...", options) : helperMissing.call(depth0, "t", "saving", "Saving...", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'\n      type=\"submit\"\n    >";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.edit_group_assignment")
  },data:data},helper ? helper.call(depth0, "#buttons.save", "Save", options) : helperMissing.call(depth0, "t", "#buttons.save", "Save", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n  ";
  return buffer;
  }

  buffer += "<div class=\"form-dialog-content\">\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.allFull), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n\n<div class=\"form-controls\">\n  <button\n    class=\"btn dialog_closer\"\n    type=\"button\"\n  >";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.edit_group_assignment")
  },data:data},helper ? helper.call(depth0, "#buttons.cancel", "Cancel", options) : helperMissing.call(depth0, "t", "#buttons.cancel", "Cancel", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n  ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.allFull), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  return buffer;
  });
  
      
arguments[1]('groups/manage/editGroupAssignment', ".single-select{border-color:#a8adb3;border-radius:4px;border-style:solid;border-width:1px;height:125px;margin:0;padding:0;width:408px;}.group-category-edit .auto-group-leader-controls-radio{margin-left:25px;}.group-category-create .auto-group-leader-controls-radio{margin-left:200px;}");

  return templates['groups/manage/editGroupAssignment'];
});
