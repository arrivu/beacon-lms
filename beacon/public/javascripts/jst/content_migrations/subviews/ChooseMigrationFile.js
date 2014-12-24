define('jst/content_migrations/subviews/ChooseMigrationFile', ["compiled/handlebars_helpers","i18n!content_migrations.subviews.choose_migration_file"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['content_migrations/subviews/ChooseMigrationFile'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<label class=\"control-label\" for=\"migrationFileUpload\"><strong>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.subviews.choose_migration_file")
  },data:data},helper ? helper.call(depth0, "migration_text", "Source", options) : helperMissing.call(depth0, "t", "migration_text", "Source", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</strong></label>\n<div class=\"controls controlMargin\">\n  <input id=\"migrationFileUpload\" name=\"file\" type=\"file\" accept=\".zip,.imscc,.mbz,.xml\">\n</div>\n";
  return buffer;
  });
  
      
  return templates['content_migrations/subviews/ChooseMigrationFile'];
});
