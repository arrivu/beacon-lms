define('jst/roles/newRole', ["compiled/handlebars_helpers","compiled/util/registerTemplateCss","i18n!roles.new_role"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['roles/newRole'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  
  return "disabled";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n          <option role=\"menuitem\" value=\"";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</option>\n        ";
  return buffer;
  }

  buffer += "<div class=\"btn-group\">\n  <a class=\"btn btn-primary dropdown-toggle\" aria-role=\"link\" href=\"#\" data-toggle=\"dropdown\" aria-haspopup=\"true\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("roles.new_role")
  },data:data},helper ? helper.call(depth0, "add_role", "Add Role", options) : helperMissing.call(depth0, "t", "add_role", "Add Role", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n  <div class=\"dropdown-menu bootstrap-form new-role\" aria-hidden=\"true\">\n    <form class=\"form-inline\">\n        <input type='text' aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("roles.new_role")
  },data:data},helper ? helper.call(depth0, "role_name_label", "Role Name", options) : helperMissing.call(depth0, "t", "role_name_label", "Role Name", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" tabindex=1 placeholder=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("roles.new_role")
  },data:data},helper ? helper.call(depth0, "role_name", "Role name", options) : helperMissing.call(depth0, "t", "role_name", "Role name", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"></input>\n      <select aria-label=\"Role Basetype\" tabindex=2 ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.adminRoles), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.base_role_types), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </select>\n      <button type=\"submit\" class=\"btn btn-primary\" aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("roles.new_role")
  },data:data},helper ? helper.call(depth0, "add_role_label", "Add Role", options) : helperMissing.call(depth0, "t", "add_role_label", "Add Role", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" tabindex=3><i class=\"icon-add\"></i> ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("roles.new_role")
  },data:data},helper ? helper.call(depth0, "add", "Add", options) : helperMissing.call(depth0, "t", "add", "Add", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n    <form>\n  </div>\n</div>\n";
  return buffer;
  });
  
      
arguments[1]('roles/newRole', "div.dropdown-menu.new-role{top:0px !important;padding:20px;}div.dropdown-menu.new-role select[disabled],div.dropdown-menu.new-role select:disabled{display:none;}");

  return templates['roles/newRole'];
});
