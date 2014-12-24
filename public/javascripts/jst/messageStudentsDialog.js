define('jst/messageStudentsDialog', ["compiled/handlebars_helpers","compiled/util/registerTemplateCss","i18n!message_students_dialog","jst/_messageStudentsWhoRecipientList"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['messageStudentsDialog'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.recipientGroups)),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n      <input type=\"hidden\" name=\"recipientGroupName\" value=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.recipientGroups)),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" />\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <select name=\"recipientGroupName\" id=\"message-recipients-group\">\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.recipientGroups), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </select>\n    ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n          <option value=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</option>\n        ";
  return buffer;
  }

  buffer += "<div class=\"message-students-dialog form-dialog-content\">\n  <div class=\"message-recipients-group-container\">\n    <label for=\"message-recipients-group\">\n     ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("message_students_dialog")
  },data:data},helper ? helper.call(depth0, "recipients", "Recipients:", options) : helperMissing.call(depth0, "t", "recipients", "Recipients:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </label>\n\n    ";
  stack1 = (helper = helpers.ifEqual || (depth0 && depth0.ifEqual),options={hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.recipientGroups)),stack1 == null || stack1 === false ? stack1 : stack1.length), 1, options) : helperMissing.call(depth0, "ifEqual", ((stack1 = (depth0 && depth0.recipientGroups)),stack1 == null || stack1 === false ? stack1 : stack1.length), 1, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n\n  <div id=\"message-recipients\">\n    ";
  stack1 = self.invokePartial(partials.messageStudentsWhoRecipientList, 'messageStudentsWhoRecipientList', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n\n  <textarea name=body></textarea>\n\n</div>\n<div class=\"form-controls\">\n  <button class=\"btn dialog_closer btn-secondary\" type=\"button\"\n    data-text-while-loading='";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("message_students_dialog")
  },data:data},helper ? helper.call(depth0, "#buttons.sending", "Sending...", options) : helperMissing.call(depth0, "t", "#buttons.sending", "Sending...", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'>\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("message_students_dialog")
  },data:data},helper ? helper.call(depth0, "#buttons.cancel", "Cancel", options) : helperMissing.call(depth0, "t", "#buttons.cancel", "Cancel", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </button>\n  <button class=\"btn btn-primary\"\n    data-text-while-loading='";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("message_students_dialog")
  },data:data},helper ? helper.call(depth0, "#buttons.sending", "Sending...", options) : helperMissing.call(depth0, "t", "#buttons.sending", "Sending...", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'\n    data-text-when-loaded='";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("message_students_dialog")
  },data:data},helper ? helper.call(depth0, "#buttons.sent", "Sent!", options) : helperMissing.call(depth0, "t", "#buttons.sent", "Sent!", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'>\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("message_students_dialog")
  },data:data},helper ? helper.call(depth0, "#buttons.send_message", "Send Message", options) : helperMissing.call(depth0, "t", "#buttons.send_message", "Send Message", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </button>\n\n</div>\n";
  return buffer;
  });
  
      
arguments[1]('messageStudentsDialog', ".message-students-dialog textarea{-moz-box-sizing:border-box;box-sizing:border-box;width:100%;height:200px;}#message-recipients{margin-bottom:10px;max-height:100px;overflow:auto;}.message-recipients-group-container{line-height:30px;margin-bottom:10px;}.message-recipients-group-container label{font-weight:bold;margin-bottom:0;}#message-recipients-group{width:auto;margin-bottom:0;}");

  return templates['messageStudentsDialog'];
});
