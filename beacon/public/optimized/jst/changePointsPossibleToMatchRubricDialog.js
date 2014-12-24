define('jst/changePointsPossibleToMatchRubricDialog', ["compiled/handlebars_helpers","i18n!change_points_possible_to_match_rubric_dialog"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['changePointsPossibleToMatchRubricDialog'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<p title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("change_points_possible_to_match_rubric_dialog")
  },data:data},helper ? helper.call(depth0, "titles.update_assignment_points", "Change points possible to match rubric?", options) : helperMissing.call(depth0, "t", "titles.update_assignment_points", "Change points possible to match rubric?", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n  ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("change_points_possible_to_match_rubric_dialog")
  },data:data},helper ? helper.call(depth0, "prompts.update_assignment_points", "This assignment has %{assignmentPoints} points possible, would you like to change it to have %{rubricPoints} points possible to match this rubric?", options) : helperMissing.call(depth0, "t", "prompts.update_assignment_points", "This assignment has %{assignmentPoints} points possible, would you like to change it to have %{rubricPoints} points possible to match this rubric?", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</p>";
  return buffer;
  });
  
      
  return templates['changePointsPossibleToMatchRubricDialog'];
});
