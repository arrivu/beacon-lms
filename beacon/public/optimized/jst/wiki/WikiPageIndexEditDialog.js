define('jst/wiki/WikiPageIndexEditDialog', ["compiled/handlebars_helpers","i18n!wiki.wiki_page_index_edit_dialog"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['wiki/WikiPageIndexEditDialog'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"edit-content\">\n  <label class=\"edit-label\" for=\"title\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("wiki.wiki_page_index_edit_dialog")
  },data:data},helper ? helper.call(depth0, "page_title", "Title", options) : helperMissing.call(depth0, "t", "page_title", "Title", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n  <div class=\"edit-controls\">\n    <input class=\"edit-control-text\" type=\"text\" id=\"title\" name=\"title\" value=\"";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n  </div>\n</div>\n";
  return buffer;
  });
  
      
  return templates['wiki/WikiPageIndexEditDialog'];
});
