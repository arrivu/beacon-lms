define('jst/ExternalTools/EditView', ["compiled/handlebars_helpers","i18n!external_tools.edit_view"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['ExternalTools/EditView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <p class=\"help-block\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("external_tools.edit_view")
  },data:data},helper ? helper.call(depth0, "shared_secret_note", "Enter a new value to change", options) : helperMissing.call(depth0, "t", "shared_secret_note", "Enter a new value to change", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n      ";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "hide";
  }

function program5(depth0,data) {
  
  
  return "selected";
  }

  buffer += "<fieldset>\n  <div class=\"control-group\">\n    <label class=\"control-label\" for=\"external_tool_name\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("external_tools.edit_view")
  },data:data},helper ? helper.call(depth0, "name", "Name", options) : helperMissing.call(depth0, "t", "name", "Name", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n    <div class=\"controls\">\n      <input aria-required=\"true\" type=\"text\" id=\"external_tool_name\" value=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" name=\"name\">\n    </div>\n  </div>\n  <div class=\"control-group\">\n    <label class=\"control-label\" for=\"external_tool_consumer_key\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("external_tools.edit_view")
  },data:data},helper ? helper.call(depth0, "consumer_key", "Consumer Key", options) : helperMissing.call(depth0, "t", "consumer_key", "Consumer Key", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n    <div class=\"controls\">\n      <input aria-required=\"true\" type=\"text\" id=\"external_tool_consumer_key\" value=\"";
  if (helper = helpers.consumer_key) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.consumer_key); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" name=\"consumer_key\">\n    </div>\n  </div>\n  <div class=\"control-group\">\n    <label class=\"control-label\" for=\"external_tool_shared_secret\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("external_tools.edit_view")
  },data:data},helper ? helper.call(depth0, "shared_secret", "Shared Secret", options) : helperMissing.call(depth0, "t", "shared_secret", "Shared Secret", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n    <div class=\"controls\">\n      <input aria-required=\"true\" type=\"text\" id=\"external_tool_shared_secret\" value=\"";
  if (helper = helpers.shared_secret) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.shared_secret); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" name=\"shared_secret\">\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.id), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n  </div>\n  <div class=\"control-group ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.id), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n    <label class=\"control-label\" for=\"external_tool_config_type\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("external_tools.edit_view")
  },data:data},helper ? helper.call(depth0, "configuration_type", "Configuration Type", options) : helperMissing.call(depth0, "t", "configuration_type", "Configuration Type", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n    <div class=\"controls\">\n      <select id=\"external_tool_config_type\" name=\"config_type\">\n        <option value=\"manual\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("external_tools.edit_view")
  },data:data},helper ? helper.call(depth0, "manual", "Manual Entry", options) : helperMissing.call(depth0, "t", "manual", "Manual Entry", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n        <option value=\"by_url\" "
    + escapeExpression((helper = helpers.selectedIf || (depth0 && depth0.selectedIf),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.config_type), "by_url", options) : helperMissing.call(depth0, "selectedIf", (depth0 && depth0.config_type), "by_url", options)))
    + ">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("external_tools.edit_view")
  },data:data},helper ? helper.call(depth0, "by_url", "By URL", options) : helperMissing.call(depth0, "t", "by_url", "By URL", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n        <option value=\"by_xml\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("external_tools.edit_view")
  },data:data},helper ? helper.call(depth0, "by_xml", "Paste XML", options) : helperMissing.call(depth0, "t", "by_xml", "Paste XML", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n      </select>\n    </div>\n  </div>\n  <div class=\"control-group config_type by_url\">\n    <label class=\"control-label\" for=\"external_tool_config_url\">\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("external_tools.edit_view")
  },data:data},helper ? helper.call(depth0, "config_url", "Configuration URL", options) : helperMissing.call(depth0, "t", "config_url", "Configuration URL", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </label>\n    <div class=\"controls\">\n      <input type=\"text\" id=\"external_tool_config_url\" value=\"";
  if (helper = helpers.config_xml_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.config_xml_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" name=\"config_url\">\n    </div>\n  </div>\n  <div class=\"control-group config_type by_xml\">\n    <label class=\"control-label\" for=\"external_tool_config_xml\">\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("external_tools.edit_view")
  },data:data},helper ? helper.call(depth0, "paste_xml", "Paste XML Here", options) : helperMissing.call(depth0, "t", "paste_xml", "Paste XML Here", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </label>\n    <div class=\"controls\">\n      <textarea id=\"external_tool_config_xml\" name=\"config_xml\"\n      ></textarea>\n    </div>\n  </div>\n  <div class=\"control-group config_type manual\">\n    <label class=\"control-label\" for=\"external_tool_url\">\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("external_tools.edit_view")
  },data:data},helper ? helper.call(depth0, "tool_url", "URL", options) : helperMissing.call(depth0, "t", "tool_url", "URL", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </label>\n    <div class=\"controls\">\n      <input type=\"text\" id=\"external_tool_url\" value=\"";
  if (helper = helpers.url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" name=\"url\">\n    </div>\n  </div>\n  <div class=\"control-group config_type manual\">\n    <label class=\"control-label\" for=\"external_tool_domain\">\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("external_tools.edit_view")
  },data:data},helper ? helper.call(depth0, "tool_domain", "Domain", options) : helperMissing.call(depth0, "t", "tool_domain", "Domain", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </label>\n    <div class=\"controls\">\n      <input type=\"text\" id=\"external_tool_domain\" value=\"";
  if (helper = helpers.domain) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.domain); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" name=\"domain\">\n    </div>\n  </div>\n  <div class=\"control-group config_type manual\">\n    <label class=\"control-label\" for=\"external_tool_privacy_level\">\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("external_tools.edit_view")
  },data:data},helper ? helper.call(depth0, "privacy", "Privacy", options) : helperMissing.call(depth0, "t", "privacy", "Privacy", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </label>\n    <div class=\"controls\">\n      <select id=\"external_tool_privacy_level\" name=\"privacy_level\">\n        <option\n          value=\"anonymous\"\n          ";
  stack1 = (helper = helpers.ifEqual || (depth0 && depth0.ifEqual),options={hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.privacy_level), "anonymous", options) : helperMissing.call(depth0, "ifEqual", (depth0 && depth0.privacy_level), "anonymous", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        >";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("external_tools.edit_view")
  },data:data},helper ? helper.call(depth0, "anonymous", "Anonymous", options) : helperMissing.call(depth0, "t", "anonymous", "Anonymous", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n        <option\n          value=\"email_only\"\n          ";
  stack1 = (helper = helpers.ifEqual || (depth0 && depth0.ifEqual),options={hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.privacy_level), "email_only", options) : helperMissing.call(depth0, "ifEqual", (depth0 && depth0.privacy_level), "email_only", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        >";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("external_tools.edit_view")
  },data:data},helper ? helper.call(depth0, "email_only", "E-Mail Only", options) : helperMissing.call(depth0, "t", "email_only", "E-Mail Only", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n        <option \n          value=\"name_only\"\n          ";
  stack1 = (helper = helpers.ifEqual || (depth0 && depth0.ifEqual),options={hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.privacy_level), "name_only", options) : helperMissing.call(depth0, "ifEqual", (depth0 && depth0.privacy_level), "name_only", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        >";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("external_tools.edit_view")
  },data:data},helper ? helper.call(depth0, "name_only", "Name Only", options) : helperMissing.call(depth0, "t", "name_only", "Name Only", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n        <option\n          value=\"public\"\n          ";
  stack1 = (helper = helpers.ifEqual || (depth0 && depth0.ifEqual),options={hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.privacy_level), "public", options) : helperMissing.call(depth0, "ifEqual", (depth0 && depth0.privacy_level), "public", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        >";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("external_tools.edit_view")
  },data:data},helper ? helper.call(depth0, "public", "Public", options) : helperMissing.call(depth0, "t", "public", "Public", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n      </select>\n    </div>\n  </div>\n  <div class=\"control-group config_type manual\">\n    <label class=\"control-label\" for=\"external_tool_custom_fields_string\">\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("external_tools.edit_view")
  },data:data},helper ? helper.call(depth0, "custom_fields", "Custom Fields", options) : helperMissing.call(depth0, "t", "custom_fields", "Custom Fields", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </label>\n    <div class=\"controls\">\n      <textarea\n        aria-labelledby=\"custom_fields_explanation\"\n        id=\"external_tool_custom_fields_string\"\n        name=\"custom_fields_string\"\n      >";
  if (helper = helpers.custom_fields_string) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.custom_fields_string); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</textarea>\n      <div id=\"custom_fields_explanation\" class=\"help-block\"> ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("external_tools.edit_view")
  },data:data},helper ? helper.call(depth0, "custom_feilds_explanation", "One per line. Format: name=value", options) : helperMissing.call(depth0, "t", "custom_feilds_explanation", "One per line. Format: name=value", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n    </div>\n  </div>\n  <div class=\"control-group config_type manual\">\n    <label class=\"control-label\" for=\"external_tool_description\">\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("external_tools.edit_view")
  },data:data},helper ? helper.call(depth0, "description", "Description", options) : helperMissing.call(depth0, "t", "description", "Description", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </label>\n    <div class=\"controls\">\n      <textarea\n        id=\"external_tool_description\"\n        name=\"description\"\n      >";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</textarea>\n    </div>\n  </div>\n</fieldset>\n";
  return buffer;
  });
  
      
  return templates['ExternalTools/EditView'];
});
