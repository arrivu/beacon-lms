define('jst/developer_key', ["compiled/handlebars_helpers","i18n!developer_key"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['developer_key'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "<br/>( ";
  if (helper = helpers.tool_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.tool_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " )";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n            <a href=\"/users/";
  if (helper = helpers.user_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.user_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n            ";
  return buffer;
  }

function program5(depth0,data) {
  
  
  return "\n            </a>\n            ";
  }

function program7(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n            <a href=\"/accounts/";
  if (helper = helpers.account_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.account_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n            ";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("developer_key")
  },data:data},helper ? helper.call(depth0, "redirect_uri", "URI: %{redirect_uri}", options) : helperMissing.call(depth0, "t", "redirect_uri", "URI: %{redirect_uri}", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                ";
  return buffer;
  }

  buffer += "<tr class='key'>\n    <td class=\"name\">\n        <img class=\"icon\" src=\"";
  if (helper = helpers.icon_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.icon_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n        ";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " \n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.tool_id), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </td>\n    <td>\n        <div>\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.user_id), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                ";
  if (helper = helpers.user_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.user_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.user_id), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n        <div>";
  if (helper = helpers.email) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.email); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n        <div>\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.account_id), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                ";
  if (helper = helpers.account) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.account); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.account_id), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n    </td>\n    <td>\n        <div class=\"details\">\n            <div>\n               ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("developer_key")
  },data:data},helper ? helper.call(depth0, "identifier", "ID: %{id}", options) : helperMissing.call(depth0, "t", "identifier", "ID: %{id}", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </div>\n            <div>\n               ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("developer_key"),
    'w0': ("<span class='api_key'>$1</span>")
  },data:data},helper ? helper.call(depth0, "api_key", "Key: *%{api_key}*", options) : helperMissing.call(depth0, "t", "api_key", "Key: *%{api_key}*", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </div>\n            <div>\n                ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.redirect_uri), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </div>\n        </div>\n    </td>\n    <td>\n        <div>\n            ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("developer_key")
  },data:data},helper ? helper.call(depth0, "created", "Created:", options) : helperMissing.call(depth0, "t", "created", "Created:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " "
    + escapeExpression((helper = helpers.datetimeFormatted || (depth0 && depth0.datetimeFormatted),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.created_at), options) : helperMissing.call(depth0, "datetimeFormatted", (depth0 && depth0.created_at), options)))
    + "\n        </div>\n        <!-- TODO: Add some better stats here, like token count, last usage, etc. -->\n    </td>\n    <td class='links'>\n        <a href=\"#\" class=\"edit_link\" title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("developer_key")
  },data:data},helper ? helper.call(depth0, "edit_key", "Edit this key", options) : helperMissing.call(depth0, "t", "edit_key", "Edit this key", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"><i class=\"icon-edit standalone-icon\"></i></a>\n        <a href=\"#\" class=\"delete_link\" title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("developer_key")
  },data:data},helper ? helper.call(depth0, "delete_key", "Delete this key", options) : helperMissing.call(depth0, "t", "delete_key", "Delete this key", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"><i class=\"icon-trash standalone-icon\"></i></a>\n    </td>\n</tr>";
  return buffer;
  });
  
      
  return templates['developer_key'];
});
