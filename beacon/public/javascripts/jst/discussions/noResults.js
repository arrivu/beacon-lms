define('jst/discussions/noResults', ["compiled/handlebars_helpers","i18n!discussions.no_results"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['discussions/noResults'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<p>\n  ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussions.no_results")
  },data:data},helper ? helper.call(depth0, "your_search_did_not_match_any_entries", "Your search did not match any entries.", options) : helperMissing.call(depth0, "t", "your_search_did_not_match_any_entries", "Your search did not match any entries.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</p>\n<p>\n";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussions.no_results")
  },data:data},helper ? helper.call(depth0, "suggestions", "Suggestions:", options) : helperMissing.call(depth0, "t", "suggestions", "Suggestions:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<ul>\n  <li>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussions.no_results")
  },data:data},helper ? helper.call(depth0, "make_sure_all_search_terms_are_spelled_correctly", "Make sure all search terms are spelled correctly.", options) : helperMissing.call(depth0, "t", "make_sure_all_search_terms_are_spelled_correctly", "Make sure all search terms are spelled correctly.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</li>\n  <li>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussions.no_results")
  },data:data},helper ? helper.call(depth0, "try_different_more_general_or_fewer_keywords", "Try different, more general, or fewer keywords.", options) : helperMissing.call(depth0, "t", "try_different_more_general_or_fewer_keywords", "Try different, more general, or fewer keywords.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</li>\n  <li>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussions.no_results")
  },data:data},helper ? helper.call(depth0, "try_disabling_the_unread_filter", "Try disabling the \"Unread\" filter.", options) : helperMissing.call(depth0, "t", "try_disabling_the_unread_filter", "Try disabling the \"Unread\" filter.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</li>\n</ul>\n";
  return buffer;
  });
  
      
  return templates['discussions/noResults'];
});
