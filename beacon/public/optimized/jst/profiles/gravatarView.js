define('jst/profiles/gravatarView', ["compiled/handlebars_helpers","i18n!profiles.gravatar_view"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['profiles/gravatarView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<img class=\"content-box gravatar-preview-image\" aria-label=\"gravatar\"></img>\n<div class=\"content-box-mini gravatar-label\">\n  <label for=\"gravatar-preview-input\">\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("profiles.gravatar_view"),
    'w0': ("<a href=\"http://gravatar.com/\" target=\"_blank\">$1</a>")
  },data:data},helper ? helper.call(depth0, "enter_gravatar_email_below", "enter your *Gravatar* email address below", options) : helperMissing.call(depth0, "t", "enter_gravatar_email_below", "enter your *Gravatar* email address below", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </label>\n</div>\n<div class=\"input-append\">\n  <input type=\"text\" class=\"gravatar-preview-input\" id=\"gravatar-preview-input\" />\n  <button class=\"btn gravatar-preview-btn\">\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("profiles.gravatar_view")
  },data:data},helper ? helper.call(depth0, "button.preview", "Preview", options) : helperMissing.call(depth0, "t", "button.preview", "Preview", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </button>\n</div>\n";
  return buffer;
  });
  
      
  return templates['profiles/gravatarView'];
});
