define('jst/assignments/NoAssignmentsSearch', ["compiled/handlebars_helpers","i18n!assignments.no_assignments_search"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['assignments/NoAssignmentsSearch'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<div>\n  <div class=\"ig-header\">\n    <h2 class=\"ig-header-title\" aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.no_assignments_search")
  },data:data},helper ? helper.call(depth0, "aria_assignments", "Assignments", options) : helperMissing.call(depth0, "t", "aria_assignments", "Assignments", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n      <i class=\"icon-mini-arrow-down\"></i>\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.no_assignments_search")
  },data:data},helper ? helper.call(depth0, "assignments", "Assignments", options) : helperMissing.call(depth0, "t", "assignments", "Assignments", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </h2>\n  </div>\n  <ul class=\"ig-list\">\n    <li>\n      <div class=\"ig-row ig-row-empty\">\n        <div class=\"ig-empty-msg\">\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.no_assignments_search")
  },data:data},helper ? helper.call(depth0, "no_assignments_found", "No assignments found", options) : helperMissing.call(depth0, "t", "no_assignments_found", "No assignments found", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n      </div>\n    </li>\n  </ul>\n</div>";
  return buffer;
  });
  
      
  return templates['assignments/NoAssignmentsSearch'];
});
