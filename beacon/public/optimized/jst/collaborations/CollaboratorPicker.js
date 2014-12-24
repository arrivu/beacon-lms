define('jst/collaborations/CollaboratorPicker', ["compiled/handlebars_helpers","i18n!collaborations.collaborator_picker"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['collaborations/CollaboratorPicker'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<div class=\"collaborator-picker\"\n     data-collaboration-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n  ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("collaborations.collaborator_picker")
  },data:data},helper ? helper.call(depth0, "labels.collaborate_with", "Collaborate With:", options) : helperMissing.call(depth0, "t", "labels.collaborate_with", "Collaborate With:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n  <div class=\"box-with-header\">\n    <header class=\"toolbar border border-round-t border-trbl\">\n      <div class=\"filters\">\n        <input type=\"radio\"\n               aria-controls=\"available-users\"\n               id=\"users-filter-btn-";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n               name=\"filter\"\n               value=\"available-users\"\n               checked=\"checked\" />\n        <label for=\"users-filter-btn-";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n          <i class=\"icon-user\" aria-hidden=\"true\"></i>\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("collaborations.collaborator_picker")
  },data:data},helper ? helper.call(depth0, "labels.people", "People", options) : helperMissing.call(depth0, "t", "labels.people", "People", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </label>\n\n        <input type=\"radio\"\n               aria-controls=\"available-groups\"\n               id=\"groups-filter-btn-";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n               name=\"filter\"\n               value=\"available-groups\" />\n        <label for=\"groups-filter-btn-";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n          <i class=\"icon-group\" aria-hidden=\"true\"></i>\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("collaborations.collaborator_picker")
  },data:data},helper ? helper.call(depth0, "labels.groups", "Groups", options) : helperMissing.call(depth0, "t", "labels.groups", "Groups", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </label>\n      </div>\n    </header>\n\n    <div class=\"box-content border border-round-b border-rbl\">\n      <div class=\"list-wrapper available-lists\">\n        <div class=\"list-view\">\n          <ul class=\"available-users\" aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("collaborations.collaborator_picker")
  },data:data},helper ? helper.call(depth0, "labels.available_users", "Available users", options) : helperMissing.call(depth0, "t", "labels.available_users", "Available users", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" tabindex=\"-1\">\n            <li class=\"loading-wrapper\">\n              <img src=\"/images/load.gif\" alt=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("collaborations.collaborator_picker")
  },data:data},helper ? helper.call(depth0, "labels.loading", "Loading", options) : helperMissing.call(depth0, "t", "labels.loading", "Loading", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" />\n            </li>\n          </ul>\n          <ul class=\"available-groups\" aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("collaborations.collaborator_picker")
  },data:data},helper ? helper.call(depth0, "labels.available_groups", "Available groups", options) : helperMissing.call(depth0, "t", "labels.available_groups", "Available groups", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" tabindex=\"-1\">\n            <li class=\"loading-wrapper\">\n              <img src=\"/images/load.gif\" alt=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("collaborations.collaborator_picker")
  },data:data},helper ? helper.call(depth0, "labels.loading", "Loading", options) : helperMissing.call(depth0, "t", "labels.loading", "Loading", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" />\n            </li>\n          </ul>\n        </div>\n      </div>\n\n      <div class=\"list-wrapper\">\n        <div class=\"members-list-wrapper list-view\">\n          <header class=\"remove-button\">\n            <a href=\"#\" class=\"remove-all\" role=\"button\">&times; ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("collaborations.collaborator_picker")
  },data:data},helper ? helper.call(depth0, "labels.remove_all", "Remove All", options) : helperMissing.call(depth0, "t", "labels.remove_all", "Remove All", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n          </header>\n          <p class=\"member-instructions\">\n            ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("collaborations.collaborator_picker")
  },data:data},helper ? helper.call(depth0, "member_instructions", "Click or tap a user or group in the left-hand column to add Collaborators.", options) : helperMissing.call(depth0, "t", "member_instructions", "Click or tap a user or group in the left-hand column to add Collaborators.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </p>\n          <ul class=\"members-list\"\n              tabindex=\"-1\"\n              aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("collaborations.collaborator_picker")
  },data:data},helper ? helper.call(depth0, "labels.collaboration_members", "Collaboration members", options) : helperMissing.call(depth0, "t", "labels.collaboration_members", "Collaboration members", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"></ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
  return buffer;
  });
  
      
  return templates['collaborations/CollaboratorPicker'];
});
