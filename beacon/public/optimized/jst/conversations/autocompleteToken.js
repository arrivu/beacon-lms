define('jst/conversations/autocompleteToken', ["compiled/handlebars_helpers","i18n!conversations.autocomplete_token"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['conversations/autocompleteToken'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<li class=\"ac-token\">\n  ";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n\n  <a href=\"#\"\n     class=\"ac-token-remove-btn\">\n    <i class=\"icon-x\"></i>\n    <span class=\"screenreader-only\">\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.autocomplete_token")
  },data:data},helper ? helper.call(depth0, "remove_recipient", "Remove recipient", options) : helperMissing.call(depth0, "t", "remove_recipient", "Remove recipient", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </span>\n  </a>\n\n\n  <input type=\"hidden\"\n         name=\"recipients[]\"\n         value=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" />\n</li>\n";
  return buffer;
  });
  
      
  return templates['conversations/autocompleteToken'];
});
