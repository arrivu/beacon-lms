define('jst/discussions/entry_with_replies', ["compiled/handlebars_helpers","jst/discussions/_deleted_entry","jst/discussions/_entry_content","jst/discussions/_reply_form"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['discussions/entry_with_replies'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  return "deleted-discussion-entry";
  }

function program3(depth0,data) {
  
  
  return "can-reply";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      ";
  stack1 = self.invokePartial(partials['discussions/deleted_entry'], 'discussions/deleted_entry', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      ";
  stack1 = self.invokePartial(partials['discussions/entry_content'], 'discussions/entry_content', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    ";
  stack1 = self.invokePartial(partials['discussions/reply_form'], 'discussions/reply_form', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  <div class=\"bottom-reply-with-box\">\n    ";
  stack1 = self.invokePartial(partials['discussions/reply_form'], 'discussions/reply_form', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n";
  return buffer;
  }

  buffer += "<article class=\"discussion_entry can_be_marked_as_read ";
  if (helper = helpers.read_state) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.read_state); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-onload ";
  if (helper = helpers.read_state) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.read_state); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.deleted), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.canReply), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n         data-mark-read-url=\"";
  if (helper = helpers.mark_read_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.mark_read_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n  <a href=\"#\"\n     class=\"discussion-read-state-btn\"\n     role=\"button\"\n     title=\"\"\n     data-tooltip='{ \"position\": \"top\", \"collision\": \"none\" }'\n     data-event=\"toggleRead\">\n    <div class=\"discussion-read-state tooltip data-tooltip\"></div>\n  </a>\n  <div class=\"entry-content\" data-should-position>\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.deleted), {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.allowsThreadedReplies), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</article>\n<div class=\"replies hide-if-collapsed\"></div>\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.allowsSideComments), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n\n";
  return buffer;
  });
  
      
  return templates['discussions/entry_with_replies'];
});
