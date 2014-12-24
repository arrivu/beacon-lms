define('jst/accounts/admin_tools/dateRangeSearch', ["compiled/handlebars_helpers","i18n!accounts.admin_tools.date_range_search"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['accounts/admin_tools/dateRangeSearch'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<div class=\"control-group\">\n  <div class=\"controls\">\n    <input type=\"text\" id=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-dateStartSearchField\" class=\"dateSearchField dateStartSearchField\" name=\"start_time\" placeholder=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.date_range_search")
  },data:data},helper ? helper.call(depth0, "message_date_from", "From Date", options) : helperMissing.call(depth0, "t", "message_date_from", "From Date", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" maxlength=\"50\" />\n  </div>\n</div>\n<div class=\"control-group\">\n  <div class=\"controls\">\n    <input type=\"text\" id=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-dateEndSearchField\" class=\"dateSearchField dateEndSearchField\" name=\"end_time\" placeholder=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.date_range_search")
  },data:data},helper ? helper.call(depth0, "message_date_to", "To Date", options) : helperMissing.call(depth0, "t", "message_date_to", "To Date", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" maxlength=\"50\" />\n  </div>\n</div>\n";
  return buffer;
  });
  
      
  return templates['accounts/admin_tools/dateRangeSearch'];
});
