define('jst/roles/courseRoles', ["compiled/handlebars_helpers"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['roles/courseRoles'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"new-role\"></div>\n<table id=\"course_roles\" class='table table-striped table-hover table-condensed'></table>\n";
  });
  
      
  return templates['roles/courseRoles'];
});
