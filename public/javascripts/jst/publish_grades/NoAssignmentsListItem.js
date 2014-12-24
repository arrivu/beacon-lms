define('jst/publish_grades/NoAssignmentsListItem', ["compiled/handlebars_helpers","i18n!publish_grades.no_assignments_list_item"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['publish_grades/NoAssignmentsListItem'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<div class=\"ig-row ig-row-empty\">\n  <div class=\"ig-empty-msg\">\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("publish_grades.no_assignments_list_item")
  },data:data},helper ? helper.call(depth0, "no_assignments_in_this_group", "No assignments in this group", options) : helperMissing.call(depth0, "t", "no_assignments_in_this_group", "No assignments in this group", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n</div>";
  return buffer;
  });
  
      
  return templates['publish_grades/NoAssignmentsListItem'];
});
