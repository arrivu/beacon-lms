define('jst/ExternalTools/ExternalToolView', ["compiled/handlebars_helpers","i18n!external_tools.external_tool_view"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['ExternalTools/ExternalToolView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <span class=\"label label-primary "
    + escapeExpression(((stack1 = (depth0 && depth0.extension_type)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-tooltip title=\""
    + escapeExpression(((stack1 = (depth0 && depth0.text)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression((helper = helpers.titleize || (depth0 && depth0.titleize),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.extension_type), options) : helperMissing.call(depth0, "titleize", (depth0 && depth0.extension_type), options)))
    + "</span>\n  ";
  return buffer;
  }

  buffer += "<th scope=\"row\" nowrap=\"nowrap\"\n  class=\"external_tool\"\n  data-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n  data-workflow-state=\"";
  if (helper = helpers.workflow_state) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.workflow_state); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n  title=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</th>\n<td>\n  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.extras), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</td>\n<td class=\"links text-right\" nowrap=\"nowrap\">\n  <a href=\"#\"\n     role=\"button\"\n     aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("external_tools.external_tool_view")
  },data:data},helper ? helper.call(depth0, "edit_tool", "Edit Tool", options) : helperMissing.call(depth0, "t", "edit_tool", "Edit Tool", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n     class=\"edit_tool_link\"\n     title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("external_tools.external_tool_view")
  },data:data},helper ? helper.call(depth0, "edit_tool", "Edit Tool", options) : helperMissing.call(depth0, "t", "edit_tool", "Edit Tool", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n     data-edit-external-tool=";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n      ><i class=\"icon-edit btn\"></i></a>\n  <a href=\"#\"\n     class=\"delete_tool_link\"\n     role=\"button\"\n     aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("external_tools.external_tool_view")
  },data:data},helper ? helper.call(depth0, "delete_tool", "Delete Tool", options) : helperMissing.call(depth0, "t", "delete_tool", "Delete Tool", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n     title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("external_tools.external_tool_view")
  },data:data},helper ? helper.call(depth0, "delete_tool", "Delete Tool", options) : helperMissing.call(depth0, "t", "delete_tool", "Delete Tool", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n     data-delete-external-tool=";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n      ><i class=\"icon-trash btn\"></i></a>\n</td>\n";
  return buffer;
  });
  
      
  return templates['ExternalTools/ExternalToolView'];
});
