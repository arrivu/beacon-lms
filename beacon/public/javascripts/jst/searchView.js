define('jst/searchView', ["compiled/handlebars_helpers"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['searchView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<input type=\"text\" name=\"inputFilter\" class=\"inputFilterView\" />\n\n<div class=\"collectionView\"></div>\n\n";
  });
  
      
  return templates['searchView'];
});
