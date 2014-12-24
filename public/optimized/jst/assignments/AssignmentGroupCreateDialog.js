define('jst/assignments/AssignmentGroupCreateDialog', ["compiled/handlebars_helpers","i18n!assignments.assignment_group_create_dialog"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['assignments/AssignmentGroupCreateDialog'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<div class=\"row-fluid\">\n  <div class=\"span12\">\n    <form title='";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.assignment_group_create_dialog")
  },data:data},helper ? helper.call(depth0, "links.add_assignment_group", "Add Assignment Group\"", options) : helperMissing.call(depth0, "t", "links.add_assignment_group", "Add Assignment Group\"", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'\n      class=\"form-inline bootstrap-form\">\n\n      <div class=\"control-group\">\n        <label class=\"control-label\">\n          <div class=\"controls\">\n            <input name=\"assignment_group[name]\"\n            type=\"text\"\n            placeholder=\"New Group Name\"\n            />\n            ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.assignment_group_create_dialog")
  },data:data},helper ? helper.call(depth0, "assignment_group.labels.name", "Name", options) : helperMissing.call(depth0, "t", "assignment_group.labels.name", "Name", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </div>\n        </label>\n      </div>\n\n      <div class=\"button-container\">\n        <button type=\"submit\" class=\"btn btn-primary\">\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.assignment_group_create_dialog")
  },data:data},helper ? helper.call(depth0, "buttons.add_group", "Add Group", options) : helperMissing.call(depth0, "t", "buttons.add_group", "Add Group", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </button>\n        <button type=\"button\" class=\"btn btn-secondary cancel-button\">\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.assignment_group_create_dialog")
  },data:data},helper ? helper.call(depth0, "buttons.cancel", "Cancel", options) : helperMissing.call(depth0, "t", "buttons.cancel", "Cancel", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </button>\n      </div>\n\n    </form>\n  </div>\n</div>\n";
  return buffer;
  });
  
      
  return templates['assignments/AssignmentGroupCreateDialog'];
});
