define('jst/assignments/ToggleShowBy', ["compiled/handlebars_helpers","i18n!assignments.toggle_show_by"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['assignments/ToggleShowBy'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n<span class=\"show-by-label\">\n  ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.toggle_show_by")
  },data:data},helper ? helper.call(depth0, "show_by", "Show by:", options) : helperMissing.call(depth0, "t", "show_by", "Show by:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</span>\n<span id=\"show_by\">\n  <input\n    id=\"show_by_date\"\n    name=\"show_by\"\n    type=\"radio\"\n    "
    + escapeExpression((helper = helpers.checkedIf || (depth0 && depth0.checkedIf),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.showByDate), options) : helperMissing.call(depth0, "checkedIf", (depth0 && depth0.showByDate), options)))
    + "\n  >\n  <label for=\"show_by_date\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.toggle_show_by")
  },data:data},helper ? helper.call(depth0, "date", "Date", options) : helperMissing.call(depth0, "t", "date", "Date", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n\n  <input\n    id=\"show_by_type\"\n    name=\"show_by\"\n    type=\"radio\"\n    "
    + escapeExpression((helper = helpers.checkedUnless || (depth0 && depth0.checkedUnless),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.showByDate), options) : helperMissing.call(depth0, "checkedUnless", (depth0 && depth0.showByDate), options)))
    + "\n  >\n  <label for=\"show_by_type\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.toggle_show_by")
  },data:data},helper ? helper.call(depth0, "type", "Type", options) : helperMissing.call(depth0, "t", "type", "Type", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n</div>\n";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, (depth0 && depth0.visible), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
  
      
  return templates['assignments/ToggleShowBy'];
});
