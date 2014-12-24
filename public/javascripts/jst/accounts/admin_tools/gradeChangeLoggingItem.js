define('jst/accounts/admin_tools/gradeChangeLoggingItem', ["compiled/handlebars_helpers","i18n!accounts.admin_tools.grade_change_logging_item"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['accounts/admin_tools/gradeChangeLoggingItem'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n<td colspan=\"6\">\n  ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.grade_change_logging_item")
  },data:data},helper ? helper.call(depth0, "event_type.corrupted", "Details Not Available", options) : helperMissing.call(depth0, "t", "event_type.corrupted", "Details Not Available", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</td>\n";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<td>\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.grade_before), {hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</td>\n<td>\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.grade_after), {hash:{},inverse:self.program(6, program6, data),fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</td>\n<td>\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.grader), {hash:{},inverse:self.program(6, program6, data),fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</td>\n<td>\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.student), {hash:{},inverse:self.program(6, program6, data),fn:self.program(12, program12, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</td>\n<td>\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.course), {hash:{},inverse:self.program(6, program6, data),fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</td>\n<td>\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.assignment), {hash:{},inverse:self.program(6, program6, data),fn:self.program(16, program16, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</td>\n";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    ";
  if (helper = helpers.grade_before) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.grade_before); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n  ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.grade_change_logging_item")
  },data:data},helper ? helper.call(depth0, "blank_placeholder", "-", options) : helperMissing.call(depth0, "t", "blank_placeholder", "-", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    ";
  if (helper = helpers.grade_after) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.grade_after); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n  ";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.grader)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n  ";
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.student)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n  ";
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.course)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n  ";
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.assignment)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n  ";
  return buffer;
  }

  buffer += "<td>\n  "
    + escapeExpression((helper = helpers.tDateToString || (depth0 && depth0.tDateToString),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.created_at), "medium", options) : helperMissing.call(depth0, "tDateToString", (depth0 && depth0.created_at), "medium", options)))
    + "\n</td>\n<td>\n  "
    + escapeExpression((helper = helpers.tTimeToString || (depth0 && depth0.tTimeToString),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.created_at), "tiny", options) : helperMissing.call(depth0, "tTimeToString", (depth0 && depth0.created_at), "tiny", options)))
    + "\n</td>\n";
  stack1 = (helper = helpers.ifEqual || (depth0 && depth0.ifEqual),options={hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.event_type), "corrupted", options) : helperMissing.call(depth0, "ifEqual", (depth0 && depth0.event_type), "corrupted", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
  
      
  return templates['accounts/admin_tools/gradeChangeLoggingItem'];
});
