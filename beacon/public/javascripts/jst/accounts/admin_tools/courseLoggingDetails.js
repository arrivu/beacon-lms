define('jst/accounts/admin_tools/courseLoggingDetails', ["compiled/handlebars_helpers","i18n!accounts.admin_tools.course_logging_details"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['accounts/admin_tools/courseLoggingDetails'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <dt>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.course_logging_details")
  },data:data},helper ? helper.call(depth0, "event_sis_batch", "SIS Batch", options) : helperMissing.call(depth0, "t", "event_sis_batch", "SIS Batch", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ":</dt>\n    ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.links)),stack1 == null || stack1 === false ? stack1 : stack1.sis_batch), {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <dd>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.links)),stack1 == null || stack1 === false ? stack1 : stack1.sis_batch)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</dd>\n    ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      <dd>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.course_logging_details")
  },data:data},helper ? helper.call(depth0, "blank_placeholder", "-", options) : helperMissing.call(depth0, "t", "blank_placeholder", "-", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</dd>\n    ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <dt>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.course_logging_details")
  },data:data},helper ? helper.call(depth0, "copied_to_label", "Copied To", options) : helperMissing.call(depth0, "t", "copied_to_label", "Copied To", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ":</dt>\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.copied_to), {hash:{},inverse:self.program(4, program4, data),fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <dd>\n        ";
  stack1 = helpers['with'].call(depth0, (depth0 && depth0.copied_to), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </dd>\n    ";
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n          <a href=\"courses/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\n        ";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <dt>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.course_logging_details")
  },data:data},helper ? helper.call(depth0, "copied_from_label", "Copied From", options) : helperMissing.call(depth0, "t", "copied_from_label", "Copied From", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ":</dt>\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.copied_from), {hash:{},inverse:self.program(4, program4, data),fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;
  }
function program11(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <dd>\n        ";
  stack1 = helpers['with'].call(depth0, (depth0 && depth0.copied_from), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </dd>\n    ";
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <dt>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.course_logging_details")
  },data:data},helper ? helper.call(depth0, "reset_to_label", "Reset To", options) : helperMissing.call(depth0, "t", "reset_to_label", "Reset To", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ":</dt>\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.reset_to), {hash:{},inverse:self.program(4, program4, data),fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;
  }
function program14(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <dd>\n        ";
  stack1 = helpers['with'].call(depth0, (depth0 && depth0.reset_to), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </dd>\n    ";
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <dt>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.course_logging_details")
  },data:data},helper ? helper.call(depth0, "reset_from_label", "Reset From", options) : helperMissing.call(depth0, "t", "reset_from_label", "Reset From", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ":</dt>\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.reset_from), {hash:{},inverse:self.program(4, program4, data),fn:self.program(17, program17, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;
  }
function program17(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <dd>\n        ";
  stack1 = helpers['with'].call(depth0, (depth0 && depth0.reset_from), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </dd>\n    ";
  return buffer;
  }

function program19(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.course_logging_details")
  },data:data},helper ? helper.call(depth0, "Field", "Field", options) : helperMissing.call(depth0, "t", "Field", "Field", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</th>\n        <th>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.course_logging_details")
  },data:data},helper ? helper.call(depth0, "Value", "Value", options) : helperMissing.call(depth0, "t", "Value", "Value", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</th>\n      </tr>\n    </thead>\n    <tbody>\n      ";
  stack1 = (helper = helpers.eachProp || (depth0 && depth0.eachProp),options={hash:{},inverse:self.noop,fn:self.program(20, program20, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.event_data), options) : helperMissing.call(depth0, "eachProp", (depth0 && depth0.event_data), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </tbody>\n  </table>\n";
  return buffer;
  }
function program20(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n        <tr>\n          <td>";
  if (helper = helpers.property) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.property); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n          <td>";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n        </tr>\n      ";
  return buffer;
  }

function program22(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.course_logging_details")
  },data:data},helper ? helper.call(depth0, "Field", "Field", options) : helperMissing.call(depth0, "t", "Field", "Field", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</th>\n        <th>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.course_logging_details")
  },data:data},helper ? helper.call(depth0, "From", "From", options) : helperMissing.call(depth0, "t", "From", "From", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</th>\n        <th>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.course_logging_details")
  },data:data},helper ? helper.call(depth0, "To", "To", options) : helperMissing.call(depth0, "t", "To", "To", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</th>\n      </tr>\n    </thead>\n    <tbody>\n      ";
  stack1 = (helper = helpers.eachProp || (depth0 && depth0.eachProp),options={hash:{},inverse:self.noop,fn:self.program(23, program23, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.event_data), options) : helperMissing.call(depth0, "eachProp", (depth0 && depth0.event_data), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </tbody>\n  </table>\n";
  return buffer;
  }
function program23(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n        <tr>\n          <td>";
  if (helper = helpers.property) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.property); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n          ";
  stack1 = helpers['with'].call(depth0, (depth0 && depth0.value), {hash:{},inverse:self.noop,fn:self.program(24, program24, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </tr>\n      ";
  return buffer;
  }
function program24(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n            <td>";
  if (helper = helpers.from) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.from); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n            <td>";
  if (helper = helpers.to) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.to); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n          ";
  return buffer;
  }

  buffer += "<dl class=\"dl-horizontal\">\n  <dt>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.course_logging_details")
  },data:data},helper ? helper.call(depth0, "event_id", "Event Id", options) : helperMissing.call(depth0, "t", "event_id", "Event Id", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ":</dt>\n  <dd>";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</dd>\n  <dt>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.course_logging_details")
  },data:data},helper ? helper.call(depth0, "date", "Date", options) : helperMissing.call(depth0, "t", "date", "Date", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ":</dt>\n  <dd>"
    + escapeExpression((helper = helpers.tDateToString || (depth0 && depth0.tDateToString),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.created_at), "medium", options) : helperMissing.call(depth0, "tDateToString", (depth0 && depth0.created_at), "medium", options)))
    + "</dd>\n  <dt>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.course_logging_details")
  },data:data},helper ? helper.call(depth0, "time", "Time", options) : helperMissing.call(depth0, "t", "time", "Time", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ":</dt>\n  <dd>"
    + escapeExpression((helper = helpers.tTimeToString || (depth0 && depth0.tTimeToString),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.created_at), "tiny", options) : helperMissing.call(depth0, "tTimeToString", (depth0 && depth0.created_at), "tiny", options)))
    + "</dd>\n  <dt>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.course_logging_details")
  },data:data},helper ? helper.call(depth0, "user", "User", options) : helperMissing.call(depth0, "t", "user", "User", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ":</dt>\n  <dd>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.user)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</dd>\n  <dt>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.course_logging_details")
  },data:data},helper ? helper.call(depth0, "event_source_label", "Source", options) : helperMissing.call(depth0, "t", "event_source_label", "Source", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ":</dt>\n  <dd>";
  if (helper = helpers.event_source_present) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.event_source_present); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</dd>\n  ";
  stack1 = (helper = helpers.ifEqual || (depth0 && depth0.ifEqual),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.event_source), "sis", options) : helperMissing.call(depth0, "ifEqual", (depth0 && depth0.event_source), "sis", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  <dt>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.course_logging_details")
  },data:data},helper ? helper.call(depth0, "event_type_label", "Type", options) : helperMissing.call(depth0, "t", "event_type_label", "Type", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ":</dt>\n  <dd>";
  if (helper = helpers.event_type_present) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.event_type_present); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</dd>\n  ";
  stack1 = (helper = helpers.ifEqual || (depth0 && depth0.ifEqual),options={hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.event_type), "copied_to", options) : helperMissing.call(depth0, "ifEqual", (depth0 && depth0.event_type), "copied_to", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  stack1 = (helper = helpers.ifEqual || (depth0 && depth0.ifEqual),options={hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.event_type), "copied_from", options) : helperMissing.call(depth0, "ifEqual", (depth0 && depth0.event_type), "copied_from", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  stack1 = (helper = helpers.ifEqual || (depth0 && depth0.ifEqual),options={hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.event_type), "reset_to", options) : helperMissing.call(depth0, "ifEqual", (depth0 && depth0.event_type), "reset_to", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  stack1 = (helper = helpers.ifEqual || (depth0 && depth0.ifEqual),options={hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.event_type), "reset_from", options) : helperMissing.call(depth0, "ifEqual", (depth0 && depth0.event_type), "reset_from", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</dl>\n\n";
  stack1 = (helper = helpers.ifEqual || (depth0 && depth0.ifEqual),options={hash:{},inverse:self.noop,fn:self.program(19, program19, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.event_type), "created", options) : helperMissing.call(depth0, "ifEqual", (depth0 && depth0.event_type), "created", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  stack1 = (helper = helpers.ifEqual || (depth0 && depth0.ifEqual),options={hash:{},inverse:self.noop,fn:self.program(22, program22, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.event_type), "updated", options) : helperMissing.call(depth0, "ifEqual", (depth0 && depth0.event_type), "updated", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  });
  
      
  return templates['accounts/admin_tools/courseLoggingDetails'];
});
