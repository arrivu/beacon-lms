define('jst/_avatar', ["compiled/handlebars_helpers"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['_avatar'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helperMissing=helpers.helperMissing, self=this, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  ";
  stack1 = (helper = helpers.ifAny || (depth0 && depth0.ifAny),options={hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.avatar_url), (depth0 && depth0.avatar_image_url), options) : helperMissing.call(depth0, "ifAny", (depth0 && depth0.avatar_url), (depth0 && depth0.avatar_image_url), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.alreadyEscaped), {hash:{},inverse:self.program(6, program6, data),fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      <a\n        ";
  stack1 = (helper = helpers.ifAny || (depth0 && depth0.ifAny),options={hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.url), (depth0 && depth0.html_url), options) : helperMissing.call(depth0, "ifAny", (depth0 && depth0.url), (depth0 && depth0.html_url), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        class=\"avatar\"\n        style=\"background-image: url(";
  stack1 = (helper = helpers.or || (depth0 && depth0.or),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.avatar_url), (depth0 && depth0.avatar_image_url), options) : helperMissing.call(depth0, "or", (depth0 && depth0.avatar_url), (depth0 && depth0.avatar_image_url), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ")\">\n        <span class=\"screenreader-only\">";
  stack1 = (helper = helpers.or || (depth0 && depth0.or),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.display_name), (depth0 && depth0.short_name), options) : helperMissing.call(depth0, "or", (depth0 && depth0.display_name), (depth0 && depth0.short_name), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span></a>\n    ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "href=\"";
  stack1 = (helper = helpers.or || (depth0 && depth0.or),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.url), (depth0 && depth0.html_url), options) : helperMissing.call(depth0, "or", (depth0 && depth0.url), (depth0 && depth0.html_url), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      <a\n        ";
  stack1 = (helper = helpers.ifAny || (depth0 && depth0.ifAny),options={hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.url), (depth0 && depth0.html_url), options) : helperMissing.call(depth0, "ifAny", (depth0 && depth0.url), (depth0 && depth0.html_url), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        class=\"avatar\"\n        style=\"background-image: url("
    + escapeExpression((helper = helpers.or || (depth0 && depth0.or),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.avatar_url), (depth0 && depth0.avatar_image_url), options) : helperMissing.call(depth0, "or", (depth0 && depth0.avatar_url), (depth0 && depth0.avatar_image_url), options)))
    + ")\"\n        ><span class=\"screenreader-only\">"
    + escapeExpression((helper = helpers.or || (depth0 && depth0.or),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.display_name), (depth0 && depth0.short_name), options) : helperMissing.call(depth0, "or", (depth0 && depth0.display_name), (depth0 && depth0.short_name), options)))
    + "</span></a>\n    ";
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "href=\""
    + escapeExpression((helper = helpers.or || (depth0 && depth0.or),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.url), (depth0 && depth0.html_url), options) : helperMissing.call(depth0, "or", (depth0 && depth0.url), (depth0 && depth0.html_url), options)))
    + "\"";
  return buffer;
  }

  buffer += "\n";
  stack1 = helpers['if'].call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
  
Handlebars.registerPartial('avatar', templates['_avatar']);

      
  return templates['_avatar'];
});
