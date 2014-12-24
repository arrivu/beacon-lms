define('jst/feature_flags/featureFlagAdminView', ["compiled/handlebars_helpers","i18n!feature_flags.feature_flag_admin_view"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['feature_flags/featureFlagAdminView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<h2 class=\"screenreader-only\">\n  ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("feature_flags.feature_flag_admin_view")
  },data:data},helper ? helper.call(depth0, "feature_options", "Feature Options", options) : helperMissing.call(depth0, "t", "feature_options", "Feature Options", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</h2>\n\n<div class=\"alert alert-info\">\n  ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("feature_flags.feature_flag_admin_view")
  },data:data},helper ? helper.call(depth0, "no_features_available", "No features are currently available.", options) : helperMissing.call(depth0, "t", "no_features_available", "No features are currently available.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n\n<div class=\"account-feature-flags\"></div>\n<div class=\"course-feature-flags\"></div>\n<div class=\"user-feature-flags\"></div>\n\n";
  return buffer;
  });
  
      
  return templates['feature_flags/featureFlagAdminView'];
});
