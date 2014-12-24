define('jst/conversations/courseOptions', ["compiled/handlebars_helpers","i18n!conversations.course_options","jst/conversations/_courseOption","jst/conversations/_groupOption"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['conversations/courseOptions'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, options, self=this, functionType="function", escapeExpression=this.escapeExpression, blockHelperMissing=helpers.blockHelperMissing, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  ";
  stack1 = self.invokePartial(partials['conversations/courseOption'], 'conversations/courseOption', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    ";
  stack1 = self.invokePartial(partials['conversations/courseOption'], 'conversations/courseOption', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    ";
  stack1 = self.invokePartial(partials['conversations/groupOption'], 'conversations/groupOption', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;
  }

  buffer += "<option value=\"\">";
  if (helper = helpers.defaultOption) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.defaultOption); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</option>\n";
  options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}
  if (helper = helpers.favorites) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.favorites); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.favorites) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<optgroup label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.course_options")
  },data:data},helper ? helper.call(depth0, "course_options.more_courses", "More Courses", options) : helperMissing.call(depth0, "t", "course_options.more_courses", "More Courses", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n  ";
  options={hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data}
  if (helper = helpers.more) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.more); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.more) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</optgroup>\n<optgroup label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.course_options")
  },data:data},helper ? helper.call(depth0, "course_options.concluded", "Concluded", options) : helperMissing.call(depth0, "t", "course_options.concluded", "Concluded", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n  ";
  options={hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data}
  if (helper = helpers.concluded) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.concluded); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.concluded) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</optgroup>\n<optgroup label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.course_options")
  },data:data},helper ? helper.call(depth0, "course_options.groups", "Groups", options) : helperMissing.call(depth0, "t", "course_options.groups", "Groups", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n  ";
  options={hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data}
  if (helper = helpers.groups) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.groups); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.groups) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</optgroup>\n";
  return buffer;
  });
  
      
  return templates['conversations/courseOptions'];
});
