define('jst/assignments/DateAvailableColumnView', ["compiled/handlebars_helpers","i18n!assignments.date_available_column_view","jst/assignments/_available_date_description"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['assignments/DateAvailableColumnView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <strong>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.date_available_column_view")
  },data:data},helper ? helper.call(depth0, "available", "Available", options) : helperMissing.call(depth0, "t", "available", "Available", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</strong>\n\n  <a title class=\"vdd_tooltip_link\"\n     aria-labelledby=\"vdd_tooltip_";
  if (helper = helpers.selector) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.selector); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n     data-tooltip-selector=\"#vdd_tooltip_";
  if (helper = helpers.selector) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.selector); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n     ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.linkHref), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n     >";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.date_available_column_view")
  },data:data},helper ? helper.call(depth0, "multiple_dates", "Multiple Dates", options) : helperMissing.call(depth0, "t", "multiple_dates", "Multiple Dates", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n\n  <div id=\"vdd_tooltip_";
  if (helper = helpers.selector) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.selector); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" style=\"display:none;\">\n    <dl class=\"vdd_tooltip_content dl-horizontal\">\n      ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.allDates), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </dl>\n  </div>\n\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "href=\"";
  if (helper = helpers.linkHref) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.linkHref); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n        <div class=\"clearfix\">\n          <dt>";
  if (helper = helpers.dueFor) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.dueFor); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</dt>\n          <dd>\n            <dd>\n              ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.available), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n              ";
  stack1 = self.invokePartial(partials['assignments/available_date_description'], 'assignments/available_date_description', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </dd>\n          </dd>\n        </div>\n      ";
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.date_available_column_view")
  },data:data},helper ? helper.call(depth0, "available", "Available", options) : helperMissing.call(depth0, "t", "available", "Available", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n              ";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  <span class=\"default-dates\">\n    ";
  stack1 = helpers['with'].call(depth0, (depth0 && depth0.defaultDates), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </span>\n";
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      ";
  stack1 = self.invokePartial(partials['assignments/available_date_description'], 'assignments/available_date_description', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, (depth0 && depth0.multipleDueDates), {hash:{},inverse:self.program(7, program7, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
  
      
  return templates['assignments/DateAvailableColumnView'];
});
