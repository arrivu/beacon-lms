define('jst/publish_grades/IndexView', ["compiled/handlebars_helpers","i18n!publish_grades.index_view"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['publish_grades/IndexView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<h1 class=\"screenreader-only\">\n  ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("publish_grades.index_view")
  },data:data},helper ? helper.call(depth0, "assignments", "Assignments", options) : helperMissing.call(depth0, "t", "assignments", "Assignments", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</h1>\n\n<div class=\"header-bar\">\n  <div class=\"header-bar-left form-inline\">\n    <input\n      id=\"search_term\"\n      name=\"search_term\"\n      type=\"search\"\n      value=\"\"\n      disabled\n      placeholder=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("publish_grades.index_view")
  },data:data},helper ? helper.call(depth0, "search_for_assignment", "Search for Assignment", options) : helperMissing.call(depth0, "t", "search_for_assignment", "Search for Assignment", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n      aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("publish_grades.index_view")
  },data:data},helper ? helper.call(depth0, "search_for_assignment", "Search for Assignment", options) : helperMissing.call(depth0, "t", "search_for_assignment", "Search for Assignment", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n    >\n  </div>\n\n  <div class=\"header-bar-right\">\n      <a\n        href=\"#\"\n        class=\"btn icon-publish\"\n        id=\"addGroup\"\n        role=\"button\"\n        title='";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("publish_grades.index_view")
  },data:data},helper ? helper.call(depth0, "title_add_group", "Add Assignment Group", options) : helperMissing.call(depth0, "t", "title_add_group", "Add Assignment Group", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'\n        aria-label='";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("publish_grades.index_view")
  },data:data},helper ? helper.call(depth0, "title_add_group", "Add Assignment Group", options) : helperMissing.call(depth0, "t", "title_add_group", "Add Assignment Group", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'\n      >";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("publish_grades.index_view")
  },data:data},helper ? helper.call(depth0, "add_group", "Publish Assignment Grades", options) : helperMissing.call(depth0, "t", "add_group", "Publish Assignment Grades", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n  </div>\n</div>\n\n<div data-view=\"assignmentGroups\" class=\"item-group-container\" id=\"ag-list\"></div>\n";
  return buffer;
  });
  
      
  return templates['publish_grades/IndexView'];
});
