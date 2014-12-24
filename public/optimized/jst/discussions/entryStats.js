define('jst/discussions/entryStats', ["compiled/handlebars_helpers","i18n!discussions.entry_stats"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['discussions/entryStats'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<a href='#'>\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.moreText), {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</a>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n  ";
  if (helper = helpers.moreText) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.moreText); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussions.entry_stats")
  },data:data},helper ? helper.call(depth0, "show_more", "Show more", options) : helperMissing.call(depth0, "t", "show_more", "Show more", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, (depth0 && depth0.showMore), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<div class='new-and-total-badge'>\n  <span class=\"new-items\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.stats)),stack1 == null || stack1 === false ? stack1 : stack1.unread)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n  <span class=\"total-items\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.stats)),stack1 == null || stack1 === false ? stack1 : stack1.total)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n</div>\n";
  return buffer;
  });
  
      
  return templates['discussions/entryStats'];
});
