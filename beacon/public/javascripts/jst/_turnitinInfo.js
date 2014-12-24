define('jst/_turnitinInfo', ["compiled/handlebars_helpers","i18n!turnitin_info"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['_turnitinInfo'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <div class=\"turnitin_resubmit_container\">\n    <a href=\"#\" class=\"btn btn-small turnitin_resubmit_button\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("turnitin_info")
  },data:data},helper ? helper.call(depth0, "buttons.resubmit_to_turnitin", "Resubmit to Turnitin", options) : helperMissing.call(depth0, "t", "buttons.resubmit_to_turnitin", "Resubmit to Turnitin", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n  </div>\n  ";
  return buffer;
  }

  buffer += "<div class=\"turnitin_info turnitin_";
  if (helper = helpers.assetString) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.assetString); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" style=\"display: none;\">\n  <div>";
  if (helper = helpers.message) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.message); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.showResubmit), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  return buffer;
  });
  
Handlebars.registerPartial('turnitinInfo', templates['_turnitinInfo']);

      
  return templates['_turnitinInfo'];
});
