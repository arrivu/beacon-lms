define('jst/content_migrations/ZipFiles', ["compiled/handlebars_helpers"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['content_migrations/ZipFiles'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"control-group chooseMigrationFile\"></div>\n<div class=\"control-group folderPicker\"></div>\n";
  });
  
      
  return templates['content_migrations/ZipFiles'];
});
