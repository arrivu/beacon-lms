define('jst/roles/permissionButton', ["compiled/handlebars_helpers","compiled/util/registerTemplateCss","i18n!roles.permission_button"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['roles/permissionButton'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, self=this, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "title=\"Default\"";
  }

function program3(depth0,data) {
  
  
  return "default_permission";
  }

function program5(depth0,data) {
  
  
  return "disabled=\"disabled\" data-tooltip title=\"You do not have permission to change this\" ";
  }

function program7(depth0,data) {
  
  
  return "checked=\"checked\"";
  }

  buffer += "<div class=\"btn-group\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.addDefaultTitle), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n  <a class=\"btn btn-small dropdown-toggle ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0['default']), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" href=\"#\" data-toggle=\"dropdown\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.readOnly), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "><i class=\"icon-check\"></i><i class=\"icon-lock\"></i></a>\n\n  <div class=\"dropdown-menu\" role=\"radiogroup\">\n    <input type=\"radio\" name=\"permission-for-";
  if (helper = helpers.cid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.cid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" value=\"0\" role=\"radio\" id=\"button-";
  if (helper = helpers.cid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.cid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-0\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.enableChecked), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " >\n    <label tabindex=\"0\" for=\"button-";
  if (helper = helpers.cid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.cid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-0\"><i class=\"icon-check\"></i></i><span class=\"text\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("roles.permission_button")
  },data:data},helper ? helper.call(depth0, "rolebutton.enable", "Enable", options) : helperMissing.call(depth0, "t", "rolebutton.enable", "Enable", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span></label>\n\n    <input type=\"radio\" name=\"permission-for-";
  if (helper = helpers.cid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.cid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" value=\"0\" role=\"radio\" id=\"button-";
  if (helper = helpers.cid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.cid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-1\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.enableAndLockChecked), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n    <label tabindex=1 for=\"button-";
  if (helper = helpers.cid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.cid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-1\"><i class=\"icon-check\"></i><i class=\"icon-lock\"></i><span class=\"text\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("roles.permission_button")
  },data:data},helper ? helper.call(depth0, "rolebutton.enable_and_lock", "Enable and Lock", options) : helperMissing.call(depth0, "t", "rolebutton.enable_and_lock", "Enable and Lock", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span></label>\n\n    <input type=\"radio\" name=\"permission-for-";
  if (helper = helpers.cid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.cid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" value=\"0\" role=\"radio\" id=\"button-";
  if (helper = helpers.cid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.cid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-2\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.disableChecked), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n    <label tabindex=2 for=\"button-";
  if (helper = helpers.cid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.cid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-2\"><i class=\"icon-x\"></i><span class=\"text\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("roles.permission_button")
  },data:data},helper ? helper.call(depth0, "rolebutton.disable", "Disable", options) : helperMissing.call(depth0, "t", "rolebutton.disable", "Disable", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span></label>\n\n    <input type=\"radio\" name=\"permission-for-";
  if (helper = helpers.cid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.cid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" value=\"0\" role=\"radio\" id=\"button-";
  if (helper = helpers.cid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.cid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-3\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.disableAndLockChecked), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n    <label tabindex=3 for=\"button-";
  if (helper = helpers.cid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.cid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-3\"><i class=\"icon-x\"></i><i class=\"icon-lock\"></i><span class=\"text\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("roles.permission_button")
  },data:data},helper ? helper.call(depth0, "rolebutton.disable_and_lock", "Disable and Lock", options) : helperMissing.call(depth0, "t", "rolebutton.disable_and_lock", "Disable and Lock", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span></label>\n    <li class=\"divider\"></li>\n\n    <input type=\"radio\" name=\"permission-for-";
  if (helper = helpers.cid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.cid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" value=\"0\" role=\"radio\" id=\"button-";
  if (helper = helpers.cid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.cid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-4\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.systemDefaultChecked), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n    <label tabindex=4 for=\"button-";
  if (helper = helpers.cid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.cid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-4\" class=\"clearfix\"><span class=\"text\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("roles.permission_button")
  },data:data},helper ? helper.call(depth0, "rolebutton.use_default", "Use Default", options) : helperMissing.call(depth0, "t", "rolebutton.use_default", "Use Default", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span></label>\n\n    <input type=\"radio\" name=\"permission-for-";
  if (helper = helpers.cid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.cid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" value=\"0\" role=\"radio\" id=\"button-";
  if (helper = helpers.cid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.cid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-5\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.systemDefaultLockedChecked), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n    <label tabindex=5 for=\"button-";
  if (helper = helpers.cid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.cid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-5\" class=\"clearfix\"><i class=\"icon-lock\"></i><span class=\"text\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("roles.permission_button")
  },data:data},helper ? helper.call(depth0, "rolebutton.use_default", "Use Default", options) : helperMissing.call(depth0, "t", "rolebutton.use_default", "Use Default", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span></label>\n </div>\n</div>\n";
  return buffer;
  });
  
      
arguments[1]('roles/permissionButton', ".table td.permissionButtonView{position:relative;}.table td.permissionButtonView .default_permission{opacity:0.5;}.table td.permissionButtonView .icon-x{color:#9B0000;}.table td.permissionButtonView .icon-check{color:green;}.table td.permissionButtonView .btn-group{margin:0 auto;width:40px;position:relative;}.table td.permissionButtonView .btn-group .btn.dropdown-toggle{position:relative;min-width:35px;}.table td.permissionButtonView .btn-group .btn.dropdown-toggle:disabled,.table td.permissionButtonView .btn-group .btn.dropdown-toggle[disabled]{background:none;border:none;}.table td.permissionButtonView .btn-group .btn.dropdown-toggle:disabled .icon-lock,.table td.permissionButtonView .btn-group .btn.dropdown-toggle[disabled] .icon-lock{display:none;}.table td.permissionButtonView .dropdown-menu{text-align:left;}.table td.permissionButtonView .dropdown-menu input[type=radio]{position:absolute;left:-9999px;}.table td.permissionButtonView .dropdown-menu label{display:block;padding:5px;}.table td.permissionButtonView .dropdown-menu span.text{float:right;text-align:left !important;width:110px;}.table td.permissionButtonView .dropdown-menu span.text:last{float:none;text-align:center;display:block;}.table td.permissionButtonView .dropdown-menu label:hover,.table td.permissionButtonView .dropdown-menu label:focus,.table td.permissionButtonView .dropdown-menu input:checked+label{text-decoration:none;color:white;background-color:#0081C2;background-image:-webkit-linear-gradient(top, #08C, #0077B3);background-image:linear-gradient(to bottom, #08C, #0077B3);background-repeat:repeat-x;}table#course_roles thead,table#account_roles thead{background:#fff;}");

  return templates['roles/permissionButton'];
});
