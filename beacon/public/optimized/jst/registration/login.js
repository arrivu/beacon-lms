define('jst/registration/login', ["compiled/handlebars_helpers","i18n!registration.login"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['registration/login'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<form method=\"post\" action=\"/login\" id=\"login_form\" class=\"bootstrap-form\">\n  <input type=\"hidden\" name=\"redirect_to_ssl\" value=\"1\"/>\n  <div>\n    <input name=\"pseudonym_session[unique_id]\" class=\"login-input\" type=\"text\" placeholder=\"";
  if (helper = helpers.login_handle_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.login_handle_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n  </div>\n  <div>\n    <input name=\"pseudonym_session[password]\" class=\"login-input\" type=\"password\" placeholder=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("registration.login")
  },data:data},helper ? helper.call(depth0, "password", "Password", options) : helperMissing.call(depth0, "t", "password", "Password", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n  </div>\n  <div>\n    <button type=\"submit\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("registration.login")
  },data:data},helper ? helper.call(depth0, "sign_in", "Sign In", options) : helperMissing.call(depth0, "t", "sign_in", "Sign In", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button> \n  </div>\n  <label class=\"checkbox\">\n    <input name=\"pseudonym_session[remember_me]\" type=\"checkbox\">\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("registration.login")
  },data:data},helper ? helper.call(depth0, "remember_me", "Remember Me", options) : helperMissing.call(depth0, "t", "remember_me", "Remember Me", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </label>\n</form>";
  return buffer;
  });
  
      
  return templates['registration/login'];
});
