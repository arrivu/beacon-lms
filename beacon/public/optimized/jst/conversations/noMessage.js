define('jst/conversations/noMessage', ["compiled/handlebars_helpers","i18n!conversations.no_message"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['conversations/noMessage'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.no_message")
  },data:data},helper ? helper.call(depth0, "batch_selected", "Multiple Conversations Selected", options) : helperMissing.call(depth0, "t", "batch_selected", "Multiple Conversations Selected", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.no_message")
  },data:data},helper ? helper.call(depth0, "no_conversations_selected", "No Conversations Selected", options) : helperMissing.call(depth0, "t", "no_conversations_selected", "No Conversations Selected", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;
  }

  buffer += "<div class=\"no-messages\">\n  <i class=\"icon-email\"></i>\n\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.batch), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  return buffer;
  });
  
      
  return templates['conversations/noMessage'];
});
