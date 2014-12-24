define('jst/assignments/IndexView', ["compiled/handlebars_helpers","i18n!assignments.index_view"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['assignments/IndexView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <h2 class=\"screenreader-only\">\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.index_view")
  },data:data},helper ? helper.call(depth0, "assignments", "Assignments", options) : helperMissing.call(depth0, "t", "assignments", "Assignments", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </h2>\n";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <h1 class=\"screenreader-only\">\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.index_view")
  },data:data},helper ? helper.call(depth0, "assignments", "Assignments", options) : helperMissing.call(depth0, "t", "assignments", "Assignments", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </h1>\n";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      <a\n        href=\"#\"\n        class=\"btn icon-plus\"\n        id=\"addGroup\"\n        role=\"button\"\n        title='";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.index_view")
  },data:data},helper ? helper.call(depth0, "title_add_group", "Add Assignment Group", options) : helperMissing.call(depth0, "t", "title_add_group", "Add Assignment Group", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'\n        aria-label='";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.index_view")
  },data:data},helper ? helper.call(depth0, "title_add_group", "Add Assignment Group", options) : helperMissing.call(depth0, "t", "title_add_group", "Add Assignment Group", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'\n      >";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.index_view")
  },data:data},helper ? helper.call(depth0, "add_group", "Group", options) : helperMissing.call(depth0, "t", "add_group", "Group", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n\n      <a\n        href=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.ENV)),stack1 == null || stack1 === false ? stack1 : stack1.URLS)),stack1 == null || stack1 === false ? stack1 : stack1.new_assignment_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"\n        class=\"new_assignment btn btn-primary icon-plus\"\n        role=\"button\"\n        title='";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.index_view")
  },data:data},helper ? helper.call(depth0, "title_add_assignment", "Add Assignment", options) : helperMissing.call(depth0, "t", "title_add_assignment", "Add Assignment", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'\n        aria-label='";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.index_view")
  },data:data},helper ? helper.call(depth0, "title_add_assignment", "Add Assignment", options) : helperMissing.call(depth0, "t", "title_add_assignment", "Add Assignment", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'\n      >";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.index_view")
  },data:data},helper ? helper.call(depth0, "add_assignment", "Assignment", options) : helperMissing.call(depth0, "t", "add_assignment", "Assignment", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n\n      <a\n        href=\"#\"\n        class=\"btn\"\n        id=\"assignmentSettingsCog\"\n        role=\"button\"\n        title='";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.index_view")
  },data:data},helper ? helper.call(depth0, "assignments_settings", "Assignments Settings", options) : helperMissing.call(depth0, "t", "assignments_settings", "Assignments Settings", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'\n        aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.index_view")
  },data:data},helper ? helper.call(depth0, "assignments_settings_screenreader", "Assignments Settings", options) : helperMissing.call(depth0, "t", "assignments_settings_screenreader", "Assignments Settings", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n      ><i class=\"icon-settings\"></i></a>\n    ";
  return buffer;
  }

function program7(depth0,data) {
  
  
  return "\n      <div data-view=\"showBy\"></div>\n    ";
  }

function program9(depth0,data) {
  
  
  return "\n  <form data-view=\"createGroup\" class=\"form-dialog\"></form>\n  <form data-view=\"assignmentSettings\" class=\"form-dialog\"></form>\n";
  }

  stack1 = helpers['if'].call(depth0, (depth0 && depth0.course_home), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n<div class=\"header-bar\">\n  <div class=\"header-bar-left form-inline\">\n    <input\n      id=\"search_term\"\n      name=\"search_term\"\n      type=\"search\"\n      value=\"\"\n      disabled\n      placeholder=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.index_view")
  },data:data},helper ? helper.call(depth0, "search_for_assignment", "Search for Assignment", options) : helperMissing.call(depth0, "t", "search_for_assignment", "Search for Assignment", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n      aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.index_view")
  },data:data},helper ? helper.call(depth0, "search_for_assignment", "Search for Assignment", options) : helperMissing.call(depth0, "t", "search_for_assignment", "Search for Assignment", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n    >\n  </div>\n\n  <div class=\"header-bar-right\">\n    ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.ENV)),stack1 == null || stack1 === false ? stack1 : stack1.PERMISSIONS)),stack1 == null || stack1 === false ? stack1 : stack1.manage), {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n</div>\n\n<div data-view=\"assignmentGroups\" class=\"item-group-container\" id=\"ag-list\"></div>\n\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.ENV)),stack1 == null || stack1 === false ? stack1 : stack1.PERMISSIONS)),stack1 == null || stack1 === false ? stack1 : stack1.manage), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
  
      
  return templates['assignments/IndexView'];
});
