define('jst/quizzes/LDBLoginPopup', ["compiled/handlebars_helpers","i18n!quizzes.ldb_login_popup"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['quizzes/LDBLoginPopup'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<form id=\"ldb_deauthorized_dialog\" class=\"hide\">\n  <div id=\"unauthorized_message\" class=\"ui-state-error\">\n    <h2 class=\"\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.ldb_login_popup")
  },data:data},helper ? helper.call(depth0, "titles.log_in", "Please Log In", options) : helperMissing.call(depth0, "t", "titles.log_in", "Please Log In", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h2>\n    <p>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.ldb_login_popup"),
    'w0': ("<strong>$1</strong>")
  },data:data},helper ? helper.call(depth0, "logged_out_of_canvas", "*You have been logged out of canvas.* To continue please log in.", options) : helperMissing.call(depth0, "t", "logged_out_of_canvas", "*You have been logged out of canvas.* To continue please log in.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </p>\n  </div>\n\n  <h1>Canvas</h1>\n\n  <div>\n    <span class=\"field\">\n      <label for=\"pseudonym_session_unique_id\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.ldb_login_popup")
  },data:data},helper ? helper.call(depth0, "email", "Email", options) : helperMissing.call(depth0, "t", "email", "Email", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n      <input id=\"pseudonym_session_unique_id\" type=\"text\" name=\"pseudonym_session[unique_id]\" class=\"text\" placeholder=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.ldb_login_popup")
  },data:data},helper ? helper.call(depth0, "email", "Email", options) : helperMissing.call(depth0, "t", "email", "Email", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" autocomplete=\"off\" />\n    </span>\n\n    <span class=\"field\">\n      <label for=\"pseudonym_session_password\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.ldb_login_popup")
  },data:data},helper ? helper.call(depth0, "password", "Password", options) : helperMissing.call(depth0, "t", "password", "Password", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n      <input id=\"pseudonym_session_password\" type=\"password\" name=\"pseudonym_session[password]\" class=\"text\" placeholder=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.ldb_login_popup")
  },data:data},helper ? helper.call(depth0, "password", "Password", options) : helperMissing.call(depth0, "t", "password", "Password", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" autocomplete=\"off\" />\n    </span>\n  </div>\n\n  <div class=\"dialog-actions\">\n    <span class=\"btn btn-primary\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.ldb_login_popup")
  },data:data},helper ? helper.call(depth0, "log_in", "Log In", options) : helperMissing.call(depth0, "t", "log_in", "Log In", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n  </div>\n</form>";
  return buffer;
  });
  
      
  return templates['quizzes/LDBLoginPopup'];
});
