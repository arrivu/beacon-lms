define('jst/courses/roster/index', ["compiled/handlebars_helpers","i18n!courses.roster.index"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['courses/roster/index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n<div class='pull-right group-categories-actions'>\n  <a href=\"/courses/";
  if (helper = helpers.course_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.course_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/groups#new\" class=\"btn btn-primary\">\n    <i class='icon-plus'></i> ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("courses.roster.index")
  },data:data},helper ? helper.call(depth0, "group_set", "Group Set", options) : helperMissing.call(depth0, "t", "group_set", "Group Set", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </a>\n</div>\n";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.course)),stack1 == null || stack1 === false ? stack1 : stack1.concluded), {hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <a\n      href=\"#\"\n      class=\"btn pull-right icon-plus\"\n      id=\"addUsers\"\n      role=\"button\"\n      title='";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("courses.roster.index")
  },data:data},helper ? helper.call(depth0, "cannot_add_users", "New users can not be added because this course is concluded", options) : helperMissing.call(depth0, "t", "cannot_add_users", "New users can not be added because this course is concluded", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'\n      aria-label='";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("courses.roster.index")
  },data:data},helper ? helper.call(depth0, "cannot_add_users", "New users can not be added because this course is concluded", options) : helperMissing.call(depth0, "t", "cannot_add_users", "New users can not be added because this course is concluded", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'\n      disabled data-tooltip>\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("courses.roster.index")
  },data:data},helper ? helper.call(depth0, "people", "People", options) : helperMissing.call(depth0, "t", "people", "People", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </a>\n    ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <a\n      href=\"#\"\n      class=\"btn btn-primary pull-right icon-plus\"\n      id=\"addUsers\"\n      role=\"button\"\n      title='";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("courses.roster.index")
  },data:data},helper ? helper.call(depth0, "title_add_people", "Add People", options) : helperMissing.call(depth0, "t", "title_add_people", "Add People", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'\n      aria-label='";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("courses.roster.index")
  },data:data},helper ? helper.call(depth0, "title_add_people", "Add People", options) : helperMissing.call(depth0, "t", "title_add_people", "Add People", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'\n      >";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("courses.roster.index")
  },data:data},helper ? helper.call(depth0, "people", "People", options) : helperMissing.call(depth0, "t", "people", "People", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n    ";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, (depth0 && depth0.canAddCategories), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n<div id=\"group_categories_tabs\" class=\"ui-tabs-minimal ui-tabs ui-widget ui-widget-content ui-corner-all\" style=\"display: block;\">\n  <ul class=\"collectionViewItems ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all\" role=\"tablist\" data-view=\"rosterTabs\"></ul>\n  <div class=\"roster-tab tab-panel ui-tabs-panel form-inline\" style=\"min-height: 800px;\">\n    <input\n    type=\"text\"\n    name=\"search_term\"\n    data-view=\"inputFilter\"\n    placeholder='";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("courses.roster.index")
  },data:data},helper ? helper.call(depth0, "search_people", "Search people", options) : helperMissing.call(depth0, "t", "search_people", "Search people", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'\n    aria-label='";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("courses.roster.index")
  },data:data},helper ? helper.call(depth0, "filter_field_description", "Search people. As you type in this field, the list of people will be automatically filtered to only include those whose names match your input.", options) : helperMissing.call(depth0, "t", "filter_field_description", "Search people. As you type in this field, the list of people will be automatically filtered to only include those whose names match your input.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'\n    >\n\n    <select\n      name=\"enrollment_role\"\n      data-view=\"roleSelect\"\n      aria-label='";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("courses.roster.index")
  },data:data},helper ? helper.call(depth0, "role_to_search", "Limit search to role", options) : helperMissing.call(depth0, "t", "role_to_search", "Limit search to role", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'\n      ></select>\n\n    ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.permissions)),stack1 == null || stack1 === false ? stack1 : stack1.add_users), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <form data-view=\"createUsers\" class=\"form-dialog\"></form>\n\n    <div class=\"v-gutter\">\n      <div data-view=\"resendInvitations\"></div>\n      <div data-view=\"users\"></div>\n    </div>\n\n  </div>\n</div>\n\n";
  return buffer;
  });
  
      
  return templates['courses/roster/index'];
});
