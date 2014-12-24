define('jst/accounts/settings/Quotas', ["compiled/handlebars_helpers","i18n!accounts.settings.quotas"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['accounts/settings/Quotas'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<fieldset class=\"quota_settings\">\n  <legend>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.settings.quotas")
  },data:data},helper ? helper.call(depth0, "default_account_quota_title", "Default Account Quotas", options) : helperMissing.call(depth0, "t", "default_account_quota_title", "Default Account Quotas", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</legend>\n  <div class=\"control-group\">\n    <label id=\"default_course_storage_mb_label\" class=\"control-label\" for=\"default_course_storage_mb\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.settings.quotas")
  },data:data},helper ? helper.call(depth0, "default_course_storage_quota", "Course Quota", options) : helperMissing.call(depth0, "t", "default_course_storage_quota", "Course Quota", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n    <div class=\"controls\">\n      <div class=\"input-append\">\n        <input aria-labelledby=\"default_course_storage_mb_label\" name=\"default_storage_quota_mb\" type=\"text\" class=\"span2\" title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.settings.quotas")
  },data:data},helper ? helper.call(depth0, "megabytes_tooltip", "megabytes", options) : helperMissing.call(depth0, "t", "megabytes_tooltip", "megabytes", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" maxlength=\"13\" value=\"";
  if (helper = helpers.default_storage_quota_mb) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.default_storage_quota_mb); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n        <span class=\"add-on\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.settings.quotas")
  },data:data},helper ? helper.call(depth0, "megabytes", "megabytes", options) : helperMissing.call(depth0, "t", "megabytes", "megabytes", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"control-group\">\n    <label id=\"default_user_storage_mb_label\" class=\"control-label\" for=\"default_user_storage_mb\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.settings.quotas")
  },data:data},helper ? helper.call(depth0, "default_user_storage_quota", "User Quota", options) : helperMissing.call(depth0, "t", "default_user_storage_quota", "User Quota", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n    <div class=\"controls\">\n      <div class=\"input-append\">\n        <input aria-labelledby=\"default_user_storage_mb_label\" name=\"default_user_storage_quota_mb\" type=\"text\" class=\"span2\" title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.settings.quotas")
  },data:data},helper ? helper.call(depth0, "megabytes_tooltip", "megabytes", options) : helperMissing.call(depth0, "t", "megabytes_tooltip", "megabytes", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" maxlength=\"13\" value=\"";
  if (helper = helpers.default_user_storage_quota_mb) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.default_user_storage_quota_mb); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n        <span class=\"add-on\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.settings.quotas")
  },data:data},helper ? helper.call(depth0, "megabytes", "megabytes", options) : helperMissing.call(depth0, "t", "megabytes", "megabytes", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"control-group\">\n      <label id=\"default_group_storage_mb_label\" class=\"control-label\" for=\"default_group_storage_mb\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.settings.quotas")
  },data:data},helper ? helper.call(depth0, "default_group_storage_quota", "Group Quota", options) : helperMissing.call(depth0, "t", "default_group_storage_quota", "Group Quota", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n      <div class=\"controls\">\n        <div class=\"input-append\">\n          <input aria-labelledby=\"default_group_storage_mb_label\" name=\"default_group_storage_quota_mb\" type=\"text\" class=\"span2\" title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.settings.quotas")
  },data:data},helper ? helper.call(depth0, "megabytes_tooltip", "megabytes", options) : helperMissing.call(depth0, "t", "megabytes_tooltip", "megabytes", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" maxlength=\"13\" value=\"";
  if (helper = helpers.default_group_storage_quota_mb) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.default_group_storage_quota_mb); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n          <span class=\"add-on\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.settings.quotas")
  },data:data},helper ? helper.call(depth0, "megabytes", "megabytes", options) : helperMissing.call(depth0, "t", "megabytes", "megabytes", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n        </div>\n      </div>\n    </div>\n\n  <div class=\"button-container\">\n    <div class=\"controls\">\n      <button type=\"submit\" class=\"btn\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.settings.quotas")
  },data:data},helper ? helper.call(depth0, "update_button", "Update", options) : helperMissing.call(depth0, "t", "update_button", "Update", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n    </div>\n  </div>\n</fieldset>\n";
  return buffer;
  });
  
      
  return templates['accounts/settings/Quotas'];
});
