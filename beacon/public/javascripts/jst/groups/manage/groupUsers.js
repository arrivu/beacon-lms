define('jst/groups/manage/groupUsers', ["compiled/handlebars_helpers","compiled/util/registerTemplateCss","i18n!groups.manage.group_users"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['groups/manage/groupUsers'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <ul class=\"collectionViewItems unstyled\"></ul>\n  <div class=\"no-results-wrapper\">\n    <div class=\"no-results hidden\">\n      ";
  stack1 = (helper = helpers.ifEqual || (depth0 && depth0.ifEqual),options={hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.ENV)),stack1 == null || stack1 === false ? stack1 : stack1.group_user_type), "student", options) : helperMissing.call(depth0, "ifEqual", ((stack1 = (depth0 && depth0.ENV)),stack1 == null || stack1 === false ? stack1 : stack1.group_user_type), "student", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n  </div>\n  <div class=\"paginatedLoadingIndicator\"></div>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_users")
  },data:data},helper ? helper.call(depth0, "no_matching_students", "No matching students.", options) : helperMissing.call(depth0, "t", "no_matching_students", "No matching students.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_users")
  },data:data},helper ? helper.call(depth0, "no_matching_users", "No matching users.", options) : helperMissing.call(depth0, "t", "no_matching_users", "No matching users.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <div class=\"no-results\">\n    ";
  stack1 = (helper = helpers.ifEqual || (depth0 && depth0.ifEqual),options={hash:{},inverse:self.program(10, program10, data),fn:self.program(7, program7, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.ENV)),stack1 == null || stack1 === false ? stack1 : stack1.group_user_type), "student", options) : helperMissing.call(depth0, "ifEqual", ((stack1 = (depth0 && depth0.ENV)),stack1 == null || stack1 === false ? stack1 : stack1.group_user_type), "student", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n";
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_users")
  },data:data},helper ? helper.call(depth0, "no_students", "There are currently no students in this group.", options) : helperMissing.call(depth0, "t", "no_students", "There are currently no students in this group.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.locked), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_users")
  },data:data},helper ? helper.call(depth0, "add_student", "Add a student to get started.", options) : helperMissing.call(depth0, "t", "add_student", "Add a student to get started.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_users")
  },data:data},helper ? helper.call(depth0, "no_users", "There are currently no users in this group.", options) : helperMissing.call(depth0, "t", "no_users", "There are currently no users in this group.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.locked), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }
function program11(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_users")
  },data:data},helper ? helper.call(depth0, "add_user", "Add a user to get started.", options) : helperMissing.call(depth0, "t", "add_user", "Add a user to get started.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;
  }

  stack1 = (helper = helpers.ifAny || (depth0 && depth0.ifAny),options={hash:{},inverse:self.program(6, program6, data),fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.count), (depth0 && depth0.loading), options) : helperMissing.call(depth0, "ifAny", (depth0 && depth0.count), (depth0 && depth0.loading), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
  
      
arguments[1]('groups/manage/groupUsers', ".group-user{border:1px solid #ccc;background:#fff;margin-bottom:3px;padding:0 15px 0 0;line-height:30px;border-radius:3px;position:relative;cursor:pointer;}.group-user.ui-draggable-dragging{cursor:move;list-style:none;z-index:9999;}.group-user.group-user-highlight{-webkit-animation:highlight-shadow-fade ease-in 1s;animation:highlight-shadow-fade ease-in 1s;}.group-user .al-trigger{padding:0;text-align:right;}.group-user-actions,.assign-to-group{position:absolute;top:0px;right:3px;top:1px;}.group-user-actions i:before,.assign-to-group i:before{color:#aaa;font-size:0.8em;}.group-user-actions .icon-mini-arrow-down,.assign-to-group .icon-mini-arrow-down{text-align:left;}.assign-to-group{position:absolute;top:0px;right:1px;}.group .group-users{margin:1.25em 0 -8px;padding:8px 0;overflow:hidden;}.group .group-users .collectionViewItems{width:103%;}.group-leader{color:#555;}.group-leader a{font-size:0.85em;}.group-header .group-summary{font-size:0.85em;}.group .group-user{float:left;width:31%;margin:0 2% 3px 0;-moz-box-sizing:border-box;box-sizing:border-box;}.group-category-contents-condensed .group .group-user{width:23.5%;margin:0 1% 3px 0;}.group .group-user .group-user-name{margin-right:0;}.group .group-user .group-leader{position:absolute;right:36px;top:7px;}.group-user-name{max-width:80%;overflow:hidden;white-space:nowrap;margin-right:10px;font-size:0.9em;font-weight:bold;color:#777;}.group-users .paginatedLoadingIndicator{clear:both;}");

  return templates['groups/manage/groupUsers'];
});
