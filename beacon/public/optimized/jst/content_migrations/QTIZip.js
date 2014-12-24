define('jst/content_migrations/QTIZip', ["compiled/handlebars_helpers","i18n!content_migrations.qti_zip"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['content_migrations/QTIZip'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<div class=\"control-group chooseMigrationFile\"></div>\n<div class=\"control-group options\">\n  <label class=\"control-label\"><strong>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.qti_zip")
  },data:data},helper ? helper.call(depth0, "options", "Options", options) : helperMissing.call(depth0, "t", "options", "Options", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</strong></label>\n  <div class=\"controls overwriteAssessmentContent\"></div>\n</div>\n<div class=\"control-group selectQuestionBank\"></div>\n";
  return buffer;
  });
  
      
  return templates['content_migrations/QTIZip'];
});
