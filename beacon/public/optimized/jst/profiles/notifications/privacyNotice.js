define('jst/profiles/notifications/privacyNotice', ["compiled/handlebars_helpers","i18n!profiles.notifications.privacy_notice"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['profiles/notifications/privacyNotice'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<div id=\"privacy-notice\" data-title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("profiles.notifications.privacy_notice")
  },data:data},helper ? helper.call(depth0, "privacy_notice_title", "Privacy Notice", options) : helperMissing.call(depth0, "t", "privacy_notice_title", "Privacy Notice", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n  <p>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("profiles.notifications.privacy_notice")
  },data:data},helper ? helper.call(depth0, "privacy_notice", "Notice: Some notifications may contain confidential information. Selecting to receive notifications at an email other than your institution provided address may result in sending sensitive Canvas course and group information outside of the institutional system.", options) : helperMissing.call(depth0, "t", "privacy_notice", "Notice: Some notifications may contain confidential information. Selecting to receive notifications at an email other than your institution provided address may result in sending sensitive Canvas course and group information outside of the institutional system.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n\n  <div class=\"button-container\">\n    <button class=\"btn btn-primary dialog_closer\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("profiles.notifications.privacy_notice")
  },data:data},helper ? helper.call(depth0, "ok", "Ok", options) : helperMissing.call(depth0, "t", "ok", "Ok", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n  </div>\n</div>\n";
  return buffer;
  });
  
      
  return templates['profiles/notifications/privacyNotice'];
});
