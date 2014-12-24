define('jst/paginatedCollection', ["compiled/handlebars_helpers","i18n!paginated_collection"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['paginatedCollection'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  
  return "\n<ul class=\"collectionViewItems\"></ul>\n";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n<p>\n  ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("paginated_collection")
  },data:data},helper ? helper.call(depth0, "no_items", "No items.", options) : helperMissing.call(depth0, "t", "no_items", "No items.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</p>\n";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.collection)),stack1 == null || stack1 === false ? stack1 : stack1.length), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n<div class=\"paginatedLoadingIndicator\">Loading</div>\n\n";
  return buffer;
  });
  
      
  return templates['paginatedCollection'];
});
