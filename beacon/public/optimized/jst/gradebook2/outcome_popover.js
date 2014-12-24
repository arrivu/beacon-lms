define('jst/gradebook2/outcome_popover', ["compiled/handlebars_helpers","i18n!gradebook2.outcome_popover"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['gradebook2/outcome_popover'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <div class=\"chart-image\"></div>\n      <ol class=\"ratings\">\n      ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.ratings), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </ol>\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n        <li class=\"rating\"><span class=\"legend-color\" style=\"background-color: ";
  if (helper = helpers.color) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.color); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" /> ";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</li>\n      ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      <p><img src=\"/images/pie-chart-disabled.png\" /></p>\n      <p>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("gradebook2.outcome_popover")
  },data:data},helper ? helper.call(depth0, "no_results", "(no results)", options) : helperMissing.call(depth0, "t", "no_results", "(no results)", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n    ";
  return buffer;
  }

  buffer += "<div class=\"outcome-details carat-bottom\">\n  <div class=\"title\">";
  if (helper = helpers.path) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.path); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n  <div class=\"chart\">\n    ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.ratings)),stack1 == null || stack1 === false ? stack1 : stack1.result_count), {hash:{},inverse:self.program(4, program4, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n  <div class=\"mastery\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("gradebook2.outcome_popover")
  },data:data},helper ? helper.call(depth0, "mastery_set_at", "Mastery set at", options) : helperMissing.call(depth0, "t", "mastery_set_at", "Mastery set at", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ": ";
  if (helper = helpers.mastery_points) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.mastery_points); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n  <div class=\"description\">";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n  <div class=\"view-more\"><a href=\"";
  if (helper = helpers.url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("gradebook2.outcome_popover")
  },data:data},helper ? helper.call(depth0, "view_more_details", "view more details", options) : helperMissing.call(depth0, "t", "view_more_details", "view more details", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></div>\n</div>\n";
  return buffer;
  });
  
      
  return templates['gradebook2/outcome_popover'];
});
