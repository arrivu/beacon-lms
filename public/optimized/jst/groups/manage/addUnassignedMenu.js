define('jst/groups/manage/addUnassignedMenu', ["compiled/handlebars_helpers","compiled/util/registerTemplateCss","i18n!groups.manage.add_unassigned_menu"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['groups/manage/addUnassignedMenu'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.add_unassigned_menu")
  },data:data},helper ? helper.call(depth0, "add_unassigned_student", "Add Unassigned Student", options) : helperMissing.call(depth0, "t", "add_unassigned_student", "Add Unassigned Student", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.add_unassigned_menu")
  },data:data},helper ? helper.call(depth0, "add_unassigned_user", "Add Unassigned User", options) : helperMissing.call(depth0, "t", "add_unassigned_user", "Add Unassigned User", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;
  }

  buffer += "<div class=\"popover-title\">\n  ";
  stack1 = (helper = helpers.ifEqual || (depth0 && depth0.ifEqual),options={hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.ENV)),stack1 == null || stack1 === false ? stack1 : stack1.group_user_type), "student", options) : helperMissing.call(depth0, "ifEqual", ((stack1 = (depth0 && depth0.ENV)),stack1 == null || stack1 === false ? stack1 : stack1.group_user_type), "student", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n<div class=\"popover-content\">\n  <div class=\"form-search clearfix\">\n    <input\n      type=\"text\"\n      name=\"search_term\"\n      class=\"search-query\"\n      data-view=\"inputFilter\"\n      placeholder='";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.add_unassigned_menu")
  },data:data},helper ? helper.call(depth0, "search_people", "Search people", options) : helperMissing.call(depth0, "t", "search_people", "Search people", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'\n      aria-label='";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.add_unassigned_menu")
  },data:data},helper ? helper.call(depth0, "search_people", "Search people", options) : helperMissing.call(depth0, "t", "search_people", "Search people", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'\n      role=\"search\"\n    >\n  </div>\n  <div data-view=\"users\"></div>\n</div>\n";
  return buffer;
  });
  
      
arguments[1]('groups/manage/addUnassignedMenu', ".assign-user-to-group{display:block;width:230px;}");

  return templates['groups/manage/addUnassignedMenu'];
});
