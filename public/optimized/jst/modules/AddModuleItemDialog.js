define('jst/modules/AddModuleItemDialog', ["compiled/handlebars_helpers","i18n!modules.add_module_item_dialog"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['modules/AddModuleItemDialog'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n      <option value=\"";
  if (helper = helpers.type) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.type); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</option>\n      ";
  return buffer;
  }

  buffer += "<div class=\"control-group\">\n  <label class=\"control-label\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("modules.add_module_item_dialog")
  },data:data},helper ? helper.call(depth0, "item_type", "Type:", options) : helperMissing.call(depth0, "t", "item_type", "Type:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n  <div class=\"controls\">\n    <select name=\"module_item[type]\">\n      ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.moduleItemTypes), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </select>\n  </div>\n</div>\n\n<div id=\"moduleItemOptionsContainer\"></div>\n";
  return buffer;
  });
  
      
  return templates['modules/AddModuleItemDialog'];
});
