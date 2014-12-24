define('jst/groups/manage/groupCategoryCreate', ["compiled/handlebars_helpers","compiled/util/registerTemplateCss","i18n!groups.manage.group_category_create","jst/groups/manage/_selfSignupHelp","jst/groups/manage/_autoLeadershipControls"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['groups/manage/groupCategoryCreate'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return " dotted-separator";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <fieldset class=\"pad-box dotted-separator\">\n    <span class=\"control-label\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_category_create")
  },data:data},helper ? helper.call(depth0, "self_signup", "Self Sign-Up", options) : helperMissing.call(depth0, "t", "self_signup", "Self Sign-Up", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n    <div class=\"controls\">\n      <label class=\"checkbox\" for=\"enable_self_signup\">\n        "
    + escapeExpression((helper = helpers.checkbox || (depth0 && depth0.checkbox),options={hash:{
    'class': ("self-signup-toggle")
  },data:data},helper ? helper.call(depth0, "enable_self_signup", options) : helperMissing.call(depth0, "checkbox", "enable_self_signup", options)))
    + "\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_category_create")
  },data:data},helper ? helper.call(depth0, "allow_self_signup", "Allow self sign-up", options) : helperMissing.call(depth0, "t", "allow_self_signup", "Allow self sign-up", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  stack1 = self.invokePartial(partials['groups/manage/selfSignupHelp'], 'groups/manage/selfSignupHelp', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </label>\n    </div>\n    <input name=\"group_limit\" type=\"hidden\" value=\"\">\n    <div class=\"controls\">\n      <label class=\"checkbox self-signup-controls\" for=\"restrict_self_signup\">\n        "
    + escapeExpression((helper = helpers.checkbox || (depth0 && depth0.checkbox),options={hash:{},data:data},helper ? helper.call(depth0, "restrict_self_signup", options) : helperMissing.call(depth0, "checkbox", "restrict_self_signup", options)))
    + "\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_category_create")
  },data:data},helper ? helper.call(depth0, "require_same_section", "Require group members to be in the same section", options) : helperMissing.call(depth0, "t", "require_same_section", "Require group members to be in the same section", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </label>\n    </div>\n  </fieldset>\n  <fieldset class=\"pad-box admin-signup-controls dotted-separator\">\n    <span class=\"control-label\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_category_create")
  },data:data},helper ? helper.call(depth0, "group_structure", "Group Structure", options) : helperMissing.call(depth0, "t", "group_structure", "Group Structure", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n    <div class=\"controls\" style=\"margin-top:-4px\">\n      <label class=\"radio\">\n        <input type=\"radio\" id=\"split_groups\" name=\"split_groups\" value=\"1\" style=\"margin-top:8px\">\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_category_create")
  },data:data},helper ? helper.call(depth0, "split_into_groups", "Split students into %h{num_groups} equal groups", options) : helperMissing.call(depth0, "t", "split_into_groups", "Split students into %h{num_groups} equal groups", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </label>\n    </div>\n    <div class=\"controls\">\n      <label class=\"radio\">\n        <input type=\"radio\" name=\"split_groups\" value=\"0\" checked>\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_category_create")
  },data:data},helper ? helper.call(depth0, "create_groups_manually", "I'll create groups manually", options) : helperMissing.call(depth0, "t", "create_groups_manually", "I'll create groups manually", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </label>\n    </div>\n  </fieldset>\n\n  <fieldset class=\"pad-box self-signup-controls dotted-separator\">\n    <span class=\"control-label\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_category_create")
  },data:data},helper ? helper.call(depth0, "group_structure", "Group Structure", options) : helperMissing.call(depth0, "t", "group_structure", "Group Structure", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n    <div class=\"controls\">\n      <label>\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_category_create")
  },data:data},helper ? helper.call(depth0, "create_groups", "Create %h{num_groups} groups now", options) : helperMissing.call(depth0, "t", "create_groups", "Create %h{num_groups} groups now", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </label>\n    </div>\n    <div class=\"controls\">\n      <label>\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_category_create")
  },data:data},helper ? helper.call(depth0, "limit_group_size", "Limit groups to %h{group_limit} members", options) : helperMissing.call(depth0, "t", "limit_group_size", "Limit groups to %h{group_limit} members", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        <span class=\"hint-text\">\n          (";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_category_create")
  },data:data},helper ? helper.call(depth0, "leave_group_limit_blank", "Leave blank for no limit", options) : helperMissing.call(depth0, "t", "leave_group_limit_blank", "Leave blank for no limit", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ")\n        </span>\n      </label>\n    </div>\n  </fieldset>\n  ";
  stack1 = self.invokePartial(partials['groups/manage/autoLeadershipControls'], 'groups/manage/autoLeadershipControls', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n  ";
  return buffer;
  }

  buffer += "<div class=\"form-dialog-content pad-box form-horizontal group-category-create\">\n  <fieldset class=\"pad-box";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.ENV)),stack1 == null || stack1 === false ? stack1 : stack1.allow_self_signup), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n    <label class=\"control-label\" for=\"new_category_name\">\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_category_create")
  },data:data},helper ? helper.call(depth0, "group_set_name", "Group Set Name", options) : helperMissing.call(depth0, "t", "group_set_name", "Group Set Name", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </label>\n    <div class=\"controls\">\n      <input type=\"text\" id=\"new_category_name\" name=\"name\">\n    </div>\n  </fieldset>\n  ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.ENV)),stack1 == null || stack1 === false ? stack1 : stack1.allow_self_signup), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n<div class=\"form-controls\">\n  <button type=\"button\" class=\"btn dialog_closer\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_category_create")
  },data:data},helper ? helper.call(depth0, "cancel", "Cancel", options) : helperMissing.call(depth0, "t", "cancel", "Cancel", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n  <button type=\"submit\" class=\"btn btn-primary\" data-text-while-loading='";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_category_create")
  },data:data},helper ? helper.call(depth0, "saving", "Saving...", options) : helperMissing.call(depth0, "t", "saving", "Saving...", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_category_create")
  },data:data},helper ? helper.call(depth0, "save", "Save", options) : helperMissing.call(depth0, "t", "save", "Save", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n</div>\n";
  return buffer;
  });
  
      
arguments[1]('groups/manage/groupCategoryCreate', ".group-category-create.group-category-self-signup fieldset.admin-signup-controls,.group-category-create.group-category-admin-signup fieldset.self-signup-controls{display:none;}.group-category-create.group-category-admin-signup label.self-signup-controls{opacity:0.5;}");

  return templates['groups/manage/groupCategoryCreate'];
});
