define('jst/developer_key_form', ["compiled/handlebars_helpers","i18n!developer_key_form"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['developer_key_form'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1);
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "PUT";
  }

function program5(depth0,data) {
  
  
  return "POST";
  }

  buffer += "<form action='/api/v1/developer_keys";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.id), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "' method='";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.id), {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "' class=\"key_form\">\n<table class='formtable'>\n    <tr>\n        <td><label for='key_name'>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("developer_key_form")
  },data:data},helper ? helper.call(depth0, "key_name", "Key Name:", options) : helperMissing.call(depth0, "t", "key_name", "Key Name:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label></td>\n        <td><input type='text' id='key_name' name='developer_key[name]' value='";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'/>\n    </tr>\n    <tr>\n        <td><label for='email'>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("developer_key_form")
  },data:data},helper ? helper.call(depth0, "owner_email", "Owner Email:", options) : helperMissing.call(depth0, "t", "owner_email", "Owner Email:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label></td>\n        <td><input type='text' id='email' name='developer_key[email]' value='";
  if (helper = helpers.email) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.email); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'/>\n    </tr>\n    <tr>\n        <td><label for='tool_id'>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("developer_key_form")
  },data:data},helper ? helper.call(depth0, "tool_id", "Tool ID:", options) : helperMissing.call(depth0, "t", "tool_id", "Tool ID:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label></td>\n        <td><input type='text' id='tool_id' name='developer_key[tool_id]' value='";
  if (helper = helpers.tool_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.tool_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'/>\n    </tr>\n    <tr>\n        <td><label for='redirect_uri'>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("developer_key_form")
  },data:data},helper ? helper.call(depth0, "redirect_uri", "Redirect URI:", options) : helperMissing.call(depth0, "t", "redirect_uri", "Redirect URI:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label></td>\n        <td><input type='text' id='redirect_uri' name='developer_key[redirect_uri]' value='";
  if (helper = helpers.redirect_uri) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.redirect_uri); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'/>\n    </tr>\n    <tr>\n        <td><label for='icon_url'>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("developer_key_form")
  },data:data},helper ? helper.call(depth0, "icon_url", "Icon URL:", options) : helperMissing.call(depth0, "t", "icon_url", "Icon URL:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label></td>\n        <td><input type='text' id='icon_url' name='developer_key[icon_url]' value='";
  if (helper = helpers.icon_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.icon_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'/>\n    </tr>\n    <tr>\n        <td colspan='2'>\n            <div class='button-container'>\n              <button type='button' class='btn dialog_closer cancel'>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("developer_key_form")
  },data:data},helper ? helper.call(depth0, "cancel", "Cancel", options) : helperMissing.call(depth0, "t", "cancel", "Cancel", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n              <button type='submit' class='btn btn-primary submit'>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("developer_key_form")
  },data:data},helper ? helper.call(depth0, "save_key", "Save Key", options) : helperMissing.call(depth0, "t", "save_key", "Save Key", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n            </div>\n        </td>\n    </tr>\n</table>\n</form>";
  return buffer;
  });
  
      
  return templates['developer_key_form'];
});
