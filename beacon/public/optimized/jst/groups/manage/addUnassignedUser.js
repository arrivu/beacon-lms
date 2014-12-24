define('jst/groups/manage/addUnassignedUser', ["compiled/handlebars_helpers","i18n!groups.manage.add_unassigned_user"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['groups/manage/addUnassignedUser'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<a href=\"#\"\n       data-user-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n       class=\"assign-user-to-group ellipsis\"\n       aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.add_unassigned_user")
  },data:data},helper ? helper.call(depth0, "add_user_to_group", "Add user %{name} to this group", options) : helperMissing.call(depth0, "t", "add_user_to_group", "Add user %{name} to this group", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n       title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.add_unassigned_user")
  },data:data},helper ? helper.call(depth0, "add_to_group", "Add user to group", options) : helperMissing.call(depth0, "t", "add_to_group", "Add user to group", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\n";
  return buffer;
  });
  
      
  return templates['groups/manage/addUnassignedUser'];
});
