define('jst/ExternalTools/ExternalToolsCollectionView', ["compiled/handlebars_helpers","i18n!external_tools.external_tools_collection_view"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['ExternalTools/ExternalToolsCollectionView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<table class=\"table table-striped\">\n  <caption>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("external_tools.external_tools_collection_view")
  },data:data},helper ? helper.call(depth0, "app_headder", "External Apps", options) : helperMissing.call(depth0, "t", "app_headder", "External Apps", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</caption>\n  <thead>\n    <tr>\n      <th scope=\"col\" >Name</th>\n      <th colspan=\"2\" scope=\"col\" >Extensions</th>\n    </tr>\n  </thead>\n  <tbody class=\"collectionViewItems\"></tbody>\n</table>\n<div class=\"paginatedLoadingIndicator\" style=\"display: none\"></div>\n";
  return buffer;
  });
  
      
  return templates['ExternalTools/ExternalToolsCollectionView'];
});
