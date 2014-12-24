define('jst/registration/incompleteRegistrationWarning', ["compiled/handlebars_helpers","i18n!registration.incomplete_registration_warning"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['registration/incompleteRegistrationWarning'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<div style=\"margin:1em 2em;font-size:1.1em\">\n  <p>\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("registration.incomplete_registration_warning"),
    'w0': ("<b>$1</b>")
  },data:data},helper ? helper.call(depth0, "set_up_account", "Your account is almost set up. To finish, please check your email at *%{email}* to set your password.", options) : helperMissing.call(depth0, "t", "set_up_account", "Your account is almost set up. To finish, please check your email at *%{email}* to set your password.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </p>\n  <p>\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("registration.incomplete_registration_warning")
  },data:data},helper ? helper.call(depth0, "start_participating", "You can start participating now, but you must set a password before you can log back in.", options) : helperMissing.call(depth0, "t", "start_participating", "You can start participating now, but you must set a password before you can log back in.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </p>\n</div>";
  return buffer;
  });
  
      
  return templates['registration/incompleteRegistrationWarning'];
});
