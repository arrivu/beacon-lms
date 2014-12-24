define('jst/modules/ModuleItemCollectionView', ["compiled/handlebars_helpers"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['modules/ModuleItemCollectionView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<ul class=\"collectionViewItems ig-list\"></ul>\n<!-- div class=\"paginatedLoadingIndicator\" style=\"display: none\"></div -->";
  });
  
      
  return templates['modules/ModuleItemCollectionView'];
});
