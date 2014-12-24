define('jst/groups/manage/_autoLeadershipControls', ["compiled/handlebars_helpers","i18n!groups.manage.auto_leadership_controls"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['groups/manage/_autoLeadershipControls'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<fieldset class=\"pad-box auto-group-leader-controls\">\n  <span class=\"control-label\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.auto_leadership_controls")
  },data:data},helper ? helper.call(depth0, "leadership", "Leadership", options) : helperMissing.call(depth0, "t", "leadership", "Leadership", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n  <div class=\"controls\">\n    <label class=\"checkbox\" for=\"enable_auto_leader\">\n      "
    + escapeExpression((helper = helpers.checkbox || (depth0 && depth0.checkbox),options={hash:{
    'class': ("auto-group-leader-toggle")
  },data:data},helper ? helper.call(depth0, "enable_auto_leader", options) : helperMissing.call(depth0, "checkbox", "enable_auto_leader", options)))
    + "\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.auto_leadership_controls")
  },data:data},helper ? helper.call(depth0, "auto_group_leader", "Automatically assign a student group leader", options) : helperMissing.call(depth0, "t", "auto_group_leader", "Automatically assign a student group leader", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </label>\n  </div>\n  <div class=\"controls auto-group-leader-controls-radio\">\n    <label class=\"radio\">\n      <input type=\"radio\" name=\"auto_leader_type\" value=\"FIRST\" checked>\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.auto_leadership_controls")
  },data:data},helper ? helper.call(depth0, "auto_first_group_leader", "Set first student to join as group leader", options) : helperMissing.call(depth0, "t", "auto_first_group_leader", "Set first student to join as group leader", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </label>\n  </div>\n  <div class=\"controls auto-group-leader-controls-radio\">\n    <label class=\"radio\">\n      <input type=\"radio\" name=\"auto_leader_type\" value=\"RANDOM\">\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.auto_leadership_controls")
  },data:data},helper ? helper.call(depth0, "auto_random_group_leader", "Set a random student as group leader", options) : helperMissing.call(depth0, "t", "auto_random_group_leader", "Set a random student as group leader", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </label>\n  </div>\n</fieldset>\n";
  return buffer;
  });
  
Handlebars.registerPartial('groups/manage/autoLeadershipControls', templates['groups/manage/_autoLeadershipControls']);

      
  return templates['groups/manage/_autoLeadershipControls'];
});
