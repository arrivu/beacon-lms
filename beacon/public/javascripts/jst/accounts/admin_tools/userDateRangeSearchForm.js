define('jst/accounts/admin_tools/userDateRangeSearchForm', ["compiled/handlebars_helpers","i18n!accounts.admin_tools.user_date_range_search_form"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['accounts/admin_tools/userDateRangeSearchForm'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<style type=\"text/css\">\n  #userIdSearchField { width: 8em; }\n</style>\n<div class=\"control-group\">\n  <input\n    type=\"text\"\n    name=\"search_term\"\n    data-view=\"inputFilter\"\n    placeholder='";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.user_date_range_search_form")
  },data:data},helper ? helper.call(depth0, "search_people", "Search people", options) : helperMissing.call(depth0, "t", "search_people", "Search people", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'\n    aria-label='";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.user_date_range_search_form")
  },data:data},helper ? helper.call(depth0, "search", "Search for people by ID or name", options) : helperMissing.call(depth0, "t", "search", "Search for people by ID or name", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'\n    maxlength=\"255\"\n  >\n\n  <input\n    type=\"hidden\"\n    class=\"userIdField\"\n    name=\"user_id\"\n    maxlength=\"255\"\n  >\n</div>\n\n<div class=\"v-gutter\">\n  <div data-view=\"users\"></div>\n</div>\n\n<div class=\"pad-box border border-trbl search-controls\">\n  <h4>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.user_date_range_search_form"),
    'w0': ("<span data-bind=\"name\">$1</span>")
  },data:data},helper ? helper.call(depth0, "generate_activity_username", "Generate Activity for *%{user}*", options) : helperMissing.call(depth0, "t", "generate_activity_username", "Generate Activity for *%{user}*", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h4>\n  <h5>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.user_date_range_search_form"),
    'w0': ("<span data-bind=\"id\">$1</span>")
  },data:data},helper ? helper.call(depth0, "generate_activity_userid", "User ID: *%{user_id}*", options) : helperMissing.call(depth0, "t", "generate_activity_userid", "User ID: *%{user_id}*", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h5>\n  <hr>\n\n  <div class=\"control-group\">\n    <label class=\"control-label\" for=\"";
  if (helper = helpers.formName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.formName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-dateStartSearchField\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.user_date_range_search_form")
  },data:data},helper ? helper.call(depth0, "message_date_from", "From Date", options) : helperMissing.call(depth0, "t", "message_date_from", "From Date", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n    <div class=\"controls\">\n      <input type=\"text\" id=\"";
  if (helper = helpers.formName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.formName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-dateStartSearchField\" class=\"dateStartSearchField\" name=\"start_time\" placeholder=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.user_date_range_search_form")
  },data:data},helper ? helper.call(depth0, "message_date_from", "From Date", options) : helperMissing.call(depth0, "t", "message_date_from", "From Date", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" maxlength=\"50\" />\n    </div>\n  </div>\n  <div class=\"control-group\">\n    <label class=\"control-label\" for=\"";
  if (helper = helpers.formName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.formName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-dateEndSearchField\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.user_date_range_search_form")
  },data:data},helper ? helper.call(depth0, "message_date_to", "To Date", options) : helperMissing.call(depth0, "t", "message_date_to", "To Date", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n    <div class=\"controls\">\n      <input type=\"text\" id=\"";
  if (helper = helpers.formName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.formName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-dateEndSearchField\" class=\"dateEndSearchField\" name=\"end_time\" placeholder=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.user_date_range_search_form")
  },data:data},helper ? helper.call(depth0, "message_date_to", "To Date", options) : helperMissing.call(depth0, "t", "message_date_to", "To Date", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" maxlength=\"50\" />\n    </div>\n  </div>\n\n  <div class=\"control-group\">\n    <div class=\"controls\">\n      <button type=\"submit\" class=\"btn btn-primary userDateRangeSearchBtn\">\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.user_date_range_search_form")
  },data:data},helper ? helper.call(depth0, "find", "Find", options) : helperMissing.call(depth0, "t", "find", "Find", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </button>\n    </div>\n  </div>\n</div>\n";
  return buffer;
  });
  
      
  return templates['accounts/admin_tools/userDateRangeSearchForm'];
});
