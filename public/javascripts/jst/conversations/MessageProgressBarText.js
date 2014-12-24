define('jst/conversations/MessageProgressBarText', ["compiled/handlebars_helpers","i18n!conversations.message_progress_bar_text"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['conversations/MessageProgressBarText'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.message_progress_bar_text")
  },data:data},helper ? helper.call(depth0, "error_sending_message", "Error sending message:", options) : helperMissing.call(depth0, "t", "error_sending_message", "Error sending message:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  <em>\n    ";
  if (helper = helpers.error) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.error); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n  </em>\n";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  ";
  stack1 = (helper = helpers.ifEqual || (depth0 && depth0.ifEqual),options={hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.status), "complete", options) : helperMissing.call(depth0, "ifEqual", (depth0 && depth0.status), "complete", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.message_progress_bar_text"),
    'w0': ("<b>$1</b>")
  },data:data},helper ? helper.call(depth0, "done_sending_message", "Sent *%{message_preview}* to *%{num_people}*", options) : helperMissing.call(depth0, "t", "done_sending_message", "Sent *%{message_preview}* to *%{num_people}*", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.message_progress_bar_text"),
    'w0': ("<b>$1</b>")
  },data:data},helper ? helper.call(depth0, "sending_message", "Sending *%{message_preview}* to *%{num_people}*", options) : helperMissing.call(depth0, "t", "sending_message", "Sending *%{message_preview}* to *%{num_people}*", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;
  }

  stack1 = (helper = helpers.ifEqual || (depth0 && depth0.ifEqual),options={hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.status), "error", options) : helperMissing.call(depth0, "ifEqual", (depth0 && depth0.status), "error", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
  
      
  return templates['conversations/MessageProgressBarText'];
});
