define('jst/gradebook2/outcome_gradebook', ["compiled/handlebars_helpers","i18n!gradebook2.outcome_gradebook"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['gradebook2/outcome_gradebook'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<div class=\"outcome-gradebook-sidebar\">\n  <div class=\"outcome-gradebook-sidebar-header\">\n    <a href=\"#\" class=\"icon-arrow-open-right sidebar-toggle\">\n      <span class=\"screenreader-only\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("gradebook2.outcome_gradebook")
  },data:data},helper ? helper.call(depth0, "toggle_sidebar", "Toggle Sidebar", options) : helperMissing.call(depth0, "t", "toggle_sidebar", "Toggle Sidebar", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n    </a>\n  </div>\n\n  <div class=\"outcome-gradebook-sidebar-content\">\n    <ul class=\"checkboxes unstyled\">\n      <li>"
    + escapeExpression((helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.mastery), options) : helperMissing.call(depth0, "view", (depth0 && depth0.mastery), options)))
    + "</li>\n      <li>"
    + escapeExpression((helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0['near-mastery']), options) : helperMissing.call(depth0, "view", (depth0 && depth0['near-mastery']), options)))
    + "</li>\n      <li>"
    + escapeExpression((helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.remedial), options) : helperMissing.call(depth0, "view", (depth0 && depth0.remedial), options)))
    + "</li>\n    </ul>\n    <ul class=\"operations unstyled\">\n      <li><a href=\"#\" class=\"export-content icon-export-content\"><span class=\"operation-label\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("gradebook2.outcome_gradebook")
  },data:data},helper ? helper.call(depth0, "export_report", "export report", options) : helperMissing.call(depth0, "t", "export_report", "export report", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span></a></li>\n    </ul>\n  </div>\n</div>\n\n<div class=\"outcome-gradebook-wrapper\"></div>\n";
  return buffer;
  });
  
      
  return templates['gradebook2/outcome_gradebook'];
});
