define('jst/accounts/settings/ManualQuotas', ["compiled/handlebars_helpers","i18n!accounts.settings.manual_quotas"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['accounts/settings/ManualQuotas'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<fieldset class=\"quota_settings\">\n  <legend>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.settings.manual_quotas")
  },data:data},helper ? helper.call(depth0, "manual_quotas_title", "Manually Settable Quotas", options) : helperMissing.call(depth0, "t", "manual_quotas_title", "Manually Settable Quotas", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</legend>\n  <div class=\"control-group\">\n    <label class=\"control-label\" for=\"manual_quotas_type\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.settings.manual_quotas")
  },data:data},helper ? helper.call(depth0, "select_type_label", "Find course or group", options) : helperMissing.call(depth0, "t", "select_type_label", "Find course or group", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n    <div class=\"controls\">\n      <select id=\"manual_quotas_type\" class=\"span2\">\n        <option value=\"course\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.settings.manual_quotas")
  },data:data},helper ? helper.call(depth0, "select_type_courses", "Course ID", options) : helperMissing.call(depth0, "t", "select_type_courses", "Course ID", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n        <option value=\"group\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.settings.manual_quotas")
  },data:data},helper ? helper.call(depth0, "select_type_groups", "Group ID", options) : helperMissing.call(depth0, "t", "select_type_groups", "Group ID", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n      </select>\n      <input id=\"manual_quotas_id\" type=\"text\" class=\"span2\" maxlength=\"13\">\n      <button id=\"manual_quotas_find_button\" type=\"button\" class=\"btn\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.settings.manual_quotas")
  },data:data},helper ? helper.call(depth0, "find_button", "Find", options) : helperMissing.call(depth0, "t", "find_button", "Find", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n    </div>\n  </div>\n  <div id=\"manual_quotas_result\">\n    <hr/>\n    <div class=\"control-group\">\n      <label class=\"control-label\" for=\"manual_quotas_quota\">\n        <a id=\"manual_quotas_link\" href=\"#\" target=\"_blank\"></a>\n      </label>\n      <div class=\"controls\">\n        <div class=\"input-append\">\n          <input id=\"manual_quotas_quota\" type=\"text\" class=\"span2\" title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.settings.manual_quotas")
  },data:data},helper ? helper.call(depth0, "megabytes_tooltip", "megabytes", options) : helperMissing.call(depth0, "t", "megabytes_tooltip", "megabytes", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" maxlength=\"13\">\n          <span class=\"add-on\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.settings.manual_quotas")
  },data:data},helper ? helper.call(depth0, "megabytes", "megabytes", options) : helperMissing.call(depth0, "t", "megabytes", "megabytes", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n        </div>\n      </div>\n    </div>\n    <div class=\"button-container\">\n      <div class=\"controls\">\n        <button id=\"manual_quotas_submit_button\" type=\"submit\" class=\"btn\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.settings.manual_quotas")
  },data:data},helper ? helper.call(depth0, "update_button", "Update Quota", options) : helperMissing.call(depth0, "t", "update_button", "Update Quota", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n      </div>\n    </div>\n  </div>\n</fieldset>\n";
  return buffer;
  });
  
      
  return templates['accounts/settings/ManualQuotas'];
});
