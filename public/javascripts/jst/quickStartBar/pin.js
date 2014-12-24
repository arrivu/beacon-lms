define('jst/quickStartBar/pin', ["compiled/handlebars_helpers"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['quickStartBar/pin'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<form class=\"newItemForm\">\n  <div class=\"box-content controls\">\n\n    <div class=\"row-fluid\" >\n      <input placeholder=\"http://\" class=\"span12 expander\" name=\"url\" type=\"text\">\n    </div>\n\n    <div class=\"row-fluid expandee kollectionItemSaveView\"></div>\n  </div>\n</form>\n\n";
  });
  
      
  return templates['quickStartBar/pin'];
});
