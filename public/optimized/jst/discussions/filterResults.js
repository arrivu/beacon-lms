define('jst/discussions/filterResults', ["compiled/handlebars_helpers"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['discussions/filterResults'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <li>"
    + escapeExpression((helper = helpers.convertApiUserContent || (depth0 && depth0.convertApiUserContent),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.entry)),stack1 == null || stack1 === false ? stack1 : stack1.message), options) : helperMissing.call(depth0, "convertApiUserContent", ((stack1 = (depth0 && depth0.entry)),stack1 == null || stack1 === false ? stack1 : stack1.message), options)))
    + "</li>\n  ";
  return buffer;
  }

  buffer += "<ul>\n  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.entry), (depth0 && depth0['in']), (depth0 && depth0.entries), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>\n\n";
  return buffer;
  });
  
      
  return templates['discussions/filterResults'];
});
