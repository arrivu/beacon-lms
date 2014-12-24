define('jst/groups/manage/randomlyAssignMembers', ["compiled/handlebars_helpers","i18n!groups.manage.randomly_assign_members"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['groups/manage/randomlyAssignMembers'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<div class=\"form-dialog-content\">\n  <p tabindex=\"0\">\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.randomly_assign_members")
  },data:data},helper ? helper.call(depth0, "randomly_assign_students_dialog", "This will automatically assign all unassigned students as evenly as possible among the existing student groups.", options) : helperMissing.call(depth0, "t", "randomly_assign_students_dialog", "This will automatically assign all unassigned students as evenly as possible among the existing student groups.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </p>\n</div>\n<div class=\"form-controls\">\n  <button\n    type=\"button\"\n    class=\"btn dialog_closer\"\n  >";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.randomly_assign_members")
  },data:data},helper ? helper.call(depth0, "cancel", "Cancel", options) : helperMissing.call(depth0, "t", "cancel", "Cancel", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n  <button\n    class=\"btn btn-primary randomly-assign-members-confirm\"\n    type='submit'>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.randomly_assign_members")
  },data:data},helper ? helper.call(depth0, "okay", "Okay", options) : helperMissing.call(depth0, "t", "okay", "Okay", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n</div>\n";
  return buffer;
  });
  
      
  return templates['groups/manage/randomlyAssignMembers'];
});
