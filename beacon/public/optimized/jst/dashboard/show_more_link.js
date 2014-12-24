define('jst/dashboard/show_more_link', ["compiled/handlebars_helpers","i18n!dashboard.show_more_link"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['dashboard/show_more_link'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, helperMissing=helpers.helperMissing, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <span aria-hidden=\"true\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("dashboard.show_more_link")
  },data:data},helper ? helper.call(depth0, "show_less", "Show Less", options) : helperMissing.call(depth0, "t", "show_less", "Show Less", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " <i class=\"icon-mini-arrow-up\"></i></span>\n";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <span aria-hidden=\"true\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("dashboard.show_more_link")
  },data:data},helper ? helper.call(depth0, "show_more", "Show More", options) : helperMissing.call(depth0, "t", "show_more", "Show More", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " <i class=\"icon-mini-arrow-down\"></i></span>\n";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, (depth0 && depth0.expanded), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<span class='screenreader-only'>";
  if (helper = helpers.assistiveText) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.assistiveText); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>";
  return buffer;
  });
  
      
  return templates['dashboard/show_more_link'];
});
