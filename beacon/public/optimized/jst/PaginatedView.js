define('jst/PaginatedView', ["compiled/handlebars_helpers","compiled/util/registerTemplateCss","i18n!paginated_view"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['PaginatedView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<div class=\"paginatedView-loading\" role=\"status\" aria-live=\"polite\">\n  ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("paginated_view")
  },data:data},helper ? helper.call(depth0, "loading_more_results", "Loading more results", options) : helperMissing.call(depth0, "t", "loading_more_results", "Loading more results", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
  return buffer;
  });
  
      
arguments[1]('PaginatedView', ".paginatedView-loading{text-align:center;color:#e9e9e9;font-size:26px;background:url(\"/images/load.gif\") no-repeat 50% 80%;padding-bottom:56px;}");

  return templates['PaginatedView'];
});
