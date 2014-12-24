define('jst/groups/manage/groupCategoryEdit', ["compiled/handlebars_helpers","i18n!groups.manage.group_category_edit","jst/groups/manage/_selfSignupHelp","jst/groups/manage/_autoLeadershipControls"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['groups/manage/groupCategoryEdit'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function";

function program1(depth0,data) {
  
  
  return " dotted-separator";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <fieldset class=\"pad-box dotted-separator\">\n    <div class=\"control-group\">\n      <label class=\"checkbox\" for=\"enable_self_signup\">\n        "
    + escapeExpression((helper = helpers.checkbox || (depth0 && depth0.checkbox),options={hash:{
    'class': ("self-signup-toggle")
  },data:data},helper ? helper.call(depth0, "enable_self_signup", options) : helperMissing.call(depth0, "checkbox", "enable_self_signup", options)))
    + "\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_category_edit")
  },data:data},helper ? helper.call(depth0, "allow_self_signup", "Allow self sign-up", options) : helperMissing.call(depth0, "t", "allow_self_signup", "Allow self sign-up", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </label>\n      ";
  stack1 = self.invokePartial(partials['groups/manage/selfSignupHelp'], 'groups/manage/selfSignupHelp', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n    <div class=\"self-signup-controls\">\n      <div class=\"control-group\">\n        <label class=\"checkbox\" for=\"restrict_self_signup\">\n          "
    + escapeExpression((helper = helpers.checkbox || (depth0 && depth0.checkbox),options={hash:{},data:data},helper ? helper.call(depth0, "restrict_self_signup", options) : helperMissing.call(depth0, "checkbox", "restrict_self_signup", options)))
    + "\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_category_edit")
  },data:data},helper ? helper.call(depth0, "require_same_section", "Require group members to be in the same section", options) : helperMissing.call(depth0, "t", "require_same_section", "Require group members to be in the same section", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </label>\n      </div>\n      <div class=\"control-group\">\n        <label>\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_category_edit")
  },data:data},helper ? helper.call(depth0, "limit_group_size", "Limit groups to %h{group_limit} members", options) : helperMissing.call(depth0, "t", "limit_group_size", "Limit groups to %h{group_limit} members", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </label>\n        <span class=\"hint-text\">\n          (";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_category_edit")
  },data:data},helper ? helper.call(depth0, "leave_group_limit_blank", "Leave blank for no limit", options) : helperMissing.call(depth0, "t", "leave_group_limit_blank", "Leave blank for no limit", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ")\n        </span>\n        <div>\n          <strong>\n            <em>\n              ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_category_edit")
  },data:data},helper ? helper.call(depth0, "group_limit_override", "Changing this will override any individually set group limits", options) : helperMissing.call(depth0, "t", "group_limit_override", "Changing this will override any individually set group limits", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </em>\n          </strong>\n        </div>\n      </div>\n    </div>\n  </fieldset>\n  ";
  stack1 = self.invokePartial(partials['groups/manage/autoLeadershipControls'], 'groups/manage/autoLeadershipControls', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;
  }

  buffer += "<div class=\"form-dialog-content pad-box form-inline group-category-edit\">\n  <fieldset class=\"pad-box";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.ENV)),stack1 == null || stack1 === false ? stack1 : stack1.allow_self_signup), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n    <label>\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_category_edit")
  },data:data},helper ? helper.call(depth0, "group_set_name", "Group Set Name", options) : helperMissing.call(depth0, "t", "group_set_name", "Group Set Name", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " &nbsp;\n      <input type=\"text\" id=\"category_";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "_name\" name=\"name\" value=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n    </label>\n  </fieldset>\n  ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.ENV)),stack1 == null || stack1 === false ? stack1 : stack1.allow_self_signup), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n<div class=\"form-controls\">\n  <button type=\"button\" class=\"btn dialog_closer\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_category_edit")
  },data:data},helper ? helper.call(depth0, "cancel", "Cancel", options) : helperMissing.call(depth0, "t", "cancel", "Cancel", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n  <button type=\"submit\" class=\"btn btn-primary\" data-text-while-loading='";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_category_edit")
  },data:data},helper ? helper.call(depth0, "saving", "Saving...", options) : helperMissing.call(depth0, "t", "saving", "Saving...", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_category_edit")
  },data:data},helper ? helper.call(depth0, "save", "Save", options) : helperMissing.call(depth0, "t", "save", "Save", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n</div>\n";
  return buffer;
  });
  
      
  return templates['groups/manage/groupCategoryEdit'];
});
